Sends an entity to the garbage collection queue. Replaces `Arma_2:_Garbage_Collector|Arma 2 Garbage Collector`.


---
*Syntaxes:*

entity spawn `BIS_fnc_GC`

---
*Example 1:*

```sqf
[dude1] spawn BIS_fnc_GC;
```

*Example 2:*

```sqf
[dude1, group dude1, "marker1"] spawn BIS_fnc_GC;
```