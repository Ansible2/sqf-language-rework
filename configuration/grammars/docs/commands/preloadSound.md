Makes sure that a sound can start playing without any delay once it is needed. Command works in Arma 3, but might not be implemented in earlier Arma installments.


---
*Syntaxes:*

`preloadSound` soundName

---
*Example 1:*

```sqf
{
	waitUntil {preloadSound _x};
} forEach getArray (missionConfigFile >> "CfgSounds" >> "sounds");
```