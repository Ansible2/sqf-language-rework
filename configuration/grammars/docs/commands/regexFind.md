Searches in a string with a regular expression.


---
*Example 1:*
```sqf
"wooKie boOkie cookie" regexFind [".ookie/gio"]; // [[["wooKie", 0]], [["boOkie", 7]], [["cookie", 14]]]
```

*Example 2:*
```sqf
"wooKie boOkie cookie" regexFind [".ookie/i"]; // [[["wooKie",0]]]
```

*Example 3:*
```sqf
"wooKie boOkie cookie" regexFind [".ookie/"]; // [[["cookie", 14]]]
```

*Example 4:*
Multiline example:

```sqf
"co1kie2
co2kie" regexFind ["^co.kie$"]; // [[["co2kie",9]]]
```

*Example 5:*
```sqf
"I'm a cookie clicker" regexFind ["c(.*?)k(.*?)e/i"]; // [[["cookie",6], ["oo", 7], ["i", 10]]]
```

*Example 6:*
```sqf
"I'm a cookie clicker" regexFind ["c(.*?)k(.*?)e"]; // [[["cookie", 6], ["oo", 7], ["i", 10]], [["clicke", 13], ["lic", 14], ["", 18]]]
```