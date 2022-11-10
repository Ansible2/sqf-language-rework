Smart-return config (extension for BIS_fnc_getCfgXXXX functions).
Can by called 2 ways:
* 1st way - passing config directly
* 2nd way - passing array of strings or config and strings


---
*Syntaxes:*

input call `BIS_fnc_getCfg`

---
*Example 1:*

```sqf
( configFile >> "BulletBubbles" >> "BulletBubbles1" ) call BIS_fnc_getCfg;
```

*Example 2:*

```sqf
[ configFile >> "BulletBubbles" >> "BulletBubbles1" ] call BIS_fnc_getCfg;
```

*Example 3:*

```sqf
[ configFile, "BulletBubbles", "BulletBubbles1" ] call BIS_fnc_getCfg;
```

*Example 4:*

```sqf
[ "Hubs", "A1", "QuickStart", "trigger" ] call BIS_fnc_getCfg;
```

*Example 5:*

```sqf
[ "Hubs" ] call BIS_fnc_getCfg;
```