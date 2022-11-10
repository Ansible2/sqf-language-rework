Displays structured text in 3D world. GUI layer for indicator is **2733**.


---
*Syntaxes:*

[text, position, minDist, fadeDist] spawn `BIS_fnc_3Dcredits`

---
*Example 1:*

```sqf
["<t size='2'>Hello World</t>", getPosATL helloWorld, 15, 0] spawn BIS_fnc_3Dcredits;
```

*Example 2:*

```sqf
["<img size='2' image='img\myImage.paa'/><br />Some text on the second line", getPosATL someObject] spawn BIS_fnc_3Dcredits;
```