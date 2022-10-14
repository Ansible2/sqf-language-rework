Processes provided `value`<nowiki/>'s hash, and encodes it using [https://en.wikipedia.org/wiki/Base64 Base64]. The hash algorithm is [https://en.wikipedia.org/wiki/Fowler%E2%80%93Noll%E2%80%93Vo_hash_function FNV-1A 64bit].


---
*Syntaxes:*

`hashValue` value

---
*Example 1:*

```sqf
private _valueHash = hashValue "Hello There";
```

*Example 2:*

```sqf
private _isCorrectPW = hashValue _enteredPassword == "eWkXUUqiinE";
```