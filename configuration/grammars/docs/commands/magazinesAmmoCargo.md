Returns an array of subarrays with the type names and ammo left of all the vehicle's cargo or container magazines.


---
*Syntaxes:*

`magazinesAmmoCargo` vehicle

---
*Example 1:*

```sqf
magazinesAmmoCargo vehicle player;
```

*Example 2:*

```sqf
magazinesAmmoCargo uniformContainer player;
```

```sqf
// returns:
[
	["30Rnd_65x39_caseless_mag",30],
	["30Rnd_65x39_caseless_mag",30],
	["Chemlight_green",1]
]
```