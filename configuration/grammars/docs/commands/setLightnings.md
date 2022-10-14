Changes the lightnings value smoothly during the given time (in seconds). A time of zero means there will be an immediate change.<br><br>
`NOTE`: This command will have no effect (even though the value of `lightnings` changes) unless **Manual Override** option is selected in the editor in the Intel, which is normally off.<br><br>
[[Image:setLightnings.jpg|left|600px]]


---
*Syntaxes:*

time `setLightnings` value

---
*Example 1:*

```sqf
1800 setLightnings 0.7;
```