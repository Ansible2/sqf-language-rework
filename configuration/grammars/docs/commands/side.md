Returns the side of a unit, vehicle, object or location.
* side of a renegade soldier is `sideEnemy`
* side of an empty vehicle is `civilian`
* side of a crewed vehicle is, if present, commander's > gunner's > driver's or > cargo's side, in this order
* side of a captive or dead unit is `civilian`. Use <sqf inline>side group _unit
``` to get the underlying side (see {{Link|#Example 2}})
* you can use `playerSide` to know the real player's side


---
*Syntaxes:*

`side` target

---
*Example 1:*

```sqf
if (side player == west) then { hint "Player is on the West side" };
```

*Example 2:*

```sqf
_sideAlsoWorkingForDead = side group _deadUnit;
```

*Example 3:*

```sqf
_sideLocation = side myLocation;
```

*Example 4:*

```sqf
if (side player != playerSide) then { hint "player is renegade or dead"; };
```

*Example 5:*

Check the `side` of the vehicle:

```sqf
_vehicleSide = side group _vehicle; // sideUnknown (CIV for Arma 3) if empty or dead crew, otherwise the appropriate side
```