Plays a sound from CfgSounds. Sound can be defined in `missionConfigFile`, `configFile` or `campaignConfigFile`.


---
*Syntaxes:*

`playSound` soundName

`playSound` [soundName, isSpeech, offset]

---
*Example 1:*

```sqf
playSound "soundname";
```

*Example 2:*

Start a sound and then stop it after 1.2 second:

```sqf
playSound "AlarmCar";
[] spawn 
{
	_sound = ASLToAGL [0,0,0] nearestObject "#soundonvehicle";
	sleep 1.2;
	deleteVehicle _sound;
};

// since Arma 3 v2.00
_source = playSound "AlarmCar";
_source spawn 
{
	sleep 1.2;
	deleteVehicle _this;
};
```

*Example 3:*

Start a sound and wait until it is finished:

```sqf
playSound "Alarm";
hint "Started!";
[] spawn
{
	_sound = ASLToAGL [0,0,0] nearestObject "#soundonvehicle";
	waitUntil {isNull _sound};
	hint "Finished!";
};

// since Arma 3 v2.00
_source = playSound "Alarm";
_source spawn 
{
	waitUntil {isNull _this};
	hint "Finished!";
};
```