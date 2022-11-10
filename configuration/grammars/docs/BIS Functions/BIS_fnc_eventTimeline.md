Universal system for playing sequential events defined by time.


---
*Syntaxes:*

[timeline, index, music, codeInterrupt, codeEnd] call `BIS_fnc_eventTimeline`

---
*Example 1:*

```sqf
private _timeline =
[
	[0.0, { hint "Start of the Timeline" } ],
	[1.0, { hint "Event 1" } ],
	[3.0, { hint "End of the timeline" } ]
];

[_timeline, 0, "", { hint "Interrupted" }, { hint "Timeline done" }] spawn BIS_fnc_eventTimeline;
```