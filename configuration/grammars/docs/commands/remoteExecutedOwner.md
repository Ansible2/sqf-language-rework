Returns the ` machine network ID` of the client that initiated `Remote Execution`. If used in SP or outside of remote executed context, the command returns 0.


---
*Example 1:*
```sqf
private _callerRE = remoteExecutedOwner;
```

*Example 2:*
Send request to the server and get immediate response:

```sqf
{
	// in this scope, the remoteExecutedOwner equals clientOwner of the sender
	// so using it as target in remoteExec will send response right back at him
	[
		time, // mission time value on the server
		{
			hint format
			[
				"Request recieved!\nMission time value on the server is: %1",
				_this
			];
		}
	]
	remoteExec ["call", remoteExecutedOwner]; // server response to the sender
} 
remoteExec ["call", 2]; // send request to server
```