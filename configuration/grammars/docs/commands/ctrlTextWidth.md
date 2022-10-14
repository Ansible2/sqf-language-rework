Returns the width of the control text including left and right margins (0.008 each). Supported control `types` are:
{{Columns|2|
* `CT_STATIC` 0
* `CT_EDIT` 2
* `CT_STRUCTURED_TEXT` 13
* {{GVI|arma3|2.06


---
*Syntaxes:*

`ctrlTextWidth` control

---
*Example 1:*

```sqf
private _w = ctrlTextWidth _ctrl;
```