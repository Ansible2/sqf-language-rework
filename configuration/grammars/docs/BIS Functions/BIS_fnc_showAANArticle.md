Show an AAN article.


---
*Syntaxes:*

[arrayOfArrays, display, fade] call `BIS_fnc_showAANArticle`

---
*Example 1:*

```sqf
[ 
	[ 
		["title","My Title"], 
		["meta",["Katherine Bishop",[2035,2,24,11,38],"CET"]], 
		["textbold","This is a bold text"], 
		["image",["\a3\Missions_F_Orange\Data\Img\orange_overview_ca.paa","Some image description"]], 
		["box",["\a3\Missions_F_Orange\Data\Img\Faction_IDAP_overview_CA.paa","You won't believe how playing Showcase Laws of War can change your life!"]], 
		["text","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt pretium ultricies. Etiam ac ornare est, quis posuere nisl. Mauris facilisis lectus eu turpis maximus consequat. Donec ut metus nec risus tristique mattis. Ut posuere rutrum tellus, ut molestie orci mattis id. Cras ultrices euismod diam, in venenatis nunc commodo eget. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi congue dolor rutrum lectus euismod, ac faucibus magna molestie. Aliquam in libero sit amet eros sagittis tristique. Nam pellentesque dignissim aliquam."], 
		["textlocked",["Sed non est risus. Nulla condimentum at leo sed bibendum. Phasellus laoreet sit amet leo tincidunt consequat. Curabitur nec hendrerit purus. Nam massa nisi, mattis in aliquet consectetur, ornare eget nibh. Nunc dignissim, nibh sit amet ultrices tincidunt, mi nulla fermentum quam, non condimentum dolor eros vulputate massa.","SUBSCRIBE PLZ"]], 
		["author",["\a3\Missions_F_Orange\Data\Img\avatar_journalist_ca.paa","Katherine Bishop is a journalist"]] 
	]
] call BIS_fnc_showAANArticle;
```