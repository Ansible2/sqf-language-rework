Creates a sling loading from a helicopter to an entity if possible. To unload cargo, pass `objNull` as second param.


---
*Syntaxes:*

heli `setSlingLoad` cargo

---
*Example 1:*

```sqf
_success = heli1 setSlingLoad veh1;
```

*Example 2:*

To unload cargo:

```sqf
_success = heli setSlingLoad objNull;
```