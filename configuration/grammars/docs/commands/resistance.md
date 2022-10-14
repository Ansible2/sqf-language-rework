Pre-defined variable for the resistance `side`.


---
*Syntaxes:*

`resistance`

---
*Example 1:*

```sqf
if (side _unit == resistance) then
{
	hint "This is a resistance unit!";
};
```

*Example 2:*

```sqf
hint format ["%1", resistance]; // Returns "GUER"
```