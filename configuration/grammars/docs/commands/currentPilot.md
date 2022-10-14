Returns the person piloting the vehicle. If co-pilot is piloting, co-pilot is returned. If you need current pilot of a UAV or UGV, see `UAVControl` command.


---
*Syntaxes:*

`currentPilot` vehicle

---
*Example 1:*

```sqf
if (currentPilot _vehicle != driver _vehicle) then
{
	hint "The pilot is not piloting!";
};
```