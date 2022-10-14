Checks if a soldier's hands are hit, which results in inaccurate aiming.


---
*Syntaxes:*

`handsHit` unitName

---
*Example 1:*

<sqs>? (handsHit player == 1) : player globalChat "Ouch! Don't shoot at my hands dammit!"</sqs>