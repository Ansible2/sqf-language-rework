import {
    Position,
    Range,
    TextDocument,
} from "vscode-languageserver-textdocument";

export function getWordAtPosition(
    document: TextDocument,
    positionOfHover: Position
): string {
    const hoveredLineNumber: number = positionOfHover.line;
    // this will get the whole range from the first character of
    /// the line being hovered on to the first character (non-inclusive)
    /// of the next line down (hence hoveredLineNumber + 1)
    const hoveredLineStartingPosition: Position = {
        line: hoveredLineNumber,
        character: 0,
    };
    const fullRangeOfLineBeingHovered: Range = {
        start: hoveredLineStartingPosition,
        end: {
            line: hoveredLineNumber + 1,
            character: 0,
        },
    };

    const textOnLineHovered = document.getText(fullRangeOfLineBeingHovered);
	console.log("text start...");
	console.log(textOnLineHovered);
	console.log("text end...");
	
	const startingIndex = positionOfHover.character;
	const startingChar = textOnLineHovered.charAt(startingIndex);
	console.log("startingChar:",startingChar);
	console.log("startingIndex:",startingIndex);
	
	const isNonWordChar = new RegExp(/[^a-z0-9_#]/i);
	const isWordChar = new RegExp(/[a-z0-9_#]/i);
	if (isNonWordChar.test(startingChar)) {
		console.log("whitespace");
		return "";
	}

	let indexOfChar: number = startingIndex;
	let word = startingChar;
	while (indexOfChar >= 0) {
		const charBehind = textOnLineHovered[--indexOfChar];
		if (charBehind === undefined || isNonWordChar.test(charBehind)) {
			break;

		} else if (isWordChar.test(charBehind)) {
			word = charBehind + word;

		}
	}
	
	const maxIndexOfLine = textOnLineHovered.length - 1;
	indexOfChar = startingIndex;
	while (indexOfChar <= maxIndexOfLine) {
		const charAhead = textOnLineHovered[++indexOfChar];
		if (charAhead === undefined || isNonWordChar.test(charAhead)) {
			break;

		} else if (isWordChar.test(charAhead)) {
			word += charAhead;

		}
	}
	
	const startsWithNumberRegex = new RegExp(/^\d/);
	if (startsWithNumberRegex.test(word)) {
		console.log("Parsed word is a number/or invalid",);
	}
	console.log("Parsed Word:",word);

	return textOnLineHovered;
}
