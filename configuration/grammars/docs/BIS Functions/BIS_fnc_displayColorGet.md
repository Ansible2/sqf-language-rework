Loads custom `color settings` from CfgUIDefault.

If variables are not stored in `profileNamespace` yet, the function will declare them.



{{!}} style="vertical-align: top; width: 50%" {{!}}
<!-- TKOH -->


{{!}}}


---
*Syntaxes:*

[tag, variable] call `BIS_fnc_displayColorGet`

init call `BIS_fnc_displayColorGet`

---
*Example 1:*

```sqf
["GUI", "BCG_RGB"] call BIS_fnc_displayColorGet;//Returns menu color
```