[[Image:setUserActionText.jpg|right|350px]] Changes user added action (see `addAction`) menu item text. <br><br>


---
*Syntaxes:*

object `setUserActionText` [actionIndex, textMenu, textWindowBackground, textWindowForeground]

---
*Example 1:*

```sqf
_id = player addAction ["Hello", ""];
player setUserActionText [_id, "Good Bye"];
```

*Example 2:*

```sqf
_id = billboard addAction ["Some Action", {}];
billboard setUserActionText [
	_id, 
	"Some Action", 
	"<t color='#ff0000'>Background-----------------</t><br>Multiline<br>Multiline<br>Multiline<br>. . .", 
	"<t color='#00ff00'>-----------------Foreground</t>"
];
```