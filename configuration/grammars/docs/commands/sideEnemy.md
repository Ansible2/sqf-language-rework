The enemy `side` which is used for renegades. Units of this side are hostile to everyone.
* To join `sideEnemy`, you can attack members of your own side or use `addRating`.
* When below a `rating` of -2000 units switch automatically to this side.


---
*Example 1:*
```sqf
if (side player == sideEnemy) then
{
	hint "We've got a renegade!";
};
```