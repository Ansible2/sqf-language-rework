Sets simul cloud cover. This command does not affect overcast value.


---
*Syntaxes:*

`simulSetHumidity` humidity

---
*Example 1:*

```sqf
simulSetHumidity 1;
```

*Example 2:*

When combined with `setOvercast` 1 this command will also start random strength rain.
```sqf
skipTime -24;
86400 setOvercast 1;
skipTime 24;
simulSetHumidity 1;
```Creates rainy looking weather, followed by thunder in about 10 seconds and rain in about 20.