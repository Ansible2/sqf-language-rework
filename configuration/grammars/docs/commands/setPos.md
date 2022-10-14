Sets object position to format `PositionAGLS` (over surface). The Z value is used to calculate the nearest surface below the provided position. If the surface is close, it uses the Z position of the surface. Otherwise, Z value becomes the offset from that surface.


---
*Syntaxes:*

object `setPos` pos

---
*Example 1:*

```sqf
player setPos [getPos player select 0, getPos player select 1, (getPos player select 2) +10];

// the same as above using set (OFP:R v1.75)
_pos = getPos player;
_pos set [2, _pos select 2 + 10];
player setPos _pos;

// the same as above using modelToWorld (ArmA v1.00)
player setPos (player modelToWorld [0,0,10]);

// the same as above using vectorAdd (Arma 3 v1.22)
player setPos (getPos player vectorAdd [0,0,10]);
```

*Example 2:*

```sqf
_obj setPos [getPos _obj select 0, getPos _obj select 1, -5];
```

*Example 3:*

```sqf
player setPos (getPos _obj);
```