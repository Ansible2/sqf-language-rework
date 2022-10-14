Returns the object position height above sea level.


---
*Syntaxes:*

`getPosASL` object

---
*Example 1:*

```sqf
_AslPos = getPosASL player;
```

*Example 2:*

```sqf
hint format ["position above sea level: %1", (getPosASL player) select 2];
```