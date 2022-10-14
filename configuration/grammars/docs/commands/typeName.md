Returns the `Data Type` of an expression. 

The type is returned as on of the following all-uppercase strings:
{{Columns|5|
* "`ARRAY`"
* "`BOOL`"
* "`CODE`"
* "`CONFIG`"
* "`CONTROL`"
* "`DISPLAY`"
* "`GROUP`"
* "`LOCATION`"
* "`OBJECT`"
* "`SCALAR`"
* "`SCRIPT`"
* "`SIDE`"
* "`STRING`"
* "`TEXT`"
* "`TEAM_MEMBER`"
* "`NAMESPACE`"
* "`DIARY_RECORD`"
* "`TASK`"
* "`HASHMAP`"


---
*Syntaxes:*

`typeName` anything

---
*Example 1:*

```sqf
_msg = "hello"; _result = typeName _msg;  //_result will be "STRING"
```

*Example 2:*

```sqf
_unit = player; _result = typeName _unit; //_result becomes "OBJECT"
```

*Example 3:*

Values representing direct ` Data Types`:

```sqf
hint typeName 0;					// SCALAR
hint typeName "";					// STRING
hint typeName true;					// BOOL
hint typeName [];					// ARRAY
hint typeName {};					// CODE
hint typeName objNull;				// OBJECT
hint typeName grpNull;				// GROUP
hint typeName controlNull;			// CONTROL
hint typeName teamMemberNull;		// TEAM_MEMBER
hint typeName displayNull;			// DISPLAY
hint typeName taskNull;				// TASK
hint typeName locationNull;			// LOCATION
hint typeName sideUnknown;			// SIDE
hint typeName text "";				// TEXT
hint typeName configFile;			// CONFIG
hint typeName configNull;			// CONFIG (Since Arma 3 v1.54)
hint typeName missionNamespace;		// NAMESPACE
hint typeName diaryRecordNull;		// DIARY_RECORD (Since Arma 3 v2.00)
hint typeName createHashMap;		// HASHMAP (Since Arma 3 v2.02)
```

*Example 4:*

```sqf
if (typeName _this != "ARRAY") exitWith { hint "_this is not an array!" };
// is the same as
if (typeName _this != typeName []) exitWith { hint "_this is not an array!" };
// same result but faster in Arma 3
if !(_this isEqualType []) exitWith { hint "_this is not an array!" };
```