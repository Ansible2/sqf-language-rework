[[Image:sphere_radius.jpg|right|200px]]
Finds entities inside a sphere with the given radius. If the alternative syntax is used, only entities of given types or subtypes are listed. Entities returned are not sorted by distance. This command doesn't return dead entities or entities inside vehicles. If you need to return those, use `entities` command.


---
*Syntaxes:*

position `nearEntities` radius

position `nearEntities` [type, radius]

---
*Example 1:*

```sqf
_list = player nearEntities 20;
_list = ASLToAGL getPosASL player nearEntities 50;
_list = player nearEntities ["Man", 1000];
_list = ASLToAGL getPosASL player nearEntities ["LaserTarget", 3000];
_list = player nearEntities [["Car", "Motorcycle", "Tank"], 50];
_list = ASLToAGL getPosASL player nearEntities [["Man", "Air", "Car", "Motorcycle", "Tank"], 200];
```