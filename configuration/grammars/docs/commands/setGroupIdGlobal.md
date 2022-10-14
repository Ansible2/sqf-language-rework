A `global` equivalent of  `setGroupId`.


---
*Syntaxes:*

group `setGroupIdGlobal` [format, keyword1, ..., keywordN]

---
*Example 1:*

```sqf
group player setGroupIdGlobal ["PAPA BEAR"];
hint groupId group player; // "PAPA BEAR"
```