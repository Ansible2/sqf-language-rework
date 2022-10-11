Returns the text of a control of the currently active user dialog. This command can be used on static texts, buttons, edit lines and active texts as well as for images, where it returns the image path. Does not work on HTML control and returns empty string "". Since Arma 3 v2.05.147765 supported control types are:
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
_text = ctrlText 100;
```

*Example 2:*
```sqf
_text = ctrlText _control;
```