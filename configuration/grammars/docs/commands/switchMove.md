Immediately applies given animation to the unit. For a smooth transition from the current animation, use `playMove`.


---
*Syntaxes:*

person `switchMove` moveName

---
*Example 1:*

Prone:

```sqf
player switchMove "AmovPpneMstpSrasWrflDnon";
```

*Example 2:*

Sit player immediately and globally:

```sqf
[player, "AmovPsitMstpSlowWrflDnon"] remoteExec ["switchMove"];
```

*Example 3:*

Resets unit's animation:

```sqf
_unit switchMove "";
```