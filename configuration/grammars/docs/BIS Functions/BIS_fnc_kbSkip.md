Skip a conversation started with `BIS_fnc_kbTell`. Currently played sentence will be finished.


---
*Syntaxes:*

[topicName, mission, wait] call `BIS_fnc_kbSkip`

---
*Example 1:*

```sqf
["topic1", "currentMission"] call BIS_fnc_kbSkip;
```

*Example 2:*

```sqf
[player] call BIS_fnc_kbSkip;
```