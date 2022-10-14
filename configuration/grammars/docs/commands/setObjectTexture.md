Applies given texture to object's selection. See `Retexturing with setObjectTexture` for a short tutorial.


---
*Syntaxes:*

object `setObjectTexture` [selection, texture]

---
*Example 1:*

```sqf
_objectname setObjectTexture [0, "\pboname\texture.paa"];
_objectname setObjectTexture [1, "\pboname\texture2.paa"];
```

*Example 2:*

```sqf
_obj setObjectTexture [0, "#(rgb,8,8,3)color(1,0,0,1)"];
```

*Example 3:*

```sqf
_obj setObjectTexture [0, "#(argb,512,512,1)r2t(rendersurface,1.333)"];
```

*Example 4:*

Disable randomization before applying a texture to a vehicle in the Editor (if it is a vehicle that supports randomization):

```sqf
this setVariable ["BIS_enableRandomization", false];
this setObjectTexture [0,"#(rgb,8,8,3)color(1,0,0,1)"];
```

*Example 5:*

The **"clan"** selection can be used to apply a texture to the areas that usually display the `squad.xml` logo:

```sqf
MyVehicle setObjectTexture ["clan", "\a3\missions_f_epa\data\img\orbat\b_111_texture_ca.paa"];
```