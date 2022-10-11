Converts the supplied string to all upper case characters fast (could be 3x faster than `toUpper`).
[https://stackoverflow.com/questions/701882/what-is-ansi-format/701920 ANSI] in this case refers to {{Wikipedia|ISO/IEC_8859-1|ISO-8859-1}} code page.
The command is primary designed to convert characters with ` codes` 0...127 however will also convert other characters in 128...255 range as long as they are present in ISO-8859-1 codepage.
For Unicode alternative see `toUpper`.


---
*Example 1:*
```sqf
hint toUpperANSI "AaBb1"; // returns "AABB1"
```