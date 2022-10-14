Reverses given array by reference (modifies the original array, just like `resize`). The alternative syntax can be used to reverse a ANSI `string`. If Unicode support is desired, see `forceUnicode`.


---
*Syntaxes:*

`reverse` array

`reverse` string {{GVI|arma3|2.02}}

---
*Example 1:*

```sqf
_arr = [1,2,3];
reverse _arr;
hint str _arr; // [3,2,1]
```

*Example 2:*

```sqf
_wordArr = toArray "gateman";
reverse _wordArr;
hint toString _wordArr; // nametag
```

*Example 3:*

```sqf
reverse "treboR"; // Returns "Robert"
```