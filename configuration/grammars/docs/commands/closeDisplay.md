Closes given display with exit code. It does not instantly close the display but does it on next simulation cycle. Most common exit codes are:
<syntaxhighlight lang="cpp">
#define IDC_OK		1 // emulate "OK" button
#define IDC_CANCEL	2 // emulate "Cancel" button
</syntaxhighlight>


---
*Syntaxes:*

display `closeDisplay` exitCode

---
*Example 1:*

```sqf
_display closeDisplay 1;
```

*Example 2:*

```sqf
#define IDC_OK 1
_display closeDisplay IDC_OK;
```