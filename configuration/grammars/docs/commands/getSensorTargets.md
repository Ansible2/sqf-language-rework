Returns vehicle sensors' potential targets.


---
*Example 1:*
```sqf
private _radarTargets = getSensorTargets vehicle player;
/*
	returns e.g
	[
		[O Alpha 1-3:1, "air", "unknown", ["ir", "activeradar", "visual"]],
		[17750112040# 163957: apc_tracked_01_aa_f.p3d, "ground", "unknown", ["datalink"]]
	]
*/
```