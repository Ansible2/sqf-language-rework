Sets the type of action processed by the trigger after activation (no action, a waypoints switch or an end of mission):

* **"NONE"**
* **"EAST G"** - Guarded by OPFOR - (It is better to use `createGuardedPoint` instead)
* **"WEST G"** - Guarded by BLUFOR - (It is better to use `createGuardedPoint` instead)
* **"GUER G"** - Guarded by Independent - (It is better to use `createGuardedPoint` instead)
* **"SWITCH"** - Switch waypoints/break loop (see [[ArmA:_Mission_Editor#Triggers_Mode_.28F3.29|Triggers]])
* **"END1"** - End #1
* **"END2"** - End #2
* **"END3"** - End #3
* **"END4"** - End #4
* **"END5"** - End #5
* **"END6"** - End #6
* **"LOOSE"** - (Meant to say LOSE but is misspelt in the game engine).
* **"WIN"}} - (Not in editor. Valid enum name but when set, defaults to {{hl|"END1"**)


---
*Syntaxes:*

trigger `setTriggerType` action

---
*Example 1:*

```sqf
_trigger setTriggerType "END1";
```