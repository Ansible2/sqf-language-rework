Sets the group radio callsign, how it will be displayed in radio chat. Two groups on the same side `cannot` have the same callsign (possible on different sides) - see {{HashLink|#Example 4}}.<br>
The identity setup can consist of format keywords (marked with `%`) and param keywords taken from `CfgWorlds` config.
Formatting is almost like using the `format` command but with some special group keywords (see {{HashLink|#Example 2}}).
<br>
<spoiler text="Show Arma 3 values table">
{{{!}} class="wikitable"
! %GroupSquad
! %GroupPlatoon
! %GroupCompany
! %GroupNames
! %GroupColors
{{!}}- style="vertical-align: top"
{{!}}
* "Squad1" &rarr; 1
* "Squad2" &rarr; 2
* "Squad3" &rarr; 3
* "Squad4" &rarr; 4
{{!}}
* "Platoon1" &rarr; 1
* "Platoon2" &rarr; 2
* "Platoon3" &rarr; 3
* "Platoon4" &rarr; 4
{{!}}
{{Columns|2|
* "CompanyAlpha" &rarr; Alpha
* "CompanyBravo" &rarr; Bravo
* "CompanyCharlie" &rarr; etc.
* "CompanyDelta"
* "CompanyEcho"
* "CompanyFoxtrot"
* "CompanyGolf"
* "CompanyHotel"
* "CompanyIndia"
* "CompanyKilo"
* "CompanyLima"
* "CompanyMike"
* "CompanyNovember"
* "CompanyOscar"
* "CompanyPapa"
* "CompanyQuebec"
* "CompanyRomeo"
* "CompanySierra"
* "CompanyTango"
* "CompanyUniform"
* "CompanyVictor"
* "CompanyWhiskey"
* "CompanyXray" &rarr; X-Ray
* "CompanyYankee"
* "CompanyZulu"


---
*Example 1:*
`<See arm Reference 3>`:

```sqf
group player setGroupId ["Some name for the group"];
hint groupId group player;	// "Some name for the group"
player sideChat "lalala";	// Some name for the group (KK): "lalala"
```

*Example 2:*
`<See arm Reference 3>`:

```sqf
group player setGroupId ["%GroupNames :=: %GroupColors", "Alpha", "GroupColor2"];
hint groupId group player;	// "Alpha :=: Red"
player sideChat "lalala";	// Alpha :=: Red (KK): "lalala"
```

*Example 3:*
`<See arm Reference 1> / <See arm Reference 2> / <See arm Reference 3>`:

```sqf
group player setGroupId ["First Assault Recon Team"];
```
`<See o Reference p>`:

```sqf
_group1 setGroupId ["Delta", "GroupColor4"]
```

*Example 4:*
When trying to apply the same callsign to two groups of the same side, the callsigns will simply be swapped, e.g:

```sqf
group1 setGroupId ["Active Group"];
group2 setGroupId ["Inactive Group"];
group2 setGroupId ["Active Group"]; // group1 is "Inactive Group" now
```