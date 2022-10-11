Return the player's remaining time before respawn, or -1 if it is not available (such as when the player is alive).


---
*Example 1:*
```sqf
waitUntil { playerRespawnTime <= 0 };
```