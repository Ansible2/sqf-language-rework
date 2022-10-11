Returns the render scale of the object relative to the original model.


---
*Example 1:*
```sqf
private _objectScale = getObjectScale _object;

if (_objectScale != 1) exitWith { hint "all good" };
if (_objectScale > 1) then
{
	hint "it's bigger!";
}
else
{
	hint "it's smaller...";
};
```