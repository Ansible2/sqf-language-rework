Changes the waves value smoothly during the given time (in seconds). A time of zero means there will be an immediate change.<br><br>
`NOTE`: This command will have no effect (even though the value of `waves` changes) unless **Manual Override** option is selected in the editor in the Intel, which is normally off.<br><br>
[[Image:setWaves.jpg|left|600px]]


---
*Example 1:*
```sqf
180 setWaves .5;
```

*Example 2:*
```sqf
0 setWaves 1;
```