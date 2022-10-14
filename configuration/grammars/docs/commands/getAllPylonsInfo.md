Return an array with the vehicle's all pylons info.


---
*Syntaxes:*

`getAllPylonsInfo` vehicle

---
*Example 1:*

```sqf
getAllPylonsInfo vehicle player;
/*
	Executed on an Mi-48 Kajman:
	[
		[1,"PylonLeft1",[0],"PylonRack_4Rnd_LG_scalpel",4,"0:10000646"],
		[2,"PylonLeft2",[0],"PylonRack_19Rnd_Rocket_Skyfire",19,"0:10000648"],
		[3,"PylonRight2",[0],"PylonRack_19Rnd_Rocket_Skyfire",19,"0:10000649"],
		[4,"PylonRight1",[0],"PylonRack_4Rnd_LG_scalpel",4,"0:10000650"]
	]
*/
```