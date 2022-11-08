Defines the action performed when user clicks in map by executing command string. The code is executed on every click, until the `command` is 
* removed via <sqf inline>onMapSingleClick ""
```, or
* replaced by <sqf inline>onMapSingleClick "SomeOtherCommand(s)"
```

In <See arma3 Reference Example 4>).<br>
For older games, when click is processed, code should ultimately return `true` back to the engine. If `false` is returned, default processing by the game engine is done.
Return value of any other type (including `Nothing`) is an error. In such case default processing by the game engine is done, and error message may be displayed.


---
*Syntaxes:*

`onMapSingleClick` command

params `onMapSingleClick` command

---
*Example 1:*

`<See arm Reference 1>:` Creates a soldier unit at the position clicked:

```sqf
onMapSingleClick "'SoldierWB' createUnit [_pos, group player]; true";
```

*Example 2:*

`<See arm Reference 1>:` Orders "grp1" to move to position clicked. Disables further map-click actions:

```sqf
onMapSingleClick "grp1 move _pos; onMapSingleClick ''; true";
```

*Example 3:*

`<See o Reference p>:` Single quotes cannot be used for string definition, so two double-quotes have to be used instead:

```sqf
onMapSingleClick "'SoldierWB' createUnit [_pos, group player]; true";
```

*Example 4:*

```sqf
// The following code will disable Shift+click waypoint marker creation
onMapSingleClick {_shift};
```

*Example 5:*

```sqf
// Pass params to onMapSingleClick code
player onMapSingleClick { hint ("Hello " + name _this) }; // Hello KK
```

*Example 6:*

```sqf
// Pass params to onMapSingleClick code -and- disable Shift+click waypoint marker creation
 player onMapSingleClick "hint (""Hello "" + name _this); _shift"; // Hello KK
```