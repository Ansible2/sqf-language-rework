Adds icon to a group leader. Returns icon ID, Control icons visibility with `setGroupIconsVisible`.


---
*Syntaxes:*

group `addGroupIcon` [iconClass, offset]

---
*Example 1:*

```sqf
groupName addGroupIcon ["b_inf", [offsetX, offsetY]];
```

*Example 2:*

```sqf
// Enable icons in 2D and 3D 
setGroupIconsVisible [true, true]; 
setGroupIconsSelectable true; 
 
// Add the icon for all existing groups 
allGroups apply 
{ 
  private _icon = ["o_inf", "b_inf", "n_inf", "c_unknown"] select (side _x call BIS_fnc_sideID); 
  private _color = [side _x, false] call BIS_fnc_sideColor; 
  _x addGroupIcon [_icon, [0, 0]]; 
  _x setGroupIconParams [_color, groupID _x, linearConversion [1, 15, count units _x, 0.5, 3, false], true]; 
}; 
 
// Add group event handler to all existing groups to handle to icon sizing 
allGroups apply  
{ 
  _x addEventHandler ["UnitLeft",  
  { 
    params ["_group"]; 
    getGroupIconParams group player params ["_color", "_text", "_scale", "_visibility"]; 
    _group setGroupIconParams [_color, _text, linearConversion [1, 15, count units _group, 0.5, 2, true], _visibility]; 
  }]; 
}; 
 
// Add the icons whenever a group get's created 
addMissionEventHandler ["GroupCreated", 
{ 
  params ["_group"]; 
  _group spawn 
  { 
    params ["_group"]; 
    private _start = diag_tickTime; 
    waitUntil {sleep 1; units _group isNotEqualTo [] || diag_tickTime - _start > 5}; 
    if (units _group isEqualTo []) exitWith {}; 
 
    private _icon = ["o_inf", "b_inf", "n_inf", "c_unknown"] select (side _group call BIS_fnc_sideID); 
    private _color = [side _group, false] call BIS_fnc_sideColor; 
 
    _group addGroupIcon [_icon, [0, 0]]; 
     
    // Scale icon depending on group size 
    _group setGroupIconParams [_color, groupID _group, linearConversion [1, 15, count units _group, 0.5, 2, true], true]; 
 
    _group addEventHandler ["UnitLeft",  
    { 
      params ["_group"]; 
      getGroupIconParams group player params ["_color", "_text", "_scale", "_visibility"]; 
      _group setGroupIconParams [_color, _text, linearConversion [1, 15, count units _group, 0.5, 2, true], _visibility]; 
    }]; 
  };   
}]; 
 
// Show group info when hovering over an icon (2D/3D) 
addMissionEventHandler ["GroupIconOverEnter", 
{ 
  params 
  [ 
    "_is3D", "_group", "_waypointId", 
    "_posX", "_posY", 
    "_shift", "_control", "_alt" 
  ]; 
  hintSilent parseText format 
  [ 
    "<t align='left' font='EtelkaMonospacePro'><br/><t size='1.2'>General Information:</t><br/>Callsign: %1<br/>Leader: %2<br/>No. of Units: %3<br/>Delete when Empty: %4<br/><br/><t size='1.2'>Group Status:</t><br/>Health: %5<br/>Fleeing: %6<br/>Attack Enabled: %7<br/>Combat Behaviour: %8<br/>Combat Mode: %9<br/>Formation: %10<br/>Speed: %11<br/><br/><t size='1.2'>Waypoints:</t><br/>No. of Waypoints: %12<br/>Current Waypoint: %13<br/>Speed: %14</t>", 
    format ["%1 (%2)",groupID _group, if (vehicle leader _group isNotEqualTo leader _group) then {[configFile >> "CfgVehicles" >> typeOf vehicle leader _group ] call BIS_fnc_displayName} else {"-"}], 
    name leader _group, 
    count units _group, 
    isGroupDeletedWhenEmpty _group, 
    units _group apply {str round ((1 - damage _x)* 100) + " %"}, 
    fleeing leader _x, 
    attackEnabled _group, 
    combatBehaviour _group, 
    combatMode _group, 
    formation _group, 
    speedMode _group, 
    count waypoints _group, 
    waypointType [_group, currentWaypoint _group], 
    units _group apply {str round speed _x + " km/h"} 
  ];

  if !(_group getVariable ["IconEnlarged", false]) then
  {
    _group setVariable ["IconEnlarged", true];

    getGroupIconParams _group params ["_color", "_text", "_scale", "_visibility"]; 
    _group setGroupIconParams [_color, _text, _scale * 1.25, _visibility];
  };
}]; 
 
// Remove the hint whenever the mouse is leaving the icon area (2D/3D) 
addMissionEventHandler ["GroupIconOverLeave", 
{ 
  params 
  [ 
    "_is3D", "_group", "_waypointId", 
    "_posX", "_posY", 
    "_shift", "_control", "_alt" 
  ]; 
  hintSilent "";

  if (_group getVariable ["IconEnlarged", false]) then
  {
    _group setVariable ["IconEnlarged", false];

    getGroupIconParams _group params ["_color", "_text", "_scale", "_visibility"]; 
    _group setGroupIconParams [_color, _text, linearConversion [1, 15, count units _group, 0.5, 2, true], _visibility];
  };
}]; 
 
// Delete group and its units when clicking on the icon 
addMissionEventHandler ["GroupIconClick", 
{ 
  params 
  [ 
    "_is3D", "_group", "_waypointId", 
    "_mouseButton", "_posX", "_posY", 
    "_shift", "_control", "_alt" 
  ]; 
 
  if (!_shift && _control && !_alt) then 
  { 
    units _group apply {deleteVehicle _x}; 
    deleteGroup _group; 
  }; 
}];
```