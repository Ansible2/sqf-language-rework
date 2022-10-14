Sends the message to the custom radio channel. The message is defined in the `description.ext` file or radio protocol.


---
*Syntaxes:*

unit `customRadio` [customChannelID, message]

---
*Example 1:*

```sqf
_soldierOne customRadio [1, "WordEnemy"];
```