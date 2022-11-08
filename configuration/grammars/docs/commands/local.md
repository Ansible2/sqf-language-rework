Check if given unit is local on the computer in multiplayer games - see <See HashLink Reference Locality>.<br>
This can be used to determine on which computer some code must be run. In single player all objects are local.


---
*Syntaxes:*

`local` object

`local` variable = value <span style="margin-left: 7em">`<See Color Reference arma2> v1.00 until <See arma3 Reference 54>` - see ``private`` for later versions</span>

---
*Example 1:*

```sqf
if (not local _unit) then
{
	hint format ["%1 is remote", name _unit];
};
```

*Example 2:*

```sqf
_isLocalGroup = local group _unit;
```

*Example 3:*

Sets variable's `scope`:

```sqf
// from Arma 2 v1.00 until Arma 3v1.54
local _myVariable = 42;

// since Arma 3 v1.54
private _myVariable = 42;
```