Switch camera to given vehicle / camera. Mode is one of:
* `"INTERNAL"`: 1st person
* `"GUNNER"`: optics / sights
* `"EXTERNAL"`: 3rd person
* `"GROUP"`: group
* `"CARGO"`: same as "INTERNAL"

If you switch to a unit in a vehicle, this command uses the correct turret.


---
*Syntaxes:*

target `switchCamera` mode

`switchCamera` target

---
*Example 1:*

```sqf
player switchCamera "Gunner";
```

*Example 2:*

```sqf
vehicle player switchCamera "External";
```