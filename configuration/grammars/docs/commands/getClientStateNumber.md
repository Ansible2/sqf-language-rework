Returns client state in network game. Works on both, client and dedicated server. The following states are possible:


---
*Syntaxes:*

`getClientStateNumber`

---
*Example 1:*

```sqf
_state = getClientStateNumber;
```

*Example 2:*

```sqf
_inGame = getClientStateNumber > 8;
```