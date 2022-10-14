Sets flag `Side`. A flag may be taken by any unit that is enemy to the side that owns the flag. Just like with `setFlagTexture`, if the command executed where unit is `local` effect of the command will be global and `JIP` compatible.


---
*Syntaxes:*

flag `setFlagSide` side

---
*Example 1:*

```sqf
_flag1 setFlagSide east;
```

*Example 2:*

Capturable OPFOR flag:

```sqf
private _flag = "FlagPole_F" createVehicle position player;
_flag setFlagTexture "\A3\Data_F\Flags\Flag_CSAT_CO.paa";
_flag setFlagSide east;
```