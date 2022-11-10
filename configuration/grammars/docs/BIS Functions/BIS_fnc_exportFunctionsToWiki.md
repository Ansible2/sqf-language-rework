Export function descriptions to Community Wiki. Exported text will be copied to clipboard in XML format.<br>
`Wiki Admins` can import them using ``Special:Import``.<br>
If the page already exists, it will be replaced only when `timestamp` is newer.


---
*Syntaxes:*

[filter, timestamp] spawn `BIS_fnc_exportFunctionsToWiki`

---
*Example 1:*

```sqf
[] spawn BIS_fnc_exportFunctionsToWiki; // export all functions
```

*Example 2:*

```sqf
`"", "Arrays"` spawn BIS_fnc_exportFunctionsToWiki; // export all Array functions
```

*Example 3:*

```sqf
`"", "", ["BIS_fnc_log", "BIS_fnc_param"`] spawn BIS_fnc_exportFunctionsToWiki; // export specific functions
```