Move player into given unit. Some usage advices:
* Try avoiding `selectPlayer` on editor-placed units in multiplayer, as it may, on occasion, lead to some undefined behaviour.
* If you need to `selectPlayer` into another unit, consider `creatingUnit` dynamically.


---
*Syntaxes:*

`selectPlayer` unitName

---
*Example 1:*

```sqf
selectPlayer bob;
```