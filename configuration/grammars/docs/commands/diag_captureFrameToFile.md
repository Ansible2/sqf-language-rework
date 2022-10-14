This command starts counting frames from the moment it is executed and when the count reaches the number passed as param, the current frame is captured and 
written to a log file in the same directory as the `.rpt file`.<br>
The full Path to the log file is logged to simultaneously.<br>
The data in the log file can be copied and pasted into the `diag_captureFrame` UI dialog to get a visualisation later on.


---
*Syntaxes:*

`diag_captureFrameToFile`  frame

---
*Example 1:*

```sqf
diag_captureFrameToFile 1; //capture the first frame after command execution
```

*Example 2:*

```sqf
diag_captureFrameToFile 24; //capture 24th frame after command execution
```