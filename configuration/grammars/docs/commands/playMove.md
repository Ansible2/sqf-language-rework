When used on a person, smooth transition to given move will be done.<br>
The difference between `playMove` and `playMoveNow` is that `playMove` adds another move to the move queue, while `playMoveNow` replaces the whole move queue with new move (see {{HashLink|#Example 2}}).


---
*Example 1:*
```sqf
soldierOne playMove "Stand";
```

*Example 2:*
```sqf
player switchMove "AmovPercMstpSrasWrflDnon";
[] spawn 
{
	sleep 0.5;
	player playMove "AmovPpneMstpSrasWrflDnon";		// player goes prone
	player playMove "amovPknlMstpSrasWrflDnon";		// player gets up on one knee
};
```

*Example 3:*
```sqf
player switchMove "AmovPercMstpSrasWrflDnon";
[] spawn
{
	sleep 0.5;
	player playMove "AmovPpneMstpSrasWrflDnon";		// player never goes prone
	player playMoveNow "AmovPknlMstpSrasWrflDnon";	// player goes down on one knee straight away
};
```