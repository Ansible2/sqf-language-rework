


---
*Syntaxes:*

varName `addPublicVariableEventHandler`  code

varName `addPublicVariableEventHandler`  [target, code]

---
*Example 1:*

```sqf
"publicThis" addPublicVariableEventHandler {
	hint format [
		"%1 has been updated to: %2",
		_this select 0,
		_this select 1
	]
};
```

*Example 2:*

Client:

```sqf
"'^:)123BURP,+=lol" addPublicVariableEventHandler {hint ("NUTS are " + (_this select 1))};
```
Server:

```sqf
missionNamespace setVariable ["'^:)123BURP,+=lol", "craZZZZy"];
publicVariable "'^:)123BURP,+=lol";
```