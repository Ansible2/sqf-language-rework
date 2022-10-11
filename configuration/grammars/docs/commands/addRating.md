Add a number to the `rating` of a unit - negative values can be used to reduce the rating.
<br>This command is usually used to reward for completed mission objectives. The rating is given at the end of the mission and is automatically adjusted when killing enemies or friendlies. 

<br>When the rating gets below -2000, the unit's side switches to "ENEMY" (`sideEnemy`) and the unit is attacked by everyone.(see `Rating Values`)

<br><br>See also: [[Arma_3:_Event_Handlers#HandleRating]]


---
*Example 1:*
```sqf
player addRating 2000;
```