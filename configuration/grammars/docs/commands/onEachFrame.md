Runs given statement every frame.


---
*Example 1:*
```sqf
onEachFrame { hintSilent str position player}; // Hints position every frame
```

*Example 2:*
Private variables defined outside of the `onEachFrame` scope are not inherited:

```sqf
_myvar = "bob";
myvar = "bill";
onEachFrame { hintSilent str [_myvar, myvar]; };
// Result: [any, "bill"]
```

*Example 3:*
Only one `onEachFrame` loop can exist at any time:

```sqf
onEachFrame { player sideChat "first"; };
onEachFrame { player sideChat "second"; };
// Result: "second", "second", "second"...
```

Note how "first" never gets shown even though it precedes "second". This is because script thread is executing within the same frame and first `onEachFrame` is overwritten before it has a chance to execute its statement.

*Example 4:*
Script suspension is not permitted within `onEachFrame` scope:

```sqf
// Will throw an error
onEachFrame { sleep 1; };
```

*Example 5:*
```sqf
onEachFrame {}; // Reset event
```