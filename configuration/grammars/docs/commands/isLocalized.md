Checks whether given `stringName` is `localize`d.


---
*Syntaxes:*

`isLocalized`  stringName

---
*Example 1:*

```sqf
if (isLocalized "STR_USRACT_ADJUST") then 
{
	hint localize "STR_USRACT_ADJUST";
} 
else 
{
	hint "STR_USRACT_ADJUST";
	diag_log "ToDo: STR_USRACT_ADJUST is not localized";
};
```

*Example 2:*

```sqf
isLocalized "$STR_USRACT_ADJUST"; // Since Arma v2.04
```