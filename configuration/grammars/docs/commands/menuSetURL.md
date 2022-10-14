Sets weblink (URL) of given menu strip entry, subject to **allowedHTMLLoadURIs[]** whitelisting in `CfgCommands` config.


---
*Syntaxes:*

`menuSetURL` [idc, path, link]

control `menuSetURL` [path, link]

---
*Example 1:*

```sqf
_ctrlMenuStrip menuSetURL [[0,0,1], "https://arma3.com/"];
```