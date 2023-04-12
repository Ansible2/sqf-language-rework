#### Description:
Sleeps for a given time and eventually displays a certain amount on screen.

#### Parameters:
0: **_countDownTotal** : *(NUMBER)* - The amount to countdown from

1: **_shownCountDown** : *(NUMBER)* - The number at which a print out of thecurrent countdown will show on screen.

2: **_soundedCountDown** : *(NUMBER)* - The number at which a beep should play for each second

3: **_soundName** : *(STRING)* - The cfgSournds entry to play for the sound portion of the countdown

#### Returns:
NOTHING

#### Examples:
```sqf
// print numbers when at 15 and play sound at 10
[30,15,10] spawn KISKA_fnc_countdown;
```
```sqf
// print numbers when at 15 and play no sound
[30,15,-1] spawn KISKA_fnc_countdown;
```

