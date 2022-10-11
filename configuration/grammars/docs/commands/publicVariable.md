Reliably broadcasts `missionNamespace` variable and its `current` value to all computers (server/client).<br>
Variables broadcast with `publicVariable` during a mission will be available to `JIP` clients with the value they held at the time.<br>
Such variables are persistent and sent to the JIP client before the first batch of client-side `Event Scripts` (such as `init.sqf`) is run.


---
*Example 1:*
```sqf
TAG_MyPublicVariable = 0;
TAG_MyPublicVariable = 1;
publicVariable "TAG_MyPublicVariable";	// other clients will receive the "TAG_MyPublicVariable" variable with a 1 value

TAG_MyPublicVariable = 2;				// needs to be broadcast again - synchronisation is not automatic
```

*Example 2:*
JIP example:

```sqf
if (isNil "TAG_CurrentTarget") then	// has the variable already been set and broadcast?
{
	TAG_CurrentTarget = objNull;	// if not, set it on the local machine
};

player doTarget TAG_CurrentTarget;
```

*Example 3:*
```sqf
TAG_BossName = "EvilBigBoss";

publicVariable TAG_BossName;	// wrong - will try to publicVariable "EvilBigBoss" variable, that does not exist
publicVariable "TAG_BossName";	// correct - important, do not forget the QUOTES
```