Returns array with classname of the parent weapon (without attachments), followed by classnames of all its attachments.<br>


---
*Syntaxes:*

[classname] call `BIS_fnc_weaponComponents`

---
*Example 1:*

```sqf
"arifle_mx_aco_pointer_f" call BIS_fnc_weaponComponents; // ["arifle_mx_f","optic_aco","acc_pointer_ir"]
```

*Example 2:*

```sqf
"arifle_mx_gl_black_hamr_pointer_f" call BIS_fnc_weaponComponents; // ["arifle_mx_gl_black_f","optic_hamr","acc_pointer_ir"]
```

*Example 3:*

```sqf
"arifle_mx_black_f" call BIS_fnc_weaponComponents; // ["arifle_mx_f"]
```