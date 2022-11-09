If `true`, units will remain in a vehicle with broken tracks/wheels; they will still eject if the vehicle is drowning, about to explode or upside down for a while.
The *(Reference Link "alternative syntax" at #Syntax 2)* provides the ability to keep the crew in vehicle when it is upside down.


---
*Syntaxes:*

vehicle `allowCrewInImmobile` allow

vehicle `allowCrewInImmobile` [brokenWheels, upsideDown]

---
*Example 1:*

```sqf
_vehicle allowCrewInImmobile true;
```