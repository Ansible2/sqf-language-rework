Check if file is signed by any key present in game keys folders. On clients, it does not check against the keys accepted by server.


---
*Example 1:*
```sqf
verifySignature "@MyAddon\Addons\SomeAddon.pbo";
```

*Example 2:*
```sqf
verifySignature "@MyAddon\Somefnc.dll";
```