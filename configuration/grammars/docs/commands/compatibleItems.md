Returns all items (attachments) that can be mounted on the given weapon.


---
*Syntaxes:*

`compatibleItems` weapon

`compatibleItems` [weapon, slot]

---
*Example 1:*

```sqf
compatibleItems "arifle_Katiba_GL_F"; // ["optic_Nightstalker","optic_tws","optic_tws_mg","optic_NVS", ...]
```

*Example 2:*

```sqf
compatibleItems ["arifle_Katiba_GL_F", "PointerSlot"]; // ["acc_flashlight","acc_flashlight_broken","acc_pointer_IR", ...]
```