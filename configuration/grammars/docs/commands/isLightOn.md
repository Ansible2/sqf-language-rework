Returns `true` if vehicle headlights are on otherwise `false`.


---
*Syntaxes:*

`isLightOn` vehicle

`isLightOn` [vehicle, turret]

---
*Example 1:*

```sqf
_headlightsOn = isLightOn vehicle player;
```

*Example 2:*

```sqf
_pilotLightOn = isLightOn heli;
```

*Example 3:*

```sqf
_searchLightOn = isLightOn [heli, [0]];
```