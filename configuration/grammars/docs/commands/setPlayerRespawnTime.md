Sets the time interval (in seconds) that the player must wait before respawn. It resets to mission default on mission start. In Single Player or when respawn type is GROUP or SIDE in Multiplayer, setting player respawn time has no effect, and `playerRespawnTime` will always return -1.


---
*Syntaxes:*

`setPlayerRespawnTime` interval

---
*Example 1:*

```sqf
setPlayerRespawnTime 5;
```