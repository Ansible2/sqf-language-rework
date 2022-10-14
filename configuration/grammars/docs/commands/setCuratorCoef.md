Sets coef for some action (coef have to be bigger than -1 000 000, anything lower is considered as disabled action).


---
*Syntaxes:*

curatorObj `setCuratorCoef` [action, coef]

---
*Example 1:*

```sqf
curatorModule setCuratorCoef ["Place", 1];
```

*Example 2:*

```sqf
curatorModule setCuratorCoef ["Delete", -1e10];
```