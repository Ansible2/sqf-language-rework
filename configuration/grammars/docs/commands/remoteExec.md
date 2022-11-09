Asks the server to execute the given function or script command on the given target machine(s).
* Functions are executed in the `scheduled environment`; suspension is allowed.
* Script commands are executed in the `unscheduled environment`; suspension is not allowed (see *(Reference Link "#Example 7")*).

Read [[Arma 3: Remote Execution]] for more information about remote execution, security features and JIP techniques.


---
*Syntaxes:*

params `remoteExec` [order, targets, JIP]

`remoteExec` [functionName, targets, JIP]

---
*Example 1:*

How to write `remoteExec`/`remoteExecCall`:
<code>*(Reference Color "hint" at darkorange)* *(Reference Color "teal|"Hello"")*;
*(Reference cc "becomes")*
[*(Reference Color "teal|"Hello"")*] remoteExec ["*(Reference Color "hint" at darkorange)*"];
*(Reference Color "teal|"Hello"")* remoteExec ["*(Reference Color "hint" at darkorange)*"]; *(Reference cc "alternatively")*</code>

<code>*(Reference Color "unit1" at green)* *(Reference Color "setFace" at darkorange)* *(Reference Color "teal|"Miller"")*;
*(Reference cc "becomes")*
[*(Reference Color "unit1" at green)*, *(Reference Color "teal|"Miller"")*] remoteExec ["*(Reference Color "setFace" at darkorange)*"];</code>

<code>*(Reference Color "cutRsc" at darkorange)* *(Reference Color "darkred|["", "BLACK OUT"]")*;
*(Reference cc "becomes")*
[*(Reference Color "darkred|["", "BLACK OUT"]")*] remoteExec ["*(Reference Color "cutRsc" at darkorange)*"]; // double brackets are needed as the unary command takes an array</code>

<code>*(Reference cc "functions, however, do not need double squared brackets")*
*(Reference Color "teal|["line 1", "line 2"]")* spawn *(Reference Color "BIS_fnc_infoText" at darkorange)*;
*(Reference cc "becomes")*
*(Reference Color "teal|["line 1", "line 2"]")* remoteExec ["*(Reference Color "BIS_fnc_infoText" at darkorange)*"];</code>

*Example 2:*

send an order to specific machines:

```sqf
"message" remoteExec ["hint", 0];				// sends a hint message to everyone, identical to "message" remoteExec ["hint"]
"message" remoteExec ["hint", -2];				// sends a hint message to everybody but the server
"message" remoteExec ["hint", myCar];			// sends a hint message where myCar is local
"message" remoteExec ["hint", -clientOwner];	// sends a hint message to everybody but the current machine
```

*Example 3:*

<!-- This example is referenced in the Syntax section. -->
Add statements to the JIP queue:

```sqf
private _jipId = ["mission state: the car is broken"] remoteExec ["systemChat", 0, true]; // adds the hint to the JIP queue and returns the JIP queue order id
waitUntil { canMove _car };
remoteExec ["", _jipId]; // the systemChat order is removed from the JIP queue
```


```sqf
["mission state: the car is broken"] remoteExec ["systemChat", 0, _queueObject];
// ...
remoteExec ["", _queueObject]; // the order attached to _queueObject is removed
```


```sqf
private _jipId = ["mission state: the car is broken"] remoteExec ["systemChat", 0, "MY_JIP_ID"]; // _jipId is actually "MY_JIP_ID" now
waitUntil { canMove _car };
["mission state: the car is repaired"] remoteExec ["systemChat", 0, "MY_JIP_ID"]; // this order replaces the previous one
// ...
remoteExec ["", "MY_JIP_ID"]; // the "MY_JIP_ID" order is removed from the JIP queue
```

*Example 4:*

Some more complex examples:

```sqf
["Open", true] remoteExec ["BIS_fnc_arsenal", MyTargetPlayer];
[MyCurator, [[MyObject1, MyObject2], false]] remoteExec ["addCuratorEditableObjects", 2];
```

*Example 5:*

A tricky example: executing <sqf inline>player setAmmo [primaryWeapon player, 1];
``` (on machines where the player is in MyGroup):

```sqf
[player, [primaryWeapon player, 1]] remoteExec ["setAmmo", MyGroup]; // WRONG: the local player object is used here!
{ player setAmmo [primaryWeapon player, 1]; } remoteExec ["call", MyGroup]; // CORRECT: the remote player object is used here
```

*Example 6:*

``Multiplayer Scripting` "performance trick"`<br>
This <sqf inline>[0, -2] select isDedicated
``` check is worth to avoid `function` server-side calculations only:

```sqf
["message"] remoteExec ["BIS_fnc_infoText"];								// not ideal - the function will still run on the dedicated server for nothing
["message"] remoteExec ["BIS_fnc_infoText", [0, -2] select isDedicated];	// ideal - the dedicated server will not run the code, a player-hosted server will

"message" remoteExec ["hint", [0, -2] select isDedicated];	// the check is too costy to be worthy
"message" remoteExec ["hint"];								// the (dedicated) server will automatically ditch hint usage due to it not having an interface
```

*Example 7:*

<!-- This example is referenced in the Description section. -->
As said in the description: `commands` will be executed in an `unscheduled environment`

```sqf
[{ sleep 1 }] remoteExec ["call"]; // will throw an error: it is forbidden to use sleep (or waitUntil, etc) in unscheduled environment
```

*Example 8:*

<!-- This example is referenced in the Description section. -->

```sqf
"Message 1" remoteExec ["systemChat"];
"Message 2" remoteExec ["systemChat"];
// will result in
// "Message 1"
// "Message 2"
// in this exact order on clients
```