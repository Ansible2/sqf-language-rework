Creates a list of supported operators and type. Each field of array has the format: "x:name" Where x can be:
*'t' - type
*'n' - `nullar` operator
*'u' - `unary` operator
*'b' - `binary` operator.

'name' is the operator or type name (in case operator, type of input operands is included). 
`mask` parameter can be an empty string, or one of field. In this case, function returns empty array, if operator is not included in the list. Limited wildcard support is available. Type `x` may be replaced with `*`, meaning all types. For the `mask` partial match may be used, like `abc*`, meaning any operators starting with 'abc' are reported, for example: 
* **""** - list all types and commands
* **"t:*"** - list all types
* **"*:<command>*"** - list all entries for script `<command>`
* {{GVI|arma3|2.00


---
*Example 1:*
```sqf
supportInfo "b:select*"; // returns ["b:ARRAY select SCALAR","b:ARRAY select BOOL","b:CONFIG select SCALAR"]
```

*Example 2:*
Return all available commands:

```sqf
_commands = supportInfo "";
```