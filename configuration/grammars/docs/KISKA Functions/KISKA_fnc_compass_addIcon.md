#### Description:
Adds and icon to the compass

#### Parameters:
0: **_iconId** *(STRING)* - A unique id for referencing the compass marker

1: **_iconText** *(STRING)* - The icon's image path or text

2: **_iconPos** *(ARRAY, OBJECT, MARKER, or LOCATION)* - The position of the icon

3: **_color** *(ARRAY)* - The RGBa of the icon

4: **_isActive** *(BOOL)* - Icon will use "active" scale of icon

#### Returns:
<BOOL> - false if new iconId, true if overwriting the icon id

#### Examples:
```sqf
[
    "myMarkerID"
    "images\info_icon.paa"
] call KISKA_fnc_compass_addIcon;
```

