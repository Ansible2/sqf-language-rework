Removes user added action with given ID. This only removes actions added with the `addAction` command. You cannot remove default game actions, such as reload.


---
*Syntaxes:*

unit `removeAction` actionID

---
*Example 1:*

```sqf
player removeAction 0;
```