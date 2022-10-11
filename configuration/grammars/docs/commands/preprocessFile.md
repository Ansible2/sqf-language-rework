Reads and processes the content of the specified file. Preprocessor is C-like, supports comments using // or /* and */ and `PreProcessor Commands`. Due to the hard-drive access this command executes and the lack of caching this command should not be used in time-critical script loops.


---
*Example 1:*
```sqf
_content = preprocessFile "myFunction.sqf";
```