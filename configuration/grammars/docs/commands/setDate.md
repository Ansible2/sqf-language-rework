Sets mission date and time. Players joining after mission start will get the current server `date` including the year.


---
*Syntaxes:*

`setDate` date

---
*Example 1:*

```sqf
setDate [1986, 2, 25, 16, 0]; // 4:00pm February 25, 1986
```

*Example 2:*

```sqf
// postInit = 1;
// Set the real date (MP only):
if (isServer) then
{
	waitUntil { time > 0 };
	[missionStart select [0, 5]] remoteExec ["setDate"];
};
```