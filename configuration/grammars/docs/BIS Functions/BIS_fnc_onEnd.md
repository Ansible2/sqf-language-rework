Register code to be executed after mission end.


---
*Syntaxes:*

argument call `BIS_fnc_onEnd`

---
*Example 1:*

```sqf
private _onEndIndex = { player addRating 10000; } call BIS_fnc_onEnd;
```

*Example 2:*

```sqf
private _onEndIndex = [{ { _x addRating 10000; } forEach _this; }, units group player] call BIS_fnc_onEnd;
```