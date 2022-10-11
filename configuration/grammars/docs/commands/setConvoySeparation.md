Sets the distance to keep to the vehicle which is `in front`.<br>
*This command has to be applied to all vehicles in a convoy in order to have a separation of, for example, 50 m. 
*Vehicles in a convoy can also have different distances.
*It's recommended that small values (<10m) should only be used for slowly moving convoys, otherwise AI driven vehicles will leave the road frequently to avoid collisions


---
*Example 1:*
```sqf
vehicle setConvoySeparation 20;
```