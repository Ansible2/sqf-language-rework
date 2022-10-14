<code style{{=}}"float: right; font-size: 0.85em; margin: 0 0 0.5em 1.5em">12:00 - 1
(...) - 1
18:39 - 0.911201
18:42 - 0.576303
18:45 - 0.240862
18:48 - 0
(...) - 0
06:00 - 0.0695308
06:03 - 0.404731
06:06 - 0.739519
06:09 - 1
(...) - 1</code>
Returns the sun to moon transition state in range 0..1.<br>
The return value is either 0 or 1 most of the time, the in-between values only returned during a few minutes in the morning and in the evening, depending on the `date`, and could be similar to shown here:

<div>

<div style{{=}}"float: left"></div>
</div>


---
*Syntaxes:*

`sunOrMoon`

---
*Example 1:*

```sqf
private _transitionState = sunOrMoon;
```