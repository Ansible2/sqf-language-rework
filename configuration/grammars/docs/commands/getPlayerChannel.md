Returns channel number for given player, `provided that player is speaking`, otherwise -1. Having mic on is not enough, player has to make a sound. There are several limitations to this command:
* It does not work on dedicated server, the return is always -1, only client can detect other client talking.
* Prior to Arma 3 v2.01.146856 did not detect when someone talked on direct chat at all anywhere. 
* The client on which command is executed has to able to receive transmission before the transmission channel can be detected. For example if a player is not in the same group as a speaker and the speaker speaks on Group Channel, the player cannot hear the speaker and therefore cannot detect what channel the speaker is on.
In short, this command mimics the speaking icon from the UI. Correspondence between channel and number:


---
*Example 1:*
```sqf
private _channelID = getPlayerChannel player;
```