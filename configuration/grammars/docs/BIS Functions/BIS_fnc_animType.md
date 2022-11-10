Function that returns a categorized array using a single string with the animation name.


---
*Syntaxes:*

param call `BIS_fnc_animType`

---
*Example 1:*

```sqf
animType = ["AmovPsitMstpSrasWrflDnon"] call BIS_fnc_animType;
// Returns `"Action","Move"],["Pose","Sit"],["Movement","Stop"],["Stance","Raised"],["Hand item","Rifle"],["Direction","Not specified"`
```