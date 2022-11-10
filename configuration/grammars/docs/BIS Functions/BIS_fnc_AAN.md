Add an AAN overlay to the screen, with one headline and a rolling text on the bottom.


---
*Syntaxes:*

[headline, rollingText] spawn `BIS_fnc_AAN`

---
*Example 1:*

```sqf
[
	parseText "<t size='2'>AAN live in Takistan</t>",
	parseText "Weather coming up hot and steamy - Takistan shelled again from border area"
] spawn BIS_fnc_AAN;
```