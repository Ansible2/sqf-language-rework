Set camera interest for given entity. Camera interest is by default 0. Any unit which is speaking has its camera interest raised to 50. Camera interest is used to focus camera to control depth of field in cutscenes. Combination of camera interest, unit position of the screen, unit movement, unit type, and some other properties is used to determine which unit to focus at. Higher camera interest increases the chance of the unit being focused.


---
*Example 1:*
```sqf
_soldier setCameraInterest 50;
```