Returns object type as a number:
* 1 - Primary - Normal object placed in Visitor, part of landscape
* 2 - Network - Road placed in Visitor, part of landscape
* 4 - Temporary - Temporary object (like tracks)
* 8 - TypeVehicle - Some entity added by game
* 16 - TypeTempVehicle - Temporary entity
* 32 - LandDecal - Land decal


---
*Syntaxes:*

`getObjectType` object

---
*Example 1:*

```sqf
_objType = getObjectType player;
```

*Example 2:*

```sqf
_objType = getObjectType cursorObject;
```