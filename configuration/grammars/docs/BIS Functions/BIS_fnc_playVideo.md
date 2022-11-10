Plays in-game video with a range of options. The function can be `call`ed or `spawn`ed. If `spawn`ed, `scriptDone` command can be used to see if video is stopped or finished. If `call`ed in scheduled environment, the next line of code will not process until the video is stopped or finished.<br>
The function also calls **"BIS_fnc_playVideo_started"}} and {{hl|"BIS_fnc_playVideo_stopped"** Scripted Event Handlers in `missionNamespace` - see `BIS_fnc_addScriptedEventHandler` and `Arma 3: Scripted Event Handlers`.


---
*Syntaxes:*

[content, size, color, skipVarName, bgColor, keepAspect] spawn `BIS_fnc_playVideo`

---
*Example 1:*

```sqf
private _video = ["A3\Missions_F_EPA\video\A_in_intro.ogv"] spawn BIS_fnc_playVideo;
```

*Example 2:*

```sqf
private _video = ["\a3\missions_f_exp\video\exp_m04_v01.ogv"] call BIS_fnc_playVideo;
```

*Example 3:*

```sqf
_video = "a3\missions_f_exp\video\exp_m07_vout.ogv";
_screen = "Land_TripodScreen_01_large_F" createVehicle (player modelToWorld [0,10,0]);
_screen setObjectTexture [0, _video];
[_video, [10, 10]] call BIS_fnc_playVideo;
```

*Example 4:*

How to stop the video:
* call or spawn the function with an empty string: 
```sqf
[""] call BIS_fnc_playVideo;
```
* call or spawn the function with another video: 
```sqf
["\a3\missions_f_exp\video\exp_m04_v02.ogv"] call BIS_fnc_playVideo;
```
* set the variable "BIS_fnc_playVideo_skipVideo" to `true`: 
```sqf
missionNamespace setVariable ["BIS_fnc_playVideo_skipVideo", true];
```
* set the custom skip variable (`skipVarName`) to `true`: 
```sqf
missionNamespace setVariable ["MyCustomSkipVar", true];
sleep 1;
missionNamespace setVariable ["MyCustomSkipVar", nil]; // so it can be reused later
```