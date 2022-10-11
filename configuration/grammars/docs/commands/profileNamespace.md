Returns the global namespace attached to the active user profile. Use `setVariable` and `getVariable` to save and load data to and from this `Namespace`. A variable can be deleted by setting its value to `nil`. By default the variables set in this namespace will exist while the game is running, and variables are saved persistently when the game is closed. Saving can also be forced by using `saveProfileNamespace` to prevent data loss on e.g game crash.<br>
The variables are stored next to the user profile in a file named **myUsername.vars.GAMENAME**.


---
*Example 1:*
```sqf
profileNamespace setVariable ["TAG_kills", 10000];
// somewhere else in the code
_kills = profileNamespace getVariable ["TAG_kills", 0];
```