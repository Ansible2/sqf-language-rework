Break script flow and go to given label (defined by `#` - `NOT` to be confused with `SQF`'s `hash sign`!)


---
*Example 1:*
<sqs>
goto "myLabel"
player setDamage 1

#myLabel
hint "you successfully avoided death!"
</sqs>