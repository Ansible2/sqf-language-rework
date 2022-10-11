Joins `array` into `String` with provided `separator`. Array can be of mixed types, all elements will be converted to `String` prior to joining, but the fastest operation is on the array of `Strings`.


---
*Example 1:*
```sqf
_str = "- This, is a sample string." splitString "-,. "; // ["This","is","a","sample","string"]
_str joinString " "; // "This is a sample string"
```

*Example 2:*
```sqf
["This","is","sparta"] joinString " ~ "; // "This ~ is ~ sparta"
```

*Example 3:*
```sqf
["1",2,text "3"] joinString ""; // "123"
```

*Example 4:*
```sqf
"Japa is the best!" splitString "" joinString " "; // "J a p a   i s   t h e   b e s t !"
```

*Example 5:*
Remove all \r\n from file:

```sqf
loadFile "somefile.txt" splitString toString [13,10] joinString " "
```