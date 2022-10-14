Returns the status of autobrake (see `disableBrakes`).


---
*Syntaxes:*

`brakesDisabled` transport

---
*Example 1:*

```sqf
if !(brakesDisabled _vehicle) then
{
	disableBrakes _vehicle;
};
```