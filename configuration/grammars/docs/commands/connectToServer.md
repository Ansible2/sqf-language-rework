Connects the client to the provided server.
{{Feature|informative|
* only works on the [[Arma 3 Main Menu|Main Menu]].
* must be executed from ` UI context`, such as `onButtonDown` or similar events (see `User Interface Event Handlers`).


---
*Example 1:*
```sqf
connectToServer ["192.168.0.2", 2302, "test"];
```