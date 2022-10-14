Sets the damage (or lack thereof) of an object/unit. The alternative syntax allows to skip destruction effects for vehicles and buildings.


---
*Syntaxes:*

object `setDamage` damage

object `setDamage` [damage, useEffects, killer, instigator]

---
*Example 1:*

```sqf
_soldier1 setDamage 1;
```

*Example 2:*

```sqf
_house1 setDamage [1, false];
```

*Example 3:*

```sqf
// executed on a client
_remoteVehicle setDamage [1, true, player];	// killer is not considered if the command is not called on the server - the vehicle still gets destroyed
_tree setDamage [1, true, player];			// the tree is destroyed and falls away from the player
```