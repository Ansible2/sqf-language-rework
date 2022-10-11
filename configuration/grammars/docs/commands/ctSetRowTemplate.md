Takes config path to the new row template. Clears the whole RscControlsTable and sets the new row template (Deleting all rows and headers is easier to implement than replacing the rows and filling them with new data. IDCs could overflow etc.).


---
*Example 1:*
```sqf
_control ctSetRowTemplate _configPath;
```