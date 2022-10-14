Returns date and time when mission started. Because this command returns the time of the actual start of the mission, it might not be available in `pre-init` or `init`, but is guaranteed to be available in `post-init` when <sqf inline>time > 0
```.


---
*Syntaxes:*

`missionStart`

---
*Example 1:*

```sqf
setDate (missionStart select [0,5]);
```

*Example 2:*

Set real date:

```sqf
//postInit = 1;
if (isServer) then
{
	waitUntil { time > 0 };
	setDate (missionStart select [0, 5]);
};
```