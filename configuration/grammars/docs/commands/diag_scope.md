Returns script scope depth. When script is directly executed by the engine or a new script is added to the scheduler, the scope depth is 0.
The examples of such execution are event handlers, `spawn`, etc. `isNil` `Code` will also create a parent scope.
Any use of `call` and such will stack execution creating child scopes and increasing scope depth.


---
*Example 1:*
```sqf
[] spawn
{ 
	systemChat str diag_scope; // 0
	call 
	{ 
		call
		{ 
			systemChat str diag_scope; // 2
			isNil 
			{ 
				systemChat str diag_scope; // 0
				call 
				{
					systemChat str diag_scope; // 1
				};
			};
		};
	};
};
```