Sets the optic mode of the current weapon to the given class name or the index.


---
*Syntaxes:*

unit `setOpticsMode` mode

---
*Example 1:*

```sqf
player setOpticsMode "Hamr2Scope"; // Default optic mode for optic_Hamr
```

*Example 2:*

```sqf
player setOpticsMode 0;
```

*Example 3:*

```sqf
player setOpticsMode [1, 0]; // reset the optics mode of the player's primary weapon to the default
```