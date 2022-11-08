#### Description:
This is an alias of sorts of Bohemia's BIS_fnc_addCommMenuItem. It is mostly made with the purpose of using default values and specifically passing a -1 by default to _expressionArguments. Also initializes/adds entries to the KISKA_playersSupportMap which is used for keeping track of the number of uses left on a support if they are passed between the Support Manager.

#### Parameters:
0: **_owner** *(OBJECT)* - The person to add the support to

1: **_itemClass** *(STRING)* - The class as defined in the CfgCommunicationMenu

2: **_textArguements** *(ANY)* - Any arguements to pass to the text displayed in the menu

3: **_expressionArguments** *(ANY)* - Any arguements to pass to the expression

4: **_notification** *(STRING)* - The class of notification to display when added

5: **_addToHash** *(BOOL)* - Add to KISKA_playersSupportMap

#### Returns:
<NUMBER> - The comm menu ID

#### Examples:
```sqf
_id = [player,"myClass"] call KISKA_fnc_addCommMenuItem;
```

