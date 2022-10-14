Plays given sound in 2D.


---
*Syntaxes:*

from [[say2D]] sound

from [[say2D]] [sound, maxTitlesDistance, speed]

[from, to] [[say2D]] sound

[from, to] [[say2D]] [sound, maxTitlesDistance, speed]

---
*Example 1:*

```sqf
player say2D "HelloThere";
```

*Example 2:*

```sqf
[player, _officer] say2D ["HelloThere", 50, 0.9];
```