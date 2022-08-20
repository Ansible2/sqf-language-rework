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
    MarkupKind,
    ProposedFeatures,
    TextDocumentPositionParams,
    TextDocuments,
	TextDocumentSyncKind,
} from "vscode-languageserver/node";
import { sqfCompletionItems } from "../../../configuration/grammars/common/commands.syntax";
import { TextDocument } from "vscode-languageserver-textdocument";

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);


connection.onInitialize((params: InitializeParams) => {

	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			hoverProvider: true,
			// Tell the client that this server supports code completion.
			completionProvider: {
				resolveProvider: true
			}
		}
	};

	return result;
});

connection.onHover((params: HoverParams) => {
	console.log("Hover: ",params);
	
	return {
		language: "sqf",
		contents: "hello world"
	}
})


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
connection.onCompletionResolve(
	(item: CompletionItem): CompletionItem => {
		if (item.data === 1) {
			// item.detail = 'TypeScript details';
			// item.documentation = 'TypeScript documentation';
		} else if (item.data === 2) {
			item.detail = 'JavaScript details';
			item.documentation = 'JavaScript documentation';
		}
		return item;
	}
);

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();