Returns data stored in menu entry on given path.


---
*Example 1:*
```sqf
// Create an entry which will return its data once clicked
private _ctrlMenuStrip = findDisplay 313 displayCtrl 120;
private _indexMain = _ctrlMenuStrip menuAdd [[], "Custom Tools"];
private _indexData = _ctrlMenuStrip menuAdd [[_indexMain],"This entry will print its data to system chat when clicked"];
_ctrlMenuStrip menuSetData [[_indexMain,_indexData], "[objNull,'Some String',true]"];
_ctrlMenuStrip menuSetAction [[_indexMain,_indexData], "systemChat (findDisplay 313 displayCtrl 120 menuData (menuHover (findDisplay 313 displayCtrl 120)));"];
```