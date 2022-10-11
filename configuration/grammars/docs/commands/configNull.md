A non-existing `Config`.

{{Feature|important|
Unlike other null values (`objNull`, `grpNull`, etc), `configNull` returns `true` when compared to itself.
<sqf>
configNull == configNull;							// returns true
isNull configNull;									// returns true
configNull isEqualTo configNull;					// returns true
configNull == configFile >> "ANonExistentEntry";	// returns true
</sqf>


---
*Example 1:*
```sqf
_config = missionNamespace getVariable ["myConfig", configNull];
```

*Example 2:*
```sqf
str configNull; // returns ""
```