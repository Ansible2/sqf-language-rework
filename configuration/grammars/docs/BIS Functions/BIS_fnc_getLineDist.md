Return the distance between two sections of a virtual straight line.<br>
<br>


---
*Syntaxes:*

[start1, length1, start2, length2] call `BIS_fnc_getLineDist`

---
*Example 1:*

```sqf
private _distance = [0,5,15,20] call BIS_fnc_getLineDist; // returns 10
```