Returns a list of objects attached to the given object.


---
*Syntaxes:*

`attachedObjects` obj

---
*Example 1:*

```sqf
{
  detach _x;
} forEach attachedObjects player;
```

*Example 2:*

```sqf
if (count attachedObjects player == 0) then {
  hint "There are no objects attached to player";
};
```