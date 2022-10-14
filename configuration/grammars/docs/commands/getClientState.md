Returns client state in network game. Works on both, client and dedicated server. The following states are possible:


---
*Syntaxes:*

`getClientState`

---
*Example 1:*

```sqf
_state = getClientState;
```

*Example 2:*

```sqf
if (getClientState == "BRIEFING READ") then { hint "Let the show begin!" };
```