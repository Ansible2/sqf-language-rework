Enables copilot actions, toggles availability of the actions related to copilots, such as taking over controls, suspending controls, etc. This command triggers the **"ControlsShifted"** event handler.


---
*Syntaxes:*

vehicle `enableCopilot` enable

---
*Example 1:*

```sqf
if (!isCopilotEnabled myHeli) then
{
	myHeli enableCopilot true;
};
```