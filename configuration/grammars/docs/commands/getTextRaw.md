Returns raw text from config entry. If entry is subject to ` localization`, the translation key is returned. To obtain the ` localized` text, see `getText`.


---
*Syntaxes:*

`getTextRaw` config

---
*Example 1:*

```sqf
private _text = getTextRaw (configFile >> "CfgVehicles" >> "Thing" >> "displayName"); // "$STR_ACTION_GETIN_DRIVER"
_key = _text select [1]; // "STR_ACTION_GETIN_DRIVER"
_localized = localize _key; // "Get in %1 as Driver"
_localized == getText (configFile >> "CfgVehicles" >> "Thing" >> "displayName"); // true
```