This command starts counting frames from the moment it is executed and when the count reaches the number passed as param, the current frame is captured and captured data UI dialog appears, similar to `diag_captureSlowFrame`. This can also be executed on a dedicated Server and because a Server has no UI it will behave like `diag_captureFrameToFile`.


---
*Example 1:*
```sqf
diag_captureFrame 1; // capture the first frame after command execution
```

*Example 2:*
```sqf
diag_captureFrame 24; // capture 24th frame after command execution
```