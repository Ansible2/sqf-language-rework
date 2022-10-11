Splits the provided `ANSI` string into an array of tokens according to given delimiters.


---
*Example 1:*
```sqf
_str = "- This, is a sample string." splitString "-,. "; // ["This","is","a","sample","string"]
_str joinString "#"; // "This#is#a#sample#string"
```

*Example 2:*
```sqf
"\A3\ui_f\data\map\vehicleicons\iconLogic_ca.paa" splitString "\."; // ["A3","ui_f","data","map","vehicleicons","iconLogic_ca","paa"]
```

*Example 3:*
```sqf
"1:2:3" splitString ":"; // ["1","2","3"]
```

*Example 4:*
```sqf
"Japa is the best!" splitString "" joinString " "; // "J a p a   i s   t h e   b e s t !"
```

*Example 5:*
```sqf
_cmd = currentMagazineDetail player; // "9mm 16Rnd Mag(13/16)[id/cr:10000011/0]"
_cmd splitString "([ ]/:)"; // ["9mm","16Rnd","Mag","13","16","id","cr","10000011","0"]
```

*Example 6:*
Remove all \r\n from file:

```sqf
loadFile "somefile.txt" splitString toString [13,10] joinString " ";
```