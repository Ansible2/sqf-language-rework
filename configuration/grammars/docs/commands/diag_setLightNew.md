Overrides currently used scene lighting. The operand is config that is placed as a string (not file).
The changes may not be applied immediately, but can be forced by the call of `simulWeatherSync`.


---
*Example 1:*
```sqf
diag_setLightNew "sunOrMoon = 1; diffuse[] = { 0, 0, 0, 0 }; diffuseCloud[] = { 0, 0, 0, 0 }; ambient[] = { 0, 0, 0, 0 }; ... ";
```