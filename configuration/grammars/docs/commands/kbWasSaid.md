Check if given item was said by person to someone. See `Conversations` for more details.


---
*Syntaxes:*

person `kbWasSaid` [receiver, topic, sentenceID, maxAge]

---
*Example 1:*

```sqf
player kbWasSaid [otherUnit, "myTopic", "mySentenceID", 3];
```