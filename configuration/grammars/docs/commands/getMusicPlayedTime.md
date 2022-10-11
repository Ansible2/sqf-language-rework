Returns elapsed time in seconds for currently playing music track.


---
*Example 1:*
```sqf
playMusic ["LeadTrack06_F_Tank", 0];
onEachFrame {hintSilent str getMusicPlayedTime};
```