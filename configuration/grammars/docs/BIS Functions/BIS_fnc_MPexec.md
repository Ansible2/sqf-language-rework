Execute received remote execution. This function is used by `BIS_fnc_MP` and should not be called directly.


---
*Syntaxes:*

[packetName, packetValue] call `BIS_fnc_MPexec`

---
*Example 1:*

```sqf
["BIS_fnc_MP_packet", ["Hello World", "hint", true, true]] call BIS_fnc_MPexec;
```