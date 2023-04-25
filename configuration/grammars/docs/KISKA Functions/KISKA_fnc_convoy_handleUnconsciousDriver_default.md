#### Description:
The default function that runs when a driver is detected as incapacitated in a vehicle convoy. The function will wait 4 seconds before affecting its behavior on the vehicle. If the previous driver was a player, and a player is in the vehicle, nothing will happen. If the previous driver was a player, and a player is NOT in the vehicle, an AI will take over driving the vehicle. If the previous driver was NOT a player, and a player is in the highest priority seat to be the new driver, nothing will happen. If the previous driver was NOT a player, and an AI is in the highest priority seat to be the new driver, they will be automatically moved into the driver seat. The priority of vehicle role in the order of who the next driver is: 1. commander 2. cargo 3. turrets 4. gunner This means commanders if present will be desired to move into the driver seat over all other vehicle roles.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The vehicle that has an unconscious driver

1: **_convoyHashMap** *(HASHMAP)* - The hashmap used for the convoy

2: **_convoyLead** *(OBJECT)* - The lead vehicle of the convoy

3: **_unconsciousDriver** *(OBJECT)* - The unconscious driver

#### Returns:
NOTHING

#### Examples:
```sqf
// SHOULD NOT BE CALLED DIRECTLY
```

