Defines an action performed when the team switch is finished.
Commandset receives the following special variables: `_from` object previous unit, `_to` object current unit.
Consecutive use of onTeamSwitch command will overwrite previously set commandset.


---
*Example 1:*
```sqf
onTeamSwitch { [_from, _to] execVM "myTeamSwitchScript.sqf"; };
```