Sets given event handler of in-game UI. If EH function returns `true`, performed action is overridden. Event handlers available are:
* "PrevAction" - mouse scroll up
* "Action" - action key press
* "NextAction" - mouse scroll down
In order to remove a previously added event handler, set it again with an empty `code` string **""**.

 variable:
<sqf>params ["_target", "_caller", "_index", "_engineName", "_text", "_priority", "_showWindow", "_hideOnUse", "_shortcut", "_visibleMenu", "_eventName"];</sqf>
* _target: `Object` - target object to which action is attached
* _caller: `Object` - caller object, basically `player`
* _index: `Number` - index of the action in action menu (0 - top most)
* _engineName: `String` - engine based action name ("User" for user added actions)
* _text: `String` - `localize`d action plain text as seen by the caller
* _priority: `Number` - action `priority` value
* _showWindow: `Boolean` - action `showWindow` value
* _hideOnUse: `Boolean` - action `hideOnUse` value
* _shortcut: `String` - action `shortcut` name or ""
* _visibleMenu: `Boolean` - `action menu visibility` - on first scroll or action press the menu is still invisible, the menu is shown but no action is performed
* _eventName: `String` - event name


---
*Example 1:*
```sqf
inGameUISetEventHandler ["Action", "hint 'Lights, Camera, Action!'; true"];
sleep 10;
inGameUISetEventHandler ["Action", ""]; // removes the "Action" EH
```

*Example 2:*
```sqf
inGameUISetEventHandler ["PrevAction", "hint str _this; false"];
inGameUISetEventHandler ["NextAction", "hint str _this; false"];
inGameUISetEventHandler ["Action", "hint str _this; false"];
```

*Example 3:*
Deny any weapon disassembly:

```sqf
inGameUISetEventHandler ["Action", "
	if (_this select 3 == 'DisAssemble') then {
		hint 'You are not allowed to do this';
		true
	}
"];
```

*Example 4:*
Detect explosive/mine placement:

```sqf
private _onMagazineUse = '
	params ["_target", "", "", "_action", "", "", "", "", "", "", "_event"];
	if (_action == "UseMagazine") then {
		if (_event == "Action") then {
			_target spawn {
				waitUntil {!(all_magazines isEqualTo magazines _this)};
				{
					0 = all_magazines deleteAt (all_magazines find _x);
				} count magazines _this;
				hint format ["Magazine Used: %1", all_magazines select 0];
			};
		} else {
			all_magazines = magazines _target;
		};
	};
	false
';
inGameUISetEventHandler ["PrevAction", _onMagazineUse];
inGameUISetEventHandler ["NextAction", _onMagazineUse];
inGameUISetEventHandler ["Action", _onMagazineUse];
```