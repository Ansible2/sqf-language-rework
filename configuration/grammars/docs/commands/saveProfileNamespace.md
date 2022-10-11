Saves all variables stored in `profileNamespace` to the active `Profile`.

{{Feature|Warning|
* This command triggers a file operation. As file operations are slow (even on SSDs), it is not recommended to use this command too frequently (i.e. several times per second).
* Do not save large amounts of data to the profile; the larger the profile file gets, the slower it loads!
* The `profileNamespace` is also saved when the game is closed.


---
*Example 1:*
```sqf
profileNamespace setVariable ["TAG_lastPlayerLocation", getPosASL player];
saveProfileNamespace;// Optional since namespace is saved when game is closed
```