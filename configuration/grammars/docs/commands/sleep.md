Suspends code execution for given time in seconds. The sleep precision is given by a framerate, the delay given is the minimal delay expected. Must be called inside of a context which is interruptible, i.e. a `script` executed by `execVM` or `spawn`.
{{Feature | Informative |
* this command will suspend the code for `at least` the given amount of time, and can be way more if the `script scheduler` is busy.
* this command will suspend the script as the game gets paused in single player (and will resume with it). To avoid this, use `uiSleep`.


---
*Example 1:*
```sqf
0 spawn {
	sleep 5;
	hint "after (at least) 5 seconds...";
};
```

*Example 2:*
```sqf
sleep 5 + random 10;	// incorrect - will only sleep for 5 seconds, as it will be interpreted as (sleep 5) (+(random 10))
sleep (5 + random 10);	// correct
```