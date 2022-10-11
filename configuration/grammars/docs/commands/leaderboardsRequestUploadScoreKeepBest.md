Starts async. operation to upload score to board with given name, value is only stored to board if it is better than one already in the board. The details array is optional. The board has to be initialized before the call.


---
*Example 1:*
```sqf
leaderboardsRequestUploadScoreKeepBest ["TT01", 1234, [5,6,7,8]];
```