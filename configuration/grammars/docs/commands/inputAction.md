Return the state of input devices mapped to given input action.
<br>
For Arma 3 inputActions and its bindings see: `<See PAGENA Reference E>/actions`.
<br>
For earlier Arma editions  see `:Category:Key Actions`.


---
*Example 1:*
```sqf
inputAction "leanLeft";
``` Returns 1 if the button mapped to "leanLeft" is pressed currently else 0.

*Example 2:*
```sqf
[] spawn {
	waitUntil {inputAction "reloadMagazine" > 0};
	hint "Reload Key Pressed";
};
```