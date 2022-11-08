#### Description:
Manually stops KISKA's Speech Recognition extension from listening to the user's microphone. NOTE: Every complete recognition of a phrase after beginning a recording will automatically stop the extension from listening. The purpose of this function is to manually tell the extension you want to stop recording during the act of saying a phrase

#### Parameters:
NONE

#### Returns:
<BOOL> - true if a recording was stopped, false if recording was not happening 
	 when called

#### Examples:
```sqf
private _stopped = call KISKA_fnc_SR_stopRecording;
```

