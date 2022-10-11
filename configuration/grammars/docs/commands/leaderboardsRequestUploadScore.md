Starts async. operation to upload score to board with given name, value always overwrite the current value in the board.
The details array is optional. The board has to be initialized before the call.


---
*Example 1:*
```sqf
leaderboardsRequestUploadScore ["TT01", 1234, [5,6,7,8]];
```