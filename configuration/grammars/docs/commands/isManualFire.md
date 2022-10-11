Returns `true` if manual fire is on. Manual fire could either be selected in vehicle action menu (if available) or with `action` "ManualFire" and "ManualFireCancel". Always returns `false` for a soldier.


---
*Example 1:*
```sqf
_bool = isManualFire vehicle player;
```