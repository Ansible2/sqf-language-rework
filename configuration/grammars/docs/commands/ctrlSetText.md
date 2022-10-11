Sets the text of a control of the currently active user dialog or display. This command can be used for static texts, buttons, edit lines and active texts as well as for images, where you can use it to set the image path.
<br>Read `Arma: GUI Configuration` for more information about user dialogs and controls.
<br>Use `endl` to insert line breaks.
Since Arma 3 v2.05.147765 supported control types are:
* `CT_STATIC`
* `CT_EDIT`
* `CT_XKEYDESC`
* `CT_XBUTTON`
* `CT_SHORTCUTBUTTON`
* `CT_STRUCTURED_TEXT`
* `CT_BUTTON`
* `CT_ACTIVETEXT`


---
*Example 1:*
```sqf
ctrlSetText [100, "Hello world"]; // for Dialogs
```

*Example 2:*
```sqf
_control ctrlSetText "Hello world."; // for Displays
```