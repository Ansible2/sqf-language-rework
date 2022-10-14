Finish the mission. If the server is set to run persistent mission, `failMission` will not end the mission when last player gets kicked to the lobby. Use `endMission` to end the mission.

The end type can be:
* "CONTINUE" - this is default type, basically an alias to do nothing
* "KILLED"
* "LOSER"
* "END1"
* "END2"
* "END3"
* "END4"
* "END5"
* "END6"

`Mission saves won't be deleted`.<br><br>


---
*Syntaxes:*

`failMission` endtype

---
*Example 1:*

```sqf
failMission "LOSER";
```