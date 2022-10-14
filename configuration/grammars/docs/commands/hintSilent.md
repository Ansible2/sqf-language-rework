Same as `hint`, but without a sound.


---
*Syntaxes:*

`hintSilent` text

---
*Example 1:*

```sqf
hintSilent format ["Hello, %1!", name player];
```

*Example 2:*

```sqf
hint "Hello there!";
sleep 5;
hintSilent ""; // removes message
```