Returns information about all loaded modifications.


---
*Example 1:*
```sqf
private _loadedMods = getLoadedModsInfo;
/*
	[
		["dummy","dummy",false,false,"NOT FOUND","","","0"],
		["CUP Units DEV Version r710 (r710-r710 UNITSSVN) (12|Jun|2020)","@[DEV] CUP Units",false,false,"GAME DIR","f3fb8a4c62443ac799c7c0e00f645b1f32cf1376","c96577b4",0],
		["CUP Weapons DEV Version r1486 (r1481-r1486 WEAPONSSVN) (12|Jun|2020)","@[DEV] CUP Weapons",false,false,"GAME DIR","6dbd7c052ce2ae68803e10f6a3653d0b046881d8","bb1c4965",0],
		["Community Base Addons v3.15.1","@CBA_A3",false,false,"GAME DIR","33eef5c0ed583d1222319460b184090513193287","131bbb64",0],
		["Arma 3 Contact (Platform)","enoch",true,true,"GAME DIR","4298e892077aec33be6b68730a974400a3c3a636","43e900ae","1021790"],
		["Arma 3 Tanks","tank",true,true,"GAME DIR","c47d45d7ce1261e0a0d1c4ed9517611eae6ebf9f","1aec74ec","798390"],
		["Arma 3 Tac-Ops","tacops",true,true,"GAME DIR","808cc67221feadc288c856395cac28b908966eee","441362c6","744950"],
		["Arma 3 Laws of War","orange",true,true,"GAME DIR","aa86785568206ae1e7becaa09eb673ee645d971f","4729aa84","571710"],
		["Arma 3 Malden","argo",true,true,"GAME DIR","db6d4d06a3ad28207da665e8c34bbd8adf191019","61001811","639600"],
		["Arma 3 Jets","jets",true,true,"GAME DIR","8e8e1f9275e37cc90c0f2a8a6901dd2a3e81a29a","fc8366ee","601670"],
		["Arma 3 Apex","expansion",true,true,"GAME DIR","48f32952612dbb6ca972790c17c9920797073233","fc4aed7f","395180"],
		["Arma 3 Marksmen","mark",true,true,"GAME DIR","85c7f2284f8b0271bfafecd96c49230ce0515861","534e5baa","332350"],
		["Arma 3 Helicopters","heli",true,true,"GAME DIR","dae29688657dbc9057f9eb83179a3ad21d3a689d","e7165098","304380"],
		["Arma 3 Karts","kart",true,true,"GAME DIR","eae9e0b218e7a8e8e906477ee1a5e8e3d5298f18","8240ae3f","288520"],
		["Arma 3 Zeus","curator",true,true,"GAME DIR","2310c5c95a558253c7286d93f5a2a810fbf9b620","8af0db5d","275700"],
		["Arma 3","A3",true,true,"NOT FOUND","","","0"]
	]
*/
```

*Example 2:*
```sqf
private _modInfo = getLoadedModsInfo select 0;
_modInfo params ["_modname", "_modDir", "_isDefault", "_isOfficial", "_origin", "_hash", "_hashShort", "_itemID"];
```