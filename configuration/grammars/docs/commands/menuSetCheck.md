Sets item on given path to be checked or not. By default menu strip entries are not checkable.
Once this command was executed, an entry can become checked and unchecked.
If an entry is checked is indicated by a tick to the left of the entry's text.
Setting an entry to be checkable will overwrite set picture with `menuSetPicture`.


---
*Example 1:*
```sqf
findDisplay 313 displayCtrl 120 menuSetCheck [[0,1], true];
```