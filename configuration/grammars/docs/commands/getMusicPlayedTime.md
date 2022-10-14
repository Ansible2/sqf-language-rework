Returns elapsed time in seconds for currently playing music track.


---
*Syntaxes:*

`getMusicPlayedTime`

---
*Example 1:*

```sqf
playMusic ["LeadTrack06_F_Tank", 0];
onEachFrame {hintSilent str getMusicPlayedTime};
```