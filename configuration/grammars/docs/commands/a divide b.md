Returns the quotient of two numbers. If the divisor is 0 a `Division by zero` error is shown but the script does not stop and the result of such division is assumed to be 0.<br><br>
Alternative syntax returns `Config` entry with given name (alias for `>>`, slightly slower but with ` higher precedence`).


---
*Example 1:*
```sqf
_result = 15 / 3; // result is 5
```

*Example 2:*
```sqf
_cfgVehicles = configFile / "CfgVehicles"; // identical to configFile >> "CfgVehicles" (but the order of precedence)
```