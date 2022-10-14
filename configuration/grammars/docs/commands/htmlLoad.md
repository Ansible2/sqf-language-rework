Load `HTML` from file or URI using given control. File path is relative to current mission dir or an absolute path (with drive letter etc.).
The command is subject to restrictions, imposed by `CfgCommands` class.
{{Feature|arma3|Since {{GVI|arma3|2.10


---
*Syntaxes:*

control `htmlLoad` filename

---
*Example 1:*

```sqf
_control htmlLoad "briefing.html";
```

*Example 2:*

```sqf
_control htmlLoad "http://www.bistudio.com/newsfeed/arma3_news.php?build=main&language=English";
```

*Example 3:*

Display news item:

```sqf
[] spawn {
	disableSerialization;
	private _html = findDisplay 46 createDisplay "RscCredits" ctrlCreate ["RscHTML", -1];
	_html ctrlSetBackgroundColor [0,0,0,0.8];
	_html ctrlSetPosition [safeZoneX, safeZoneY, safeZoneW, safeZoneH];
	_html ctrlCommit 0;
	_html htmlLoad "http://www.bistudio.com/newsfeed/arma3_news.php?build=main&language=English";
};
```