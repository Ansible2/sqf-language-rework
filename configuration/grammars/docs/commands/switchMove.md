Immediately applies given animation to the unit. For a smooth transition from the current animation, use `playMove`.
).

{{Feature|informative|It is a good practice to always use `playMoveNow` after `switchMove` to make sure the animation plays correctly:
<sqf>
_unit switchMove "myMove";
_unit playMoveNow "myMove";
</sqf>


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