Composes a string containing other variables or other variable types. Converts any variable type to a string. If you want to convert a string back to a number, use `parseNumber`.


---
*Syntaxes:*

`format` [formatString, var1, var2, ...]

---
*Example 1:*

```sqf
format ["Player:%1, player's side:%2", player, side player]; // returns "Player:WEST 1-1-A:1 (Username), player's side:WEST"
```

*Example 2:*

```sqf
player addEventHandler ["HandleDamage", {
	hint format ["You just sustained %1%2 damage!", ceil ((_this select 2) * 100), "%"];
}]; // Shows "You just sustained 20% damage!"
```