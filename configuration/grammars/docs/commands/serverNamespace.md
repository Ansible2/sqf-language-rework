Returns server's `namespace`.
This namespace is only available on the server for the server's uptime duration (same as `uiNamespace`).
Server event handlers, which are available in server config, all use this namespace.


---
*Syntaxes:*

`serverNamespace`

---
*Example 1:*

```sqf
private _serverVars = allVariables serverNamespace;
```