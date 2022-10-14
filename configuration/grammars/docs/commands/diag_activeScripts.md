Returns 4 element array with numbers of currently running scripts in format: [<nowiki/>`spawn`-ed, `execVM`-ed, `exec`-ed, `execFSM`-ed]


---
*Syntaxes:*

`diag_activeScripts`

---
*Example 1:*

```sqf
hint str diag_activeScripts; //[0,0,0,1]
```