Returns the global namespace attached to user interface.


---
*Syntaxes:*

`uiNamespace`

---
*Example 1:*

```sqf
    uiNamespace setVariable ["LIB_interruptDisplay", _display];
```

*Example 2:*

```sqf
uiNamespace setVariable ["myVar", 46];
with uiNamespace do
{
	hint str myVar; // 46
};
```