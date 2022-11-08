#### Description:
Balances AI among all logged Headless Clients in a very simple fashion. Designed to be run once and also should only be done when all HC are logged onto the server. Excluded groups and units can be added to the array KISKA_hcExcluded.

#### Parameters:
0: **_checkInterval** *(NUMBER)* - How often to redistribute, if -1, will not loop

#### Returns:
NOTHING

#### Examples:
```sqf
[] spawn KISKA_fnc_balanceHeadless;
```

