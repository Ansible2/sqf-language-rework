Returns all named layers used by `cutRsc`, `cutText`, `cutObj` or `cutFadeOut`.
The layer normally would be added on the first use of any of the aforementioned commands, however if a layer needs to be reserved it could be done like so:

```sqf
private _layerNum = "TAG_myLayerName" cutFadeOut 0;
```


---
*Syntaxes:*

`allCutLayers`

---
*Example 1:*

```sqf
private _allLayers = allCutLayers;
```