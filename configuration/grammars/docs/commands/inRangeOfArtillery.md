Returns true if all given units are able to fire at given position with given magazineType.


---
*Syntaxes:*

pos `inRangeOfArtillery` [units, magazineType]

---
*Example 1:*

```sqf
_isInRange = getMarkerPos "myTarget" inRangeOfArtillery [[myArty], "32Rnd_155mm_Mo_shells"];
```