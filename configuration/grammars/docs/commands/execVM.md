Compiles and adds an `SQF` `script` to the `scheduler` queue and returns script handle (see also <See HashLink Reference Example 4>).
The script does not execute immediately upon running `execVM` command but with some delay depending on the VM's scripts queue and engine load.


---
*Syntaxes:*

arguments `execVM` filename

`execVM` filename

---
*Example 1:*

```sqf
execVM "test.sqf";
```

*Example 2:*

```sqf
_handle = player execVM "test.sqf";
waitUntil { scriptDone _handle };
```
The following is also possible in <See arm Reference 3>:

```sqf
private _handle = execVM "123.sqf";
waitUntil { isNull _handle };
```

*Example 3:*

```sqf
[player, 0.75] execVM "setDamage.sqf";
```
setDamage.sqf:

```sqf
params ["_unit", "_damage"];
_unit setDamage _damage;
```

*Example 4:*

`execVM` equivalence:

```sqf
private _handle = _args execVM "someFile.sqf";
// is practically identical to
private _handle = _args spawn compile preprocessFileLineNumbers "someFile.sqf";
```