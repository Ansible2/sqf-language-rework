Enables/disables UI functionality which is responsible for sending text or voice chat to the given chat channel.
 v2.02) the current communication in progress
* does not affect chat related scripting commands such as `vehicleChat`, `globalRadio` etc.


---
*Example 1:*
```sqf
0 enableChannel false; // disable user ability to send voice and text on global channel
```

*Example 2:*
```sqf
0 enableChannel [true, false]; // enable user ability to send text but disable voice on global channel
```