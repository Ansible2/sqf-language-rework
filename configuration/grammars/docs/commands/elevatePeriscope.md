Elevates periscope of a vehicle. Vehicles in Arma 3 which are compatible with this tech are Strider, remote laser designators, the robot arm on Eddie, etc.
Please note that SDV submarine has a different periscope, which is just an animated selection and could be raised and lowered with `animate` command.
{{Feature|informative|
* a user can immediately override any elevation in progress by using assigned keyboard keys. To block user input see the `blockUserInput` parameter.
* a [[Arma 3: Event Handlers#PeriscopeElevationChanged|PeriscopeElevationChanged]] entity event handler is also provided.


---
*Example 1:*
```sqf
_eddie elevatePeriscope [[0], 0.75, 0.1];
```