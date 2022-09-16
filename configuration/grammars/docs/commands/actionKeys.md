Returns Array containing dikCodes of keys, buttons and combos assigned to the given user action. Action names could be found in config class ControllerSchemes or user action names or user profile, for example:

```sqf
keyWatch[] = { 24 };
```

To retrieve the value, use the property name without 'key':

```sqf
actionKeys "Watch"; // 24
```

In addition, some of the actions are also listed in here: inputAction/actions

---

*Example 1*

```sqf
_arrayOfNumbers = actionKeys "ReloadMagazine";
```

*Example 2*

```sqf
_arrayOfStrings = actionKeys ["ReloadMagazine"];
```