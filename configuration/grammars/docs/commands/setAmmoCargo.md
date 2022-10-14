Set amount of ammo resources in cargo space of a rearm vehicle. Ammo resource is used to resupply vehicles that take ammo. Soldiers use individual magazines instead. Amount: 1 is full cargo.

The <u>actual</u> `quantity` to work with is determined by the model's class in `CfgVehicles`


---
*Syntaxes:*

vehicleName `setAmmoCargo` ammoCargo

---
*Example 1:*

```sqf
_ammoTruck1 setAmmoCargo 0.5;
```