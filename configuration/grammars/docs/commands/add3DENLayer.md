Adds an editing layer in `Eden Editor`.


---
*Syntaxes:*

parentLayerID [[add3DENLayer]]  name

---
*Example 1:*

```sqf
_myLayer = -1 add3DENLayer "Enemy Base";
_myLayerFort = _myLayer add3DENLayer "Fortifications";
_myLayerPatrol = _myLayer add3DENLayer "Patrols";
```