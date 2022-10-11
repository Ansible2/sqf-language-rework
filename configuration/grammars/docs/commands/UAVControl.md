Returns array with current operator of UAV and his vehicle role in UAV. If nobody is controlling the UAV, the command tries to find any person with connected terminal to this UAV, in which case the vehicle role is an empty string. If command cannot find anyone, output is **<nowiki>[</nowiki>`objNull`, ""]**.
<br><br>
Since Arma 3 v1.96 this command returns both driver and gunner units if the UAV is controlled by 2 players. Here is the list of all expected outputs:
* **[player1, "DRIVER"]** - player1 is controlling the UAV and is the pilot
* **[player2, "GUNNER"]** - player2 is controlling the UAV and is the gunner
* **[player1, "DRIVER", player2, "GUNNER"]** - player1 is controlling the UAV and is the pilot, player2 is controlling UAV and is the gunner
* **[player3, ""]** - no one is controlling the UAV, player3 is connected to the UAV via terminal, but not controlling it yet
* **<nowiki>[</nowiki>`objNull`, ""]** - nobody is controlling or connected to the UAV
<br>


---
*Example 1:*
```sqf
UAVControl uav;
```