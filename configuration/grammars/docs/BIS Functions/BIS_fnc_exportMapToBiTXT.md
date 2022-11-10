Returns terrain height map to BiTXT (Universal Bistudio TXT) format, which can be imported to `Object Builder`. Output is also `copied to clipboard`.


---
*Syntaxes:*

[resolution, size, zCoeff] call `BIS_fnc_exportMapToBiTXT`

---
*Example 1:*

```sqf
[10, 10, 1] call BIS_fnc_exportMapToBiTXT;
```

*Example 2:*

```sqf
call BIS_fnc_exportMapToBiTXT;
```