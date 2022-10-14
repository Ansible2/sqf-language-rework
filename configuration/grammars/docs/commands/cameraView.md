Returns mode of active camera view. Mode is one of: 
* "INTERNAL" (1st person)
* "EXTERNAL" (3rd person)
* "GUNNER" (optics / sights)
* "GROUP" (commander view)


---
*Syntaxes:*

`cameraView`

---
*Example 1:*

```sqf
if (cameraOn == _vehicle && cameraView == "External") then
{
  _vehicle switchCamera "Internal";
};
```