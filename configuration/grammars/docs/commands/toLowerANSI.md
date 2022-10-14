Converts the supplied string to all lower case characters fast (could be 3&times; faster than `toLower`).
[https://stackoverflow.com/questions/701882/what-is-ansi-format/701920 ANSI] in this case refers to {{Wikipedia|ISO/IEC_8859-1|ISO-8859-1}} code page.
The command is primary designed to convert characters with ` codes` 0...127 however it will also convert other characters in 128...255 range as long as they are present in ISO-8859-1 codepage.
For Unicode alternative see `toLower`.


---
*Syntaxes:*

`toLowerANSI` string

---
*Example 1:*

```sqf
hint toLowerANSI "AaBb1"; // returns "aabb1"
```