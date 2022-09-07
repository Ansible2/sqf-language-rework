### Syntax:
```sqf
a or b
```
#### Parameters:
a: Boolean - Test condition or variable
<br>
b: Boolean - Test condition or variable

#### Return Value:
```sqf
Boolean
```

## Examples:

### Example 1:
```sqf
if (_obj1 or (_enemycount == 0) or (not alive _enemyGeneral)) then { hint "you win !"; };
```

### Example 2:
```sqf
// without lazy evaluation, select would throw an error in the event of an empty array
if ((count _array == 0) or { (_array select 0) != player }) then
{
	hint "It works!";
};
```