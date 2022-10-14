Sets group formation heading. Accepted heading range is 0 to 360. Formation is facing this direction unless enemy is seen. When group is moving, this value is overridden by movement direction. If the new direction is noticeably different from the old direction (approx +/- 15 degrees), units will change positions changing `formationDirection`.


---
*Syntaxes:*

group `setFormDir` heading

---
*Example 1:*

```sqf
_group1 setFormDir 180;
```

*Example 2:*

```sqf
_unit1 setFormDir random 360;
```

*Example 3:*

```sqf
//center the main turret
(group BIS_Crew1) setFormDir (getDir BIS_Armor);
```