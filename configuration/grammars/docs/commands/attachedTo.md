Returns object the given object is attached to or `objNull` if the given object is not attached to anything.


---
*Syntaxes:*

`attachedTo` obj

---
*Example 1:*

```sqf
if (isNull attachedTo _obj1) then {
  hint "_obj1 is not attached to anything.";
};
```