Forces a flag texture onto a flag carrier (unit, vehicle or flag pole).
No flag holder is required. If **""** is used as texture, the texture is removed.
This will override regularly owned flags.
This type of flag texture cannot be retrieved using `flagTexture`, but `getForcedFlagTexture`.


---
*Example 1:*
```sqf
player forceFlagTexture "\A3\Data_F\Flags\Flag_red_CO.paa";
```