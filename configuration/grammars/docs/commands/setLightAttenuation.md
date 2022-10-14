Sets attenuation of light. Standard method of attenuation (1 / (constant + linear*dist + quadratic*dist*dist)).
`start` param represents distance where the attenuation starts to take effects (dist = distance - start).


---
*Syntaxes:*

light `setLightAttenuation` [start, constant, linear, quadratic, hardlimitstart, hardlimitend]

---
*Example 1:*

```sqf
myLight setLightAttenuation [2, 4, 4, 0, 9, 10];
```