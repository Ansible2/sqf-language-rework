Show a 4-directions indicator.<br>
Indicator GUI layer is 17, its `Display` is accessible with <sqf inline>uiNamespace getVariable "BIS_RscMissionScreen_dirIndicator"
```.<br>
Can be reexecuted to change its colour, but once executed this function `cannot` be halted  until `origin`<nowiki/>'s death.


---
*Syntaxes:*

[origin, target, color, sizeCoef] call `BIS_fnc_dirIndicator`

---
*Example 1:*

```sqf
[player, TheBoss, [0.706, 0.0745, 0.0196, 1]] call BIS_fnc_dirIndicator;
```