Check if area is blacklisted. Blacklist triggers are to be named 'bis_ambientBlacklist_#', where # is number from 0 to 99.


---
*Syntaxes:*

[input] call `BIS_fnc_ambientBlacklist`

---
*Example 1:*

```sqf
[1337,1337,0] call BIS_fnc_ambientBlacklist;
```

*Example 2:*

```sqf
[0] call BIS_fnc_ambientBlacklist;
```