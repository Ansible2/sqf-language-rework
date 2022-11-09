Creates a sound source of the given type (type is the name of the subclass of `CfgVehicles` which is pointing to the sound defined in `CfgSFX`). The actual sound object created is of type **"#dynamicsound"}} and could be detected with `allMissionObjects`. If the markers array contains several marker names, the position of a random one is used, otherwise, the given position is used. The sound source is placed inside a circle with this position as its center and placement as its radius. Some of the vanilla classes pre-configured in {{arma3**:
{{Columns|4|
* **"Sound_Alarm"**
* **"Sound_Alarm2"**
* **"Sound_BattlefieldExplosions"**
* **"Sound_BattlefieldFirefight"**
* **"Sound_Fire"**
* **"Sound_SmokeWreck1"**
* **"Sound_SparklesWreck1"**
* **"Sound_SparklesWreck2"**
* **"Sound_Stream"**
}}

Since {{arma3}} v1.70 it is possible to define sounds for use with `createSoundSource` in mission config. As mentioned earlier, the sounds needed for this command should be defined inside `CfgVehicles` class, which itself references `CfgSFX` class. If given class searched in main config and is not found, the search will continue in `description.ext` - see *(Reference HashLink "#Example 3")*.<br>
Note that the sound created by `createSoundSource` will always be looping.
Also when `CfgSFX` sound definition contains more than 1 sound, there is no guarantee that the sound played will be the same on every PC in Multiplayer.


---
*Syntaxes:*

`createSoundSource` [type, position, markers, placement]

---
*Example 1:*

```sqf
_soundSource = createSoundSource ["LittleDog", position player, [], 0];
```

*Example 2:*

```sqf
[] spawn 
{
	_alarm = createSoundSource ["Sound_Alarm", position player, [], 0]; // starts alarm
	sleep 10;
	deleteVehicle _alarm; // stops alarm
};
```

*Example 3:*

*(Reference GVI "arma3|1.70")* Here is an example of suitable mission config definition:
<syntaxhighlight lang="cpp">
// description.ext
class CfgSFX
{
	class MyOwl
	{
		sound0[] = {"@A3\Sounds_F\environment\animals\birds\owl1", db-10, 1.0, 1000, 0.2, 0, 15, 30};  // path to addon sound
		sound1[] = {"@A3\Sounds_F\environment\animals\birds\owl2", db-10, 1.0, 1000, 0.2, 0, 15, 30};  // path to addon sound
		sound2[] = {"@A3\Sounds_F\environment\animals\birds\owl3", db-10, 1.0, 1000, 0.2, 0, 15, 30};  // path to addon sound
		sounds[] = {sound0, sound1, sound2};
		empty[] = {"", 0, 0, 0, 0, 0, 0, 0};
	};
};

class CfgVehicles
{
	class MyOwlSound // class name to be used with createSoundSource
	{
		sound = "MyOwl"; // reference to CfgSFX class
	};
};
</syntaxhighlight>


```sqf
private _owl = createSoundSource ["MyOwlSound", position player, [], 0];
```