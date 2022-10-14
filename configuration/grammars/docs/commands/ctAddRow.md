Adds one row of controls according to the RowTemplate class. It returns an array containing row index and array of created controls in a format [<rowIndex>, [<control0>, <control1>...<control n>]].
<br>
Note that rows and headers are indexed separately.


---
*Syntaxes:*

`ctAddRow` control

---
*Example 1:*

```sqf
_array = ctAddRow _control;
```