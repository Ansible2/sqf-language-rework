`Image:A3_BIS_fnc_initListNBoxSorting_example.jpg|thumb|right|A GUI using `BIS_fnc_initListNBoxSorting``
Automatically creates buttons and sets them up so they can be used to sort a `CT_LISTNBOX`. The buttons will automatically be resized to fit the column width of `ctrlFilter`.

By default, the `ctrlContent` columns are sorted by `lnbText` (using `lnbSort`). If a specific column should be sorted by `lnbValue` (using `lnbSortByValue`) instead, then something needs to be set in the data of the corresponding `ctrlFilter` column (literally `something`, the condition in the source code is <sqf inline>(_ctrlFilter lnbData [0, _i]) != ""
```).

Regarding `ctrlFilter`:
* The position and size of this control define where the buttons for sorting are created, thus it should be placed above `ctrlContent` and its columns should have the same size as the columns of `ctrlContent`.
* The text set in the columns is displayed as text for the buttons (the buttons are actually transparent).
* The control can also be part of a `CT_CONTROLS_GROUP`. If that is the case, the buttons will be created as children of that group.
* To keep a uniform style between vanilla and custom controls it is recommended to create a background with `CT_STATIC` behind `ctrlFilter` with <syntaxhighlight lang="cpp" inline>colorBackground[] = { 0, 0, 0, 1 };</syntaxhighlight>.
See *(Reference Link "CT_LISTNBOX#BIS_fnc_initListNBoxSorting Example")* for a full example including a config.


---
*Syntaxes:*

[ctrlFilter, ctrlContent, columnIndexes, idc] call `BIS_fnc_initListNBoxSorting`

---
*Example 1:*

```sqf
[_lnbFilter, _lnbContent, [0,1,2,3]] call BIS_fnc_initListNBoxSorting;
```