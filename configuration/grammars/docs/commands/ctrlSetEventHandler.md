


---
*Syntaxes:*

controlName `ctrlSetEventHandler` [handlerName, function]

---
*Example 1:*

```sqf
_control ctrlSetEventHandler ["KeyDown", ""];
```

*Example 2:*

```sqf
(_display displayCtrl 108) ctrlSetEventHandler ["LBSelChanged","['ListChange',_this] call FireEvents"];
```