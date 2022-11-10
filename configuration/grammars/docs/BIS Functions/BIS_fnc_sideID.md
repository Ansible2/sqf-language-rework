Return config side number.
* 0 {{=}} `opfor` (`east`)
* 1 {{=}} `blufor` (`west`)
* 2 {{=}} `independent` (`resistance`)
* 3 {{=}} `civilian`
* 4 {{=}} `sideUnknown`
* 5 {{=}} `sideEnemy`
* 6 {{=}} `sideFriendly`
* 7 {{=}} `sideLogic`
* 8 {{=}} `sideEmpty`
* 9 {{=}} `sideAmbientLife`


---
*Syntaxes:*

testedSide call `BIS_fnc_sideID`

---
*Example 1:*

```sqf
west call BIS_fnc_sideID; // returns 1
```

*Example 2:*

```sqf
hint format ["Your side (%1) ID is %2", playerSide, playerSide call BIS_fnc_sideID];
```