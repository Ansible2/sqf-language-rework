Process an animation of 3D `Arma: GUI Configuration`. Command uses name defined by source property and works similar like `animateSource` command.


---
*Syntaxes:*

control `ctrlAnimateModel` [source, phase, speed]

---
*Example 1:*

```sqf
_control3D ctrlAnimateModel ["Close", 1];
```

*Example 2:*

```sqf
_ctrlLaptop ctrlAnimateModel ["Lid", 1, 2];
```