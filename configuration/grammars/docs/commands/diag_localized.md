Returns array with all `localize`d keys from the given ` stringtable` or the array of all stringtables names if empty string **""}} is given. Common stringtables are: {{hl|"Global"}}, {{hl|"Mission"}}, {{hl|"Campaign"**.


---
*Example 1:*
```sqf
private _randomKey = selectRandom diag_localized "Global";
hint format ["Key: %1\nValue: %2", _randomKey, localize _randomKey];
```

*Example 2:*
```sqf
private _allTables = diag_localized "";
```

*Example 3:*
```sqf
diag_localized "Global" select 0; // "$STR_A3_SHOWCASE_SLINGLOADING_15_AMMODROPPED_PIL_0"
```