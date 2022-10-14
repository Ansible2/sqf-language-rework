Searches given `haystack` with given `pattern` and replaces all matches with given `replaceString`.


---
*Syntaxes:*

haystack `<See PAGENAM Reference E>` [pattern, replace string]

---
*Example 1:*

```sqf
"wookie boOkie cookie" regexReplace [".oo/gio", "[$']"]; // "[kie boOkie cookie]kie [kie cookie]kie [kie]kie"
```

*Example 2:*

```sqf
"wookie boOkie cookie" regexReplace [".oo/gio", "[$&]"]; // "[woo]kie [boO]kie [coo]kie"
```

*Example 3:*

```sqf
"wook1e boOk2e cook3e" regexReplace [".oo/gio", "[$`]"]; // "[]kie [k1e ]k2e [k2e ]k3e"
```

*Example 4:*

```sqf
"wook1e boOk2e cook3e" regexReplace [".(oo)(.*?)e", "[$2]"]; // "[k1] [k2] [k3]"
```

*Example 5:*

```sqf
"wOokie boOkie cookie" regexReplace [".(?<test>oo)kie/gio", "[$+{test}]"]; // "[oo] [oO] [oo]"
```