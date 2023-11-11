#### Description:
Sends a vehicle to a given point to hover. Pilots should ideally be placed in "CARELESS" behaviour when around enemies.

#### Parameters:
0: **_vehicle** *(OBJECT)* - The helicopter/vtol to hover

1: **_hoverPosition** *(PositionASL[] or OBJECT)* - The positionASL to drop the units off at; Z coordinatematters

2: **_shouldHoverStop** *(CODE)* - Code that should return a boolean to determine if the vehicle should stop its hover.This condition is checked every 0.05s.Parameters:- 0: **_vehicle** - The drop vehicle- 1: **_pilot** - The currentPilot of _vehicle

3: **_onHoverEnd** *(CODE, STRING, or ARRAY)* - Code that executes after the hover completes, see KISKA_fnc_callBackThis condition is checked every 0.05s.Parameters:- 0: **_vehicle** - The drop vehicle- 1: **_pilot** - The currentPilot of _vehicle

#### Returns:
NOTHING

#### Examples:
```sqf
[
myHeli,
myHoverPositionASL,
{
localNamespace getVariable ["stopMyHover",false]
},
{
hint "after hover";
}
] call KISKA_fnc_hover;
```

