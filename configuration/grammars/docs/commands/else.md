Executes `else` code when `if` condition returns `false`.


---
*Syntaxes:*

ifCode `else`  elseCode

---
*Example 1:*

```sqf
if (a > b) then { c = 0 } else { c = 1 };
```

*Example 2:*

```sqf
if (a < b) then {
	hint "B is greater than A";
} else {
	hint "A is greater than B";
};
```