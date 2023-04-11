#### Description:
Displays a message to the player and creates a diary entry of that message. Also can play a sound when the notification pops up.

#### Parameters:
0: **_message** : *(STRING or ARRAY)* - If string, the message to display as title.If array:- 0: **_text** : *(STRING)* - Text to display or path to .paa or .jpg
    image (may be passed directly if only text is required)- 1: **_size** : *(NUMBER)* - Scale of text- 2: **_color** : *(ARRAY)* - RGB or RGBA color (range 0-1). (optional, default: [1, 1, 1, 1])

1: **_canSkip** : *(BOOL)* - Can the notification be skipped when another is in the queue

2: **_lifetime** : *(NUMBER)* - How long the notification will be visible (min of 2 seconds)

3: **_sound** : *(STRING)* - A sound

#### Returns:
NOTHING

#### Examples:
```sqf
["this is the message", 5] call KISKA_fnc_datalinkMsg;
```

