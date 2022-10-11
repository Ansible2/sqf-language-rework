Captures a screenshot and stores it to given filename. <u>PNG is the only available format</u> and the file must have .png extension.<br><br>
The file is saved into `Screenshots` folder in the `Profile` directory. The folder is by default limited to 250 MB to prevent abuse.<br>
To increase the limit, add the following line at the end of the profile file:
<syntaxhighlight lang="cpp">maxScreenShotFolderSizeMB = 2000; // 2 GB</syntaxhighlight>


---
*Example 1:*
```sqf
screenshot "";
```

*Example 2:*
```sqf
screenshot "testFile.png";
```

*Example 3:*
The following code will result in the screenshot being placed in **\Documents\Arma 3\Screenshots\`any\where\you\want.png`**

```sqf
screenshot "any\where\you\want.png";
```