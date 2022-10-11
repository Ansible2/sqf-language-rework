Sets the "heat" state of different vehicle parts for Thermal Imaging detection.
This allows simulation of heated up parts of a vehicle without it actually having to utilize them - on a 0..1 range - 0 being cold, 1 being hot.


---
*Example 1:*
```sqf
vehicle player setVehicleTIPars [1, 1, 1];			// set all parts hot
vehicle player setVehicleTIPars [0, 0, 0];			// set all parts cold
vehicle player setVehicleTIPars [0.5, 0.5, 0.5];	// set all parts warm
```

*Example 2:*
```sqf
vehicle player setVehicleTIPars [1, 0, 0]; // set the engine warm, perfect for winter
```