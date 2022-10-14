Returns local `Namespace` attached to the mission.
Has the same lifetime as `missionNamespace` but variables `cannot be broadcasted` out of or into this namespace in multiplayer and will not be serialized when game is saved. UI variables can be safely stored in this namespace.
Use `allVariables` command to save the variables elsewhere if required.


---
*Syntaxes:*

`localNamespace`

---
*Example 1:*

```sqf
localNamespace setVariable ["abc", 123];
```

*Example 2:*

```sqf
with localNamespace do { hint str abc };
```