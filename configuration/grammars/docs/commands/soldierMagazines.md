Get array with all magazines of the given unit.


---
*Syntaxes:*

`soldierMagazines` unit

---
*Example 1:*

```sqf
soldierMagazines player;
// returns:
[
	"6.5mm 30Rnd STANAG Mag(30/30)[id/cr:1/0](5x)",
	"9mm 16Rnd Mag(16/16)[id/cr:7/0](2x)",
	"RGO Frag Grenade(1/1)[id/cr:10/0](2x)",
	"Smoke Grenade (White)(1/1)[id/cr:12/0](1x)",
	"Smoke Grenade (Green)(1/1)[id/cr:13/0](1x)",
	"Chemlight (Green)(1/1)[id/cr:14/0](2x)",
	"Titan AT Missile(1/1)[id/cr:16/0](2x)"
]
```