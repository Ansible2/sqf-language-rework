Returns `true` if given `serverCommand` is available on current machine, `false` if not. Here is the general table of availability of Arma 3 server commands:
<br><br>
* `Available to anyone`
<blockquote>**#login}}, <See hl Reference userlist>, <See hl Reference beclient>, {{hl| #vote**</blockquote>
* `Available to any `admin` (voted in / logged in) or `server` host`
<blockquote>**#kick}}, {{hl|#debug**</blockquote>
* `Available to logged in `admin` or `server` host`
<blockquote>**#lock}}, <See hl Reference unlock>, <See hl Reference maxping>, <See hl Reference maxdesync>, {{hl|#maxpacketloss**</blockquote>
* `Available to any `admin` (voted in / logged in)`
<blockquote>**#logout}}, <See hl Reference restart>, <See hl Reference mission>, <See hl Reference missions>, <See hl Reference reassign>, <See hl Reference monitor>, {{hl|#init**</blockquote>
* `Available to logged in `admin``
<blockquote>**#shutdown}}, <See hl Reference restartserver>, <See hl Reference exec>, <See hl Reference beserver>, <See hl Reference monitords>, <See hl Reference logentities>, {{hl|#exportjipqueue**</blockquote>
* `Available to logged in `admin` on certain game builds`
<blockquote>**#captureframe}}, <See hl Reference enabletest>, {{hl|#disabletest**</blockquote>
To check if server command could be executed in current environment use `serverCommandExecutable`. For more information on what each server command does, see `Multiplayer Server Commands`.<br><br>
`NOTE`: When password variant of `serverCommand` is used on dedicated server, the table above does not apply as everything is available to it.


---
*Syntaxes:*

`serverCommandAvailable` command

---
*Example 1:*

```sqf
_can = serverCommandAvailable "#kick";
```

*Example 2:*

```sqf
if (serverCommandAvailable "#logout") then 
{
	hint "You are a some sort of admin";
};
```