Compiles and adds an `SQF` `script` to the `scheduler` queue and returns script handle (see also {{HashLink|#Example 4}}).
The script does not execute immediately upon running `execVM` command but with some delay depending on the VM's scripts queue and engine load.

{{Feature|informative|
* If the same script is to be executed more than one time, declaring it as a [[Arma 3: Functions Library|Function]] is recommended to avoid recompiling and wasting performance with every execution.
* The script is searched for in the following directories in that order:
** mission directory
** campaign scripts directory
** global scripts directory.
* To see what VM scripts are currently in the scheduler, use `diag_activeSQFScripts` command.


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