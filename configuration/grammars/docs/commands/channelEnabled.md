Returns `Array` of `Boolean`s in format [enabledChat, enabledVoN] for the given channel. For more information about enabling/disabling of chat channels see `enableChannel`.


---
*Syntaxes:*

`channelEnabled` channelID

---
*Example 1:*

```sqf
_isGlobalChatEnabled = (channelEnabled 0) select 0; // check if user can use text on global channel
```

*Example 2:*

```sqf
_isGlobalVoiceEnabled = (channelEnabled 0) select 1; // check if user can use the VoN on global channel
```

*Example 3:*

```sqf
(channelEnabled 0) params ["_isGlobalChatEnabled", "_isGlobalVoiceEnabled"]; // sets both variables
```