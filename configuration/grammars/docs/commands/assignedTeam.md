Returns the team the unit belongs to. Possible values:

* **"MAIN"** (default and white)
* **"RED"**
* **"GREEN"**
* **"BLUE"**
* **"YELLOW"**
* <See GVI Reference 94> **""** if given unit is `objNull` or `remoteControl`ling another unit


---
*Syntaxes:*

`assignedTeam` unitName

---
*Example 1:*

```sqf
_team = assignedTeam player;
```