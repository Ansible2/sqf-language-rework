Orders one or multiple units to get out from the vehicle (via the radio). Same as `doGetOut` with latter being silent. 
{{Feature|informative|
* Works for both AI and player entities
* AI unit gets back in - unless is under player command or combined with other sqf commands (`orderGetIn` false, `allowGetIn` false or `leaveVehicle`)
* Ignores vehicle's lock state - unlike [[Arma 3 Actions#Eject|action "Eject"]] and `moveOut`
* AI waits for execution until vehicle has stopped/is no longer flying (unclear if any timeout exists for order to be discarded) - unlike [[Arma 3 Actions#Eject|action "Eject"]] and `moveOut`
* Plays the vehicle's position's get out animation (same as [[Arma 3 Actions#Eject|action "Eject"]]) - unlike `moveOut`
* When execute for multiple units, it waits till the action is completed, before the next to take his turn (same as [[Arma 3 Actions#Eject|action "Eject"]]) - unlike `moveOut`
* AI gets back into formation afterwards
* Works only on alive units - unlike [[Arma 3 Actions#Eject|action "Eject"]] (one after another) or `moveOut` (instantly)
* Does not work on `unconscious` units - unless the AI is under player command. Unlike `moveOut` or [[Arma 3 Actions#Eject|action "Eject"]] (but one after another)


---
*Example 1:*
```sqf
commandGetOut _unitOne;
```

*Example 2:*
```sqf
commandGetOut [_unitOne,_unitTwo];
```