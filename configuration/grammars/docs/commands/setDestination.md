Set the destination for path planning of the pilot.

Possible values for planningMode are:

* "DoNotPlan" - used when not moving
* "DoNotPlanFormation" - used in formation when simple path testing is used
* "LEADER PLANNED" - used for formation leader (full path finding used)
* "LEADER DIRECT" - used for DirectGo (like getin, supply)
* "FORMATION PLANNED" - used in formation when full path finding is used
* "VEHICLE PLANNED" - used for vehicle driver

Works best when used on `agents`. Using "LEADER PLANNED" will trigger **"PathCalculated"** [[Arma_3:_Event_Handlers#PathCalculated | Event Handler]]


---
*Syntaxes:*

object `setDestination` [position, planningMode, forceReplan]

---
*Example 1:*

```sqf
bob setDestination [screenToWorld [0.5,0.5], "LEADER PLANNED", true];
```