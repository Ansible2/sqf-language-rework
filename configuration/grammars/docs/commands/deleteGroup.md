Destroys the given group - the group must be empty and `local` to the machine executing this command.


---
*Syntaxes:*

`deleteGroup` group

---
*Example 1:*

```sqf
deleteGroup _group;
```

*Example 2:*

```sqf
[_group] remoteExec ["deleteGroup", groupOwner _group]; // server only
```