Sets wanted position and size for 2D control animation. Width and height are optional. `ctrlCommit` is required to complete the operation. For 3D control, param is relative [x, y, z] and no `ctrlCommit` is required as it cannot be animated. If target control is inside a `CT_CONTROLS_GROUP`, the position needs to be relative to it.


---
*Example 1:*
Move control:

```sqf
_control2D ctrlSetPosition [0, 0];
_control2D ctrlCommit 0;
```

*Example 2:*
Move control and resize:

```sqf
_control2D ctrlSetPosition [0, 0, 1, 1];
_control2D ctrlCommit 0;
```

*Example 3:*
```sqf
_control3D ctrlSetPosition [0.5, 1, 0.5]; //centered and 1m away from screen
```

*Example 4:*
Typewriter effect:

```sqf
with uiNamespace do 	
{ 
	[] spawn
	{
		_text1 = "This is a simple demo of typewriter text effect with various speed.";
		_text2 = "This took 10 seconds.";
		_text3 = "This is a fast one, set for 2 seconds.";
		
		ctrl = findDisplay 46 ctrlCreate ["RscStructuredText", -1];
		
		ctrl ctrlSetPosition [0,0,0,0.1];
		ctrl ctrlCommit 0;
		ctrl ctrlSetStructuredText parseText format ["<t color='#ff0000' size='2.1'>%1</t>", _text1 splitString " " joinString "&#160;"];
		ctrl ctrlSetPosition [0,0,ctrlTextWidth ctrl,0.1];
		ctrl ctrlCommit 8;
		
		waitUntil {ctrlCommitted ctrl};
		sleep 0.5;
		
		ctrl ctrlSetPosition [0,0,0,0.1];
		ctrl ctrlCommit 0;
		ctrl ctrlSetStructuredText parseText format ["<t color='#ff0000' size='2.1'>%1</t>", _text2 splitString " " joinString "&#160;"];
		ctrl ctrlSetPosition [0,0,ctrlTextWidth ctrl,0.1];
		ctrl ctrlCommit 2;
		
		waitUntil {ctrlCommitted ctrl};
		sleep 2;
		
		ctrl ctrlSetPosition [0,0,0,0.1];
		ctrl ctrlCommit 0;
		ctrl ctrlSetStructuredText parseText format ["<t color='#00ff00' size='2.1'>%1</t>", _text3 splitString " " joinString "&#160;"];
		ctrl ctrlSetPosition [0,0,ctrlTextWidth ctrl,0.1];
		ctrl ctrlCommit 2;
		
		waitUntil {ctrlCommitted ctrl};
		sleep 2;
		
		ctrlDelete ctrl;
	};
};
```