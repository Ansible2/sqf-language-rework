Check if version of application is available. If the current version is older than the required one, a warning message is shown and `false` is returned. 

<br>Version of format `Major.Minor`, e.g. `1.30`


---
*Syntaxes:*

`requiredVersion` version

---
*Example 1:*

```sqf
if !(requiredVersion "1.09") exitWith {};
```