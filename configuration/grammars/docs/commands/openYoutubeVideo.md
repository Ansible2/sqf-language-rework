Opens Steam overlay with given YT video. Video URL is the end part of the YT URL, starting with `watch?v=...`. If the user has Steam overlay disabled, the command will display appropriate message to the user and return `false`.


---
*Syntaxes:*

`openYoutubeVideo` youTubeUrl

---
*Example 1:*

```sqf
// open http://www.youtube.com/watch?v=UBIAbm7Rt78
_isOpened = openYoutubeVideo "watch?v=UBIAbm7Rt78";
```