Shows notification banner with given text, animated or not, at the top of the screen in the `Eden Editor`.<br/>
Since *(Reference GVI "arma3|2.10")* this function will no longer throw an error outside of `Eden Editor`. Because **Display3DEN** (<sqf inline>findDisplay 313
```) is not available, it will only play the sound according to the message type.
The sound is played through the UI channel with `playSoundUI`.


---
*Syntaxes:*

[text, type, duration, animate] call `BIS_fnc_3DENNotification`

---
*Example 1:*

```sqf
["This is an animated notification", 0] call BIS_fnc_3DENNotification;
```

*Example 2:*

```sqf
["This is a warning that is not animated", 1, 2, false] call BIS_fnc_3DENNotification;
```