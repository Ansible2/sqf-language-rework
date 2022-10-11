Attaches a script to a scripted waypoint. In early versions of Arma, command consisted of a script name and additional script arguments and the script had to use `SQS Syntax`. The script receives the following arguments in `_this` variable: [group, position, target] + [the optional passed arguments]. The optional arguments are `append`ed to the end of the arguments array.


---
*Example 1:*
```sqf
[_grp, 2] setWaypointScript "find.sqs player";
```

*Example 2:*
```sqf
[_grp, 2] setWaypointScript "somescript.sqf [1,2,3,4,5,6,7,8]";
```