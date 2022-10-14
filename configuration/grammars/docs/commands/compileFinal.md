Compile expression and makes it final, preventing it from:
* repeated `compile` or `compileFinal`
* removal by `nil`
* remote rewrite using `publicVariable`, `publicVariableClient` and `publicVariableServer`


---
*Syntaxes:*

`compileFinal`  expression

---
*Example 1:*

```sqf
myCode = compileFinal "a = a + 1";
call myCode;
 
// Repeated compile won't have any effect
myCode = compileFinal "a = a + 2";

// Duplicate code will be final as well
myDuplicateCode = myCode;
```