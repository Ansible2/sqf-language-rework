Animates a door on a vehicle. Animation is defined in config file in `CfgVehicles` -> ` AnimationSources`. Wanted animation phase is set with phase param. This command works only on animation sources with "door" controller. Door_L in the example below can be animated with `animateDoor` but not CargoRamp_Open: **heli `animateDoor` ["Door_L", 1];**  <br>
```cpp
class AnimationSources
{
	class CargoRamp_Open
	{
		source = "user";
		animPeriod = 5;
		initPhase = 0;
	};
	class Door_L
	{
		source = "door";
		animPeriod = 1.6;
	};
};
```
To animate doors or other sources that have "user" controller, use `animate` command, or even better, `animateSource` (recommended). Sources with "hit" controller can be animated with `setHitPointDamage` command applied to the name contained in hitpoint property. For availability of animation sources and their controller types see: [[Arma 3: createVehicle/vehicles]]


---
*Syntaxes:*

object `animateDoor` [doorname, phase, instant]

---
*Example 1:*

```sqf
Taru animateDoor ["Door_1_source", 1];
```

*Example 2:*

Open left front door on Ifrit instantly:

```sqf
Ifrit animateDoor ["Door_LF", 1, true];
```