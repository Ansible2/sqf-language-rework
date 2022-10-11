Returns a structured text, containing an image or name (if no image is found) of the button, on the keyboard, mouse or joystick, with the given code.


---
*Example 1:*
```sqf
_image = keyImage 28; // result is "Enter"
```

*Example 2:*
From Arma 3 v2.08:

```sqf
_image = keyImage "-1660944350"; // result is "Right Ctrl+G"
```