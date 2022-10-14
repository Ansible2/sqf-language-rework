Returns the current scale of given map control.


---
*Syntaxes:*

`ctrlMapScale` ctrl

---
*Example 1:*

```sqf
_control = (findDisplay 12) displayCtrl 51; //Arma 3
_scale = ctrlMapScale _control; //returns number from 1 to 0.001
```