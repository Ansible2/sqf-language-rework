Sets parameters for helicopter rotor wash.
It affects the visual effect of a rotor's downwash, such as blown particles, vegetation wind effect and area size.


---
*Syntaxes:*

`setLocalWindParams` [strength, diameter]

---
*Example 1:*

```sqf
setLocalWindParams [10, 5];
```

*Example 2:*

"Disables" the effects:

```sqf
setLocalWindParams [0.0001, 0.0001]; // 0 values are ignored by the command
```

*Example 3:*

Reset to default:
```sqf
setLocalWindParams [1, 1];
```