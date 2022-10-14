Set the texture of the given selection on all computers in a network session.<br>
Not all objects can be textured this way. See `getObjectTextures` for supported texture selections.


---
*Syntaxes:*

obj `setObjectTextureGlobal` [selection, texture]

---
*Example 1:*

```sqf
player setObjectTextureGlobal [0, "\MyAddon\blue.paa"];
```

*Example 2:*

```sqf
// Set up a persistent texture keeper
player addEventHandler ["Take", {
	(getObjectTextures player + [uniformContainer player getVariable "texture"])
	params ["_texUniform", "_texInsignia", "_texCustom"];
	if (isNil "_texCustom") exitWith {};
	if (_texUniform == _texCustom) exitWith {};
	player setObjectTextureGlobal [0, _texCustom];
	false
}];

// Example: make current uniform persistently blue

private _texture = "#(rgb,8,8,3)color(0,0,1,1)"; // blue texture
player setObjectTextureGlobal [0, _texture]; // set it on player
uniformContainer player setVariable ["texture", _texture, true]; // store it on uniform
```