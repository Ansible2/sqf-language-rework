Returns true if the computer has an interface (a real player). False for a dedicated server or for a headless client.


---
*Example 1:*
```sqf
_isHC = !(hasInterface || isDedicated);
```

*Example 2:*
```sqf
_isHC = !hasInterface && !isDedicated;
```