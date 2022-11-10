Play given sentence/conversation. Script terminates itself when conversation is finished.<br>
Conversation must be declared in `Description.ext/CfgSentences`.


---
*Syntaxes:*

[topic, container, section, radioMode, code, speakers, soundVolume, radioProtocol] spawn `BIS_fnc_kbTell`

---
*Example 1:*

```sqf
["01_Wave", "A_in", nil, "SIDE", nil, nil, 1, false] spawn BIS_fnc_kbTell;
```