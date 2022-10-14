Set `post process effect` parameters.


---
*Syntaxes:*

effect `ppEffectAdjust` settings

---
*Example 1:*

```sqf
"colorCorrections" ppEffectAdjust [1, 1, -0.01, [0, 0, 0, 0], [1.5, 1, 1.2, 0.6], [0.199, 0.587, 0.114, 0]];
```

*Example 2:*

Black&White:

```sqf
_colorCorrectionsEffHandle ppEffectAdjust [1, 0.4, 0, [0, 0, 0, 0], [1, 1, 1, 0], [1, 1, 1, 0]];
```