Disable saving of script containing this command. After this, the script can work with data types which do not support serialization (UI types). See `Namespace serialization` for more information.

 variable. <!--
-->Using `disableSerialization` or `uiNamespace` wouldn't help; the trick here is to pass the argument inside an array:
<sqf>
_display = findDisplay 46;
 _display  spawn { hint str _this; };				// would raise a serialization error
[_display] spawn { hint str (_this select 0); };	// OK</sqf>


---
*Example 1:*
```sqf
disableSerialization;
private _display = findDisplay 46;
```