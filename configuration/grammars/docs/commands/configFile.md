Return root of config entries hierarchy.


---
*Syntaxes:*

`configFile`

---
*Example 1:*

```sqf
_isMyClassActive = isClass (configFile >> "CfgPatches" >> "MyClass");
```