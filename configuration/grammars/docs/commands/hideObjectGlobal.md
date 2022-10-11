This command is designed for MP. Hides object on all connected clients as well as JIP. Can be used on static objects. In singleplayer this command behaves just like `hideObject`.


---
*Example 1:*
```sqf
hideObjectGlobal myObject; // hides myObject
hideObjectGlobal nearestBuilding [2500, 2500, 0];
```

*Example 2:*
```sqf
myObject hideObjectGlobal true;	// hides myObject
myObject hideObjectGlobal false;	// shows myObject
```

*Example 3:*
```sqf
[myObject, true] remoteExec ["hideObjectGlobal", 2]; // remote-executes hideObjectGlobal from a client to the server
```