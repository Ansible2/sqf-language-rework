Enables or disables menu entry on given path.


---
*Syntaxes:*

`menuEnable` [idc, path, enable]

control `menuEnable` [path, enable]

---
*Example 1:*

```sqf
findDisplay 313 displayCtrl 120 menuEnable [0];
```

*Example 2:*

```sqf
findDisplay 313 displayCtrl 120 menuEnable [[0, 0, 1], false]; // Since Arma 3 v2.06
```