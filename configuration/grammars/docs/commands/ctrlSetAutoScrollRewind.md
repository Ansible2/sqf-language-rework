Defines if scroll should rewind when auto-scroll reach end. Setter for `ctrlAutoScrollRewind`.
<br><br>
Autorscroll is available for `CT_LISTBOX` and `CT_CONTROLS_GROUP` types of controls only. Autoscroll will wait `ctrlAutoScrollDelay` seconds (must be  > 0) and then will scroll the scroll bar down to the bottom. `ctrlAutoScrollSpeed` defines the speed with which scrollbar is scrolled. If `ctrlAutoScrollRewind` is `true`, the control will fade out, immediately rewind to the top, then fade in, wait `ctrlAutoScrollDelay` seconds and then repeat the scrolling in a loop. If user focuses on the control, autoscrolling is interrupted.


---
*Example 1:*
```sqf
_ctrlGroup ctrlSetAutoScrollRewind true;
```