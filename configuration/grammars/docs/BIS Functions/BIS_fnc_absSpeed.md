Returns absolute `speed` of a vehicle in kilometers per hour (km/h)


---
*Syntaxes:*

`Object` call `BIS_fnc_absSpeed`

---
*Example 1:*

```sqf
if (((vehicle player) call BIS_fnc_absSpeed) > 150) then
{
  hint "There goes my driver's license :(";
};
```

*Example 2:*

```sqf
private _kmh = (vehicle player) call BIS_fnc_absSpeed;
_miles = _kmh / 1.609344;
```