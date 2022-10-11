Returns the negation of a Boolean expression. This means **`true`}} becomes {{hl|`false`** and vice versa.


---
*Example 1:*
The code

```sqf
private _isAlive = alive player;
if (!_isAlive) then
{
	hint "The player is dead!";
};
```
is the same as

```sqf
private _isAlive = alive player;
if (not _isAlive) then
{
	hint "The player is dead!";
};
```