Returns a list of button images or names assigned to the given user action.
A maximum of maxKeys keys is listed.
You can find the action names in config class ControllerSchemes or `user action names`.


---
*Syntaxes:*

`actionKeysImages` userAction

`actionKeysImages` [userAction, maxKeys]

---
*Example 1:*

```sqf
_text = actionKeysImages "ReloadMagazine";
```

*Example 2:*

```sqf
_reload = actionKeysImages ["ReloadMagazine", 1] // will return "R" (incl. the quotation marks!)
```