Constantly spawns enemies around a player according to array of enemy classes. The units will try to hunt down the player.


---
*Syntaxes:*

[aPlayer, target, side, classes, maxEnemies, delay, code] spawn `BIS_fnc_spawnEnemy`

---
*Example 1:*

```sqf
[player, player, opfor, ["O_Soldier_F"]] spawn BIS_fnc_spawnEnemy;
```