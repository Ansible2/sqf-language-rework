Returns an array with all `mission event handlers`.


---
*Example 1:*
```sqf
diag_allMissionEventHandlers;
/*
returns:
[
	"Ended",0,
	"SelectedActionPerformed",0,
	"SelectedRotorLibActionPerformed",0,
	"SelectedActionChanged",0,
	"SelectedRotorLibActionChanged",0,
	"ControlsShifted",0,
	"Draw3D",1,
	"Loaded",0,
	"HandleDisconnect",0,
	"EntityRespawned",0,
	"EntityKilled",0,
	"MapSingleClick",0,
	"HCGroupSelectionChanged",0,
	"CommandModeChanged",0,
	"PlayerConnected",0,
	"PlayerDisconnected",0,
	"TeamSwitch",0,
	"GroupIconClick",0,
	"GroupIconOverEnter",0,
	"GroupIconOverLeave",0,
	"EachFrame",0,
	"PreloadStarted",0,
	"PreloadFinished",0,
	"Map",0,
	"PlayerViewChanged",0,
	"BuildingChanged",0,
	"MPEnded",0,
	"HandleAccTime",0,
	"ExtensionCallback",0
]
*/
```