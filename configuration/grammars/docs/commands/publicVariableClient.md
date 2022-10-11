Send the variable value to the client computer - same limitations regarding variable type as `publicVariable`.

The Client ID is the temporary ID given to a connected client for that session. You can find out this ID with the `owner` command (using it on a player's character, for example, will give you that players client ID).<br><br>


---
*Example 1:*
```sqf
3 publicVariableClient "CTFscoreOne";
```