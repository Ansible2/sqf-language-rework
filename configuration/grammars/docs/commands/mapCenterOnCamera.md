**ctrl `mapCenterOnCamera` enable** syntax enables/disables continuous centering of the main map type control on the camera position. Needs to be executed once.<br>
**`mapCenterOnCamera` ctrl** syntax centers mini map type control on camera. The command returns world position of the camera. Needs to be executed each frame (preferably inside onDraw EH).


---
*Syntaxes:*

mainmap `mapCenterOnCamera` enable

`mapCenterOnCamera`  minimap

---
*Example 1:*

```sqf
// --- Minimap update
((uiNamespace getVariable "BIS_UAV_DISPLAY") displayCtrl 112410) mapCenterOnCamera true;
```