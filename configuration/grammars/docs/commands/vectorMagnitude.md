Magnitude of a 3D vector.


---
*Syntaxes:*

`vectorMagnitude` vector

---
*Example 1:*

```sqf
_size = vectorMagnitude [0,3,4]; // returns 5
```

*Example 2:*

```sqf
_speed = vectorMagnitude velocity player;				// return velocity of player in m/s
_speed = (vectorMagnitude velocity player) * 3.6;		// return velocity of player in km/h
_speed = (vectorMagnitude velocity player) * 2.23694;	// return velocity of player in mph
```