Displays an object defined in the global config in **CfgTitles**.


---
*Syntaxes:*

`cutObj` [class, type, speed, showInMap]

layer `cutObj` [class, type, speed, showInMap]

layerName `cutObj` [class, type, speed, showInMap]

---
*Example 1:*

```sqf
cutObj ["TVSet", "PLAIN"];
cutObj ["TVSet", "PLAIN", 2]
```

*Example 2:*

```sqf
2 cutObj ["Sphere", "PLAIN"];
```

*Example 3:*

```sqf
private _layer = "layer1" cutObj ["BISLogo", "PLAIN"];
```