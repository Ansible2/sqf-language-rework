Defines the time between condition satisfaction and trigger activation (randomly from min to max, with an average value mid). If the last argument is true, the condition must be fullfilled all the time. <br><br>
For a normal trigger, `min`, `mid` and `max` are used to generate random duration according to [Gaussian Distribution](https://en.wikipedia.org/wiki/Normal_distribution)<ref>Technically, it is a rescaled [Bates distribution](https://en.wikipedia.org/wiki/Bates_distribution) with n = 4. The distribution is split in two at its midpoint and scaled linearly such that its maximum lies at the specified midpoint.</ref>. For a "Seized" type of trigger, the duration value is generated using side ruling power


---
*Syntaxes:*

trigger `setTriggerTimeout` [min, mid, max, interruptable]

---
*Example 1:*

```sqf
_trigger setTriggerTimeout [5, 10, 7, false];
```