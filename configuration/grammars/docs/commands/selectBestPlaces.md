Find the places with the maximum value of `expression` in the given area. Places can be on water. Results are sorted by value. Search pattern is randomised every command execution.


---
*Syntaxes:*

`selectBestPlaces` [position, radius, expression, precision, sourcesCount]

---
*Example 1:*

```sqf
myPlaces = selectBestPlaces [position player, 50, "meadow + 2*hills", 1, 5];
```