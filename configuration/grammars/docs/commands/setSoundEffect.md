Defines the different sound effects. To stop any sound, deactivate the trigger (might take up to 0.5 seconds to stop) or delete the trigger (immediate).


---
*Example 1:*
```sqf
_trigger setSoundEffect ["Alarm", "", "", ""];
```

*Example 2:*
```sqf
[_group1,2] setSoundEffect ["Alarm", ""];
```

*Example 3:*
```sqf
_trigger setSoundEffect ["", "Alarm", "", ""];
```

*Example 4:*
```sqf
_trigger setSoundEffect ["", "", "BattlefieldExplosions3", ""];
```

*Example 5:*
```sqf
_trigger setSoundEffect ["", "", "", "Owl"];
```