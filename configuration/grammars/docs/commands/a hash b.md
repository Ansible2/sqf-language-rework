Selects an element from an ` array`, same as `select` command for arrays, but has ` higher precedence`


---
*Syntaxes:*

array  `#` index

---
*Example 1:*

```sqf
[1,2,3,4] # 2;			// result is 3
```

*Example 2:*

```sqf
getPosASL player # 2;		// result is Z component of player's position
```

*Example 3:*

```sqf
//'getPosASL' is unary; '#' and '+' are binary; precedence is: 'getPosASL' > '#' > '+'
getPosASL player # 2 + 1; // equivalent to (getPosASL player # 2) + 1, not (getPosASL player)#(2+1)
```