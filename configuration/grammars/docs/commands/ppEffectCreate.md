Creates `Post Process Effects` specified by effect name and priority.<br>
Supported effects:
{{Columns|2|
* `"RadialBlur"`
* `"ChromAberration"`
* `"WetDistortion"`
* `"ColorCorrections"`
* `"DynamicBlur"`
* `"FilmGrain"`
* `"ColorInversion"`


---
*Example 1:*
```sqf
_ppGrain = ppEffectCreate ["filmGrain", 2005];
```