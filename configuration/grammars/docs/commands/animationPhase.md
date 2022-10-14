Returns the phase of the given animation on the given object. Animation can be scripted (`animate`, `animateSource`, `animateDoor`) or engine driven. Animation names for an object could be found out with `animationNames` command. When animation is rotation, like with "MainTurret" for example, the output is in radians, to convert to degrees use `deg` command.


---
*Syntaxes:*

object `animationPhase`  animationName

---
*Example 1:*

```sqf
_building animate ["maindoor",1];
sleep 1;
_p = _building animationPhase "maindoor";// Returns 1, if the animation speed is two seconds
```

*Example 2:*

```sqf
_flagPole animationPhase "flag";
```

*Example 3:*

```sqf
_tank animationPhase "MainTurret";
```