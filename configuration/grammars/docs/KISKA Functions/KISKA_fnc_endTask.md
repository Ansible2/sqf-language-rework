#### Description:
Either completes, cancels, or ends a task and calls the task's onComplete event if it is defined in KISKA_cfgTasks. Meant to be paired with KISKA_fnc_createTaskFromConfig.

#### Parameters:
0: **_taskId** *(STRING)* - The task id/KISKA_cfgTasks class name

1: **_state** *(NUMBER)* - 0 for SUCCEEDED, 1 for FAILED, 2 for CANCELED

2: **_notify** *(BOOL)* - Should a nortification be shown

4: **_owner** *(BOOL, OBJECT, GROUP, SIDE, or ARRAY)* - Whom the task is assigned to
    (this is only needed in the event that the task is ended without it having been created)

#### Returns:
*(BOOL)* - Whether or not the state of the task was set to the desired one

#### Examples:
```sqf
private _taskIsSucceeded = ["mytaskID",0] call KISKA_fnc_endTask;
```

