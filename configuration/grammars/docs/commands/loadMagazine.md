Initiates the loading action on given weapon of the turret of a transport. So the new magazine is not available instantly, yet according to the reloadTime.<br>
The turret has to be manned. One can also change the magazine if its respective weapon is not selected.


---
*Syntaxes:*

transport `loadMagazine` [turretPath, weaponName, magazineName]

---
*Example 1:*

```sqf
vehicle player loadMagazine [[0], "m256", "20Rnd_120mmHE_M1A2"];
```