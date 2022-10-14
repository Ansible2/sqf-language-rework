Sets URL property of the given control subject to **allowedHTMLLoadURIs[]** whitelisting in `CfgCommands` config. Supported controls are:
* **CT_BUTTON**
* **CT_SHORTCUTBUTTON** 
* **CT_ACTIVETEXT**


---
*Syntaxes:*

control `ctrlSetURL` URL

---
*Example 1:*

```sqf
_control ctrlSetURL "http://arma3.com/";
```