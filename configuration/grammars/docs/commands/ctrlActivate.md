Launch actions attached to given (button based) control. <br> 
Command only triggers `action` entry described in control config and engine-based actions (cancel or ok codes) and will not trigger button related `User Interface Event Handlers`.<br>
Command ignores control disabled state. (Example 2)


---
*Example 1:*
```sqf
ctrlActivate _control;
```

*Example 2:*
```sqf
_control ctrlEnable false;
ctrlActivate _control; // Action fired.
```