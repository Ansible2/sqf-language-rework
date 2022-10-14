Reload models on-the-fly without the need of restarting the game.
Changes applied by `diag_resetShapes` are applied to all new entities so restart of mission is not necessarily  required - spawning vehicle again or changing back forth weapon should usually do the trick.
It works only with **[[Arma 3: Startup Parameters#Developer Options|-filePatching]]** in combination with local data. Command will reload `only` models present in local data.


---
*Syntaxes:*

`diag_resetShapes`

---
*Example 1:*

```sqf
diag_resetShapes;
```