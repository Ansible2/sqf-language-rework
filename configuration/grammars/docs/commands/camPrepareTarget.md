Prepares the camera target to a position or to a target. Needs the call of `camCommitPrepared` to be conducted.


---
*Syntaxes:*

camera `camPrepareTarget` position

camera `camPrepareTarget` target

---
*Example 1:*

```sqf
_camera camPrepareTarget getPos player;
```

*Example 2:*

```sqf
_camera camPrepareTarget player;
```