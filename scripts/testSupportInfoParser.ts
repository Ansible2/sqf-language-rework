type syntaxType = "b"|"n"|"u";

interface unParsedSyntax {
	command: string,
	type: syntaxType,
	
}

const exampleData = [
    [
        "b",
        "apply",
        "apply",
        "Applies code to each element of array and returns resulting array",
        "[1,2,3] apply {_x * 2}",
        "",
        "ARRAY",
        "ARRAY",
        "CODE",
        "array apply code",
    ],
    [
        "b",
        "apply",
        "apply",
        "Executes the given code for each element in HashMap.",
        "",
        "",
        "ARRAY",
        "HASHMAP",
        "CODE",
        "HashMap apply code",
    ],
];

