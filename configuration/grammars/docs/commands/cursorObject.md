Returns the object under cursor. This command is quite different from `cursorTarget` as it is more precise in determining the boundaries of the pointed at object and can detect a larger variety of objects including map objects and trees.


---
*Syntaxes:*

`cursorObject`

---
*Example 1:*

```sqf
hint str [getModelInfo cursorObject, typeOf cursorObject];
```