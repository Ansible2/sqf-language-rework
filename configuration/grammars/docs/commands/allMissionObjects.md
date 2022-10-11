Returns all objects of the given type that are currently present in the mission. In some cases, the `entities` command is a much faster alternative to this command.<br>
Some of the special types that can be detected with this command (and with `nearestObject`):
* **""** - returns everything, e.g. agents, bees, mosquitoes, footprints, armed mines, ...
* **"all"}} - more restrictive than {{hl|""**: no ambient insects, only agents such as rabbits and snakes, no footprints, tracks, no armed mines
* **"#slop"** - blood drops
* **"#mark"** - unit footprints
* **"#track"** - vehicle tracks
* **"#crater"** - explosion craters on the ground
* **"#crateronvehicle"** - bullet marks on vehicles
* **"#explosion"** - explosions
* **"#objectdestructed"** - building, tree or bush destruction
* **"#soundonvehicle"** - sounds created with [[say3D]] for example
* **"#dynamicsound"** - sound sources created using `createSoundSource`
* **"EmptyDetector"** - all `Trigger`s
* **"Logic"** - all game logics


---
*Example 1:*
```sqf
_airObjects = allMissionObjects "Air";
```

*Example 2:*
```sqf
{ deleteVehicle _x; } forEach (allMissionObjects "");
```

*Example 3:*
```sqf
_allMObjects = allMissionObjects "All";
```