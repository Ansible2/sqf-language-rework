Returns parameters describing group in `high command` bar. Return value is array in format [groupName, teamName] or [] if error. Possible values for team name:
* **"teammain"** (default)
* **"teamred"**
* **"teamgreen"**
* **"teamblue"**
* **"teamyellow"**


---
*Syntaxes:*

unit `hcGroupParams` group

---
*Example 1:*

```sqf
player hcGroupParams someGroup;
```