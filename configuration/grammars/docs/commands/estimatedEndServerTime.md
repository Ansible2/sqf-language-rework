Estimated end of MP game in seconds converted to `serverTime`.


---
*Syntaxes:*

`estimatedEndServerTime`

---
*Example 1:*

Estimated minutes left: 

```sqf
_min = (ceil (estimatedEndServerTime - serverTime) / 60);
```