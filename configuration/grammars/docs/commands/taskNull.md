A non-existing `Task`. To compare non-existent tasks use `isNull` or `isEqualTo`:

```sqf
taskNull == taskNull;			// false
isNull taskNull;				// true
taskNull isEqualTo taskNull;	// true
```


---
*Syntaxes:*

`taskNull`

---
*Example 1:*

```sqf
!isNull taskNull; // false
```

*Example 2:*

```sqf
str taskNull; // no task
```