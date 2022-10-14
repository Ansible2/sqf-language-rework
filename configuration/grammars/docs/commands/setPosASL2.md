Sets the object position. The pos array uses the `PositionASL` format. The version of the command does not offset based on object center.


---
*Syntaxes:*

obj [[setPosASL2]] pos

---
*Example 1:*

```sqf
private _aslPos = getPosASL player;
_aslPos set [1, _aslPos select 1 + 10];
player setPosASL2 _aslPos;
```