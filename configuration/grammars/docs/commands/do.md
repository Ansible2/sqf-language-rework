Executes `code`. Used as part of a construct, such as `while`, `with`, `for` and `switch`. The `code` is always executed in `missionNamespace` unless `do` is used with `with` as an argument.


---
*Example 1:*
```sqf
while { b > a } do
{
	a = a + 1;
};
```

*Example 2:*
```sqf
with uiNamespace do
{
	MyUIVar = MyUIVar + 5;
};
```

*Example 3:*
```sqf
for "_i" from 1 to 10 do
{
	systemChat str _i;
	sleep 0.5;
};
```

*Example 4:*
```sqf
switch (50) do
{
	case 25: { hint "25" };
	case 50: { hint "50" }; // hints "50"
	case 75: { hint "75" };
	default { hint "nope" };
};
```