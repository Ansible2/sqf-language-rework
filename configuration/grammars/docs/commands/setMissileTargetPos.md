Sets a guided munition target position.
The munition must have **manualControl** config entry to use this command.
The target position has to be inside the missile's configured targeting cone for the command to work.


---
*Syntaxes:*

munition `setMissileTargetPos` position

---
*Example 1:*

```sqf
missile1 setMissileTargetPos unitAimPosition tank1;
```

*Example 2:*

```sqf
private _missile = createVehicle ["M_Scalpel_AT", player modelToWorld [0,0,100], [], 0, "CAN_COLLIDE"];
_missile setMissileTargetPos (player modelToWorld [0,100,0]);
```