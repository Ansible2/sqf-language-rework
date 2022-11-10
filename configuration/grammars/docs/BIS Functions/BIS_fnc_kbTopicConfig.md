Reads the `configs` to return a matching **config `>>` `CfgSentences` `>>` missionName `>>` topic** entry.


---
*Syntaxes:*

[missionName, topic] call `BIS_fnc_kbTopicConfig`

---
*Example 1:*

```sqf
private _configTopic = ["missionName", "topic"] call BIS_fnc_kbTopicConfig;
```