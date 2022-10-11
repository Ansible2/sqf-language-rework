Send message to given address using UDP protocol. Returns false if the message has not been delivered


---
*Example 1:*
```sqf
_bool = sendUDPMessage ["192.168.0.1", 2302, "Here goes you message..."];
```