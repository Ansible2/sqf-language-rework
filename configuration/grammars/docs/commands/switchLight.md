Controls whether a lamp is lit or not.


---
*Syntaxes:*

lamp `switchLight` mode

---
*Example 1:*

```sqf
(object 12345) switchLight "OFF";
```

*Example 2:*

```sqf
nearestObject [player, "Streetlamp"] switchLight "OFF";
```

*Example 3:*

```sqf
cursorObject switchLight "ON";
```