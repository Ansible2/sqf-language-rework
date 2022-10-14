When argument is `Object`, the command returns the name given to a unit using the `setIdentity` instruction or selected randomly by the game engine if `setIdentity` has not been used on the unit. If used on vehicle, name of first crew member (in order commander, driver, gunner). If used on an object, "Error: No unit" is being returned.<br>
When argument is `Location`, the location's name is returned. To return the textual value of a location use `text` command instead.


---
*Syntaxes:*

`name` object

`name` location

---
*Example 1:*

```sqf
_name = name player;
```

*Example 2:*

```sqf
_locationName = name myLocation;
```

*Example 3:*

```sqf
name nearestLocation [position player, "Hill"]; // ""
text nearestLocation [position player, "Hill"]; // "Lesnoy Khrebet"
```