Obtains custom radio channel's details, set by `radioChannelCreate`.


---
*Example 1:*
```sqf
private _channelID = radioChannelCreate [[1, 0, 0.5, 0.8], "Q-dance Radio", "%UNIT_NAME", [u1, u2], false];
radioChannelInfo _channelID; // returns [[1,0,0.5,0.8], "Q-dance Radio", "%UNIT_NAME", [u1, u2], false, true]
```