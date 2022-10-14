[[Image:addTorque_correct.jpg|400px|right]]
Applies torque (rotation momentum) to the ` center of mass` of the given object. Torque force is defined as vector [x, y, z] applied in world space. If you need to define torque in model space, convert the torque vector first by `vectorModelToWorld` or `vectorModelToWorldVisual` command. The torque applied as impulse. Diagram below explain which way the object would rotate.  For more information see [http://docs.nvidia.com/gameworks/content/gameworkslibrary/physx/apireference/files/classPxRigidBody.html#acb04ffc816d45afff2d04e93d7446e79 NVIDIA docs] <br>


---
*Syntaxes:*

object `addTorque` torque

---
*Example 1:*

Apply torque [1000,0,0] to object not factoring object positioning:

```sqf
_wheel addTorque [1000,0,0];
```

*Example 2:*

Apply torque [1000,0,0] relative to object:

```sqf
_wheel addTorque (_wheel vectorModelToWorld [1000,0,0]);
```