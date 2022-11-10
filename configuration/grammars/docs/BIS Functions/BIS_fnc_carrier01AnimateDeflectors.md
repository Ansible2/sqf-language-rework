Plays a set of animations to animate the carriers' catapult jet blast deflectors. See `Arma 3: Aircraft Systems` for information about needed config changes.


---
*Syntaxes:*

[carrierPart, animations, animationState] spawn `BIS_fnc_carrier01AnimateDeflectors`

---
*Example 1:*

```sqf
[_carrierPart, ["Deflector_1", "Deflector_1_hydraulic_1", "Deflector_1_hydraulic_2", "Deflector_1_hydraulic_3"], 10] spawn BIS_fnc_carrier01AnimateDeflectors;
```