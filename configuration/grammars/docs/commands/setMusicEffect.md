Defines a music track played on activation. If another track is playing already, this will stop it and start the new track.

Track is a subclass name of CfgMusic. In addition, "$STOP$" (stops the current music track) or use **`playMusic` ""**.
When used in a trigger, the track starts on activation but does not automatically stop on deactivation.


---
*Example 1:*
```sqf
_trigger setMusicEffect "Track1";
```

*Example 2:*
```sqf
[_group1,1] setMusicEffect "$STOP$";
```