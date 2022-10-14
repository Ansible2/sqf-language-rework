A non-existing `Script` or script that has finished (`scriptDone`). To compare non-existent scripts use `isNull` or `isEqualTo`:

```sqf
scriptNull == scriptNull;			// ERROR! == cannot be used with script object
isNull scriptNull;					// true
scriptNull isEqualTo scriptNull;	// true
```


---
*Syntaxes:*

`scriptNull`

---
*Example 1:*

Wait until previous script is finished before starting a new one:

```sqf
[] spawn
{
	_script = scriptNull;
	for "_i" from 1 to 10 do {
		waitUntil { isNull _script };
		_script = _i spawn {
			hint format ["script %1 started", _this];
			sleep 1;
			hint format ["script %1 finished", _this];
			sleep 0.2;
		};
	};
};
```

*Example 2:*

```sqf
if (scriptDone (_obj getVariable ["objScript", scriptNull])) then {
	_obj setVariable ["objScript", _obj spawn {
		waitUntil { damage _this > 0.9 };
		hint "Critical Damage!";
	}];
};
```

*Example 3:*

```sqf
str scriptNull; // <NULL-script>
```