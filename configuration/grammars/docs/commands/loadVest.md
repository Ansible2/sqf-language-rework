Returns current percentage of mass from items stored in a vest relative to the maximum capacity of the vest. <br>
It is equivalent to this formula:

```sqf
_loadVest = massOfAllItemsInVest / getContainerMaxLoad vest player;
```


---
*Syntaxes:*

`loadVest` unit

---
*Example 1:*

```sqf
_weight = loadVest player;
```