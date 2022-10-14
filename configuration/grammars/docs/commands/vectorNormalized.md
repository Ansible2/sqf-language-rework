Returns normalized vector (unit vector, `vectorMagnitude` {{=}}{{=}} 1) of given vector. If given vector is 0 result is a 0 vector as well.


---
*Syntaxes:*

`vectorNormalized` vector

---
*Example 1:*

```sqf
vectorNormalized [12345,7890,38383]; // [0.300481,0.192045,0.934254]
vectorMagnitude [0.300481,0.192045,0.934254]; // 1
```