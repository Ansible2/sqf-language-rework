import { Hash } from "crypto";
import { Duplex } from "stream";

const exampleText =
    "{{RV|type=command |game1= ofp |version1= 1.00 |game2= ofpe |version2= 1.00 |game3= arma1 |version3= 1.00 |game4= arma2 |version4= 1.00 |game5= arma2oa |version5= 1.50 |game6= tkoh |version6= 1.00 |game7= arma3 |version7= 0.50 |gr1= Math |descr= Returns absolute (positive) value of a real number. |s1= [[abs]] x |p1= x: [[Number]] |r1= [[Number]] |x1= <sqf>_n = abs -3; // Returns 3</sqf> |seealso= [[+]] [[-]] }}";

const selectText = `{{RV|type=command |game1= ofp |version1= 1.00 |game2= ofpe |version2= 1.00 |game3= arma1 |version3= 1.00 |game4= arma2 |version4= 1.00 |game5= arma2oa |version5= 1.50 |game6= tkoh |version6= 1.00 |game7= arma3 |version7= 0.50 |gr1= Arrays |gr2= Strings |gr3= Config |descr= Selects an element from an array, config entry from [[Config]] or substring from a string or a range from an array. {{Feature | informative | Substring version of 'select' operates with ANSI charset, if Unicode support is desired, see [[forceUnicode]]. }} {{Feature | informative | When select index <nowiki>==</nowiki> size of the array, there is no error for out of range selection and [[nil]] is returned.}} |s1= array [[select]] index |p1= array: [[Array]] |p2= index: [[Number]] - index 0 denotes the first element, 1 the second, etc. If index has decimal places it gets rounded down for fractions less than or equal .5, otherwise it gets rounded up. Since Arma 3 v2.11.149734 negative index can be used to select from the end of the array, i.e. -1 means last array element. |r1= [[Anything]] - a <u>reference</u> to array element given by its index |s2= array [[select]] boolean |p21= array: [[Array]] |p22= boolean: [[Boolean]] - [[false]] selects the '''first''' element of the [[Array]], [[true]] the '''second''' one |r2= [[Anything]] - a <u>reference</u> to the array element |s3= config [[select]] index |s3since= arma1 1.00 |p41= config: [[Config]] |p42= index: [[Number]] - index 0 denotes the first element, 1 the second, etc. If index has decimal places it gets rounded down for fractions less than or equal .5, otherwise it gets rounded up |r3= [[Config]] |s4= string [[select]] [start, length] |s4since= arma3 1.28 |p61= string: [[String]] |p62= start: [[Number]] - string position to start selection from. 0 denotes the first character of the string, 1 the second, etc. If passed number has decimal places it gets rounded down for fractions less than or equal .5, otherwise it gets rounded up |p63= length: [[Number]] - (Optional, default ''string''<nowiki/>'s length) number of characters to select |r4= [[String]] |s5= array [[select]] [start, count] |s5since= arma3 1.32 |p81= array: [[Array]] |p82= start: [[Number]] - array index to start selection from |p83= count: [[Number]] - Number of array elements to select. If the selected range exceeds source array boundaries, selection will be made up to the last element of the array. |r5= [[Array]] - a <u>new array</u> from selection |s6= array [[select]] expression |s6since= arma3 1.56 |p101= array: [[Array]] |p102= expression: [[Code]] - expression that is expected to return [[Boolean]] or [[Nothing]]. If [[true]] is returned, the original array value of currently tested element [[Magic Variables#x|_x]] will be added to the output array |r6= [[Array]] - a <u>new array</u> of all elements from the original array that satisfied expression condition |x1= <sqf> ["a", "b", "c", "d"] select 2; // result is "c" position player select 2; // result is Z coordinate of player position </sqf> |x2= <sqf>["", currentWeapon player] select alive player; // if player is dead, "" is selected</sqf> |x3= <sqf>(configFile >> "cfgVehicles" >> typeOf vehicle player >> "Turrets") select 0 >> "gunnerAction";</sqf> |x4= <sqf> hint str ("japa is the man!" select [8]); // the man! hint str ("japa is the man!" select [0, 7]); // japa is </sqf> |x5= <sqf>hint str ([1,2,3,4,5,6] select [1, 4]); // [2,3,4,5]</sqf> |x6= <sqf>_even = [1,2,3,4,5,6,7,8,9,0] select { _x % 2 == 0 }; // returns [2, 4, 6, 8, 0]</sqf> |x7= JavaScript endsWith() alternative: <sqf> private _fnc_endsWith = { params ["_string", "_endswith"]; _string select [count _string - count _endswith] isEqualTo _endswith }; ["Arma 3", "3"] call _fnc_endsWith; // true ["Arma 3", "4"] call _fnc_endsWith; // false </sqf> |seealso= [[a hash b|#]] [[selectRandom]] [[selectRandomWeighted]] [[set]] [[resize]] [[reverse]] [[in]] [[find]] [[findIf]] [[toArray]] [[toString]] [[forEach]] [[count]] [[deleteAt]] [[deleteRange]] [[append]] [[sort]] [[param]] [[params]] [[splitString]] [[joinString]] [[pushBack]] [[pushBackUnique]] [[apply]] [[forceUnicode]] }} {{Note |user= General Barron |timestamp= 20090303020200 |text= When combined with the [[count]] command, this can be used to read all entries out of a config; even when you don't know exactly how many entries there will be. See the notes under [[count]] for more info. }} {{Note |user= Killzone Kid |timestamp= 20130928005300 |text= Rounding of fractions with [[select]] is not the same as when you use [[round]] command: <sqf> _roundThis = 0.5; hint str ([0,1] select _roundThis); // 0 hint str ([0,1] select round _roundThis); // 1 </sqf> }} {{Note |user= Pierre MGI |timestamp= 20160714041800 |text= You can substract array from array using select: <sqf> _array = [[1], [2], [3]]; _sub = [2]; _array - _sub; // [[1], [2], [3]] _array select { !(_x isEqualTo _sub) }; // [[1], [3]] [[1],[2],[2],[2],[2],[3]] select { !(_x isEqualTo _sub) }; // [[1], [3]] </sqf> }} {{Note |user= Killzone Kid |timestamp= 20150622232300 |text= Usually when select tries to pick up element out of range, Arma throws "division by zero" error. However there are exceptions. Basically as long as index of element you are selecting is less then or equal to array size, you will get no error. <sqf> [] select 0; // ok, result is nil [1,2,3] select 3; // ok, result is nil [1,2,3] select 4; // division by zero </sqf> }} {{Note |user= Commy2 |timestamp= 20161112223600 |text= It is not safe to escape the code block of alternative syntax #5 with [[exitWith]], [[breakOut]] etc: <sqf> x3 = [1,2,3,4,5] select { if (_x == 3) exitWith { false; }; true }; // could be expected to be: x3 = [1,2,4,5] // actual result: x3 = false </sqf> }} {{Note |user= Igneous01 |timestamp= 20170214162600 |text= {{HashLink|#Syntax 5}} is the equivalent of passing in a predicate that returns a boolean. In SQF, a piece of code will always return what the last executed command returned. <sqf> myAliveUnits = allUnits select { alive _x }; // alive returns a boolean, the last statement run was alive _x, // therefore this piece of code will return a true/false to the select command myEastGroups = allGroups select { side _x == east }; // returns all east groups my4ManGroups = allGroups select { count units _x == 4 }; // returns all groups that have 4 men in them unitsThatDetectedMe = allUnits select { _x knowsAbout player > 0.1 }; // returns a list of units that have detected the player </sqf> }}`;

const applyCommand = `{{RV|type=command |game1= arma3 |version1= 1.56 |gr1= Arrays |gr2= HashMap |descr= Applies the given code to each element of the given data structure and collects the results in an array. |s1= array [[apply]] code |p1= array: [[Array]] - Array of [[Anything]] |p2= code: [[Code]] - code to be executed on each element of the array. The current element value is stored in the magic variable [[Magic Variables#x|_x]]. |r1= [[Array]] - resulting array |s2= hashmap [[apply]] code |s2since= arma3 2.04 |p21= hashmap: [[HashMap]] |p22= code: [[Code]] - Code to be executed on each key-value pair of the hashmap. The current key is stored in the magic variable [[Magic Variables#x|_x]], the corresponding value is stored in [[Magic Variables#y|_y]]. |r2= [[Array]] - resulting array |x1= <sqf>private _arr = [1,2,3,4,5,6,7,8,9,0] apply { [1,0] select (_x % 2 === 0) }; // [1,0,1,0,1,0,1,0,1,0]</sqf> |x2= <sqf>private _arr = [1,2,3,4,5,6,7,8,9,0] apply { _x ^ _x }; // [1,4,27,256,3125,46656,823543,16777216,387420480,1]</sqf> |x3= <sqf> private _arr1 = []; _arr1 resize 20; _arr2 = _arr1 apply { 0 }; // [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] </sqf> |x4= <sqf>[0,1,2,3,4] apply { str _x }; // ["0","1","2","3","4"]</sqf> |x5= <sqf> private _hashmap = createHashMapFromArray [["Key 1", "Value 1"], ["Key 2", "Value 2"]]; private _array = _hashmap apply { _y + " Test" }; // ["Value 2 Test","Value 1 Test"] </sqf> |seealso= [[set]] [[resize]] [[pushBack]] [[pushBackUnique]] [[select]] [[reverse]] [[count]] [[find]] [[in]] [[forEach]] [[deleteAt]] [[deleteRange]] [[append]] [[sort]] [[arrayIntersect]] }} {{Note |user= Fusselwurm |timestamp= 20160218110300 |text= (to anyone else wondering, I took a minute to get it) this is [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map Array.map()] in JavaScript }} {{Note |user= Lou Montana |timestamp= 20180211230200 |text= if performance really is an issue, [[apply]] seems to be (very) slightly faster than [[forEach]] (by more or less one percent, 0.7-1.5% in my tests to be precise). }}`;

// https://community.bistudio.com/wiki/Special:Export/

// function parseDescription(): string {
//     // descr + any noters
// }
// function parseSyntax(): string {
//     // main syntax is located from 's(number)'
//     // syntax includes return type(s) which are 'r(number)'
//     // parameters appear to be randomly 'p(random number)' after the syntax
//     // return types are 'r(number)
// }
// function parseExample(): string {
//     // example is: x(number)= <sqf>*</sqf>
// }
// function parseArg(): string {

// }
// function parseEffect(): string {

// }
// function parseXmlText(): string {
// 	return exampleText;
// }

const regex = /(\|(\s*|\S*)\=).*?(?=(\|(\s*|\S*)\=)|(?=}}$)|(?=$))/gi;
// group 1: Actual syntax for an entry
// - match starts with a '|'
// - followed by any amount of whitespace OR any amount of non-whitespace characters
// - and lastly an '=' sign

// '.*?' matches any character between zero and unlimited times, as few times as possible, expanding as needed (lazy)

// group 2:
// - Positive Lookahead (?=) Assert that the following below matches but DO NOT include it in the match
// - the rest is asserting that the match is followed by a string that matches any of these:
// 		- the same pattern in group 1
// 		- A set of closing '}}'
// 		- The end of the whole string the regex is being used on

function isSyntax(stringToCheck: string): boolean {
    return !!stringToCheck.match(/^\|s\d*\=/);
}
function isParameter(stringToCheck: string): boolean {
    return !!stringToCheck.match(/^\|p\d*=/);
}
function isReturnType(stringToCheck: string): boolean {
    return !!stringToCheck.match(/^\|r\d*=/);
}
function isExample(stringToCheck: string): boolean {
    return !!stringToCheck.match(/^\|x\d*\=/);
}
function isDescription(stringToCheck: string): boolean {
    return stringToCheck.startsWith("|descr");
}
function isArgLocality(stringToCheck: string): boolean {
    return stringToCheck.startsWith("|arg");
}
function isEffectLocality(stringToCheck: string): boolean {
    return stringToCheck.startsWith("|eff");
}

const fromStringToSyntaxTypeString = (unParsedType: string): string => {
    console.log("Game Type: ", unParsedType);

    unParsedType = unParsedType.toUpperCase();
    if (unParsedType === "SCALAR" || unParsedType === "NUMBER")
        return "SQFDataType.Number";
    if (unParsedType === "BOOL" || unParsedType === "BOOLEAN") return "SQFDataType.Bool";
    if (unParsedType === "ARRAY") return "SQFDataType.Array";
    if (unParsedType === "STRING") return "SQFDataType.String";
    if (unParsedType === "NOTHING") return "SQFDataType.Nothing";
    if (unParsedType === "ANY" || unParsedType === "ANYTHING") return "SQFDataType.Any";
    if (unParsedType === "NAMESPACE") return "SQFDataType.Namespace";
    if (unParsedType === "NAN") return "SQFDataType.NaN";
    if (unParsedType === "IF") return "SQFDataType.IfType";
    if (unParsedType === "WHILE") return "SQFDataType.WhileType";
    if (unParsedType === "FOR") return "SQFDataType.ForType";
    if (unParsedType === "SWITCH") return "SQFDataType.SwitchType";
    if (unParsedType === "EXCEPTION") return "SQFDataType.Exception";
    if (unParsedType === "WITH") return "SQFDataType.WithType";
    if (unParsedType === "CODE") return "SQFDataType.Code";
    if (unParsedType === "OBJECT") return "SQFDataType.Object";
    if (unParsedType === "VECTOR") return "SQFDataType.Vector";
    if (unParsedType === "SIDE") return "SQFDataType.Side";
    if (unParsedType === "GROUP") return "SQFDataType.Group";
    if (unParsedType === "TEXT") return "SQFDataType.StructuredText";
    if (unParsedType === "SCRIPT") return "SQFDataType.ScriptHandle";
    if (unParsedType === "CONFIG") return "SQFDataType.Config";
    if (unParsedType === "DISPLAY") return "SQFDataType.Display";
    if (unParsedType === "CONTROL") return "SQFDataType.Control";
    if (unParsedType === "NETOBJECT") return "SQFDataType.NetObject";
    if (unParsedType === "TEAM_MEMBER") return "SQFDataType.TeamMember";
    if (unParsedType === "HASHMAP") return "SQFDataType.HashMap";
    if (unParsedType === "TASK") return "SQFDataType.Task";
    if (unParsedType === "DIARY_RECORD") return "SQFDataType.DiaryRecord";
    if (unParsedType === "LOCATION") return "SQFDataType.Location";
    return "SQFDataType.Empty";
};

function parseType(unParsedString: string): string {
    const typeMatches: RegExpMatchArray | null =
        unParsedString.match(/\[\[(\w*?)\]\]/);
    if (!typeMatches) {
        throw `Could not type in string: ${unParsedString}`;
    }

    const parsed = fromStringToSyntaxTypeString(typeMatches[1]);
    return parsed;
}

enum SyntaxMatchDifference {
    leftArg,
    rightArg,
    NoMatch,
}

enum SyntaxType {
    binary = "SQFSyntaxType.BinaryOperator",
    unary = "SQFSyntaxType.UnaryOperator",
    nular = "SQFSyntaxType.NularOperator",
}

interface ParsedSyntax {
    commandName: string;
    leftArgType?: string | string[];
    rightArgType?: string | string[];
    returnType: string;
    type: SyntaxType;
}



function createParsedSyntaxWithParams(
    inputSyntax: ParsedSyntax,
    parameters: string[]
): ParsedSyntax {
    switch (parameters.length) {
        case 0: {
            inputSyntax.type = SyntaxType.nular;
            break;
        }
        case 1: {
            inputSyntax.type = SyntaxType.unary;
            inputSyntax.rightArgType = parameters[0];
            break;
        }
        case 2: {
            inputSyntax.leftArgType = parameters[0];
            inputSyntax.rightArgType = parameters[1];
            inputSyntax.type = SyntaxType.binary;
            break;
        }
        default: {
            inputSyntax.type = SyntaxType.nular;
            break;
        }
    }

    return inputSyntax;
}

function parsePageIntoSyntaxes(command: string, page: string): ParsedSyntax[] {
    const parsedSyntaxes: ParsedSyntax[] = [];
    try {
        const regexMatches: RegExpMatchArray | null = page.match(regex);
        if (!regexMatches) {
            throw "No regex matches found";
        }

        let currentSyntax: ParsedSyntax | undefined;
        let parameters: string[] = [];
        regexMatches.forEach((match: string) => {
            const matchTrimmed = match.trim();
            if (isDescription(matchTrimmed)) {
            } else if (isExample(matchTrimmed)) {
            } else if (isSyntax(matchTrimmed)) {
                if (currentSyntax) {
                    const fullSyntax = createParsedSyntaxWithParams(
                        currentSyntax,
                        parameters
                    );
                    parsedSyntaxes.push(fullSyntax);
                }

                currentSyntax = {
                    commandName: command,
                } as ParsedSyntax;
                parameters = [];
            } else if (isArgLocality(matchTrimmed)) {
            } else if (isEffectLocality(matchTrimmed)) {
            } else if (isParameter(matchTrimmed)) {
                const parameterType: string = parseType(matchTrimmed);
                parameters.push(parameterType);
            } else if (isReturnType(matchTrimmed)) {
                const returnType: string = parseType(matchTrimmed);
                currentSyntax!.returnType = returnType;
            }
        });

        if (currentSyntax) {
            const fullSyntax = createParsedSyntaxWithParams(
                currentSyntax,
                parameters
            );
            parsedSyntaxes.push(fullSyntax);
        }
    } catch (error) {
        console.log(error);
    }

    return parsedSyntaxes;
}

// function getSyntaxId(syntax: ParsedSyntax): string {
// 	return [
// 		syntax.commandName,
// 		syntax.returnType,
// 		syntax.type,
// 		syntax.leftArgType,
// 		syntax.rightArgType,
// 	].join(":");
// }

function syntaxMatch(
    syntax1: ParsedSyntax,
    syntax2: ParsedSyntax
): SyntaxMatchDifference {
    const type: SyntaxType = syntax1.type;
    if (
        type === SyntaxType.nular ||
        type !== syntax2.type ||
        syntax1.returnType !== syntax2.returnType
    )
        return SyntaxMatchDifference.NoMatch;

    const leftArgIsDefined: boolean = !!syntax1.leftArgType;
    const rightArgIsDefined: boolean = !!syntax1.rightArgType;
    const leftArgIsTheSame = syntax1.leftArgType === syntax2.leftArgType;
    const rightArgIsTheSame = syntax1.rightArgType === syntax2.rightArgType;

    if (type === SyntaxType.binary) {
        if (leftArgIsDefined && !leftArgIsTheSame && rightArgIsTheSame) {
            return SyntaxMatchDifference.leftArg;
        } else if (
            rightArgIsDefined &&
            !rightArgIsTheSame &&
            leftArgIsTheSame
        ) {
            return SyntaxMatchDifference.rightArg;
        }
    }

    if (type === SyntaxType.unary) {
        if (leftArgIsDefined && !leftArgIsTheSame) {
            return SyntaxMatchDifference.leftArg;
        } else if (rightArgIsDefined && !rightArgIsTheSame) {
            return SyntaxMatchDifference.rightArg;
        }
    }

    return SyntaxMatchDifference.NoMatch;
}

function consolidateSyntaxes(command: string,parsedSyntaxes: ParsedSyntax[]): string {
    const usedIndexes: number[] = [];
	const consolidatedSyntaxes: ParsedSyntax[] = [];
    for (let i = 0; i < parsedSyntaxes.length; i++) {
		if (i in usedIndexes) continue;
		usedIndexes.push(i);
        const mainSyntax = parsedSyntaxes[i];
		
        for (let j = i + 1; j < parsedSyntaxes.length; j++) {
			if (j in usedIndexes) continue;
			const compareSyntax = parsedSyntaxes[j];
			const syntaxMatchDiff: SyntaxMatchDifference = syntaxMatch(mainSyntax,compareSyntax);

			switch (syntaxMatchDiff) {
				case SyntaxMatchDifference.NoMatch: {
					continue;
				}
				case SyntaxMatchDifference.leftArg: {
					const syntaxToAdd = compareSyntax.leftArgType as string;
					if (Array.isArray(mainSyntax.leftArgType)) {
						const syntaxAsArray = mainSyntax.leftArgType as string[]
						mainSyntax.leftArgType = [...syntaxAsArray,syntaxToAdd];
					} else {
						mainSyntax.leftArgType = [mainSyntax.leftArgType!,syntaxToAdd];
					}
					
					break;
				}
				case SyntaxMatchDifference.rightArg: {
					const syntaxToAdd = compareSyntax.rightArgType as string;
					if (Array.isArray(mainSyntax.rightArgType)) {
						const syntaxAsArray = mainSyntax.rightArgType as string[]
						mainSyntax.rightArgType = [...syntaxAsArray,syntaxToAdd];
					} else {
						mainSyntax.rightArgType = [mainSyntax.rightArgType!,syntaxToAdd];
					}
					break;
				}
				default:
					continue;
			}

			usedIndexes.push(i);
        }

		consolidatedSyntaxes.push(mainSyntax);
    }
	
	let syntaxesAsString: string[] | string = consolidatedSyntaxes.map((syntax: ParsedSyntax) => {
		const syntaxArray = [
			'{',
			`\t\ttype: ${syntax.type},`,
			`\t\treturnTypes: ${syntax.returnType},`,
		];
		
		if (syntax.leftArgType) {
			let insertSyntax = syntax.leftArgType;
			if (Array.isArray(syntax.leftArgType)) {
				insertSyntax = `[${insertSyntax}]`
			}
			syntaxArray.push(`\t\tleftOperandTypes: ${insertSyntax}`);
		}
		if (syntax.rightArgType) {
			let insertSyntax = syntax.rightArgType;
			if (Array.isArray(syntax.rightArgType)) {
				insertSyntax = `[${insertSyntax}]`
			}
			syntaxArray.push(`\t\trightOperandTypes: ${insertSyntax}`);
		}

		syntaxArray.push('\t}',);
		return syntaxArray.join("\n");
	});

	const moreThanOneSyntax = consolidatedSyntaxes.length > 1;
	if (!moreThanOneSyntax) {
		syntaxesAsString = syntaxesAsString[0]
	}
	const syntaxArray: string[] = [
		`${command}: {`,
		`\tsyntaxes: ${syntaxesAsString},`,
		`\tgrammarType: SQFGrammarType.Command,`,
		'},'
	];

    return syntaxArray.join("\n");
}

try {
    const parsedSyntaxes: ParsedSyntax[] = parsePageIntoSyntaxes(
        "select",
        selectText
    );
    console.table(parsedSyntaxes);
    console.log(consolidateSyntaxes("select",parsedSyntaxes));

    // const syntaxStartIndexes: number[] = [];
    // regexMatches.forEach((match: string,index: number) => {
    // 	const matchTrimmed = match.trim();
    // 	if (isSyntax(matchTrimmed)) {
    // 		syntaxStartIndexes.push(index);
    // 	}
    // });
} catch (error) {
    console.log(error);
}
