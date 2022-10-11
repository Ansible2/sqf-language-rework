This command will halt raycasting calculations (on the local machine only) for all groups which don't contain `any` local entities. Units, that are not in a group with at least one local member, will not check visibility of other units. This will cause, that remote units will not have updated knowsAbout and it will save some CPU time. If a group contains a single local entity then calculations will still be performed for the entire group.
<br><br>
These raycasts are used to determine what other entities an entity can see, and they take a lot of CPU time. This is of course a bit of a trick, because rather than a true optimization, it disables part of the simulation. However, there are certainly types of scenarios where these raycasts are not needed. An example is a fully Player-versus-Player scenario, where the visibility between every combination of player entity is not needed. So why not disable this by default? There are cases where you do require these raycasts, for example in stealth scenarios. Without them, commands like `knowsAbout`, `nearTargets` and `targetKnowledge` will only function for local units! The commands themselves are local, can be used on servers and clients, and the state is reset when the scenario ends. So, carefully consider whether your scenario can benefit from this method.


---
*Example 1:*
```sqf
disableRemoteSensors true;
```