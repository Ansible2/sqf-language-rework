Sets debriefing title, text, subtitle, picture and background for a mission ending. The end type could be the engine-defined ("CONTINUE", "KILLED", "LOSER", "END1", "END2", "END3", "END4", "END5", "END6"), config-defined (see `CfgDebriefing`) or, with an alternative syntax of this command, any `String`. Given texts will be used to replace the corresponding texts on the debriefing screen. 


[[Image:endMission.jpg|400px]] [[Image:failMission.jpg|400px]]


---
*Syntaxes:*

endType `setDebriefingText` [title, description]

endType `setDebriefingText` [title, description, subtitle, picture, background]

---
*Example 1:*

```sqf
_currentObjective = (taskDescription (currentTask player)) select 2;
"endDeath" setDebriefingText ["You Lose","All of your men were killed while assaulting the " + _currentObjective];
```