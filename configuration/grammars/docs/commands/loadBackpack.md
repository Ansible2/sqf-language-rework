Returns current percentage of mass from items stored in a backpack relative to the maximum capacity of the backpack.<br>
It is equivalent to this formula:

```sqf
_loadBackpack = massOfAllItemsInBackpack / getContainerMaxLoad backpack player;
```


---
*Syntaxes:*

`loadBackpack` unit

---
*Example 1:*

```sqf
private _myVariable = loadBackpack myUnit;
```