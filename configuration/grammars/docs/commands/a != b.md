Returns whether one value is `not` equal to another. String comparison is case-`in`sensitive (e.g <sqf inline>"STRINGtext" != "stringTEXT" // returns false - strings are equivalent
```).


---
*Syntaxes:*

a `!=` b

---
*Example 1:*

```sqf
if (_counter != 4) then
{
	hint "The counter is not equal to the number 4";
};
```

*Example 2:*

```sqf
if (vehicle player != player) then
{
	hint "you are in a vehicle";
}
else
{
	hint "you are on foot";
};
```

*Example 3:*

```sqf
if (fuel truck1 != 1) then
{
	hint "Truck1 has less than a full tank of fuel.";
};
```

*Example 4:*

```sqf
if (alive _unit1 != alive _unit2) then { hint "One of the units is dead while another is alive" };
```