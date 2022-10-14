Changes the element at the given zero-based index of the `array`.


---
*Syntaxes:*

array `set` [index, value]

hashMap `set` [key, value, insertOnly]

---
*Example 1:*

```sqf
_arrayOne set [0, "Hello"];
```

*Example 2:*

Append "Bye" as last element to **_arrayTwo**:

```sqf
_arrayTwo set [count _arrayTwo, "Bye"];
```

*Example 3:*

Replace the last element of **_arrayThree** with 23:

```sqf
_arrayThree set [(count _arrayThree) - 1, 23];
```

*Example 4:*

Using `set` with an index that is out of bounds:

```sqf
private _array = ["A"];
_array set [2, "C"]; // _array is now ["A", nil, "C"]
_array set [1, "B"]; // _array is now ["A", "B", "C"]
```

*Example 5:*

```sqf
private _myHashMap = createHashMap;
_myHashMap set ["key", "value1", true]; // "key" value is set to "value1"
_myHashMap set ["key", "value2", true]; // "key" value is still "value1" as "key" already exists in the hashmap
```