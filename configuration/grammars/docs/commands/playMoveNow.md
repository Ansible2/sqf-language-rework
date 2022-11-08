When used on a person,a smooth transition to the given move will be initiated, but all previous playMove are discarded. <br>
The difference between `playMove` and `playMoveNow` is that `playMove` adds another move to the move queue, while `playMoveNow` replaces the whole move queue with new move (see <See HashLink Reference Example 2>).


---
*Syntaxes:*

soldier `playMoveNow` moveName

---
*Example 1:*

```sqf
player playMoveNow "AmovPercMevaSlowWrflDf";
```

*Example 2:*

```sqf
player switchMove "AmovPercMstpSrasWrflDnon";
[] spawn 
{
	sleep 0.5;
	player playMove "AmovPpneMstpSrasWrflDnon"; // player goes prone
	player playMove "amovPknlMstpSrasWrflDnon"; // player gets up on one knee
};
```

*Example 3:*

```sqf
player switchMove "amovpercmstpsraswrfldnon";
[] spawn
{
	sleep 0.5;
	player playMove "AmovPpneMstpSrasWrflDnon"; // player never goes prone
	player playMoveNow "AmovPknlMstpSrasWrflDnon"; // player goes down on one knee straight away
};
```