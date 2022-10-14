In theory disables the ability to talk to other people. In actuality, if `true` is given, the command increases unit's `kbTell` `IsSpeaking` status by 1, thus stopping unit from having a conversation. If `false` is given, the command decreases unit's `kbTell` `IsSpeaking` status by 1. The unit "is speaking" if `IsSpeaking > 0`.


---
*Syntaxes:*

unitName `disableConversation`  disable

---
*Example 1:*

```sqf
player disableConversation true;
```

*Example 2:*

```sqf
soldier1 disableConversation false;
```