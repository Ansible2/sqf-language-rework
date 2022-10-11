If loading screen is shown, sets progress bar to the given value (interval is from 0 to 1])


---
*Example 1:*
```sqf
startLoadingScreen ["Loading My Mission"];
// 
// batch of code
// 
progressLoadingScreen 0.25;
// 
// batch of code
// 
progressLoadingScreen 0.50;
// 
// batch of code
// 
progressLoadingScreen 0.95;
// 
// batch of code
// 
endLoadingScreen;
```