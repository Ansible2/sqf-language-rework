const exampleText =
    "{{RV|type=command |game1= ofp |version1= 1.00 |game2= ofpe |version2= 1.00 |game3= arma1 |version3= 1.00 |game4= arma2 |version4= 1.00 |game5= arma2oa |version5= 1.50 |game6= tkoh |version6= 1.00 |game7= arma3 |version7= 0.50 |gr1= Math |descr= Returns absolute (positive) value of a real number. |s1= [[abs]] x |p1= x: [[Number]] |r1= [[Number]] |x1= <sqf>_n = abs -3; // Returns 3</sqf> |seealso= [[+]] [[-]] }}";


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
function isExample(stringToCheck: string): boolean {
	return !!stringToCheck.match(/^\|x\d*\=/);
}
function isDescription(stringToCheck: string): boolean {
	return stringToCheck.startsWith('|descr');
}
function isArgLocality(stringToCheck: string): boolean {
	return stringToCheck.startsWith('|arg');
}
function isEffectLocality(stringToCheck: string): boolean {
	return stringToCheck.startsWith('|eff');
}

try {
	const regexMatches: RegExpMatchArray | null = exampleText.match(regex);
	// console.log(regexMatches);
	if (!regexMatches) {
		throw "No regex matches found";
	}
	
	regexMatches.forEach((match: string) => {
		let matchType: string = "";
		const matchTrimmed = match.trim();
		if (isDescription(matchTrimmed)) {
			matchType = "Description";

		} else if (isExample(matchTrimmed)) {
			matchType = "Example";
		} else if (isSyntax(matchTrimmed)) {
			matchType = "Syntax";
		} else if (isArgLocality(matchTrimmed)) {
			matchType = "Arg";
		} else if (isEffectLocality(matchTrimmed)) {
			matchType = "Effect";
		}
		
		if (matchType) {
			console.log(`${matchType}: ${matchTrimmed}`);
		}
	});

} catch(error) {
	console.log(error);
}


// use supportInfo command in arma to export syntaxes for commands into json and then add to parse here
// https://community.bistudio.com/wiki/supportInfo



// https://regex101.com/
// /\|(\s*|\S*)(\=)(.*?)[^|}}]*/gm full version
// \|(?!seealso)(\s*|\S*)(\=)(.*?)[^|]*
// \|(?!seealso)(\s*|\S*)(\=)
// (\|(\s*|\S*)\=)


// (\|(\s*|\S*)\=).*?(?=(\|(\s*|\S*)\=)|$) WORKS on THING
// (\|(\s*|\S*)\=).*?(?=(\|(\s*|\S*)\=)|(?=}}$)|(?=$))
// /(\|(\s*|\S*)\=).*?(?=(\|(\s*|\S*)\=)|(?=}}$)|(?=$))/gi

// TODO fill in gaps of thing matches at regex101
// const regexMatches = thing.match(/\|(\s*|\S*)(\=)(.*?)[^|}}]*/gm);