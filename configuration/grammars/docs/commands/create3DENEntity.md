Create new `Eden Entity`. Used for creating individual entities; to create a `composition` (e.g., infantry squad), use [[create3DENComposition]].<br>
This is the only way to add new editable entities to an `Eden Editor` scenario. Other 'create' commands like `createVehicle` or `createUnit` will still work, but the resulting entity will not be editable.


---
*Syntaxes:*

[[create3DENEntity]] [mode, class, position, isEmpty]

group [[create3DENEntity]] [mode, class, position, isEmpty]

---
*Example 1:*

```sqf
dude1 = create3DENEntity ["Object", "B_Soldier_F", screenToWorld [0.5, 0.5]];
```

*Example 2:*

```sqf
dude2 = group dude1 create3DENEntity ["Object", "B_Soldier_AR_F", screenToWorld [0.5, 0.5]];
```

*Example 3:*

```sqf
myMarker = create3DENEntity ["Marker", "mil_warning", position player];
```

*Example 4:*

```sqf
mytrigger = create3DENEntity ["Trigger", "EmptyDetectorArea10x10", position player];
```

*Example 5:*

{{GVI|arma3|2.06