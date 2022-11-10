Shows dynamic opening credits or any type of text.<br>


---
*Syntaxes:*

[text, x, y, duration, fadeInTime, deltaY, rscLayer] spawn `BIS_fnc_dynamicText`

---
*Example 1:*

```sqf
["<nowiki><t color='#ff0000' size='.8'>Warning!<br />Stop doing what you are doing</t></nowiki>",-1,-1,4,1,0,789] spawn BIS_fnc_dynamicText;
```