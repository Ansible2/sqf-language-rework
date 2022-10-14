Destroys camera object created with `camCreate`. This command doesn't need `camCommit`.


---
*Syntaxes:*

`camDestroy` object

---
*Example 1:*

```sqf
camDestroy _cam;
```

*Example 2:*

```sqf
_cam cameraEffect ["terminate","back"];
camDestroy _cam;
```