Sets the object position above sea surface. The pos array uses the `PositionASLW` format.


---
*Syntaxes:*

obj `setPosASLW` pos

---
*Example 1:*

```sqf
_diver setPosASLW [(position _diver) select 0, (position _diver) select 1, -10];
```