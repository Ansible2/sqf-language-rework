Sets identity of a person. The identities could be defined in a custom config in `Description.ext` or in the main config. For a list of available main config values see `CfgIdentities`.
<br><br> 
This command is an aggregate of the following commands: `setName`, `setFace`, `setSpeaker`, `setNameSound`, `setPitch`, only the values are loaded from the given config. It also includes value for glasses for which currently there is no direct command, instead there is an inventory command `addGoggles`.


---
*Example 1:*
```sqf
_soldier1 setIdentity "MyLittleSoldier";
```

*Example 2:*
Clone factory in MP:

```sqf
for "_i" from 1 to 10 do
{
	_bob = group player createUnit [typeOf player, position player, [], 0, "none"];
	[_bob, "MyLittleSoldier"] remoteExec ["setIdentity", 0, _bob];
};
```