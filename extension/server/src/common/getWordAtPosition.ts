import {
    IDocumentPosition,
    IDocumentRange,
    ITextDocument,
} from "../types/textDocument.types";

export interface SQFWord {
    document: ITextDocument;
    rangeOfParsedWord: IDocumentRange;
    parsedWord: string;
    startingChar: string;
    startingIndex: number;
    leadingHash: boolean;
}

export function getWordAtPosition(
    document: ITextDocument,
    startPosition: IDocumentPosition
): SQFWord | null {
    const hoveredLineNumber: number = startPosition.line;
    // this will get the whole range from the first character of
    /// the line being hovered on to the first character (non-inclusive)
    /// of the next line down (hence hoveredLineNumber + 1)
    const hoveredLineStartingPosition: IDocumentPosition = {
        line: hoveredLineNumber,
        character: 0,
    };
    const fullRangeOfLineBeingHovered: IDocumentRange = {
        start: hoveredLineStartingPosition,
        end: {
            line: hoveredLineNumber + 1,
            character: 0,
        },
    };

    const textOnLineHovered = document.getText(fullRangeOfLineBeingHovered);
     const startingIndex = startPosition.character;
    const startingChar = textOnLineHovered.charAt(startingIndex);

    const isNonWordChar = new RegExp(/\W/);
    const isWordChar = new RegExp(/\w/);
    if (isNonWordChar.test(startingChar)) {
        return null;
    }

    let indexOfChar: number = startingIndex;
    let word = startingChar;
    let indexOfFirstChar: number = startingIndex;
    while (indexOfChar >= 0) {
        const charBehind = textOnLineHovered[--indexOfChar];
        if (charBehind === undefined || isNonWordChar.test(charBehind)) {
            break;
        } else if (isWordChar.test(charBehind)) {
            indexOfFirstChar = indexOfChar;
            word = charBehind + word;
        }
    }

    const maxIndexOfLine = textOnLineHovered.length - 1;
    indexOfChar = startingIndex;
    let indexOfLastChar: number = startingIndex;
    while (indexOfChar <= maxIndexOfLine) {
        const charAhead = textOnLineHovered[++indexOfChar];
        if (charAhead === undefined || isNonWordChar.test(charAhead)) {
            break;
        } else if (isWordChar.test(charAhead)) {
            indexOfLastChar = indexOfChar;
            word += charAhead;
        }
    }

    const startsWithNumberRegex = new RegExp(/^\d/);
    if (startsWithNumberRegex.test(word)) {
        console.log("Parsed word is a number/or invalid");
        return null;
    }

    const sqfWord = {
        // used for figuring out whether something is a macro or # as in "select" command
        leadingHash: textOnLineHovered[indexOfFirstChar - 1] === "#",
        document: document,
        rangeOfParsedWord: {
            start: {
                line: startPosition.line,
                character: indexOfFirstChar,
            },
            end: {
                line: startPosition.line,
                character: indexOfLastChar,
            },
        },
        parsedWord: word,
        startingIndex: startingIndex,
        startingChar: startingChar,
    };

    return sqfWord;
}
