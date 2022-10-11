Execute a script using (the deprecated but still available) `SQS Syntax`. `SQF Syntax` (and `execVM`) is the most recent scripting language.<br>
The magic variable `_time` used within the script contains the elapsed time in seconds since the script started.


---
*Example 1:*
<sqs>[player, _jeep] exec "getin.sqs";</sqs>