Returns array of all simple objects that belong to the listed class names. If the array of types is empty [], all simple objects are returned including those without class name.
{{Feature|informative|
* There is no inheritance in simple objects, so only exact class match is allowed.
* `className` is not case sensitive.


---
*Example 1:*
```sqf
private _boxesAndChairs = allSimpleObjects ["Box_NATO_Equip_F", "Land_CampingChair_V2_F"];
```

*Example 2:*
```sqf
private _allSimpleObjects = allSimpleObjects [];
```