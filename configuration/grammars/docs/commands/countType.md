Count how many objects in the array are of given type. This command also works with parent classes like "Air", "Tank", and "Car". For a full class reference see `Classes`.


---
*Syntaxes:*

type `countType` objects

---
*Example 1:*

```sqf
_count = "Tank" countType list _triggerOne;
```

*Example 2:*

```sqf
_count = "B_medic_F" countType units player;
```