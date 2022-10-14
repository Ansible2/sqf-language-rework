Returns the global namespace attached to config parser.


---
*Syntaxes:*

`parsingNamespace`

---
*Example 1:*

```sqf
parsingNamespace setVariable ["var1", 101.23124];
_profVar1 = parsingNamespace getVariable "var1";
```