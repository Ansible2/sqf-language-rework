import {
    CompletionItem,
    CompletionList,
    CompletionParams,
    createConnection,
    Hover,
    HoverParams,
    InitializeParams,
    InitializeResult,
    ProposedFeatures,
    RequestHandler,
    ServerRequestHandler,
    TextDocuments,
    TextDocumentSyncKind,
    _Connection,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { HoverProvider } from "./providers/Hover.provider";
import { CompletionProvider } from "./providers/Completion.provider";
import { ITextDocuments } from "./types/textDocument.types";
import { ISQFServer } from "./types/server.types";
import {
    IHoverProvider,
    ICompletionProvider,
    SQFItem,
    SQFCompletionItemKind,
    SQFCompletionItemTag,
} from "./types/providers.types";
import { SQFGrammarType, SQFItemConfig } from "../../../configuration/grammars/sqf.namespace";
import { getSqfItemConfigs } from "../../../configuration/grammars/config";

const INDENT = "&ensp;&ensp;&ensp;&ensp;";
const SMALL_INDENT = "&ensp;&ensp;";
const SECTION_HEADER = "### ";
const SECTION_SUB_HEADER_INDENTED = `#### ${SMALL_INDENT}`;
const SECTION_SUB_HEADER = `#### `;
const SECTION_SPLITTER = "\n\n---\n\n";
const SYNTAX_SECTION_SPLITTER = SECTION_SPLITTER;
const EXAMPLE_SECTION_SPLITTER = "\n\n";
const EXAMPLE_AND_HEADER_SPLITTER = "\n\n";

export class NodeSQFServer implements ISQFServer {
    public readonly hoverProvider: IHoverProvider;
    public readonly completionProvider: ICompletionProvider;

    private readonly textDocuments: TextDocuments<TextDocument>;
    private readonly sqfItems: Map<string, SQFItem>;
    private readonly connection: _Connection;
    private readonly hasCompletionResolver: boolean = false;

    /* ----------------------------------------------------------------------------
		constructor
	---------------------------------------------------------------------------- */
    constructor() {
        this.sqfItems = this.initializeSqfItemsMap();
        this.connection = createConnection(ProposedFeatures.all);
        this.textDocuments = new TextDocuments(TextDocument);

        this.hoverProvider = new HoverProvider(this);
        this.completionProvider = new CompletionProvider(this);

        // Create a connection for the server, using Node's IPC as a transport.
        // Also include all preview / proposed LSP features.
        this.connection.onInitialize(this.initializeConnection.bind(this));
        this.connection.onHover(
            this.hoverProvider.onHover.bind(this.hoverProvider) as ServerRequestHandler<
                HoverParams,
                Hover | null | undefined,
                never,
                void
            >
        );

        this.connection.onCompletion(
            this.completionProvider.onCompletion.bind(
                this.completionProvider
            ) as unknown as ServerRequestHandler<
                CompletionParams,
                CompletionList | CompletionItem[] | null | undefined,
                CompletionItem[],
                void
            >
        );

        const completionResolver = this.completionProvider.onCompletionResolve;
        if (completionResolver) {
            this.hasCompletionResolver = true;
            this.connection.onCompletionResolve(
                completionResolver.bind(this.completionProvider) as unknown as RequestHandler<
                    CompletionItem,
                    CompletionItem,
                    void
                >
            );
        }

        // Make the text document manager listen on the connection
        /// for open, change and close text document events
        this.textDocuments.listen(this.connection);
        // Listen on the connection
        this.connection.listen();
    }

    /* ----------------------------------------------------------------------------
		initializeConnection
	---------------------------------------------------------------------------- */
    public initializeConnection(params: InitializeParams): InitializeResult {
        const init: InitializeResult = {
            capabilities: {
                textDocumentSync: TextDocumentSyncKind.Incremental,
                hoverProvider: true,
                completionProvider: {
                    resolveProvider: this.hasCompletionResolver,
                    triggerCharacters: ["#"], // # does not trigger for things such as macros
                },
            },
        };

        return init;
    }

    /* ----------------------------------------------------------------------------
		getSQFItemMap
	---------------------------------------------------------------------------- */
    public getSQFItemMap(): Map<string, SQFItem> {
        return this.sqfItems;
    }

    private initializeSqfItemsMap(): Map<string, SQFItem> {
        const map = new Map<string, SQFItem>();

        const itemConfigs = getSqfItemConfigs();
        itemConfigs.forEach((itemConfig: SQFItemConfig) => {
            const item = this.convertItemConfig(itemConfig);
            map.set(item.label.toLowerCase(), item);
        });

        return map;
    }

    private convertItemConfig(itemConfig: SQFItemConfig): SQFItem {
        let filterText: string | undefined;
        let insertText: string | undefined;

        const label = itemConfig.configuration.label;
        // items with leading "#" (preprocessor commands) are
        // filiterd out when included with a # as their filtertext (label by default).
        if (label.startsWith("#")) {
            const labelWithoutHashtag = label.slice(1, label.length);
            filterText = labelWithoutHashtag;
            insertText = labelWithoutHashtag;
        }

        const tags: SQFCompletionItemTag[] = [];
        if (itemConfig.configuration.deprecated) {
            tags.push(SQFCompletionItemTag.Deprecated);
        }

        return {
            label,
            documentation: {
                kind: "markdown",
                value: this.convertDocumentation(itemConfig),
            },
            kind: this.getCompletionItemKindFromGrammarType(itemConfig.configuration.grammarType),
            filterText,
            insertText,
            tags,
        };
    }

    private convertDocumentation(itemConfig: SQFItemConfig): string {
        const document: string[] = [];
        const itemDocumentation = itemConfig.documentation;

        const documentationLink = itemDocumentation.documentationLink;
        if (documentationLink) {
            document.push(`*[Open Documentation](${documentationLink})*`);
        }

        let localityLine = [];
        if (itemDocumentation.argumentLocality) {
            localityLine.push(`[${itemDocumentation.argumentLocality}]`);
        }
        if (itemDocumentation.effectLocality) {
            localityLine.push(`[${itemDocumentation.effectLocality}]`);
        }
        if (itemDocumentation.serverExecution) {
            localityLine.push("[Server Executed]");
        }
        if (localityLine.length) {
            document.push(localityLine.join(" "));
        }

        if (itemDocumentation.description) {
            document.push(`${SECTION_HEADER}Description:\n\n${itemDocumentation.description}`);
        }

        if (itemDocumentation.syntaxes?.length) {
            const syntaxSections: string[] = [];
            itemDocumentation.syntaxes.forEach((syntax, index) => {
                const syntaxSection: string[] = [];
                syntaxSection.push(`${SECTION_HEADER}Syntax ${index + 1}:`);
                syntaxSection.push(`${SMALL_INDENT}${syntax.outline}`);

                if (syntax.parameters.length) {
                    syntaxSection.push(`${SECTION_SUB_HEADER_INDENTED}Parameters:`);
                    syntax.parameters.forEach((parameter) => {
                        // formatting for bullet lists lists
                        const description = parameter.description?.replaceAll("\n* ", "\n\t* ");
                        syntaxSection.push(`* \`${parameter.name}\` - ${description}`);
                    });
                }

                syntaxSection.push(`${SECTION_SUB_HEADER_INDENTED}Returns:`);
                syntaxSection.push(`${INDENT}${syntax.returns}`);
                syntaxSections.push(syntaxSection.join("\n\n"));
            });

            document.push(syntaxSections.join(SYNTAX_SECTION_SPLITTER));
        }

        if (itemDocumentation.examples?.length) {
            const exampleSections: string[] = [];
            itemDocumentation.examples.forEach((example, index) => {
                const exampleSection: string[] = [];
                exampleSection.push(`\n${SECTION_SUB_HEADER}Example ${index + 1}:`);
                exampleSection.push(example.text);
                exampleSections.push(exampleSection.join(EXAMPLE_AND_HEADER_SPLITTER));
            });

            document.push(exampleSections.join(EXAMPLE_SECTION_SPLITTER));
        }

        return document.join(SECTION_SPLITTER);
    }

    private getCompletionItemKindFromGrammarType(
        grammarType: SQFGrammarType | string
    ): SQFCompletionItemKind {
        switch (grammarType) {
            case SQFGrammarType.ReservedLiteral:
            case SQFGrammarType.ControlStatement:
            case SQFGrammarType.AccessModifier: {
                return SQFCompletionItemKind.Keyword;
            }
            case SQFGrammarType.ComparisonOperator: {
                return SQFCompletionItemKind.Operator;
            }
            case SQFGrammarType.ConditionOperator: {
                return SQFCompletionItemKind.Operator;
            }
            case SQFGrammarType.ManipulativeOperator: {
                return SQFCompletionItemKind.Operator;
            }
            case SQFGrammarType.BooleanLiteral:
            case SQFGrammarType.NullLiteral: {
                return SQFCompletionItemKind.Constant;
            }
            case SQFGrammarType.PropertyAccessor: {
                return SQFCompletionItemKind.Property;
            }
            case SQFGrammarType.Function:
            case SQFGrammarType.Command:
            default: {
                return SQFCompletionItemKind.Function;
            }
        }
    }

    /* ----------------------------------------------------------------------------
		getTextDocuments
	---------------------------------------------------------------------------- */
    public getTextDocuments(): ITextDocuments {
        return this.textDocuments as ITextDocuments;
    }
}
