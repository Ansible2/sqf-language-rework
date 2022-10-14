Find the road segments within the circle of given radius.


---
*Syntaxes:*

pos `nearRoads` radius

---
*Example 1:*

```sqf
_list = player nearRoads 50;
```

*Example 2:*

```sqf
_list = (position _unit) nearRoads 50;
```

*Example 3:*

```sqf
_list = [1800,5700] nearRoads 50;
```