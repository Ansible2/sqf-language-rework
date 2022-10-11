[[Image:setTriggerArea.jpg|thumb|300px|Trigger axis a, b and c (`half` of their x, y and z dimensions)]] Defines the area monitored by the given trigger. The area could be either rectangular or elliptical.


---
*Example 1:*
```sqf
_trigger setTriggerArea [100, 50, 45, false];
```

*Example 2:*
```sqf
_trigger setTriggerArea [100, 50, 45, false, 100];
```

*Example 3:*
```sqf
_trg = createTrigger ["EmptyDetector", getPos player, false];
_trg setTriggerArea [5, 5, 0, false];
_trg setTriggerActivation ["CIV", "PRESENT", true];
_trg setTriggerStatements ["this", "hint 'Civilian near player'", "hint 'no civilian near'"];
```