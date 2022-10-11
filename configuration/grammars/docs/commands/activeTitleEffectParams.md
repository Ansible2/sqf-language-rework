Returns type, effect, speed and map visibility of the given active title effect (see `allActiveTitleEffects`)


---
*Example 1:*
```sqf
21 cutText ["Hello World!", "PLAIN", 2];
hint str activeTitleEffectParams 21; // ["TXT", "PLAIN", 2, true]
```

*Example 2:*
```sqf
titleText ["Hello World!", "BLACK"];
hint str activeTitleEffectParams -1; // ["TXT", "BLACK", 1, true]
```