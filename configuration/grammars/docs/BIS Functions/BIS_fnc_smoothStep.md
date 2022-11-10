Interpolates between 0 and 1 with smoothing at the limits. Formula is **n<sup>2</sup> &times; (3 - 2n)**.


---
*Syntaxes:*

number call `BIS_fnc_smoothStep`

---
*Example 1:*

```sqf
private _smoothedStep = 0.75 call BIS_fnc_smoothStep;
```

*Example 2:*

```sqf
[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] apply { _x call BIS_fnc_smoothStep; };
// returns [0, 0.028, 0.104, 0.216, 0.352, 0.5, 0.648, 0.784, 0.896, 0.972, 1]
```