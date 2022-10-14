Returns `true` if the script originated from some UI control event, for example from "onButtonDown" EH. Exists within parent scope and immediate child scopes.


---
*Syntaxes:*

`isUIContext`

---
*Example 1:*

```sqf
if (isUIContext) then { hint "UI control event" };
```

*Example 2:*

```sqf
_button ctrlSetEventHandler ["ButtonDown", "call { diag_log isUIContext }"]; // outputs true
```

*Example 3:*

```sqf
_button ctrlSetEventHandler ["ButtonDown", "0 spawn { diag_log isUIContext }"]; // outputs false
```