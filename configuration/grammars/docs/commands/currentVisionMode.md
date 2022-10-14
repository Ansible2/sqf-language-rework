Returns current vision mode of unit's weapon. Vision mode could be one of:
* 0 - normal vision
* 1 - night vision
* 2 - thermal vision
Alternative syntaxes additionally return FLIR index (see `setCamUseTI`) of the thermal vision mode (See also [[Arma_3:_Event_Handlers#VisionModeChanged | "VisionModeChanged"]] entity event handler)


---
*Syntaxes:*

`currentVisionMode` entity

`currentVisionMode` [entity]

vehicle `currentVisionMode` turretPath

unit `currentVisionMode` weapon

---
*Example 1:*

```sqf
_currMode = currentVisionMode gunner _tank;
```

*Example 2:*

```sqf
if (currentVisionMode player == 1) then
{
	hint "nightvision active";
};
```