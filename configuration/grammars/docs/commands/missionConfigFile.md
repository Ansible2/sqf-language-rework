Return root of mission `Description.ext` entries hierarchy.
{{Feature|important|Since the introduction of the `Eden Editor`, scenario attributes can be configured in the editor itself, not only in the external Description.ext file.
To access desired value independently on where it is stored, use the following commands:
* `getMissionConfigValue`
* `getMissionConfig`


---
*Example 1:*
```sqf
for "_i" from 0 to (count paramsArray - 1) do
{
	missionNamespace setVariable [configName ((missionConfigFile/"Params") select _i), paramsArray select _i];
};
```

*Example 2:*
To define custom values in `description.ext`:
<syntaxhighlight lang="cpp">
class myMissionConfig
{
	class mySetup
	{
		myNumber = 3;
		myArray[] = { 1, 2, 3 };
		myText = "LOL";
	};
};
</syntaxhighlight>

To read defined custom values from a script:

```sqf
_myNumber = getNumber (missionConfigFile >> "myMissionConfig" >> "mySetup" >> "myNumber");
_myArray = getArray (missionConfigFile >> "myMissionConfig" >> "mySetup" >> "myArray");
_myText = getText (missionConfigFile >> "myMissionConfig" >> "mySetup" >> "myText");
```