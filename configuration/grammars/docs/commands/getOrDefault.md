Retrieves a value out of a `HashMap` after looking it up by its key. When the HashMap doesn't contain the key, the default value is returned


---
*Syntaxes:*

hashMap `getOrDefault` [key, defaultValue, setDefault]

---
*Example 1:*

```sqf
private _myValue = _myHashMap getOrDefault ["a", "Not Found!"];
```

*Example 2:*

```sqf
private _myValue = _hashMap getOrDefault ["a", "Not Found!", true]; // will add default value to the hash map if it does not exist
```

*Example 3:*

```sqf
private _array = _hashmap getOrDefault [_key, [], true]; // a new array will be created if it doesn't exist
_array pushBack _item; // _item will be added to the array (the one in the hashmap is updated by reference)
```