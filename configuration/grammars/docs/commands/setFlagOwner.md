Sets flag owner. When owner is set to `objNull` or any object other than a unit of class [[Models_%26_Classnames:_CfgVehicles_-_Class_Man|man]] or `logic`, flag is returned to the flagpole. A flag owned by a logic has no visual representation.


---
*Syntaxes:*

flag `setFlagOwner` owner

---
*Example 1:*

```sqf
_flag1 setFlagOwner _soldier1;
```

*Example 2:*

To return the flag back to the flag pole:

```sqf
//Method 1: (set owner null)
flag _flagCarrier setFlagOwner objNull;
//Method 2: (set the flag mast as the owner)
flag _flagCarrier setFlagOwner flag _flagCarrier;
```