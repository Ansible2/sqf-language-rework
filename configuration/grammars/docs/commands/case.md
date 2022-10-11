This command is used inside a `switch` construct. <br>Although the syntax below states that this operator takes only one argument, that is most likely not true. It seems like it needs two arguments of which the left one is some sort of hidden variable that gets defined inside a `switch` construct. That is the reason why <b>this operator can not be used outside a `switch` construct</b>. (see https://foxhound.international/arma-3-sqf-grammar.html for further explaination)<br>
Also note that it is not possible to store the returned `Switch Type` in a variable and use that variable in another `switch` construct. It will never lead to an execution of the corresponding code block.


---
*Example 1:*
```sqf
switch (_condition) do
{
	case 1: { hint "1" };
	case 2: { hint "2" };
	default { hint "default" };
};
```