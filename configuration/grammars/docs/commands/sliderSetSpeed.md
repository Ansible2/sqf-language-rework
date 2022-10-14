Sets slider line step and page step delta amount as well as optional step amount of `CT_SLIDER` or `CT_XSLIDER` with given idc of topmost user `dialog`. 
* Click to arrow - move by line
* Click to scale outside thumb - move by page.


---
*Syntaxes:*

`sliderSetSpeed` [idc, line, page, step]

control `sliderSetSpeed` [line, page, step]

---
*Example 1:*

```sqf
sliderSetSpeed [101, 0.5, 2];
```