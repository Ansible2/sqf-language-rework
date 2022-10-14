Get array with all assigned items. The resulting Array is sorted like: [<Map>, <Compass>, <Watch>, <Radio>, <GPS>, <NVG>, <Binoculars>]. But if something is missing it get's omitted so you can not be sure that some element is at a constant index. To return stored items see `items` and `itemsWithMagazines`.


---
*Syntaxes:*

`assignedItems`  unit

---
*Example 1:*

```sqf
hint str assignedItems player;
```