Creates a location of the specified class and dimensions at the specified position.
Classes are defined in **CfgLocationTypes**; for possible location types see `Location Types`.<br>
The alternative syntax allows to convert a non-editable (built-in) terrain location into an editable one, with the following restrictions:
* it cannot be deleted (but can be `setType` to "Invisible" to hide it)
* it cannot be moved


---
*Syntaxes:*

`createLocation` [className, position, sizeX, sizeY]

`createLocation` [location]

---
*Example 1:*

```sqf
_location = createLocation ["NameVillage", [4035,2151,10], 100, 100];
```

*Example 2:*

```sqf
_location = createLocation ["NameVillage", [4035,2151,10], 30, 30];
_location setText "Player town";
```

*Example 3:*

```sqf
private _terrainLocation = nearestLocation [player, "nameCity"];	// assuming it returns a built-in location
_terrainLocation setType "Invisible";								// does not do anything
private _editableLocation = createLocation [_terrainLocation];		// does the conversion
_editableLocation setType "Invisible";								// hides the location
```