Gives a broken down version of `actionKeys` return. Returns an `Array` containing the breakdowns of the `dikCodes` of keys, buttons and combos assigned to the given user action. Action names can be found in config class ControllerSchemes or `user action names` or user profile (see {{HashLink|#Example 1}}).
In addition, some of the actions are also listed here: `inputAction/actions`

The Key Device can be one of several types:
{{Columns|3
|
* **"KEYBOARD"**
* **"MOUSE_BUTTON"**
* **"MOUSE_AXIS"**
* **"JOYSTICK_BUTTON"**
* **"JOYSTICK_AXIS"**
* **"JOYSTICK_POV"**
* **"XINPUT"** - (Xbox) Controller Input
* **"TRACKER"** - Motion Tracking (TrackIR, Tobii etc)


---
*Syntaxes:*

`actionKeysEx` userAction

---
*Example 1:*

To retrieve the following key's data, use the property name without 'key':
<syntaxhighlight lang="cpp">keyWatch[] = { 24 };</syntaxhighlight>

```sqf
actionKeysEx "Watch"; // [[[24, "KEYBOARD"], [], false]]
```

*Example 2:*

```sqf
private _result = actionKeysEx "OpticsMode"; // [[[129,"MOUSE_BUTTON"],[29,"KEYBOARD"],false],[[181,"KEYBOARD"],[],false]]
```