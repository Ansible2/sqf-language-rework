import { UnparsedBikiPage } from "./BikiParser";

type PageTitle = string;
export const BIKI_EXCEPTIONS = new Map<PageTitle, (page: UnparsedBikiPage) => UnparsedBikiPage>();

export const BIKI_ADDITIONAL_COMMAND_PAGES: UnparsedBikiPage[] = [
    {
        title: "false",
        text: `{{RV|type=command

|game1= ofp
|version1= 1.00

|game2= ofpe
|version2= 1.00

|game3= arma1
|version3= 1.00

|game4= arma2
|version4= 1.00

|game5= arma2oa
|version5= 1.50

|game6= tkoh
|version6= 1.00

|game7= arma3
|version7= 0.50

|gr1= Math

|gr2= Variables

|descr= Always false.

|s1= [[false]]

|r1= [[Boolean]]

|x1= <sqf>
_var = false;
systemChat str _var; // false
</sqf>

|seealso= [[true]]
}}`,
    },
    {
        title: "not",
        text: `{{RV|type=command

|game1= ofp
|version1= 1.00

|game2= ofpe
|version2= 1.00

|game3= arma1
|version3= 1.00

|game4= arma2
|version4= 1.00

|game5= arma2oa
|version5= 1.50

|game6= tkoh
|version6= 1.00

|game7= arma3
|version7= 0.50

|gr1= Math

|gr2= Variables

|descr= [[not]] a is exactly the same as [[! a]].

|alias= [[! a]]

|s1= [[not]] a

|p1= a: [[Boolean]]

|r1= [[Boolean]]

|x1= <sqf>not false; // returns true</sqf>

|seealso= [[Operators]]
}}`,
    },
];
