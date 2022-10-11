Loads game from the last autosave made with `saveGame`. If no autosave exists, restarts the mission. When used in campaign it will also deduct 1 life, defined in:<br>
<sqf>campaignConfigFile >> "Campaign" / <battle> / <mission> / "lives"</sqf>


---
*Example 1:*
```sqf
loadGame;
```