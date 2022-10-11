Returns if the given vehicle is still able to move.
* This command does not check for the amount of fuel the vehicle has, except for helicopters and airplanes.
* A helicopter with a damaged tail rotor may return that it cannot move, where a skilled pilot could use it.


---
*Example 1:*
```sqf
if (not canMove _tank) then
{
	player sideChat "He's nailed on the ground! Now hurry!";
};
```