Set person's face. For a list of available faces, check `:Category:CfgIdentities`.


---
*Syntaxes:*

person `setFace` face

---
*Example 1:*

```sqf
soldier1 setFace "WhiteHead_02";
```

*Example 2:*

Set persistent face for a unit in MP
```sqf
if (isServer) then {[_unit, "AsianHead_A3_02"] remoteExec ["setFace", 0, _unit]};
```