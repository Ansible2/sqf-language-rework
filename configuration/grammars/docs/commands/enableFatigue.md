Enables/Disables the person's fatigue.


---
*Syntaxes:*

unit `enableFatigue` enable

---
*Example 1:*

```sqf
player enableFatigue false;
```

*Example 2:*

```sqf
{ _x enableFatigue false; } forEach (units group player);
```