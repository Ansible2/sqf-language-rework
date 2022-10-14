Lets an object say given sound in 3D space.
This allows broadcasting of positional music or sound from a source, without having to script a fade sound or music command.
Compare this with [[say2D]] which will always play a sound at the location of the player after he has been in the vicinity of a broadcasting sound.
Sound is defined in `"CfgSounds"` of the `Description.ext` or main config.


---
*Syntaxes:*

from [[say3D]] sound

from [[say3D]] [sound, maxDistance, pitch, isSpeech, offset]

[from, to] [[say3D]] sound

[from, to] [[say3D]] [sound, maxDistance, pitch, isSpeech, offset]

---
*Example 1:*

```sqf
helicopter1 say3D "FortunateSon";
```

*Example 2:*

Workaround for dead bodies:

```sqf
private _dummy = "#particlesource" createVehicleLocal ASLToAGL getPosWorld _corpse;
_dummy say3D "whatever";
_dummy spawn {
	sleep 5; // at least the length of your sound
	deleteVehicle _this;
};
```

*Example 3:*

```sqf
// Since Arma 3 v2.00, the sound source is returned and can be deleted directly
_soundSrc = helicopter1 say3D "Fortunateson";
sleep 5;
deleteVehicle _soundSrc; // stop the sound after ~5 seconds
```