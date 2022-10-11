Returns the global namespace attached to mission.


---
*Example 1:*
```sqf
missionNamespace setVariable ["StringVariable", "myString"]; // same as: StringVarilable = "myString";
_myStringValue = missionNamespace getVariable "StringVariable";
hint _myStringValue; // hints "myString"
```