Adds a magazine to a person. Infantry units can only carry a specific number of magazines, once the magazine slots are filled (or uniform/vest/bagpack are full in <See arm Reference 3>), any further `addMagazine` commands are ignored. If class of magazine does not exist, an error message is printed in .rpt:
<sqf>player addMagazine "dasdsa"; // .rpt: Given magazine[dasdsa] not found)</sqf>


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