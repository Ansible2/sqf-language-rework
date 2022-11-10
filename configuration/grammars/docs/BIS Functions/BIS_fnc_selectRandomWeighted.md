Selects a random item from an array, taking into account item weight.


---
*Syntaxes:*

itemsAndWeights call `BIS_fnc_selectRandomWeighted`

[items, weights] call `BIS_fnc_selectRandomWeighted`

---
*Example 1:*

```sqf
["apples",.3,"pears",.2,"bananas",.4,"diamonds",.1,"unicorns",.00001] call BIS_fnc_selectRandomWeighted;
```

*Example 2:*

```sqf
`"apples","pears","bananas","diamonds"], [0.3,0.2,0.4,0.1` call BIS_fnc_selectRandomWeighted;
```