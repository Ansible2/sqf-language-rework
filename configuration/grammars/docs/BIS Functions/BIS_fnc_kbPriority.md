<pre>/*

	Description:
	Set conversation priority. Conversations with priority not in the list won't be played

	Parameter(s):
	_this:
		ARRAY - List of priorities. Empty array will just return current value.
		NUMBER
			>0 - add priority to already existing list
			<0 - remove priority from already existing list
			Priority 0 cannot be tempered with

	Returns:
	ARRAY - List of priorities
*/</pre>

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIS_fnc_kbPriority` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIS_fnc_kbPriority;
``` -->