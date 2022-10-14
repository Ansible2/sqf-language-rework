Creates an agent of the given type. An agent does not have a group or leader or the standard soldier `FSM` associated with it - for instance, an enemy soldier spawned as an agent has limited AI and will do nothing when fired upon - which can be useful to limit the amount of AI processing being done in a mission with very large numbers of "AI". Animals are also commonly created as agents.


---
*Syntaxes:*

`createAgent` [type, position, markers, placement, special]

---
*Example 1:*

```sqf
private _agent = createAgent ["B_Soldier_F", getPosATL player, [], 0, "FORM"];
```

*Example 2:*

```sqf
private _agent = createAgent ["Snake_random_F", ASLtoAGL getPosASL player, [], 0, "CAN_COLLIDE"]; // Creates a snake at player's feet
```