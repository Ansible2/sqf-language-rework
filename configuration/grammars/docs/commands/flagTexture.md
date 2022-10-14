Returns texture of the `local` instance of the flag. A getter for `setFlagTexture`. It will not return flag textures applied using `forceFlagTexture`, use `getForcedFlagTexture` for that.


---
*Syntaxes:*

`flagTexture` flagCarrier

---
*Example 1:*

```sqf
_flagTexture = flagTexture _flag1;
```