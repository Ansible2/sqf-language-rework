Creates a new `Group` for the given `Side`. Using this command if the group limit is reached will return `grpNull`. The new `Group` exists globally, but it's locality is where this command was executed.


---
*Syntaxes:*

`createGroup` side

`createGroup` [side, deleteWhenEmpty]

---
*Example 1:*

```sqf
private _group = createGroup east;
```

*Example 2:*

```sqf
private _group = createGroup [east, true];
```