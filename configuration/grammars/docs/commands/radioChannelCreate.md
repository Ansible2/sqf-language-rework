Create a custom radio channel with the given color, label, call sign and registered characters. The ``custom channel ID`` returned can be used to manipulate the created channel later. There are 10 slots for custom radio channels which would correspond to channels 6-15 (see `getPlayerChannel`). The command will find an unused index in this range and create it when found.


---
*Example 1:*
```sqf
_channelID = radioChannelCreate [[0.96, 0.34, 0.13, 0.8], "Q-dance Radio", "%UNIT_NAME", [player1, player2]];
```

*Example 2:*
```sqf
_channelID = radioChannelCreate [[0.96, 0.34, 0.13, 0.8], "Q-dance Radio", "%UNIT_NAME", [player1, player2], true];
// using true also disables automatic quotes for chat in channel (Arma 3)
```

*Example 3:*
Create custom channel and add all players to it, present and JIP:

```sqf
if (isServer) then
{
	private _channelName = "Q-dance Radio";
	private _channelID = radioChannelCreate [[0.96, 0.34, 0.13, 0.8], _channelName, "%UNIT_NAME", []];
	if (_channelID == 0) exitWith {diag_log format ["Custom channel '%1' creation failed!", _channelName]};
	[_channelID, {_this radioChannelAdd [player]}] remoteExec ["call", [0, -2] select isDedicated, _channelName];
};
```