#### Description:
Sets up an event that will fire when a percentage of objects are killed. Uses KILLED or MPKILLED eventhandlers. This should be called where the arguements are local if _useMPKilled is false or on the server if _useMPKilled is true;

#### Parameters:
0: **_objects** *(ARRAY)* - An array of objects to add some form of killed event handlers to

1: **_onThresholdMet** *(CODE, ARRAY, or STRING)* - Code that executes once it has been determined
    that the threshold has been met or exceeded. (See KISKA_fnc_callBack). If attempting
    to add more units to an existing event, use the event id here (see returned hashmap below for id)
    and preceed the event id with a "#" (see examples)
        Params:
            0: *(ARRAY)* - the killed evenhandler params
            1: *(HASHMAP)* - the hashmap described below in "Returns"

// NOT USED if adding to existing event

2: **_threshold** *(NUMBER)* - A number between 0 and 1 that denotes the percentage of objects that
    must've been killed to trigger the _onThresholdMet.
    (e.g. 1 means 100% of them need to be killed, 0.5 means 50%, etc.)

3: **_onKilled** *(CODE, ARRAY, or STRING)* - Code that executes each time a unit has been
        killed (after the _onThresholdMet if threshold has been met). (See KISKA_fnc_callBack)
            Params:
                0: *(ARRAY)* - the killed evenhandler params
                1: *(HASHMAP)* - the hashmap described below in "Returns"

4: **_useMPKilled** *(BOOL)* - Whether or not to use "MPKILLED" events instead of "KILLED".
    IF TRUE, MUST BE RUN ON THE SERVER

#### Returns:
<HASHMAP> - A hashmap containing info about the event
        "id": <STRING> - A localNamespace variable name to access this hashmap
        "total": <NUMBER> - The total number of objects that have this killed event
        "killed": <NUMBER> - The total number of objects that have been killed with this event
        "threshold": <NUMBER> - A number that indicates the percentage of objects that
            must be killed (relative to the total) for this event to fire
            (e.g. 1 means 100% of them need to be killed, 0.5 means 50%, etc.)
        "thresholdMet": <BOOL> - Whether or not the threshold has been met and therefore
            onThresholdMet has fired
        "onKilled": <CODE, ARRAY, or STRING> - Code that executes each time a unit has been
            killed (after the _onThresholdMet if threshold has been met). (See KISKA_fnc_callBack)
                Params:
                    0: <ARRAY> - the killed evenhandler params
                    1: <HASHMAP> - the hashmap described
        "onThresholdMet": <CODE, ARRAY, or STRING> - Code that executes once it has been determined
            that the threshold has been met or exceeded. (See KISKA_fnc_callBack)
                Params:
                    0: <ARRAY> - the killed evenhandler params
                    1: <HASHMAP> - the hashmap described
        "eventCode": <CODE> - The code that is attached to the killed eventhandler
        "type": <STRING> - Type of event, ("KILLED" or "MPKILLED")
        "objectToEventIdMap": <HASHMAP> -  A hashmap that uses objects as keys (should use KISKA_fnc_hashmap_get)
            to get the killed eventhandler id attached to an object.

#### Examples:
```sqf
private _eventMap = [
    [someObject, anotherObject],
    {
        params ["_killedEventParams","_eventMap"];
        _killedEventParams params ["_killedObject"];
        hint str [_killedEventParams, _eventMap];
    }
] call KISKA_fnc_setupMultiKillEvent;
```
```sqf
private _eventMap = [
    [andAdditionalObject],
    ("#" + (_eventMap get "id"))
] call KISKA_fnc_setupMultiKillEvent;
```

