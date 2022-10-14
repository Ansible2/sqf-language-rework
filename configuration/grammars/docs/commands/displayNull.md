A non-existing `Display`. To compare non-existent displays use `isNull` or `isEqualTo`:

```sqf
displayNull == displayNull;		// false
isNull displayNull;					// true
displayNull isEqualTo displayNull;	// true
```


---
*Syntaxes:*

`displayNull`

---
*Example 1:*

```sqf
!isNull displayNull; // false
```

*Example 2:*

```sqf
str displayNull; // No display
```