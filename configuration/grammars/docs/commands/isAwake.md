Returns resting state of a PhysX (EPE) object. Some EPE objects are deliberately put to sleep by the engine to save resources. This command returns `true` when object is simulating and `false` when it is put to sleep. With units of type **Man** the behaviour is slightly different. As units never get put to sleep, the command outputs ragdoll state of a unit instead. There are 6 states for the output of the command:
* EPE object is simulaing - `true`
* EPE object is put to sleep - `false`
* Unit is `alive`, ragdoll is active - `false`
* Unit is `alive`, ragdoll is NOT active - `true`
* {{GVI|arma3|2.10}} Unit is NOT `alive`, ragdoll is active - `true`
* {{GVI|arma3|2.10}} Unit is NOT `alive`, ragdoll is NOT active - `false`
It may look counter-intuitive but there is a simple formula to return ragdoll state of a unit (since {{GVI|arma3|2.10}}):

```sqf
private _unitIsInRagdoll = alive _unit != isAwake _unit;
```


---
*Syntaxes:*

`isAwake` object

---
*Example 1:*

```sqf
private _isAwake = isAwake _object;
```