Spawns random patrols and/or vehicles in trigger areas with proper names. Side selected in the triggers "Activation" listbox will determine the side of the spawned asset(s).<br>

Trigger `names` (a.k.a "Trigger text", `not` "Variable Name") defines the kind of spawn. Supported trigger names are:
* `GEN_infantry`: spawns random infantry patrol with sentry waypoints (`NOTE:` only circular triggers are supported, min. axis should be 500m)
* `GEN_patrolVeh`: spawns a random vehicle. If a civilian unit is synchronized with the trigger, its waypoint will be used by the spawned vehicle<br><!--
-->You can specify the vehicle type by typing one of the following into the trigger's "On Act." field:
** car
** apc
** tank
* `GEN_ammo`: spawns a random number of ammoboxes. You can get and idea of the shape this composition will have by making this trigger rectangular with dimensions 5m x 1m. You can also specify the amount of crates spawned by using min. and max. Timeout values (supported range is 1 to 6 crates).
* `GEN_civilCar`: spawns a random empty civil car


---
*Syntaxes:*

density call `BIS_fnc_prepareAO`

---
*Example 1:*

```sqf
0.75 call BIS_fnc_prepareAO;
```

*Example 2:*

```sqf
call BIS_fnc_prepareAO;
```