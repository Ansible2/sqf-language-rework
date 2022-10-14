Types text to the side radio channel by the specified unit.


---
*Syntaxes:*

unit `sideChat` chatText

[side, identity] `sideChat` chatText

---
*Example 1:*

```sqf
_soldierOne sideChat "Show this text";
```

*Example 2:*

```sqf
[west, "HQ"] sideChat "Hi there";
```

*Example 3:*

```sqf
driver vehicle player sideChat "sideChat";
driver vehicle player globalChat "globalChat";
driver vehicle player groupChat "groupChat";
vehicle player vehicleChat "vehicleChat";
driver vehicle player commandChat "commandChat";
driver vehicle player customChat [1, "customChat"];
systemChat "systemChat";
```

*Example 4:*

```sqf
[[blufor, "BLU"], "message"] remoteExec ["sideChat"]; // shows the message to all players
```

*Example 5:*

```sqf
unit setGroupId ["Cpt. Miller"]; // changes the group's callsign
unit sideChat "Hello ladies!";
```