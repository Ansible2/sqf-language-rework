Sets the `nameSound` of a person. By default, when giving orders, the units are addressed by their number. When nameSound is set, it will be used instead to address the unit. For example: "Two, hold fire!", one can have: "Miller, hold fire!".


---
*Syntaxes:*

person `setNameSound` name

---
*Example 1:*

```sqf
unit1 setNameSound "dixon";
```

*Example 2:*

```sqf
unit1 setNameSound ""; // will reset to default behaviour
```

*Example 3:*

```sqf
_name = "Masood";
unit1 setNameSound _name;
unit1 setName _name;
```