Removes Eden Editor event handler of given type and ID.
<br><br>
See the list of all [[Arma_3:_Event_Handlers:_Eden_Editor|Eden Editor Event Handlers]].


---
*Syntaxes:*

[[remove3DENEventHandler]] [type,id]

---
*Example 1:*

```sqf
eh = add3DENEventHandler ["onUndo",{systemChat "Zip..."}];
remove3DENEventHandler ["onUndo",eh];
```