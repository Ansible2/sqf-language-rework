Break number into array of digits.


---
*Syntaxes:*

number call `BIS_fnc_numberDigits`

---
*Example 1:*

```sqf
12345678 call BIS_fnc_numberDigits; // returns [1,2,3,4,5,6,7,8]
```

*Example 2:*

```sqf
123.9999 call BIS_fnc_numberDigits; // returns [1,2,3]
```