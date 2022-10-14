Register conversation topic to given person. See `Conversations` for more details.


---
*Syntaxes:*

person `kbAddTopic` [topicName, conversationFile, fsmFile, eventHandler]

---
*Example 1:*

```sqf
player kbAddTopic ["myTest", "myTest.bikb", "myTest.fsm", compile preprocessFileLineNumbers "myTest.sqf"];
```

*Example 2:*

```sqf
player kbAddTopic ["itsGettingWarm", "weatherTalk.bikb"];
```