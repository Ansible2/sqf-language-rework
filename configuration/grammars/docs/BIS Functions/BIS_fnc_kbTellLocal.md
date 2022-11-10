Play given sentence, disable radio and/or lower sounds. Will use `BIS_fnc_showSubtitle` for better effects if channel is DIRECT or VEHICLE.


---
*Syntaxes:*

[mode, parameters] call `BIS_fnc_kbTellLocal`

---
*Example 1:*

```sqf
["sentence", [player, [BIS_HQ, "myTopic", "playerSentence1"]]] call BIS_fnc_kbTellLocal;
```

*Example 2:*

```sqf
["conversationStart", [0.5, true]] call BIS_fnc_kbTellLocal;
```

*Example 3:*

```sqf
["conversationEnd", [0.5, true]] call BIS_fnc_kbTellLocal;
```