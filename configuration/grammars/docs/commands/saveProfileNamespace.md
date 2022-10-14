Saves all variables stored in `profileNamespace` to the active `Profile`.


---
*Syntaxes:*

`saveProfileNamespace`

---
*Example 1:*

```sqf
profileNamespace setVariable ["TAG_lastPlayerLocation", getPosASL player];
saveProfileNamespace;// Optional since namespace is saved when game is closed
```