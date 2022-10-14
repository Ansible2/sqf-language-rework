Force opens curator interface.


---
*Syntaxes:*

`openCuratorInterface`

---
*Example 1:*

Open interface:

```sqf
openCuratorInterface;
```

*Example 2:*

Close interface:

```sqf
findDisplay 312 closeDisplay 2;
```

*Example 3:*

Detect if user used "Zeus" key to open curator interface in the absence of event handler for it:

```sqf
findDisplay 46 displayAddEventHandler ["KeyDown", {
	if (inputAction "CuratorInterface" > 0) then
	{
		hint "Curator interface is open";
	};
	false
}];
```