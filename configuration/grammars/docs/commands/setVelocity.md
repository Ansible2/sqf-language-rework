Sets `velocity` vector of an object in m/s.


---
*Syntaxes:*

object `setVelocity` vector

---
*Example 1:*

```sqf
_truck1 setVelocity [20, 0, 0];
```

*Example 2:*

Advanced method used for relative acceleration:

```sqf
_vel = velocity _vehicle;
_dir = direction _vehicle;
_speed = 10; comment "Added speed";
_vehicle setVelocity [
	(_vel select 0) + (sin _dir * _speed), 
	(_vel select 1) + (cos _dir * _speed), 
	(_vel select 2)
];
```