Order the given unit(s) to stop via radio. A stop command will never finish, the unit(s) will never be ready.


---
*Syntaxes:*

`commandStop`  target

---
*Example 1:*

```sqf
commandStop _soldier1;
```

*Example 2:*

```sqf
commandStop [_soldier1, _soldier2];
```

*Example 3:*

```sqf
commandStop (units player);
```