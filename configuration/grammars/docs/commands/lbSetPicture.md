Sets the left picture in the row with given index of `CT_LISTBOX` or `CT_COMBO`. The picture is searched for in the mission directory, the dtaExt subdirectory of the campaign directory and the dtaExt directory and the data bank (or directory).<br>


---
*Example 1:*
```sqf
lbSetPicture [101, 0, "iskoda.paa"];
```

*Example 2:*
```sqf
_control lbSetPicture [0, "iskoda.paa"];
```

*Example 3:*
{{Feature|informative|
Adding pictures to lists is very slow. In order to prevent a list filling's possible slowdown, add the pictures in the `scheduled` environment using `spawn`.<br>
One drawback of that method is that sorting the entries is not easily possible.