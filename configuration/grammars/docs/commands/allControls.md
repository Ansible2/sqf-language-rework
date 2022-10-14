Returns a list of all controls for desired existing display. Returned controls also include controls from `CT_CONTROLS_GROUP`s.


---
*Syntaxes:*

`allControls` display

`allControls` controlsGroup

---
*Example 1:*

```sqf
_allCtrls = allControls findDisplay 46;
```

*Example 2:*

```sqf
_allSubCtrls = allControls _myControlsGroup;
```