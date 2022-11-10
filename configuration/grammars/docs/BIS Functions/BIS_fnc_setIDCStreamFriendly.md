Shows or hides UI control according to state of the Stream Friendly UI switch in Game Options.


---
*Syntaxes:*

[target,IDC] call `BIS_fnc_setIDCStreamFriendly`

---
*Example 1:*

```sqf
[ (findDisplay 1337) displayCtrl 42 ] call BIS_fnc_setIDCStreamFriendly;
```

*Example 2:*

```sqf
[ findDisplay 1337, 42 ] call BIS_fnc_setIDCStreamFriendly;
```