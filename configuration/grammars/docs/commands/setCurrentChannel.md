Sets given channel as current chat channel. Scripted way of selecting desired channel on the UI. The given channel may be disabled (see `enableChannel`), this is why this command returns boolean, `true` on success or `false` on failure. 
 
For Custom Radio (see `radioChannelCreate`)


---
*Syntaxes:*

`setCurrentChannel` channelID

---
*Example 1:*

```sqf
_isDirectSelected = setCurrentChannel 5; // sets Direct channel as current active
```