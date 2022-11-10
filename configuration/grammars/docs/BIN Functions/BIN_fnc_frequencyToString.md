<pre>/*

	Description:
		Returns frequency as a string

	Parameter(s):
		0:
			NUMBER - frequency in MHz, returned value is in format "<value> <unit>"
			ARRAY in format [NUMBER,NUMBER] - frequency range in MHz, returned value is in format "<value1> <unit1> - <value2> <unit2>"
		1: NUMBER - order offset. When 0, frequency 1000 will return "1 GHz". When -1, returned value will be "1000 MHz"
		2: BOOL - true if input values are in Hz, false if in MHz (standard across the game)

	Returns:
		STRING
*/

#define UNITS [\
	localize "STR_A3_C_fnc_frequencyToString_Hz0",\
	localize "STR_A3_C_fnc_frequencyToString_Hz1",\
	localize "STR_A3_C_fnc_frequencyToString_Hz2",\
	localize "STR_A3_C_fnc_frequencyToString_Hz3",\
	localize "STR_A3_C_fnc_frequencyToString_Hz4",\
	localize "STR_A3_C_fnc_frequencyToString_Hz5",\
	localize "STR_A3_C_fnc_frequencyToString_Hz6"\
]
//              ^0   ^3    ^6    ^9    ^12   ^15   ^18
//#define UNITS ["Hz","kHz","MHz","GHz","THz","PHz","EHz"]

*(Reference Wiki "placeholder")*


---
*Syntaxes:*

<!-- [] call `BIN_fnc_frequencyToString` -->

---
*Example 1:*

<!-- 
```sqf
[] call BIN_fnc_frequencyToString;
``` -->