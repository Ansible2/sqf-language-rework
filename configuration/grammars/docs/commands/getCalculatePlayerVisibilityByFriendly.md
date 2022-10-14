Returns `true` if visibility of `player` by friendly units is calculated.


---
*Syntaxes:*

`getCalculatePlayerVisibilityByFriendly`

---
*Example 1:*

```sqf
if (!getCalculatePlayerVisibilityByFriendly) then
{
	calculatePlayerVisibilityByFriendly true;
};
```