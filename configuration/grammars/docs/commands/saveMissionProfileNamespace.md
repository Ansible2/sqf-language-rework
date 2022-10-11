`missionProfileNamespace` provides long term storage solution for mission variables. When this namespace has variables set with `setVariable` and is saved, the variables are saved into **``missionName``.vars** file into current soldier `profileName` folder. Next time when the same mission is loaded by the client with the same soldier profile, the saved variables can be read normally with `getVariable` command. This way each mission maker can create persistent data that is both mission and soldier profile specific. This is default behaviour. The file is only created when save operation is invoked with this command.<br><br>
It is also possible to share the same mission profile variables between several missions. To override default behaviour one needs to create an entry {{hl


---
*Example 1:*
```sqf
saveMissionProfileNamespace;
```