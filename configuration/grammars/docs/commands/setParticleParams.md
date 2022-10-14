Set parameters to particle source. Array is in format `ParticleArray`. <br>

Since Arma 3 version 1.11.114706 you can use this command to overwrite many values set by `setParticleClass`, particularity those defined in `ParticleArray`. Correspondence between CfgCloudlets class param names and command array of params:

```sqf
particleSource setParticleParams
[
	/* String or Array - If string then the name of the particleShape. And following default values are used:
		particleFSNtieth = 1
		particleFSIndex = 0
		particleFSFrameCount = 1
		particleFSLoop = 1
	*/
	[
		particleShape, /*String*/
		particleFSNtieth, /*Number*/
		particleFSIndex, /*Number*/
		particleFSFrameCount, /*Number*/
		particleFSLoop /*Optional - Number. Default: 1*/
	],
	animationName, /*String*/
	particleType, /*String - Enum: Billboard, SpaceObject*/
	timerPeriod, /*Number*/
	lifeTime, /*Number*/
	position, /*3D Array of numbers as relative position to particleSource or (if object at index 18 is set) object. 
			Or (if object at index 18 is set) String as memoryPoint of object.*/
	moveVelocity, /*3D Array of numbers.*/
	rotationVelocity, /*Number*/
	weight, /*Number*/
	volume, /*Number*/
	rubbing, /*Number*/
	size, /*Array of Number*/
	color, /*Array of Array of RGBA Numbers*/
	animationSpeed, /*Array of Number*/
	randomDirectionPeriod, /*Number*/
	randomDirectionIntensity, /*Number*/
	onTimerScript, /*String*/
	beforeDestroyScript, /*String*/
	this, /*Object*/
	angle, /*Optional Number - Default: 0*/
	onSurface, /*Optional Boolean*/
	bounceOnSurface, /*Optional Number*/
	emissiveColor, /*Optional Array of Array of RGBA Numbers*/
	vectorDir /*Optional 3D Array Vector dir. Since Arma 3 v1.92 it is possible to set the initial direction of the SpaceObject */
];
```


---
*Syntaxes:*

particleSource `setParticleParams` array

---
*Example 1:*

see `ParticleArray`