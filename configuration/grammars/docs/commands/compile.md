Compiles `String` expression into `Code`.


---
*Syntaxes:*

`compile` expression

---
*Example 1:*

```sqf
_string = "a = a + 1";
_code = compile _string;
call _code;
```

*Example 2:*

```sqf
hint str compile "a = b";
// result: { a = b }
```