Create single missions display as a child of given display. The mission dialog will be set to the directory given as an argument "root".


---
*Syntaxes:*

display `createMissionDisplay` missionRootDirectoryString

display `createMissionDisplay`  [missionRootDirectoryString, cfgMissionsClass]

---
*Example 1:*

```sqf
_ChildDisplay = _Rootdisplay createMissionDisplay "Tutorial";
```

*Example 2:*

In <See arm Reference 3> this creates the scenarios UI

```sqf
findDisplay 46 createMissionDisplay "";
```

*Example 3:*

Other options for <See arm Reference 3>:

```sqf
(findDisplay 46) createMissionDisplay ["","Cutscenes"];
(findDisplay 46) createMissionDisplay ["","Campaigns"];
(findDisplay 46) createMissionDisplay ["","MPMissions"];
(findDisplay 46) createMissionDisplay ["","Challenges"];
(findDisplay 46) createMissionDisplay ["","Showcases"];
```