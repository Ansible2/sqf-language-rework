Sets randomization of particle source parameters. Correspondence between CfgCloudlets class param names and command array of params:

```sqf
particleSource setParticleRandom
[
	lifeTimeVar,
	positionVar,
	moveVelocityVar,
	rotationVelocityVar,
	sizeVar,
	colorVar,
	randomDirectionPeriodVar,
	randomDirectionIntensityVar,
	angleVar,
	bounceOnSurfaceVar
];
```


---
*Syntaxes:*

particleSource `setParticleRandom` [lifeTime, position, moveVelocity, rotationVelocity, size, color, directionPeriod, directionIntensity, angle, bounceOnSurface]

---
*Example 1:*

```sqf
_particleSource setParticleRandom [0, [0.1, 0.1, 0.1], [0, 0, 0.5], 0, 0.1, [0, 0, 0, 0], 0, 0, 45, 0];
```