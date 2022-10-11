Sets flag texture.


---
*Example 1:*
```sqf
_flagE setFlagTexture "\ca\misc\data\sever_vlajka.paa";
```

*Example 2:*
```sqf
_flagW setFlagTexture "\ca\misc\data\usa_vlajka.paa";
```

*Example 3:*
```sqf
flag1 setFlagTexture "\A3\Data_F\Flags\Flag_red_CO.paa";
```

*Example 4:*
```sqf
_customFlag setFlagTexture "myMissionFlag.paa";
```

*Example 5:*
```sqf
_flag_Arma_3 setFlagTexture "\a3\ui_f\data\Logos\arma3_expansion_ca.paa";
```

*Example 6:*
Capturable OPFOR flag:

```sqf
private _flag = "FlagPole_F" createVehicle position player;
_flag setFlagTexture "\A3\Data_F\Flags\Flag_CSAT_CO.paa";
_flag setFlagSide east;
```