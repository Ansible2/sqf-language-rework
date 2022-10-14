Returns slider step value for line and page movement of `CT_SLIDER` or `CT_XSLIDER`.


---
*Syntaxes:*

`sliderSpeed` idc

`sliderSpeed` control

---
*Example 1:*

```sqf
sliderSpeed _ctrlSlider params ["_min", "_max"];
```

*Example 2:*

Since Arma 3 v2.07.148151:

```sqf
sliderSpeed _ctrlSlider params ["_min", "_max", "_step"];
```