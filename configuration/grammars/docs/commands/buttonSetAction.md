is available, but contains ""; See `Arma: GUI Configuration` for more information about user dialogs. Works with:
* `CT_BUTTON`
* `CT_XBUTTON`
* `CT_ACTIVETEXT`
* `CT_SHORTCUTBUTTON`


---
*Syntaxes:*

`buttonSetAction`  [idc, action]

control `buttonSetAction`  action

---
*Example 1:*

```sqf
buttonSetAction [100, "player exec ""reply.sqs"""];
```

*Example 2:*

```sqf
_ctrl buttonSetAction "if (alive bob) then {hint 'alive'} else {hint 'dead'}"; // SQF but SQS compatible, see SQS
```

*Example 3:*

Script is `SQS`:
<sqs>_control buttonSetAction "hint format ['Is SQS: %1', !isNil '_time']"</sqs>