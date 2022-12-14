Checks if a unit is fleeing.
<br><br>
Notes:
* Fleeing only affects AI led groups.
* Only the group as a whole can flee (or not).
* The courage of the AI group is based on the group's leader [[Arma_3_AI_Skill#Sub-Skills|courage subskill]].
* Each group has a max strength (summed "armor" of all infantry units - plus armor when inside vehicles).
* If the group losses by injury/damage or death/destruction are higher than the max strength, multiplied by leader's courage or `allowFleeing` level , then the group will start fleeing.
* As result primarily the AI flees to a nearby "supply point" (some friendly units - preferably with medic or engineer, or a vehicle with repair/ammo/fuel cargo). Alternatively it will try to find a safe position within a 600m radius from the initial waypoint (danger, distance, amount of cover positions are taken into account).
* After the fleeing has been finished the group's initial strength is reset.
* Fleeing units in `combatMode` red, will be set to yellow when fleeing to avoid engaging enemies while doing so.
* While fleeing, the group leader will be set to green, to avoid giving engage or fire orders, unless in `combatMode` blue already. Also `speedMode` is set to full.
* When reaching their flee point/destination, they will change to `combatMode` yellow and `speedMode` normal.
* With `allowFleeing` one can make unit's flee earlier (or essentially never flee). Apply it, overrides the courage subskill influence.


---
*Syntaxes:*

`fleeing`  unit

---
*Example 1:*

```sqf
if (fleeing soldier_1) then {player sideChat "We have won!"} else {player sideChat "Keep fighting!"};
```