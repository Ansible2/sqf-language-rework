Creates an empty object of given classname type.
See [[Arma 3 Assets]] / [[Arma 3: createVehicle/vehicles]], or `:Category:CfgVehicles` for earlier games.


---
*Syntaxes:*

type `createVehicle` position

`createVehicle` [type, position, markers, placement, special]

---
*Example 1:*

```sqf
_jeep = "Jeep" createVehicle position player;
```

*Example 2:*

```sqf
_heli = "AH1Z" createVehicle getMarkerPos "hspawn";
```

*Example 3:*

```sqf
_veh = createVehicle ["ah1w", position player, [], 0, "FLY"];
```

*Example 4:*

```sqf
_veh = createVehicle ["2S6M_Tunguska", getMarkerPos "marker1", ["marker2", "marker3"], 0, "NONE"];
```

*Example 5:*

Objects such as
* "test_EmptyObjectForBubbles"
* "test_EmptyObjectForFireBig"
* "test_EmptyObjectForSmoke"
create additional emitters, which are stored in "effects" variable on the object. Since <See arm Reference 3> v1.72 these emitters are automatically deleted when object is deleted

```sqf
[] spawn
{
	private _fire = "test_EmptyObjectForFireBig" createVehicle position player;
	sleep 5;
	deleteVehicle _fire;
};
```

*Example 6:*

The following explosives (ending with **_Scripted**) can be set off by applying `setDamage` 1 to them for ease of scripting:
* "DemoCharge_Remote_Ammo_Scripted"
* "SatchelCharge_Remote_Ammo_Scripted"
* "ClaymoreDirectionalMine_Remote_Ammo_Scripted"

```sqf
_claymore = "ClaymoreDirectionalMine_Remote_Ammo_Scripted" createVehicle position player;
_claymore spawn
{
	sleep 5;
	_this setDamage 1;
};
```

*Example 7:*

Add inventory to objects without inventory:

```sqf
_boxes = "Land_Pallet_MilBoxes_F" createVehicle position player;
_cargo = "Supply500" createVehicle [0,0,0];
_cargo attachTo [_boxes, [0,0,0.85]];

// optional for objects that can take damage
_boxes addEventHandler ["Killed",
{
	{
		detach _x,
		deleteVehicle _x;
	}
	forEach attachedObjects (_this select 0);
}];
```

*Example 8:*

Drop player's weapon:

```sqf
_wh = "GroundWeaponHolder_Scripted" createVehicle position player;
player action ["DropWeapon", _wh, currentWeapon player];
```

*Example 9:*

The following weapon holders (ending with `_Scripted`) do `not` auto-delete when empty. It is up to the mission maker to take care of these:
* "GroundWeaponHolder_Scripted"
* "WeaponHolderSimulated_Scripted"
* "Weapon_Empty" (a special weaponholder that displays only a single weapon, even if it contains magazines for this weapon)

```sqf
private _weaponHolder = createVehicle ["Weapon_Empty", getPosATL player, [], 0, "CAN_COLLIDE"];
_weaponHolder addWeaponCargo ["arifle_Katiba_F", 1];
hint "You have 5 seconds to grab this weapon";
sleep 5;
deleteVehicle _weaponHolder;
```