Sets the estimated time left in the game that is shown in the "Game in progress" screen or in the master browser.


---
*Syntaxes:*

`estimatedTimeLeft` seconds

---
*Example 1:*

```sqf
estimatedTimeLeft 600; // 10 min
```

*Example 2:*

`<See o Reference p>:` for missions with a hard set limit adjusted via `[[Description.ext#titleParam%, valuesParam%, defValueParam%, textParam%|param1]]`, the following example can be used in the `init.sqs` file:
<sqs>estimatedTimeLeft param1</sqs>