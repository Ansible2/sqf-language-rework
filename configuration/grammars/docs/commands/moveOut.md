Moves the soldier out of the vehicle.
<br><br>
Notes:
* Works for both AI and player entities
* AI unit gets back in - unless is under player command or combined with other sqf commands (`orderGetIn` false, `allowGetIn` false or `leaveVehicle`)
* Respects the vehicle's lock state (same as [[Arma 3: Actions#Eject|action "Eject"]]) - unlike `doGetOut`, `commandGetOut`. It will work for `player` entities regardless though
* Still executes when the vehicle is moving/flying (same as [[Arma 3: Actions#Eject|action "Eject"]]) - unlike `doGetOut`, `commandGetOut`
* Without vehicle's position's get out animation - unlike [[Arma 3: Actions#Eject|action eject]], `doGetOut`, `commandGetOut`
* Immediately - unlike [[Arma 3: Actions#Eject|action eject]], `doGetOut`, `commandGetOut`
* Works also on dead units (same as [[Arma 3: Actions#Eject|action "Eject"]] (but one after another)) - unlike `doGetOut`, `commandGetOut`
* Does not work for UAV crew
* Does not work for `remoteControl`led units
* Works on `unconscious` (same as [[Arma 3: Actions#Eject|action "Eject"]] (but one after another)) - unlike `doGetOut`, `commandGetOut` (unless AI under player command)


---
*Syntaxes:*

`moveOut` soldier

soldier `moveOut` vehicle

---
*Example 1:*

```sqf
{if (lifeState _x == "UNCONSCIOUS") then { moveOut _x } } forEach crew cursorTarget;
```

*Example 2:*

Move out player just before he dies:

```sqf
player addEventHandler [
	"HandleDamage", 
	format [
		'if (switch (_this select 1) do {
			case "": { _this select 2 >= 1 };
			case "head": {_this select 2 >= %1};
			case "body": {_this select 2 >= %2};
			default {false};
		}) then {moveOut player}',
		getNumber (configFile >> "CfgFirstAid" >> "CriticalHeadHit"),
		getNumber (configFile >> "CfgFirstAid" >> "CriticalBodyHit")
	]
];
```