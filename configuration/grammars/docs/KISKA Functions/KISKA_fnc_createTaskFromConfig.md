#### Description:
Creates a task from a config entry. Config should be placed inside KISKA_cfgTasks, just the string is needed to reference the config entry. Parameters from index 2 onwards will accept configNull as an alias for retrieving the configed value of the param if it is not changed (see example 2)

#### Parameters:
0: **_config** *(STRING or CONFIG)* - The config entry to convert to a task

1: **_owner** *(BOOL, OBJECT, GROUP, SIDE, or ARRAY)* - Whom the task is assigned to

(OPTIONAL)

2: **_taskState** *(STRING, BOOL, or configNull)* - The state of the task, will overwrite config entry

3: **_destination** *(OBJECT, ARRAY, or configNull)* The position of the task. Array can be either
    [x,y,z] or [OBJECT,precision] (see setSimpleTaskTarget). The destination can be a configed array, however, this will
    overwrite it if provided here.

4: **_type** *(STRING or configNull)* - The task type (defined in CfgTaskTypes)

5: **_notifyOnCreate** *(BOOL or configNull)* - Should a notification pop up when the task is created?

6: **_visibleIn3D** *(BOOL or configNull)* - Show a 3D task icon

#### Returns:
<STRING> - Created Task Id

#### Examples:
```sqf
// simple task from config
[missionConfigFile >> MyTasks >> "someTaskClass",true] call KISKA_fnc_createTaskFromConfig;
```
```sqf
[
    "someTaskClass", // will search in missionConfigFile >> "KISKA_cfgTasks"
    true,
    "ASSIGNED",
    configNull, // get configed destination value
    "ATTACK"
] call KISKA_fnc_createTaskFromConfig;
```

