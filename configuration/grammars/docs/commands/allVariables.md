Returns a list of all variables from desired namespace. Namespaces supported:<br>
*`Control` - `Since <See arm Reference 3> v2.01`
*`Display` - `Since <See arm Reference 3> v2.01`
*`Team Member`
*`Namespace`
*`Object`
*`Group`
*`Task`
*`Location`


---
*Syntaxes:*

`allVariables` namespace

---
*Example 1:*

```sqf
_allVarsUINamespace = allVariables uiNamespace;
```

*Example 2:*

```sqf
_allVarsTrigger = allVariables trigger1;
```