Pass a non-verbal communication to the receiver. This command does `as if` the sentence was said and triggers the reaction scripts (AI FSM or player's conversation EH). See `Conversations` for more details.


---
*Example 1:*
```sqf
// will trigger AS IF unit1 said the sentence (via kbTell)
// unit2's FSM will react accordingly.
unit1 kbReact [unit2, "topicName", "speech1"];
```