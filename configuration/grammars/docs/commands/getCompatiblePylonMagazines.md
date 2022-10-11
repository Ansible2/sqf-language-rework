Get array of compatible pylon magazines


---
*Example 1:*
```sqf
// returns array of arrays containing all compatible magazines
vehicle player getCompatiblePylonMagazines 0;
```

*Example 2:*
```sqf
// returns array of compatible magazines for the 3rd pylon if it exists; otherwise returns array of arrays (see above)
jet1 getCompatiblePylonMagazines 3;
```

*Example 3:*
```sqf
// returns array of compatible magazines for "pylon1" class, defined in
// configFile >> "CfgVehicles" >> "B_Plane_CAS_01_dynamicLoadout_F" >> "Components" >> "TransportPylonsComponent" >> "Pylons"
"B_Plane_CAS_01_dynamicLoadout_F" getCompatiblePylonMagazines "pylon1";
```