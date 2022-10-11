Finds a display by its IDD which can either be defined in `missionConfigFile` (`description.ext`) or `configFile` (`config.cpp`)<br>
If the specified display cannot be found, `displayNull` is returned.
{{Feature|important|
Dedicated servers and [[Arma 3: Headless Client|headless clients]] do not have a primary display (e.g <sqf inline>findDisplay 46</sqf> will return `displayNull`).<br>
Detect both with the `hasInterface` command.


---
*Example 1:*
```sqf
[] spawn
{
	waitUntil { !isNull findDisplay 46 };
	hint "Mission Display is now available!";
};
```

*Example 2:*
```sqf
_display = findDisplay 1;
```