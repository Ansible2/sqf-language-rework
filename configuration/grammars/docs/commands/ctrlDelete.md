Deletes given control. The control has to be created either by script with `ctrlCreate` or to have **deletable** property in config set to `true`. Use `ctrlShow` `false` and `ctrlEnable` `false` to disable controls that cannot be deleted. Returns `Boolean` indicating  whether the deletion was successful.


---
*Example 1:*
```sqf
ctrlDelete ((findDisplay 20000) displayCtrl 20001);
```