A simple if-then construction to check whether a certain set of definitions has already been made:

```cpp
#ifdef NAME
	// ...text that will be used if "NAME" is defined...
#endif
```

IFDEFs cannot be nested. The preprocessor will generate errors for all inner definitions if the outer definition doesn't exist.