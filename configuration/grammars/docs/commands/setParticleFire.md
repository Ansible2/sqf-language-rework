Set fire parameters to particle effect.

Note: You need to create emitter at first. Basic parameters of particle effect must be defined too. You can use script commands `setParticleClass` or `setParticleParams` to do so (see example). Correspondence between CfgCloudlets class param names and command array of params:

```sqf
particleSource setParticleFire
[
	coreIntensity,
	coreDistance,
	damageTime
];
```


---
*Syntaxes:*

source `setParticleFire` [coreIntensity, coreDistance, damageTime]

---
*Example 1:*

```sqf
_emitter = "#particlesource" createVehicleLocal (getPos player);
_emitter setParticleClass "MediumSmoke";
_emitter setParticleFire [0.3,1.0,0.1];
```