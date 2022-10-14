Returns the current humidity value. 0 is no humidity and 1 is 100% humidity. Humidity value quickly changes from 0 to 1 when rain starts, then slowly changes from 1 to 0 when rain stops.


---
*Syntaxes:*

`humidity`

---
*Example 1:*

```sqf
currentHumidity = humidity;
```

*Example 2:*

```sqf
skipTime -24;
86400 setOvercast 1;
skipTime 24;
[] spawn {
	10 setRain 1;
	sleep 10;
	10 setRain 0;
};
onEachFrame {
	hintSilent str [round (rain * 10) / 10, round (humidity * 10) / 10];
};
```