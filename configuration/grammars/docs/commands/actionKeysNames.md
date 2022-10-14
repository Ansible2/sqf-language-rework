Returns a list of button names assigned to the given user action.
Action names can be found in config class **ControllerSchemes** or `user action names`.


---
*Syntaxes:*

`actionKeysNames`  userAction

`actionKeysNames`  [userAction, maxKeys, inputDevicePriority]

---
*Example 1:*

```sqf
_list = actionKeysNames "ReloadMagazine"; // "R"
```