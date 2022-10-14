Returns a list of all units, `except agents, dead units or units waiting for respawn`, outside and inside vehicles that were created on the following sides `east`, `west`, `independent` and `civilian`.


---
*Syntaxes:*

`allUnits`

---
*Example 1:*

```sqf
{ _x setDamage 0.5; _x groupChat "Braaains"; } forEach allUnits;
```

*Example 2:*

```sqf
allUnits apply { diag_log _x; };
```