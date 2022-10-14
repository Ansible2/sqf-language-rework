Returns description of vehicle's currently loaded magazine, its ammo count (current/default) and its id.


---
*Syntaxes:*

`currentMagazineDetail` object

---
*Example 1:*

```sqf
_currentMagazineDetail = currentMagazineDetail player; // "6.5mm 30Rnd STANAG Mag(30/30)[id:0]"
```

*Example 2:*

```sqf
_currentMagazineDetail = currentMagazineDetail Mi_48; // "30mm HE Shells(250/250)[id:21]
```

*Example 3:*

```sqf
_cmd = currentMagazineDetail player; // "9mm 16Rnd Mag(13/16)[id/cr:10000011/0]"
_cmd splitString "([ ]/:)"; // ["9mm","16Rnd","Mag","13","16","id","cr","10000011","0"]
```