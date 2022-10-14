Finds a display by its IDD which can either be defined in `missionConfigFile` (`description.ext`) or `configFile` (`config.cpp`)<br>
If the specified display cannot be found, `displayNull` is returned.


---
*Syntaxes:*

`findDisplay` idd

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