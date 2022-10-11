Make unit say given sound. The sound is defined in `CfgSounds`. If the `unit` is a `person`, it will also perform corresponding lipsync effect provided an appropriate .lip file has been created for this sound.

* A dead or non-existent unit obviously cannot say anything.
* If the camera is not within given range, title is not shown and the sound will not be heard.
* See also `playSound` in order to play a sound wherever the `camera/player` is.


---
*Example 1:*
```sqf
(units player select 1) say ["whisper1", 5];
```

*Example 2:*
Arma 3:

```sqf
player say "scuba_breath";
```