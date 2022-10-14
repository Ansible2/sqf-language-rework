The mission is launched (from the main menu). Both campaign and mission are given as their directory name. If the campaign is empty, a single mission is launched. If skipBriefing is true, the intro and briefing are skipped.


---
*Syntaxes:*

`playMission` [campaign, mission, skipBriefing]

---
*Example 1:*

```sqf
playMission ["XOutrage","x05Negotiator.Noe"];
```

*Example 2:*

```sqf
playMission ["", configFile >> "CfgMissions" >> "Missions" >> "Armory1"];
```

*Example 3:*

```sqf
playMission ["","\A3\Missions_F_Bootcamp\Scenarios\Arsenal.VR"];
```