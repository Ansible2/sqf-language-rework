Create a MP campaign display. The class name must be a mission collection declared in the configs; for example, <sqf inline>configFile >> "CfgMissions" >> "MPMissions" >> "Apex"</sqf><br>
If the class does not exist or is not a mission collection, the display will be created empty.


---
*Example 1:*
```sqf
findDisplay 46 createMPCampaignDisplay "Apex";
```