A getter for `enableSentences`.


---
*Syntaxes:*

`sentencesEnabled`

---
*Example 1:*

```sqf
if (sentencesEnabled) then
{
	hint "sentences are enabled; changing that now";
	enableSentences false;
};
```