Displays a very basic message dialog in the center of the screen. Player control is taken away until "Continue" is pressed. The message dialog can be dragged around on the screen. After "Continue" has been pressed, the content of the `hintC` is repeated in a normal `hint`.


---
*Example 1:*
```sqf
hintC "Press W to move forward";
```

*Example 2:*
Same as the above in <See arm Reference 3> but without second `hint` displayed:<br>[[Image:HintC.jpg|400px|right]]

```sqf
hintC "Press W to move forward";
hintC_EH = findDisplay 57 displayAddEventHandler ["Unload", {
	_this spawn {
		_this select 0 displayRemoveEventHandler ["Unload", hintC_EH];
		hintSilent "";
	};
}];
```

*Example 3:*
```sqf
"Instructions" hintC [
	"Press W to move forward.",
	"Press S to move backwards.",
	"Use the mouse to turn right or left.",
	"Press V for weapon sights."
];
```

*Example 4:*
Same as the above in <See arm Reference 3> but without second `hint` displayed:<br>[[Image:HintC_array.jpg|400px|right]]

```sqf
"Instructions" hintC [
	"Press W to move forward.",
	"Press S to move backwards.",
	"Use the mouse to turn right or left.",
	"Press V for weapon sights."
];
hintC_EH = findDisplay 72 displayAddEventHandler ["Unload", {
	_this spawn {
		_this select 0 displayRemoveEventHandler ["Unload", hintC_EH];
		hintSilent "";
	};
}];
```

*Example 5:*
```sqf
private _separator = parseText "<br/>------------------------<br/>";
private _image = "\ca\ui\textures\aus_flag.paa";
private _message = composeText [image _image, "Heading Text", _separator, "Content"];
"" hintC _message;
```