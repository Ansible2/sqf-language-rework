Opens "capture frame" dialog if current frame exceeds set threshold in seconds. One can indicate to either capture duration of a specific profiling selection or the total duration of the frame. The selection names can be obtained by expanding the profiling tree. Clicking on a tree item will highlight the item on the graph and vice versa. The GUI also provides method of copying of the displayed data to clipboard. Some of the selections:


---
*Example 1:*
```sqf
diag_captureSlowFrame ['total',0.003];
```

*Example 2:*
```sqf
diag_captureSlowFrame ['memAl', 0.0001];
```