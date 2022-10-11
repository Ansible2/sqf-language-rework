Checks if given object can be stored in inventory of given object or any inventory container (`uniform`, `vest`, `backpack`) of given unit. Since Arma 3 v2.09 this command will count unit storage space as whole, instead of as biggest container, when multiple items are queried.


---
*Example 1:*
```sqf
if (player canAdd "FirstAidKit") then
{
	player addItem "FirstAidKit";
}
else
{
	hint "Not enough space";
};
```

*Example 2:*
```sqf
if (_box canAdd "FirstAidKit") then
{
	_box addWeaponCargo ["FirstAidKit", 1];
}
else
{
	hint "Not enough space";
};
```

*Example 3:*
```sqf
car canAdd [currentWeapon player, 50];
```

*Example 4:*
```sqf
// check if attachment can be loaded
"arifle_Katiba_GL_F" canAdd "acc_pointer_IR";
"arifle_Katiba_GL_F" canAdd ["acc_pointer_IR", "PointerSlot"];
```

*Example 5:*
```sqf
// check if magazine can be loaded
"arifle_Katiba_GL_F" canAdd "30Rnd_65x39_caseless_green";
"arifle_Katiba_GL_F" canAdd ["30Rnd_65x39_caseless_green", "this"];
"arifle_Katiba_GL_F" canAdd ["1Rnd_SmokeRed_Grenade_shell", "EGLM"];
```