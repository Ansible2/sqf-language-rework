#### Description:
Copies the code from a target file and pastes it where #include directive is.

```cpp
#include "file.hpp"
// Brackets are equivalent to quotation marks and may be used in their place.
#include <file.txt> 
```

Source directory is:
- For any file without starting the include path with \ - the file's current directory
- When starting with \ - the internal filesystem root (see Addon Development) or the Game's working directory (only with `-filePatching` enabled)

<br>

#### Path Definitions:
A path beginning can be defined as follow:

- drive (only with -filePatching enabled):
```cpp
#include "D:\file.txt"
```

- PBO with PBOPREFIX:
```cpp
#include "\myMod\myAddon\file.txt"
```

- PBO (keep in mind that in this case, if the PBO's file name will be changed, all `#include` referencing it will need to be updated):
```cpp
// Arma 3\@myMod\addons\myAddon.pbo\file.txt;
#include "\myMod\myAddon\file.txt"
```

To move to parent directory use `..` (two dots) (Supported since Arma 3 1.50)
```cpp
#include "..\file.sqf"
```

Preprocessor does not support the use of macros for pre-defined file names.
```cpp
#define path "codestrip.txt"
#include path // this will cause an error
```