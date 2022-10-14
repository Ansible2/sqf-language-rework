Return all entities and sub-layer in `Eden Entity` layer. In order to get all layer entities during a scenario use `getMissionLayerEntities`.


---
*Syntaxes:*

[[get3DENLayerEntities]] layerID

---
*Example 1:*

```sqf
_myLayer = -1 add3DENLayer "CTRG";
player set3DENLayer _myLayer;
_entities = get3DENLayerEntities _myLayer;
```