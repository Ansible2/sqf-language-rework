Gets general environment's light settings.


---
*Example 1:*
```sqf
getLighting; // returns [[0.646753,0.781818,1],28526.2,[-0.0167152,0.211598,-0.977214],0]
```

*Example 2:*
```sqf
getLighting params ["_ambientLightColour", "_ambientLightBrightness", "_lightDirection", "_starsVisibility"];
```