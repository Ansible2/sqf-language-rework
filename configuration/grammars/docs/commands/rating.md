Check unit rating. Rating is increased for killing enemies, decreased for killing friendlies (see `Rating Values`). Can be changed via `addRating` by the mission designer. 

The rating of the player is displayed as the "score" at the end of the mission. Via `Description.ext` one can define how many points it takes to get a perfect score, as well as the number of stars.


---
*Example 1:*
```sqf
_score = rating player;
```