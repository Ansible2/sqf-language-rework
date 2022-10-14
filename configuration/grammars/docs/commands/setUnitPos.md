Set unit position rules. This command will not change the stance of the human player, even though it will change the output of `unitPos` command. To change player stance use `playAction` or `playActionNow`:

```sqf
player playAction "PlayerProne"; // DOWN
player playAction "PlayerStand"; // UP
player playAction "PlayerCrouch"; // MIDDLE
```


---
*Syntaxes:*

unit `setUnitPos` mode

---
*Example 1:*

```sqf
_soldier setUnitPos "UP";
```