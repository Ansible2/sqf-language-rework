Returns the `Position` where object believes the enemy to be. If there is no direct line of sight between the object and the enemy, this position is extrapolated based on the last known position and speed of the enemy. A returned position of [0,0,0] implies that object does not knowAbout enemy. If enemy is null it is some position in front of the object or enemy position.


---
*Example 1:*
```sqf
_pos = player getHideFrom _enemy;
```