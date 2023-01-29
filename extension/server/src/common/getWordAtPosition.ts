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
    if (isNonWordChar.test(startingChar)) {
        return null;
    }
    
    const isWordChar = new RegExp(/\w/);
    let word = startingChar;
    let indexOfFirstChar: number = startingIndex;
    let indexOfLastChar: number = startingIndex;
    let indexDown: number = startingIndex;
    let indexUp: number = startingIndex;
    const maxIndexOfLine = textOnLineHovered.length - 1;
    let foundWord: boolean = false;
    let foundStart: boolean = false;
    let foundEnd: boolean = false;
    while (!foundWord) {
        if (!foundStart) {
            const charBehind = textOnLineHovered[--indexDown];
            if (charBehind !== undefined && isWordChar.test(charBehind)) {
                indexOfFirstChar = indexDown;
                word = charBehind + word;
            }
            foundStart = indexDown < 0;
        }

        if (!foundEnd) {
            const charAhead = textOnLineHovered[++indexUp];
            if (charAhead !== undefined && isWordChar.test(charAhead)) {
                indexOfLastChar = indexUp;
                word += charAhead;
            }

            foundEnd = indexUp > maxIndexOfLine;
        }

        foundWord = foundEnd && foundStart;
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
