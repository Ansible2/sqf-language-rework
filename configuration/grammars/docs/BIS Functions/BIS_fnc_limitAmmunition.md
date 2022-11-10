Limits the number of magazines carried by individual unit. Each container (uniform, vest and backpack) can be limited separately or left untouched.
	The function limits the number of magazines of each unique ammo category in respective container. Items like First Aid Kit or Mine Detector are not affected by the function<br><br>Set the minimum and maximum values in an array, for example [0.5,1] will set the magazine count anywhere between 50-100% of default count.


---
*Syntaxes:*

[unit,uniformMags,vestMags,BackpackMags] call `BIS_fnc_limitAmmunition`

---
*Example 1:*

```sqf
player call BIS_fnc_limitAmmunition;
```

*Example 2:*

```sqf
[ player,[],[0.5,0.5],[0,1] ] call BIS_fnc_limitAmmunition;
```