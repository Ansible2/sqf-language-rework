Sets a value to a given stat. <br>
A list of possible StatNames can be found here: [[Arma 3: Stat Names]]<br>
Its important to note that most Stats are restricted to scripts and missions in certain paths.<br>
For example "ExpWarlockDown" is restricted to scripts in any subdirectory of **"a3\Missions_F_Exp\Campaign\Missions\"**


---
*Syntaxes:*

`setStatValue` [name, value]

---
*Example 1:*

```sqf
setStatValue ["ExpWarlockDown", 1]; // Unlocks the "Warlock Down" Steam achivement
```