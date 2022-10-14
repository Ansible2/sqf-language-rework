Returns a list of button names assigned to the given user action. You can find the action names in config class ControllerSchemes or `user action names`.


---
*Syntaxes:*

`actionKeysNamesArray`  userAction

`actionKeysNamesArray`  [userAction, maxKeys, inputDevicePriority]

---
*Example 1:*

```sqf
_actionList = actionKeysNamesArray "ReloadMagazine";
```

*Example 2:*

```sqf
_actionList = actionKeysNamesArray ["ReloadMagazine", 1];
```