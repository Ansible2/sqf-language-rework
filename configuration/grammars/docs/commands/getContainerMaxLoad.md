Returns max load value of given uniform, vest or backpack container. For other types of containers, use `maxLoad` command


---
*Example 1:*
```sqf
_maxLoadUniform = getContainerMaxLoad uniform player;
_maxLoadVest = getContainerMaxLoad vest player;
_maxLoadBackpack = getContainerMaxLoad backpack player;
```