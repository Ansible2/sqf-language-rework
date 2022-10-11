Order an AI airplane to land at a given airport. `ID` is the number to identify which map airport you want the airplane to land at. See `Arma: Airport IDs` for more information.


---
*Example 1:*
```sqf
_plane1 landAt 1;
```

*Example 2:*
```sqf
_dynamicAirport1 = "DynamicAirport_01_F" createVehicle position player;
_plane1 landAt _dynamicAirport1;
```