Returns the list of model selections. When using default syntax, the named selections are returned from the first `LOD` only (LOD index 0). Alternative syntax allows to select LOD by name or by `LOD resolution`.


---
*Syntaxes:*

`selectionNames` object

object `selectionNames` LOD

---
*Example 1:*

```sqf
private _result = "Land_i_House_Small_02_V3_F" createVehicle _pos;
selectionNames _house;
// ["door_1","door_2","damt_1","door_handle_1","door_handle_2","glass_1_hide","glass_2_hide","glass_3_hide","glass_1_unhide","glass_2_unhide","glass_3_unhide","glass_4_hide","glass_4_unhide"]
```

*Example 2:*

```sqf
selectionNames player;
// ["spine","spine1","spine2","spine3","head","leftshoulder","leftarm","leftarmroll","leftforearm","leftforearmroll","lefthand","rightshoulder","rightarm","rightarmroll","rightforearm","rightforearmroll","righthand","pelvis","leftupleg","leftuplegroll","leftleg","leftlegroll","leftfoot","lefttoebase","rightupleg","rightuplegroll","rightleg","rightlegroll","rightfoot","righttoebase","weapon","proxy:\a3\characters_f\proxies\weapon.001","proxy:\a3\characters_f\proxies\pistol.001","proxy:\a3\characters_f\proxies\binoculars.001","proxy:\a3\characters_f\proxies\launcher.001","launcher","nvg","proxy:\a3\characters_f\proxies\nvg.001","proxy:\a3\characters_f\proxies\flag.001","proxy:\a3\characters_f\proxies\equipment.001","proxy:\a3\characters_f\proxies\backpack.001","proxy:\a3\characters_f\proxies\pistol_holstered.001","proxy:\a3\characters_f\proxies\head_male.001","proxy:\a3\characters_f\proxies\glasses.001","proxy:\a3\characters_f\proxies\headgear.001","proxy:\a3\characters_f\proxies\hair.001","proxy:\a3\characters_f\proxies\backpack2.001","proxy:\a3\characters_f\proxies\radio.001","body_proxy","head_proxy","lefthandindex1","lefthandindex2","lefthandindex3","lefthandmiddle1","lefthandmiddle2","lefthandmiddle3","lefthandring","lefthandpinky1","lefthandpinky2","lefthandpinky3","lefthandring1","lefthandring2","lefthandring3","lefthandthumb1","lefthandthumb2","lefthandthumb3","righthandindex1","righthandindex2","righthandindex3","righthandmiddle1","righthandmiddle2","righthandmiddle3","righthandring","righthandpinky1","righthandpinky2","righthandpinky3","righthandring1","righthandring2","righthandring3","righthandthumb1","righthandthumb2","righthandthumb3","injury_hands","camo","proxy:\a3\characters_f\heads\bysta.001","injury_legs","proxy:\a3\characters_f\proxies\hmd.001","hl","insignia","injury_body","clan"]
```

*Example 3:*

[[Arma_3:_Event_Handlers#HitPart|HitPart]] hit selections only:

```sqf
selectionNames player select { !(player selectionPosition _x, "HitPoints"] isEqualTo [0,0,0]) };
// ["spine1","spine2","spine3","head","leftarm","leftarmroll","leftforearm","rightarm","rightarmroll","rightforearm","pelvis","leftupleg","leftuplegroll","leftlegroll","leftfoot","rightupleg","rightuplegroll","rightleg","rightlegroll","rightfoot"]
```

*Example 4:*

Copy 5 LODs' selections:

```sqf
private _car = "B_MRAP_01_F" createVehicle getPos player;
private _return = [];
{
	_return pushBack (_x + ": " + str (_car selectionNames _x));
} forEach ["Memory", "Geometry", "FireGeometry", "LandContact", "HitPoints"];
copyToClipboard (_return joinString endl);
/*
	Memory: ["light_r_end","drivewheel_axis","posun wheel_1_1","posun wheel_1_2","posun wheel_2_1","posun wheel_2_2","wheel_1_1_steering_axis","wheel_2_1_steering_axis","wheel_2_1_axis","wheel_2_2_axis","wheel_1_2_axis","wheel_1_1_axis","basic_damper_destruct_axis","pos cargo","pos cargo dir","pos driver","pos driver dir","circulumreference","zamerny","doplnovani","light_l_end","light_r","light_l","stopa pll","stopa plp","stopa ppl","stopa ppp","stopa zll","stopa zlp","stopa zpl","stopa zpp","exhaust_dir","exhaust_pos","osaveze","mph_axis","rpm_axis","fuel_axis","temp2_axis","temp_axis","pip1_pos","pip1_dir","pip4_dir","pip6_dir","pip5_dir","pip7_dir","pip4_pos","pip6_pos","pip7_pos","pip5_pos","dustfrontright","dustfrontleft","dustbackleft","dustbackright","light_r_flare","light_l_flare","light_r_flare2","light_l_flare2","wheel_1_1_bound","wheel_1_2_bound","wheel_2_1_bound","wheel_2_2_bound","door_1_axis","door_2_axis","door_3_axis","door_4_axis","pedal_thrust_axis","pedal_brake_axis","slingloadcargo1","slingloadcargo2","slingloadcargo3","slingloadcargo4","tow_front_l","tow_rear_r","tow_front_r","tow_rear_l","taskmarker_1_pos","bbox_1_2_pos","bbox_1_1_pos","bbox_2_1_pos","bbox_2_2_pos","pip_1_tl","pip_1_tr","pip_1_bl","pip_1_br","pip_4_tl","pip_4_tr","pip_4_bl","pip_4_br","pip_5_tl","pip_5_tr","pip_5_br","pip_5_bl"]
	Geometry: ["proxy:\a3\data_f\proxies\damagewheel\damagewheel_1.001","wheel_1_1_unhide","proxy:\a3\data_f\proxies\damagewheel\damagewheel_1.002","wheel_1_2_unhide","wheel_2_1_unhide","proxy:\a3\data_f\proxies\damagewheel\damagewheel_1.003","proxy:\a3\data_f\proxies\damagewheel\damagewheel_1.004","wheel_2_2_unhide","damagehide","wheel_1_2_damper","wheel_1_1_damper","wheel_2_2_damper","wheel_2_1_damper"]
	FireGeometry: ["wheel_2_2_hide","wheel_1_2_hide","wheel_1_1_hide","wheel_2_1_hide","damagehide","glass2","glass3","glass1","proxy:\a3\data_f\proxies\damagewheel\damagewheel_1.001","wheel_1_1_unhide","proxy:\a3\data_f\proxies\damagewheel\damagewheel_1.002","wheel_1_2_unhide","wheel_2_1_unhide","proxy:\a3\data_f\proxies\damagewheel\damagewheel_1.003","proxy:\a3\data_f\proxies\damagewheel\damagewheel_1.004","wheel_2_2_unhide","proxy:\a3\data_f\proxies\passenger_mrap_01_back\cargo.002","proxy:\a3\data_f\proxies\passenger_generic01_foldhands\cargo.003","proxy:\a3\data_f\proxies\passenger_mrap_01_front\cargo.001","proxy:\a3\data_f\proxies\driver_offroad\driver.001","reserve_wheel","zbytek","glass4","glass5","glass6","hit_engine","hit_fuel","hit_hull","door_1_hide","door_3_hide"]
	LandContact: ["wheel_2_1_damper_land","wheel_1_2_damper_land","wheel_2_2_damper_land","wheel_1_1_damper_land"]
	HitPoints: ["wheel_2_1_steering","wheel_2_2_steering","wheel_1_2_steering","wheel_1_1_steering","motor","karoserie","light_r","light_l","glass2","palivo","glass3","glass1","wheel_reserve_hit","light_r2","light_l2","zbytek","door_1","door_2","door_3","door_4","glass4","glass5","glass6","hit_engine_point","hit_fuel_point","hit_hull_point"]
*/
```

*Example 5:*

Select "Memory" LOD by its `resolution`:

```sqf
private _memoryLODNamedSelections = player selectionNames 1e15;
```