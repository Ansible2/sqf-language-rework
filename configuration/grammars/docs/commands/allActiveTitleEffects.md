Returns a list of all layers that have currently active title effect. Numbers equal to or greater than 0 represent cut layers, where as -1 represents title layer (see `Title Effect Type`). Named layers are represented by their respective index.


---
*Example 1:*
```sqf
cutText ["Hello World!" ,"PLAIN", 2];
hint str allActiveTitleEffects; // [0]
```

*Example 2:*
```sqf
21 cutText ["Hello World!", "PLAIN", 2];
hint str allActiveTitleEffects; // [21]
```

*Example 3:*
```sqf
cutText ["Hello World!", "PLAIN", 2];
titleText ["Hello World!", "PLAIN", 2];
hint str allActiveTitleEffects; // [-1, 0]
```