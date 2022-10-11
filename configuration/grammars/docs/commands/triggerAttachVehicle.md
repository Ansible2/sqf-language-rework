Specifies the entity which will activate the selected trigger.<br>
*If `[]` is given, the trigger is decoupled from the assigned vehicle (example 2).
*If the activation source is `"VEHICLE"`, `"GROUP"`, `"LEADER"` or `"MEMBER"`, it is changed to `"NONE"`. 
*If `[vehicle]` is given, the trigger is coupled to the vehicle or its group. 
*When the source is `"GROUP"`, `"LEADER"` or `"MEMBER"`, it is coupled to the group, otherwise it is coupled to the vehicle and the source is changed to `"VEHICLE"`.


---
*Example 1:*
```sqf
trigger triggerAttachVehicle [player];
```

*Example 2:*
```sqf
trigger triggerAttachVehicle [];
```