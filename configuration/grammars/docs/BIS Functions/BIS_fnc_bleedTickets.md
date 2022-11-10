Function that handles bleeding ticket system. Tickets are set beforehand using `BIS_fnc_respawnTickets`.


---
*Syntaxes:*

[sides, dominanceRatio, bleedingAmount, bleedingDelay] call `BIS_fnc_bleedTickets`

---
*Example 1:*

```sqf
call BIS_fnc_bleedTickets;
```

*Example 2:*

```sqf
[[west, east], 1, 1, 10] call BIS_fnc_bleedTickets;
```