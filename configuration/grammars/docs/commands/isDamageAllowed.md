A getter for `allowDamage` command. The command indicates if damage is allowed at current `local`ity, hence local effect of the command.
For complete solution for being able to tell whether or not an object can be damaged at current locality see *(Reference HashLink "#Example 1")*.


---
*Syntaxes:*

`isDamageAllowed` object

---
*Example 1:*

```sqf
private _canBeDamaged = local _obj && isDamageAllowed _obj;
```