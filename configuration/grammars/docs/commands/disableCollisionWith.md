Disable collision between provided objects. The collision is always disabled for both objects in the arguments.


---
*Syntaxes:*

vehicle1 `disableCollisionWith` vehicle2

---
*Example 1:*

```sqf
player disableCollisionWith myWall;
```

*Example 2:*

```sqf
[_veh1, _veh2] remoteExecCall ["disableCollisionWith", 0, _veh1];
```

*Example 3:*

```sqf
// this command stores a reference to the other object on both arguments:
_obj1 disableCollisionWith _obj2;	// _obj1 has a reference to _obj2, disabling collision with it
									// _obj2 has a reference to _obj1, disabling collision with it

// only one reference is required to disable collision, allowing more than one disabled collision
_obj1 disableCollisionWith _obj3;	// _obj1 has a reference to _obj3, disabling collision with it
									// _obj2 has a reference to _obj1, disabling collision with it
									// _obj3 has a reference to _obj1, disabling collision with it
									// factually, _obj1 has collisions disabled with _obj2 and _obj3

// note that _obj1 collision can be changed without using the command on it directly
_obj2 disableCollisionWith _obj3;	// _obj1 has no more reference to _obj3 and can collide with it
									// _obj2 has a reference to _obj3, disabling collision with it
									// _obj3 has a reference to _obj2, disabling collision with it
```