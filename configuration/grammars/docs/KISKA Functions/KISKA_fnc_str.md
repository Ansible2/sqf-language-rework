#### Description:
Given that str command produces triple quoted strings if used on a string (which can be incompatible with other commands) this function simply formats them as "'string'" instead, and all other types as normal with str.

#### Parameters:
0: **_value** *(ANY)* - The value to convert to a string

#### Returns:
<STRING> - The value as a string

#### Examples:
```sqf
_asString = [_someValue] call KISKA_fnc_str;
```

