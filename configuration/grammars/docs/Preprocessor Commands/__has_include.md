#### Description:
Checks if given file exists. Returns 1 if it does, 0 if it does not exist.

#### WARING:
- The file path must start with the backslash `\` otherwise it would fail silently (returns 0 so does nothing unless you put something in #else)!
- If you wanted to make an addon that can change its config dynamically depending on mods that loaded along, do not binarize the config.cpp!

#### NOTE:
- To validate that the file exists in your game (in script files), you can use `fileExists` command to check.
```sqf
fileExists "\a3\data_f\config.bin"; // returns true
fileExists "\z\ace\addons\main\script_component.hpp"; // returns true if ACE is loaded, false otherwise
```

```cpp
#if __has_include("\z\ace\addons\main\script_component.hpp")
// File exists! Do something with it
#else
// File does not exist
#endif
```