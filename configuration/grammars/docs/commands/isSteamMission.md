Returns true if the current mission is a Steam Workshop mission.


---
*Syntaxes:*

`isSteamMission`

---
*Example 1:*

```sqf
if (isSteamMission) then
{
	hint "Thank you for subscribing to my mission on Steam!";
}
else
{
	hint "Thank you for downloading my mission off the Internet!";
};
```