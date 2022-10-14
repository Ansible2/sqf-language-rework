Returns 3 arrays for easy cross reference: 1st - array of hit point names, 2nd - array of hit selection names, 3rd - array of damage values. All values in all arrays are ordered accordingly to hit part index for convenience and for use in `setHitIndex` and `getHitIndex`. Levels of damage are:
* 0: no damage
* 1: full damage


---
*Syntaxes:*

`getAllHitPointsDamage` entity

---
*Example 1:*

```sqf
getAllHitPointsDamage player;
//[
//["hitface","hitneck","hithead","hitpelvis","hitabdomen","hitdiaphragm","hitchest","hitbody","hitarms","hithands","hitlegs","incapacitated"],
//["face_hub","neck","head","pelvis","spine1","spine2","spine3","body","arms","hands","legs","body"],
//[0,0,0,0,0,0,0,0,0,0,0,0]
//]
```

*Example 2:*

```sqf
getAllHitPointsDamage (vehicle player);
//[
  //["hithull","hitengine","hitengine2","hitavionics","hitfuel","hitfuel2","hitglass1","hitlaileron","hitraileron","hitlcrudder","hitrrudder","hitlcelevator","hitrelevator","#gear_f_lights"],
  //["hithull","hitengine","hitengine2","hitavionics","hitfuel","hitfuel2","hitglass1","hitlaileron","hitraileron","hitlcrudder","hitrrudder","hitlcelevator","hitrelevator"," "],
  //[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
//]
```