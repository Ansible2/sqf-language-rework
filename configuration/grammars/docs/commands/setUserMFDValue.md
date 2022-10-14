When MFD is using user controllers, this command can set values on them. For example, MFD config for Blackfoot has an entry
<syntaxhighlight lang="cpp">
// ...
class Draw
{
	alpha = "user3";
	color[] = {"user0","user1","user2"};
// ...
</syntaxhighlight>
which could control color of the MFD. See Example 2-3-4 on how to set different colors of the Blackfoot MFD


---
*Syntaxes:*

vehicle `setUserMFDValue` [index, value]

---
*Example 1:*

```sqf
BIS_Plane setUserMFDValue [0,1]; // user0 in MFD will return 1
```

*Example 2:*

Set MFD Red:

```sqf
Blackfoot setUserMFDValue [0, 1];	// "user0" - 1
Blackfoot setUserMFDValue [1, 0];	// "user1" - 0
Blackfoot setUserMFDValue [2, 0];	// "user2" - 0
Blackfoot setUserMFDValue [3, 1];	// "user3" - 1
```

*Example 3:*

Set MFD pale Blue:

```sqf
Blackfoot setUserMFDValue [0, 0];	// "user0" - 0
Blackfoot setUserMFDValue [1, 0];	// "user1" - 0
Blackfoot setUserMFDValue [2, 1];	// "user2" - 1
Blackfoot setUserMFDValue [3, 0.1];	// "user3" - 0.1
```

*Example 4:*

Hide MFD:

```sqf
Blackfoot setUserMFDValue [3, 0];	// "user3" - 0
```