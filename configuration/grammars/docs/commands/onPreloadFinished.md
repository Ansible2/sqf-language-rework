Defines an action performed after the preload screen finished. Preload event occurs after briefing screen on mission start.


---
*Syntaxes:*

`onPreloadFinished` command

---
*Example 1:*

```sqf
onPreloadFinished {TAG_ReceivingScreenDone = true};
```

*Example 2:*

```sqf
// removes the event immediately after the first run again
onPreloadFinished { TAG_ReceivingScreenDone = true; onPreloadFinished "" };
```