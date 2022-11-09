Adds a magazine to a person. Infantry units can only carry a specific number of magazines, once the magazine slots are filled (or uniform/vest/bagpack are full in {{arma3}}), any further `addMagazine` commands are ignored. If class of magazine does not exist, an error message is printed in .rpt:

```sqf
player addMagazine "dasdsa"; // .rpt: Given magazine[dasdsa] not found)
```


---
*Syntaxes:*

unitName `addMagazine` magazineName

unitName `addMagazine` [magazineName, ammoCount]<br>
*(Reference GVI "arma2oa|1.62")* *(Reference Icon "32" at localArgument)**(Reference Icon "32" at globalEffect)*<br>
*(Reference GVI "arma3|1.00")* *(Reference Icon "32" at globalArgument)**(Reference Icon "32" at globalEffect)*

---
*Example 1:*

```sqf
player addMagazine "30Rnd_556x45_STANAG";
```

*Example 2:*

```sqf
player addMagazine ["30Rnd_556x45_STANAG", 15]; // since Arma 2 OA 1.62
```

*Example 3:*

```sqf
nonLocalUnit addMagazine ["30Rnd_556x45_STANAG", 15]; // global argument since Arma 3
```

*Example 4:*

```sqf
player addMagazine ["30Rnd_556x45_STANAG", 9999]; // will give a 30 rounds magazine anyway
```