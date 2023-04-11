#### Description:
For a given string id, return the latest "index" for that id. This increments the id by one each time it is called. This function does not check if the provided namespace is not null, so ensure it is checked

#### Parameters:
0: **_id** *(string)* - The id to increment

1: **_namespace** *(GROUP, OBJECT, LOCATION, NAMESPACE, CONTROL, DISPLAY, TASK, TEAM-MEMBER)* - The namespace to check the id count in, this is `localNamespace` by default.

#### Returns:
*(NUMBER)* - the latest index of the given id

#### Examples:
```sqf
private _latesIndexFor_myId = ["myId"] call KISKA_fnc_idCounter;
```

