Apply post-process effects according to template from `CfgPostprocessTemplates`.


---
*Syntaxes:*

[template, transition, global] call `BIS_fnc_setPPeffectTemplate`

---
*Example 1:*

```sqf
["Mediterranean", 3, false] call BIS_fnc_setPPeffectTemplate;
```

*Example 2:*

```sqf
"RealIsBrown" call BIS_fnc_setPPeffectTemplate;
```

*Example 3:*

```sqf
"MyPurplePP" call BIS_fnc_setPPeffectTemplate; // can use a template defined in Description.ext
```