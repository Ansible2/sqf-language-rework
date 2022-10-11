Sets the orientation of a location. The location's area and map icon (if its type uses an icon) will be rotated to this orientation.


---
*Example 1:*
```sqf
_location = createLocation ["VegetationPalm", getPos player, 200, 200];
_location setText "Benargee's Palm Tree";
_location setDirection 45;
```