Applies impulse force to given PhysX object at given position.


---
*Syntaxes:*

object `addForce`  [force, position]

---
*Example 1:*

Apply force [0,1000,0] defined in world space (not factoring object actual positioning) to object position [1,0,0]:

```sqf
_object addForce [[0,1000,0], [1,0,0]];
```

*Example 2:*

Apply force [0,1000,0] defined in model space (relative to object) to object position [1,0,0]:

```sqf
_object addForce [_object vectorModelToWorld [0,1000,0], [1,0,0]];
```

*Example 3:*

Can be used on units since <See arm Reference 3> v2.04:

```sqf
if (local bob) then
{
	[] spawn 
	{
		bob addForce [bob vectorModelToWorld [0,-200,0], bob selectionPosition "rightfoot"];
		sleep 5;
		bob setUnconscious false;
	};
};
```