#### Description:
Display a text message. Multiple incoming messages are queued. Also controls the lifetime of a notification

#### Parameters:
0: **_titleLine** : *(STRING, STRUCTURED TEXT, or ARRAY)* - If string, the message to display as title.If array:
    
    0. _text : *(STRING)* - Text to display or path to .paa or .jpg
        image (may be passed directly if only text is required)
    1. _size : *(NUMBER)* - Scale of text
    2. _color : *(ARRAY)* - RGB or RGBA color (range 0-1). (optional, default: [1, 1, 1, 1])

1: **_subLine** : *(STRING, STRUCTURED TEXT, or ARRAY)* - Formatted the same as _titleLine

2: **_lifetime** : *(NUMBER)* - How long the notification lasts in seconds (at least 2)

3: **_skippable** : *(BOOL)* - If there are more notifications behind in the queue and this notificationcomes up, it will not be shown and thrown away

#### Returns:
NOTHING

#### Examples:
```sqf
[
    ["Hello",1.1,[0.75,0,0,1]],
    "World",
    5,
    false
] call KISKA_fnc_notify;
```

