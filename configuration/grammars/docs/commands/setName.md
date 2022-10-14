Sets the name of a location or a person. In Arma 3 this can be used to set `name` of a person but only in single player.


---
*Syntaxes:*

unit `setName` name

unit `setName` [name, firstName, lastName]

location `setName` name

---
*Example 1:*

```sqf
myLocation setName "My Location Name";
```

*Example 2:*

```sqf
player setName "New Name";
```

*Example 3:*

```sqf
player setName ["Ben Kerry","Ben","Kerry"];
```