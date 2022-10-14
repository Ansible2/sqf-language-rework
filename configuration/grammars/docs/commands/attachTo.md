Attaches an object to another object.
* The offset is applied to the object center unless a memory point is provided, in which case the offset will be applied to the memory point position.
* If no offset is specified, the current offset between the two objects will be used.


---
*Syntaxes:*

object1 `attachTo` [object2, offset, memPoint, followBoneRotation]

---
*Example 1:*

```sqf
player attachTo [car, [0, 0, 1]];
```

*Example 2:*

```sqf
player attachTo [tank, [0, -1, 0], "Usti hlavne"];
```

*Example 3:*

Automatic offset:

```sqf
ammoCrate attachTo [player];
```

*Example 4:*

To set orientation of attached object use `setVectorDirAndUp` command:<br>


```sqf
_expl1 = "DemoCharge_Remote_Ammo" createVehicle position player;
_expl1 attachTo [player, [-0.1, 0.1, 0.15], "Pelvis"];
_expl1 setVectorDirAndUp [[0.5, 0.5, 0], [-0.5, 0.5, 0]];
_expl2 = "DemoCharge_Remote_Ammo" createVehicle position player;
_expl2 attachTo [player, [0, 0.15, 0.15], "Pelvis"];
_expl2 setVectorDirAndUp [[1, 0, 0], [0, 1, 0]];
_expl3 = "DemoCharge_Remote_Ammo" createVehicle position player;
_expl3 attachTo [player, [0.1, 0.1, 0.15], "Pelvis"];
_expl3 setVectorDirAndUp [[0.5, -0.5, 0], [0.5, 0.5, 0]];
```