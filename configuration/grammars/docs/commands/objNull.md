A non-existent `Object`. To compare non-existent objects use `isNull` or `isEqualTo`:

```sqf
objNull == objNull;			// false
isNull objNull;				// true
objNull isEqualTo objNull;	// true
```


---
*Syntaxes:*

`objNull`

---
*Example 1:*

```sqf
player == player; // false if player is null
```

*Example 2:*

```sqf
isNull player; // true if player is null
```

*Example 3:*

```sqf
str objNull // <NULL-object>
```

*Example 4:*

```sqf
position objNull // [0,0,0]
```