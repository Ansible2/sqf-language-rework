Sets value of the specified custom sound controller to be used in `simple expression`s in config. Returns `true` if value was set to the controller, `false` if command fails, for example if vehicle is not a transport or controller name is not recognised.


---
*Syntaxes:*

`setCustomSoundController` [vehicle, controller, value]

---
*Example 1:*

Change value of CustomSoundController1 to 12

```sqf
setCustomSoundController [vehicle player, "CustomSoundController1", 12];
```