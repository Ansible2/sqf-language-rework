Create the commanding menu described by the given config class or menu name. When the name is empty, the current menu is hidden.<br><br>
If commanding menu has "expression" set up, the expression will receive the following arguments when user activated the menu item:
* Local variable  **_target**: `Object` - Target under the cursor. This works in both 3D and 2D (when cursor is over the unit icon on the map).
* Local variable **_pos**: `Array` - Cursor position.
* Local variable **_is3D**: `Boolean` - `false` if cursor is over the map, otherwise `true`.


---
*Example 1:*
```sqf
showCommandingMenu "";
```

*Example 2:*
```sqf
showCommandingMenu "MyClassName";
```

*Example 3:*
```sqf
showCommandingMenu "#USER:Tag_Menu_myMenu_0";
```

*Example 4:*
```sqf
showCommandingMenu "RscMainMenu";
```