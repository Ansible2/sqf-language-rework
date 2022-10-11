Returns the action assigned to a control of the currently active user dialog. Can be used for buttons and active texts. Read `Arma: GUI Configuration` for more information about user dialogs and controls.


---
*Example 1:*
```sqf
buttonSetAction [100, { player exec "reply.sqs" }]
_action = buttonAction 100; // Returns { player exec "reply.sqs" }
```