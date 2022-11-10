Returns map size from config. Do not confuse with `worldSize`. The engine command calculates the map size and doesn't read it from config.


---
*Syntaxes:*

terrainName call `BIS_fnc_mapSize`

---
*Example 1:*

```sqf
"Altis" call BIS_fnc_mapSize;
```

*Example 2:*

```sqf
worldName call BIS_fnc_mapSize;
```

*Example 3:*

```sqf
call BIS_fnc_mapSize;
```