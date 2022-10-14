Sets particle source parameters using existing particle config from **CfgCloudlets** class. Use `setParticleParams` subsequently if you need to overwrite some values.


---
*Syntaxes:*

source `setParticleClass` className

---
*Example 1:*

```sqf
_source01 = "#particlesource" createVehicleLocal _pos01;
_source01 setParticleClass "ObjectDestructionFire1Smallx";
_source01 attachTo [_object,[0,0,0]];
```