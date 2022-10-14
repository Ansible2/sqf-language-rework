Multiplies graph values by the given coefficient. The corresponding lower bound value is used instead if the product is smaller than the bound.


---
*Syntaxes:*

`decayGraphValues` [lowerBoundValues, graphValues, coef]

---
*Example 1:*

```sqf
decayGraphValues [[1,2,3,4,5], [1,4,9,16,25], 0.3]; // returns [1,2,3,4.8,7.5]
```