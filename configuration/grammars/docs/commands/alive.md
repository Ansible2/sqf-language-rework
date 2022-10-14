Check if given vehicle/person/building is alive (i.e. not dead or destroyed).


---
*Syntaxes:*

`alive` object

---
*Example 1:*

SQS:
<sqs>? not alive player : exit</sqs>

*Example 2:*

SQF:

```sqf
if (!alive player) exitWith {};
```

*Example 3:*

```sqf
alive objNull; // returns false
```