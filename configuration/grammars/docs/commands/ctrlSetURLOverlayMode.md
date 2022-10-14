Sets how to handle opening of URL, default browser ot Steam overlay. Possible values:
* 0 - default browser
* 1 - Steam overlay if enabled, otherwise default browser 
* 2 - Steam overlay, shows error message box if disabled (the box has a button to continue with default browser)


---
*Syntaxes:*

control `ctrlSetURLOverlayMode` mode

---
*Example 1:*

```sqf
_control ctrlSetURLOverlayMode 1;
```