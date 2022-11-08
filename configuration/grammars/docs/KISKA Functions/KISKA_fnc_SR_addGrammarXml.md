#### Description:
Adds an xml grammar file to the speech recognizer.

#### Parameters:
0: **_name** *(STRING)* - The name of the grammar to add

1: **_xml** *(STRING)* - The xml in string format

#### Returns:
*(BOOL)* - true if will be added, false if cannot be added

#### Examples:
```sqf
["name",loadFile "myXmlFile.xml"] call KISKA_fnc_SR_addGrammarXml;
```

