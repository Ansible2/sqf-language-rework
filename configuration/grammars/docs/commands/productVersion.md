Returns the product's friendly name, identifier, version and build number.


---
*Syntaxes:*

`productVersion`

---
*Example 1:*

```sqf
hint str productVersion; // would return ["Arma 2 OA", "arma2oa", 162, 95208] on Arma 2 OA 1.62.95208
```

*Example 2:*

```sqf
hint str productVersion; // ["Arma 3", "Arma3", 137, 128764, "Development", false, "Windows"]
```

*Example 3:*

```sqf
format ["%1.%2",(productVersion # 2)/100 toFixed 2,(productVersion # 3)]; // returns version e.g.: "2.00.146773"
```