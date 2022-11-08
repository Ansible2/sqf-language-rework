#### Description:
Creates a command menu tree dynamically instead of needing to define sub menus

#### Parameters:
0: **_menuPath** *(ARRAY)* - The menu global variable paths (in order)

1: **_endExpression** *(STRING, CODE, or ARRAY)* - The code to be executed at the end of the path.
It receives all menu parameters in _this. (see KISKA_fnc_callBack)

2: **_exitExpression** *(STRING, CODE, or ARRAY)* - The code to be executed in the event that
the menu is closed by the player. It gets all added params up to that point in _this.
(see KISKA_fnc_callBack)

#### Returns:
NOTHING

#### Examples:
```sqf
[
["#USER:myMenu_1","#USER:myMenu_2"],
"hint str _this"
] spawn KISKA_fnc_commandMenuTree
```

