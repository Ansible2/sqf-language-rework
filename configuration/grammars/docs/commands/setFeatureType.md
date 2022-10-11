Enable/disable object as a feature/landmark. Possible feature types:
* 0 - Feature disabled
* 1 - Object is always visible within object view distance
* 2 - Object is always visible within terrain view distance
The limit is 500 map/static objects and 200 dynamic objects including config features and auto features (flying helicopters, airplanes). When limit is reached, function returns false.


---
*Example 1:*
Set a building to be always rendered:

```sqf
building setFeatureType 2;
```