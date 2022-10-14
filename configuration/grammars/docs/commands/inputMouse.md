Returns the state of mouse button action, alone or in combination with key presses. For more information on codes and combos see [[Arma_3:_Modded_Keybinding]] and `DIK_KeyCodes` but here are some examples of how codes could be hand constructed:

* KEYBOARD_COMBO 16777216 (0x1000000)
* DEVICE_MOUSE 65536 (0x10000)
* HOLD_OFFSET 0
* CLICK_OFFSET 128 (0x80)
* DOUBLE_CLICK_OFFSET 256 (0x100)
* SPECIAL_COMBINATIONS 1114112 (0x110000)
<pre>
Click + Hold: BUTTON + DEVICE_MOUSE + HOLD_OFFSET = BUTTON + 65536 + 0
Click: BUTTON + DEVICE_MOUSE + CLICK_OFFSET = BUTTON + 65536 + 128 
Double Click: BUTTON + DEVICE_MOUSE + DOUBLE_CLICK_OFFSET = BUTTON + 65536 + 256

RMB Click + Hold:  1 + 65536 + 0 = 65537
RMB Click: 1 + 65536 + 128 = 65665
RMB Double Click: 1 + 65536 + 256 = 65793

Combo + Click + Hold: DIK * KEYBOARD_COMBO + SPECIAL_COMBINATIONS + BUTTON + HOLD_OFFSET = DIK * 16777216 + 1114112 + BUTTON + 0
Combo + Click: DIK * KEYBOARD_COMBO + SPECIAL_COMBINATIONS + BUTTON + CLICK_OFFSET = DIK * 16777216 + 1114112 + BUTTON + 128
Combo + Double Click: DIK * KEYBOARD_COMBO + SPECIAL_COMBINATIONS + BUTTON + DOUBLE_CLICK_OFFSET = DIK * 16777216 + 1114112 + BUTTON + 256

LShift + RMB Click + Hold: 42 * 16777216 + 1114112 + 1 + 0 = 705757185
LShift + RMB Click: 42 * 16777216 + 1114112 + 1 + 128 = 705757313
LShift + RMB Double Click: 42 * 16777216 + 1114112 + 1 + 256 = 705757441
</pre>


---
*Syntaxes:*

`inputMouse` button

`inputMouse` combocode

---
*Example 1:*

State of the RMB:

```sqf
onEachFrame { hintSilent str inputMouse 1 };
```

*Example 2:*

Detect LCtrl + 2xRMB:

```sqf
onEachFrame { hintSilent str inputMouse "487653633" };
```