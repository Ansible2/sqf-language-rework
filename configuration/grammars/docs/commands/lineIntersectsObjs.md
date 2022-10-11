Returns a list of objects intersected by the line from `begPos` to `endPos`.


---
*Example 1:*
```sqf
Sto = [];
Fn = {
  {
	Sto set [_foreachindex,lineIntersectsObjs [(eyePos player),(ATLToASL screenToWorld [0.5,0.5]),objNull,objNull,false,_x]];
  } forEach [1,2,4,8,16,32];
  hintSilent format ["
  ONLY_WATER: %1, 
  NEAREST_CONTACT: %2, 
  ONLY_STATIC: %3, 
  ONLY_DYNAMIC: %4,
  FIRST_CONTACT: %5,
  ALL_OBJECTS: %6",
  Sto select 0,Sto select 1,Sto select 2,Sto select 3,Sto select 4,Sto select 5];
};
["sample_id","onEachFrame","Fn"] call BIS_fnc_addStackedEventHandler;
//Example display objects' array in the middle of the screen sorted by 6 flags
```