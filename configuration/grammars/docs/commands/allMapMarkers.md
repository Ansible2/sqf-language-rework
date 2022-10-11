Returns all markers in map including user placed markers (_USER_DEFINED #). <br><br>
Since Arma 3 v1.58 User defined markers have the following name format: <br>**_USER_DEFINED #<PlayerID>/<MarkerID>/<ChannelID>** where:
* <PlayerID> - unique network id of the player in `String` format, also available as `String` in the 6th param in [[Arma 3: Mission Event Handlers#PlayerConnected | "PlayerConnected"]] and [[Arma 3: Mission Event Handlers#PlayerDisconnected|"PlayerDisconnected"]] EHs 
* <MarkerID> - a marker counter id
* <ChannelID> - id of the chat channel on which marker was placed (see `currentChannel`)
For custom waypoint position (LShift+LMB) see `customWaypointPosition`


---
*Example 1:*
```sqf
_markers = allMapMarkers;
```

returns: ["marker1","_USER_DEFINED #2/0"]

*Example 2:*
```sqf
{
	private "_a";
	_a = toArray _x;
	_a resize 15;
	if (toString _a == "_USER_DEFINED #") then
	{
		deleteMarker _x;
	}
} forEach allMapMarkers;
```

*Example 3:*
```sqf
if (_someString in allMapMarkers) then
{
	hint (_someString + " is a valid marker name");
};
```