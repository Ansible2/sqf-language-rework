Sets wanted transparency for control animation. Requires `ctrlCommit` to commit changes. To hide or show a control instantly, use `ctrlShow`.


---
*Syntaxes:*

controlName `ctrlSetFade` fade

---
*Example 1:*

```sqf
_control ctrlSetFade 1;
_control ctrlCommit 5;
```