<pre>/*
	Author: Nelson Duarte

	Description:
	Spawns object of given class and makes it travel, hooming towards the target
	To be used with CfgAmmo type of entity, but can be used with virtually any kind of object

	Parameters:
		_startPos: 		ARRAY 			The initial position of the projectile (ASL)
		_class: 		STRING or OBJECT	The class name of the object to spawn or an object entity already existing
		_target:		OBJECT			The target object the projectile will be hooming towards to
		_speed:			SCALAR			The speed the object should assume
		_destroyTarget:		BOOL			Whether to force destruction of the target object on detonation
		_localOffset:		ARRAY			The model space position offset that projectile should be hooming towards to
		_minDistanceToTarget:	SCALAR			The minimal distance projectile needs to be from target position to enter ballistic mode
		_function		STRING			The function to execute on the created object with params [<object>]
		_isGlobalFunction	BOOL			Whether the executed function should be executed on all connected machine, false to execute only on the server

	Returns:
		NOTHING
*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_EXP_camp_guidedProjectile`

---
