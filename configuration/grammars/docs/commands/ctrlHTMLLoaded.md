Returns `true` when HTML content was successfully loaded.


---
*Syntaxes:*

`ctrlHTMLLoaded` control

---
*Example 1:*

```sqf
_control htmlLoad "test.html";
if (!ctrlHTMLLoaded _control) then {
	hint "Loading test.html failed!";
};
```