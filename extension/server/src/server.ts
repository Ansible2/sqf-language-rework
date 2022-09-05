import {
    CompletionItem,
    CompletionItemKind,
    CompletionItemLabelDetails,
    CompletionItemTag,
    createConnection,
    HandlerResult,
    HoverParams,
    InitializeParams,
    InitializeResult,
    IPCMessageReader,
    IPCMessageWriter,
    MarkupKind,
    ProposedFeatures,
    TextDocumentPositionParams,
    TextDocuments,
    TextDocumentSyncKind,
} from "vscode-languageserver/node";
import { sqfCompletionItems } from "../../../configuration/grammars/common/commands.syntax";
import { TextDocument } from "vscode-languageserver-textdocument";
import { commands } from "vscode";

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);
documents.listen(connection);

connection.onInitialize((params: InitializeParams) => {
    const result: InitializeResult = {
        capabilities: {
            textDocumentSync: TextDocumentSyncKind.Incremental,
            hoverProvider: true,
            // Tell the client that this server supports code completion.
            completionProvider: {
                resolveProvider: true,
            },
        },
    };

    return result;
});

connection.onHover((params: HoverParams) => {
    function getWord(text: string, at: number) {
        const first = text.lastIndexOf(" ", at);
        const last = text.indexOf(" ", at);
        return text.substring(
            first !== -1 ? first : 0,
            last !== -1 ? last : text.length - 1
        );
    }

    const document = documents.get(params.textDocument.uri);
	const position = params.position;
    const start = {
        line: position.line,
        character: 0,
    };
    const end = {
        line: position.line + 1,
        character: 0,
    };
    const text = document!.getText({ start, end });
    const index = document!.offsetAt(position) - document!.offsetAt(start);
    const word = getWord(text, index);
	console.log("Found word:",word);
	
    console.log("Hover: ", params);
    // need to parse files into readable words and discern what words are at certain lines/columns
    return {
        language: "sqf",
        contents: "hello world",
    };
});

// This handler provides the initial list of the completion items.
connection.onCompletion(
    (_textDocumentPosition: TextDocumentPositionParams): CompletionItem[] => {
        // The pass parameter contains the position of the text document in
        // which code complete got requested. For the example we ignore this
        // info and always provide the same completion items.
        return sqfCompletionItems;
        // return [
        // 	{
        // 		label: 'apply',
        // 		labelDetails: {
        // 			detail: "",
        // 			description: ""
        // 		},
        // 		documentation: {
        // 			kind: MarkupKind.Markdown,
        // 			value: "```sqf\n [1,2,3] apply {systemChat _x};\n```"
        // 		},
        // 		kind: CompletionItemKind.Method,
        // 		data: {

        // 		},
        // 		detail: "test detail"
        // 	},
        // 	{
        // 		label: 'JavaScript',
        // 		kind: CompletionItemKind.Text,
        // 		data: 2
        // 	}
        // ];
    }
);

// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {
    if (item.data === 1) {
        // item.detail = 'TypeScript details';
        // item.documentation = 'TypeScript documentation';
    } else if (item.data === 2) {
        item.detail = "JavaScript details";
        item.documentation = "JavaScript documentation";
    }
    return item;
});

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
