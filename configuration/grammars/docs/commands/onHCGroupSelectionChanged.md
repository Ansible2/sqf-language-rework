Defines an action performed when `high command` group selection has been changed.<br>
Command receives 2 variables:
* _group: `Group` - last selected/deselected group
* _isSelected: `Boolean` - new selection state of the specific group
The code is executed on every `hc` group selection change until it is replaced or removed (see {{HashLink|#Example 3}}).


---
*Syntaxes:*

`onHCGroupSelectionChanged` code

---
*Example 1:*

```sqf
onHCGroupSelectionChanged {
	if (_isSelected) then
	{
		hint format ["Group %1 has been selected.", _group];
	}
	else
	{
		hint format ["Group %1 has been deselected.", _group];
	};
};
```

*Example 2:*

```sqf
onHCGroupSelectionChanged "player globalChat 'HC group selection has been changed.';";
```

*Example 3:*

Remove event handler:

```sqf
onHCGroupSelectionChanged "";
// or
onHCGroupSelectionChanged {};
```