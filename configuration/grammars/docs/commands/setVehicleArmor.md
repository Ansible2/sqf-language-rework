Sets the armor (or health for men) state of the vehicle (a value from 0 to 1). 

Works like `setDamage`, but the other way around: 1 is full health - see {{HashLink|#Example 2}}.


---
*Syntaxes:*

vehicleName `setVehicleArmor` value

---
*Example 1:*

```sqf
player setVehicleArmor 0.5;
```

*Example 2:*

```sqf
player setVehicleArmor 1;
// is the same as
player setDamage 0;

player setVehicleArmor 0;
// is the same as
player setDamage 0.97;
```