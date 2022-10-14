Extracts `localize`d text from config entry, if entry is subject to `localization`, otherwise returns text value.
To obtain the translation key itself, see `getTextRaw`.


---
*Syntaxes:*

`getText` config

---
*Example 1:*

```sqf
_text = getText (configFile >> "CfgVehicles" >> "Thing" >> "icon"); // "Get in %1 as Driver"
```