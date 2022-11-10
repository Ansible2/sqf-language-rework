Advanced hint call, creates hint itself.<br>
This function gets parameters from variable `BIS_fnc_advHint_hint`:<br>
	BIS_fnc_advHint_hint select 0: `String` - Class of hint<br>
	BIS_fnc_advHint_hint select 1: `String` - Structured text of full hint<br>
	BIS_fnc_advHint_hint select 2: `String` - Structured text of short hint<br>
	BIS_fnc_advHint_hint select 3: `Number` - Duration of short hint in seconds<br>
	BIS_fnc_advHint_hint select 4: `String` - Condition for hiding of short hint (default: "false")<br>
	BIS_fnc_advHint_hint select 5: `Number` - Duration of full hint in seconds<br>
	BIS_fnc_advHint_hint select 6: `String` - Condition for hiding of full hint (default: "false")<br>
	BIS_fnc_advHint_hint select 7: `Boolean` - True shows directly full hint (default: `false`)<br>
	BIS_fnc_advHint_hint select 8: `Boolean` - True for using of sound (default: `true`)


---
*Syntaxes:*

fullTextcall call `BIS_fnc_advHintCall`

---
*Example 1:*

```sqf
false call BIS_fnc_advHintCall;
```