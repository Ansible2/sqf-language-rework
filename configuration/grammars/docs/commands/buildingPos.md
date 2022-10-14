Returns position of a given indexed position in a `building`.


---
*Syntaxes:*

building `buildingPos`  index

---
*Example 1:*

```sqf
_soldier setPosATL (_house1 buildingPos 2);
```

*Example 2:*

```sqf
_allpositions = nearestBuilding player buildingPos -1;
```