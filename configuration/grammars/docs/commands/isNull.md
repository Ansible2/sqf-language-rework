Checks whether the tested item is null.<br>
Which null type the item has to be equal to depends on the type of game entity tested:


---
*Syntaxes:*

`isNull` entity

---
*Example 1:*

```sqf
if (isNull obj) then
{
	hint "obj variable is defined but obj is null";
};
```

*Example 2:*

`Diary Record` support before {{GVI|arma3|2.00}}:

```sqf
private _nullRecord = objNull createDiaryRecord []; // wrong parameters = failure to create a record = null value
private _createdRecord = player createDiaryRecord ["Diary", ["title", "description"]];
if (_createdRecord isEqualTo _nullRecord) then { hint "Failed" };
```

`Team Member` support before {{GVI|arma3|2.10}}:

```sqf
private _isNull = _teamMember isEqualTo teamMemberNull;
```