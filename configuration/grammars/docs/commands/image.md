Creates a structured text containing the given image. Use `setAttributes` to set additional ` attributes` on the image.


---
*Syntaxes:*

`image` filename

---
*Example 1:*

```sqf
hint composeText ["Image: ", image "\a3\Data_f\Flags\flag_Altis_co.paa"];
```

*Example 2:*

```sqf
hint str (composeText ["Image: ", image "\a3\Data_f\Flags\flag_Altis_co.paa"] == parseText "Image: <img image='\a3\Data_f\Flags\flag_Altis_co.paa'/>"); // true
```