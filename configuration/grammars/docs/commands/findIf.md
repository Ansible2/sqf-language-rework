Searches for an element within array for which the code evaluates to true. Returns the zero-based index on success or -1 if not found.<br>
Code on the right side of the command is evaluated for each element of the array, processed element can be referenced in code as `_x`.


---
*Syntaxes:*

array `findIf` code

---
*Example 1:*

```sqf
[unit1, unit2, unit3] findIf {not alive _x}; // return index of the first dead unit)
```

*Example 2:*

```sqf
// two ways how to 'wait for all units to be dead':
waitUntil { [unit1, unit2, unit3] findIf { alive _x } == -1 };	// fast, terminates as soon as it finds a living unit
waitUntil { { alive _x } count [unit1, unit2, unit3] == 0 };	// slow, always goes through all array elements
```