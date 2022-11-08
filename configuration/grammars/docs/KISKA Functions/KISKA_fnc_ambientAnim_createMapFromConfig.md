#### Description:
Parses a given config into a hashmap that can be used by KISKA_fnc_ambientAnim. This config will then be the hashmap KISKA_ambientAnim_configAnimationSetMap with the config as the key. See configFile >> "KISKA_AmbientAnimations" for an example of a configed map. class ambientAnimsConfig { class someAnimSet { animations[] = {"myAnimation"}; // the only required property of an anim set }; };

#### Parameters:
0: **_config** *(CONFIG)* - A config to parse into a hashmap

#### Returns:
<HASHMAP> - A map of the animation sets and their properties.

#### Examples:
```sqf
private _map = [
    configFile >> "KISKA_AmbientAnimations"
] call KISKA_fnc_ambientAnim_createMapFromConfig;
```

