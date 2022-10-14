Links an `If Type` with `Code` to be executed if said `If Type`'s condition is `true`; otherwise, "`else`" code is executed if provided.<br>
The alternative syntax allows to set "`then`" code and "`else`" code in one array.


---
*Syntaxes:*

ifType `then` thenCode

---
*Example 1:*

```sqf
if (a > b) then { hint "a is greater than b!"; };
```

*Example 2:*

```sqf
private _c = 0;
if (a > b) then
{
	_c = 1;
}
else
{
	_c = 2;
};
```

*Example 3:*

```sqf
if (alive player) then [{ hint "player is alive"; }, { hint "player is dead"; }];
```

*Example 4:*

```sqf
private _value = if (alive player) then { 1 } else { 0 };
```