Outputs a hint message to the right of the screen (left of the screen in <See ofp Reference arma1>). Use `hintSilent` for soundless hint. To split message in multiple lines either use `Structured Text` or **\n** (in lower case).


---
*Syntaxes:*

`hint` message

---
*Example 1:*

```sqf
// outputs the following:
// Press W to move forward.
// Press S to move backwards.
hint "Press W to move forward.\nPress S to move backwards."
```

*Example 2:*

```sqf
hint format ["Hello, %1!", name player];
```

*Example 3:*

```sqf
hint str count allPlayers;
sleep 10;
hintSilent ""; // hides the previous hint display
```

*Example 4:*

```sqf
hint parseText "<t size='2.0'>Large text</t>"; // displays text twice as large as the default one
```