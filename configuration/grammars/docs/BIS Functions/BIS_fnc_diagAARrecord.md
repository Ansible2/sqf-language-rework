Starts recording units position and events for an `AAR` (After Action Review).<br>
The following keys must be added to `Description.ext` for AAR to work properly:
```cpp
diagAAR = 1;		// to enable diag AAR
diagAARauthor = 1;	// if description.ext/dev == profileName, allows the creator to debug himself
diagAARunits = 2;	// which units to record:
						// 1 = units player
						// 2 = allunits + alldead
						// any other value = player
diagAARdelay = 3;	// delay between recording steps
```
The data can be accessed with <sqf inline>profileNamespace getVariable "BIS_fnc_diagAAR_data"
```.


---
*Syntaxes:*

call `BIS_fnc_diagAARrecord`

---
*Example 1:*

```sqf
call BIS_fnc_diagAARrecord;
```