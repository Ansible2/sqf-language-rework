A non-existent `Team Member`. To compare non-existent team members use `isNull` or `isEqualTo`:

```sqf
teamMemberNull == teamMemberNull;			// false
isNull teamMemberNull;						// true
teamMemberNull isEqualTo teamMemberNull;	// true
```


---
*Syntaxes:*

`teamMemberNull`

---
*Example 1:*

```sqf
!isNull teamMemberNull; // false
```

*Example 2:*

```sqf
str teamMemberNull; // <NULL - team member>
```

*Example 3:*

```sqf
if (_teamMember isEqualTo teamMemberNull) then
{
	hint "team member is null";
};
```