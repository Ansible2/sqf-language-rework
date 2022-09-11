Retrieves a value out of a HashMap after looking it up by its key. When the HashMap doesn't contain the key, the default value is returned.

---

Examples:
```sqf
private _myValue = _myHashMap getOrDefault ["a", "Not Found!"];

// will add default value to the hash map if it does not exist
private _myValue = _hashMap getOrDefault ["a", "Not Found!", true]; 
```
