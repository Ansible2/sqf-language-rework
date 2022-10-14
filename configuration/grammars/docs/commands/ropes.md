Returns all ropes attached to a ropes owner transport in an `Array`, otherwise an empty array **[]** is returned.


---
*Syntaxes:*

`ropes` ropesOwner

---
*Example 1:*

```sqf
hint str (ropes vehicle player);
```

*Example 2:*

```sqf
_rope1 = (ropes heli1) select 0;
```