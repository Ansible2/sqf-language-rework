A non-existing Config.

Unlike other null values (objNull, grpNull, etc), configNull returns true when compared to itself.

```sqf
configNull == configNull;							// returns true
isNull configNull;									// returns true
configNull isEqualTo configNull;					// returns true
configNull == configFile >> "ANonExistentEntry";	// returns true
```