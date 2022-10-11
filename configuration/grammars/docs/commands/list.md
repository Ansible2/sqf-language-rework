List of units that would activate given `Trigger`.

It returns nothing before the simulation started, i.e. in (undelayed) init.sqf files. Returns a ``pointer`` to the trigger's list after the simulation started.<br>
Since this is just a `reference` this means that the value in your local variable will change as the content of the trigger area changes.
To permanently copy the returned list to a different variable, use <sqf inline>_mylist = +(list triggerOne)</sqf>.

The second example can be used inside the trigger (in that case, no need to name your trigger).

The list returned for trigger of type "Not present" is the same as that returned for type "present".


---
*Example 1:*
```sqf
_triggerList = list _triggerOne;
```

*Example 2:*
```sqf
hint format ["%1", thisList];
```