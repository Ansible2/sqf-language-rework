Returns the team the unit belongs to. Possible values:

* **"MAIN"** (default and white)
* **"RED"**
* **"GREEN"**
* **"BLUE"**
* **"YELLOW"**
* {{GVI|arma3|1.94}} **""** if given unit is `objNull` or `remoteControl`ling another unit


---
*Example 1:*
```sqf
_team = assignedTeam player;
```