Converts the supplied `Array` of `Number`s into a `String` through [e](https://en.wikipedia.org/wiki/Unicod) characters representation conversion, or provided `Code` to `compilable` `String`.


---
*Example 1:*
```sqf
hint toString [65,97,338]; // returns "AaŒ"
```

*Example 2:*
```sqf
["test", "test"] joinString toString [12345] splitString toString [12345]; // ["test", "test"]
```

*Example 3:*
```sqf
private _compilableString = toString { hint "it works!" };
hint _compilableString; // hints ' hint "it works!" '
sleep 2;
call compile _compilableString; // hints ' it works! '
```