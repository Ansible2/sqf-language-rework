Sets Render Target's visual effect (Picture-in-Picture). 
* 0: Normal - [0]
* 1: Night Vision - [1]
* 2: Thermal - [2]
* 3: `Color Correction` - [3, enabled, brightness, contrast, offset, blend [r,g,b,a], lerp [r,g,b,a], rgb [r,g,b,a]]
* 4: Mirror - [4] `<currently not working>`
* 5: `Chromatic Aberration` - [5, enabled, powerx, powery, (bool) aspectCorrection] `<currently not working>`
* 6: ` Film Grain` - [6, enabled, intensity, sharpness, grainsize, intensityx1, intensityx2, (bool) monochromatic] `<currently not working>`
* 7: Thermal Inverted [7]
* 8: Green Thermal [8]


---
*Syntaxes:*

name `setPiPEffect` [effect, optionalParam1, ..., optionalParamN]

---
*Example 1:*

```sqf
"rendersurface" setPiPEffect [0];
```

*Example 2:*

```sqf
"rendertarget0" setPiPEffect [3, 1.0, 1.0, 1.0, 0.0, [0.0, 1.0, 0.0, 0.25], [1.0, 0.0, 1.0, 1.0],  [0.199, 0.587, 0.114, 0.0]];
```

*Example 3:*

```sqf
cam = "camera" camCreate (player modelToWorld [0,-5,2]);
cam cameraEffect ["internal","back","rtt"];
"rtt" setPiPEffect [2];
with uiNamespace do {
	pic = findDisplay 46 ctrlCreate ["RscPicture", -1];
	pic ctrlSetPosition [0,0,1,1];
	pic ctrlCommit 0;
	pic ctrlSetText "#(argb,512,512,1)r2t(rtt,1.0)";
};
```

*Example 4:*

Black & White:

```sqf
"rtt" setPiPEffect [3,1,1,0.4,0, [0,0,0,0], [1,1,1,0], [1,1,1,1]];
```