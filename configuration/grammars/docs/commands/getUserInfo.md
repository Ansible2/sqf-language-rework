Returns extended information about given server user.


---
*Example 1:*
```sqf
private _randomUserInfo = getUserInfo selectRandom allUsers;
```

*Example 2:*
```sqf
_userInfo params ["_playerID", "_ownerId", "_playerUID", "_profileName", "_displayName", "_steamName", "_clientState", "_isHC", "_adminState", "_networkInfo", "_unit"];
_networkInfo params ["_avgPing", "_avgBandwidth", "_desync"];
```

*Example 3:*
```sqf
private _myInfo = getUserInfo getPlayerID player; // this particular example only works if player is server host
```