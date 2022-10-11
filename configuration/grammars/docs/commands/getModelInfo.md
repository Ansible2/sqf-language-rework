Returns object's model info. Model path is suitable for use with `createSimpleObject` command. Since Arma 3 v2.08.148608 the command also returns placing point of the model in model coordinates. Placing point is always in format [0,0,z].


---
*Example 1:*
```sqf
_modelInfo = getModelInfo player; // ["b_soldier_03.p3d", "a3\characters_f\blufor\b_soldier_03.p3d", true, [0,0,0]]
```

*Example 2:*
```sqf
_modelInfo = getModelInfo cursorObject;
```

*Example 3:*
Get Z ASL using placing point:

```sqf
_zASL = (heli modelToWorldWorld (getModelInfo heli select 3)) select 2;
```