#### Description:
For a given string id, return the latest "index" for that id. This increments the id by one each time it is called.

#### Parameters:
0: **_id** *(string)* - The id to increment

#### Returns:
<NUMBER> - the latest index of the given id

#### Examples:
```sqf
private _latesIndexFor_myId = ["myId"] call KISKA_fnc_idCounter;
```

