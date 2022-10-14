Returns current value set to the controller (see `setCustomSoundController`).


---
*Syntaxes:*

`getCustomSoundController`  [vehicle, controller]

---
*Example 1:*

```sqf
getCustomSoundController [vehicle player, "CustomSoundController1"];
```

*Example 2:*

```sqf
private _allCustomSoundControllers = [];
for "_i" from 1 to (getCustomSoundControllerCount vehicle player) do
{
	_allCustomSoundControllers pushBack getCustomSoundController [vehicle player, format ["CustomSoundController%1", _i]];
};
```