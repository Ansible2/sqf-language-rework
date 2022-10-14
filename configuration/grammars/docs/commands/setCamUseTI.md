Sets thermal vision mode for currently used camera. This command only works with `camCreate` created camera that is currently the main camera for the player (see Example 2).


---
*Syntaxes:*

state `setCamUseTI` modeIndex

---
*Example 1:*

```sqf
true setCamUseTI 1;
```

*Example 2:*

`Predator` vision:

```sqf
_cam = "camera" camCreate [0, 0, 0];
_cam camSetTarget player;
_cam camSetRelPos [0, 1, 1.5];
_cam cameraEffect ["Internal", "Back"];
_cam camCommit 0;
true setCamUseTI 7;
```