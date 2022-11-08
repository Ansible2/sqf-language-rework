#### Description:
Spawns a supply drop near the requested position. Crates will parachute in.

#### Parameters:
0: **_classNames** *(ARRAY)* - Classnames of boxes you want dropped. Also determines the number of crates

1: **_altittude** *(NUMBER)* - Start height of drop

2: **_dropPosition** *(OBJECT, GROUP, ARRAY, LOCATION, TASK)* - Position you want the drop to be near

OPTIONAL:

3: **_stopAdjustingHeight** *(NUMBER)* - The height (ATL) at which the velocity of the crates should top being managed

4: **_chuteVelocityFreq** *(NUMBER)* - The frequency in seconds at which the velocity of the crates should be managed

5: **_stage_1_height** *(NUMBER)* - The height above which the _stage_1_velocityDiff is used to manage the downward velocity of the crates

6: **_stage_1_velocityDiff** *(NUMBER)* - The downward velocity of the crates above _stage_1_height

7: **_stage_2_velocityDiff** *(NUMBER)* - The downward velocity of the crates below _stage_1_height

#### Returns:
<ARRAY> - The containers dropped

#### Examples:
```sqf
[["className1","className2"], 500, player] call KISKA_fnc_supplyDrop;
```

