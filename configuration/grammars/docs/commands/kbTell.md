Make the person tell to the receiver the sentence. See `Conversations` for more details.


---
*Syntaxes:*

person `kbTell` [receiver, topicName, sentenceClass, argumentArray1, argumentArray2, (…), forceRadio]

---
*Example 1:*

```sqf
player kbTell [BIS_HQ, "myTopic", "playerSentence1"];
```

*Example 2:*

```sqf
player kbTell [
	BIS_HQ,										// to
	"Airstrike",								// topic
	"AirstrikeRequest",							// sentence
	["Team", {}, "Anvil", ["Anvil"]],			// argument 1
	["Location", {}, "Strelka", ["Strelka"]],	// argument 2
	true];										// use radio
```
in given .bikb:
```cpp
class AirstrikeRequest 
{
	text = "%team requesting close air support at grid %location ";
	speech[] = { %Team, RequestingCloseAirSupportAtGrid, %Location };
	class Arguments 
	{
		class Team		{ type = "simple"; };
		class Location	{ type = "simple"; };
	};
};
```

*Example 3:*

```sqf
player kbTell [
	BIS_HQ,										// to
	"Airstrike",								// topic
	"AirstrikeRequest",							// sentence
	["argumentName", argumentValue],			// argument 1
	true];										// use radio
```