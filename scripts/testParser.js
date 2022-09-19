const string =
    "{{RV|type=command |game1= ofp |version1= 1.00 |game2= ofpe |version2= 1.00 |game3= arma1 |version3= 1.00 |game4= arma2 |version4= 1.00 |game5= arma2oa |version5= 1.50 |game6= tkoh |version6= 1.00 |game7= arma3 |version7= 0.50 |gr1= Math |descr= Returns absolute (positive) value of a real number. |s1= [[abs]] x |p1= x: [[Number]] |r1= [[Number]] |x1= <sqf>_n = abs -3; // Returns 3</sqf> |seealso= [[+]] [[-]] }}";

const thing =
    "{{RV|type=command |game1= ofp |version1= 1.00 |game2= ofpe |version2= 1.00 |game3= arma1 |version3= 1.00 |game4= arma2 |version4= 1.00 |game5= arma2oa |version5= 1.50 |game6= tkoh |version6= 1.00 |game7= arma3 |version7= 0.50 |gr1= Strings |gr2= Arrays |gr3= Locations |gr4= HashMap |gr5= Unit Control |descr= Checks whether value is in array, unit is in vehicle, position is inside location or ANSI string is part of other ANSI string. If Unicode support is desired, see [[forceUnicode]]. {{Feature | Informative | [[String]] comparison is case-sensitive (see Examples '''2''' and '''6''').}} |s1= value [[in]] array |p1= value: [[Anything]] - Any value (cannot match [[Array]] before {{arma3}}) |p2= array: [[Array]] - Array of values |r1= [[Boolean]] |s2= unit [[in]] vehicle |p21= unit: [[Object]] - Entity person |p22= vehicle: [[Object]] - Entity vehicle |r2= [[Boolean]] |s3= position [[in]] location |s3since= arma3 0.50 |p41= position: [[Array]] - Format [[Position#Introduction|Position2D]] or [[Position#Introduction|Position3D]] |p42= location: [[Location]] |r3= [[Boolean]] |s4= needle [[in]] haystack |s4since= arma3 1.96 |p61= needle: [[String]] - String to search '''for''' |p62= haystack: [[String]] - String to search '''in''' |r4= [[Boolean]] |s5= key [[in]] hashMap |s5since= arma3 2.02 |p81= key: [[HashMapKey]] |p82= hashMap : [[HashMap]] |r5= [[Boolean]] |x1= <sqf>1 in [0, 1, 2]; // true</sqf> |x2= <sqf>private _myArray = [\"Aaa\", \"AAa\", \"AAA\"]; \"aaa\" in _myArray; // false \"AAa\" in _myArray; // true // Case-insensitive alternatives: _myArray findIf { _x == \"aaa\"; } != -1; // true ({ if (_x == \"aaa\") exitWith { _forEachIndex }; -1 } forEach _myArray) != -1; // true, less performant but valid before the introduction of the findIf command { if (_x == \"aaa\") exitWith { 1 } } count _myArray > 0; // true { _x == \"aaa\"; } count _myArray > 0; // true, worst performance, only option available in OFP</sqf> |x3= <sqf>[1,2,3] in [[1,2,3], [4,5,6]]; // true - Arma 3 only</sqf> |x4= <sqf>private _isInCar = player in Car;</sqf> |x5= <sqf>private _isInside = [1000,2000,0] in MyLocation;</sqf> |x6= <sqf>private _isInString = \"foo\" in \"foobar\"; // true _isInString = \"Foo\" in \"foobar\"; // false</sqf> |x7= <sqf>private _onFoot = _unit in _unit;</sqf> Other options: <sqf>private _onFoot = vehicle _unit == _unit;</sqf> <sqf>private _onFoot = isNull objectParent _unit;</sqf> |seealso= [[inPolygon]] [[inArea]] [[find]] [[findIf]] [[toArray]] [[forceUnicode]] }} <dl class=\"command_description\"> <dt></dt> <dd class=\"notedate\">Posted on October 8, 2019 - 21:08 (UTC)</dd> <dt class=\"note\">[[User:Lou Montana|Lou Montana]]</dt> <dd class=\"note\">''From a description note:''<br> ''<unit>'' [[in]] ''<vehicle>'' literally does this: {{hl|c= [[vehicle]] <unit> {{=}}{{=}} <vehicle>}}. If ''<vehicle>'' is the same as ''<unit>'' the expression will return [[true]] for when the ''<unit>'' is on foot and [[false]] for when ''<unit>'' is in vehicle . </dd> </dl>";

// https://community.bistudio.com/wiki/Special:Export/

function parseDescription() {
    // descr + any noters
}
function parseSyntaxes() {
    // main syntax is located from 's(number)'
    // syntax includes return type(s) which are 'r(number)'
    // parameters appear to be randomly 'p(random number)' after the syntax
    // return types are 'r(number)
}
function parseExamples() {
    // example is: x(number)= <sqf>*</sqf>
}
// https://regex101.com/
// \|\S+=(\s*\S*)
// (\|\s*|\S*)\=
// \|(\s*|\S*)(\=)
// \|(\s*|\S*)(\=)(.\S*[^|])
// \|(\s*|\S*)(\=)(.*?)[^|]* Works
// \|(\s*|\S*)(\=)(.*?)[^|}}]* // Works for "string"
// /\|(\s*|\S*)(\=)(.*?)[^|}}]*/gm full version
const regexMatches = string.match(/\|(\s*|\S*)(\=)(.*?)[^|}}]*/gm);
// const array = string.split(/\|(\s*|\S*)(\=)(.*?)[^|}}]*/gm);
console.log(regexMatches);
let description = "";
let syntax;
// array.forEach((split) => {
// 	if (split.startsWith('descr')) {
// 		description = split.split('descr=')[1].trim();
// 		console.log("Description:",description);
// 	}

// 	if (split.startsWith('p1=')) {

// 	}
// });
