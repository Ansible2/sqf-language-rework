Allows loading of lighting config during the gameplay (effectively changing the current scene lighting).
Filename path can be either absolute or relative. The file must contain only the class LightingNew, which should contain lighting configuration.


---
*Syntaxes:*

`diag_lightNewLoad` path

---
*Example 1:*

```sqf
diag_lightNewLoad "o:\lighting.txt";
```