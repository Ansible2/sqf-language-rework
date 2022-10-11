<syntaxhighlight lang="html"></syntaxhighlight><!-- needed for spoiler to have it -->
Creates a `diary` entry. Supported tags and their parameters: <spoiler>
{


---
*Example 1:*
```sqf
player createDiaryRecord ["Diary", ["Intel", "Enemy base is on grid <marker name='enemyBase'>161170</marker>"]]
```

*Example 2:*
```sqf
player createDiaryRecord ["Diary", "Information gathered.<br /><img image='wellDone_ca.paa' />"]
```

*Example 3:*
```sqf
player createDiaryRecord ["Diary", ["No Title", "description"], taskNull, "", false];
```

*Example 4:*
```sqf
player createDiaryRecord ["Diary", ["Font tag","<font color='#7FFF00' size='30' face='TahomaB'>This will changed text size, colour and font</font>"], taskNull, "",false];
```

*Example 5:*
```sqf
player createDiaryRecord ["Diary", ["Image", "<img image='\A3\Ui_F_Curator\Data\Logos\arma3_curator_artwork.jpg' width='500' height='800'/>"], taskNull, "", false];
```

*Example 6:*
```sqf
player createDiaryRecord ["Diary", ["Linebreak","Line1<br></br>Line2<br></br><br></br>Line4"], taskNull, "", false];
```

*Example 7:*
```sqf
player createDiaryRecord ["Diary", ["Execute","<execute expression='hint ""Some code"";'>Some text</execute>"], taskNull, "", false];
```

*Example 8:*
```sqf
player createDiaryRecord ["Diary", ["ExecuteClose", "<executeClose expression=""hint 'Diary closed';"">Close Diary</executeClose>"], taskNull, "", false];
```