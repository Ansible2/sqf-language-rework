focusRange is . Prepares the camera focus blur.

`[-1,1]` will reset default values (auto focusing), `[-1,-1]` will disable postprocessing (all is focused). Needs the call of `camCommitPrepared` to be conducted.


---
*Syntaxes:*

camera `camPrepareFocus` [distance, blur]

---
*Example 1:*

```sqf
_camera camPrepareFocus [50, 1];
```