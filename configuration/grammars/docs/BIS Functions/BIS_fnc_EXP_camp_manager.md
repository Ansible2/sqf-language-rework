<pre>/*
	Author: Nelson Duarte

	Description:
	Handles match start synchronization between server and clients

	The following states are valid:
	- Waiting	: State is set when joining the mission
	- Intro		: State is set when mission intro starts
	- Loadout	: State is set when mission loadout selection starts
	- Started	: State is set when mission gameplay starts

	Parameters:
		_introVideos: The videos directory to play, empty array leads to skipping intro videos completely
		_introVideosSubtitles: The subtitles files to execute for intro videos
		_minWaitDelay: The time to wait after waiting has been completed
		_minLoadoutDelay: The time to wait after loadout has been completed
		_maxWaitDelay: The maximum time to wait for all players during the waiting, if reached, mission is forced onto next state
		_maxLoadoutDelay: The maximum time to wait for all players during the loadout, mission is forced onto next state
		_bWantsLoadoutSelection: Whether or not to go into loadout selection, if false this is skipped
		_bNoCinematics: Whether to force no cinematics, these need to be handled manually then

	Returns:
		Nothing
*/</pre>*(Reference Wiki "placeholder")*<!-- Remove this after fill-in -->


---
*Syntaxes:*

[] call `BIS_fnc_EXP_camp_manager`

---
