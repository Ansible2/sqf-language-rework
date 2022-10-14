Set damage on a part of an object.


---
*Syntaxes:*

object `setHit` [part, damage, useEffects, killer, instigator]

---
*Example 1:*

```sqf
vehicle player setHit ["motor", 1];
```

*Example 2:*

```sqf
vehicle player setHit ["mala vrtule", 0.95];
```

*Example 3:*

```sqf
if (local _heli) then
{
	_heli setHit ["velka vrtule", 0];
}
else
{
	hint ("Vehicle " + str _heli + " must be local to this machine to do that!");
};
```