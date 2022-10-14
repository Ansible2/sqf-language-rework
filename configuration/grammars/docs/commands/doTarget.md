Order the given unit(s) to target the given target (without radio messages).<br>Targeting can be stopped by 
```sqf
_unit doWatch objNull;
``` or
```sqf
_unit commandWatch objNull;
```


---
*Syntaxes:*

unit `doTarget` target

---
*Example 1:*

```sqf
_ESoldier1 doTarget _WSoldier1;
```