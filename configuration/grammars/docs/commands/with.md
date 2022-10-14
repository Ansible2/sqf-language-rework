Creates a `With Type` that is used inside a `do` construct in order to execute code inside a given namespace.


---
*Syntaxes:*

`with` namespace

---
*Example 1:*

```sqf
_myWithType = with uiNamespace;
```

*Example 2:*

```sqf
with missionNamespace do { global = global + 1 };
```