Imports CfgVehicles image links from Community Wiki (https://community.bistudio.com/).
# Run the script. It will copy a text into clipboard
# Open your `Sandbox` and paste the text into edit field
# `Preview` the page (don't save it)
# Copy the resulting text and use it in your scripts

Result is to the following format:

```sqf
_imagesCfgVehicles = [
	"papercar","https://community.bistudio.com/wikidata/images/8/85/Arma3_CfgVehicles_PaperCar.jpg",
	"firesectortarget","",
	"building","",
	// etc
];
```


---
*Syntaxes:*

call `BIS_fnc_importImageLinks`

---
*Example 1:*

```sqf
call BIS_fnc_importImageLinks;
```