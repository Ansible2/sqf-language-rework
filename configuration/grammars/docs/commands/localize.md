Used to internationalize text messages. A string is returned from `Stringtable.csv` (or `Stringtable.xml`) which corresponds to the `stringName`.


---
*Example 1:*
```sqf
hint localize "STR_WEST"; // Returns "BLUFOR"
```

*Example 2:*
```sqf
hint format ["Go %1", localize "STR_Q_NORTH"]; // Returns "Go North"
```

*Example 3:*
```sqf
hint format 
[
	localize "STR_ACTION_DROP_WEAPON", // "STR_ACTION_DROP_WEAPON" contains "Drop %1"
	localize "STR_SN_RIFLE" // "STR_SN_RIFLE" contains "Rifle"
]; // Returns "Drop Rifle"
```

*Example 4:*
```sqf
localize "$STR_USRACT_ADJUST"; // Since Arma 3 v2.04, Returns "Adjust"
```