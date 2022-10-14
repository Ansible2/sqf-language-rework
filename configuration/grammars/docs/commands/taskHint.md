Shows info about new, changed or failed task. The text can contain several lines. **\n** is used to set a line return.


---
*Syntaxes:*

`taskHint` [text, colour, icon]

---
*Example 1:*

```sqf
taskHint ["Task failed.\nBad job!", [1, 0, 0, 1], "taskFailed"];
```