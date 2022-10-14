Returns the target pointed at by the player (usually with cross-hairs). The target has to be known to the player to some degree (`knowsAbout` > 0). If target is completely unknown, command returns `objNull`.
<br><br>A valid target could belong to an enemy or a friendly side. Buildings are normally known to player and so are valid targets. Try `nearTargets` to see what else is considered a target. While friendly targets are usually known to the player, enemy targets can be totally unknown, especially if "auto-spotting" (or sometimes called "auto-reporting") is switched off. To check if auto-spotting is enabled:**`difficultyEnabled` "autospot"**
<br><br>`cursorTarget` also returns locked target for the duration of the lock even if there is another target under the cursor. As soon as missile is fired, `cursorTarget` switches to current known target under cursor or `objNull`. Targeting (currently "T" in Arma 3) works regardless of the state of "auto-spotting".
<br><br>Adding a target to the known list could be done with `reveal` command. When auto-spotting is enabled, zooming on the enemy target with cross-hairs usually reveals the target. As friendly targets are always known, zooming on friendly target could improve `knowsAbout` value.
<br><br>`Side relations` can also influence target knowledge. For example `east` target is unknown target for `civilian`, but making them friends with `setFriend` instantly improves `civilian` knowledge of the `east`.


---
*Syntaxes:*

`cursorTarget`

---
*Example 1:*

```sqf
alive cursorTarget;
```