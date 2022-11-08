Checks if the given parameter matches any `case`. If so, the code block of that case will be executed. After that the switch ends so no further cases will be checked.<br>
If a case has no code block the code of the next case will automatically be executed, making it possible to formulate a logical "or" for cases which would otherwise contain the exact same code (see <See HashLink Reference Example 2>).<br>
The `default` block will be executed `only` if no case matches, no matter its position inside the code block. It is not a `case`, and will `never` be entered by fallthrough.


---
*Syntaxes:*

`switch` value

---
*Example 1:*

```sqf
switch (floor random 5) do
{
	case 1: { hint "one"; };
	case 2: { hint "two"; };
	default { hint "zero, three or four" };
};
```

*Example 2:*

<!-- this example is referenced in Description -->

```sqf
switch (_condition) do
{
	case "string1";
	case "string2": { hint "string1 or string2" };
	case "string3";
	case "string4": { hint "string3 or string4" };
	case "string5"; // will never enter default's code
	default { hint "default" };
};
```

*Example 3:*

```sqf
private _color = switch (side player) do
{
	case west: { "ColorGreen" };
	case east: { "ColorRed" };
};
```

*Example 4:*

```sqf
private _fn_moveForward =	{ /*...code...*/ };
private _fn_moveBackward =	{ /*...code...*/ };
private _fn_invalidKey =	{ /*...code...*/ };

switch true do
{
	case (_dikCode in actionKeys "MoveForward"):	_fn_moveForward;
	case (_dikCode in actionKeys "MoveBackward"):	_fn_moveBackward;
	default _fn_invalidKey;
};
```

*Example 5:*

```sqf
switch _var do
{
	case "0";
	default { hint str ["default", _var] };
	case "3": { hint str ["3", _var] };
	case "1";
	case "4";
	case "2": { hint str ["2", _var] };
};

_var = "0"; // -> ["3", "0"]
_var = "1"; // -> ["2", "1"]
_var = "2"; // -> ["2", "2"]
_var = "3"; // -> ["3", "3"]
_var = "4"; // -> ["2", "4"]
_var = "5"; // -> ["default", "5"]
```