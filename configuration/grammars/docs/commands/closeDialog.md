Close the currently active user dialog with exit code. Most common exit codes are:

```sqf
#define IDC_OK            1 // emulate "Ok" button
#define IDC_CANCEL        2 // emulate "Cancel" button
```


---
*Syntaxes:*

`closeDialog`  exitcode

---
*Example 1:*

```sqf
closeDialog 2;
```

*Example 2:*

```sqf
#define IDC_CANCEL 2
closeDialog IDC_CANCEL;
```