Select the group's leader. Group locality can be checked with `local` command and group ownership with `groupOwner` command.

{{Feature | important | An invalid combination can be provided to this command, e.g `unitName` `not` being part of `group`. In that case:
* `unitName` will be `leader` of `group`, but will not be able to command them
* if `unitName` is deleted or killed, `leader` of `group` will be `objNull` and will not automatically be reassigned.


---
*Example 1:*
```sqf
group player selectLeader player;
```

*Example 2:*
Make unit a leader from server:

```sqf
[group _unit, _unit] remoteExec ["selectLeader", groupOwner group _unit];
```