This command defines the level of access a user has to editor objects.

"objects" is an array of either `Editor Objects` (eg ["_unit_0"]) or actual `Game Objects` (eg [player]). If the array is empty then the command will automatically parse all editor objects.

"editorType" is the editor type to effect (eg "unit", "vehicle", "center") or "" for all types.

"condition" is an executable string that must evaluate to true or false. If true, the scope of the evaluated editor object will be modified. "_x" can be used in the string as reference to the ingame representation of the currently processed array member.

"scope" is one of "HIDE", "VIEW", "SELECT", "LINKTO", "LINKFROM", "ALLNODRAG", "ALLNOTREE", "ALLNOCOPY", "ALLNOSELECT" or "ALL".

"subordinatesAlso" is a boolean value. If true then subordinates in the editor will be assigned the same scope as the parent.


---
*Example 1:*
```sqf
_map setEditorObjectScope [ [],"vehicle", "side effectiveCommander _x != side player", "HIDE", false];
```

*Example 2:*
```sqf
((findDisplay 128) displayCtrl 51) setEditorObjectScope [ ["_unit_0"], "", "true", "ALLNODRAG", false];
```