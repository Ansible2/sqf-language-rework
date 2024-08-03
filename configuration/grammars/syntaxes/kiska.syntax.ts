import { SQFItemConfig } from "../sqf.namespace";

export const configs: SQFItemConfig[] = [
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_AAAZone.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _radius, _checkTime] spawn `KISKA_fnc_AAAZone`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": ": *(OBJECT)* - The AAA piece"
                        },
                        {
                            "name": "_radius",
                            "description": ": *(NUMBER)* - How far out the turret is alerted to"
                        },
                        {
                            "name": "_checkTime",
                            "description": ": *(NUMBER)* - How often does the AAA scan the area for targets"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[myVehicle] spawn KISKA_fnc_AAAZone;\n```"
                }
            ],
            "description": "Sets up a zone that when entered by an enemy aircraft, the provided vehicle will engage.\nOtherwise, vehicle will stay the same."
        },
        "configuration": {
            "label": "KISKA_fnc_AAAZone",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/ACE/fn_ACE_addSupportMenuAction.sqf",
            "syntaxes": [
                {
                    "outline": "[_player] spawn `KISKA_fnc_ACE_addSupportMenuAction`",
                    "parameters": [
                        {
                            "name": "_player",
                            "description": "*(OBJECT)* - The player object"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nPRE-INIT Function\n```"
                }
            ],
            "description": "Adds the ACE action to a player object that allows them to self interactand pull up the support menu."
        },
        "configuration": {
            "label": "KISKA_fnc_ACE_addSupportMenuAction",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/ACE/Fast Rope/fn_ACE_deployFastRope.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _unitsToDeploy, _ropeOrigins] call `KISKA_fnc_ACE_deployFastRope`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to fastrope from"
                        },
                        {
                            "name": "_unitsToDeploy",
                            "description": "*(ARRAY)* - An array of units to drop from the _vehicle.This function has a destructive effect on this array (deletes entries)"
                        },
                        {
                            "name": "_ropeOrigins",
                            "description": "*(ARRAY)* - An array of either relative (to the vehicle) attachmentpoints for the ropes or a memory point to attachTo"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    _vehicle,\n    (fullCrew [_vehicle,\"cargo\"]) apply {\n        _x select 0\n    }\n] call KISKA_fnc_ACE_deployFastRope;\n```"
                }
            ],
            "description": "An edit of the ACE function to allow for custom drop of units."
        },
        "configuration": {
            "label": "KISKA_fnc_ACE_deployFastRope",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/ACE/Fast Rope/fn_ACE_deployRopes.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _ropeOrigins] call `KISKA_fnc_ACE_deployRopes`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to fastrope from"
                        },
                        {
                            "name": "_ropeOrigins",
                            "description": "*(ARRAY)* - An array of either relative (to the vehicle) attachmentpoints for the ropes or a memory point to attachTo"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[heli] call KISKA_fnc_ACE_deployRopes;\n```"
                }
            ],
            "description": "An edit of ace_fastroping_fnc_deployRopes to allow for custom drop of units."
        },
        "configuration": {
            "label": "KISKA_fnc_ACE_deployRopes",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/ACE/Fast Rope/fn_ACE_fastRope.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _dropPosition, _unitsToDeploy, _afterDropCode, _hoverHeight, _ropeOrigins] call `KISKA_fnc_ACE_fastRope`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to fastrope from"
                        },
                        {
                            "name": "_dropPosition",
                            "description": "*(ARRAY or OBJECT)* - The positionASL to drop the units off at; Z coordinatematters"
                        },
                        {
                            "name": "_unitsToDeploy",
                            "description": "*(CODE, STRING, ARRAY, OBJECT[], GROUP, or OBJECT)* - An array of units to drop from the _vehicle,Or code that will run once the helicopter has reached the drop point that must return an array of object\n    (see KISKA_fnc_callBack for examples)\nParameters:\n    - 0: _vehicle - The drop vehicle"
                        },
                        {
                            "name": "_afterDropCode",
                            "description": "*(CODE, STRING or ARRAY)* - Code to execute after the drop is complete, see KISKA_fnc_callBack\n \n    Parameters:\n    - 0: _vehicle - The drop vehicle"
                        },
                        {
                            "name": "_hoverHeight",
                            "description": "*(NUMBER)* - The height the helicopter should hover above the drop positionwhile units are fastroping. Max is 28, min is 5"
                        },
                        {
                            "name": "_ropeOrigins",
                            "description": "*(ARRAY)* - An array of: either relative (to the vehicle) attachmentpoints for the ropes and/or memory points to attachTo"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n//  basic example\n[\n    _vehicle,\n    _position,\n    (fullCrew [_vehicle,\"cargo\"]) apply {\n        _x select 0\n    },\n    {hint \"fastrope done\"},\n    28,\n    [[0,0,0]]\n] call KISKA_fnc_ACE_fastRope;\n```"
                },
                {
                    "text": "```sqf\n// using code instead to defer the list of units to drop\n// until the helicopter is over the drop point\n[\n    _vehicle,\n    _position,\n    {\n        params [\"_vehicle\"];\n\n        (fullCrew [_vehicle,\"cargo\"]) apply {\n            _x select 0\n        }\n    },\n    {hint \"fastrope done\"},\n    28,\n    [[0,0,0]]\n] call KISKA_fnc_ACE_fastRope;\n```"
                }
            ],
            "description": "Sends a vehicle to a given point and fastropes the given units from the helicopter.\nPilots should ideally be placed in \"CARELESS\" behaviour when around enemies."
        },
        "configuration": {
            "label": "KISKA_fnc_ACE_fastRope",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/ACE/Fast Rope/fn_ACE_setOnPrepareFastrope.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _onPrepare] call `KISKA_fnc_ACE_setOnPrepareFastrope`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to fastrope from"
                        },
                        {
                            "name": "_onPrepare",
                            "description": "*(CODE, ARRAY, or STRING)* - A function that returns a numberbeing the time it takes for the ropes to deploy from the given vehicle\n    (SEE KISKA_fnc_callBack for array syntax).\n \n    Args:\n        - 0. *(OBJECT)* - The helicopter conducting a fastrope"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    _vehicle,\n    {4} // takes 4 seconds to lower ropes\n] call KISKA_fnc_ACE_setOnPrepareFastrope;\n```"
                }
            ],
            "description": "Sets the onprepare function of a specific vehicle when it conducts fastropingwith KISKA_fnc_fastRope (not any other implementation of ACE fastroping).\n \nBy default, ACE uses a config value (on the vehicle's class) of a string that is the name of the function to call. This function will overwrite that config function or add support for vehicles that do not have an onPrepare function defined.\nThe onPrepare function is what happens just prior to the helicopter droppingits ropes. You may want to do something like openning the vehicles doors beforethe units fastrope, for example.\n \nYour new onPrepare function can return a number that will then be used as thetime it takes for the ropes to be lowered down from the helicopter \n (the default is 4 seconds)."
        },
        "configuration": {
            "label": "KISKA_fnc_ACE_setOnPrepareFastrope",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/ACE/fn_ACE_unconsciousIsCaptive.sqf",
            "syntaxes": [
                {
                    "outline": "spawn `KISKA_fnc_ACE_unconsciousIsCaptive`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nPOST-INIT Function\n```"
                }
            ],
            "description": "Adds a CBA event that hooks into when a player becomes unconcious, making themturn captive in order to keep the AI from shooting downed players."
        },
        "configuration": {
            "label": "KISKA_fnc_ACE_unconsciousIsCaptive",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/ACEX/fn_ACEX_setHCTransfer.sqf",
            "syntaxes": [
                {
                    "outline": "[_unit, _setting] call `KISKA_fnc_ACEX_setHCTransfer`",
                    "parameters": [
                        {
                            "name": "_unit",
                            "description": "*(GROUP or OBJECT)* - The unit to blacklist"
                        },
                        {
                            "name": "_setting",
                            "description": "*(BOOL)* - The blacklist value to set (true to blacklist, false to allow transfer)"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// disable transfer\n[someGroup,true] call KISKA_fnc_ACEX_setHCTransfer;\n```"
                },
                {
                    "text": "```sqf\n// enable transfer\n[someGroup,false] call KISKA_fnc_ACEX_setHCTransfer;\n```"
                }
            ],
            "description": "Simply sets the blacklist variable of a given unit from being transferred by theACEX headless client module. Variable is set on the server."
        },
        "configuration": {
            "label": "KISKA_fnc_ACEX_setHCTransfer",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_addArsenal.sqf",
            "syntaxes": [
                {
                    "outline": "[_arsenals] call `KISKA_fnc_addArsenal`",
                    "parameters": [
                        {
                            "name": "_arsenals",
                            "description": "*(ARRAY or OBJECT)* - An array of objects or a single one to add arsenals to"
                        }
                    ],
                    "returns": "*(BOOL)* - True if arsenal added, false if not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[[arsenal1, arsenal2]] call KISKA_fnc_addArsenal;\n```"
                }
            ],
            "description": "Adds both BIS and ACE arsenals to several or a single object.This has a global effect."
        },
        "configuration": {
            "label": "KISKA_fnc_addArsenal",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_addCommMenuItem.sqf",
            "syntaxes": [
                {
                    "outline": "[_owner, _itemClass, _textArguements, _expressionArguments, _notification, _addToHash] call `KISKA_fnc_addCommMenuItem`",
                    "parameters": [
                        {
                            "name": "_owner",
                            "description": "*(OBJECT)* - The person to add the support to"
                        },
                        {
                            "name": "_itemClass",
                            "description": "*(STRING)* - The class as defined in the CfgCommunicationMenu"
                        },
                        {
                            "name": "_textArguements",
                            "description": "*(ANY)* - Any arguements to pass to the text displayed in the menu"
                        },
                        {
                            "name": "_expressionArguments",
                            "description": "*(ANY)* - Any arguements to pass to the expression"
                        },
                        {
                            "name": "_notification",
                            "description": "*(STRING)* - The class of notification to display when added"
                        },
                        {
                            "name": "_addToHash",
                            "description": "*(BOOL)* - Add to KISKA_playersSupportMap"
                        }
                    ],
                    "returns": "*(NUMBER)* - The comm menu ID"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_id = [player,\"myClass\"] call KISKA_fnc_addCommMenuItem;\n```"
                }
            ],
            "description": "This is an alias of sorts of Bohemia's BIS_fnc_addCommMenuItem.It is mostly made with the purpose of using default values and specificallypassing a -1 by default to _expressionArguments.\nAlso initializes/adds entries to the KISKA_playersSupportMap which is used forkeeping track of the number of uses left on a support if they are passed betweenthe Support Manager."
        },
        "configuration": {
            "label": "KISKA_fnc_addCommMenuItem",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_addEntityKilledEventHandler.sqf",
            "syntaxes": [
                {
                    "outline": "[_entity, _event] call `KISKA_fnc_addEntityKilledEventHandler`",
                    "parameters": [
                        {
                            "name": "_entity",
                            "description": "*(OBJECT)* - The entity to add the object to"
                        },
                        {
                            "name": "_event",
                            "description": "*(CODE, STRING, or ARRAY)* - The code to execute (SEE KISKA_fnc_callBack for array syntax).Parmeters:\n\n        - 0. *(OBJECT)* - The killed entity\n        - 1. *(OBJECT)* - The killer entity (vehicle or person)\n        - 2. *(OBJECT)* - The instigator entity\n        - 3. *(BOOL)* - same as useEffects in `setDamage` alt syntax"
                        }
                    ],
                    "returns": "*(NUMBER)* - The entity killed event handler ID for the unit"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _id = [aUnit,{hint _this}] call KISKA_fnc_addEntityKilledEventHandler;\n```"
                }
            ],
            "description": "Adds a killed event handler to a given entity that will persist even if theunit becomes remote. The order of execution is not guaranteed to be in theorder added."
        },
        "configuration": {
            "label": "KISKA_fnc_addEntityKilledEventHandler",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_addKiskaDiaryEntry.sqf",
            "syntaxes": [
                {
                    "outline": "[_textEntry, _task, _taskState, _showTitle] call `KISKA_fnc_addKiskaDiaryEntry`",
                    "parameters": [
                        {
                            "name": "_textEntry",
                            "description": "*(STRING or ARRAY)* - The text entry in createDiaryRecord.If array, format is [title,description,icon]."
                        },
                        {
                            "name": "_task",
                            "description": "*(TASK)* - A task attached to the diary record"
                        },
                        {
                            "name": "_taskState",
                            "description": "*(STRING)* - The state of the task"
                        },
                        {
                            "name": "_showTitle",
                            "description": "*(BOOL)* - Whether or not to show title in the description section as well"
                        }
                    ],
                    "returns": "*(DIARY-RECORD)* - An entry in the users diary"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[[\"test title\",\"test text\"]] call KISKA_fnc_addKiskaDiaryEntry;\n```"
                }
            ],
            "description": "Used as a unified point of adding diary entries for KISKA."
        },
        "configuration": {
            "label": "KISKA_fnc_addKiskaDiaryEntry",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_addMagRepack.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_addMagRepack`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_addMagRepack;\n```"
                }
            ],
            "description": "Adds a mag repack to the player via Ctrl+R.To remove see KISKA_fnc_removeMagRepack."
        },
        "configuration": {
            "label": "KISKA_fnc_addMagRepack",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_removeMagRepack.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_addMagRepack`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_addMagRepack;\n```"
                }
            ],
            "description": "Adds a mag repack to the player via Ctrl+R.To remove see KISKA_fnc_removeMagRepack."
        },
        "configuration": {
            "label": "KISKA_fnc_addMagRepack",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_addProximityPlayerAction.sqf",
            "syntaxes": [
                {
                    "outline": "[_center, _radius, _action, _refreshInterval] call `KISKA_fnc_addProximityPlayerAction`",
                    "parameters": [
                        {
                            "name": "_center",
                            "description": ": *(OBJECT or ARRAY)* - The position the player needs to be close to.If array, format as Postion2D or PositionAGL."
                        },
                        {
                            "name": "_radius",
                            "description": ": *(NUMBER)* - The max distance the player can be from the _center toget the action."
                        },
                        {
                            "name": "_action",
                            "description": ": *(ARRAY)* - The action array used with \"addAction\" command"
                        },
                        {
                            "name": "_refreshInterval",
                            "description": ": *(NUMBER)* - How often to look to update action visibility"
                        }
                    ],
                    "returns": "*(NUMBER)* - The porximity action id to be used with KISKA_fnc_removeProximityPlayerAction\n    (-1 if failure)"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    cursorObject,\n    15,\n    [\"test\",{hint \"action\"},[]]\n] call KISKA_fnc_addProximityPlayerAction\n```"
                }
            ],
            "description": "Adds an action to the player that will be activated and deactivated when withina certain radius of a given position."
        },
        "configuration": {
            "label": "KISKA_fnc_addProximityPlayerAction",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Rally/fn_addRallyPointDiaryEntry.sqf",
            "syntaxes": [
                {
                    "outline": "spawn `KISKA_fnc_addRallyPointDiaryEntry`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nPRE-INIT Function\n```"
                }
            ],
            "description": "Adds a rally point diary entry to the local player. Pressing it enables theplayer to drop a rally point if their group is registered as allowed to andthey are the leader of the group."
        },
        "configuration": {
            "label": "KISKA_fnc_addRallyPointDiaryEntry",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_addTeleportAction.sqf",
            "syntaxes": [
                {
                    "outline": "[_objectToAddTo, _teleportPosition, _text, _conditionShow] call `KISKA_fnc_addTeleportAction`",
                    "parameters": [
                        {
                            "name": "_objectToAddTo",
                            "description": "*(OBJECT)* - The object the action will be attached to"
                        },
                        {
                            "name": "_teleportPosition",
                            "description": "*(ARRAY OR OBJECT)* - The position to be teleported to upon completion"
                        },
                        {
                            "name": "_text",
                            "description": "*(STRING)* - The action text, can be structured text"
                        },
                        {
                            "name": "_conditionShow",
                            "description": "*(STRING)* - A string that will compile into an expression thatevals to a boolean. True means that the action will be shown."
                        }
                    ],
                    "returns": "*(NUMBER)* - action id, -1 if not added"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[player,[0,0,0],\"go to the Zero\"] call KISKA_fnc_addTeleportAction;\n```"
                }
            ],
            "description": "Adds a hold action to an object to teleport to a desired location."
        },
        "configuration": {
            "label": "KISKA_fnc_addTeleportAction",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_alivePlayers.sqf",
            "syntaxes": [
                {
                    "outline": "[_noHeadless] call `KISKA_fnc_alivePlayers`",
                    "parameters": [
                        {
                            "name": "_noHeadless",
                            "description": "*(BOOL)* - Seperate Headless Clients"
                        }
                    ],
                    "returns": "_alivePlayers *(ARRAY)* - All alive players"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[true] call KISKA_fnc_alivePlayers;\n```"
                }
            ],
            "description": "FInds all alive players with or without headless clients"
        },
        "configuration": {
            "label": "KISKA_fnc_alivePlayers",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Rally/fn_allowGroupRally.sqf",
            "syntaxes": [
                {
                    "outline": "[_groupToAdd] call `KISKA_fnc_allowGroupRally`",
                    "parameters": [
                        {
                            "name": "_groupToAdd",
                            "description": "*(GROUP or OBJECT)* - The group or the unit whose group to add"
                        }
                    ],
                    "returns": "*(BOOL)* - True if allowed, false if not allowed or error"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// allows player's group to drop a rally point (if they're the server)\n[player] call KISKA_fnc_allowGroupRally;\n```"
                }
            ],
            "description": "Adds group's ability to place rally points by setting \"KISKA_canRally\" inthe group space to true."
        },
        "configuration": {
            "label": "KISKA_fnc_allowGroupRally",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Animations/fn_ambientAnim.sqf",
            "syntaxes": [
                {
                    "outline": "[_units, _animationParams, _exitOnCombat, _equipmentLevel, _animationMap] call `KISKA_fnc_ambientAnim`",
                    "parameters": [
                        {
                            "name": "_units",
                            "description": "*(OBJECT[] or OBJECT)* - An array of units or a single unit to animate"
                        },
                        {
                            "name": "_animationParams",
                            "description": "*(HASHMAP, STRING[], (STRING,NUMBER)[], or STRING)* - This can be three things:\n \n    - If a string, a single animation set that is located in the `_animationMap`\n    - If an array, you can have weighted or unweighted array of strings that are random animation sets to select from\n    - lastly, you can have a HASHMAP setup for snap to animations:\n \n        - `_animSet` *(STRING[], (STRING,NUMBER)[], or STRING)* - A single snapto animation set or weighted/unweighted array to randomly select from.\n        - `_snapToRange` *(NUMBER)* - This is how far will be searched around the unit to find an object to \"snap\" onto. Cannot be more then 10m.\n        - `_backupAnims` *(STRING[], (STRING,NUMBER)[], or STRING)* - Same as `_snapToAnimationSet` but for animations to use in the even that ALL of the `_snapToAnimationSet` animations fail to be used due to valid objects not being within range.\n        - `_fallbackFunction` *(CODE, ARRAY, or STRING)* - (See `KISKA_fnc_callBack`) In the event thata unit is not able to find an object to snap to AND1 no _backupAnims are present, this function will be called with thefollowing params. If you still want the unit to be animated in this case, pass `{}`, `\"\"`, or `[]`\n \n            - 0: _unit *(OBJECT)* - The unit\n            - 1: _animationParams *(STRING[], (STRING,NUMBER)[], or STRING)*\n            - 2: _exitOnCombat *(BOOL)*\n            - 3: _equipmentLevel *(STRING[], (STRING,NUMBER)[], or STRING)*\n            - 4: _animationMap *(HASHMAP or CONFIG)*"
                        },
                        {
                            "name": "_exitOnCombat",
                            "description": "*(BOOL)* - True for unit to return to the state it was in prior toKISKA_fnc_ambientAnim being called when they are enter combat behaviour."
                        },
                        {
                            "name": "_equipmentLevel",
                            "description": "*(ARRAY or STRING)* - A quick means of temporarily adjusting a unit's equipment to match a scene. Options:\n \n    - \"\": no changes\n    - \"NONE\": no goggles, headgear, vest, weapon, nvgs, backpack\n    - \"LIGHT\": no goggles, headgear, vest, backpack\n    - \"MEDIUM\": no goggles, headgear\n    - \"FULL\": no goggles"
                        },
                        {
                            "name": "_animationMap",
                            "description": "*(HASHMAP or CONFIG)* - See KISKA_fnc_ambientAnim_createMapFromConfigThis is a hashmap that will searched for information for a specific _animSetA config can be passed and will be parsed/cached."
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// exits on combat\n[\n    someUnit,\n    \"SIT_GROUND_ARMED\",\n    true\n] call KISKA_fnc_ambientAnim;\n```"
                },
                {
                    "text": "```sqf\n// use animation set SIT_CHAIR_ARMED_2 and snap\n// to objects within 10 meters of unit's position\n// if no objects that are snappable for SIT_CHAIR_ARMED_2\n// are found, unit will use SIT_GROUND_ARMED animation set\n[\n    someUnit,\n    createHashMapFromArray [\n        [\"_animSet\", \"SIT_CHAIR_ARMED_2\"],\n        [\"_snapToRange\", 10],\n        [\"_backupAnims\",\"SIT_GROUND_ARMED\"]\n    ]\n] call KISKA_fnc_ambientAnim;\n```"
                },
                {
                    "text": "```sqf\n// STAND_UNARMED_3 is 10x more likely to be used than STAND_ARMED_1\n[\n    someUnit,\n    [\n        \"STAND_ARMED_1\",1,\n        \"STAND_UNARMED_3\",10\n    ]\n] call KISKA_fnc_ambientAnim;\n```"
                }
            ],
            "description": "Provides an updated version of BIS_fnc_ambientAnim in a tighter package thatallows for more customization."
        },
        "configuration": {
            "label": "KISKA_fnc_ambientAnim",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Animations/fn_ambientAnim_isAnimated.sqf",
            "syntaxes": [
                {
                    "outline": "[_unit] call `KISKA_fnc_ambientAnim`",
                    "parameters": [
                        {
                            "name": "_unit",
                            "description": "*(OBJECT)* - A unit to check if they are using KISKA ambient anim system"
                        }
                    ],
                    "returns": "*(BOOL)* - Whether or not the unit is using KISKA's ambient animation system"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _isAnimated = [someUnit] call KISKA_fnc_ambientAnim_isAnimated;\n```"
                }
            ],
            "description": "Returns whether or not a unit is currently using Kiska's ambient animationsystem."
        },
        "configuration": {
            "label": "KISKA_fnc_ambientAnim",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Animations/fn_ambientAnim_addAttachLogicGroup.sqf",
            "syntaxes": [
                {
                    "outline": "[_logicGroup] call `KISKA_fnc_ambientAnim_addAttachLogicGroup`",
                    "parameters": [
                        {
                            "name": "_logicGroup",
                            "description": "*(GROUP)* - The group to add"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[createGroup sideLogic] call KISKA_fnc_ambientAnim_getAttachToLogicGroup;\n```"
                }
            ],
            "description": "Adds a group to the global attachTo logics map used to store them for reference."
        },
        "configuration": {
            "label": "KISKA_fnc_ambientAnim_addAttachLogicGroup",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Animations/fn_ambientAnim_getNearestAttachLogicGroup.sqf",
            "syntaxes": [
                {
                    "outline": "[_position] call `KISKA_fnc_ambientAnim_addAttachLogicGroup`",
                    "parameters": [
                        {
                            "name": "_position",
                            "description": "*(OBJECT or Position-2D)* - The position to check"
                        }
                    ],
                    "returns": "*(GROUP)* - the nearest logic group used for ambient animations"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _group = [player] call KISKA_fnc_ambientAnim_getNearestAttachLogicGroup;\n```"
                }
            ],
            "description": "Finds the nearest attach logic group used for ambient animations."
        },
        "configuration": {
            "label": "KISKA_fnc_ambientAnim_addAttachLogicGroup",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Animations/fn_ambientAnim_createMapFromConfig.sqf",
            "syntaxes": [
                {
                    "outline": "[_config] call `KISKA_fnc_ambientAnim_createMapFromConfig`",
                    "parameters": [
                        {
                            "name": "_config",
                            "description": "*(CONFIG)* - A config to parse into a hashmap"
                        }
                    ],
                    "returns": "*(HASHMAP)* - A map of the animation sets and their properties."
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _map = [\n    configFile >> \"KISKA_AmbientAnimations\"\n] call KISKA_fnc_ambientAnim_createMapFromConfig;\n```"
                }
            ],
            "description": "Parses a given config into a hashmap that can be used by KISKA_fnc_ambientAnim.This config will then be the hashmap KISKA_ambientAnim_configAnimationSetMapwith the config as the key.\nSee configFile >> \"KISKA_AmbientAnimations\" for an example of a configed map.\n \n\n```cpp\nclass ambientAnimsConfig\n{\n    class someAnimSet\n    {\n        animations[] = {\"myAnimation\"}; // the only required property of an anim set\n    };\n};\n```"
        },
        "configuration": {
            "label": "KISKA_fnc_ambientAnim_createMapFromConfig",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Animations/fn_ambientAnim_getAttachLogicGroupsMap.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_ambientAnim_getAttachLogicGroupsMap`",
                    "parameters": [],
                    "returns": "*(HASHMAP)* - A hashmap containing all the logic group"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _map = call KISKA_fnc_ambientAnim_getAttachLogicGroupsMap;\n```"
                }
            ],
            "description": "Returns the hashmap that contains all logic groups used for ambient animations.\nUsers can then reference all the groups with the `values` command.\nA hashmap was used in order to provide a quicker means of removing entries whena group is deleted as opposed to having to used the `find` command with an array."
        },
        "configuration": {
            "label": "KISKA_fnc_ambientAnim_getAttachLogicGroupsMap",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Animations/fn_ambientAnim_play.sqf",
            "syntaxes": [
                {
                    "outline": "[_unit, _previousAnim] call `KISKA_fnc_ambientAnim_play`",
                    "parameters": [
                        {
                            "name": "_unit",
                            "description": "*(OBJECT)* - The unit to animate"
                        },
                        {
                            "name": "_previousAnim",
                            "description": "*(STRING)* - The previous animation the unit played"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n(SHOULD NOT BE DIRECTLY CALLED)\n```"
                }
            ],
            "description": "Starts animations for KISKA_fnc_ambientAnim.\nThis should not be directly called and is instead handled in events definedin KISKA_fnc_ambientAnim."
        },
        "configuration": {
            "label": "KISKA_fnc_ambientAnim_play",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Animations/fn_ambientAnim_setStoredLoadout.sqf",
            "syntaxes": [
                {
                    "outline": "[_unit, _loadout] call `KISKA_fnc_ambientAnim_setStoredLoadout`",
                    "parameters": [
                        {
                            "name": "_unit",
                            "description": "*(OBJECT)* - The unit to animate"
                        },
                        {
                            "name": "_loadout",
                            "description": "*(ARRAY)* - The loadout to store"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    someUnit,\n    getUnitLoadout someUnit\n] call KISKA_fnc_ambientAnim_setStoredLoadout;\n```"
                }
            ],
            "description": "When a unit has it's loadout adjusted for an ambient animation, the loadoutthey previously had is stored and restored after their ambient animation stops."
        },
        "configuration": {
            "label": "KISKA_fnc_ambientAnim_setStoredLoadout",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Animations/fn_ambientAnim_stop.sqf",
            "syntaxes": [
                {
                    "outline": "[_unit, _triggeredByDeletion] call `KISKA_fnc_ambientAnim_stop`",
                    "parameters": [
                        {
                            "name": "_unit",
                            "description": "*(OBJECT)* - The unit who is running KISKA ambient anims"
                        },
                        {
                            "name": "_triggeredByDeletion",
                            "description": "*(BOOL)* - If this stop was initiated by the delete Eventhandler"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[someUnit] call KISKA_fnc_ambientAnim_stop;\n```"
                }
            ],
            "description": "Stops a unit's use of KISKA_fnc_ambientAnim and returns them to the state theywere in before it ran."
        },
        "configuration": {
            "label": "KISKA_fnc_ambientAnim_stop",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Sound/fn_ambientNewsRadio.sqf",
            "syntaxes": [
                {
                    "outline": "[_origin, _duration, _distance, _volume, _isInside] call `KISKA_fnc_ambientNewsRadio`",
                    "parameters": [
                        {
                            "name": "_origin",
                            "description": "*(OBJECT or ARRAY)* - The position the sound will play at. If arrayposition is format ASL"
                        },
                        {
                            "name": "_duration",
                            "description": "*(NUMBER)* - How long should this broadcast last. Negative valuewill go on forever."
                        },
                        {
                            "name": "_distance",
                            "description": "*(NUMBER)* - How far away the sound can be heard"
                        },
                        {
                            "name": "_volume",
                            "description": "*(NUMBER)* - The volume of the sounds (0-5)."
                        },
                        {
                            "name": "_isInside",
                            "description": "*(BOOL)* - Are these sounds being played indoors"
                        }
                    ],
                    "returns": "*(NUMBER)* - The KISKA_fnc_playRandom3dSoundLoop Handler ID for stopping the sound with KISKA_fnc_stopRandom3dSoundLoop"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[myRadio] call KISKA_fnc_ambientNewsRadio;\n```"
                }
            ],
            "description": "Plays a selection of news sounds from the vanilla game at a given position."
        },
        "configuration": {
            "label": "KISKA_fnc_ambientNewsRadio",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/fn_arsenalSupplyDrop.sqf",
            "syntaxes": [
                {
                    "outline": "[_dropPosition, _dropAlt, _flyDirection, _flyInRadius, _lifeTime, _side] call `KISKA_fnc_arsenalSupplyDrop`",
                    "parameters": [
                        {
                            "name": "_dropPosition",
                            "description": ": *(ARRAY)* - The position (area) to drop the arsenal1: _vehicleClass : *(STRING)* - The class of the vehicle to drop the arsenal"
                        },
                        {
                            "name": "_dropAlt",
                            "description": ": *(NUMBER)* - The flyInHeight of the drop vehicle"
                        },
                        {
                            "name": "_flyDirection",
                            "description": ": *(NUMBER)* - The compass bearing for the aircraft to apporach from (if < 0, it's random)"
                        },
                        {
                            "name": "_flyInRadius",
                            "description": ": *(NUMBER)* - How far out the drop vehicle will spawn and then fly in"
                        },
                        {
                            "name": "_lifeTime",
                            "description": ": *(NUMBER)* - How long until the arsenal is deleted"
                        },
                        {
                            "name": "_side",
                            "description": ": *(SIDE)* - The side of the drop vehicle"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[position player] call KISKA_fnc_arsenalSupplyDrop;\n```"
                }
            ],
            "description": "Spawns in an aircraft that flies over a DZ to drop off an arsenal."
        },
        "configuration": {
            "label": "KISKA_fnc_arsenalSupplyDrop",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_arty.sqf",
            "syntaxes": [
                {
                    "outline": "[_gun, _target, _rounds, _randomDistance, _randomDirection, _fireTime] spawn `KISKA_fnc_arty`",
                    "parameters": [
                        {
                            "name": "_gun",
                            "description": ": *(OBJECT)* - The artillery piece"
                        },
                        {
                            "name": "_target",
                            "description": ": *(OBJECT or ARRAY)* - Self Expllanitory"
                        },
                        {
                            "name": "_rounds",
                            "description": ": *(NUMBER)* - Number of rounds to fire"
                        },
                        {
                            "name": "_randomDistance",
                            "description": ": *(NUMBER)* - max distance error margin (0 will be directly on target for all rounds)"
                        },
                        {
                            "name": "_randomDirection",
                            "description": ": *(NUMBER)* - 360 direction within rounds can land"
                        },
                        {
                            "name": "_fireTime",
                            "description": ": *(ARRAY)* - Array of random time between shots for bell curve"
                        }
                    ],
                    "returns": "Nothing"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[vehicle, target, 2, 100, 360, [9,10,11]] spawn KISKA_fnc_arty;\n```"
                }
            ],
            "description": "Fires a number of rounds from artillery piece at target with random disperstion values"
        },
        "configuration": {
            "label": "KISKA_fnc_arty",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Loadouts/fn_assignUnitLoadout.sqf",
            "syntaxes": [
                {
                    "outline": "[_config, _units] call `KISKA_fnc_assignUnitLoadout`",
                    "parameters": [
                        {
                            "name": "_config",
                            "description": "*(CONFIG)* - The config to search for the array of loadouts in"
                        },
                        {
                            "name": "_units",
                            "description": "*(ARRAY, GROUP, or OBJECT)* - The unit(s) to apply the function to"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    missionConfigFile >> \"KISKA_loadouts\" >> \"ONL\",\n    unit1\n] call KISKA_fnc_assignUnitLoadout\n```"
                }
            ],
            "description": "Searches a config class for an array that matches the units classname.This array is filled with potential loadout arrays for the unit."
        },
        "configuration": {
            "label": "KISKA_fnc_assignUnitLoadout",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_attack.sqf",
            "syntaxes": [
                {
                    "outline": "[_group, _position, _radius, _behaviour, _combatMode, _override] call `KISKA_fnc_attack`",
                    "parameters": [
                        {
                            "name": "_group",
                            "description": "*(GROUP or OBJECT)* - Unit(s) to attack"
                        },
                        {
                            "name": "_position",
                            "description": "*(OBJECT, LOCATION, GROUP, or ARRAY)* - The position to attack"
                        },
                        {
                            "name": "_radius",
                            "description": "*(NUMBER)* - Radius for waypoint placement"
                        },
                        {
                            "name": "_behaviour",
                            "description": "*(STRING)* - What behaviour will the attacker(s) have"
                        },
                        {
                            "name": "_combatMode",
                            "description": "*(STRING)* - What combatMode will the attacker(s) have"
                        },
                        {
                            "name": "_override",
                            "description": "*(BOOL)* - Clear units current waypoints"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[group1,attackPosition,100,\"COMBAT\",\"RED\"] call KISKA_fnc_attack;\n```"
                }
            ],
            "description": "Modified version of CBA_fnc_taskAttack.Now allows setting of different behaviour and combatMode."
        },
        "configuration": {
            "label": "KISKA_fnc_attack",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_balanceHeadless.sqf",
            "syntaxes": [
                {
                    "outline": "[_checkInterval] spawn `KISKA_fnc_balanceHeadless`",
                    "parameters": [
                        {
                            "name": "_checkInterval",
                            "description": "*(NUMBER)* - How often to redistribute, if -1, will not loop"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[] spawn KISKA_fnc_balanceHeadless;\n```"
                }
            ],
            "description": "Balances AI among all logged Headless Clients in a very simple fashion.Designed to be run once and also should only be done when all HC are logged onto the server.\nExcluded groups and units can be added to the array KISKA_hcExcluded."
        },
        "configuration": {
            "label": "KISKA_fnc_balanceHeadless",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Bases/fn_bases_createFromConfig.sqf",
            "syntaxes": [
                {
                    "outline": "[_baseConfig] call `KISKA_fnc_bases_createFromConfig`",
                    "parameters": [
                        {
                            "name": "_baseConfig",
                            "description": "*(STRING or CONFIG)* - The config path of the base config or ifin missionConfigFile >> \"KISKA_bases\" config, its class"
                        }
                    ],
                    "returns": "*(HASHMAP)* - see KISKA_fnc_bases_getHashmap"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _baseMap = [\"SomeBaseConfig\"] call KISKA_fnc_bases_createFromConfig;\n```"
                }
            ],
            "description": "Spawns a configed KISKA base."
        },
        "configuration": {
            "label": "KISKA_fnc_bases_createFromConfig",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Bases/fn_bases_createFromConfig_agents.sqf",
            "syntaxes": [
                {
                    "outline": "[_baseConfig] call `KISKA_fnc_bases_createFromConfig_agents`",
                    "parameters": [
                        {
                            "name": "_baseConfig",
                            "description": "*(CONFIG)* - The config path of the base config"
                        }
                    ],
                    "returns": "*(HASHMAP)* - see KISKA_fnc_bases_getHashmap"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    \"SomeBaseConfig\"\n] call KISKA_fnc_bases_createFromConfig_agents;\n```"
                }
            ],
            "description": "Spawns a configed KISKA bases' agents."
        },
        "configuration": {
            "label": "KISKA_fnc_bases_createFromConfig_agents",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Bases/fn_bases_createFromConfig_infantry.sqf",
            "syntaxes": [
                {
                    "outline": "[_baseConfig] call `KISKA_fnc_bases_createFromConfig_infantry`",
                    "parameters": [
                        {
                            "name": "_baseConfig",
                            "description": "*(CONFIG)* - The config path of the base config"
                        }
                    ],
                    "returns": "*(HASHMAP)* - see KISKA_fnc_bases_getHashmap"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    \"SomeBaseConfig\"\n] call KISKA_fnc_bases_createFromConfig_infantry;\n```"
                }
            ],
            "description": "Spawns a configed KISKA bases' infantry."
        },
        "configuration": {
            "label": "KISKA_fnc_bases_createFromConfig_infantry",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Bases/fn_bases_createFromConfig_landVehicles.sqf",
            "syntaxes": [
                {
                    "outline": "[_baseConfig] call `KISKA_fnc_bases_createFromConfig_landVehicles`",
                    "parameters": [
                        {
                            "name": "_baseConfig",
                            "description": "*(CONFIG)* - The config path of the base config"
                        }
                    ],
                    "returns": "*(HASHMAP)* - see KISKA_fnc_bases_getHashmap"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    \"SomeBaseConfig\"\n] call KISKA_fnc_bases_createFromConfig_landVehicles;\n```"
                }
            ],
            "description": "Spawns a configed KISKA bases' land vehicles."
        },
        "configuration": {
            "label": "KISKA_fnc_bases_createFromConfig_landVehicles",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Bases/fn_bases_createFromConfig_patrols.sqf",
            "syntaxes": [
                {
                    "outline": "[_baseConfig] call `KISKA_fnc_bases_createFromConfig_patrols`",
                    "parameters": [
                        {
                            "name": "_baseConfig",
                            "description": "*(CONFIG)* - The config path of the base config"
                        }
                    ],
                    "returns": "*(HASHMAP)* - see KISKA_fnc_bases_getHashmap"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    \"SomeBaseConfig\"\n] call KISKA_fnc_bases_createFromConfig_patrols;\n```"
                }
            ],
            "description": "Spawns a configed KISKA bases' patrols."
        },
        "configuration": {
            "label": "KISKA_fnc_bases_createFromConfig_patrols",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Bases/fn_bases_createFromConfig_simples.sqf",
            "syntaxes": [
                {
                    "outline": "[_baseConfig] call `KISKA_fnc_bases_createFromConfig_simples`",
                    "parameters": [
                        {
                            "name": "_baseConfig",
                            "description": "*(CONFIG)* - The config path of the base config"
                        }
                    ],
                    "returns": "*(HASHMAP)* - see KISKA_fnc_bases_getHashmap"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    \"SomeBaseConfig\"\n] call KISKA_fnc_bases_createFromConfig_simples;\n```"
                }
            ],
            "description": "Spawns a configed KISKA bases' simple objects."
        },
        "configuration": {
            "label": "KISKA_fnc_bases_createFromConfig_simples",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Bases/fn_bases_createFromConfig_turrets.sqf",
            "syntaxes": [
                {
                    "outline": "[_baseConfig] call `KISKA_fnc_bases_createFromConfig_turrets`",
                    "parameters": [
                        {
                            "name": "_baseConfig",
                            "description": "*(CONFIG)* - The config path of the base config"
                        }
                    ],
                    "returns": "*(HASHMAP)* - see KISKA_fnc_bases_getHashmap"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    \"SomeBaseConfig\"\n] call KISKA_fnc_bases_createFromConfig_turrets;\n```"
                }
            ],
            "description": "Spawns a configed KISKA bases' turrets."
        },
        "configuration": {
            "label": "KISKA_fnc_bases_createFromConfig_turrets",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Bases/fn_bases_getHashmap.sqf",
            "syntaxes": [
                {
                    "outline": "[_baseConfig] call `KISKA_fnc_bases_getHashmap`",
                    "parameters": [
                        {
                            "name": "_baseConfig",
                            "description": "*(CONFIG or STRING)* - The config path of the base config"
                        }
                    ],
                    "returns": "*(HASHMAP)* - a hashmap containing data about the base:\n\n- `unit list`: *(OBJECT[])* - All spawned units (includes turret units)\n- `group list`: *(GROUP[])* - All spawned groups (does NOT include turret units)\n- `turret gunners`: *(OBJECT[])* - All turret units\n- `infantry units`: *(OBJECT[])* - All infantry spawned units\n- `infantry groups`: *(GROUP[])* - All infantry spawned groups\n- `patrol units`: *(OBJECT[])* - All patrol spawned units\n- `patrol groups`: *(GROUP[])* - All patrol spawned groups\n- `land vehicles`: *(OBJECT[])* - All land spawned vehicles\n- `land vehicle groups`: *(GROUP[])* - All land vehicle crew groups\n- `agent list`: *(OBJECT[])* - All spawned agents"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _mapOfDataForSpecificBase = [\n    \"SomeBaseConfig\"\n] call KISKA_fnc_bases_getHashmap;\n```"
                }
            ],
            "description": "Returns a KISKA bases' hashmap spawn data or initializes if it did not exist."
        },
        "configuration": {
            "label": "KISKA_fnc_bases_getHashmap",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Bases/fn_bases_getInfantryClasses.sqf",
            "syntaxes": [
                {
                    "outline": "[_configClasses] call `KISKA_fnc_bases_getInfantryClasses`",
                    "parameters": [
                        {
                            "name": "_configClasses",
                            "description": "*(ARRAY)* - An array of CONFIGs to select the \"infantryClasses\"property from. If a string, value is found, it will be treated as a functionthat should return an array of classnames."
                        }
                    ],
                    "returns": "*(STRING[])* - An array of STRING class names"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    [\n        missionConfigFile >> \"KISKA_Bases\" >> \"myBase\",\n        missionConfigFile >> \"KISKA_Bases\" >> \"myBase\" >> \"Infantry\",\n        missionConfigFile >> \"KISKA_Bases\" >> \"myBase\" >> \"Infantry\" >> \"myInfantryClass\"\n    ]\n] call KISKA_fnc_bases_getInfantryClasses;\n```"
                }
            ],
            "description": "Selects the most specific config's infantryClasses property and returns itsvalue."
        },
        "configuration": {
            "label": "KISKA_fnc_bases_getInfantryClasses",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Bases/fn_bases_getSide.sqf",
            "syntaxes": [
                {
                    "outline": "[_configClasses] call `KISKA_fnc_bases_getSide`",
                    "parameters": [
                        {
                            "name": "_configClasses",
                            "description": "*(ARRAY)* - An array of CONFIGs to select the \"side\" property fromThat will be converted from a number in the side"
                        }
                    ],
                    "returns": "*(SIDE)* - The returned side for the given configs"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    [\n        missionConfigFile >> \"KISKA_Bases\" >> \"myBase\"\n        missionConfigFile >> \"KISKA_Bases\" >> \"myBase\" >> \"Infantry\",\n        missionConfigFile >> \"KISKA_Bases\" >> \"myBase\" >> \"Infantry\" >> \"myInfantryClass\"\n    ]\n] call KISKA_fnc_bases_getSide;\n```"
                }
            ],
            "description": "Selects the most specific config's infantryClasses property and returns itsvalue."
        },
        "configuration": {
            "label": "KISKA_fnc_bases_getSide",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Bases/fn_bases_initAmbientAnimFromClass.sqf",
            "syntaxes": [
                {
                    "outline": "[_configToInit, _units] call `KISKA_fnc_bases_initAmbientAnimFromClass`",
                    "parameters": [
                        {
                            "name": "_configToInit",
                            "description": "*(CONFIG)* - The config path to the entry's that has an ambientAnim class"
                        },
                        {
                            "name": "_units",
                            "description": "*(OBJECT[] or OBJECT)* - The units that are under the config to init"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    missionConfigFile >> \"SomeBaseConfig\" >> \"infantry >> \"someInfantryConfigClass\",\n    someUnit\n] call KISKA_fnc_bases_initAmbientAnimFromClass;\n```"
                }
            ],
            "description": "Parses and initializes a KISKA base entry's ambient animation class.\nThis is meant to be called from KISKA bases createFromConfig functions."
        },
        "configuration": {
            "label": "KISKA_fnc_bases_initAmbientAnimFromClass",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Bases/fn_bases_initReinforceFromClass.sqf",
            "syntaxes": [
                {
                    "outline": "[_group, _config] call `KISKA_fnc_bases_initReinforceFromClass`",
                    "parameters": [
                        {
                            "name": "_group",
                            "description": "*(GROUP, GROUP[])* - The config path of the base config"
                        },
                        {
                            "name": "_config",
                            "description": "*(CONFIG)* - The config path of the base config"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    _group,\n    SomeBaseConfig >> \"infantry\" >> \"someUnitClass\"\n] call KISKA_fnc_bases_initReinforceFromClass;\n```"
                }
            ],
            "description": "Parses a reinforce class that is used in a unit's KIKSA bases class, andinitializes the group(s) reactivity to it."
        },
        "configuration": {
            "label": "KISKA_fnc_bases_initReinforceFromClass",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Bases/fn_bases_setupReactivity.sqf",
            "syntaxes": [
                {
                    "outline": "[_group, _reinforceId, _canCallIds, _priority, _onEnemyDetected] call `KISKA_fnc_bases_setupReactivity`",
                    "parameters": [
                        {
                            "name": "_group",
                            "description": "*(GROUP)* - The group to add setup reactions for"
                        },
                        {
                            "name": "_reinforceId",
                            "description": "*(NUMBER or STRING)* - A globally unqiue identifier for this group (or a collection of groups)"
                        },
                        {
                            "name": "_canCallIds",
                            "description": "*(STRING[])* - An array of _reinforceIds denoting groups that will respond todistress calls from this group"
                        },
                        {
                            "name": "_priority",
                            "description": "*(NUMBER)* - a number signifying how important this group's call will be\n    (if a group is responding to another call, they will break away from it for this call if higher)"
                        },
                        {
                            "name": "_onEnemyDetected",
                            "description": "*(CODE or STRING)* - Code that will be executed when the group enters combat.Must return a boolean that denotes whether to execute default functionality that happenswith the event (see KISKA_fnc_bases_triggerReaction).\n \n    Parameters:\n    - 0: *(GROUP)* - The group the event is triggering for\n    - 1: *(OBJECT)* - The enemy unit that was detected\n    - 2: *(ARRAY)* - An array of GROUPs that can respond to the call (based on _canCallIds)\n    - 3: *(NUMBER)* - The same _priority"
                        }
                    ],
                    "returns": "*(NUMBER)* - The event id of the EnemyDetected group eventhandler"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    aGroup,\n    123,\n    [\"anotherGroupsId\"],\n    1,\n    {\n        hint str _this;\n        false // continue with default reaction behaviour\n    }\n] call KISKA_fnc_bases_setupReactivity;\n```"
                }
            ],
            "description": "Adds values and eventhandlers to the given group's namespace to be able to interact with KISKA bases reaction system"
        },
        "configuration": {
            "label": "KISKA_fnc_bases_setupReactivity",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Bases/fn_bases_triggerReaction.sqf",
            "syntaxes": [
                {
                    "outline": "[_group, _detectedTarget] call `KISKA_fnc_bases_triggerReaction`",
                    "parameters": [
                        {
                            "name": "_group",
                            "description": "*(GROUP)* - The group the event is triggering for"
                        },
                        {
                            "name": "_detectedTarget",
                            "description": "*(OBJECT)* - The enemy unit that was detected"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    someGroup,\n    anEnemyUnit\n] call KISKA_fnc_bases_triggerReaction\n```"
                }
            ],
            "description": "Acts as the default event for the reactive bases when a group calls for reinforcements."
        },
        "configuration": {
            "label": "KISKA_fnc_bases_triggerReaction",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Sound/fn_battleSound.sqf",
            "syntaxes": [
                {
                    "outline": "[_source, _distance, _duration, _intensity] call `KISKA_fnc_battleSound`",
                    "parameters": [
                        {
                            "name": "_source",
                            "description": "*(OBJECT or ARRAY)* - Where the sound is coming from. Can be an object or positions array (ASL)"
                        },
                        {
                            "name": "_distance",
                            "description": "*(NUMBER or ARRAY)* - Distance at which the sounds can be heard,if an array, will be used with the \"random\" command (random _distance)for getting a random value between the numbers."
                        },
                        {
                            "name": "_duration",
                            "description": "*(NUMBER)* - How long the sounds should play for in seconds"
                        },
                        {
                            "name": "_intensity",
                            "description": "*(NUMBER)* - Value between 1-5 that determines how frequent these sounds are played (5 being the fastest)"
                        }
                    ],
                    "returns": "*(NUMBER)* - The Handler ID for stopping the sound with KISKA_fnc_stopBattleSound"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[player,20,10] call KISKA_fnc_battleSound;\n```"
                },
                {
                    "text": "```sqf\n// distance will be between 10-30m, leaning towards 20m\n[player,[10,20,30],10] call KISKA_fnc_battleSound;\n```"
                }
            ],
            "description": "Create ambient battlefield sounds for a specified duration"
        },
        "configuration": {
            "label": "KISKA_fnc_battleSound",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_buildCommandMenu.sqf",
            "syntaxes": [
                {
                    "outline": "[_menuName, _menuTitle, _menuParams] call `KISKA_fnc_buildCommandMenu`",
                    "parameters": [
                        {
                            "name": "_menuName",
                            "description": ": *(STRING)* - The name of the menu global variable"
                        },
                        {
                            "name": "_menuTitle",
                            "description": ": *(STRING)* - The title of the menu that will appear when it is openned"
                        },
                        {
                            "name": "_menuParams",
                            "description": ": *(ARRAY)* - An array of arrays formatted as:\n \n    - 0. *(STRING)* - The name of the menu option\n    - 1. *(NUMBER)* - The key code for quick menu select (key 1 is code 2, 2 is 3, etc. use 0 for no key)\n    - 2. *(ANY)* - The value to assign to this menu option"
                        }
                    ],
                    "returns": "*(ARRAY)* - The created menu array"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_createdMenu = [] call KISKA_fnc_buildCommandMenu\n```"
                }
            ],
            "description": "Creates a showCommandingMenu compatible menu global array to be used withKISKA_fnc_commandMenuTree.\nThis will be saved as a missionNamespace global var."
        },
        "configuration": {
            "label": "KISKA_fnc_buildCommandMenu",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_callBack.sqf",
            "syntaxes": [
                {
                    "outline": "[_defaultArgs, _callBackFunction, _runInScheduled] call `KISKA_fnc_callBack`",
                    "parameters": [
                        {
                            "name": "_defaultArgs",
                            "description": "*(ARRAY)* - Default arguements. These would be what a functionwriter would put inside of their code as arguements that will always be passedin the _this magic variable"
                        },
                        {
                            "name": "_callBackFunction",
                            "description": "*(CODE, STRING, ARRAY)* - Code to call, compile and call, and/orarguements to pass to the code (in _thisArgs variable). Array is formatted as\n    [*(args array)*,code or string (to compile)]"
                        },
                        {
                            "name": "_runInScheduled",
                            "description": "*(BOOL)* - Spawns the code in a scheduled thread"
                        }
                    ],
                    "returns": "*(ANY)* - Whatever the callback function returns or scripthandle if run in scheduled"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    [],\n    [\n        // hint player\n        [player],\n        {hint (_thisArgs select 0)}\n    ]\n] call KISKA_fnc_callBack\n```"
                }
            ],
            "description": "Standerdizes a means of passing a callback function to another functionalong with custom arguments."
        },
        "configuration": {
            "label": "KISKA_fnc_callBack",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_callingForArsenalSupplyDrop.sqf",
            "syntaxes": [
                {
                    "outline": "[_supportClass, _commMenuArgs, _count] call `KISKA_fnc_callingForArsenalSupplyDrop`",
                    "parameters": [
                        {
                            "name": "_supportClass",
                            "description": "*(STRING)* - The class as defined in the CfgCommunicationMenu"
                        },
                        {
                            "name": "_commMenuArgs",
                            "description": "*(ARRAY)* - The arguements passed by the CfgCommunicationMenu entry\n \n    - 0. _caller *(OBJECT)* - The player calling for support\n    - 1. _targetPosition *(ARRAY)* - The position (AGLS) at which the call is being made\n        (where the player is looking or if in the map, the position where their cursor is)\n    - 2. _target *(OBJECT)* - The cursorTarget object of the player\n    - 3. _is3d *(BOOL)* - False if in map, true if not\n    - 4. _commMenuId *(NUMBER)* - The ID number of the Comm Menu added by BIS_fnc_addCommMenuItem\n    - 5. _supportType *(NUMBER)* - The Support Type ID"
                        },
                        {
                            "name": "_count",
                            "description": "*(NUMBER)* - Used for keeping track of how many of a count a support has left (such as rounds)"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[] call KISKA_fnc_callingForArsenalSupplyDrop;\n```"
                }
            ],
            "description": "Used as a means of expanding on the \"expression\" property of the CfgCommunicationMenu.\nThis is essentially just another level of abrstraction to be able to more easily reusecode between similar supports and make things easier to read instead of fitting it allin the config."
        },
        "configuration": {
            "label": "KISKA_fnc_callingForArsenalSupplyDrop",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_callingForArty.sqf",
            "syntaxes": [
                {
                    "outline": "[_supportClass, _commMenuArgs, _roundCount] call `KISKA_fnc_callingForArty`",
                    "parameters": [
                        {
                            "name": "_supportClass",
                            "description": "*(STRING)* - The class as defined in the CfgCommunicationMenu"
                        },
                        {
                            "name": "_commMenuArgs",
                            "description": "*(ARRAY)* - The arguements passed by the CfgCommunicationMenu entry\n\n    - 0. _caller *(OBJECT)* - The player calling for support\n    - 1. _targetPosition *(ARRAY)* - The position (AGLS) at which the call is being made\n        (where the player is looking or if in the map, the position where their cursor is)\n    - 2. _target *(OBJECT)* - The cursorTarget object of the player\n    - 3. _is3d *(BOOL)* - False if in map, true if not\n    - 4. _commMenuId *(NUMBER)* The ID number of the Comm Menu added by BIS_fnc_addCommMenuItem\n    - 5. _supportType *(NUMBER)* - The Support Type ID"
                        },
                        {
                            "name": "_roundCount",
                            "description": "*(NUMBER)* - Used for keeping track of how many of a count a support has left (such as rounds)"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[] call KISKA_fnc_callingForArty;\n```"
                }
            ],
            "description": "Used as a means of expanding on the \"expression\" property of the CfgCommunicationMenu.\nThis is essentially just another level of abrstraction to be able to more easily reusecode between similar supports and make things easier to read instead of fitting it allin the config."
        },
        "configuration": {
            "label": "KISKA_fnc_callingForArty",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_callingForCAS.sqf",
            "syntaxes": [
                {
                    "outline": "[_supportClass, _commMenuArgs, _useCount] call `KISKA_fnc_callingForCAS`",
                    "parameters": [
                        {
                            "name": "_supportClass",
                            "description": "*(STRING)* - The class as defined in the CfgCommunicationMenu"
                        },
                        {
                            "name": "_commMenuArgs",
                            "description": "*(ARRAY)* - The arguements passed by the CfgCommunicationMenu entry\n \n    - 0. _caller *(OBJECT)* - The player calling for support\n    - 1. _targetPosition *(ARRAY)* - The position (AGLS) at which the call is being made\n        (where the player is looking or if in the map, the position where their cursor is)\n    - 2. _target *(OBJECT)* - The cursorTarget object of the player\n    - 3. _is3d *(BOOL)* - False if in map, true if not\n    - 4. _commMenuId *(NUMBER)* The ID number of the Comm Menu added by BIS_fnc_addCommMenuItem\n    - 5. _supportType *(NUMBER)* - The Support Type ID"
                        },
                        {
                            "name": "_useCount",
                            "description": "*(NUMBER)* - Used for keeping track of how many of a count a support has left (such as rounds)"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[] call KISKA_fnc_callingForCAS;\n```"
                }
            ],
            "description": "Used as a means of expanding on the \"expression\" property of the CfgCommunicationMenu.\nThis is essentially just another level of abrstraction to be able to more easily reusecode between similar supports and make things easier to read instead of fitting it allin the config."
        },
        "configuration": {
            "label": "KISKA_fnc_callingForCAS",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_callingForHelicopterCAS.sqf",
            "syntaxes": [
                {
                    "outline": "[_supportClass, _commMenuArgs, _count] call `KISKA_fnc_callingForHelicopterCAS`",
                    "parameters": [
                        {
                            "name": "_supportClass",
                            "description": "*(STRING)* - The class as defined in the CfgCommunicationMenu"
                        },
                        {
                            "name": "_commMenuArgs",
                            "description": "*(ARRAY)* - The arguements passed by the CfgCommunicationMenu entry\n \n    - 0. _caller *(OBJECT)* - The player calling for support\n    - 1. _targetPosition *(ARRAY)* - The position (AGLS) at which the call is being made\n        (where the player is looking or if in the map, the position where their cursor is)\n    - 2. _target *(OBJECT)* - The cursorTarget object of the player\n    - 3. _is3d *(BOOL)* - False if in map, true if not\n    - 4. _commMenuId *(NUMBER)* - The ID number of the Comm Menu added by BIS_fnc_addCommMenuItem\n    - 5. _supportType *(NUMBER)* - The Support Type ID"
                        },
                        {
                            "name": "_count",
                            "description": "*(NUMBER)* - Used for keeping track of how many of a count a support has left (such as rounds)"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[] call KISKA_fnc_callingForHelicopterCAS;\n```"
                }
            ],
            "description": "Used as a means of expanding on the \"expression\" property of the CfgCommunicationMenu.\nThis is essentially just another level of abrstraction to be able to more easily reusecode between similar supports and make things easier to read instead of fitting it allin the config."
        },
        "configuration": {
            "label": "KISKA_fnc_callingForHelicopterCAS",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_callingForSupplyDrop_aircraft.sqf",
            "syntaxes": [
                {
                    "outline": "[_supportClass, _commMenuArgs, _count] call `KISKA_fnc_callingForSupplyDrop_aircraft`",
                    "parameters": [
                        {
                            "name": "_supportClass",
                            "description": "*(STRING)* - The class as defined in the CfgCommunicationMenu"
                        },
                        {
                            "name": "_commMenuArgs",
                            "description": "*(ARRAY)* - The arguements passed by the CfgCommunicationMenu entry\n \n    - 0. _caller *(OBJECT)* - The player calling for support\n    - 1. _targetPosition *(ARRAY)* - The position (AGLS) at which the call is being made\n        (where the player is looking or if in the map, the position where their cursor is)\n    - 2. _target *(OBJECT)* - The cursorTarget object of the player\n    - 3. _is3d *(BOOL)* - False if in map, true if not\n    - 4. _commMenuId *(NUMBER)* - The ID number of the Comm Menu added by BIS_fnc_addCommMenuItem\n    - 5. _supportType *(NUMBER)* - The Support Type ID"
                        },
                        {
                            "name": "_count",
                            "description": "*(NUMBER)* - Used for keeping track of how many of a count a support has left (such as rounds)"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[] call KISKA_fnc_callingForSupplyDrop_aircraft;\n```"
                }
            ],
            "description": "Used as a means of expanding on the \"expression\" property of the CfgCommunicationMenu.\nThis is essentially just another level of abrstraction to be able to more easily reusecode between similar supports and make things easier to read instead of fitting it allin the config."
        },
        "configuration": {
            "label": "KISKA_fnc_callingForSupplyDrop_aircraft",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_callingForSupportMaster.sqf",
            "syntaxes": [
                {
                    "outline": "[_supportClass, _commMenuArgs, _count] call `KISKA_fnc_callingForSupportMaster`",
                    "parameters": [
                        {
                            "name": "_supportClass",
                            "description": "*(STRING)* - The class as defined in the CfgCommunicationMenu"
                        },
                        {
                            "name": "_commMenuArgs",
                            "description": "*(ARRAY)* - The arguements passed by the CfgCommunicationMenu entry\n \n    - 0. _caller *(OBJECT)* - The player calling for support\n    - 1. _targetPosition *(ARRAY)* - The position (AGLS) at which the call is being made\n        (where the player is looking or if in the map, the position where their cursor is)\n    - 2. _target *(OBJECT)* - The cursorTarget object of the player\n    - 3. _is3d *(BOOL)* - False if in map, true if not\n    - 4. _commMenuId *(NUMBER)* The ID number of the Comm Menu added by BIS_fnc_addCommMenuItem"
                        },
                        {
                            "name": "_count",
                            "description": "*(NUMBER)* - Used for keeping track of how many of a count a support has left (such as rounds)"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"myClass\",_this] call KISKA_fnc_callingForSupportMaster;\n```"
                }
            ],
            "description": "Used as a means of expanding on the \"expression\" property of the CfgCommunicationMenu.\nThis is essentially just another level of abrstraction to be able to more easily reusecode between similar supports and make things easier to read instead of fitting it allin the config."
        },
        "configuration": {
            "label": "KISKA_fnc_callingForSupportMaster",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/fn_CAS.sqf",
            "syntaxes": [
                {
                    "outline": "[_attackPosition, _attackTypeID, _attackDirection, _planeClass, _side, _spawnHeight, _spawnDistance, _breakOffDistance, _attackPositionOffset, _attackDistance] call `KISKA_fnc_CAS`",
                    "parameters": [
                        {
                            "name": "_attackPosition",
                            "description": ": *(OBJECT or PositionASL[])* - ASL position or object to attack"
                        },
                        {
                            "name": "_attackTypeID",
                            "description": ": *(NUMBER or ARRAY)* - See CAS Type IDs.hpp .If an array, format needs to be [attackTypeId,pylonMagazineClass].Custom mag classes, when used for napalm or UGB ids, will drop the ENTIRE payloadof that mag. e.g. mag class \"vn_bomb_f4_out_500_blu1b_fb_mag_x1\" is 1 bomb dropped,\n     \"vn_bomb_f4_out_500_blu1b_fb_mag_x4\" will be 4 dropped"
                        },
                        {
                            "name": "_attackDirection",
                            "description": ": *(NUMBER)* - The direction the aircraft should approach from relative to North"
                        },
                        {
                            "name": "_planeClass",
                            "description": ": *(STRING)* - The className of the aircraft"
                        },
                        {
                            "name": "_side",
                            "description": ": *(SIDE)* - The side of the plane"
                        },
                        {
                            "name": "_spawnHeight",
                            "description": ": *(NUMBER)* - At what height should the aircraft start firing"
                        },
                        {
                            "name": "_spawnDistance",
                            "description": ": *(NUMBER)* - How far away to spawn the aircraft"
                        },
                        {
                            "name": "_breakOffDistance",
                            "description": ": *(NUMBER)* - The distance to target at which the aircraft should definately disengage and fly away (to not crash)"
                        },
                        {
                            "name": "_attackPositionOffset",
                            "description": ": *(NUMBER)* - This will offset the _attackPosition in meters and in the direction of the attack.So for instance, if I wanted a gun run to be aimed 20m further in the _attackDirection from the _attackPosition, I'dset this to 20"
                        },
                        {
                            "name": "_attackDistance",
                            "description": ": *(NUMBER)* - The distance to target at which the aircraft can start completeing its attack10: _allowDamage : *(BOOL)* - Allow damage of both the crew and aircraft"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[myTarget] call KISKA_fnc_CAS;\n```"
                }
            ],
            "description": "Completes either a gun run, bomb run, rockets, or rocket and gun strike."
        },
        "configuration": {
            "label": "KISKA_fnc_CAS",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/fn_CASAttack.sqf",
            "syntaxes": [
                {
                    "outline": "[_plane, _dummyTarget, _weaponsToUse, _attackTypeID, _attackPosition, _breakOffDistance] call `KISKA_fnc_CASAttack`",
                    "parameters": [
                        {
                            "name": "_plane",
                            "description": ": *(OBJECT)* -"
                        },
                        {
                            "name": "_dummyTarget",
                            "description": ": *(OBJECT)* -"
                        },
                        {
                            "name": "_weaponsToUse",
                            "description": ": *(OBJECT)* -"
                        },
                        {
                            "name": "_attackTypeID",
                            "description": ": *(NUMBER)* -"
                        },
                        {
                            "name": "_attackPosition",
                            "description": ": *(ARRAY)* -"
                        },
                        {
                            "name": "_breakOffDistance",
                            "description": ": *(NUMBER)* -"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nShould not be called on its own but in KISKA_fnc_CAS\n```"
                }
            ],
            "description": "Fires off the various weapons of a CAS strike."
        },
        "configuration": {
            "label": "KISKA_fnc_CASAttack",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/CIWS/fn_ciwsAlarm.sqf",
            "syntaxes": [
                {
                    "outline": "[_turret] spawn `KISKA_fnc_ciwsAlarm`",
                    "parameters": [
                        {
                            "name": "_turret",
                            "description": ": *(OBJECT)* - The CIWS turret"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[turret1] spawn KISKA_fnc_ciwsAlarm;\n```"
                }
            ],
            "description": "Sounds an alarm for the CIWS"
        },
        "configuration": {
            "label": "KISKA_fnc_ciwsAlarm",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/CIWS/fn_ciwsInit.sqf",
            "syntaxes": [
                {
                    "outline": "[_turret, _searchDistance, _engageAboveAltitude, _searchInterval, _doNotFireBelowAngle, _pitchTolerance, _rotationTolerance, _soundAlarm, _engageTypes] spawn `KISKA_fnc_ciwsInit`",
                    "parameters": [
                        {
                            "name": "_turret",
                            "description": ": *(OBJECT)* - The CIWS turret"
                        },
                        {
                            "name": "_searchDistance",
                            "description": ": *(NUMBER)* - How far out will the CIWS be notified of a target"
                        },
                        {
                            "name": "_engageAboveAltitude",
                            "description": ": *(NUMBER)* - What altittiude (AGL) does the target need to be above to be engaged"
                        },
                        {
                            "name": "_searchInterval",
                            "description": ": *(NUMBER)* - Time between checks for targets in area"
                        },
                        {
                            "name": "_doNotFireBelowAngle",
                            "description": ": *(NUMBER)* - Below what angle should the turret NOT fire (keep it from firing at ground accidently)"
                        },
                        {
                            "name": "_pitchTolerance",
                            "description": ": *(NUMBER)* - if the turret's pitch is within this margin of degrees to the target, it can engage"
                        },
                        {
                            "name": "_rotationTolerance",
                            "description": ": *(NUMBER)* - if the turret's rotation is within this margin of degrees to the target, it can engage"
                        },
                        {
                            "name": "_soundAlarm",
                            "description": ": *(BOOL)* - Play air raid siren and sound alarm when incoming detected"
                        },
                        {
                            "name": "_engageTypes",
                            "description": ": *(ARRAY)* - This array decides what types of objects or entities should be engaged by the CIWSthese are formatted as an array or string inside, using an array allows thedecision to define a type as supported by nearEntities (which is much faster then the default nearObjects)simply by setting it as [\"myEntityType\",true]"
                        }
                    ],
                    "returns": "Nothing"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[turret,3000,100] spawn KISKA_fnc_ciwsInit;\n```"
                }
            ],
            "description": "Fires a number of rounds from AAA piece at target with random disperstion values.\nTo stop, set the variable \"KISKA_runCIWS\" to false."
        },
        "configuration": {
            "label": "KISKA_fnc_ciwsInit",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/CIWS/fn_ciwsSiren.sqf",
            "syntaxes": [
                {
                    "outline": "[_turret] call `KISKA_fnc_ciwsSiren`",
                    "parameters": [
                        {
                            "name": "_turret",
                            "description": ": *(OBJECT)* - The CIWS turret"
                        }
                    ],
                    "returns": "Nothing"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[turret1] spawn KISKA_fnc_ciwsSiren;\n```"
                }
            ],
            "description": "Sounds a siren for the CIWS"
        },
        "configuration": {
            "label": "KISKA_fnc_ciwsSiren",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_classTurretsWithGuns.sqf",
            "syntaxes": [
                {
                    "outline": "[_classToCheck] call `KISKA_fnc_classTurretsWithGuns`",
                    "parameters": [
                        {
                            "name": "_classToCheck",
                            "description": "*(STRING)* - The vehicle class to check"
                        }
                    ],
                    "returns": "*(NUMBER[][])* - The turret paths"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_turretPaths = [\"B_Heli_Transport_01_F\"] call KISKA_fnc_classTurretsWithGuns;\n```"
                }
            ],
            "description": "Checks a given vehicle class to see if it has turrets that have gunsand returns those turret paths"
        },
        "configuration": {
            "label": "KISKA_fnc_classTurretsWithGuns",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_clearCargoGlobal.sqf",
            "syntaxes": [
                {
                    "outline": "[_object] call `KISKA_fnc_clearCargoGlobal`",
                    "parameters": [
                        {
                            "name": "_object",
                            "description": "*(OBJECT)* - The object to delete all cargo from."
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[myVehicle] call KISKA_fnc_clearCargoGlobal;\n```"
                }
            ],
            "description": "Deletes all cargo from the specified object on all machines."
        },
        "configuration": {
            "label": "KISKA_fnc_clearCargoGlobal",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_clearWaypoints.sqf",
            "syntaxes": [
                {
                    "outline": "[_group, _numberToRemove, _stopUnits] call `KISKA_fnc_clearWaypoints`",
                    "parameters": [
                        {
                            "name": "_group",
                            "description": "*(GROUP or OBJECT)* - The group to clear the waypoints of."
                        },
                        {
                            "name": "_numberToRemove",
                            "description": "*(NUMBER)* - The number of waypoints to remove (-1 will remove all)"
                        },
                        {
                            "name": "_stopUnits",
                            "description": "*(BOOL)* - Should the units stop in place after clear?"
                        }
                    ],
                    "returns": "NOTHING\nExample:\n\n```sqf\n[group player,-1,false] call KISKA_fnc_clearWaypoints\n```"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[group player,-1,false] call KISKA_fnc_clearWaypoints\n```"
                }
            ],
            "description": "Clears a group's waypoints and conditionally halts their previous movement."
        },
        "configuration": {
            "label": "KISKA_fnc_clearWaypoints",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_commandMenuTree.sqf",
            "syntaxes": [
                {
                    "outline": "[_menuPath, _endExpression, _exitExpression] spawn `KISKA_fnc_commandMenuTree`",
                    "parameters": [
                        {
                            "name": "_menuPath",
                            "description": "*(ARRAY)* - The menu global variable paths (in order)"
                        },
                        {
                            "name": "_endExpression",
                            "description": "*(STRING, CODE, or ARRAY)* - The code to be executed at the end of the path.It receives all menu parameters in _this. (see KISKA_fnc_callBack)"
                        },
                        {
                            "name": "_exitExpression",
                            "description": "*(STRING, CODE, or ARRAY)* - The code to be executed in the event thatthe menu is closed by the player. It gets all added params up to that point in _this.\n    (see KISKA_fnc_callBack)"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    [\"#USER:myMenu_1\",\"#USER:myMenu_2\"],\n    \"hint str _this\"\n] spawn KISKA_fnc_commandMenuTree\n```"
                }
            ],
            "description": "Creates a command menu tree dynamically instead of needing to define sub menus"
        },
        "configuration": {
            "label": "KISKA_fnc_commandMenuTree",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_Compass/Functions/fn_compass_addIcon.sqf",
            "syntaxes": [
                {
                    "outline": "[_iconId, _iconText, _iconPos, _color, _isActive] call `KISKA_fnc_compass_addIcon`",
                    "parameters": [
                        {
                            "name": "_iconId",
                            "description": "*(STRING)* - A unique id for referencing the compass marker"
                        },
                        {
                            "name": "_iconText",
                            "description": "*(STRING)* - The icon's image path or text"
                        },
                        {
                            "name": "_iconPos",
                            "description": "*(ARRAY, OBJECT, MARKER, or LOCATION)* - The position of the icon"
                        },
                        {
                            "name": "_color",
                            "description": "*(ARRAY)* - The RGBa of the icon"
                        },
                        {
                            "name": "_isActive",
                            "description": "*(BOOL)* - Icon will use \"active\" scale of icon"
                        }
                    ],
                    "returns": "*(BOOL)* - false if new iconId, true if overwriting the icon id"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    \"myMarkerID\"\n    \"images\\info_icon.paa\"\n] call KISKA_fnc_compass_addIcon;\n```"
                }
            ],
            "description": "Adds and icon to the compass"
        },
        "configuration": {
            "label": "KISKA_fnc_compass_addIcon",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_Compass/Functions/fn_compass_configure.sqf",
            "syntaxes": [
                {
                    "outline": "[_display] call `KISKA_fnc_compass_configure`",
                    "parameters": [
                        {
                            "name": "_display",
                            "description": "*(DISPLAY)* - The display of the compass"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_compass_configure;\n```"
                }
            ],
            "description": "Initializes several display namespace variables for the compass and setsup their images for the compass."
        },
        "configuration": {
            "label": "KISKA_fnc_compass_configure",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_Compass/Functions/fn_compass_mainLoop.sqf",
            "syntaxes": [
                {
                    "outline": "[_display] call `KISKA_fnc_compass_mainLoop`",
                    "parameters": [
                        {
                            "name": "_display",
                            "description": "*(DISPLAY)* - The display the compass will be on"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[findDisplay 46] spawn KISKA_fnc_compass_mainLoop;\n```"
                }
            ],
            "description": "Creates and then continues to execute a loop controlling the compass."
        },
        "configuration": {
            "label": "KISKA_fnc_compass_mainLoop",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_Compass/Functions/fn_compass_parseConfig.sqf",
            "syntaxes": [
                {
                    "outline": "[_config, _varName] call `KISKA_fnc_compass_parseConfig`",
                    "parameters": [
                        {
                            "name": "_config",
                            "description": "*(CONFIG)* - The config to parse"
                        },
                        {
                            "name": "_varName",
                            "description": "*(STRING)* - uiNamespace variable to save to and to check"
                        }
                    ],
                    "returns": "*(ARRAY)* - An array formatted as [[title name strings],[image path strings],0]"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _array = [\n    configFile >> \"KISKA_compass\" >> \"compass\",\n    \"KISKA_compass_configs\"\n] call KISKA_fnc_compass_parseConfig;\n```"
                }
            ],
            "description": "Returns an array formatted for CBA settings menu lists."
        },
        "configuration": {
            "label": "KISKA_fnc_compass_parseConfig",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_Compass/Functions/fn_compass_refresh.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_compass_refresh`",
                    "parameters": [],
                    "returns": "*(BOOL)* - true if compass restarted"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_compass_refresh;\n```"
                }
            ],
            "description": "Resets the config global of the compass and then restarts the cutRSC for it."
        },
        "configuration": {
            "label": "KISKA_fnc_compass_refresh",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_Compass/Functions/fn_compass_updateColors.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_compass_updateColors`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_compass_updateColors;\n```"
                }
            ],
            "description": "Updates the color of the ctrls for the KISKA compass."
        },
        "configuration": {
            "label": "KISKA_fnc_compass_updateColors",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_Compass/Functions/fn_compass_updateConstants.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_compass_updateConstants`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_compass_updateConstants;\n```"
                }
            ],
            "description": "Updates a number of constant global variables used for the KISKA compass."
        },
        "configuration": {
            "label": "KISKA_fnc_compass_updateConstants",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_addVehicle.sqf",
            "syntaxes": [
                {
                    "outline": "[_convoyHashMap, _vehicle, _insertIndex, _convoySeperation] call `KISKA_fnc_convoy_addVehicle`",
                    "parameters": [
                        {
                            "name": "_convoyHashMap",
                            "description": "*(HASHMAP)* - The convoy hashmap to add to"
                        },
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to add"
                        },
                        {
                            "name": "_insertIndex",
                            "description": "*(NUMBER)* - The index to insert the vehicle into the convoy at. Negative value means the back.\n    (0 is lead vehicle, 1 is vehicle directly behind leader, etc.)"
                        },
                        {
                            "name": "_convoySeperation",
                            "description": "*(NUMBER)* - How far the vehicle should keep from the vehicle in front (min of 10)"
                        }
                    ],
                    "returns": "*(NUMBER)* - The index the vehicle was inserted into the convoy at"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _convoyMap = [] call KISKA_fnc_convoy_create;\nprivate _spotInConvoy = [\n    _convoyMap,\n    vic\n] call KISKA_fnc_convoy_addVehicle;\n```"
                }
            ],
            "description": "Adds a given vehicle to a convoy. The index returned will be a key to the_convoyHashMap that can be used to get the vehicle for that index in the convoy."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_addVehicle",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_addVehicleKilledEvent.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_addVehicleKilledEvent`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to add the killed eventhandler to"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[vic] call KISKA_fnc_convoy_addVehicleKilledEvent;\n```"
                }
            ],
            "description": "Adds a killed event handler to a given vehicle in a convoy."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_addVehicleKilledEvent",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_clearVehicleDebugFollowedPath.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _deleteExisting] call `KISKA_fnc_convoy_clearVehicleDebugFollowedPath`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to clear the debug followed path of"
                        },
                        {
                            "name": "_deleteExisting",
                            "description": "*(BOOL)* - Whether or not to delete the objects that arecurrently in the array"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_vehicle] call KISKA_fnc_convoy_clearVehicleDebugFollowedPath;\n```"
                }
            ],
            "description": "Clears a vehicle's current debug followed path objects array. \nWhen a vehicle is in debug mode, a path of objects will be drawn for the durationthat shows the positions the vehicle had followed while on its drive path. One followed object is created each time a drive path point is considered \"complete\"\n (vehicle within a radius of that point)."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_clearVehicleDebugFollowedPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_clearVehicleDebugFollowPath.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _deleteExisting] call `KISKA_fnc_convoy_clearVehicleDebugFollowPath`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to clear the debug follow path of"
                        },
                        {
                            "name": "_deleteExisting",
                            "description": "*(BOOL)* - Whether or not to delete the objects that arecurrently in the array"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_vehicle] call KISKA_fnc_convoy_clearVehicleDebugFollowPath;\n```"
                }
            ],
            "description": "Clears a vehicle's current debug follow path objects array. \nWhen a vehicle is in debug mode, a path of objects will be drawn for the durationthat shows the positions currently in the vehicle's drive path. This is the followpath."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_clearVehicleDebugFollowPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_create.sqf",
            "syntaxes": [
                {
                    "outline": "[_vics, _convoySeperation] call `KISKA_fnc_convoy_create`",
                    "parameters": [
                        {
                            "name": "_vics",
                            "description": "*(OBJECT[])* - An array of convoy vehicles (that are in their travel order)"
                        },
                        {
                            "name": "_convoySeperation",
                            "description": "*(NUMBER)* - The distance between each vehicle for the convoy (min of 10)"
                        }
                    ],
                    "returns": "*(HASHMAP)* - A hash map containing data pertinent to the convoy's operation"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _convoyHashMap = [\n    [leadVehicle],\n    10\n] call KISKA_fnc_convoy_create;\n```"
                }
            ],
            "description": "Creates an advanced KISKA convoy. Vehicles should be already physically placed in the orderthat they intend to travel in. If creating in an urban setting, ensure vehicles are in a straight line so that they do not initially crash into a building.\n \nThis will create a CBA statemachine that processes one vehicle a frame. It manages the speedof the vehicle relative to the vehicle in front to keep a desired spacing between them. The space between each vehicle can be customized for that specific vehicle or any individual one.\n \nThe first vehicle added to the convoy WILL NOT have its movement managed in any capacity.All other vehicles will essentially follow the path of the lead vehicle. You should limit the speed and control the path of the lead vehicle for your specific use case.\nA convoy requires at least one vehicle (the lead vehicle) to be valid at any given moment.It will be automatically deleted otherwise."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_create",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_delete.sqf",
            "syntaxes": [
                {
                    "outline": "[_convoyHashMap] call `KISKA_fnc_convoy_delete`",
                    "parameters": [
                        {
                            "name": "_convoyHashMap",
                            "description": "*(HASHMAP)* - The convoy hashmap to add to"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _convoyHashMap = [\n    [leadVehicle],\n    10\n] call KISKA_fnc_convoy_create;\n// some time later...\n[_convoyHashMap] call KISKA_fnc_convoy_delete;\n```"
                }
            ],
            "description": "Deletes an instance of a KISKA convoy. All vehicles (that aren't the lead)will halt. This can be executed at any time on a convoy."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_delete",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getBumperPosition.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _isRearBumper] call `KISKA_fnc_convoy_getBumperPosition`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to get the bumper position of"
                        },
                        {
                            "name": "_isRearBumper",
                            "description": "*(BOOL)* - True for rear bumper, false for front bumper"
                        }
                    ],
                    "returns": "*(PositionWorld)* - The world position of the vehicle's bumper"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _rearBumperPositionWorld = [vic,true] call KISKA_fnc_convoy_getBumperPosition;\n```"
                }
            ],
            "description": "Gets the positionWorld of a vehicles front or rear bumper.This function caches values in a hashmap for use in the frame by frame callsin KISKA's advanced convoy."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getBumperPosition",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getConvoyHashMapFromVehicle.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_getConvoyHashMapFromVehicle`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to get the convoy hashmap of"
                        }
                    ],
                    "returns": "*(HASHMAP)* - The hashmap of the convoy this vehicle belongs to \n    (nil in the case of the vehicle not belonging to a convoy)"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _convoyHashMap = [\n    _vehicle\n] call KISKA_fnc_convoy_getConvoyHashMapFromVehicle;\n```"
                }
            ],
            "description": "Gets the corresponding hashmap of a convoy for a particular vehicle."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getConvoyHashMapFromVehicle",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getConvoyLeader.sqf",
            "syntaxes": [
                {
                    "outline": "[_convoyHashMap] call `KISKA_fnc_convoy_getConvoyLeader`",
                    "parameters": [
                        {
                            "name": "_convoyHashMap",
                            "description": "*(HASHMAP)* - The convoy hashmap to get the value from"
                        }
                    ],
                    "returns": "*(OBJECT)* - The lead vehicle in the convoy"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _convoyLeader = [\n    _convoyHashMap\n] call KISKA_fnc_convoy_getConvoyLeader;\n```"
                }
            ],
            "description": "Gets the lead vehicle in a convoy. The convoy lead does not have his movementregulated in any way by the advanced convoy system and will be the vehicle thatother units in the convoy follow."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getConvoyLeader",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getConvoyStatemachine.sqf",
            "syntaxes": [
                {
                    "outline": "[_convoyHashMap] call `KISKA_fnc_convoy_getConvoyStatemachine`",
                    "parameters": [
                        {
                            "name": "_convoyHashMap",
                            "description": "*(HASHMAP)* - The convoy hashmap get the statemachine from"
                        }
                    ],
                    "returns": "*(LOCATION)* - The CBA statemachine"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _convoyStatemachine = [\n    SomeConvoyHashMap\n] call KISKA_fnc_convoy_getConvoyStatemachine;\n```"
                }
            ],
            "description": "Returns the CBA statemachine used to control convoy movement and speed."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getConvoyStatemachine",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getConvoyVehicles.sqf",
            "syntaxes": [
                {
                    "outline": "[_convoyHashMap, _fromIndex] call `KISKA_fnc_convoy_getConvoyVehicles`",
                    "parameters": [
                        {
                            "name": "_convoyHashMap",
                            "description": "*(HASHMAP)* - The convoy hashmap get vehicles from"
                        },
                        {
                            "name": "_fromIndex",
                            "description": "*(NUMBER)* - If provided, only the vehicles from (and including) thethe given index will be returned"
                        }
                    ],
                    "returns": "*(OBJECT[])* - an array containing each vehicle (in there convoy order)"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _convoyVehicles = [\n    SomeConvoyHashMap\n] call KISKA_fnc_convoy_getConvoyVehicles;\n```"
                },
                {
                    "text": "```sqf\nprivate _convoyVehiclesCopy = +([\n    SomeConvoyHashMap\n] call KISKA_fnc_convoy_getConvoyVehicles);\n```"
                },
                {
                    "text": "```sqf\nprivate _startingIndex = 1;\nprivate _allVehiclesButLeader = [\n    SomeConvoyHashMap,\n    _startingIndex\n] call KISKA_fnc_convoy_getConvoyVehicles;\n```"
                }
            ],
            "description": "Returns the list of vehicles in a convoy. This is not a copy of the array usedfor certain internal operations of the convoy. Make a copy if you intend to modifythe contents of the array (see example 2)."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getConvoyVehicles",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getPointBuffer.sqf",
            "syntaxes": [
                {
                    "outline": "[_convoyHashMap] call `KISKA_fnc_convoy_getPointBuffer`",
                    "parameters": [
                        {
                            "name": "_convoyHashMap",
                            "description": "*(HASHMAP)* - The convoy hashmap to get the value from"
                        }
                    ],
                    "returns": "*(NUMBER)* - The minimum distance between each drive path point"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _minBufferBetweenPoints = [\n    _convoyHashMap\n] call KISKA_fnc_convoy_getPointBuffer;\n```"
                }
            ],
            "description": "Gets the minimum distance that must be between each position added to a vehiclesdrive path. Essentially how often the lead vehicle's position is recorded."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getPointBuffer",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getVehicleAtIndex.sqf",
            "syntaxes": [
                {
                    "outline": "[_convoyHashMap, _index] call `KISKA_fnc_convoy_getVehicleAtIndex`",
                    "parameters": [
                        {
                            "name": "_convoyHashMap",
                            "description": "*(HASHMAP)* - The convoy hashmap to get the value from"
                        },
                        {
                            "name": "_index",
                            "description": "*(NUMBER)* - The convoy hashmap to get the value from"
                        }
                    ],
                    "returns": "*(OBJECT)* - The vehicle at the desired index"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _convoyLeader = [\n    _convoyHashMap,\n    0\n] call KISKA_fnc_convoy_getVehicleAtIndex;\n```"
                }
            ],
            "description": "Gets the a vehicle at the specified index of a convoy. \n \nFor example, the convoy leader is the vehicle at index 0 and the vehicle directly behind the leader is index 1."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getVehicleAtIndex",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getVehicleDebugFollowedPath.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_getVehicleDebugFollowedPath`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to get the follow path of"
                        }
                    ],
                    "returns": "*(OBJECT[])* - An array of the vehicle's followed path objects"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _debugFollowedPathObjects = [\n    _vehicle\n] call KISKA_fnc_convoy_getVehicleDebugFollowedPath;\n```"
                }
            ],
            "description": "Gets a vehicle's current debug followed path objects array. \n \nWhen a vehicle is in debug mode, a path of objects will be drawn for the durationthat shows the positions the vehicle had followed while on its drive path. One followed object is created each time a drive path point is considered \"complete\"\n (vehicle within a radius of that point)."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getVehicleDebugFollowedPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getVehicleDebugFollowPath.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_getVehicleDebugFollowPath`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to get the follow path of"
                        }
                    ],
                    "returns": "*(OBJECT[])* - An array of the vehicle's follow path objects"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _debugFollowPathObjects = [\n    _vehicle\n] call KISKA_fnc_convoy_getVehicleDebugFollowPath;\n```"
                }
            ],
            "description": "Gets a given convoy vehicle's current debug follow path.\n \nWhen a vehicle is in debug mode, a path of objects will be drawn for the durationthat shows the positions currently in the vehicle's drive path. This is the followpath."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getVehicleDebugFollowPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getVehicleDebugMarkerType_followedPath.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_getVehicleDebugMarkerType_followedPath`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to get the marker type of"
                        }
                    ],
                    "returns": "*(STRING)* - The classsName used for the 3d debug marker of the followed pathof the given convoy vehicle."
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _followedPathMarkerType = [\n    _vehicle\n] call KISKA_fnc_convoy_getVehicleDebugMarkerType_followedPath;\n```"
                }
            ],
            "description": "Sets the 3d debug marker class name that will be used to mark waypoints for a given vehicles path that have been completed."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getVehicleDebugMarkerType_followedPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getVehicleDebugMarkerType_followPath.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_getVehicleDebugMarkerType_followPath`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to get the marker type of"
                        }
                    ],
                    "returns": "*(STRING)* - The classsName used for the 3d debug marker of the follow pathof the given convoy vehicle."
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _followPathMarkerType = [\n    _vehicle\n] call KISKA_fnc_convoy_getVehicleDebugMarkerType_followPath;\n```"
                }
            ],
            "description": "Gets the 3d debug marker class name that will be used to mark waypoints for a given vehicles path that have been completed."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getVehicleDebugMarkerType_followPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getVehicleDrivePath.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_getVehicleDrivePath`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to get the drive path of"
                        }
                    ],
                    "returns": "*(PositionATL[])* - An array of the current vehicle's path that it is following"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _currentDrivePath = [_vehicle] call KISKA_fnc_convoy_getVehicleDrivePath;\n```"
                }
            ],
            "description": "Gets a given convoy vehicle's current drive path. This will return the referenceto the actual array used with `setDriveOnPath` for the vehicle's following.\n \nYou should not set a vehicle's drive path directly. If you want to overwrite a vehicle'scurrent path, use KISKA_fnc_convoy_modifyVehicleDrivePath."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getVehicleDrivePath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getVehicleIndex.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_getVehicleIndex`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to get the convoy index of"
                        }
                    ],
                    "returns": "*(NUMBER)* - The index of the vehicle in its convoy"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _indexOfVehicleInConvoy = [\n    _vehicle\n] call KISKA_fnc_convoy_getVehicleIndex;\n```"
                }
            ],
            "description": "Gets the index in of the provided vehicle in its convoy.\n\n`0` being the convoy leader and `1` being the vehicle directly behind the convoyleader, for example. `-1` indicates the vehicle is not in a convoy."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getVehicleIndex",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getVehicleLastAddedPoint.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_getVehicleLastAddedPoint`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to get the drive path of"
                        }
                    ],
                    "returns": "*(PositionATL or NIL)* - The last position to be added to the vehicle's drive pathfrom the lead vehicles position."
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _lastAddedPositionFromLead = [\n    _vehicle\n] call KISKA_fnc_convoy_getVehicleLastAddedPoint;\n```"
                }
            ],
            "description": "Gets the last position added to the vehicle's drive path from the LEAD VEHICLE.\nThis does not include modified positions from KISKA_fnc_convoy_modifyVehicleDrivePath."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getVehicleLastAddedPoint",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getVehicleSeperation.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_getVehicleSeperation`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to get the convoy seperation of"
                        }
                    ],
                    "returns": "*(NUMBER)* - The distance the vehicle will keep from the vehicle in front\n    `-1` indicates that no seperation has been set for the vehicle."
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _vehicleConvoySeperation = [\n    _vehicle\n] call KISKA_fnc_convoy_getVehicleSeperation;\n```"
                }
            ],
            "description": "Gets the distance that a given vehicle will keep from the vehicle in frontof it when in a convoy."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getVehicleSeperation",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_handleDeadDriver_default.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _convoyHashMap, _convoyLead, _deadDriver] call `KISKA_fnc_convoy_handleDeadDriver_default`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle that has a dead driver"
                        },
                        {
                            "name": "_convoyHashMap",
                            "description": "*(HASHMAP)* - The hashmap used for the convoy"
                        },
                        {
                            "name": "_convoyLead",
                            "description": "*(OBJECT)* - The lead vehicle of the convoy"
                        },
                        {
                            "name": "_deadDriver",
                            "description": "*(OBJECT)* - The dead driver"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// SHOULD NOT BE CALLED DIRECTLY\n```"
                }
            ],
            "description": "The default function that runs when a driver is detected as dead in a vehicle convoy.This is not fired based off an event handler but rather a check in the onEachFrame forthe convoy vehicles.The function will wait 4 seconds before affecting its behavior on the vehicle.\n \nIf the previous driver was a player, and a player is in the vehicle, nothing will happen.If the previous driver was a player, and a player is NOT in the vehicle, an AI will take overdriving the vehicle.If the previous driver was NOT a player, and a player is in the highest priority seat tobe the new driver, nothing will happen.If the previous driver was NOT a player, and an AI is in the highest priority seat tobe the new driver, they will be automatically moved into the driver seat.\n \nThe priority of vehicle role in the order of who the next driver is:1. commander2. cargo3. turrets4. gunner\nThis means commanders if present will be desired to move into the driver seat overall other vehicle roles."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_handleDeadDriver_default",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_handleUnconsciousDriver_default.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _convoyHashMap, _convoyLead, _unconsciousDriver] call `KISKA_fnc_convoy_handleUnconsciousDriver_default`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle that has an unconscious driver"
                        },
                        {
                            "name": "_convoyHashMap",
                            "description": "*(HASHMAP)* - The hashmap used for the convoy"
                        },
                        {
                            "name": "_convoyLead",
                            "description": "*(OBJECT)* - The lead vehicle of the convoy"
                        },
                        {
                            "name": "_unconsciousDriver",
                            "description": "*(OBJECT)* - The unconscious driver"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// SHOULD NOT BE CALLED DIRECTLY\n```"
                }
            ],
            "description": "The default function that runs when a driver is detected as incapacitated in a vehicle convoy.\nThe function will wait 4 seconds before affecting its behavior on the vehicle.\n \nIf the previous driver was a player, and a player is in the vehicle, nothing will happen.If the previous driver was a player, and a player is NOT in the vehicle, an AI will take overdriving the vehicle.If the previous driver was NOT a player, and a player is in the highest priority seat tobe the new driver, nothing will happen.If the previous driver was NOT a player, and an AI is in the highest priority seat tobe the new driver, they will be automatically moved into the driver seat.\n \nThe priority of vehicle role in the order of who the next driver is:1. commander2. cargo3. turrets4. gunner\nThis means commanders if present will be desired to move into the driver seat overall other vehicle roles."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_handleUnconsciousDriver_default",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_handleVehicleCantMove_default.sqf",
            "syntaxes": [
                {
                    "outline": "[_disabledVehicle, _convoyHashMap, _convoyLead] call `KISKA_fnc_convoy_handleVehicleCantMove_default`",
                    "parameters": [
                        {
                            "name": "_disabledVehicle",
                            "description": "*(OBJECT)* - The vehicle that has been disabled"
                        },
                        {
                            "name": "_convoyHashMap",
                            "description": "*(HASHMAP)* - The hashmap used for the convoy"
                        },
                        {
                            "name": "_convoyLead",
                            "description": "*(OBJECT)* - The lead vehicle of the convoy"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// SHOULD NOT BE CALLED DIRECTLY\n```"
                }
            ],
            "description": "The default behaviour that happens when a vehicle in the convoy is disabled."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_handleVehicleCantMove_default",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_handleVehicleKilled_default.sqf",
            "syntaxes": [
                {
                    "outline": "[_killedVehicle, _convoyHashMap, _convoyLead] call `KISKA_fnc_convoy_handleVehicleKilled_default`",
                    "parameters": [
                        {
                            "name": "_killedVehicle",
                            "description": "*(OBJECT)* - The vehicle that died"
                        },
                        {
                            "name": "_convoyHashMap",
                            "description": "*(HASHMAP)* - The hashmap used for the convoy"
                        },
                        {
                            "name": "_convoyLead",
                            "description": "*(OBJECT)* - The lead vehicle of the convoy"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// SHOULD NOT BE CALLED DIRECTLY\n```"
                }
            ],
            "description": "The default behaviour that happens when a vehicle in the convoy dies."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_handleVehicleKilled_default",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_isVehicleInDebug.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_isVehicleInDebug`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to get the convoy index of"
                        }
                    ],
                    "returns": "*(BOOL)* - `true` if the vehicle is in debug mode"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _isInDebug = [\n    _vehicle\n] call KISKA_fnc_convoy_isVehicleInDebug;\n```"
                }
            ],
            "description": "Gets whether or a given vehicle is in debug mode for a convoy."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_isVehicleInDebug",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_modifyVehicleDrivePath.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _lastIndexToModify, _pointsToAdd] call `KISKA_fnc_convoy_modifyVehicleDrivePath`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to modify the drive path of"
                        },
                        {
                            "name": "_lastIndexToModify",
                            "description": "*(NUMBER)* - The (inclusive) index to stop the modification at"
                        },
                        {
                            "name": "_pointsToAdd",
                            "description": "*(PositionATL[])* - The array of ATL positions to set to"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// overwrite array entirely\n[\n    _vehicle,\n    -1, // without deleting any points in current drive path, add positions to the front of path\n    [\n        [12,34,56],\n        [12,34,58]\n    ]\n] call KISKA_fnc_convoy_modifyVehicleDrivePath;\n```"
                }
            ],
            "description": "Changes the drive path of a given convoy vehicle.\nThe drive path will be overwritten from the _lastIndexToModify (inclusive) backwards until all of the _pointsToAdd have been placed in the array. This means that this function is not capable of appending to the end of an array, but only adding to the front."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_modifyVehicleDrivePath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_onEachFrame.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_convoy_onEachFrame`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// SHOULD NOT BE CALLED DIRECTLY\n```"
                }
            ],
            "description": "Mananges an individual vehicle's position relative to the vehicle in front ofit in a convoy. This function is what the statemachine runs each frame/vehicle.\nThis function intentionally forgoes the use of several getter/setter functions to reduce overhead because it runs every frame."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_onEachFrame",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_removeVehicle.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_removeVehicle`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to remove"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[vic] call KISKA_fnc_convoy_removeVehicle;\n```"
                }
            ],
            "description": "Removes a given vehicle from its convoy.\nThis will shift the index's of all vehicles in the convoy that are lowerthan the given vehicle to remove. If the vehicle is moving (speed > 0)then the vehicle will be told to \"stop\" via a `move` order."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_removeVehicle",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_removeVehicleKilledEvent.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_removeVehicleKilledEvent`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to add the killed eventhandler to"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[vic] call KISKA_fnc_convoy_removeVehicleKilledEvent;\n```"
                }
            ],
            "description": "Removes the \"MPKILLED\" event handler of a given vehicle in a convoy."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_removeVehicleKilledEvent",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getDefaultSeperation.sqf",
            "syntaxes": [
                {
                    "outline": "[_convoyHashMap] call `KISKA_fnc_convoy_setDefaultSeperation`",
                    "parameters": [
                        {
                            "name": "_convoyHashMap",
                            "description": "*(HASHMAP)* - The convoy hashmap to get the value from"
                        }
                    ],
                    "returns": "*(NUMBER)* - The default sepration between newly added convoy vehicles"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _defaultSeperation = [\n    _convoyHashMap\n] call KISKA_fnc_convoy_getDefaultSeperation;\n```"
                }
            ],
            "description": "Gets the default seperation between NEWLY added vehicles to a convoy.\n \nThis is the seperation that vehicles will get by default when they areadded to the convoy."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_setDefaultSeperation",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_setDefaultSeperation.sqf",
            "syntaxes": [
                {
                    "outline": "[_convoyHashMap, _seperation] call `KISKA_fnc_convoy_setDefaultSeperation`",
                    "parameters": [
                        {
                            "name": "_convoyHashMap",
                            "description": "*(HASHMAP)* - The convoy hashmap to set the value in"
                        },
                        {
                            "name": "_seperation",
                            "description": "*(NUMBER)* - The default distance between vehicles"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_convoyHashMap,20] call KISKA_fnc_convoy_setDefaultSeperation;\n```"
                }
            ],
            "description": "Sets the default seperation between NEWLY added vehicles to a convoy.\n \nThis will NOT update the spacing between any vehicles currently in the convoy."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_setDefaultSeperation",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_setPointBuffer.sqf",
            "syntaxes": [
                {
                    "outline": "[_convoyHashMap, _minBufferBetweenPoints] call `KISKA_fnc_convoy_setPointBuffer`",
                    "parameters": [
                        {
                            "name": "_convoyHashMap",
                            "description": "*(HASHMAP)* - The convoy hashmap to get the value from"
                        },
                        {
                            "name": "_minBufferBetweenPoints",
                            "description": "*(NUMBER)* - The distance between positions in order forthem to be added to the convoy drive path"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_convoyHashMap,1] call KISKA_fnc_convoy_setPointBuffer;\n```"
                }
            ],
            "description": "Sets the minimum distance that must be between each position added to a vehiclesdrive path. Essentially how often the lead vehicle's position is recorded."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_setPointBuffer",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_setVehicleDebug.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _debugMode] call `KISKA_fnc_convoy_setVehicleDebug`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to set the convoy seperation of"
                        },
                        {
                            "name": "_debugMode",
                            "description": "*(BOOL)* - `true` to enable, `false` to disable debug"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// debug enabled \n[\n    _vehicle,\n    true\n] call KISKA_fnc_convoy_setVehicleDebug;\n```"
                }
            ],
            "description": "Sets whether or not a given vehicle is in debug mode for convoys."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_setVehicleDebug",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_setVehicleDebugMarkerType_followedPath.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _type] call `KISKA_fnc_convoy_setVehicleDebugMarkerType_followedPath`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to set the marker type of"
                        },
                        {
                            "name": "_type",
                            "description": "*(STRING)* - The class name of the object to spawn as a marker"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    _vehicle,\n    \"Sign_Arrow_Large_blue_F\"\n] call KISKA_fnc_convoy_setVehicleDebugMarkerType_followedPath;\n```"
                }
            ],
            "description": "Sets the 3d debug marker class name that will be used to mark waypoints for a given vehicles path that have been completed."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_setVehicleDebugMarkerType_followedPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_setVehicleDebugMarkerType_followPath.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _type] call `KISKA_fnc_convoy_setVehicleDebugMarkerType_followPath`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to set the marker type of"
                        },
                        {
                            "name": "_type",
                            "description": "*(STRING)* - The class name of the object to spawn as a marker"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    _vehicle,\n    \"Sign_Arrow_Large_Cyan_F\"\n] call KISKA_fnc_convoy_setVehicleDebugMarkerType_followPath;\n```"
                }
            ],
            "description": "Sets the 3d debug marker class name that will be used to mark waypoints for a given vehicles path that have not been completed."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_setVehicleDebugMarkerType_followPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_setVehicleDriveOnPath.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _mode] call `KISKA_fnc_convoy_setVehicleDriveOnPath`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to set the doDriveOnPath var of"
                        },
                        {
                            "name": "_mode",
                            "description": "*(BOOL)* - `true` to enable, `false` to disable driving on newly added points"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// do-drive-on-path enabled \n[\n    _vehicle,\n    true\n] call KISKA_fnc_convoy_setVehicleDriveOnPath;\n```"
                }
            ],
            "description": "Sets whether or not the vehicle will initiate new `setDriveOnPath`'s whenevernew positions are added to its internal drive path.\n \nWhile false, a vehicle will continue to add points from the lead vehicle to itsdrive path and will continue to drive on the path prior to the setting of this to false unless otherwise stopped."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_setVehicleDriveOnPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_getVehicleKilledEvent.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_setVehicleKilledEvent`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to get the killed event code of"
                        }
                    ],
                    "returns": "*(CODE)* - The code that executes when a vehicle is killed in the convoy"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _eventCode = [\n    vic\n] call KISKA_fnc_convoy_getVehicleKilledEvent;\n```"
                }
            ],
            "description": "Gets the code that should execute when a vehicle dies in a convoy.\n \nThis will by default return KISKA_convoy_handleVehicleKilled_default ifnot explicitly set on the vehicle."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_setVehicleKilledEvent",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_setVehicleKilledEvent.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _eventCode] call `KISKA_fnc_convoy_setVehicleKilledEvent`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to set the killed event on"
                        },
                        {
                            "name": "_eventCode",
                            "description": "*(CODE)* - The code to execute when the vehicle dies in a convoy\n \n    Parameters:\n    - 0: _vehicle *(OBJECT)* - The vehicle that died\n    - 1: _convoyHashMap *(OBJECT)* - The hashmap used for the convoy\n    - 2: _convoyLead *(OBJECT)* - The lead vehicle of the convoy"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    vic,\n    {hint str _this}\n] call KISKA_fnc_convoy_setVehicleKilledEvent;\n```"
                }
            ],
            "description": "Sets the code that should execute when a vehicle dies in a convoy."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_setVehicleKilledEvent",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_setVehicleSeperation.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _seperation] call `KISKA_fnc_convoy_setVehicleSeperation`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to set the convoy seperation of"
                        },
                        {
                            "name": "_seperation",
                            "description": "*(NUMBER)* - The distance the vehicle should try to maintainto the vehicle in front of it in a convoy (minimum of 10m)"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    _vehicle,\n    10\n] call KISKA_fnc_convoy_setVehicleSeperation;\n```"
                }
            ],
            "description": "Sets the distance that a given vehicle will keep from the vehicle in frontof it when in a convoy."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_setVehicleSeperation",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_shouldVehicleDriveOnPath.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_shouldVehicleDriveOnPath`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to check the value of"
                        }
                    ],
                    "returns": "*(BOOL)* - The vehicle's state of `KISKA_convoy_doDriveOnPath`"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _doDriveOnPath = [_vehicle] call KISKA_fnc_convoy_shouldVehicleDriveOnPath;\n```"
                }
            ],
            "description": "Gets whether or not the vehicle will initiate new `setDriveOnPath`'s whenevera new point is added to the vehicle's drive path.\n \nWhile false, a vehicle will continue to receive new points in the vehicles drive path."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_shouldVehicleDriveOnPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_stopVehicle.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle] call `KISKA_fnc_convoy_stopVehicle`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to stop"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[vic] call KISKA_fnc_convoy_stopVehicle;\n```"
                }
            ],
            "description": "Used in the process of KISKA's advanced convoy to stop a given vehicle."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_stopVehicle",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Convoy/fn_convoy_syncLatestDrivePoint.sqf",
            "syntaxes": [
                {
                    "outline": "[_convoyHashMap] call `KISKA_fnc_convoy_syncLatestDrivePoint`",
                    "parameters": [
                        {
                            "name": "_convoyHashMap",
                            "description": "*(HASHMAP)* - The convoy's hashmap"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[ConvoyHashMap] call KISKA_fnc_convoy_syncLatestDrivePoint;\n```"
                }
            ],
            "description": "Ensures all vehicles in the convoy have the latest drive path point from theconvoy lead as the last index of their drive path."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_syncLatestDrivePoint",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_countdown.sqf",
            "syntaxes": [
                {
                    "outline": "[_countDownTotal, _shownCountDown, _soundedCountDown, _soundName] spawn `KISKA_fnc_countdown`",
                    "parameters": [
                        {
                            "name": "_countDownTotal",
                            "description": ": *(NUMBER)* - The amount to countdown from"
                        },
                        {
                            "name": "_shownCountDown",
                            "description": ": *(NUMBER)* - The number at which a print out of thecurrent countdown will show on screen."
                        },
                        {
                            "name": "_soundedCountDown",
                            "description": ": *(NUMBER)* - The number at which a beep should play for each second"
                        },
                        {
                            "name": "_soundName",
                            "description": ": *(STRING)* - The cfgSournds entry to play for the sound portion of the countdown"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// print numbers when at 15 and play sound at 10\n[30,15,10] spawn KISKA_fnc_countdown;\n```"
                },
                {
                    "text": "```sqf\n// print numbers when at 15 and play no sound\n[30,15,-1] spawn KISKA_fnc_countdown;\n```"
                }
            ],
            "description": "Sleeps for a given time and eventually displays a certain amount on screen."
        },
        "configuration": {
            "label": "KISKA_fnc_countdown",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Tasks/fn_createTaskFromConfig.sqf",
            "syntaxes": [
                {
                    "outline": "[_config, _owner, _taskState, _destination, _type, _notifyOnCreate, _visibleIn3D] call `KISKA_fnc_createTaskFromConfig`",
                    "parameters": [
                        {
                            "name": "_config",
                            "description": "*(STRING or CONFIG)* - The config entry to convert to a task"
                        },
                        {
                            "name": "_owner",
                            "description": "*(BOOL, OBJECT, GROUP, SIDE, or ARRAY)* - Whom the task is assigned to\n\n(OPTIONAL)"
                        },
                        {
                            "name": "_taskState",
                            "description": "*(STRING, BOOL, or configNull)* - The state of the task, will overwrite config entry"
                        },
                        {
                            "name": "_destination",
                            "description": "*(OBJECT, ARRAY, or configNull)* The position of the task. Array can be either\n    [x,y,z] or [OBJECT,precision] (see setSimpleTaskTarget). The destination can be a configed array, however, this willoverwrite it if provided here."
                        },
                        {
                            "name": "_type",
                            "description": "*(STRING or configNull)* - The task type (defined in CfgTaskTypes)"
                        },
                        {
                            "name": "_notifyOnCreate",
                            "description": "*(BOOL or configNull)* - Should a notification pop up when the task is created?"
                        },
                        {
                            "name": "_visibleIn3D",
                            "description": "*(BOOL or configNull)* - Show a 3D task icon"
                        }
                    ],
                    "returns": "*(STRING)* - Created Task Id"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// simple task from config\n[missionConfigFile >> MyTasks >> \"someTaskClass\",true] call KISKA_fnc_createTaskFromConfig;\n```"
                },
                {
                    "text": "```sqf\n[\n    \"someTaskClass\", // will search in missionConfigFile >> \"KISKA_cfgTasks\"\n    true,\n    \"ASSIGNED\",\n    configNull, // get configed destination value\n    \"ATTACK\"\n] call KISKA_fnc_createTaskFromConfig;\n```"
                }
            ],
            "description": "Creates a task from a config entry. Config should be placed inside KISKA_cfgTasks,just the string is needed to reference the config entry.\nParameters from index 2 onwards will accept configNull as an alias for retrievingthe configed value of the param if it is not changed (see example 2)"
        },
        "configuration": {
            "label": "KISKA_fnc_createTaskFromConfig",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_createVehicleSelectMenu.sqf",
            "syntaxes": [
                {
                    "outline": "[_classes] call `KISKA_fnc_createVehicleSelectMenu`",
                    "parameters": [
                        {
                            "name": "_classes",
                            "description": ": *(STRING[])* - The class names to add to the list (in the order to appear)"
                        }
                    ],
                    "returns": "*(ARRAY)* - The created array"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_menuArray = [\n    [\"B_Heli_Transport_01_F\",\"B_Heli_Attack_01_dynamicLoadout_F\"]\n] call KISKA_fnc_createClassSelectMenu;\n```"
                }
            ],
            "description": "Creates an array to be used with showCommandingMenu.Specifically, this is to provide class names to the command menu and thenallow a player to select a class from the menu such as when requesting CAS."
        },
        "configuration": {
            "label": "KISKA_fnc_createVehicleSelectMenu",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/fn_cruiseMissileStrike.sqf",
            "syntaxes": [
                {
                    "outline": "[_target, _side, _launchPos] call `KISKA_fnc_cruiseMissileStrike`",
                    "parameters": [
                        {
                            "name": "_target",
                            "description": "*(OBJECT or ARRAY)* - Target to hit missile with, can also be a position (ASL)"
                        },
                        {
                            "name": "_side",
                            "description": "*(SIDE)* - The side that is launching the missile"
                        },
                        {
                            "name": "_launchPos",
                            "description": "*(OBJECT or ARRAY)* - An object or position ASL to spawn the missile at.If empty array array (default), a random position is chosen 2000m away."
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[target_1] call KISKA_fnc_cruiseMissileStrike;\n```"
                }
            ],
            "description": "Spawns a cruise missile at designated \"launcher\" and then guides it to a target.\nIf you need a missile that terrain follows, see KISKA_fnc_vlsFireAt."
        },
        "configuration": {
            "label": "KISKA_fnc_cruiseMissileStrike",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_dataLinkMsg.sqf",
            "syntaxes": [
                {
                    "outline": "[_message, _canSkip, _lifetime, _sound] call `KISKA_fnc_datalinkMsg`",
                    "parameters": [
                        {
                            "name": "_message",
                            "description": ": *(STRING or ARRAY)* - If string, the message to display as title.\n \n    If array:\n    - 0: _text : *(STRING)* - Text to display or path to .paa or .jpgimage (may be passed directly if only text is required)\n    - 1: _size : *(NUMBER)* - Scale of text\n    - 2: _color : *(ARRAY)* - RGB or RGBA color (range 0-1). (optional, default: [1, 1, 1, 1])"
                        },
                        {
                            "name": "_canSkip",
                            "description": ": *(BOOL)* - Can the notification be skipped when another is in the queue"
                        },
                        {
                            "name": "_lifetime",
                            "description": ": *(NUMBER)* - How long the notification will be visible (min of 2 seconds)"
                        },
                        {
                            "name": "_sound",
                            "description": ": *(STRING)* - A sound"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"this is the message\", 5] call KISKA_fnc_datalinkMsg;\n```"
                }
            ],
            "description": "Displays a message to the player and creates a diary entry of that message.Also can play a sound when the notification pops up."
        },
        "configuration": {
            "label": "KISKA_fnc_datalinkMsg",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_defend.sqf",
            "syntaxes": [
                {
                    "outline": "[_group, _position, _radius, _threshold, _patrol, _hold] call `KISKA_fnc_defend`",
                    "parameters": [
                        {
                            "name": "_group",
                            "description": "*(GROUP or OBJECT)* - The group to do the defending"
                        },
                        {
                            "name": "_position",
                            "description": "*(OBJECT, LOCATION, GROUP, or ARRAY)* - centre of area to defend *(ARRAY, OBJECT, LOCATION, GROUP)* (Default: _group)"
                        },
                        {
                            "name": "_radius",
                            "description": "*(NUMBER)* - radius of area to defend *(NUMBER)* (Default: 50)"
                        },
                        {
                            "name": "_threshold",
                            "description": "*(NUMBER)* - minimum building positions required to be considered for garrison *(NUMBER)* (Default: 3)"
                        },
                        {
                            "name": "_patrol",
                            "description": "*(NUMBER or BOOL)* - chance for each unit to patrol instead of garrison, true for default, false for 0% *(NUMBER, BOOLEAN)* (Default: 0.1)"
                        },
                        {
                            "name": "_hold",
                            "description": "*(NUMBER or BOOL)* - chance for each unit to hold their garrison in combat, true for 100%, false for 0% *(NUMBER, BOOLEAN)* (Default: 0)"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[this] call KISKA_fnc_defend\n```"
                }
            ],
            "description": "A function for a group to defend a parsed location. Should be ran locally.\nUnits will mount nearby static machine guns and garrison in nearby buildings.10% chance to patrol the radius unless specified differently (100% when no available building positions).0% chance to hold defensive positions in combat unless specified differently.\nModifications:Accounted for doMove command's inability to use z-axis"
        },
        "configuration": {
            "label": "KISKA_fnc_defend",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_deleteAtArray.sqf",
            "syntaxes": [
                {
                    "outline": "[_arrayVariableName, _indexToRemove, _namespace] call `KISKA_fnc_deleteAtArray`",
                    "parameters": [
                        {
                            "name": "_arrayVariableName",
                            "description": ": *(STRING)* - The global array in string format"
                        },
                        {
                            "name": "_indexToRemove",
                            "description": ": *(ANY)* - The index to remove"
                        },
                        {
                            "name": "_namespace",
                            "description": ": *(NAMESPACE,OBJECT,GROUP,LOCATION,CONTROL,DISPLAY)* - What namespace the array is in"
                        }
                    ],
                    "returns": "*(BOOL)* - True if done, false if not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"myGlobalArrayVar\",someInfoHere] call KISKA_fnc_deleteAtArray;\n```"
                }
            ],
            "description": "Removes an index from a global array.\nThis was used in lieu of creating a public variable to sync the array.In order to keep network traffic lower if the array becomes large."
        },
        "configuration": {
            "label": "KISKA_fnc_deleteAtArray",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_deleteAtArray_interface.sqf",
            "syntaxes": [
                {
                    "outline": "[_arrayVariableName, _indexToRemove, _namespace] call `KISKA_fnc_deleteAtArray_interface`",
                    "parameters": [
                        {
                            "name": "_arrayVariableName",
                            "description": ": *(STRING)* - The global array in string format"
                        },
                        {
                            "name": "_indexToRemove",
                            "description": ": *(ANY)* - The index to remove"
                        },
                        {
                            "name": "_namespace",
                            "description": ": *(NAMESPACE,OBJECT,GROUP,LOCATION,CONTROL,DISPLAY)* - What namespace the array is in"
                        }
                    ],
                    "returns": "*(BOOL)* - True if done, false if not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"myGlobalArrayVar\",someInfoHere] call KISKA_fnc_deleteAtArray;\n```"
                }
            ],
            "description": "Removes an index from a global array. Checks if machine hasInterface before.\nThis was used in lieu of creating a public variable to sync the array.In order to keep network traffic lower if the array becomes large."
        },
        "configuration": {
            "label": "KISKA_fnc_deleteAtArray_interface",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_deleteRandomIndex.sqf",
            "syntaxes": [
                {
                    "outline": "[_array] call `KISKA_fnc_deleteRandomIndex`",
                    "parameters": [
                        {
                            "name": "_array",
                            "description": "*(ARRAY)* - The array to find a random index of."
                        }
                    ],
                    "returns": "*(ANY)* - The random item removed from the array"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _randomDeletedItem = [[1,2,3]] call KISKA_fnc_deleteRandomIndex;\n```"
                }
            ],
            "description": "Removes and returns a random item from an array"
        },
        "configuration": {
            "label": "KISKA_fnc_deleteRandomIndex",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_detectControlKeys.sqf",
            "syntaxes": [
                {
                    "outline": "spawn `KISKA_fnc_detectControlKeys`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nPRE-INIT Function\n```"
                }
            ],
            "description": "Arma 3's support system currently has a bug that allows players to call inmultiple supports by having the map open and holding down a ctrl key and left\n - clicking while in the support menu. Each click will call in a support."
        },
        "configuration": {
            "label": "KISKA_fnc_detectControlKeys",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Rally/fn_disallowGroupRally.sqf",
            "syntaxes": [
                {
                    "outline": "[_groupToRemove, _deleteMarker] call `KISKA_fnc_disallowGroupRally`",
                    "parameters": [
                        {
                            "name": "_groupToRemove",
                            "description": "*(GROUP or OBJECT)* - The group or the unit whose group to remove"
                        },
                        {
                            "name": "_deleteMarker",
                            "description": "*(BOOL)* - Should the group's latest rally marker (if present) be deleted"
                        }
                    ],
                    "returns": "*(BOOL)* - True if no longer allowed or never was, false if error"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// disallows player's group to drop a rally point (if they're the server)\n[player] call KISKA_fnc_disallowGroupRally;\n```"
                }
            ],
            "description": "Removes a groups ability to rally an deletes its marker if requested."
        },
        "configuration": {
            "label": "KISKA_fnc_disallowGroupRally",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_doMagRepack.sqf",
            "syntaxes": [
                {
                    "outline": "[_unit, _doHint] call `KISKA_fnc_doMagRepack`",
                    "parameters": [
                        {
                            "name": "_unit",
                            "description": ": *(OBJECT)* - The person doing the repack"
                        },
                        {
                            "name": "_doHint",
                            "description": ": *(BOOL)* - Should the local client be informed of packs?"
                        }
                    ],
                    "returns": "*(BOOL)* - false if not completed, true if it was"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[player] call KISKA_fnc_doMagRepack;\n```"
                }
            ],
            "description": "Completes a repack on the units current weapon."
        },
        "configuration": {
            "label": "KISKA_fnc_doMagRepack",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_driveTo.sqf",
            "syntaxes": [
                {
                    "outline": "[_crew, _vehicle, _dismountPoint, _completionRadius, _speed, _codeOnComplete] call `KISKA_fnc_driveTo`",
                    "parameters": [
                        {
                            "name": "_crew",
                            "description": ": *(GROUP, OBJECT[], or OBJECT)* - The units to move into the vehicle and drive"
                        },
                        {
                            "name": "_vehicle",
                            "description": ": *(OBJECT)* - The vehicle to put units into"
                        },
                        {
                            "name": "_dismountPoint",
                            "description": ": *(OBJECT or ARRAY)* - The position to move to, can be object or position array"
                        },
                        {
                            "name": "_completionRadius",
                            "description": ": *(NUMBER)* - The radius at which the waypoint is complete and the units can disembark from the _dismountPoint, -1 for exact placement"
                        },
                        {
                            "name": "_speed",
                            "description": ": *(STRING)* - The for the driver group to move at"
                        },
                        {
                            "name": "_codeOnComplete",
                            "description": ": *(CODE, STRING, or ARRAY)* - Code to run upon completion of disembark. See KISKA_fnc_callBack\n \n    Parameters:\n    - 0: *(OBJECT)* - The vehicle, crew (ARRAY), and crew groups (ARRAY)\n    - 1: *(OBJECT[])* - The crew of the vehicle\n    - 2: *(GROUP[])* - All the groups that are in the vehicle crew"
                        }
                    ],
                    "returns": "*(BOOL)* - false if encountered error, true if success"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_group1, _vehicle, myDismountPoint] call KISKA_fnc_driveTo;\n```"
                }
            ],
            "description": "Units will drive to point and get out of vehicle."
        },
        "configuration": {
            "label": "KISKA_fnc_driveTo",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_dropOff.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _dropOffPosition, _unitsToDropOff, _completionRadius, _speed, _codeOnComplete] call `KISKA_fnc_dropOff`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": ": *(OBJECT)* - The vehicle that will drop of units"
                        },
                        {
                            "name": "_dropOffPosition",
                            "description": ": *(OBJECT or ARRAY)* - The position to drop units off, can be object or position array"
                        },
                        {
                            "name": "_unitsToDropOff",
                            "description": ": *(GROUP, ARRAY, or OBJECT)* - The units to drop off"
                        },
                        {
                            "name": "_completionRadius",
                            "description": ": *(NUMBER)* - The radius at which the waypoint is complete and the units can disembark from the _dropOffPosition, -1 for exact placement"
                        },
                        {
                            "name": "_speed",
                            "description": ": *(STRING)* - The for the driver group to move at"
                        },
                        {
                            "name": "_codeOnComplete",
                            "description": ": *(CODE, STRING, or ARRAY)* - Code to run upon completion of disembark. See KISKA_fnc_callBack\n \n    Params:\n \n        - 0. *(OBJECT)* - The vehicle that will drop of units\n        - 1. *(ARRAY)* - The units dropped off at this location"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    myVehicle,\n    myPosition,\n    player\n] call KISKA_fnc_dropOff;\n```"
                }
            ],
            "description": "Tells a vehicle to move to a position and then drop off the specified units."
        },
        "configuration": {
            "label": "KISKA_fnc_dropOff",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Tasks/fn_endTask.sqf",
            "syntaxes": [
                {
                    "outline": "[_taskId, _state, _notify, _owner] call `KISKA_fnc_endTask`",
                    "parameters": [
                        {
                            "name": "_taskId",
                            "description": "*(STRING)* - The task id/KISKA_cfgTasks class name"
                        },
                        {
                            "name": "_state",
                            "description": "*(NUMBER)* - 0 for SUCCEEDED, 1 for FAILED, 2 for CANCELED"
                        },
                        {
                            "name": "_notify",
                            "description": "*(BOOL)* - Should a nortification be shown"
                        },
                        {
                            "name": "_owner",
                            "description": "*(BOOL, OBJECT, GROUP, SIDE, or ARRAY)* - Whom the task is assigned to\n    (this is only needed in the event that the task is ended without it having been created)"
                        }
                    ],
                    "returns": "*(BOOL)* - Whether or not the state of the task was set to the desired one"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _taskIsSucceeded = [\"mytaskID\",0] call KISKA_fnc_endTask;\n```"
                }
            ],
            "description": "Either completes, cancels, or ends a task and calls the task's onCompleteevent if it is defined in KISKA_cfgTasks.\nMeant to be paired with KISKA_fnc_createTaskFromConfig."
        },
        "configuration": {
            "label": "KISKA_fnc_endTask",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_engageHeliTurretsLoop.sqf",
            "syntaxes": [
                {
                    "outline": "[_heli, _sleepTime, _revealAccuracy, _detectionRadius, _skill, _makeInvulnerable, _turretsWithWeapons] spawn `KISKA_fnc_engageHeliTurretsLoop`",
                    "parameters": [
                        {
                            "name": "_heli",
                            "description": ": *(OBJECT)* - The helicopter to set up"
                        },
                        {
                            "name": "_sleepTime",
                            "description": ": *(NUMBER)* - Time in between each \"refresh\" of the targets gunners are revealed"
                        },
                        {
                            "name": "_revealAccuracy",
                            "description": ": *(NUMBER)* - The accuracy of the reveals of targets for gunners"
                        },
                        {
                            "name": "_detectionRadius",
                            "description": ": *(NUMBER)* - The radius within to search for targets for the gunners"
                        },
                        {
                            "name": "_skill",
                            "description": ": *(NUMBER)* - The skill of the vehicle crew"
                        },
                        {
                            "name": "_makeInvulnerable",
                            "description": ": *(BOOL)* - Makes vehicle crew invulnerable or not"
                        },
                        {
                            "name": "_turretsWithWeapons",
                            "description": ": *(ARRAY)* - If you've already found which turrets to regard as \"gunner\" turrets, pass their turret pathsor the function will get them."
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    _vehicle,\n    5,\n    4,\n    250,\n    1,\n    true\n] spawn KISKA_fnc_engageHeliTurretsLoop;\n```"
                }
            ],
            "description": "Sets up a helicopter's turrets to be able to properly engage enemies withoutwithout the pilot going crazy.\nStarts a loop that will reveal targets within a given radius to gunners to engage.\nYou can use variables in the _heli's namepsace to adjust params dynamically:\n    \"KISKA_heliTurrets_endLoop\" - ends the function\n    \"KISKA_heliTurrets_sleepTime\" - adjusts the _sleepTime param\n    \"KISKA_heliTurrets_revealAccuracy\" - adjusts the _revealAccuracy param\n    \"KISKA_heliTurrets_detectionRadius\" - adjusts the _detectionRadius param\n    \"KISKA_heliTurrets_running\" - checks if the system is running"
        },
        "configuration": {
            "label": "KISKA_fnc_engageHeliTurretsLoop",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_errorNotification.sqf",
            "syntaxes": [
                {
                    "outline": "[_message, _lifetime] call `KISKA_fnc_errorNotification`",
                    "parameters": [
                        {
                            "name": "_message",
                            "description": ": *(STRING or ARRAY)* - The second line of the notification.Formatted the same as the parameters for CBA_fnc_notify:_lineN - N-th content line (may be passed directly if only 1 line is required). *(ARRAY)*_text  - Text to display or path to .paa or .jpg image (may be passed directly if only text is required). *(STRING, NUMBER)*_size  - Text or image size multiplier. (optional, default: 1) *(NUMBER)*_color - RGB or RGBA color (range 0-1). (optional, default: [1, 1, 1, 1]) *(ARRAY)*"
                        },
                        {
                            "name": "_lifetime",
                            "description": ": *(NUMBER)* - How long the notification lasts in seconds (at least 2)"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"You made and error\"] call KISKA_fnc_errorNotification;\n```"
                }
            ],
            "description": "Prints a simple KISKA Notify error notification on screen."
        },
        "configuration": {
            "label": "KISKA_fnc_errorNotification",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/EventHandlers/fn_eventHandler_addFromConfig.sqf",
            "syntaxes": [
                {
                    "outline": "[_entityToAddEventHandlerTo, _config, _code] call `KISKA_fnc_eventHandler_addFromConfig`",
                    "parameters": [
                        {
                            "name": "_entityToAddEventHandlerTo",
                            "description": "*(ANY)* - The entity to add the eventhandler to"
                        },
                        {
                            "name": "_config",
                            "description": "*(CONFIG)* - The config of the eventhandler"
                        },
                        {
                            "name": "_code",
                            "description": "*(CODE or STRING)* - What to execute when the eventhandler is called_thisScriptedEventHandler is available with the event id"
                        }
                    ],
                    "returns": "*(NUMBER)* - The ID of the eventhandler"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _eventID = [\n    player,\n    myConfig\n] call KISKA_fnc_eventHandler_addFromConfig\n```"
                }
            ],
            "description": "Adds a configed custom eventhandler."
        },
        "configuration": {
            "label": "KISKA_fnc_eventHandler_addFromConfig",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/EventHandlers/fn_eventHandler_createCBAStateMachine.sqf",
            "syntaxes": [
                {
                    "outline": "[_config] call `KISKA_fnc_eventHandler_createCBAStateMachine`",
                    "parameters": [
                        {
                            "name": "_config",
                            "description": "*(CONFIG)* - The config of the statemachine"
                        }
                    ],
                    "returns": "*(LOCATION)* - The statemachine"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_statemachine = [myConfig] call KISKA_fnc_eventHandler_createCBAStateMachine\n```"
                }
            ],
            "description": "Adds a configed custom eventhandler"
        },
        "configuration": {
            "label": "KISKA_fnc_eventHandler_createCBAStateMachine",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/EventHandlers/fn_eventHandler_remove.sqf",
            "syntaxes": [
                {
                    "outline": "[_entity, _eventConfig, _id] call `KISKA_fnc_eventHandler_remove`",
                    "parameters": [
                        {
                            "name": "_entity",
                            "description": "*(ANY)* - The config of the eventhandler"
                        },
                        {
                            "name": "_eventConfig",
                            "description": "*(CONFIG)* - The eventhandler config path"
                        },
                        {
                            "name": "_id",
                            "description": "*(NUMBER)* - The event to remove"
                        }
                    ],
                    "returns": "*(BOOL)* - `true` if removed, `false` if it never existed"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _removed = [\n    player,\n    configFile >> \"KISKA_EventHandlers\" >> \"KISKA_combatBehaviourChangedEvent\",\n    0\n] call KISKA_fnc_eventHandler_remove\n```"
                }
            ],
            "description": "Removes a configed custom eventhandler.\nWorth noting that this will still return `true` even after the event has beenremoved as BIS_fnc_removeScriptedEventHandler essentially checks that the eventisn't one that never could have existed."
        },
        "configuration": {
            "label": "KISKA_fnc_eventHandler_remove",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_exportLoadouts.sqf",
            "syntaxes": [
                {
                    "outline": "[_units, _exportAsConfig] call `KISKA_fnc_exportLoadouts`",
                    "parameters": [
                        {
                            "name": "_units",
                            "description": "*(OBJECT[] or OBJECT)* - The units to get the loadouts of"
                        },
                        {
                            "name": "_exportAsConfig",
                            "description": "*(BOOL)* - Will export list in config array format ({} instead of [])"
                        }
                    ],
                    "returns": "*(STRING)* - An array of loadouts as a string. This will be either"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _loadouts = [_units,true] call KISKA_fnc_exportLoadouts;\n```"
                }
            ],
            "description": "Exports a given unit or units loadout into an array or loadouts. This can be either a standard array or formatted for config files."
        },
        "configuration": {
            "label": "KISKA_fnc_exportLoadouts",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_exportSpawnPositions.sqf",
            "syntaxes": [
                {
                    "outline": "[_layer, _convertToConfig] call `KISKA_fnc_exportSpawnPositions`",
                    "parameters": [
                        {
                            "name": "_layer",
                            "description": "*(STRING or NUMBER)* - The name of the layer or if in 3den, its layer id"
                        },
                        {
                            "name": "_convertToConfig",
                            "description": "*(BOOL)* - Change all square brackets ([]) to curly ({})"
                        }
                    ],
                    "returns": "*(STRING)* - The converted Array"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"someLayer\",true] call KISKA_fnc_exportSpawnPositions;\n```"
                }
            ],
            "description": "Takes a layer of objects and produces an array of arrays that are their 3dATL position and current direction ([0,0,0,0]).\nCan also convert the arrays to config compatible format.\nThis will copy its output to the clipboard if run on the server;"
        },
        "configuration": {
            "label": "KISKA_fnc_exportSpawnPositions",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_findConfigAny.sqf",
            "syntaxes": [
                {
                    "outline": "[_pathArray] call `KISKA_fnc_findConfigAny`",
                    "parameters": [
                        {
                            "name": "_pathArray",
                            "description": ": *(ARRAY)* - The array in string format"
                        }
                    ],
                    "returns": "*(CONFIG)* - The first config path if found or configNull if not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_configPath = [[\"CfgMusic\",\"Music_Intro_02_MissionStart\"]] call KISKA_fnc_findConfigAny;\n```"
                }
            ],
            "description": "Searchs missionConfigFile, campaignConfigFile, and the configFile\n (in that order) to find a config based upon the sub paths provided.\nReturns the first one it finds.\nThe BIS counterpart to this is BIS_fnc_loadClass and while it can be about 0.0005-0.0010msfaster if the path is short (about 2 entries). It can yield about 0.005ms faster in various cases."
        },
        "configuration": {
            "label": "KISKA_fnc_findConfigAny",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_findIfBool.sqf",
            "syntaxes": [
                {
                    "outline": "[_array, _codeToCheck, _thisArgs] call `KISKA_fnc_findIfBool`",
                    "parameters": [
                        {
                            "name": "_array",
                            "description": ": *(ARRAY)* - The array to check"
                        },
                        {
                            "name": "_codeToCheck",
                            "description": ": *(CODE)* - The code to check against the array indexes.Needs to return a BOOl.Params are passed within _thisArgs."
                        },
                        {
                            "name": "_thisArgs",
                            "description": ": *(ARRAY)* - Any local arguements that can be passed"
                        }
                    ],
                    "returns": "*(BOOL)* - True if an index meets the condition, false if not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// returns true if any player is alive\n[allPlayers,{alive _x}] call KISKA_fnc_findIfBool;\n```"
                }
            ],
            "description": "Checks if an array index satisfies the provided code, and returns a BOOLfor whether or not one was found."
        },
        "configuration": {
            "label": "KISKA_fnc_findIfBool",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_addDiaryEntry.sqf",
            "syntaxes": [
                {
                    "outline": "spawn `KISKA_fnc_GCH_addDiaryEntry`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nPRE-INIT function\n```"
                }
            ],
            "description": "Creates a diary entry in the map for the player to open the Group Manager"
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_addDiaryEntry",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_addGroupEventhandlers.sqf",
            "syntaxes": [
                {
                    "outline": "[_group] call `KISKA_fnc_GCH_addGroupEventhandlers`",
                    "parameters": [
                        {
                            "name": "_group",
                            "description": "*(GROUP)* - The Group to add the eventhandlers to"
                        }
                    ],
                    "returns": "*(HASHMAP)* - A map with all event ids contained within it"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[group player] call KISKA_fnc_GCH_addGroupEventhandlers\n```"
                }
            ],
            "description": "Adds group eventhandlers that help the GCH GUI function."
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_addGroupEventhandlers",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_addMissionEvents.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_GCH_addMissionEvents`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nPRE-INIT function\n```"
                }
            ],
            "description": "Adds mission event handlers for keeping track of groups."
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_addMissionEvents",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_canPlayerChangeGroup.sqf",
            "syntaxes": [
                {
                    "outline": "[_groupToJoin] call `KISKA_fnc_GCH_canPlayerChangeGroup`",
                    "parameters": [
                        {
                            "name": "_groupToJoin",
                            "description": ": *(group)* - The group a player wants to join"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[someGroup] call KISKA_fnc_GCH_canPlayerChangeGroup;\n```"
                }
            ],
            "description": "The function that fires on the leave group button click event.The Event is added in KISKA_fnc_GCHOnLoad."
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_canPlayerChangeGroup",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_doesGroupHaveAnotherPlayer.sqf",
            "syntaxes": [
                {
                    "outline": "[_group] call `KISKA_fnc_GCH_doesGroupHaveAnotherPlayer`",
                    "parameters": [
                        {
                            "name": "_group",
                            "description": "*(GROUP)* - The group to search in"
                        }
                    ],
                    "returns": "*(BOOL)* - True if another player is in ther group"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[group player] call KISKA_fnc_GCH_doesGroupHaveAnotherPlayer\n```"
                }
            ],
            "description": "Checks if a group contains another player other than the local player"
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_doesGroupHaveAnotherPlayer",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_dontExcludePlayerGroupDefault.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_GCH_dontExcludePlayerGroupDefault`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nPOST-INIT Function\n```"
                }
            ],
            "description": "In order to maintain a player-group-is-not-excluded by default in the Group Changer, when a player joins the game, they will set their groupto be not excluded on all other machines and JIP"
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_dontExcludePlayerGroupDefault",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_getPlayerSide.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_GCH_getPlayerSide`",
                    "parameters": [],
                    "returns": "*(SIDE)* - The side of the player's group"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _playerSide = call KISKA_fnc_GCH_getPlayerSide;\n```"
                }
            ],
            "description": "Returns the side of the player's group in order to avoid if the player iscaptive and the object is technically a part of the civ faction for instance."
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_getPlayerSide",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_getSelectedGroup.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_GCH_getSelectedGroup`",
                    "parameters": [],
                    "returns": "*(GROUP)* - The currently selected group or grpNull if not found"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _selectedGroup = [] call KISKA_fnc_GCH_getSelectedGroup;\n```"
                }
            ],
            "description": "Returns the selected group in the group changer."
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_getSelectedGroup",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_getSideGroups.sqf",
            "syntaxes": [
                {
                    "outline": "[_side] call `KISKA_fnc_GCH_getSideGroups`",
                    "parameters": [
                        {
                            "name": "_side",
                            "description": "*(SIDE)* - The side to get the groups of"
                        }
                    ],
                    "returns": "*(ARRAY)* - List of all the groups"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _playerSide = [] call KISKA_fnc_GCH_getPlayerSide;\n_groups = [_playerSide] call KISKA_fnc_GCH_getSideGroups;\n```"
                }
            ],
            "description": "Gets all groups of a particular side and that are not exlcuded from the GCH"
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_getSideGroups",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_groupDeleteQuery.sqf",
            "syntaxes": [
                {
                    "outline": "[_group, _canDelete] call `KISKA_fnc_GCH_groupDeleteQuery`",
                    "parameters": [
                        {
                            "name": "_group",
                            "description": "*(GROUP)* - The group to change the auto-deletion on"
                        },
                        {
                            "name": "_canDelete",
                            "description": "*(BOOL)* - Set the group to be deleted or not"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[myGroup,false] call KISKA_fnc_GCH_groupDeleteQuery;\n```"
                }
            ],
            "description": "Acts as a liason from a client to add a group to auto delete if necessary.\nOnly works where the group is local and need to use groupOwner to get thatwhich only works on the server."
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_groupDeleteQuery",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_isAllowedToEdit.sqf",
            "syntaxes": [
                {
                    "outline": "[_groupLeader] call `KISKA_fnc_GCH_isAllowedToEdit`",
                    "parameters": [
                        {
                            "name": "_groupLeader",
                            "description": "*(OBJECT or GROUP)* - The leader or group to edit the property on.If provided, it will be assumed that even the group leader can edit the property"
                        }
                    ],
                    "returns": "*(BOOL)* - True if yes, false if no."
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_canEdit = [myGroup] call KISKA_fnc_GCH_isAllowedToEdit;\n```"
                }
            ],
            "description": "Checks if a machine is allowed to edit a given property in the GCH dialog."
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_isAllowedToEdit",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_isGroupExcluded.sqf",
            "syntaxes": [
                {
                    "outline": "[_group, _canBeNil] call `KISKA_fnc_GCH_isGroupExcluded`",
                    "parameters": [
                        {
                            "name": "_group",
                            "description": "*(GROUP)* - The group to check exclusion of"
                        },
                        {
                            "name": "_canBeNil",
                            "description": "*(BOOL)* - Whether or not to operate under the assumption of a default \"true\" value.if `true`, function can either return a BOOL or nil for the var never having been set"
                        }
                    ],
                    "returns": "*(BOOL or nil)* - Returns true if the group is excluded, false if not, or nil if never defined"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _isExcluded = [group player] call KISKA_fnc_GCH_isGroupExcluded;\n```"
                }
            ],
            "description": "Checks if a group is excluded from the Group Changer menu."
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_isGroupExcluded",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_isOpen.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_GCH_isOpen`",
                    "parameters": [],
                    "returns": "*(BOOL)* - Returns true if the group changer is open and false if it is not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _isOpen = call KISKA_fnc_GCH_isOpen;\n```"
                }
            ],
            "description": "Checks if the group changer is open or not."
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_isOpen",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_openDialog.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_GCH_openDialog`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_GCH_openDialog;\n```"
                }
            ],
            "description": "Opens KISKA Group Changer dialog."
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_openDialog",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_setGroupExcluded.sqf",
            "syntaxes": [
                {
                    "outline": "[_group, _isExcluded, _synchronize] call `KISKA_fnc_GCH_setGroupExcluded`",
                    "parameters": [
                        {
                            "name": "_group",
                            "description": "*(GROUP)* - The group to check exclusion of"
                        },
                        {
                            "name": "_isExcluded",
                            "description": "*(BOOL)* - True to exclude group, false to include"
                        },
                        {
                            "name": "_synchronize",
                            "description": "*(BOOL)* - True to remoteExec this function and provide a JIP message"
                        }
                    ],
                    "returns": "*(BOOL)* - Returns true if the group is excluded or false if not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// exclude group\nprivate _isExcluded = [group player,true] call KISKA_fnc_GCH_setGroupExcluded;\n```"
                }
            ],
            "description": "Sets a group's exclusion from the Group Changer."
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_setGroupExcluded",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_setLeaderRemote.sqf",
            "syntaxes": [
                {
                    "outline": "[_group, _unitToSet] call `KISKA_fnc_GCH_setLeaderRemote`",
                    "parameters": [
                        {
                            "name": "_group",
                            "description": "*(GROUP)* - The group to set the unit to leader"
                        },
                        {
                            "name": "_unitToSet",
                            "description": "*(OBJECT)* - The unit to set to leader of the group"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[group player, player] call KISKA_fnc_GCH_setLeaderRemote;\n```"
                }
            ],
            "description": "Remotely sets a leader of a group from the server. (Must be run on the server)"
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_setLeaderRemote",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_updateCurrentGroupSection.sqf",
            "syntaxes": [
                {
                    "outline": "[_updateUnitList, _updateLeaderIndicator, _updateGroupId, _updateCanDeleteCombo, _updateCanRallyCombo] call `KISKA_fnc_GCH_updateCurrentGroupSection`",
                    "parameters": [
                        {
                            "name": "_updateUnitList",
                            "description": "*(BOOL)* - Updates the list of units"
                        },
                        {
                            "name": "_updateLeaderIndicator",
                            "description": "*(BOOL)* - Updates the text that shows the leader's name"
                        },
                        {
                            "name": "_updateGroupId",
                            "description": "*(BOOL)* - Updates the group's ID name"
                        },
                        {
                            "name": "_updateCanDeleteCombo",
                            "description": "*(BOOL)* - Updates the state of the can delete combo list"
                        },
                        {
                            "name": "_updateCanRallyCombo",
                            "description": "*(BOOL)* - Updates the state of the can delete combo list"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// update just the unit list\n[true] call KISKA_fnc_GCH_updateCurrentGroupSection;\n```"
                }
            ],
            "description": "Updates the individual components of the current group section of the GUI."
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_updateCurrentGroupSection",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_updateSideGroupsList.sqf",
            "syntaxes": [
                {
                    "outline": "[_queryForGroups] call `KISKA_fnc_GCH_updateSideGroupsList`",
                    "parameters": [
                        {
                            "name": "_queryForGroups",
                            "description": "*(BOOL)* - Does a search for all groups that can appear in the Group Changer need to be reconducted?"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[true] call KISKA_fnc_GCH_updateSideGroupsList;\n```"
                }
            ],
            "description": "Updates the side's groups list for the GCH dialog."
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_updateSideGroupsList",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCHOnLoad.sqf",
            "syntaxes": [
                {
                    "outline": "[_display] call `KISKA_fnc_GCHOnLoad`",
                    "parameters": [
                        {
                            "name": "_display",
                            "description": "*(DISPLAY)* - The display of the dialog"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_display] call KISKA_fnc_GCHOnLoad;\n```"
                }
            ],
            "description": "Executes in the onload event for the KISKA's Group Changer Dislog"
        },
        "configuration": {
            "label": "KISKA_fnc_GCHOnLoad",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCHOnLoad_assignTeamCombo.sqf",
            "syntaxes": [
                {
                    "outline": "[_control] call `KISKA_fnc_GCHOnLoad_assignTeamCombo`",
                    "parameters": [
                        {
                            "name": "_control",
                            "description": "*(CONTROL)* - The control for the combo box"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_control] call KISKA_fnc_GCHOnLoad_assignTeamCombo;\n```"
                }
            ],
            "description": "Adds control event handler to the combo box for turning it on and off."
        },
        "configuration": {
            "label": "KISKA_fnc_GCHOnLoad_assignTeamCombo",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCH_assignTeam.sqf",
            "syntaxes": [
                {
                    "outline": "[_unit, _team] spawn `KISKA_fnc_GCHOnLoad_assignTeamCombo`",
                    "parameters": [
                        {
                            "name": "_unit",
                            "description": "*(OBJECT)* - The unit to reassign"
                        },
                        {
                            "name": "_team",
                            "description": "*(NUMBER)* - the team to assign"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[aUnit] remoteExec [\"KISKA_fnc_GCH_assignTeam\",LocalPlayerUnitOrLeaderOfGroup];\n```"
                }
            ],
            "description": "Reassigns a unit's team"
        },
        "configuration": {
            "label": "KISKA_fnc_GCHOnLoad_assignTeamCombo",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCHOnLoad_canBeDeletedCombo.sqf",
            "syntaxes": [
                {
                    "outline": "[_control] call `KISKA_fnc_GCHOnLoad_canBeDeletedCombo`",
                    "parameters": [
                        {
                            "name": "_control",
                            "description": "*(CONTROL)* - The control for the combo box"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_control] call KISKA_fnc_GCHOnLoad_canBeDeletedCombo;\n```"
                }
            ],
            "description": "Adds control event handler to the combo box for turning it on and off."
        },
        "configuration": {
            "label": "KISKA_fnc_GCHOnLoad_canBeDeletedCombo",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCHOnLoad_canRallyCombo.sqf",
            "syntaxes": [
                {
                    "outline": "[_control] call `KISKA_fnc_GCHOnLoad_canRallyCombo`",
                    "parameters": [
                        {
                            "name": "_control",
                            "description": "*(CONTROL)* - The control for the combo box"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_control] call KISKA_fnc_GCHOnLoad_canRallyCombo;\n```"
                }
            ],
            "description": "Adds control event handler to the combo box for turning it on and off."
        },
        "configuration": {
            "label": "KISKA_fnc_GCHOnLoad_canRallyCombo",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCHOnLoad_closeButton.sqf",
            "syntaxes": [
                {
                    "outline": "[_control] call `KISKA_fnc_GCHOnLoad_closeButton`",
                    "parameters": [
                        {
                            "name": "_control",
                            "description": "*(CONTROL)* - The control for the close button"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_control] call KISKA_fnc_GCHOnLoad_closeButton;\n```"
                }
            ],
            "description": "Adds control event handler to the close buttont that will close the dialog."
        },
        "configuration": {
            "label": "KISKA_fnc_GCHOnLoad_closeButton",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCHOnLoad_joinGroupButton.sqf",
            "syntaxes": [
                {
                    "outline": "[_control] call `KISKA_fnc_GCHOnLoad_joinGroupButton`",
                    "parameters": [
                        {
                            "name": "_control",
                            "description": "*(CONTROL)* - The control of the button"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[buttonControl]  call KISKA_fnc_GCHOnLoad_joinGroupButton;\n```"
                }
            ],
            "description": "The function that fires on the join group button click event.The Event is called from KISKA_fnc_GCHOnLoad."
        },
        "configuration": {
            "label": "KISKA_fnc_GCHOnLoad_joinGroupButton",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCHOnLoad_leaveGroupButton.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_GCHOnload_leaveGroupButton`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[buttonControl] call KISKA_fnc_GCHOnload_leaveGroupButton;\n```"
                }
            ],
            "description": "The function that fires on the leave group button click event.The Event is added in KISKA_fnc_GCHOnLoad."
        },
        "configuration": {
            "label": "KISKA_fnc_GCHOnload_leaveGroupButton",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCHOnLoad_setGroupIdButton.sqf",
            "syntaxes": [
                {
                    "outline": "[_control] call `KISKA_fnc_GCHOnLoad_setGroupIdButton`",
                    "parameters": [
                        {
                            "name": "_control",
                            "description": "*(CONTROL)* - The control of the button"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[buttonControl] call KISKA_fnc_GCHOnLoad_setGroupIdButton;\n```"
                }
            ],
            "description": "The function that fires on the set group id button click event.\nThis is called from KISKA_fnc_GCHOnLoad"
        },
        "configuration": {
            "label": "KISKA_fnc_GCHOnLoad_setGroupIdButton",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCHOnLoad_setLeaderButton.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_GCHOnLoad_setLeaderButton`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[buttonControl] call KISKA_fnc_GCHOnLoad_setLeaderButton;\n```"
                }
            ],
            "description": "The function that fires on the set leader button click event.\nThe function is called in KISKA_fnc_GCHOnLoad."
        },
        "configuration": {
            "label": "KISKA_fnc_GCHOnLoad_setLeaderButton",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCHOnLoad_showAiCheckbox.sqf",
            "syntaxes": [
                {
                    "outline": "[_control] call `KISKA_fnc_GCHOnLoad_showAiCheckbox`",
                    "parameters": [
                        {
                            "name": "_control",
                            "description": "*(CONTROL)* - The control for the checkbox"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_control] call KISKA_fnc_GCHOnLoad_showAiCheckbox;\n```"
                }
            ],
            "description": "Adds control event handler to check box and sets its intial state."
        },
        "configuration": {
            "label": "KISKA_fnc_GCHOnLoad_showAiCheckbox",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_GroupChanger/Functions/fn_GCHOnLoad_sideGroupsList.sqf",
            "syntaxes": [
                {
                    "outline": "[_control] call `KISKA_fnc_GCHOnLoad_sideGroupsList`",
                    "parameters": [
                        {
                            "name": "_control",
                            "description": "*(CONTROL)* - The control for the list box"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_control] call KISKA_fnc_GCHOnLoad_sideGroupsList;\n```"
                }
            ],
            "description": "Adds eventhandler to the listbox."
        },
        "configuration": {
            "label": "KISKA_fnc_GCHOnLoad_sideGroupsList",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_generateUniqueId.sqf",
            "syntaxes": [
                {
                    "outline": "[_tag] call `KISKA_fnc_generateUniqueId`",
                    "parameters": [
                        {
                            "name": "_tag",
                            "description": "*(STRING)* - The tag to assign to the uid"
                        }
                    ],
                    "returns": "*(STRING)* - the unique identifier"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_generateUniqueId;\n// KISKA_uid_0_0\n```"
                },
                {
                    "text": "```sqf\n[\"MYTAG\"] call KISKA_fnc_generateUniqueId;\n// MYTAG_uid_0_0\n```"
                }
            ],
            "description": "Creates a unique identifier with a given tag. \n \nThe id format is: *tag*_*clientOwner*_*increment* which as an example could be\n `KISKA_uid_0_0` as the first unique id made in a single player scenario."
        },
        "configuration": {
            "label": "KISKA_fnc_generateUniqueId",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_getAmmoClassFromId.sqf",
            "syntaxes": [
                {
                    "outline": "[_id] call `KISKA_fnc_getAmmoClassFromId`",
                    "parameters": [
                        {
                            "name": "_id",
                            "description": ": *(NUMBER)* - The ammo type ID"
                        }
                    ],
                    "returns": "*(STRING)* - ClassName for the corresponding Id number, otherwise empty string"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_class = [0] call KISKA_fnc_getAmmoClassFromId\n```"
                }
            ],
            "description": "Takes a number (id) and translates it into the class name for that number"
        },
        "configuration": {
            "label": "KISKA_fnc_getAmmoClassFromId",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_getAmmoTitleFromId.sqf",
            "syntaxes": [
                {
                    "outline": "[_id] call `KISKA_fnc_getAmmoClassFromId`",
                    "parameters": [
                        {
                            "name": "_id",
                            "description": ": *(NUMBER)* - The ammo type ID"
                        }
                    ],
                    "returns": "*(STRING)* - ClassName for the corresponding Id number, otherwise empty string"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_title = [0] call KISKA_fnc_getAmmoClassFromId\n```"
                }
            ],
            "description": "Takes a number (id) and translates it into the title name for that number.Used to fill out menus with a consistent string for the corresponding round type."
        },
        "configuration": {
            "label": "KISKA_fnc_getAmmoClassFromId",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_getBoundingBoxDimensions.sqf",
            "syntaxes": [
                {
                    "outline": "[_object, _boxType, _isLOD] call `KISKA_fnc_getBoundingBoxDimensions`",
                    "parameters": [
                        {
                            "name": "_object",
                            "description": "*(OBJECT)* - The object to get the dimensions of"
                        },
                        {
                            "name": "_boxType",
                            "description": "*(NUMBER or STRING)* - The `boundingBoxReal` command's clipping type orthe LOD name/resolution if `_isLOD` is true."
                        },
                        {
                            "name": "_isLOD",
                            "description": "*(BOOL)* - Whether or not to use the LOD syntax of `boundingBoxReal`"
                        }
                    ],
                    "returns": "*(NUMBER[])* - `[Length,Width,Height]` of the given object's dimensions"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _playerBoxDimensions = [player] call KISKA_fnc_getBoundingBoxDimensions;\n```"
                }
            ],
            "description": "Returns the length, width, and height of a given object's bounding box, fora given clipping type."
        },
        "configuration": {
            "label": "KISKA_fnc_getBoundingBoxDimensions",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_getBumperPositionRelative.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _isRearBumper] call `KISKA_fnc_getBumperPositionRelative`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to get the bumper position of"
                        },
                        {
                            "name": "_isRearBumper",
                            "description": "*(BOOL)* - True for rear bumper, false for front bumper"
                        }
                    ],
                    "returns": "*(PositionRelative)* - The world position of the vehicle's bumper"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _rearBumperPositionRelatives = [vic,true] call KISKA_fnc_getBumperPositionRelative;\n```"
                }
            ],
            "description": "Gets the PositionRelative of a vehicles front or rear bumper."
        },
        "configuration": {
            "label": "KISKA_fnc_getBumperPositionRelative",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_getCasTitleFromId.sqf",
            "syntaxes": [
                {
                    "outline": "[_id] call `KISKA_fnc_getCasTitleFromId`",
                    "parameters": [
                        {
                            "name": "_id",
                            "description": ": *(NUMBER)* - The ammo type ID"
                        }
                    ],
                    "returns": "*(STRING)* - ClassName for the corresponding Id number, otherwise empty string"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_title = [0] call KISKA_fnc_getCasTitleFromId\n```"
                }
            ],
            "description": "Takes a number (id) and translates it into the title name for that number.Used to fill out menus with a consistent string for the corresponding round type."
        },
        "configuration": {
            "label": "KISKA_fnc_getCasTitleFromId",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_getContainerCargo.sqf",
            "syntaxes": [
                {
                    "outline": "[_primaryContainer] call `KISKA_fnc_getContainerCargo`",
                    "parameters": [
                        {
                            "name": "_primaryContainer",
                            "description": "*(OBJECT)* - The container to save the cargo of"
                        }
                    ],
                    "returns": "*(ARRAY)* - Formatted array of all items in cargo space of a container.Used with KISKA_fnc_setContainerCargo.Will return [] if no cargo is present."
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[container] call KISKA_fnc_getContainerCargo;\n```"
                }
            ],
            "description": "Saves the cargo of a container in a formatterd array to be used withKISKA_fnc_pasteContainerCargo for copying cargos of containers.\nExact ammo counts will be preserved even inside of an item such as magazinesinside of a vest or backpack."
        },
        "configuration": {
            "label": "KISKA_fnc_getContainerCargo",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_getCurrentWaypoint.sqf",
            "syntaxes": [
                {
                    "outline": "[_group] call `KISKA_fnc_getCurrentWaypoint`",
                    "parameters": [
                        {
                            "name": "_group",
                            "description": "*(GROUP or OBJECT)* - The unit to get the currentWaypoint for."
                        }
                    ],
                    "returns": "*(ARRAY)* - The waypoint"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _waypoint = [myUnit] call KISKA_fnc_getCurrentWaypoint;\n```"
                }
            ],
            "description": "Returns the units currentWaypoint"
        },
        "configuration": {
            "label": "KISKA_fnc_getCurrentWaypoint",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_getFromNetId.sqf",
            "syntaxes": [
                {
                    "outline": "[_id, _fromObject] call `KISKA_fnc_getFromNetId`",
                    "parameters": [
                        {
                            "name": "_id",
                            "description": "*(STRING)* - The id of the object"
                        },
                        {
                            "name": "_fromObject",
                            "description": "*(BOOL)* - false for getting object, true for group"
                        }
                    ],
                    "returns": "*(OBJECT or GROUP)* - The Id of the entity"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_entity = [\"0:0\"] call KISKA_fnc_netId;\n```"
                }
            ],
            "description": "Gets an object or group from a netId."
        },
        "configuration": {
            "label": "KISKA_fnc_getFromNetId",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/fn_getLatestPlayedMusicID.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_getLatestPlayedMusicID`",
                    "parameters": [],
                    "returns": "*(NUMBER)* - The highest incremented track \"ID\". -1 indicates no music has ever been played"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _id = call KISKA_fnc_getLatestPlayedMusicID;\n```"
                }
            ],
            "description": "Returns the latest track ID of music that played (each song played increments)the ID by one.\nThis DOES NOT indicated whether or not this ID is still playing.See KISKA_fnc_getPlayingMusic to check what track is present (if any)."
        },
        "configuration": {
            "label": "KISKA_fnc_getLatestPlayedMusicID",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_getMissionLayerObjects.sqf",
            "syntaxes": [
                {
                    "outline": "[_layer] call `KISKA_fnc_getMissionLayerObjects`",
                    "parameters": [
                        {
                            "name": "_layer",
                            "description": ": *(STRING or NUMBER)* - The name or ID of the mission layer"
                        }
                    ],
                    "returns": "*(ARRAY)* - The layer's objects"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_objects = [\"myLayer\"] call KISKA_fnc_getMissionLayerObjects;\n```"
                }
            ],
            "description": "Simply returns the objects of a mission layer."
        },
        "configuration": {
            "label": "KISKA_fnc_getMissionLayerObjects",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_getMostSpecificCfgValue.sqf",
            "syntaxes": [
                {
                    "outline": "[_property, _configs, _ignoredValues, _ignoredTypes] call `KISKA_fnc_getMostSpecificCfgValue`",
                    "parameters": [
                        {
                            "name": "_property",
                            "description": "*(STRING)* - The config property to search for in all of the classes"
                        },
                        {
                            "name": "_configs",
                            "description": "*(ARRAY)* - An array of CONFIGs that you would like to look for theproperty. These should be within the same configHierarchy."
                        },
                        {
                            "name": "_ignoredValues",
                            "description": "*(ARRAY of ARRAY, NUMBER, or STRING)* - A list of invalid valuesfor the property to have in order to be ignored. (strings should be lowercase)\n    (NIL will always be ignored)"
                        },
                        {
                            "name": "_ignoredTypes",
                            "description": "*(ARRAY of ARRAY, NUMBER, or STRING)* - A list of invalid types for the property"
                        }
                    ],
                    "returns": "*(NIL, ARRAY, NUMBER, or STRING)* - The config value returned by the most specific config passedthat is valid."
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _valueFromMostSpecificClass = [\n    \"myProperty\"\n    [\n        missionConfigFile >> \"SomeClass\",\n        missionConfigFile >> \"SomeClass\" >> \"SomeSubClass\",\n        missionConfigFile >> \"SomeClass\" >> \"SomeSubClass\" >> \"SomeFurtherSubClass\",\n    ],\n    [\"\"], // shouldn't be an empty string,\n    [123] // ignore number properties\n] call KISKA_fnc_getMostSpecificCfgValue;\n```"
                }
            ],
            "description": "Picks the most specific value from a list of configs properties to check."
        },
        "configuration": {
            "label": "KISKA_fnc_getMostSpecificCfgValue",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/fn_getMusicDuration.sqf",
            "syntaxes": [
                {
                    "outline": "[_track] call `KISKA_fnc_getMusicDuration`",
                    "parameters": [
                        {
                            "name": "_track",
                            "description": "*(STRING or CONFIG)* - a classname to check the duration of or its config path"
                        }
                    ],
                    "returns": "*(NUMBER)* - The duration of the requested track"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_duration = [\"LeadTrack01_F_Curator\"] call KISKA_fnc_getMusicDuration;\n```"
                }
            ],
            "description": "Returns the duration of a track of music. Will return 0 if undefined duration or class."
        },
        "configuration": {
            "label": "KISKA_fnc_getMusicDuration",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/fn_getMusicFromClass.sqf",
            "syntaxes": [
                {
                    "outline": "[_musicClass] call `KISKA_fnc_getMusicFromClass`",
                    "parameters": [
                        {
                            "name": "_musicClass",
                            "description": "*(STRING)* - a class of music to search for (e.g. \"stealth\")"
                        }
                    ],
                    "returns": "*(ARRAY)* - list of tracks names from the class"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"stealth\"] call KISKA_fnc_getMusicFromClass;\n```"
                }
            ],
            "description": "Returns an array of track names for the given class of music."
        },
        "configuration": {
            "label": "KISKA_fnc_getMusicFromClass",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_getNearestIncriment.sqf",
            "syntaxes": [
                {
                    "outline": "[_numberToCheck, _incriment] call `KISKA_fnc_getNearestIncriment`",
                    "parameters": [
                        {
                            "name": "_numberToCheck",
                            "description": ": *(NUMBER)* - The number to round off"
                        },
                        {
                            "name": "_incriment",
                            "description": ": *(NUMBER)* - The incriment by which the number should be assessed"
                        }
                    ],
                    "returns": "*(NUMBER)* - The nearest incriment to the given number"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// -0.22\n_nearestIncriment = [-0.223,0.01] call KISKA_fnc_getNearestIncriment;\n```"
                }
            ],
            "description": "Rounds off a number to the nearest incriment."
        },
        "configuration": {
            "label": "KISKA_fnc_getNearestIncriment",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/fn_getPlayingMusic.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_getPlayingMusic`",
                    "parameters": [],
                    "returns": "*(STRING)* - The class name of music. Will be \"\" if nothing is playing."
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _track = call KISKA_fnc_getPlayingMusic;\n```"
                }
            ],
            "description": "Returns the current playing tracks class name."
        },
        "configuration": {
            "label": "KISKA_fnc_getPlayingMusic",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_getPosRelativeSurface.sqf",
            "syntaxes": [
                {
                    "outline": "[_centerPosition, _distance, _bearing, _zOffSet] call `KISKA_fnc_getPosRelativeSurface`",
                    "parameters": [
                        {
                            "name": "_centerPosition",
                            "description": "*(OBJECT or Position)* - The center position to find arelative position to. If a 2d position, height will be 0."
                        },
                        {
                            "name": "_distance",
                            "description": "*(NUMBER)* - The distance away from the _centerPosition to get the position"
                        },
                        {
                            "name": "_bearing",
                            "description": "*(NUMBER)* - The direction relative to the position to find the new position"
                        },
                        {
                            "name": "_zOffSet",
                            "description": "*(NUMBER)* - An offset to add to the Z-axis AFTER the surface position is found"
                        }
                    ],
                    "returns": "PositionATL[] - the new position"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    player,\n    100,\n    180\n] call KISKA_fnc_getPosRelativeSurface;\n```"
                },
                {
                    "text": "```sqf\n[\n    player,\n    100,\n    180,\n    10 // 10 meters above water surface or terrain\n] call KISKA_fnc_getPosRelativeSurface;\n```"
                }
            ],
            "description": "Returns a relative position but that the position is at the 0 position for thesurface beneath (being either water or the terrain) in an ATL format.\nThis means the z will always be 0 or the height of the sea above the terrain levelat the given _centerPosition."
        },
        "configuration": {
            "label": "KISKA_fnc_getPosRelativeSurface",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_getRelativeVectorAndPos.sqf",
            "syntaxes": [
                {
                    "outline": "[_parent, _child] call `KISKA_fnc_getRelativeVectorAndPos`",
                    "parameters": [
                        {
                            "name": "_parent",
                            "description": "*(OBJECT)* - The object to make the coordinates relative to."
                        },
                        {
                            "name": "_child",
                            "description": "*(OBJECT)* - The object to find coordinates for."
                        }
                    ],
                    "returns": "*(ARRAY)* -0: *(PositionWorld[])* - Relative world pos1: *(Vector[])* - Relative vector dir2: *(Vector[])* - Relative vector up"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate relativeArray = [\n    parentObject,\n    childObject\n] call KISKA_fnc_getRelativeVectorAndPos\n```"
                }
            ],
            "description": "Returns the relative vector dir and up and world position from one object toanother."
        },
        "configuration": {
            "label": "KISKA_fnc_getRelativeVectorAndPos",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_setRelativeVectorAndPos.sqf",
            "syntaxes": [
                {
                    "outline": "[_parent, _child, _relativeInfo] call `KISKA_fnc_getRelativeVectorAndPos`",
                    "parameters": [
                        {
                            "name": "_parent",
                            "description": "*(OBJECT)* - The object to make the coordinates relative to."
                        },
                        {
                            "name": "_child",
                            "description": "*(OBJECT)* - The object to find coordinates for."
                        },
                        {
                            "name": "_relativeInfo",
                            "description": "*(ARRAY)* - An array containing the relative coordinates tochange to worldspace:\n \n        - 0. *(PoitionWorld[])* - Relative world pos\n        - 1. *(Vector[])* - Relative vector dir\n        - 2. *(Vector[])* - Relative vector up"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    parentObject,\n    childObject,\n    [[0,0,0],[0,1,0],[0,0,1]]\n] call KISKA_fnc_setRelativeVectorAndPos;\n```"
                }
            ],
            "description": "Sets the position and vector dir and up of one object to another based onrelative coordinates to the parent object."
        },
        "configuration": {
            "label": "KISKA_fnc_getRelativeVectorAndPos",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_getSupportVehicleClasses.sqf",
            "syntaxes": [
                {
                    "outline": "[_side, _typeId] call `KISKA_fnc_getSupportVehicleClasses`",
                    "parameters": [
                        {
                            "name": "_side",
                            "description": "*(SIDE)* - The side to search for"
                        },
                        {
                            "name": "_typeId",
                            "description": "*(NUMBER)* - The type of vehicle to search for"
                        }
                    ],
                    "returns": "*(ARRAY)* - A list of vehicles listed under the relevant config"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_bluforCAS_types = [BLUFOR,SUPPORT_TYPE_CAS] call KISKA_fnc_getSupportVehicleClasses;\n```"
                }
            ],
            "description": "Gets mission configed default vehicle types available for KISKA supports."
        },
        "configuration": {
            "label": "KISKA_fnc_getSupportVehicleClasses",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_getVariableTarget.sqf",
            "syntaxes": [
                {
                    "outline": "[_variableName, _namespace, _defaultValue, _target, _awaitParams] spawn `KISKA_fnc_getVariableTarget`",
                    "parameters": [
                        {
                            "name": "_variableName",
                            "description": ": *(STRING)* - The string name of the varaible to get"
                        },
                        {
                            "name": "_namespace",
                            "description": ": *(NAMESPACE, OBJECT, STRING, CONTROL, GROUP, or LOCATION)* - The namespace to get the variable from"
                        },
                        {
                            "name": "_defaultValue",
                            "description": ": *(ANY)* - If the variable does not exist for the target, what should be returned instead"
                        },
                        {
                            "name": "_target",
                            "description": ": *(NUMBER, OBJECT, or STRING)* - Where the _target is local will be where the variable is taken from \n    (the machine to get the variable from)"
                        },
                        {
                            "name": "_awaitParams",
                            "description": ": *([NUMBER,NUMBER,BOOL])* - How the get from the target should be awaited\nParameters:\n    - 0: *(NUMBER)* - The sleep time between each check for the variable being received\n    - 1: *(NUMBER)* - The max time to wait for (this is not total game time but time slept)\n    - 2: *(BOOL)* - Whether or not the sleep time should be exponential (double every iteration)"
                        }
                    ],
                    "returns": "*(ANY)* - Whatever the variable is, nil otherwise"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[] spawn {\n    // need to call for direct return\n    private _serversSomeVariable = [\n        \"someVariable\",\n        missionNamespace,\n        \"\",\n        2\n    ] call KISKA_fnc_getVariableTarget;\n};\n```"
                }
            ],
            "description": "Gets a variable from a remote target object, id, or string (uses remoteExec targets)\nTakes a bit of time and therefore needs to be scheduled."
        },
        "configuration": {
            "label": "KISKA_fnc_getVariableTarget",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_getVariableTarget_sendBack.sqf",
            "syntaxes": [
                {
                    "outline": "[_namespace, _variableName, _saveVariable, _defaultValue, _sendBackTarget] call `KISKA_fnc_getVariableTarget_sendBack`",
                    "parameters": [
                        {
                            "name": "_namespace",
                            "description": ": *(NAMESPACE, OBJECT, STRING, GROUP, CONTROL, or LOCATION)* - The namespace to get the variable from"
                        },
                        {
                            "name": "_variableName",
                            "description": ": *(STRING)* - The string name of the varaible to get"
                        },
                        {
                            "name": "_saveVariable",
                            "description": ": *(STRING)* - A unique string name for the variable to be saved in on the sender's machine"
                        },
                        {
                            "name": "_defaultValue",
                            "description": ": *(ANY)* - If the variable does not exist for the target, what should be returned instead"
                        },
                        {
                            "name": "_sendBackTarget",
                            "description": ": *(ANY)* - The clientOwner id of whoever sent the request"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    _namespace,\n    _variableName,\n    _saveVariable,\n    _defaultValue,\n    clientOwner\n] remoteExecCall [\"KISKA_fnc_getVariableTarget_sendBack\",_target];\n```"
                }
            ],
            "description": "The send back component of KISKA_fnc_getVariableTarget that is executed on the target.Shouldn't be called on its own."
        },
        "configuration": {
            "label": "KISKA_fnc_getVariableTarget_sendBack",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_getVectorToTarget.sqf",
            "syntaxes": [
                {
                    "outline": "[_object, _target] call `KISKA_fnc_getVectorToTarget`",
                    "parameters": [
                        {
                            "name": "_object",
                            "description": ": *(OBJECT, ARRAY)* - The object to set the vectors of or its ASL position"
                        },
                        {
                            "name": "_target",
                            "description": ": *(OBJECT, ARRAY)* - The target to angle towards or its ASL position"
                        }
                    ],
                    "returns": "*(ARRAY)* - An array of arrays formatted as [directionVector,upVector]"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// angles to player\nmyObject setVectorDirAndUp ([myObject,player] call KISKA_fnc_getVectorToTarget);\n```"
                }
            ],
            "description": "Returns vectorDir and vectorUp that should angle the object towards the target.\nE.g. this will point the nose of a plane towards a target if paired withsetVector commands."
        },
        "configuration": {
            "label": "KISKA_fnc_getVectorToTarget",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Hashmap/fn_hashmap_assignObjectOrGroupKey.sqf",
            "syntaxes": [
                {
                    "outline": "[_objectOrGroup] call `KISKA_fnc_hashmap_assignObjectOrGroupKey`",
                    "parameters": [
                        {
                            "name": "_objectOrGroup",
                            "description": "*(OBJECT or GROUP)* - The object or group to assign a key to"
                        }
                    ],
                    "returns": "*(STRING)* - The string key used to uniquely identify the given object or group"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _associatedKey = [\n\tsomeObject\n] call KISKA_fnc_hashmap_assignObjectOrGroupKey;\n```"
                }
            ],
            "description": "Provides a unique hashmap key for a given object or group.\nThe key can be reverse looked up for the object or group with KISKA_fnc_hashmap_getObjectOrGroupFromRealKey."
        },
        "configuration": {
            "label": "KISKA_fnc_hashmap_assignObjectOrGroupKey",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Hashmap/fn_hashmap_deleteAt.sqf",
            "syntaxes": [
                {
                    "outline": "[_map, _key] call `KISKA_fnc_hashmap_deleteAt`",
                    "parameters": [
                        {
                            "name": "_map",
                            "description": "*(HASHMAP)* - The map to search in"
                        },
                        {
                            "name": "_key",
                            "description": "*(ANY)* - The key to delete"
                        }
                    ],
                    "returns": "*(ANY)* - The deleted value, nil if not found"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _value = [myMap,_key] call KISKA_fnc_hashmap_deleteAt;\n```"
                }
            ],
            "description": "Deletes a key/value pair if it's in a hashmap, supports objects and groups as keys.\nIdeally, not something that should be used if the map is not intended toalso hold groups and objects as keys."
        },
        "configuration": {
            "label": "KISKA_fnc_hashmap_deleteAt",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Hashmap/fn_hashmap_get.sqf",
            "syntaxes": [
                {
                    "outline": "[_map, _key, _default] call `KISKA_fnc_hashmap_get`",
                    "parameters": [
                        {
                            "name": "_map",
                            "description": "*(HASHMAP)* - The map to get the value from"
                        },
                        {
                            "name": "_key",
                            "description": "*(ANY)* - The key to find in the map"
                        },
                        {
                            "name": "_default",
                            "description": "*(ANY)* - The value to return if the map does not contain the value"
                        }
                    ],
                    "returns": "*(ANY)* - The saved value, default value, or nil if not found and no default provided"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _value = [\n    myMap,\n    someObject,\n    \"Hello World\"\n] call KISKA_fnc_hashmap_get;\n```"
                }
            ],
            "description": "Gets a value from a hashmap but also supports objects and groups as keys.\nIdeally, not something that should be used if the map is not intended toalso hold groups and objects as keys."
        },
        "configuration": {
            "label": "KISKA_fnc_hashmap_get",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Hashmap/fn_hashmap_getKiskaObjectGroupKeyMap.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_hashmap_getObjectOrGroupFromRealKey`",
                    "parameters": [],
                    "returns": "*(HASHMAP)* - The hashmap used for finding the given object or group froma real key used in a KISKA hashmap"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _kiskaObjectOrGroupKeyHashMap = call KISKA_fnc_hashmap_getKiskaObjectGroupKeyMap;\n```"
                }
            ],
            "description": "Retrieves the global hashmap used to associate a given real key with either agroup or object with KISKA hashmap functions."
        },
        "configuration": {
            "label": "KISKA_fnc_hashmap_getObjectOrGroupFromRealKey",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Hashmap/fn_hashmap_getObjectOrGroupFromRealKey.sqf",
            "syntaxes": [
                {
                    "outline": "[_key] call `KISKA_fnc_hashmap_getObjectOrGroupFromRealKey`",
                    "parameters": [
                        {
                            "name": "_key",
                            "description": "*(STRING)* - The real key used to identify an object or group in a KISKA hashmap"
                        }
                    ],
                    "returns": "*(OBJECT, GROUP, or NIL)* - The object or group that is associated with a given key.\n `NIL` if no object or group matches the given key."
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _key = [someObject] call KISKA_fnc_hashmap_getRealKey;\nprivate _someObject = [\n\t_key\n] call KISKA_fnc_hashmap_getObjectOrGroupFromRealKey;\n```"
                }
            ],
            "description": "Translates a real key used be KISKA hashmaps for groups and objects back intothe associated group or object."
        },
        "configuration": {
            "label": "KISKA_fnc_hashmap_getObjectOrGroupFromRealKey",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Hashmap/fn_hashmap_getRealKey.sqf",
            "syntaxes": [
                {
                    "outline": "[_key] call `KISKA_fnc_hashmap_getRealKey`",
                    "parameters": [
                        {
                            "name": "_key",
                            "description": "*(ANY)* - The key used with KISKA hashmap functions (such as object or group)"
                        }
                    ],
                    "returns": "*(ANY)* - Whatever the key will be in a hashmap"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _keyUsedInKiskaHashmap = [someObject] call KISKA_fnc_hashmap_getRealKey;\n```"
                }
            ],
            "description": "Returns the actual value used for a key when using KISKA hashmap functions.\n \nThis really only applies to objects or groups as they will have a special stringused to identify them in the hashmap. Use this function to get the key of themif you need to do multiple operations on a hashmap with the same object or groupand do not want the overhead of the functions."
        },
        "configuration": {
            "label": "KISKA_fnc_hashmap_getRealKey",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Hashmap/fn_hashmap_in.sqf",
            "syntaxes": [
                {
                    "outline": "[_map, _key] call `KISKA_fnc_hashmap_in`",
                    "parameters": [
                        {
                            "name": "_map",
                            "description": "*(HASHMAP)* - The map to search in"
                        },
                        {
                            "name": "_key",
                            "description": "*(ANY)* - The key to find"
                        }
                    ],
                    "returns": "*(BOOL)* - True if the key is found, false if not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[myMap,_key] call KISKA_fnc_hashmap_in;\n```"
                }
            ],
            "description": "Checks if a key exists in a hashmap, supports objects and groups as keys.\nIdeally, not something that should be used if the map is not intended toalso hold groups and objects as keys."
        },
        "configuration": {
            "label": "KISKA_fnc_hashmap_in",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Hashmap/fn_hashmap_set.sqf",
            "syntaxes": [
                {
                    "outline": "[_map, _key, _value, _insertOnly] call `KISKA_fnc_hashmap_set`",
                    "parameters": [
                        {
                            "name": "_map",
                            "description": "*(HASHMAP)* - The map to insert in to"
                        },
                        {
                            "name": "_key",
                            "description": "*(ANY)* - The key to associate with the value"
                        },
                        {
                            "name": "_value",
                            "description": "*(ANY)* - The value to associate witht the key"
                        },
                        {
                            "name": "_insertOnly",
                            "description": "*(BOOL)* - When `true`, if the key already exists in the hashmap, the value will not be overwritten"
                        }
                    ],
                    "returns": "*(BOOL)* - False if key is new, true if overwriting"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _inserted = [\n    myMap,\n    someObject,\n    \"Hello World\"\n] call KISKA_fnc_hashmap_set;\n```"
                }
            ],
            "description": "Sets a key/value pair in a hashmap but also supports objects and groups as keys.\nIdeally, not something that should be used if the map is not intended toalso hold groups and objects as keys."
        },
        "configuration": {
            "label": "KISKA_fnc_hashmap_set",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/fn_helicopterGunner.sqf",
            "syntaxes": [
                {
                    "outline": "[_centerPosition, _radius, _aircraftType, _timeOnStation, _supportSpeedLimit, _flyinHeight, _approachBearing, _side, _postSupportCode] call `KISKA_fnc_helicopterGunner`",
                    "parameters": [
                        {
                            "name": "_centerPosition",
                            "description": ": *(Position[], OBJECT)* - The position around which the helicopter will patrol"
                        },
                        {
                            "name": "_radius",
                            "description": ": *(NUMBER)* - The size of the radius to patrol around"
                        },
                        {
                            "name": "_aircraftType",
                            "description": ": *(STRING or OBJECT)* - The class of the helicopter to spawnIf object, it is expected that this is a helicopter with crew"
                        },
                        {
                            "name": "_timeOnStation",
                            "description": ": *(NUMBER)* - How long will the aircraft be supporting"
                        },
                        {
                            "name": "_supportSpeedLimit",
                            "description": ": *(NUMBER)* - The max speed the aircraft can fly while in the support radius"
                        },
                        {
                            "name": "_flyinHeight",
                            "description": ": *(NUMBER)* - The altittude the aircraft flys at"
                        },
                        {
                            "name": "_approachBearing",
                            "description": ": *(NUMBER)* - The bearing from which the aircraft will approach from (if below 0, it will be random)This has no effect if an object is used for _aircraftType"
                        },
                        {
                            "name": "_side",
                            "description": ": *(SIDE)* - The side of the created helicopter"
                        },
                        {
                            "name": "_postSupportCode",
                            "description": ": *(CODE, ARRAY, or STRING)* - Code to execute after the support completes.See KISKA_fnc_callBack.The default behaviour is for the aircraft to move 2000 meters away and forits complete crew and self to be deleted. The _postSupportCode should return a `BOOL`that if `false` will NOT perform the default behaviour in addition to the callback.\n \n    Parameters:\n    - 0: *(OBJECT)* - The helicopter confucting support\n    - 1: *(GROUP)* - The group the pilot belongs to\n    - 2: *(OBJECT[])* - The full vehicle crew\n    - 3: *(OBJECT)* - The unit that *should* be the pilot of the helicopter\n    - 4: *(ARRAY)* - The position the helicopter was supporting"
                        }
                    ],
                    "returns": "ARRAY - The vehicle info0: *(OBJECT)* - The vehicle created1: *(OBJECT[])* - The vehicle crew2: *(GROUP)* - The group the crew is a part of"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    player,\n    250,\n    \"B_Heli_Attack_01_dynamicLoadout_F\"\n] call KISKA_fnc_helicopterGunner;\n```"
                }
            ],
            "description": "Spawns a helicopter (or uses an existing one) to partol a given area for a period of time andengage enemy targets in a given area."
        },
        "configuration": {
            "label": "KISKA_fnc_helicopterGunner",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_heliLand.sqf",
            "syntaxes": [
                {
                    "outline": "[_aircraft, _landingPosition, _landMode, _createHelipad, _afterLandCode] call `KISKA_fnc_heliLand`",
                    "parameters": [
                        {
                            "name": "_aircraft",
                            "description": "*(OBJECT)* - The helicopter"
                        },
                        {
                            "name": "_landingPosition",
                            "description": "*(ARRAY or OBJECT)* - Where to land. If object, position ATL is used."
                        },
                        {
                            "name": "_landMode",
                            "description": "*(STRING)* - Options are `\"LAND\"`, `\"GET IN\"`, and `\"GET OUT\"`"
                        },
                        {
                            "name": "_createHelipad",
                            "description": "*(BOOL)* - If true, and invisible helipad will be created. Helipads strongly encourage where a unit will land."
                        },
                        {
                            "name": "_afterLandCode",
                            "description": "*(CODE, STRING, or ARRAY)* - Code to spawn after the helicopter has landed. See KISKA_fnc_callBack\n \n    Parameters:\n    - 0: *(OBJECT)* - The helicopter"
                        }
                    ],
                    "returns": "*(BOOL)* - True if helicopter can attempt, false if problem"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[myHeli,position player] call KISKA_fnc_heliLand;\n```"
                }
            ],
            "description": "Makes a helicopter land at a given position."
        },
        "configuration": {
            "label": "KISKA_fnc_heliLand",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_heliPatrol.sqf",
            "syntaxes": [
                {
                    "outline": "[_helicopter, _patrolPoints, _spotDistance3D, _patrolHeight, _patrolSpeed, _randomPatrol] call `KISKA_fnc_heliPatrol`",
                    "parameters": [
                        {
                            "name": "_helicopter",
                            "description": "*(OBJECT)* - The patrolling helicopter"
                        },
                        {
                            "name": "_patrolPoints",
                            "description": "*(ARRAY)* - An Array of patrol points (OBJECTs or positions)"
                        },
                        {
                            "name": "_spotDistance3D",
                            "description": "*(NUMBER)* - How far away can the helicopter spot a player"
                        },
                        {
                            "name": "_patrolHeight",
                            "description": "*(NUMBER)* - What's the flying height of the helicopter"
                        },
                        {
                            "name": "_patrolSpeed",
                            "description": "*(STRING)* - setWaypointSpeed, takes \"UNCHANGED\", \"LIMITED\", \"NORMAL\", and \"FULL\""
                        },
                        {
                            "name": "_randomPatrol",
                            "description": "*(BOOL)* - Should patrol points be randomized or followed in array order"
                        }
                    ],
                    "returns": "*(BOOL)* - True if helicopter will patrol, false if problem encountered"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[heli,[logic1,logic2,logic3],500,200,false] call KISKA_fnc_heliPatrol;\n```"
                }
            ],
            "description": "Has a helicopter patrol looking for enemy men.If \"spotted\", the helicopter will land in a safe area and drop off infantry if onboard.It will then move to engage the units if it has weapons or just stalk them if not.The infantry will continually stalk the unit until dead."
        },
        "configuration": {
            "label": "KISKA_fnc_heliPatrol",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_hintDiary.sqf",
            "syntaxes": [
                {
                    "outline": "[_hintText, _subject, _silent] call `KISKA_fnc_hintDiary`",
                    "parameters": [
                        {
                            "name": "_hintText",
                            "description": "*(STRING)* - The actual text shown in the hint"
                        },
                        {
                            "name": "_subject",
                            "description": "*(STRING)* - The subject line in the journal for the hint (OPTIONAL)"
                        },
                        {
                            "name": "_silent",
                            "description": "*(BOOL)* - true for silent hint"
                        }
                    ],
                    "returns": "*(DIARY-RECORD)* - The created diary record."
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"this is the message\", \"Subject\"] call KISKA_fnc_hintDiary;\n```"
                }
            ],
            "description": "Displays a hint to the player and (always) creates a chronologicaldiary entry and an entry in the defined subject if desired."
        },
        "configuration": {
            "label": "KISKA_fnc_hintDiary",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_hover.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _hoverPosition, _shouldHoverStop, _onHoverEnd] call `KISKA_fnc_hover`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The helicopter/vtol to hover"
                        },
                        {
                            "name": "_hoverPosition",
                            "description": "*(PositionASL[] or OBJECT)* - The positionASL to drop the units off at; Z coordinatematters"
                        },
                        {
                            "name": "_shouldHoverStop",
                            "description": "*(CODE)* - Code that should return a boolean to determine if the vehicle should stop its hover.This condition is checked every 0.05s.\n \n    Parameters:\n    - 0: _vehicle - The drop vehicle\n    - 1: _pilot - The currentPilot of _vehicle"
                        },
                        {
                            "name": "_onHoverEnd",
                            "description": "*(CODE, STRING, or ARRAY)* - Code that executes after the hover completes, see KISKA_fnc_callBackThis condition is checked every 0.05s.\n \n    Parameters:\n    - 0: _vehicle - The drop vehicle\n    - 1: _pilot - The currentPilot of _vehicle"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n\tmyHeli,\n\tmyHoverPositionASL,\n\t{\n\t\tlocalNamespace getVariable [\"stopMyHover\",false]\n\t},\n\t{\n\t\thint \"after hover\";\n\t}\n] call KISKA_fnc_hover;\n```"
                }
            ],
            "description": "Sends a vehicle to a given point to hover.\nPilots should ideally be placed in \"CARELESS\" behaviour when around enemies."
        },
        "configuration": {
            "label": "KISKA_fnc_hover",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_idCounter.sqf",
            "syntaxes": [
                {
                    "outline": "[_id, _namespace] call `KISKA_fnc_idCounter`",
                    "parameters": [
                        {
                            "name": "_id",
                            "description": "*(string)* - The id to increment"
                        },
                        {
                            "name": "_namespace",
                            "description": "*(GROUP, OBJECT, LOCATION, NAMESPACE, CONTROL, DISPLAY, TASK, TEAM-MEMBER)* - The namespaceto check the id count in, this is `localNamespace` by default."
                        }
                    ],
                    "returns": "*(NUMBER)* - the latest index of the given id"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _latesIndexFor_myId = [\"myId\"] call KISKA_fnc_idCounter;\n```"
                }
            ],
            "description": "For a given string id, return the latest \"index\" for that id.This increments the id by one each time it is called. This function does notcheck if the provided namespace is not null, so ensure it is checked"
        },
        "configuration": {
            "label": "KISKA_fnc_idCounter",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_initDynamicSimConfig.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_initDynamicSimConfig`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nPOST-INIT Function\n```"
                }
            ],
            "description": "Initializes the dynamic simulation system with the given values based onmission config values."
        },
        "configuration": {
            "label": "KISKA_fnc_initDynamicSimConfig",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_isAdminOrHost.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_isAdminOrHost`",
                    "parameters": [],
                    "returns": "*(BOOL)* - True if is, false if not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_isAdminOrHost = call KISKA_fnc_isAdminOrHost;\n```"
                }
            ],
            "description": "Checks if the machine is an admin or host's."
        },
        "configuration": {
            "label": "KISKA_fnc_isAdminOrHost",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_isGroupAlive.sqf",
            "syntaxes": [
                {
                    "outline": "[_group] call `KISKA_fnc_isGroupAlive`",
                    "parameters": [
                        {
                            "name": "_group",
                            "description": "*(GROUP or OBJECT)* - The group or a unit in that group to check the status for"
                        }
                    ],
                    "returns": "*(BOOL)* - True if a unit in the group is alive, false otherwise"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[group player] call KISKA_fnc_isGroupAlive;\n```"
                }
            ],
            "description": "Checks if any unit in the group is alive."
        },
        "configuration": {
            "label": "KISKA_fnc_isGroupAlive",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Rally/fn_isGroupRallyAllowed.sqf",
            "syntaxes": [
                {
                    "outline": "[_groupToCheck] call `KISKA_fnc_isGroupRallyAllowed`",
                    "parameters": [
                        {
                            "name": "_groupToCheck",
                            "description": "*(GROUP or OBJECT)* - The group or the unit whose group you want to check"
                        }
                    ],
                    "returns": "*(BOOL)* - True if allowed, false if not or error"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// checks if player's group can use the rally system (if they're the server)\n[player] call KISKA_fnc_isGroupRallyAllowed;\n```"
                }
            ],
            "description": "Checks if a group is has KISKA_canRally saved to its namespace on the serverwhich allows its members to place down rally points."
        },
        "configuration": {
            "label": "KISKA_fnc_isGroupRallyAllowed",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_isMainMenu.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_isMainMenu`",
                    "parameters": [],
                    "returns": "*(BOOL)*"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nisMainMenu = call KISKA_fnc_isMainMenu;\n```"
                }
            ],
            "description": "Checks if loaded mission is main menu."
        },
        "configuration": {
            "label": "KISKA_fnc_isMainMenu",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/fn_isMusicPlaying.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_isMusicPlaying`",
                    "parameters": [],
                    "returns": "*(BOOL)* - false if nothing is playing, true if something is"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_isSomethingPlaying = call KISKA_fnc_isMusicPlaying;\n```"
                }
            ],
            "description": "Returns whether or not music is currently playing"
        },
        "configuration": {
            "label": "KISKA_fnc_isMusicPlaying",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_isPatchLoaded.sqf",
            "syntaxes": [
                {
                    "outline": "[_configName] call `KISKA_fnc_isPatchLoaded`",
                    "parameters": [
                        {
                            "name": "_configName",
                            "description": "*(STRING)* - The patch config name to check for"
                        }
                    ],
                    "returns": "*(BOOL)* - False if not, true if is loaded"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"OPTRE_Core\"] call KISKA_fnc_isPatchLoaded;\n```"
                }
            ],
            "description": "Simply checks a config name to see if it is loaded under CFGPatches"
        },
        "configuration": {
            "label": "KISKA_fnc_isPatchLoaded",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Respawn/fn_keepInGroup.sqf",
            "syntaxes": [
                {
                    "outline": "spawn `KISKA_fnc_keepInGroup`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nPRE-INIT function\n```"
                }
            ],
            "description": "Attempts to keep a player in the same group and team after they respawn."
        },
        "configuration": {
            "label": "KISKA_fnc_keepInGroup",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_log.sqf",
            "syntaxes": [
                {
                    "outline": "[_message, _logWithError, _forceLog, _joinString, _scriptName] call `KISKA_fnc_log`",
                    "parameters": [
                        {
                            "name": "_message",
                            "description": "*(ANY)* - The message to send. If array and _joinString is true, will be used with the joinString command"
                        },
                        {
                            "name": "_logWithError",
                            "description": "*(BOOL)* - Show error message on screen (BIS_fnc_error)"
                        },
                        {
                            "name": "_forceLog",
                            "description": "*(BOOL)* - Print log regardless of KISKA_logScripts content"
                        },
                        {
                            "name": "_joinString",
                            "description": "*(BOOL)* - Should this message joined into a string if an array"
                        },
                        {
                            "name": "_scriptName",
                            "description": "*(STRING)* - The name of the script from where this message is being called"
                        }
                    ],
                    "returns": "*(ANY)* - The message sent"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nmissionNamespace setVariable [\"KISKA_doLog\",true];\nscriptName \"My Script\";\nprivate _myvar = 1;\n[[\"Hello Number\",_myvar]] call KISKA_fnc_log;\n\n// prints [\"My Script\"] \"Hello Number 1\" to console\n```"
                }
            ],
            "description": "Prints a log with a script name to console.\nWhether or not something is logged depends on whether the script is set inthe KISKA_logScripts array. If the script name (or \"all\") is found in the arraya log is printed."
        },
        "configuration": {
            "label": "KISKA_fnc_log",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_lookHere.sqf",
            "syntaxes": [
                {
                    "outline": "[_objectsToRotate, _positionsToLookAt, _setDirection] call `KISKA_fnc_lookHere`",
                    "parameters": [
                        {
                            "name": "_objectsToRotate",
                            "description": "*(OBJECT or ARRAY)* - The objects to setDir on"
                        },
                        {
                            "name": "_positionsToLookAt",
                            "description": "*(OBJECT or ARRAY)* - The positions or objects to search for nearest"
                        },
                        {
                            "name": "_setDirection",
                            "description": "*(BOOL)* - Also set objects direction relative to the look position"
                        }
                    ],
                    "returns": "BOOL"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[player,[[0,0,0]]] call KISKA_fnc_lookHere;\n```"
                }
            ],
            "description": "Takes objects and sets their direction towards the nearest object or position within a set"
        },
        "configuration": {
            "label": "KISKA_fnc_lookHere",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Managed Run/fn_managedRun_execute.sqf",
            "syntaxes": [
                {
                    "outline": "[_nameOfCode, _args, _idNamespace, _idToRunAgainst, _isScheduled] call `KISKA_fnc_managedRun_execute`",
                    "parameters": [
                        {
                            "name": "_nameOfCode",
                            "description": ": *(STRING)* - The name of the code to run previously added withKISKA_fnc_managedRun_updateCode"
                        },
                        {
                            "name": "_args",
                            "description": ": *(ARRAY)* - An array of arguments that will be `_this` within thecode to run"
                        },
                        {
                            "name": "_idNamespace",
                            "description": ": *(GROUP, OBJECT, LOCATION, NAMESPACE, CONTROL, DISPLAY, TASK, TEAM-MEMBER)* - The namespace to restrict the id to. This is used to manage runs on two differentobjects for example"
                        },
                        {
                            "name": "_idToRunAgainst",
                            "description": ": *(NUMBER)* - The id the code is restricted to run against"
                        },
                        {
                            "name": "_isScheduled",
                            "description": ": *(BOOL)* - Whether the code will be executed in a scheduled environment"
                        }
                    ],
                    "returns": "*(NUMBER)* - The id of the run made, `-1` if code was not run or a new id to make future runsagainst for a particular system."
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// add code for given id\n[\n    \"KISKA_manage_allowDamage\",\n    {\n        params [\"_unit\",\"_isDamageAllowed\"];\n        _unit allowDamage _isDamageAllowed;\n    }\n] call KISKA_fnc_managedRun_updateCode;\n\n// initial run\nprivate _idOfRun = [\n    \"KISKA_manage_allowDamage\",\n    [player, false],\n    player\n] call KISKA_fnc_managedRun_execute;\n\n// try to change in the future\n[_idOfRun] spawn {\n    params [\"_idOfRun\"];\n    sleep 3;\n    // does nothing because id was overwritten in the meantime\n    [\n        \"KISKA_manage_allowDamage\",\n        [player, true],\n        player,\n        _idOfRun\n    ] call KISKA_fnc_managedRun_execute;\n\n    hint str (isDamageAllowed player) // false\n};\n\nprivate _idOfADifferentRun = [\n    \"KISKA_manage_allowDamage\",\n    [player, false],\n    player\n] call KISKA_fnc_managedRun_execute;\n```"
                }
            ],
            "description": "Allows multiple systems to manage a particular functionality or subset of codeby restricting runs to only the latest id for a given namespace\nThe code must be added with KISKA_fnc_managedRun_updateCode.\nAn example is having competing systems that need to adjust the damage of the playerat different times an perhaps with delays. Perhaps one system starts by taking ownershipof this functionality to not allow the player to be damaged, however, later this systemwill reset wether or not the player has damage allowed after some delay.If another system (or the same one again in the future) wants to take ownership of thisfunctionality to also set the player to not allow damage BEFORE the previous systemhas reset the player's isDamageAllowed state, it could become complex to try and handlethe reset vs continuing to allow the player to not take damage. Instead, the previoussystem's code will now be blocked from running, as another id has taken ownership."
        },
        "configuration": {
            "label": "KISKA_fnc_managedRun_execute",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Managed Run/fn_managedRun_isDefined.sqf",
            "syntaxes": [
                {
                    "outline": "[_nameOfCode] call `KISKA_fnc_managedRun_isDefined`",
                    "parameters": [
                        {
                            "name": "_nameOfCode",
                            "description": ": *(STRING)* - The name of the code to update"
                        }
                    ],
                    "returns": "*(BOOL)* - Whether or not the managed run code is defined"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// false\nprivate _isDefined = [\"KISKA_test\"] call KISKA_fnc_managedRun_isDefined;\n[\"KISKA_test\",{hint \"Hello World\"}] call KISKA_fnc_managedRun_updateCode;\n// true now\n_isDefined = [\"KISKA_test\"] call KISKA_fnc_managedRun_isDefined;\n```"
                }
            ],
            "description": "Checks if a given name is currently defined in the managedRun code map."
        },
        "configuration": {
            "label": "KISKA_fnc_managedRun_isDefined",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Managed Run/fn_managedRun_updateCode.sqf",
            "syntaxes": [
                {
                    "outline": "[_nameOfCode, _code] call `KISKA_fnc_managedRun_updateCode`",
                    "parameters": [
                        {
                            "name": "_nameOfCode",
                            "description": ": *(STRING)* - The name of the code to update"
                        },
                        {
                            "name": "_code",
                            "description": ": *(CODE, STRING, ARRAY)* - The code to run when ID is called \n    (see KISKA_fnc_callBack). Use `{}` to remove the handler all together."
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"KISKA_test\",{hint \"Hello World\"}] call KISKA_fnc_managedRun_updateCode;\n```"
                }
            ],
            "description": "Adjusts the code for a given ID that will run when called from KISKA_fnc_managedRun_execute"
        },
        "configuration": {
            "label": "KISKA_fnc_managedRun_updateCode",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_markBorder.sqf",
            "syntaxes": [
                {
                    "outline": "[_centerPos, _radius, _markerCount, _verticalOffset, _markerObjectClass] call `KISKA_fnc_markBorder`",
                    "parameters": [
                        {
                            "name": "_centerPos",
                            "description": "*(POSITION_ASL or OBJECT)* - The center of the area to mark"
                        },
                        {
                            "name": "_radius",
                            "description": "*(NUMBER)* - The distance from the center to place markers around"
                        },
                        {
                            "name": "_markerCount",
                            "description": "*(NUMBER)* - The number of markers to use for the area"
                        },
                        {
                            "name": "_verticalOffset",
                            "description": "*(NUMBER)* - Objects will be placed at Z axis of 0, this will offset that position"
                        },
                        {
                            "name": "_markerObjectClass",
                            "description": "*(STRING)* - The classname of the object to place to mark the area"
                        }
                    ],
                    "returns": "*(ARRAY)* - An array of simple objects created to mark the area"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_markers = [\n    player\n] call KISKA_fnc_markBorder;\n```"
                }
            ],
            "description": "Places a number of objects around a given radius to mark an area."
        },
        "configuration": {
            "label": "KISKA_fnc_markBorder",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_markPositions.sqf",
            "syntaxes": [
                {
                    "outline": "[_positions] call `KISKA_fnc_markPositions`",
                    "parameters": [
                        {
                            "name": "_positions",
                            "description": "*(ARRAY)* - An array of positions to place the markers on"
                        }
                    ],
                    "returns": "_entities *(ARRAY)* - all created markers"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[[0,0,0],[0,0,0]] call KISKA_fnc_markPositions;\n```"
                }
            ],
            "description": "Simply creates a 3d object helper marker on provided postitions. Works in 3den also."
        },
        "configuration": {
            "label": "KISKA_fnc_markPositions",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_monitorFPS.sqf",
            "syntaxes": [
                {
                    "outline": "[_duration, _frequency, _print] spawn `KISKA_fnc_monitorFPS`",
                    "parameters": [
                        {
                            "name": "_duration",
                            "description": "*(NUMBER)* - How long the test will run"
                        },
                        {
                            "name": "_frequency",
                            "description": "*(NUMBER)* - Time between checks"
                        },
                        {
                            "name": "_print",
                            "description": "*(BOOL)* - Shows a hint on screen"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[60] call KISKA_fnc_monitorFPS;\n```"
                }
            ],
            "description": "Keeps track of the local machine's FPS for a given duration and printsdata to log file."
        },
        "configuration": {
            "label": "KISKA_fnc_monitorFPS",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/fn_musicEventHandlers.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_musicEventHandlers`",
                    "parameters": [],
                    "returns": "NONE"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nPREINIT FUNCTION\n```"
                }
            ],
            "description": "A preInit function to create the required music event handlers forKISKA music functions"
        },
        "configuration": {
            "label": "KISKA_fnc_musicEventHandlers",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/fn_musicStartEvent.sqf",
            "syntaxes": [
                {
                    "outline": "[_trackClassname] call `KISKA_fnc_musicStartEvent`",
                    "parameters": [
                        {
                            "name": "_trackClassname",
                            "description": "*(STRING)* - The classname of the track that started playing"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"trackThatStarted\"] call KISKA_fnc_musicStartEvent;\n```"
                }
            ],
            "description": "The function that should be activated when music starts playing."
        },
        "configuration": {
            "label": "KISKA_fnc_musicStartEvent",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/fn_musicStopEvent.sqf",
            "syntaxes": [
                {
                    "outline": "[_stopAudio] call `KISKA_fnc_musicStopEvent`",
                    "parameters": [
                        {
                            "name": "_stopAudio",
                            "description": "*(BOOL)* - Play and empty track (\"\") to actually stop the audio"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[] call KISKA_fnc_musicStopEvent;\n```"
                }
            ],
            "description": "The function that should be activated when music stops playing.\nIt can also be manually triggered and a param is added to stop the music audioby playing an empty track (\"\")."
        },
        "configuration": {
            "label": "KISKA_fnc_musicStopEvent",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_netId.sqf",
            "syntaxes": [
                {
                    "outline": "[_entity] call `KISKA_fnc_netId`",
                    "parameters": [
                        {
                            "name": "_entity",
                            "description": "*(OBJECT or GROUP)* - The group or object to get the id of"
                        }
                    ],
                    "returns": "*(STRING)* - The Id of the entity"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_id = [player] call KISKA_fnc_netId;\n```"
                }
            ],
            "description": "Gets a \"netId\" for singleplayer and a `netId` when in multiplayer."
        },
        "configuration": {
            "label": "KISKA_fnc_netId",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_notification.sqf",
            "syntaxes": [
                {
                    "outline": "[_message, _lifetime, _canSkip, _headerColor] call `KISKA_fnc_notification`",
                    "parameters": [
                        {
                            "name": "_message",
                            "description": ": *(STRING or ARRAY)* - If string, the message to display as title.\n \n    If array:\n    - 0: _text : *(STRING)* - Text to display or path to .paa or .jpgimage (may be passed directly if only text is required)\n    - 1: _size : *(NUMBER)* - Scale of text\n    - 2: _color : *(NUMBER[])* - RGB or RGBA color (range 0-1). (optional, default: [1, 1, 1, 1])"
                        },
                        {
                            "name": "_lifetime",
                            "description": ": *(NUMBER)* - How long the notification will be visible (min of 2 seconds)"
                        },
                        {
                            "name": "_canSkip",
                            "description": ": *(BOOL)* - Can the notification be skipped when another is in the queue"
                        },
                        {
                            "name": "_headerColor",
                            "description": ": *(NUMBER[])* - An array of [R,G,B,A] color values; defaults to green"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"Hello World\"] call KISKA_fnc_notification;\n```"
                }
            ],
            "description": "Prints a simple KISKA Notify notification on screen."
        },
        "configuration": {
            "label": "KISKA_fnc_notification",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_notify.sqf",
            "syntaxes": [
                {
                    "outline": "[_titleLine, _subLine, _lifetime, _skippable] call `KISKA_fnc_notify`",
                    "parameters": [
                        {
                            "name": "_titleLine",
                            "description": ": *(STRING, STRUCTURED TEXT, or ARRAY)* - If string, the message to display as title.\n \n    If array:\n    - 0. _text : *(STRING)* - Text to display or path to .paa or .jpgimage (may be passed directly if only text is required)\n    - 1. _size : *(NUMBER)* - Scale of text\n    - 2. _color : *(ARRAY)* - RGB or RGBA color (range 0-1). (optional, default: [1, 1, 1, 1])"
                        },
                        {
                            "name": "_subLine",
                            "description": ": *(STRING, STRUCTURED TEXT, or ARRAY)* - Formatted the same as _titleLine"
                        },
                        {
                            "name": "_lifetime",
                            "description": ": *(NUMBER)* - How long the notification lasts in seconds (at least 2)"
                        },
                        {
                            "name": "_skippable",
                            "description": ": *(BOOL)* - If there are more notifications behind in the queue and this notificationcomes up, it will not be shown and thrown away"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    [\"Hello\",1.1,[0.75,0,0,1]],\n    \"World\",\n    5,\n    false\n] call KISKA_fnc_notify;\n```"
                }
            ],
            "description": "Display a text message. Multiple incoming messages are queued. Also controlsthe lifetime of a notification"
        },
        "configuration": {
            "label": "KISKA_fnc_notify",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/fn_paratroopers.sqf",
            "syntaxes": [
                {
                    "outline": "[_dropZone, _unitsThatCanDrop, _dropVehicleClass, _numToDrop, _flyDirection, _flyInHeight, _side, _spawnDistance, _invincibleOnDrop] spawn `KISKA_fnc_paratroopers`",
                    "parameters": [
                        {
                            "name": "_dropZone",
                            "description": ": *(OBJECT or ARRAY)* - Target of where to drop the units"
                        },
                        {
                            "name": "_unitsThatCanDrop",
                            "description": ": *(ARRAY)* - An array of units that can be dropped"
                        },
                        {
                            "name": "_dropVehicleClass",
                            "description": ": *(STRING)* - What vehicle class will drop the units"
                        },
                        {
                            "name": "_numToDrop",
                            "description": ": *(NUMBER)* - The number of units out of the array to drop\n    (if -1, will resize to the amount of units in _unitsToDrop)"
                        },
                        {
                            "name": "_flyDirection",
                            "description": ": *(NUMBER)* - The direction that the aircraft will fly towards _dropZone\n    (if -1, will be random direction)"
                        },
                        {
                            "name": "_flyInHeight",
                            "description": ": *(NUMBER)* - The flyInHeight of the aircraft"
                        },
                        {
                            "name": "_side",
                            "description": ": *(SIDE)* - What side is the drop aircraft"
                        },
                        {
                            "name": "_spawnDistance",
                            "description": ": *(NUMBER)* - How far away should the aircraft spawn"
                        },
                        {
                            "name": "_invincibleOnDrop",
                            "description": ": *(BOOL)* - Should the units be invincible while parachuting down"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[] spawn KISKA_fnc_paratroopers;\n```"
                }
            ],
            "description": "Takes a set of units and moves them into aircraft to be dropped over a positionvia parachute from a spawned vehicle"
        },
        "configuration": {
            "label": "KISKA_fnc_paratroopers",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_patrolSpecific.sqf",
            "syntaxes": [
                {
                    "outline": "[_group, _postions, _numWaypoints, _random, _behaviour, _speed, _combatMode, _formation] call `KISKA_fnc_patrolSpecific`",
                    "parameters": [
                        {
                            "name": "_group",
                            "description": "*(GROUP or OBJECT)* - The group or unit to give waypoints to"
                        },
                        {
                            "name": "_postions",
                            "description": "*(ARRAY)* - An array of possible positions to patrol between, can be either positions or objects"
                        },
                        {
                            "name": "_numWaypoints",
                            "description": "*(NUMBER)* - The number of waypoints, use -1 to patrol all given positions\n\n(Optional)"
                        },
                        {
                            "name": "_random",
                            "description": "*(BOOL)* - Should waypoints be randomized from _positions array"
                        },
                        {
                            "name": "_behaviour",
                            "description": "*(STRING)* - setWaypointBehaviour, takes \"UNCHANGED\", \"SAFE\", \"COMBAT\", \"AWARE\", \"CARELESS\", and \"STEALTH\""
                        },
                        {
                            "name": "_speed",
                            "description": "*(STRING)* - setWaypointSpeed, takes \"UNCHANGED\", \"LIMITED\", \"NORMAL\", and \"FULL\""
                        },
                        {
                            "name": "_combatMode",
                            "description": "*(STRING)* - setWaypointCombatMode, takes \"NO CHANGE\", \"BLUE\", \"GREEN\", \"WHITE\", \"YELLOW\", and \"RED\""
                        },
                        {
                            "name": "_formation",
                            "description": "*(STRING)* - setWaypointFormation, takes \"NO CHANGE\", \"COLUMN\", \"STAG COLUMN\", \"WEDGE\", \"ECH LEFT\", \"ECH RIGHT\", \"VEE\", \"LINE\", \"FILE\", and \"DIAMOND\""
                        }
                    ],
                    "returns": "*(BOOL)* - True if units will patrol, false if problem encountered"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_group,_positionsArray,5] call KISKA_fnc_patrolSpecific;\n```"
                }
            ],
            "description": "Creates a cycle of waypoints for a patrol using a predetermined set of possible points"
        },
        "configuration": {
            "label": "KISKA_fnc_patrolSpecific",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_playDrivePath.sqf",
            "syntaxes": [
                {
                    "outline": "[_vehicle, _pathArray] call `KISKA_fnc_playDrivePath`",
                    "parameters": [
                        {
                            "name": "_vehicle",
                            "description": "*(OBJECT)* - The vehicle to use setDriveOnPath command on"
                        },
                        {
                            "name": "_pathArray",
                            "description": "*(ARRAY)* - An array of positions in [x,y,z] format or\n    [x,y,z,speed-in-meters-per-second] for the vehicle to drive on.\n    (see setDriveOnPath documentation)"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    _vehicle,\n    _pathArray\n] call KISKA_fnc_playDrivePath;\n```"
                }
            ],
            "description": "Uses setDriveOnPath to move a vehicle. Additionally makes sure the vehiclecan move before starting (turn engineOn and use doStop)."
        },
        "configuration": {
            "label": "KISKA_fnc_playDrivePath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/fn_playMusic.sqf",
            "syntaxes": [
                {
                    "outline": "[_track, _startTime, _canInterrupt, _volume, _fadeTime] call `KISKA_fnc_playMusic`",
                    "parameters": [
                        {
                            "name": "_track",
                            "description": "*(STRING)* - Music to play"
                        },
                        {
                            "name": "_startTime",
                            "description": "*(NUMBER OR ARRAY)* - Starting time of music. -1 for random start time.If array, duration of track can also be specified (SEE EXAMPLE 2).THIS INCLUDES FADE TIME"
                        },
                        {
                            "name": "_canInterrupt",
                            "description": "*(BOOL)* - Interrupt playing music"
                        },
                        {
                            "name": "_volume",
                            "description": "*(NUMBER)* - Volume to play at"
                        },
                        {
                            "name": "_fadeTime",
                            "description": "*(NUMBER)* - Time to fade tracks down & up"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"track\", 0, true, 1, 3] spawn KISKA_fnc_playMusic;\n```"
                },
                {
                    "text": "```sqf\n[\n    \"track\",\n    [10,60]    // start ten seconds into the song, and play for 60 seconds\n] spawn KISKA_fnc_playMusic;\n```"
                }
            ],
            "description": "Plays music with smooth fade between tracks. Must be run in scheduled environment (spawn)"
        },
        "configuration": {
            "label": "KISKA_fnc_playMusic",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Sound/fn_playRandom3dSoundLoop.sqf",
            "syntaxes": [
                {
                    "outline": "[_origin, _sounds, _timeBetweenSounds, _soundParams, _onSoundPlayed] call `KISKA_fnc_playRandom3dSoundLoop`",
                    "parameters": [
                        {
                            "name": "_origin",
                            "description": "*(OBJECT or ARRAY)* - The position (ASL), object from which the sound comes from, or an array of any combination of the two (effectively multiple origins)"
                        },
                        {
                            "name": "_sounds",
                            "description": "*(ARRAY)* - An array of sounds to play randomly with any combination of three formats:\n    - *(STRING)*: A config name of a sound in either CfgSounds and/or CfgMusic. This config Musthave a \"duration\" number property. \n    - [*(STRING)*,*(NUMBER)*] ([*(configClassName)*,*(duration)*]): a config class name that is in CfgSounds and/or CfgMusic and the duration the sound lasts.\n    - *(CONFIG)*: a config path to a class with a \"sound[]\" array property that has it's first entryas a sound file path, and has a \"duration\" number property."
                        },
                        {
                            "name": "_timeBetweenSounds",
                            "description": "*(NUMBER or ARRAY)* - A buffer time between each sound once one completes. If array, random syntax of random [min,mid,max] is used to get buffer each time a sound completes."
                        },
                        {
                            "name": "_soundParams",
                            "description": "*(ARRAY)* - An array of parameters for playSound3D:\n \n    - 0. _distance *(NUMBER)* - Distance at which the sound can be heard\n    - 1. _volume *(NUMBER)* - Range from 0-5\n    - 2. _isInside *(BOOL)* - Is _origin inside\n    - 3. _pitch *(NUMBER)* - Range from 0-5"
                        },
                        {
                            "name": "_onSoundPlayed",
                            "description": "*(ARRAY, CODE, STRING)* - A callback function that executes each time a sound is played\n    (See KISKA_fnc_callback). Parameters are:\n\n    - 0. *(NUMBER)* - An id that can be used with KISKA_fnc_stopRandom3dSoundLoop to stop sounds\n    - 1. *(OBJECT or ARRAY)* - The position the sound is playing at\n    - 2. *(CONFIG)* - The config of the current sound being played"
                        }
                    ],
                    "returns": "*(NUMBER)* - An id that can be used with KISKA_fnc_stopRandom3dSoundLoop to stopthe sound loop."
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    player,\n    [],\n    5,\n    [],\n    {hint str _this}\n] call KISKA_fnc_playRandom3dSoundLoop;\n```"
                }
            ],
            "description": "Randomly plays sounds (or music) in 3d space from a given list at one or multiple origins.\n \nThis function will produce synchronized audio on all machines."
        },
        "configuration": {
            "label": "KISKA_fnc_playRandom3dSoundLoop",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Sound/fn_playSound2D.sqf",
            "syntaxes": [
                {
                    "outline": "[_sound, _center, _radius, _threeDimensional] call `KISKA_fnc_playSound2D`",
                    "parameters": [
                        {
                            "name": "_sound",
                            "description": "*(STRING)* - The sound name to play"
                        },
                        {
                            "name": "_center",
                            "description": "*(OBJECT or ARRAY)* - The center position of the radius to search around"
                        },
                        {
                            "name": "_radius",
                            "description": "*(NUMBER)* - How far can the player be from the _center and still \"hear\" the sound"
                        },
                        {
                            "name": "_threeDimensional",
                            "description": "*(BOOL)* - Whether to measure the distance to the player in 2d or 3d space"
                        }
                    ],
                    "returns": "*(BOOL)* - True if played, false if did not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"alarm\",player,20] call KISKA_fnc_playSound2D;\n```"
                }
            ],
            "description": "Plays a 2D sound if a player is within a given area.Used due to say2D's broken \"maxTitlesDistance\"."
        },
        "configuration": {
            "label": "KISKA_fnc_playSound2D",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Sound/fn_playSound3D.sqf",
            "syntaxes": [
                {
                    "outline": "[_sound, _origin, _distance, _volume, _isInside, _pitch] call `KISKA_fnc_playSound3D`",
                    "parameters": [
                        {
                            "name": "_sound",
                            "description": "*(STRING or CONFIG)* - The sound to play. The classname of a CfgSounds entry (if string)or any config class that has a \"sound[]\" array and \"duration\" number property (such as CfgMusic classes)"
                        },
                        {
                            "name": "_origin",
                            "description": "*(OBJECT or ARRAY)* - The position (ASL), object from which the sound comes from, or an array of any combination of the two (effectively multiple origins)"
                        },
                        {
                            "name": "_distance",
                            "description": "*(NUMBER)* - Distance at which the sound can be heard"
                        },
                        {
                            "name": "_volume",
                            "description": "*(NUMBER)* - Range from 0-5"
                        },
                        {
                            "name": "_isInside",
                            "description": "*(BOOL)* - Is _origin inside"
                        },
                        {
                            "name": "_pitch",
                            "description": "*(NUMBER)* - Range from 0-5"
                        }
                    ],
                    "returns": "*(BOOL)* - True if sound found and played, false if error"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    \"BattlefieldJet1_3D\",\n    (getPosASL player) vectorAdd [50,50,100],\n    2000\n] call KISKA_fnc_playSound3D;\n```"
                }
            ],
            "description": "Plays a sound 3D but the function accepts the CFGSounds name rather then the file path."
        },
        "configuration": {
            "label": "KISKA_fnc_playSound3D",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_pushBackToArray.sqf",
            "syntaxes": [
                {
                    "outline": "[_arrayVariableName, _entryToAdd, _namespace] call `KISKA_fnc_pushBackToArray`",
                    "parameters": [
                        {
                            "name": "_arrayVariableName",
                            "description": ": *(STRING)* - The array in string format"
                        },
                        {
                            "name": "_entryToAdd",
                            "description": ": *(ANY)* - The value to pushBack"
                        },
                        {
                            "name": "_namespace",
                            "description": ": *(NAMESPACE,OBJECT,GROUP,LOCATION,CONTROL, or DISPLAY)* - What namespace the array is in"
                        }
                    ],
                    "returns": "*(BOOL)* - true if added, false if not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"myGlobalArrayVar\",someInfoHere,missionNamespace] call KISKA_fnc_pushBackToArray;\n```"
                }
            ],
            "description": "Pushes back a value to a global array.\nThis was used in lieu of creating a public variable to sync the array.In order to keep network traffic lower if the array becomes large."
        },
        "configuration": {
            "label": "KISKA_fnc_pushBackToArray",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_pushBackToArray_interface.sqf",
            "syntaxes": [
                {
                    "outline": "[_arrayVariableName, _entryToAdd, _namespace] call `KISKA_fnc_pushBackToArray_interface`",
                    "parameters": [
                        {
                            "name": "_arrayVariableName",
                            "description": ": *(STRING)* - The array in string format"
                        },
                        {
                            "name": "_entryToAdd",
                            "description": ": *(ANY)* - The value to pushBack"
                        },
                        {
                            "name": "_namespace",
                            "description": ": *(NAMESPACE,OBJECT,GROUP,LOCATION,CONTROL, or DISPLAY)* - What namespace the array is in"
                        }
                    ],
                    "returns": "*(BOOL)* - true if added, false if not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    \"myGlobalArrayVar\",\n    someInfoHere,\n    missionNamespace\n] call KISKA_fnc_pushBackToArray_interface;\n```"
                }
            ],
            "description": "Pushes back a value to a global array. Checks if machine hasInterface before pushing.\nThis was used in lieu of creating a public variable to sync the array.In order to keep network traffic lower if the array becomes large."
        },
        "configuration": {
            "label": "KISKA_fnc_pushBackToArray_interface",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Sound/fn_radioChatter.sqf",
            "syntaxes": [
                {
                    "outline": "[_followSource, _soundParams] call `KISKA_fnc_radioChatter`",
                    "parameters": [
                        {
                            "name": "_followSource",
                            "description": "*(BOOL)* - Should the radio audio be attached to the _source object?This will use say3D instead of playSound3d."
                        },
                        {
                            "name": "_soundParams",
                            "description": "*(ARRAY)* - An array of parameters that are slightly different depending on the _followSource valueIf _followSource is true:\n        - 0: _source *(OBJECT)* - Where the sound is coming from\n        - 1: _distance *(NUMBER)* - Max distance at which the sound can be heard\n        - 2: _offset *(ARRAY)* - AttachTo coordinates that can be used to offset the soundIf _followSource is false:\n        - 0: _source *(OBJECT or ARRAY)* - Where the sound is coming from.If array format positionASL.\n        - 1: _distance *(NUMBER)* - Max distance at which the sound can be heard\n        - 2: _volume *(NUMBER)* - How loud the sound plays"
                        }
                    ],
                    "returns": "*(NUMBER)* - the \"chatter ID\" that can be used with KISKA_fnc_stopRadioChatter. -1 if error"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// radio sound follows player\n[\n    true,\n    [player]\n] call KISKA_fnc_radioChatter;\n```"
                },
                {
                    "text": "```sqf\n// radio sound follows front of player\n[\n    true,\n    [player,5,[0,1,0]]\n] call KISKA_fnc_radioChatter;\n```"
                }
            ],
            "description": "Plays a random radio ambient at the specified position.\nThis has a global effect now and should be executed on one machine."
        },
        "configuration": {
            "label": "KISKA_fnc_radioChatter",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Loadouts/fn_randomGear.sqf",
            "syntaxes": [
                {
                    "outline": "[_unit, _uniforms, _headgear, _facewear, _vests, _backpacks, _primaryWeapons, _handguns, _secondaryWeapons] call `KISKA_fnc_randomGear`",
                    "parameters": [
                        {
                            "name": "_unit",
                            "description": ": *(OBJECT)* - The unit to randomize gear"
                        },
                        {
                            "name": "_uniforms",
                            "description": ": *(STRING[] or (STRING,NUMBER)[])* - Potential uniforms to wear"
                        },
                        {
                            "name": "_headgear",
                            "description": ": *(STRING[] or (STRING,NUMBER)[])* - Potential headgear to wear"
                        },
                        {
                            "name": "_facewear",
                            "description": ": *(STRING[] or (STRING,NUMBER)[])* - Potential facewear (goggles) to wear"
                        },
                        {
                            "name": "_vests",
                            "description": ": *(STRING[] or (STRING,NUMBER)[])* - Potential vests to wear"
                        },
                        {
                            "name": "_backpacks",
                            "description": ": *(STRING[] or (STRING,NUMBER)[])* - Potential backpacks to wear"
                        },
                        {
                            "name": "_primaryWeapons",
                            "description": ": *([STRING,(STRING[] | (STRING,NUMBER)[])][])* - Primary weapons and items to add to them (see example)"
                        },
                        {
                            "name": "_handguns",
                            "description": ": *([STRING,(STRING[] | (STRING,NUMBER)[])][])* - Handgun weapons and items to add to them"
                        },
                        {
                            "name": "_secondaryWeapons",
                            "description": ": *([STRING,(STRING[] | (STRING,NUMBER)[])][])* - Secondary (launcher) weapons and items to add to them"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _uniforms = [\"U_B_CombatUniform_mcam_vest\"];\nprivate _headgear = [];\nprivate _facewear = [];\nprivate _vests = [];\nprivate _backpacks = [];\nprivate _primaryWeapons = [\n    // add a mag an optic to rifle\n    [\"arifle_MXC_F\",[\"optic_Aco\",\"30Rnd_65x39_caseless_mag\"]]\n];\n\n[\n    _unit,\n    _uniforms,\n    _headgear,\n    _facewear,\n    _vests,\n    _backpacks,\n    _primaryWeapons\n] call KISKA_fnc_randomGear;\n```"
                }
            ],
            "description": "Randomizes gear based upon input arrays for each slot. Be aware that this functionis very slow (can take >1ms) and should be used ideally on initialization for largenumbers of units. \nThe unit must be local to the machine where this function is executed.\nAll gear arrays can be weighted or unweighted arrays."
        },
        "configuration": {
            "label": "KISKA_fnc_randomGear",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_randomIndex.sqf",
            "syntaxes": [
                {
                    "outline": "[_array] call `KISKA_fnc_randomIndex`",
                    "parameters": [
                        {
                            "name": "_array",
                            "description": "*(ARRAY)* - The array to find a random index of."
                        }
                    ],
                    "returns": "*(NUMBER)* - The random index"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _randomIndex = [[1,2,3]] call KISKA_fnc_randomIndex;\n```"
                }
            ],
            "description": "Returns a random index of an array ~2x faster than BIS_fnc_randomIndex;"
        },
        "configuration": {
            "label": "KISKA_fnc_randomIndex",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Loadouts/fn_randomLoadout.sqf",
            "syntaxes": [
                {
                    "outline": "[_units, _loadoutArray] call `KISKA_fnc_randomLoadout`",
                    "parameters": [
                        {
                            "name": "_units",
                            "description": "*(OBJECT, GROUP, or ARRAY)* - The unit or units you want to select therandom loadout for. If array, accepts and array of objects."
                        },
                        {
                            "name": "_loadoutArray",
                            "description": "*(ARRAY)* - An array containing each loadout array.Same syntax as getUnitLoadout return."
                        }
                    ],
                    "returns": "_unitsChanged *(ARRAY)* - All the units changed"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[guy,[globalLoadout1,globalLoadout2]] call KISKA_fnc_randomLoadout;\n```"
                }
            ],
            "description": "Randomly assigns a loadout from the inputed array to the unit(s) provided."
        },
        "configuration": {
            "label": "KISKA_fnc_randomLoadout",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/Random Music/fn_randomMusic.sqf",
            "syntaxes": [
                {
                    "outline": "[_musicTracks, _interval, _canInterrupt, _tickId, _usedMusicTracks] call `KISKA_fnc_randomMusic`",
                    "parameters": [
                        {
                            "name": "_musicTracks",
                            "description": "*(STRING[])* - An array of classnames for music defined in `CfgMusic`"
                        },
                        {
                            "name": "_interval",
                            "description": "*(ARRAY or NUMBER)* - A random or set time between tracks. Formats are `[min,mid,max]` & `[max]` for random numbers andjust a single number for a set time between (see example)"
                        },
                        {
                            "name": "_canInterrupt",
                            "description": "*(BOOL)* - If this is a new random music set, will the initial songbe able to interrupt any playing music."
                        },
                        {
                            "name": "_tickId",
                            "description": "*(NUMBER)* - Used to superceed another random music loop, passs -1 to start a new one"
                        },
                        {
                            "name": "_usedMusicTracks",
                            "description": "*(STRING[])* - An array of already used music tracks, don't bother manually entering anyhting, this is for looping purposes"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// space tracks by 20 seconds exactly each\n[-1,arrayOfTracks,20] call KISKA_fnc_randomMusic;\n```"
                },
                {
                    "text": "```sqf\n// space tracks by UP TO 20 seconds each\n[-1,arrayOfTracks,[20]] call KISKA_fnc_randomMusic;\n```"
                }
            ],
            "description": "Starts playing a random assortment of curated music tracks to all players on a server.This is essentially a multiplayer jukebox. Should only be executed on the server.\nAll songs will be played in a random order and then loop back to play in another random order infinitely.\nIt will not interrupt music commanded to play by other means.\nYou can define quiet time space between tracks."
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/Random Music/fn_randomMusic_getCurrentTrack.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_randomMusic_getCurrentTrack`",
                    "parameters": [],
                    "returns": "*(STRING)* - The current randomly selected track"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_mostRecentRandomTrack = call KISKA_fnc_randomMusic_getCurrentTrack;\n```"
                }
            ],
            "description": "Returns the most recent track selected by the random music system.Will be an empty string \"\" if none is defined.\nThis is regardless of whether the song is actually playing."
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_getCurrentTrack",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/Random Music/fn_randomMusic_getTrackInterval.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_randomMusic_getTrackInterval`",
                    "parameters": [],
                    "returns": "*(ARRAY or NUMBER)* - see Description for details"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _interval = call KISKA_fnc_randomMusic_getTrackInterval;\n```"
                }
            ],
            "description": "Retrieves the current tracks in the random music system that could play.\nPossible Values:\n    [NUMBER,NUMBER,NUMBER] - used with the \"random\" command's [min,mid,max]to get a uniform random space between tracks.\n    [NNUMBER] - used with denotes that the space between tracks can be UP TO this number.NUMBER - the exact time between tracks that will be the same every time."
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_getTrackInterval",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/Random Music/fn_randomMusic_getUnusedTracks.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_randomMusic_getUnusedTracks`",
                    "parameters": [],
                    "returns": "*(ARRAY)* - An array of strings of the unused classnames of tracks"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _arrayOfTracks = call KISKA_fnc_randomMusic_getUnusedTracks;\n```"
                }
            ],
            "description": "Retrieves the current tracks in the random music system that could play."
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_getUnusedTracks",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/Random Music/fn_randomMusic_getUsedTracks.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_randomMusic_getUsedTracks`",
                    "parameters": [],
                    "returns": "*(ARRAY)* - An array of strings of the used classnames of tracks"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _arrayOfTracks = call KISKA_fnc_randomMusic_getUsedTracks;\n```"
                }
            ],
            "description": "Retrieves the tracks in the random music system that have already been played"
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_getUsedTracks",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/Random Music/fn_randomMusic_getVolume.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_randomMusic_getVolume`",
                    "parameters": [],
                    "returns": "*(NUMBER)* - the volume"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _volume = call KISKA_fnc_randomMusic_getVolume;\n```"
                }
            ],
            "description": "Retrieves the current volume that random music system plays tracks at"
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_getVolume",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/Random Music/fn_randomMusic_isSystemRunning.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_randomMusic_isSystemRunning`",
                    "parameters": [],
                    "returns": "*(BOOL)* - True for running, false for not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _isRunning = call KISKA_fnc_randomMusic_isSystemRunning;\n```"
                }
            ],
            "description": "Retrieves whether or not the random music system is currently running"
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_isSystemRunning",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/Random Music/fn_randomMusic_setCurrentTrack.sqf",
            "syntaxes": [
                {
                    "outline": "[_trackClass] call `KISKA_fnc_randomMusic_setCurrentTrack`",
                    "parameters": [
                        {
                            "name": "_trackClass",
                            "description": "*(STRING)* - a classname to check the duration of or its config path"
                        }
                    ],
                    "returns": "*(BOOL)* - True when set"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"Some_Music_Track\"] call KISKA_fnc_randomMusic_setCurrentTrack;\n```"
                }
            ],
            "description": "Sets the current random track from the random music system."
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_setCurrentTrack",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/Random Music/fn_randomMusic_setSystemRunning.sqf",
            "syntaxes": [
                {
                    "outline": "[_setting] call `KISKA_fnc_randomMusic_setSystemRunning`",
                    "parameters": [
                        {
                            "name": "_setting",
                            "description": "*(BOOL)* - True for running, false for not"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// set to running\n[true] call KISKA_fnc_randomMusic_setSystemRunning;\n```"
                }
            ],
            "description": "Sets the boolean for determining if the random music system is running."
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_setSystemRunning",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/Random Music/fn_randomMusic_setTrackInterval.sqf",
            "syntaxes": [
                {
                    "outline": "[_interval] call `KISKA_fnc_randomMusic_setTrackInterval`",
                    "parameters": [
                        {
                            "name": "_interval",
                            "description": "*(ARRAY or NUMBER)* - A random or set time between tracks.Formats are [min,mid,max] & [max] for random numbers and just a singlenumber for a set time between."
                        }
                    ],
                    "returns": "*(BOOL)* - true if updated, false if not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[20] remoteExecCall [\"KISKA_fnc_randomMusic_setTrackInterval\",2];\n```"
                }
            ],
            "description": "Sets the dwell time variable that handles the time between random music tracksbeing played."
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_setTrackInterval",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/Random Music/fn_randomMusic_setUnusedTracks.sqf",
            "syntaxes": [
                {
                    "outline": "[_musicTracks] call `KISKA_fnc_randomMusic_setUnusedTracks`",
                    "parameters": [
                        {
                            "name": "_musicTracks",
                            "description": "*(ARRAY)* - An array of strings (music tracks) to use"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[[\"someTrack\",\"anotherTrack\"]] call KISKA_fnc_randomMusic_setUnusedTracks;\n```"
                }
            ],
            "description": "Sets the current tracks in the random music system that could play."
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_setUnusedTracks",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/Random Music/fn_randomMusic_setUsedTracks.sqf",
            "syntaxes": [
                {
                    "outline": "[_usedMusicTracks] call `KISKA_fnc_randomMusic_setUsedTracks`",
                    "parameters": [
                        {
                            "name": "_usedMusicTracks",
                            "description": "*(ARRAY)* - An array of already used music tracks"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[[\"SomeTrack\",\"AnotherTrack\"]] call KISKA_fnc_randomMusic_setUsedTracks;\n```"
                }
            ],
            "description": "Sets the tracks in the random music system that have already been played"
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_setUsedTracks",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/Random Music/fn_randomMusic_setVolume.sqf",
            "syntaxes": [
                {
                    "outline": "[_volume] call `KISKA_fnc_randomMusic_setVolume`",
                    "parameters": [
                        {
                            "name": "_volume",
                            "description": "*(NUMBER)* - volume to set"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[1] remoteExecCall [\"KISKA_fnc_randomMusic_setVolume\",2];\n```"
                }
            ],
            "description": "Changes the volume at which random music specifically will play at (on all clients).\nOnly executes on server."
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_setVolume",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/Random Music/fn_randomMusic_stopClient.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_randomMusic_stopClient`",
                    "parameters": [],
                    "returns": "*(BOOL)* - True if done, false if nothing done"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_randomMusic_stopClient;\n```"
                }
            ],
            "description": "The clientside part of stopping random music system.Ideally, should not be called on its own but used from KISKA_fnc_randomMusic_stopServer"
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_stopClient",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/Random Music/fn_randomMusic_stopServer.sqf",
            "syntaxes": [
                {
                    "outline": "[_playLastSong] call `KISKA_fnc_randomMusic_stopServer`",
                    "parameters": [
                        {
                            "name": "_playLastSong",
                            "description": "*(BOOL)* - Should the last song play or not"
                        }
                    ],
                    "returns": "*(BOOL)* - True if done, false if nothing done"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_randomMusic_stopServer;\n```"
                }
            ],
            "description": "Stops the random music system either abrubtly or allows the last song to play."
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_stopServer",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_reassignCurator.sqf",
            "syntaxes": [
                {
                    "outline": "[_curatorObject, _isManual] call `KISKA_fnc_reassignCurator`",
                    "parameters": [
                        {
                            "name": "_curatorObject",
                            "description": ": *(OBJECT or STRING)* - The curator object to reassign"
                        },
                        {
                            "name": "_isManual",
                            "description": ": *(BOOL)* - Was this called from the diary entry (keeps hints from showing otherwise)"
                        }
                    ],
                    "returns": "*(BOOL)* - true if added to player, false otherwise"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// show hint messages\n[myCuratorObject,true] call KISKA_fnc_reassignCurator;\n```"
                }
            ],
            "description": "Reassigns a curator object to the local player."
        },
        "configuration": {
            "label": "KISKA_fnc_reassignCurator",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_recordDrivePath.sqf",
            "syntaxes": [
                {
                    "outline": "[_unit, _frequency, _recordSpeed] call `KISKA_fnc_recordDrivePath`",
                    "parameters": [
                        {
                            "name": "_unit",
                            "description": "*(OBJECT)* - The unit to record"
                        },
                        {
                            "name": "_frequency",
                            "description": "*(NUMBER)* - How often to record, 0 for every frame"
                        },
                        {
                            "name": "_recordSpeed",
                            "description": "*(BOOL)* - Should the speed of the _unit be recorded to"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    objectParent player,\n    0.25\n] call KISKA_fnc_recordDrivePath\n```"
                }
            ],
            "description": "Records an array of positons and speeds for use with setDriveOnPath command."
        },
        "configuration": {
            "label": "KISKA_fnc_recordDrivePath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_remoteReturn_receive.sqf",
            "syntaxes": [
                {
                    "outline": "[_code, _args, _scheduled, _uniqueId] call `KISKA_fnc_remoteReturn_receive`",
                    "parameters": [
                        {
                            "name": "_code",
                            "description": "*(STRING)* - The code to execute to get a return"
                        },
                        {
                            "name": "_args",
                            "description": ": *(ARRAY)* - An array of arguements for the _code"
                        },
                        {
                            "name": "_scheduled",
                            "description": ": *(BOOL)* - Should _code be run in a scheduled environment"
                        },
                        {
                            "name": "_uniqueId",
                            "description": "*(STRING)* - The unique variable id used to send the return back to the requester"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    _code,\n    _args,\n    _scheduled,\n    _uniqueId,\n    clientOwner\n] remoteExecCall [\"KISKA_fnc_remoteReturn_receive\",_target];\n```"
                }
            ],
            "description": "The send back component of KISKAs remote returns.This catches what was sent in KISKA_fnc_remoteReturn_send and will send thevariable back to the remoteExecutedOwner."
        },
        "configuration": {
            "label": "KISKA_fnc_remoteReturn_receive",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_remoteReturn_send.sqf",
            "syntaxes": [
                {
                    "outline": "[_code, _defaultValue, _target, _scheduled, _awaitParams] spawn `KISKA_fnc_remoteReturn_send`",
                    "parameters": [
                        {
                            "name": "_code",
                            "description": "*(STRING)* - The command to execute on the target machine"
                        },
                        {
                            "name": "_defaultValue",
                            "description": ": *(ANY)* - If the variable does not exist for the target, what should be returned instead"
                        },
                        {
                            "name": "_target",
                            "description": ": *(NUMBER, OBJECT, or STRING)* - The target to execute the _code on"
                        },
                        {
                            "name": "_scheduled",
                            "description": ": *(BOOL)* - Should _code be run in a scheduled environment (on target machine)"
                        },
                        {
                            "name": "_awaitParams",
                            "description": ": *([NUMBER,NUMBER,BOOL])* - How the get from the target should be awaited\nParameters:\n    - 0: *(NUMBER)* - The sleep time between each check for the variable being received\n    - 1: *(NUMBER)* - The max time to wait for (this is not total game time but time slept)\n    - 2: *(BOOL)* - Whether or not the sleep time should be exponential (double every iteration)"
                        }
                    ],
                    "returns": "*(ANY)* - Whatever the code returns"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[] spawn {\n    // need to call for direct return but in scheduled environment\n    _clientIdFromServer = [\"owner (_this select 0)\",[player],2] call KISKA_fnc_remoteReturn_send;\n};\n```"
                }
            ],
            "description": "Gets a remote return from a scripting command on a target machine.\n \nBasically remoteExec but with a return.\nNeeds to be run in a scheduled environment as it takes time to receivethe return.\nThis should not be abused to obtain large returns over the network.\n \nBe smart and use for simple types (not massive arrays)."
        },
        "configuration": {
            "label": "KISKA_fnc_remoteReturn_send",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_removeArsenal.sqf",
            "syntaxes": [
                {
                    "outline": "[_arsenals] call `KISKA_fnc_removeArsenal`",
                    "parameters": [
                        {
                            "name": "_arsenals",
                            "description": "*(ARRAY or OBJECT)* - An array of objects to add arsenals to"
                        }
                    ],
                    "returns": "*(BOOL)* - true if done, false if not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[[arsenal1, arsenal2]] call KISKA_fnc_removeArsenal;\n```"
                }
            ],
            "description": "Removes both BIS and ACE arsenals from several or a single object.This has a global effect."
        },
        "configuration": {
            "label": "KISKA_fnc_removeArsenal",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_removeBISArsenalAction.sqf",
            "syntaxes": [
                {
                    "outline": "[_arsenal] call `KISKA_fnc_removeBISArsenalAction`",
                    "parameters": [
                        {
                            "name": "_arsenal",
                            "description": "*(OBJECT)* - The arsenal to remove from"
                        }
                    ],
                    "returns": "*(BOOL)* - true if arsenal was removed, false if action does not currently exist"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_done = [arsenal] call KISKA_fnc_removeBISArsenalAction;\n```"
                }
            ],
            "description": "Removes the BIS arsenal action from the given object."
        },
        "configuration": {
            "label": "KISKA_fnc_removeBISArsenalAction",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_removeEntityKilledEventHandler.sqf",
            "syntaxes": [
                {
                    "outline": "[_entity, _eventId] call `KISKA_fnc_removeEntityKilledEventHandler`",
                    "parameters": [
                        {
                            "name": "_entity",
                            "description": "*(OBJECT)* - The entity to remove event from"
                        },
                        {
                            "name": "_eventId",
                            "description": "*(NUMBER)* - The Id of the event to remove"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[aUnit,{hint _this}] call KISKA_fnc_removeEntityKilledEventHandler;\n```"
                }
            ],
            "description": "Removes a killed KISKA entity event handler."
        },
        "configuration": {
            "label": "KISKA_fnc_removeEntityKilledEventHandler",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_removeProximityPlayerAction.sqf",
            "syntaxes": [
                {
                    "outline": "[_id] call `KISKA_fnc_removeProximityPlayerAction`",
                    "parameters": [
                        {
                            "name": "_id",
                            "description": ": *(NUMBER)* - The proximity action id returned from KISKA_fnc_addProximityPlayerAction"
                        }
                    ],
                    "returns": "*(BOOL)* - False if action still exists, true if it does not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[0] call KISKA_fnc_removeProximityPlayerAction;\n```"
                }
            ],
            "description": "Stages an action added with KISKA_fnc_addProximityPlayerAction for removal.This happens within the loop logic of KISKA_fnc_addProximityPlayerAction soit is NOT instant."
        },
        "configuration": {
            "label": "KISKA_fnc_removeProximityPlayerAction",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Loadouts/fn_savePlayerLoadout.sqf",
            "syntaxes": [
                {
                    "outline": "spawn `KISKA_fnc_savePlayerLoadout`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nPRE-INIT function\n```"
                }
            ],
            "description": "Adds a kill and respawn eventhandler to the player object that restoressaves and restores the player loadout (if set in CBA menu settings)."
        },
        "configuration": {
            "label": "KISKA_fnc_savePlayerLoadout",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_resetMove.sqf",
            "syntaxes": [
                {
                    "outline": "[_unit] call `KISKA_fnc_selectRandom`",
                    "parameters": [
                        {
                            "name": "_unit",
                            "description": "*(OBJECT)* - The unit to reset animation on"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_unit] remoteExecCall [\"KISKA_fnc_resetMove\"]\n```"
                }
            ],
            "description": "Call switchMove \"\" on a given unit. This function was created because as of release 2.10 there is an issue where remoteExec'ing switchMove \"\" on a unit directly within some functions (KISKA_fnc_ambientAnim_stop) does not work as intended \n (the intention being the unit returns to normal animations)\n \nRemoteexecuting this function, however, fixes the issue."
        },
        "configuration": {
            "label": "KISKA_fnc_selectRandom",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_selectRandom.sqf",
            "syntaxes": [
                {
                    "outline": "[_array, _valueType] call `KISKA_fnc_selectRandom`",
                    "parameters": [
                        {
                            "name": "_array",
                            "description": "*(ARRAY)* - An array either formatted as `[value, weight (number)]`, `[[array_of_values],[array_of_weights]]`, orjust values (`[value1,value2]`)"
                        },
                        {
                            "name": "_valueType",
                            "description": "*(ANY)* - A variable that should have the same type as the valueentries in the array e.g. \"\" for string, [] for array\n    (only needed for possibly weighted arrays)"
                        }
                    ],
                    "returns": "*(ANY)* - Random entry from the array"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _randomValue = [[\n    \"thing1\",\n    \"thing2\"\n]] call KISKA_fnc_selectRandom;\n```"
                },
                {
                    "text": "```sqf\nprivate _weight1 = 0.5;\nprivate _weight2 = 0.5;\n\nprivate _randomWeightedValue = [\n    [\n        \"thing1\", _weight1,\n        \"thing2\", _weight2\n    ],\n    \"\"\n] call KISKA_fnc_selectRandom;\n```"
                },
                {
                    "text": "```sqf\nprivate _weight1 = 0.5;\nprivate _weight2 = 0.5;\n\nprivate _randomWeightedValue = [\n    [\n        [\"thing1\", \"thing2\"],\n        [_weight1, _weight2]\n    ],\n    \"\"\n] call KISKA_fnc_selectRandom;\n```"
                }
            ],
            "description": "Selects randomly an entry from an array be it weighted or unweighted."
        },
        "configuration": {
            "label": "KISKA_fnc_selectRandom",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_setContainerCargo.sqf",
            "syntaxes": [
                {
                    "outline": "[_containerToLoad, _cargo] call `KISKA_fnc_setContainerCargo`",
                    "parameters": [
                        {
                            "name": "_containerToLoad",
                            "description": "*(OBJECT)* - The container to add the cargo to."
                        },
                        {
                            "name": "_cargo",
                            "description": "*(ARRAY or OBJECT)* - An array of various items, magazines, and weapons formatted from KISKA_fnc_getContainerCargo or the object to copy from"
                        }
                    ],
                    "returns": "*(BOOL)* - True if cargo was set"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[container,otherContainer] call KISKA_fnc_setContainerCargo;\n```"
                },
                {
                    "text": "```sqf\nprivate _cargoToCopy = [otherContainer] call KISKA_fnc_getContainerCargo;\n[container,_cargoToCopy] call KISKA_fnc_setContainerCargo;\n```"
                }
            ],
            "description": "Takes a cargo array formatted from KISKA_fnc_getContainerCargo and adds it to another container.Exact ammo counts will be preserved even inside of an item, such as magazines inside of a vest or backpack."
        },
        "configuration": {
            "label": "KISKA_fnc_setContainerCargo",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_setCrew.sqf",
            "syntaxes": [
                {
                    "outline": "[_crew, _vehicle, _deleteCrewIfNull] call `KISKA_fnc_setCrew`",
                    "parameters": [
                        {
                            "name": "_crew",
                            "description": ": *(GROUP, ARRAY, or OBJECT)* - The units to move into the vehicle"
                        },
                        {
                            "name": "_vehicle",
                            "description": ": *(OBJECT)* - The vehicle to put units into"
                        },
                        {
                            "name": "_deleteCrewIfNull",
                            "description": ": *(BOOL)* - If the vehicle turns out to be null, the provided crew will be deleted"
                        }
                    ],
                    "returns": "*(BOOL)* - True if crew was set, false if problem encountered"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_group1,_vehicle] call KISKA_fnc_setCrew;\n```"
                }
            ],
            "description": "Moves units into a vehicle as crew and then as passengers."
        },
        "configuration": {
            "label": "KISKA_fnc_setCrew",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_setupMultiKillEvent.sqf",
            "syntaxes": [
                {
                    "outline": "[_objects, _onThresholdMet, _threshold, _onKilled, _useMPKilled] call `KISKA_fnc_setupMultiKillEvent`",
                    "parameters": [
                        {
                            "name": "_objects",
                            "description": "*(ARRAY)* - An array of objects to add some form of killed event handlers to"
                        },
                        {
                            "name": "_onThresholdMet",
                            "description": "*(CODE, ARRAY, or STRING)* - Code that executes once it has been determinedthat the threshold has been met or exceeded. (See KISKA_fnc_callBack). If attemptingto add more units to an existing event, use the event id here (see returned hashmap below for id)and preceed the event id with a \"#\" (see examples)\n \n    Params:\n    - 0. *(ARRAY)* - the killed evenhandler params\n    - 1. *(HASHMAP)* - the hashmap described below in \"Returns\"\n\n// NOT USED if adding to existing event"
                        },
                        {
                            "name": "_threshold",
                            "description": "*(NUMBER)* - A number between 0 and 1 that denotes the percentage of objects thatmust've been killed to trigger the _onThresholdMet.\n    (e.g. 1 means 100% of them need to be killed, 0.5 means 50%, etc.)"
                        },
                        {
                            "name": "_onKilled",
                            "description": "*(CODE, ARRAY, or STRING)* - Code that executes each time a unit has beenkilled (after the _onThresholdMet if threshold has been met). (See KISKA_fnc_callBack)\n \n    Params:\n    - 0. *(ARRAY)* - the killed evenhandler params\n    - 1. *(HASHMAP)* - the hashmap described below in \"Returns\""
                        },
                        {
                            "name": "_useMPKilled",
                            "description": "*(BOOL)* - Whether or not to use \"MPKILLED\" events instead of \"KILLED\".IF TRUE, MUST BE RUN ON THE SERVER"
                        }
                    ],
                    "returns": "*(HASHMAP)* - A hashmap containing info about the event:\n\n- `id`: *(STRING)* - A localNamespace variable name to access this hashmap\n- `total`: *(NUMBER)* - The total number of objects that have this killed event\n- `killed`: *(NUMBER)* - The total number of objects that have been killed with this event\n- `threshold`: *(NUMBER)* - A number that indicates the percentage of objects thatmust be killed (relative to the total) for this event to fire\n    (e.g. 1 means 100% of them need to be killed, 0.5 means 50%, etc.)\n- `thresholdMet`: *(BOOL)* - Whether or not the threshold has been met and thereforeonThresholdMet has fired\n- `onKilled`: *(CODE, ARRAY, or STRING)* - Code that executes each time a unit has beenkilled (after the _onThresholdMet if threshold has been met). (See KISKA_fnc_callBack)\nParams:\n    - 0. *(ARRAY)* - the killed evenhandler params\n    - 1. *(HASHMAP)* - the hashmap described\n\n- `onThresholdMet`: *(CODE, ARRAY, or STRING)* - Code that executes once it has been determinedthat the threshold has been met or exceeded. (See KISKA_fnc_callBack)\n \n    Params:\n    - 0. *(ARRAY)* - the killed evenhandler params\n    - 1. *(HASHMAP)* - the hashmap described\n\n- `eventCode`: *(CODE)* - The code that is attached to the killed eventhandler\n- `type`: *(STRING)* - Type of event, (`KILLED` or `MPKILLED`)\n- `objectToEventIdMap`: *(HASHMAP)* -  A hashmap that uses objects as keys (should use KISKA_fnc_hashmap_get)to get the killed eventhandler id attached to an object."
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _eventMap = [\n    [someObject, anotherObject],\n    {\n        params [\"_killedEventParams\",\"_eventMap\"];\n        _killedEventParams params [\"_killedObject\"];\n        hint str [_killedEventParams, _eventMap];\n    }\n] call KISKA_fnc_setupMultiKillEvent;\n```"
                },
                {
                    "text": "```sqf\n// add more objects to the existing event made above\nprivate _eventMap = [\n    [andAdditionalObject],\n    (\"#\" + (_eventMap get \"id\"))\n] call KISKA_fnc_setupMultiKillEvent;\n```"
                }
            ],
            "description": "Sets up an event that will fire when a percentage of objects are killed.Uses `\"KILLED\"` or `\"MPKILLED\"` eventhandlers.\nThis should be called where the arguements are local if `_useMPKilled` is `false`or on the server if `_useMPKilled` is `true`."
        },
        "configuration": {
            "label": "KISKA_fnc_setupMultiKillEvent",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_setWaypointExecStatement.sqf",
            "syntaxes": [
                {
                    "outline": "[_waypoint, _statement, _existingId] call `KISKA_fnc_setWaypointExecStatement`",
                    "parameters": [
                        {
                            "name": "_waypoint",
                            "description": "*(WAYPOINT)* - Default: `[]` - The waypoint you would like to the executionstatement of."
                        },
                        {
                            "name": "_statement",
                            "description": "*(CODE, STRING, or ARRAY)* - Default: `{}` - Code that executes once the given waypointis complete (see `KISKA_fnc_callBack` for examples).\nParameters:\n    - 0: *(GROUP)* - The group the waypoint belongs to\n    - 1: *(OBJECT)* - The group leader for the group the waypoint belongs to\n    - 2: *(OBJECT[])* - The units of the group that own the waypoint"
                        },
                        {
                            "name": "_existingId",
                            "description": "*(STRING)* - Default: `\"\"` - If updating an existing waypoint statement, provide theid that was previously returned."
                        }
                    ],
                    "returns": "*(STRING)* - The id of the waypoint statment that can be used to update an existing statement"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _waypoint = myGroup addWaypoint [position player, 0];\nprivate _id = [\n    _waypoint,\n    { hint str _this; }\n] call KISKA_fnc_setWaypointExecStatement\n```"
                }
            ],
            "description": "Sets the (execution) statement of a given waypoint using an interface that allowsarg passing.\nThis statement will only be executed on the machine where added.\nBe aware that this will create variables on the provided waypoint's group. If a waypointis deleted, the variable on the group will still remain."
        },
        "configuration": {
            "label": "KISKA_fnc_setWaypointExecStatement",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_showHide.sqf",
            "syntaxes": [
                {
                    "outline": "[_objects, _show, _enableDynamicSim] call `KISKA_fnc_showHide`",
                    "parameters": [
                        {
                            "name": "_objects",
                            "description": "*(ARRAY, GROUP, STRING, or OBJECT)* - Units to show or hide, if string, it is a mission layer"
                        },
                        {
                            "name": "_show",
                            "description": "*(BOOL)* - True to show and simulate, false to hide and disable simulation"
                        },
                        {
                            "name": "_enableDynamicSim",
                            "description": "*(BOOL)* - Should the object be dynamically simulated after shown"
                        }
                    ],
                    "returns": "*(BOOL)* - True if action performed, false otherwise"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[group1, true, true] call KISKA_fnc_showHide;\n```"
                }
            ],
            "description": "On selected objects, will disable simulation and hide the object or the reverse."
        },
        "configuration": {
            "label": "KISKA_fnc_showHide",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_slingLoad.sqf",
            "syntaxes": [
                {
                    "outline": "[_heli, _liftObject, _dropOffPoint, _afterDropCode, _flightPath] call `KISKA_fnc_slingLoad`",
                    "parameters": [
                        {
                            "name": "_heli",
                            "description": ": *(OBJECT)* - Helicopter with pilot to perform slingload"
                        },
                        {
                            "name": "_liftObject",
                            "description": ": *(OBJECT)* - The object to sling load"
                        },
                        {
                            "name": "_dropOffPoint",
                            "description": ": *(ARRAY, OBJECT, LOCATION, or GROUP)* - Where to drop the _liftObject off at"
                        },
                        {
                            "name": "_afterDropCode",
                            "description": ": *(ARRAY, CODE, or STRING)* - Code to execute after the drop off waypoint is complete.This is saved to the pilot's namespace in \"KISKA_postSlingLoadCode\" which is deleted afterit is called. (See KISKA_fnc_callBack)\n \n    Parmeters:\n    - 0. *(OBJECT)* - The pilot of the helicopter\n    - 1. *(OBJECT)* - The helicopter"
                        },
                        {
                            "name": "_flightPath",
                            "description": ": *((PositionASL | OBJECT | LOCATION | GROUP)[])* - An array of sequential positionsthe aircraft must travel prior to droping off the _liftObject"
                        }
                    ],
                    "returns": "*(ARRAY)* -0: *(OBJECT)* - The pilot1: *(GROUP)* - Pilot's group2: *(ARRAY)* - Generated waypoints"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    heli,\n    someObject,\n    dropOff,\n    [\n        [heli],\n        {\n            hint str [_this,_thisArgs]\n        }\n    ]\n] call KISKA_fnc_slingLoad;\n```"
                }
            ],
            "description": "Tells AI helicopter to pick up a given object and drop it off at a given location."
        },
        "configuration": {
            "label": "KISKA_fnc_slingLoad",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_sortStringsNumerically.sqf",
            "syntaxes": [
                {
                    "outline": "[_strings, _order] call `KISKA_fnc_sortStringsNumerically`",
                    "parameters": [
                        {
                            "name": "_strings",
                            "description": "*(STRING[])* - Default: `[]` - The strings you would like to sort"
                        },
                        {
                            "name": "_order",
                            "description": "*(BOOLEAN)* - Default: `true` - ascending (`true`) or descending (`false`)"
                        }
                    ],
                    "returns": "*(STRING[])* - The sorted list of strings"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    [\"myString_2\",\"myString_3\",\"myString_1_1\",\"myString_1\"]\n] call KISKA_fnc_sortStringsNumerically;\n// returns -> `[\"myString_1\",\"myString_1_1\",\"myString_2\",\"myString_3\"]`\n```"
                }
            ],
            "description": "Takes an array or strings, where each string must end with an underscore and a digit\n (`\"something_1\"`) and can handle one extra sub level digit (`\"something_1_1\"`)."
        },
        "configuration": {
            "label": "KISKA_fnc_sortStringsNumerically",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_spawn.sqf",
            "syntaxes": [
                {
                    "outline": "[_numberOfUnits, _numberOfUnitsPerGroup, _unitTypes, _spawnPositions, _canUnitsMove, _enableDynamic, _side, _allowedStances] call `KISKA_fnc_spawn`",
                    "parameters": [
                        {
                            "name": "_numberOfUnits",
                            "description": "*(NUMBER)* - Number of units to spawn, if -1, all provided positionswill be filled"
                        },
                        {
                            "name": "_numberOfUnitsPerGroup",
                            "description": "*(NUMBER)* - Number of units per group"
                        },
                        {
                            "name": "_unitTypes",
                            "description": "*(ARRAY)* - Unit types to select randomly from (can be weighted or unweighted array)"
                        },
                        {
                            "name": "_spawnPositions",
                            "description": "*(ARRAY)* - List of positions at which units will randomly spawn, the array can be positions and/or objects.If given an empty array, all units will spawn at [0,0,0]"
                        },
                        {
                            "name": "_canUnitsMove",
                            "description": "*(BOOL)* - Can units walk (optional)"
                        },
                        {
                            "name": "_enableDynamic",
                            "description": "*(BOOL)* - Should the units be dynamically simmed (Optional)"
                        },
                        {
                            "name": "_side",
                            "description": "*(SIDE)* - Side of units (optional)"
                        },
                        {
                            "name": "_allowedStances",
                            "description": "*(STRING[] or (STRING,NUMBER)[])* - A weighted or unweighted array of setUnitPos compatible values that the units will be randomly set to (`[\"up\",0.7,\"middle\",0.3]` by default) (optional)"
                        }
                    ],
                    "returns": "*(OBJECT[])* - All units spawned by the function"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_spawnedUnits = [2, 2, _arrayOfTypes, [[0,0,0],spawnObject]] call KISKA_fnc_spawn;\n```"
                }
            ],
            "description": "Randomly spawns units on an array of positions.\nPositionATL is expected and arrays can have 4 indexes with a direction for theunit to face being the 4th. If no direction is specified, a random one is chosen.Using an object instead of a position will result in the unit facing the same waythat the object is.\nThis is destructive on the _spawnPositions array so be sure to copy (+_spawnPositions)if you need to reuse the array."
        },
        "configuration": {
            "label": "KISKA_fnc_spawn",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_spawnGroup.sqf",
            "syntaxes": [
                {
                    "outline": "[_numberOfUnits, _unitTypes, _side, _position, _enableDynamicSimulation] call `KISKA_fnc_spawnGroup`",
                    "parameters": [
                        {
                            "name": "_numberOfUnits",
                            "description": "*(NUMBER)* - Number of units to spawn"
                        },
                        {
                            "name": "_unitTypes",
                            "description": "*(ARRAY)* - Unit types to select randomly from (can be weighted array)"
                        },
                        {
                            "name": "_side",
                            "description": "*(SIDE)* - ..."
                        },
                        {
                            "name": "_position",
                            "description": "*(ARRAY, OBJECT, GROUP)* - Position to spawn on"
                        },
                        {
                            "name": "_enableDynamicSimulation",
                            "description": "*(BOOL)* - ... (optional)"
                        }
                    ],
                    "returns": "*(GROUP)* - The group created by the function"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_spawnedGroup = [4, _listOfUnitTypes, OPFOR, [0,0,0], true] call KISKA_fnc_spawnGroup;\n```"
                }
            ],
            "description": "Spawns a group, adds to curator, and sets to aware. Based on selected unit types"
        },
        "configuration": {
            "label": "KISKA_fnc_spawnGroup",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_spawnVehicle.sqf",
            "syntaxes": [
                {
                    "outline": "[_spawnPosition, _spawnDirection, _vehicleClass, _group, _forcePosition, _crewInstructions, _deleteOverflow] call `KISKA_fnc_spawnVehicle`",
                    "parameters": [
                        {
                            "name": "_spawnPosition",
                            "description": "*(ARRAY or OBJECT)* - 3D array in the format of PositionATL\n    (PositionAGL if boat or amphibious). Objects can be used, however, this"
                        },
                        {
                            "name": "_spawnDirection",
                            "description": "*(NUMBER)* - The direction the vehicle is facing when created (relative to north)if _spawnPosition is an object and _spawnDirection == -1, _spawnDirection will be set to thedirection of the _spawnPosition object"
                        },
                        {
                            "name": "_vehicleClass",
                            "description": "*(STRING)* - The typeOf vehicle to spawn"
                        },
                        {
                            "name": "_group",
                            "description": "*(SIDE or GROUP)* - Either the side to create a group on or analready existing group to add the units to"
                        },
                        {
                            "name": "_forcePosition",
                            "description": "*(BOOL)* - Force vehicle to spawn at exact coordinatesDoes nothing when _spawnPosition is an object"
                        },
                        {
                            "name": "_crewInstructions",
                            "description": "*((STRING | OBJECT)[])* - An array of classnames of unit types and/or man objectsfor the crew. Units are moved into the vehicle using moveInAny in the order provided"
                        },
                        {
                            "name": "_deleteOverflow",
                            "description": "*(BOOL)* - Delete any units from _crewInstructions that prexisted if they don't fit in the vehicle"
                        }
                    ],
                    "returns": "*([OBJECT,OBJECT[],GROUP])* -\n- 0: *(OBJECT)* - The created vehicle\n- 1: *(OBJECT[])* - The vehicle crew (if soldier type, it will be the same as created vehicle)\n- 2: *(GROUP)* -  The group the crew is a part of"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[player,0,\"someclass\"] call KISKA_fnc_spawnVehicle;\n```"
                }
            ],
            "description": "A slightly altered/optimized version of BIS_fnc_spawnVehicle.Has support for CUP aircraft to spawn at velocity."
        },
        "configuration": {
            "label": "KISKA_fnc_spawnVehicle",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_addSignal.sqf",
            "syntaxes": [
                {
                    "outline": "[_signalProperties, _global] call `KISKA_fnc_spectrum_addSignal`",
                    "parameters": [
                        {
                            "name": "_signalProperties",
                            "description": ": *(ARRAY)* - The all the properites of the signal\n\n    `_signalProperties` Layout:\n    - 0: _frequency *(NUMBER)* - The frequency of the signal in MHz\n    - 1: _origin *(OBJECT or PositionASL[])* - The position of the signal\n    - 2: _decibels *(NUMBER)* - The base signal decibel level when when near the origin\n    - 3: _maxDistance *(NUMBER)* - The max distance that the signal can be seen on the spectrumanalyzer. This will be what governs how the signal strength increases/decreases dependingon the user's position. Default is `worldSize`."
                        },
                        {
                            "name": "_global",
                            "description": ": *(BOOL)* - `true` to broadcast the changes to all machines including JIP"
                        }
                    ],
                    "returns": "*(STRING)* - The corresponding ID for the signal"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _signalId = [\n    [100,[0,0,0],100]\n] call KISKA_fnc_spectrum_addSignal;\n```"
                }
            ],
            "description": "Adds a signal that can be seen on a spectrum device."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_addSignal",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_deleteSignal.sqf",
            "syntaxes": [
                {
                    "outline": "[_id, _global] call `KISKA_fnc_spectrum_deleteSignal`",
                    "parameters": [
                        {
                            "name": "_id",
                            "description": ": *(STRING)* - The id of the signal to remove"
                        },
                        {
                            "name": "_global",
                            "description": ": *(BOOL)* - `true` to broadcast the change to all machines including JIP (default: `true`)"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"KISKA_spectrumSignal_2_1\"] call KISKA_fnc_spectrum_deleteSignal;\n```"
                }
            ],
            "description": "Deletes a signal with the given id."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_deleteSignal",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_getMaxDecibels.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_spectrum_getMaxDecibels`",
                    "parameters": [],
                    "returns": "*(NUMBER)* - The max viewable decibel level of the spectrum device"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _max = call KISKA_fnc_spectrum_getMaxDecibels;\n```"
                }
            ],
            "description": "Gets the current max decibel level scale of the spectrum device for the local machine."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_getMaxDecibels",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_getMaxFrequency.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_spectrum_getMaxFrequency`",
                    "parameters": [],
                    "returns": "*(NUMBER)* - The max viewable frequency (MHz) of the spectrum device"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _max = call KISKA_fnc_spectrum_getMaxFrequency;\n```"
                }
            ],
            "description": "Gets the current max frequency of the spectrum device for the local machine."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_getMaxFrequency",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_getMinDecibels.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_spectrum_getMinDecibels`",
                    "parameters": [],
                    "returns": "*(NUMBER)* - The min viewable decibel level of the spectrum device"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _min = call KISKA_fnc_spectrum_getMinDecibels;\n```"
                }
            ],
            "description": "Gets the current min decibel level scale of the spectrum device for the local machine."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_getMinDecibels",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_getMinFrequency.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_spectrum_getMinFrequency`",
                    "parameters": [],
                    "returns": "*(NUMBER)* - The min viewable frequency (MHz) of the spectrum device"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _min = call KISKA_fnc_spectrum_getMinFrequency;\n```"
                }
            ],
            "description": "Gets the current min frequency of the spectrum device for the local machine."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_getMinFrequency",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_getSelection.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_spectrum_getSelection`",
                    "parameters": [],
                    "returns": "*([NUMBER,NUMBER])* - The min and max of the player's currently selected area"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _selection = call KISKA_fnc_spectrum_getSelection;\n// _selection params [\"_min\",\"_max\"];\n```"
                }
            ],
            "description": "Provides the current MHz area selected on the local machine. This is where theblue bar that the player manipulates with the scroll wheel is positioned."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_getSelection",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_getSignalMap.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_spectrum_getSignalMap`",
                    "parameters": [],
                    "returns": "*(HASHMAP<STRING,ARRAY)*> - A hashmap where a signal id as key will provide anarray of that signals base properties:\n\n \t- 0. *(NUMBER)* : The frequency of the signal in MHz\n \t- 1. *(PositionASL[])* : The position of the signal\n \t- 2. *(NUMBER)* : The base signal decibel level when when near the origin\n \t- 3. *(NUMBER)* : The max distance that the signal can be seen on the spectrum analyzer"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _signalMap = call KISKA_fnc_spectrum_getSignalMap;\n```"
                }
            ],
            "description": "Returns a map of all the signals and their corresponding ids that have beenadded on the local machine."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_getSignalMap",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_isInitialized.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_spectrum_isInitialized`",
                    "parameters": [],
                    "returns": "*(BOOL)* - `true` if the spectrum device has been initialized, `false` if not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _isInitialized = call KISKA_fnc_spectrum_isInitialized\n```"
                }
            ],
            "description": "Determines whether the spectrum device display has been initialized.\nThis display will be created once a player has added the device to theirinventory. They do not have to equip the device."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_isInitialized",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_isTransmitting.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_spectrum_isTransmitting`",
                    "parameters": [],
                    "returns": "*(BOOL)* - `true` if transmitting, `false` if not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _isTransmitting = call KISKA_fnc_spectrum_isTransmitting\n```"
                }
            ],
            "description": "Checks whether or not the local machine is transimitting on the spectrum device.\nThis shows as a green tint to the player's selection area with the full spectrumdevice ui open, and as a wifi esque signal when merely holding the spectrum device."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_isTransmitting",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_setMaxDecibels.sqf",
            "syntaxes": [
                {
                    "outline": "[_max] call `KISKA_fnc_spectrum_setMaxDecibels`",
                    "parameters": [
                        {
                            "name": "_max",
                            "description": ": *(NUMBER)* - The decibel level"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[-10] call KISKA_fnc_spectrum_setMaxDecibels;\n```"
                }
            ],
            "description": "Sets the current max decibel range of spectrum device for the local machine."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_setMaxDecibels",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_setMaxFrequency.sqf",
            "syntaxes": [
                {
                    "outline": "[_max] call `KISKA_fnc_spectrum_setMaxFrequency`",
                    "parameters": [
                        {
                            "name": "_max",
                            "description": ": *(NUMBER)* - The frequency in MHz"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[125] call KISKA_fnc_spectrum_setMaxFrequency;\n```"
                }
            ],
            "description": "Sets the current max frequency of the spectrum device for the local machine."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_setMaxFrequency",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_setMinDecibels.sqf",
            "syntaxes": [
                {
                    "outline": "[_min] call `KISKA_fnc_spectrum_setMinDecibels`",
                    "parameters": [
                        {
                            "name": "_min",
                            "description": ": *(NUMBER)* - The decibel level"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[-60] call KISKA_fnc_spectrum_setMinDecibels;\n```"
                }
            ],
            "description": "Sets the current min decibel range of spectrum device for the local machine."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_setMinDecibels",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_setMinFrequency.sqf",
            "syntaxes": [
                {
                    "outline": "[_min] call `KISKA_fnc_spectrum_setMinFrequency`",
                    "parameters": [
                        {
                            "name": "_min",
                            "description": ": *(NUMBER)* - The frequency in MHz"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[80] call KISKA_fnc_spectrum_setMinFrequency;\n```"
                }
            ],
            "description": "Sets the current min frequency of the spectrum device for the local machine."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_setMinFrequency",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_setSelectionWidth.sqf",
            "syntaxes": [
                {
                    "outline": "[_width] call `KISKA_fnc_spectrum_setSelectionWidth`",
                    "parameters": [
                        {
                            "name": "_width",
                            "description": ": *(NUMBER)* - The width of the bar in MHz"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// bar is 2 MHz wide\n[2] call KISKA_fnc_spectrum_setSelectionWidth;\n```"
                }
            ],
            "description": "Sets the selection area of the local machine's spectrum device. This is thebar that a user can \"scroll\" around the spectrum with."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_setSelectionWidth",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_setSignalDecibels.sqf",
            "syntaxes": [
                {
                    "outline": "[_id, _decibels, _global] call `KISKA_fnc_spectrum_setSignalDecibels`",
                    "parameters": [
                        {
                            "name": "_id",
                            "description": ": *(STRING)* - The id of the signal to update"
                        },
                        {
                            "name": "_decibels",
                            "description": ": *(NUMBER)* - The max decibel level when the analyzer is directly on top of the origin"
                        },
                        {
                            "name": "_global",
                            "description": ": *(BOOL)* - `true` to broadcast the change to all machines including JIP (default: `true`)"
                        }
                    ],
                    "returns": "*(HASHMAP)* - Signal's updated property map:\n\n- `_frequency`: *(NUMBER)* - The frequency of the signal in MHz\n- `_origin`: *(PositionASL[])* - The position of the signal\n- `_maxDistance`: *(NUMBER)* - The maximum distance the signal can be seen on the analyzer\n- `_decibels`: *(NUMBER)* - The max decibel level when the analyzer is directly on top of the origin"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"KISKA_spectrumSignal_2_1\",-100] call KISKA_fnc_spectrum_setSignalDecibels;\n```"
                }
            ],
            "description": "Sets the signal's decibel level.\nNOTE: If you intend to update more than one property of a signal, use\n `KISKA_fnc_spectrum_updateSignal` as it is more efficient."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_setSignalDecibels",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_setSignalDistance.sqf",
            "syntaxes": [
                {
                    "outline": "[_id, _maxDistance, _global] call `KISKA_fnc_spectrum_setSignalDistance`",
                    "parameters": [
                        {
                            "name": "_id",
                            "description": ": *(STRING)* - The id of the signal to update"
                        },
                        {
                            "name": "_maxDistance",
                            "description": ": *(NUMBER)* - The maximum distance the signal can be seen on the analyzer"
                        },
                        {
                            "name": "_global",
                            "description": ": *(BOOL)* - `true` to broadcast the change to all machines including JIP (default: `true`)"
                        }
                    ],
                    "returns": "*(HASHMAP)* - Signal's updated property map:\n\n- `_frequency`: *(NUMBER)* - The frequency of the signal in MHz\n- `_origin`: *(PositionASL[])* - The position of the signal\n- `_maxDistance`: *(NUMBER)* - The maximum distance the signal can be seen on the analyzer\n- `_decibels`: *(NUMBER)* - The max decibel level when the analyzer is directly on top of the origin"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"KISKA_spectrumSignal_2_1\",1000] call KISKA_fnc_spectrum_setSignalDistance;\n```"
                }
            ],
            "description": "Sets the signal's distance that it can be heard from.\nNOTE: If you intend to update more than one property of a signal, use\n `KISKA_fnc_spectrum_updateSignal` as it is more efficient."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_setSignalDistance",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_setSignalFrequency.sqf",
            "syntaxes": [
                {
                    "outline": "[_id, _frequency, _global] call `KISKA_fnc_spectrum_setSignalFrequency`",
                    "parameters": [
                        {
                            "name": "_id",
                            "description": ": *(STRING)* - The id of the signal to update"
                        },
                        {
                            "name": "_frequency",
                            "description": ": *(NUMBER)* - The frequency of the signal in MHz"
                        },
                        {
                            "name": "_global",
                            "description": ": *(BOOL)* - `true` to broadcast the change to all machines including JIP (default: `true`)"
                        }
                    ],
                    "returns": "*(HASHMAP)* - Signal's updated property map:\n\n- `_frequency`: *(NUMBER)* - The frequency of the signal in MHz\n- `_origin`: *(PositionASL[])* - The position of the signal\n- `_maxDistance`: *(NUMBER)* - The maximum distance the signal can be seen on the analyzer\n- `_decibels`: *(NUMBER)* - The max decibel level when the analyzer is directly on top of the origin"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"KISKA_spectrumSignal_2_1\",100] call KISKA_fnc_spectrum_setSignalFrequency;\n```"
                }
            ],
            "description": "Sets the signal's frequency.\nNOTE: If you intend to update more than one property of a signal, use\n `KISKA_fnc_spectrum_updateSignal` as it is more efficient."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_setSignalFrequency",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_setSignalPosition.sqf",
            "syntaxes": [
                {
                    "outline": "[_id, _origin, _global] call `KISKA_fnc_spectrum_setSignalPosition`",
                    "parameters": [
                        {
                            "name": "_id",
                            "description": ": *(STRING)* - The id of the signal to update"
                        },
                        {
                            "name": "_origin",
                            "description": ": *(OBJECT or PositionASL[])* - The position of the signal"
                        },
                        {
                            "name": "_global",
                            "description": ": *(BOOL)* - `true` to broadcast the change to all machines including JIP (default: `true`)"
                        }
                    ],
                    "returns": "*(HASHMAP)* - Signal's updated property map:\n\n- `_frequency`: *(NUMBER)* - The frequency of the signal in MHz\n- `_origin`: *(PositionASL[])* - The position of the signal\n- `_maxDistance`: *(NUMBER)* - The maximum distance the signal can be seen on the analyzer\n- `_decibels`: *(NUMBER)* - The max decibel level when the analyzer is directly on top of the origin"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"KISKA_spectrumSignal_2_1\",myOrigin] call KISKA_fnc_spectrum_setSignalPosition;\n```"
                }
            ],
            "description": "Sets the signal's origin position.\nNOTE: If you intend to update more than one property of a signal, use\n `KISKA_fnc_spectrum_updateSignal` as it is more efficient."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_setSignalPosition",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_setTransmitting.sqf",
            "syntaxes": [
                {
                    "outline": "[_isTransmitting] call `KISKA_fnc_spectrum_setTransmitting`",
                    "parameters": [
                        {
                            "name": "_isTransmitting",
                            "description": ": *(BOOL)* - `true` to set the spectrum device as being in transmit mode"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[true] call KISKA_fnc_spectrum_setTransmitting;\n```"
                }
            ],
            "description": "Adjusts whether or not the spectrum device is in transmit mode.\nThis shows as a green tint to the player's selection area with the full spectrumdevice ui open, and as a wifi esque signal when merely holding the spectrum device."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_setTransmitting",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_signalExists.sqf",
            "syntaxes": [
                {
                    "outline": "[_id] call `KISKA_fnc_spectrum_signalExists`",
                    "parameters": [
                        {
                            "name": "_id",
                            "description": ": *(STRING)* - The id of the signal to check"
                        }
                    ],
                    "returns": "*(BOOL)* - `true` if the signal exists on the local machine, `false` if not"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _signalExists = [\"KISKA_spectrumSignal_2_1\"] call KISKA_fnc_spectrum_signalExists\n```"
                }
            ],
            "description": "Checks if a given spectrum signal exists on the local machine."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_signalExists",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_startSignalLoop.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_spectrum_startSignalLoop`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_spectrum_startSignalLoop;\n```"
                }
            ],
            "description": "Handles starting a (sort of infinite) loop that will update a player'sspectrum device readings."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_startSignalLoop",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Spectrum Device/fn_spectrum_updateSignal.sqf",
            "syntaxes": [
                {
                    "outline": "[_signalProperties, _global] call `KISKA_fnc_spectrum_updateSignal`",
                    "parameters": [
                        {
                            "name": "_signalProperties",
                            "description": ": *(ARRAY)* - The all the properites of the signal\n\n    `_signalProperties` Layout:\n    - 0: _id *(STRING)* - The id of the signal to update\n    - 1: _frequency *(NUMBER)* - The frequency of the signal in MHz\n    - 2: _origin *(OBJECT or PositionASL[])* - The position of the signal\n    - 3: _decibels *(NUMBER)* - The base signal decibel level when when near the origin\n    - 4: _maxDistance *(NUMBER)* - The max distance that the signal can be seen on the spectrum analyzer"
                        },
                        {
                            "name": "_global",
                            "description": ": *(BOOL)* - `true` to broadcast the changes to all machines including JIP"
                        }
                    ],
                    "returns": "*(HASHMAP)* - Signal's updated property map:\n\n- `_frequency`: *(NUMBER)* - The frequency of the signal in MHz\n- `_origin`: *(PositionASL[])* - The position of the signal\n- `_maxDistance`: *(NUMBER)* - The maximum distance the signal can be seen on the analyzer\n- `_decibels`: *(NUMBER)* - The max decibel level when the analyzer is directly on top of the origin"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// should use KISKA_fnc_spectrum_updateSignal for snyched updates\n// but if you only want a subset of machines:\n[\n    [\n        \"KISKA_spectrumSignal_2_1\",\n        100,\n        [0,0,0],\n        100\n    ],\n    false\n] remoteExecCall [\n    \"KISKA_fnc_spectrum_updateSignal\",\n    [3,4]\n];\n```"
                },
                {
                    "text": "```sqf\n// broadcast to all machines by default\n[\n    [\n        \"KISKA_spectrumSignal_2_1\",\n        100,\n        [0,0,0],\n        100\n    ]\n] call KISKA_fnc_spectrum_updateSignal;\n```"
                }
            ],
            "description": "Updates a signal's base properties for the local machine or creates it if itdid not exist prior. It is not recommended to directly create a signal with thisfunction. Rather use `KISKA_fnc_spectrum_addSignal`.\nWARNING, this function updats ALL base properties. Meaning if you intend toa single property, use the corresponding setter function. For example, to updatethe origin position only and not every signal property, use \n `KISKA_fnc_spectrum_setSignalPosition`."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_updateSignal",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_SpeechRecognition/SQF Functions/fn_SR_addGrammarXml.sqf",
            "syntaxes": [
                {
                    "outline": "[_name, _xml] call `KISKA_fnc_SR_addGrammarXml`",
                    "parameters": [
                        {
                            "name": "_name",
                            "description": "*(STRING)* - The name of the grammar to add"
                        },
                        {
                            "name": "_xml",
                            "description": "*(STRING)* - The xml in string format"
                        }
                    ],
                    "returns": "*(BOOL)* - true if will be added, false if cannot be added"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"name\",loadFile \"myXmlFile.xml\"] call KISKA_fnc_SR_addGrammarXml;\n```"
                }
            ],
            "description": "Adds an xml grammar file to the speech recognizer."
        },
        "configuration": {
            "label": "KISKA_fnc_SR_addGrammarXml",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_SpeechRecognition/SQF Functions/fn_SR_callExtension.sqf",
            "syntaxes": [
                {
                    "outline": "[_functionToRun, _args] call `KISKA_fnc_SR_callExtension`",
                    "parameters": [
                        {
                            "name": "_functionToRun",
                            "description": "*(STRING)* - The name of the function to run"
                        },
                        {
                            "name": "_args",
                            "description": "*(ARRAY)* - Any arguments to pass to the extension"
                        }
                    ],
                    "returns": "*(STRING)* - Whatever the extension returns"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _return = [\"kiska_ext_sr_startrecording\"] call KISKA_fnc_SR_callExtension;\n```"
                },
                {
                    "text": "```sqf\nprivate _return = [\n    \"kiska_ext_sr_addgrammarxml\",\n    [\"my grammar\",\"...gramarxml\"]\n] call KISKA_fnc_SR_callExtension;\n```"
                }
            ],
            "description": "Calls to KISKA_speechRecognition(_x64).dll extension to run a function withinit."
        },
        "configuration": {
            "label": "KISKA_fnc_SR_callExtension",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_SpeechRecognition/SQF Functions/fn_SR_startRecording.sqf",
            "syntaxes": [
                {
                    "outline": "[_timelineId] call `KISKA_fnc_SR_startRecording`",
                    "parameters": [
                        {
                            "name": "_timelineId",
                            "description": "*(NUMBER)* - The id of the timeline to stop"
                        }
                    ],
                    "returns": "*(BOOL)* - true if recording started, false if recording is currently happening"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _started = call KISKA_fnc_SR_startRecording;\n```"
                }
            ],
            "description": "Starts KISKA Speech recognition's extension's listening to the the user'smicrophone to complete a speech recognition event."
        },
        "configuration": {
            "label": "KISKA_fnc_SR_startRecording",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_SpeechRecognition/SQF Functions/fn_SR_stopRecording.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_SR_stopRecording`",
                    "parameters": [],
                    "returns": "*(BOOL)* - true if a recording was stopped, false if recording was not happening when called"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _stopped = call KISKA_fnc_SR_stopRecording;\n```"
                }
            ],
            "description": "Manually stops KISKA's Speech Recognition extension from listening to the user'smicrophone.\nNOTE: Every complete recognition of a phrase after beginning a recording will automatically stop the extension from listening. The purpose of this function is to manually tell the extension you want to stop recording during the act of saying a phrase"
        },
        "configuration": {
            "label": "KISKA_fnc_SR_stopRecording",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_stalk.sqf",
            "syntaxes": [
                {
                    "outline": "[_stalkerGroup, _stalked, _refreshInterval, _postStalking, _conditionToEndStalking] call `KISKA_fnc_stalk`",
                    "parameters": [
                        {
                            "name": "_stalkerGroup",
                            "description": "*(GROUP or OBJECT)* - The group to do the stalking"
                        },
                        {
                            "name": "_stalked",
                            "description": "*(GROUP or OBJECT)* - The group or unit to be stalked, if group is used, the leader will be stalked until every unit in the group is dead"
                        },
                        {
                            "name": "_refreshInterval",
                            "description": "*(NUMBER)* - How often the _stalkerGroup will have their waypointupdated with the position of the _stalkedGroup, and how often to check the _conditionToEndStalking"
                        },
                        {
                            "name": "_postStalking",
                            "description": "*(STRING, ARRAY, or CODE)* - Code that after stalking is completewill be executed. (See KISKA_fnc_callBack _callBackFunction parameter)"
                        },
                        {
                            "name": "_conditionToEndStalking",
                            "description": "*(STRING, ARRAY, or CODE)* - Code that (if returns true)can end the stalking. (See KISKA_fnc_callBack _callBackFunction parameter).The stalking will automatically end if all units in one or both groups endup dead."
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    someGroup,\n    group player,\n    15,\n    {hint str _this},\n    {false}\n] spawn KISKA_fnc_stalk\n```"
                }
            ],
            "description": "Rewrite of BIS_fnc_stalk for optimizations and features.One provided group will continually be provided waypoints to another group'spositions providing a \"stalking\" affect."
        },
        "configuration": {
            "label": "KISKA_fnc_stalk",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_staticLine.sqf",
            "syntaxes": [
                {
                    "outline": "[_aircraft, _dropArray, _invincibleOnDrop] call `KISKA_fnc_staticLine`",
                    "parameters": [
                        {
                            "name": "_aircraft",
                            "description": "*(OBJECT)* - The aircraft to drop units from"
                        },
                        {
                            "name": "_dropArray",
                            "description": "*(ARRAY, GROUP, OBJECT)* - Units to drop. If array, can be groups and/or objects (example 2)"
                        },
                        {
                            "name": "_invincibleOnDrop",
                            "description": "*(BOOL)* - Should the units be invincible while dropping?"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[plane,group] spawn KISKA_fnc_staticLine;\n```"
                },
                {
                    "text": "```sqf\n[plane,[group1,unit2]] spawn KISKA_fnc_staticLine;\n```"
                }
            ],
            "description": "Ejects units from vehicle and deploys chutes, will select CUP T10 chute if available.\nCAUTION:All units from a group THAT ARE IN THE SAME AIRCRAFT should be droppedwith the same function call. Not doing so can see odd behaviour from the aircraft.\nThis is tied to KISKA_fnc_staticLine_eject and the use of the leaveVehiclecommand. If there are units from the same group still in the aircraft when it isexecuted, the aircraft will ignore all commands and attempt to pickup those unitsthat were dropped."
        },
        "configuration": {
            "label": "KISKA_fnc_staticLine",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_staticLine_eject.sqf",
            "syntaxes": [
                {
                    "outline": "[_aircraft, _unit, _chuteType, _index, _invincibleOnDrop] call `KISKA_fnc_staticLine`",
                    "parameters": [
                        {
                            "name": "_aircraft",
                            "description": "*(OBJECT)* - The aircraft dropping off the unit"
                        },
                        {
                            "name": "_unit",
                            "description": "*(OBJECT)* - The unit to parachute"
                        },
                        {
                            "name": "_chuteType",
                            "description": "*(STRING)* - Class name of the chute"
                        },
                        {
                            "name": "_index",
                            "description": "*(NUMBER)* - index in drop order"
                        },
                        {
                            "name": "_invincibleOnDrop",
                            "description": "*(BOOL)* - Whether or not the unit is invincible on drop"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [],
            "description": "Ejects the unit from their airecraft andUsed to reduce network messages."
        },
        "configuration": {
            "label": "KISKA_fnc_staticLine",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Sound/fn_stopBattleSound.sqf",
            "syntaxes": [
                {
                    "outline": "[_chatterId] call `KISKA_fnc_stopBattleSound`",
                    "parameters": [
                        {
                            "name": "_chatterId",
                            "description": "*(OBJECT)* - Where the sound is coming from"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[0] call KISKA_fnc_stopBattleSound;\n```"
                }
            ],
            "description": "Stops battle sounds playing for the given id."
        },
        "configuration": {
            "label": "KISKA_fnc_stopBattleSound",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Music/fn_stopMusic.sqf",
            "syntaxes": [
                {
                    "outline": "[_fadeTime] spawn `KISKA_fnc_stopMusic`",
                    "parameters": [
                        {
                            "name": "_fadeTime",
                            "description": "*(NUMBER)* - How long to fade out"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[] spawn KISKA_fnc_stopMusic;\n```"
                }
            ],
            "description": "Stops the currently playing music with a fade if desired."
        },
        "configuration": {
            "label": "KISKA_fnc_stopMusic",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Sound/fn_stopRadioChatter.sqf",
            "syntaxes": [
                {
                    "outline": "[_chatterId] call `KISKA_fnc_stopRadioChatter`",
                    "parameters": [
                        {
                            "name": "_chatterId",
                            "description": "*(OBJECT)* - Where the sound is coming from"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[0] call KISKA_fnc_radioChatter;\n```"
                }
            ],
            "description": "Stops radio chatter playing for the given id."
        },
        "configuration": {
            "label": "KISKA_fnc_stopRadioChatter",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Sound/fn_stopRandom3dSoundLoop.sqf",
            "syntaxes": [
                {
                    "outline": "[_id] call `KISKA_fnc_stopRandom3dSoundLoop`",
                    "parameters": [
                        {
                            "name": "_id",
                            "description": "*(NUMBER)* - The id returned from KISKA_fnc_playRandom3dSoundLoop"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[0] call KISKA_fnc_stopRandom3dSoundLoop;\n```"
                }
            ],
            "description": "Stops a 3d sound loop created with KISKA_fnc_playRandom3dSoundLoop;"
        },
        "configuration": {
            "label": "KISKA_fnc_stopRandom3dSoundLoop",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_str.sqf",
            "syntaxes": [
                {
                    "outline": "[_value] call `KISKA_fnc_str`",
                    "parameters": [
                        {
                            "name": "_value",
                            "description": "*(ANY)* - The value to convert to a string"
                        }
                    ],
                    "returns": "*(STRING)* - The value as a string"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n_asString = [_someValue] call KISKA_fnc_str;\n```"
                }
            ],
            "description": "Given that str command produces triple quoted strings if used on a string\n (which can be incompatible with other commands) this function simply formatsthem as \"'string'\" instead, and all other types as normal with str."
        },
        "configuration": {
            "label": "KISKA_fnc_str",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/fn_supplyDrop.sqf",
            "syntaxes": [
                {
                    "outline": "[_classNames, _altittude, _dropPosition, _stopAdjustingHeight, _chuteVelocityFreq, _stage_1_height, _stage_1_velocityDiff, _stage_2_velocityDiff] call `KISKA_fnc_supplyDrop`",
                    "parameters": [
                        {
                            "name": "_classNames",
                            "description": "*(ARRAY)* - Classnames of boxes you want dropped. Also determines the number of crates"
                        },
                        {
                            "name": "_altittude",
                            "description": "*(NUMBER)* - Start height of drop"
                        },
                        {
                            "name": "_dropPosition",
                            "description": "*(OBJECT, GROUP, ARRAY, LOCATION, TASK)* - Position you want the drop to be near\nOPTIONAL:"
                        },
                        {
                            "name": "_stopAdjustingHeight",
                            "description": "*(NUMBER)* - The height (ATL) at which the velocity of the crates should top being managed"
                        },
                        {
                            "name": "_chuteVelocityFreq",
                            "description": "*(NUMBER)* - The frequency in seconds at which the velocity of the crates should be managed"
                        },
                        {
                            "name": "_stage_1_height",
                            "description": "*(NUMBER)* - The height above which the _stage_1_velocityDiff is used to manage the downward velocity of the crates"
                        },
                        {
                            "name": "_stage_1_velocityDiff",
                            "description": "*(NUMBER)* - The downward velocity of the crates above _stage_1_height"
                        },
                        {
                            "name": "_stage_2_velocityDiff",
                            "description": "*(NUMBER)* - The downward velocity of the crates below _stage_1_height"
                        }
                    ],
                    "returns": "*(ARRAY)* - The containers dropped"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[[\"className1\",\"className2\"], 500, player] call KISKA_fnc_supplyDrop;\n```"
                }
            ],
            "description": "Spawns a supply drop near the requested position. Crates will parachute in."
        },
        "configuration": {
            "label": "KISKA_fnc_supplyDrop",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/fn_supplyDrop_aircraft.sqf",
            "syntaxes": [
                {
                    "outline": "[_dropPosition, _crates, _deleteCargo, _addArsenal, _flyinHeight, _flyDirection, _flyInRadius, _lifeTime, _side] call `KISKA_fnc_supplyDrop_aircraft`",
                    "parameters": [
                        {
                            "name": "_dropPosition",
                            "description": ": *(ARRAY or OBJECT)* - The position (area) to drop the arsenal1: _vehicleClass : *(STRING)* - The class of the vehicle to drop the arsenal"
                        },
                        {
                            "name": "_crates",
                            "description": ": *(ARRAY)* - An array of strings that are the classnames of the crates to drop"
                        },
                        {
                            "name": "_deleteCargo",
                            "description": ": *(BOOL)* - Delete all the default cargo inside the crates"
                        },
                        {
                            "name": "_addArsenal",
                            "description": ": *(BOOL)* - add an arsenal to all the crates"
                        },
                        {
                            "name": "_flyinHeight",
                            "description": ": *(NUMBER)* - The flyInHeight of the drop vehicle"
                        },
                        {
                            "name": "_flyDirection",
                            "description": ": *(NUMBER)* - The compass bearing for the aircraft to apporach from (if < 0, it's random)"
                        },
                        {
                            "name": "_flyInRadius",
                            "description": ": *(NUMBER)* - How far out the drop vehicle will spawn and then fly in"
                        },
                        {
                            "name": "_lifeTime",
                            "description": ": *(NUMBER)* - How long until the arsenal is deleted"
                        },
                        {
                            "name": "_side",
                            "description": ": *(SIDE)* - The side of the drop vehicle"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[position player] call KISKA_fnc_supplyDrop_aircraft;\n```"
                }
            ],
            "description": "Spawns in an aircraft that flies over a DZ to drop off supplies."
        },
        "configuration": {
            "label": "KISKA_fnc_supplyDrop_aircraft",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_SupportManager/Functions/fn_supportManager_addDiaryEntry.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_supportManager_addDiaryEntry`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nPOST-INIT function\n```"
                }
            ],
            "description": "Creates a diary entry in the map for the player to open the support Manager"
        },
        "configuration": {
            "label": "KISKA_fnc_supportManager_addDiaryEntry",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_SupportManager/Functions/fn_supportManager_addToPool.sqf",
            "syntaxes": [
                {
                    "outline": "[_entryToAdd, _bypassChecks] call `KISKA_fnc_supportManager_addToPool`",
                    "parameters": [
                        {
                            "name": "_entryToAdd",
                            "description": "*(STRING or ARRAY)* - The support class or [support class,uses left]"
                        },
                        {
                            "name": "_bypassChecks",
                            "description": "*(BOOL)* - Decides whether or not to perform checks on _entryToAdd for errors"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"someClass\"] call KISKA_fnc_supportManager_addToPool;\n```"
                }
            ],
            "description": "Adds an entry into the local support manager pool."
        },
        "configuration": {
            "label": "KISKA_fnc_supportManager_addToPool",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_SupportManager/Functions/fn_supportManager_addToPool_global.sqf",
            "syntaxes": [
                {
                    "outline": "[_entryToAdd] call `KISKA_fnc_supportManager_addToPool_global`",
                    "parameters": [
                        {
                            "name": "_entryToAdd",
                            "description": "*(STRING or ARRAY)* - The support class or [support class,uses left]"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"someClass\"] call KISKA_fnc_supportManager_addToPool_global;\n```"
                }
            ],
            "description": "Adds an entry into the global support manager pool.\nTHIS FUNCTION HAS A GLOBAL EFFECT"
        },
        "configuration": {
            "label": "KISKA_fnc_supportManager_addToPool_global",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_SupportManager/Functions/fn_supportManager_onLoad.sqf",
            "syntaxes": [
                {
                    "outline": "[_display] call `KISKA_fnc_supportManager_onLoad`",
                    "parameters": [
                        {
                            "name": "_display",
                            "description": "*(DISPLAY)* - The loaded display"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// called from config\n[_this select 0] call KISKA_fnc_supportManager_onLoad;\n```"
                }
            ],
            "description": "Sets up uiNamespace globals for and intializes the Support Manager GUI."
        },
        "configuration": {
            "label": "KISKA_fnc_supportManager_onLoad",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_SupportManager/Functions/fn_supportManager_openDialog.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_supportManager_openDialog`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_supportManager_openDialog;\n```"
                }
            ],
            "description": "Opens KISKA Support Manager dialog."
        },
        "configuration": {
            "label": "KISKA_fnc_supportManager_openDialog",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_SupportManager/Functions/fn_supportManager_removeFromPool.sqf",
            "syntaxes": [
                {
                    "outline": "[_index] call `KISKA_fnc_supportManager_removeFromPool`",
                    "parameters": [
                        {
                            "name": "_index",
                            "description": "*(NUMBER)* - The selected index"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[0] call KISKA_fnc_supportManager_removeFromPool;\n```"
                }
            ],
            "description": "Removes the provided index from the pool."
        },
        "configuration": {
            "label": "KISKA_fnc_supportManager_removeFromPool",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_SupportManager/Functions/fn_supportManager_removeFromPool_global.sqf",
            "syntaxes": [
                {
                    "outline": "[_index] call `KISKA_fnc_supportManager_removeFromPool_global`",
                    "parameters": [
                        {
                            "name": "_index",
                            "description": "*(NUMBER)* - The selected index"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[0] call KISKA_fnc_supportManager_removeFromPool_global;\n```"
                }
            ],
            "description": "Removes the provided index from the support pool with GLOBAl EFFECT."
        },
        "configuration": {
            "label": "KISKA_fnc_supportManager_removeFromPool_global",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_SupportManager/Functions/fn_supportManager_store_buttonClickEvent.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_supportManager_store_buttonClickEvent`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_supportManager_store_buttonClickEvent;\n```"
                }
            ],
            "description": "Activates when the take button is pressed and gives player the support."
        },
        "configuration": {
            "label": "KISKA_fnc_supportManager_store_buttonClickEvent",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_SupportManager/Functions/fn_supportManager_take_buttonClickEvent.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_supportManager_take_buttonClickEvent`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_supportManager_take_buttonClickEvent;\n```"
                }
            ],
            "description": "Activates when the take button is pressed and gives player the support."
        },
        "configuration": {
            "label": "KISKA_fnc_supportManager_take_buttonClickEvent",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_SupportManager/Functions/fn_supportManager_updateCurrentList.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_supportManager_updateCurrentList`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_supportManager_updateCurrentList;\n```"
                }
            ],
            "description": "Acts as an event that will update the current supports list of a player inthe GUI."
        },
        "configuration": {
            "label": "KISKA_fnc_supportManager_updateCurrentList",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_SupportManager/Functions/fn_supportManager_updatePoolList.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_supportManager_updatePoolList`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_supportManager_updatePoolList;\n```"
                }
            ],
            "description": "Acts as an event that will update the available supports pool list inthe Support Manager GUI."
        },
        "configuration": {
            "label": "KISKA_fnc_supportManager_updatePoolList",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_supportNotification.sqf",
            "syntaxes": [
                {
                    "outline": "[_supportTypeId] call `KISKA_fnc_supportNotification`",
                    "parameters": [
                        {
                            "name": "_supportTypeId",
                            "description": "*(NUMBER)* - The support type that was called"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[0] call KISKA_fnc_supportNotification;\n```"
                }
            ],
            "description": "Gives the player a sound or text notification that they called in a supportfrom the KISKA systems. Just used for feedback to know a call was placed.\nPlayers can adjust the notifcation settings in the CBA addon menu."
        },
        "configuration": {
            "label": "KISKA_fnc_supportNotification",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_supportRadio.sqf",
            "syntaxes": [
                {
                    "outline": "[_messageType, _caller, _targets] call `KISKA_fnc_supportRadio`",
                    "parameters": [
                        {
                            "name": "_messageType",
                            "description": "*(STRING)* - The type of radio message to send"
                        },
                        {
                            "name": "_caller",
                            "description": "*(OBJECT)* - The person sending the call (default is local player)"
                        },
                        {
                            "name": "_targets",
                            "description": "*(NUMBER, OBJECT, STRING, GROUP, SIDE, ARRAY)* - The remoteExec targets for the radio call"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"artillery\"] call KISKA_fnc_supportRadio;\n```"
                }
            ],
            "description": "Decides what radio message to play to provided targets."
        },
        "configuration": {
            "label": "KISKA_fnc_supportRadio",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Timeline/fn_timeline_executeEvent.sqf",
            "syntaxes": [
                {
                    "outline": "[_timelineEvents, _timelineId, _timelineMap, _previousReturn] call `KISKA_fnc_timeline_executeEvent`",
                    "parameters": [
                        {
                            "name": "_timelineEvents",
                            "description": "*(ARRAY)* - An array of timeline events that will happen. See KISKA_fnc_timeline_start for formats"
                        },
                        {
                            "name": "_timelineId",
                            "description": "*(STRING)* - The id of the timeline to stop"
                        },
                        {
                            "name": "_timelineMap",
                            "description": "*(HASHMAP)* - The Individual map defined for a specific timeline of the given ID"
                        },
                        {
                            "name": "_previousReturn",
                            "description": "*(ANY)* - The returned value from the previous events function"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_timelineEvents,\"KISKA_timeline_1\"] call KISKA_fnc_timeline_executeEvent\n```"
                }
            ],
            "description": "Executes a recursive chain timeline events. This should not be executed on itsown but begins from KISKA_fnc_timeline_start."
        },
        "configuration": {
            "label": "KISKA_fnc_timeline_executeEvent",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Timeline/fn_timeline_getInfoMap.sqf",
            "syntaxes": [
                {
                    "outline": "[_timelineId] call `KISKA_fnc_timeline_getInfoMap`",
                    "parameters": [
                        {
                            "name": "_timelineId",
                            "description": "*(STRING)* - The id of the timeline to get"
                        }
                    ],
                    "returns": "*(HASHMAP)* - A hashmap containing information for the timeline events"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _timelineMapForId = [\"KISKA_timeline_1\"] call KISKA_fnc_timeline_getInfoMap;\n```"
                }
            ],
            "description": "The Individual map defined for a specific timeline of the given ID. This isthe hashmap available in each timeline's event's code."
        },
        "configuration": {
            "label": "KISKA_fnc_timeline_getInfoMap",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Timeline/fn_timeline_getIsRunningMap.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_timeline_getIsRunningMap`",
                    "parameters": [],
                    "returns": "*(HASHMAP)* - The \"is running\" map"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _isRunningMap = call KISKA_fnc_timeline_getIsRunningMap;\n```"
                }
            ],
            "description": "Returns the map that keeps track of whether or not a given KISKA timeline iscurrently running."
        },
        "configuration": {
            "label": "KISKA_fnc_timeline_getIsRunningMap",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Timeline/fn_timeline_getMainMap.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_timeline_getMainMap`",
                    "parameters": [],
                    "returns": "*(HASHMAP)* - The overall timeline map to get info on certain timelines"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _mainTimelineMap = call KISKA_fnc_timeline_getMainMap;\nprivate _timelineId = \"KISKA_timeline_1\";\nprivate _timelineValues = _mainTimelineMap get _timelineId;\n_timelineValues params [\"_timelineEvents\",\"_timelineMap\",\"_onTimelineStopped\"];\n```"
                }
            ],
            "description": "The map that links a given timeline id to its info map. This is an internal functionthat you (likely) don't need to use except for altering timelines that have already started.\n \nSee KISKA_fnc_timeline_getInfoMap to retrieve an info map for a given timeline."
        },
        "configuration": {
            "label": "KISKA_fnc_timeline_getMainMap",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Timeline/fn_timeline_isRunning.sqf",
            "syntaxes": [
                {
                    "outline": "[_timelineId, _checkForFullCompletion] call `KISKA_fnc_timeline_isRunning`",
                    "parameters": [
                        {
                            "name": "_timelineId",
                            "description": "*(STRING)* - The id of the timeline to check"
                        },
                        {
                            "name": "_checkForFullCompletion",
                            "description": "*(BOOL)* - Check if the timeline's onComplete function has completed and the timeline is fully done."
                        }
                    ],
                    "returns": "*(BOOL)* - The state of the timeline"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _isRunning = [\"KISKA_timeline_1\",false] call KISKA_fnc_timeline_isRunning;\n```"
                },
                {
                    "text": "```sqf\nprivate _timelineIsNotComplete = [\"KISKA_timeline_1\",true] call KISKA_fnc_timeline_isRunning;\n```"
                }
            ],
            "description": "Checks if a timeline has either fully been complete (_checkForFullCompletion = true) or is simply qued for end at the start of its next event (_checkForFullCompletion = false)."
        },
        "configuration": {
            "label": "KISKA_fnc_timeline_isRunning",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Timeline/fn_timeline_setIsRunning.sqf",
            "syntaxes": [
                {
                    "outline": "[_timelineId, _isRunning] call `KISKA_fnc_timeline_setIsRunning`",
                    "parameters": [
                        {
                            "name": "_timelineId",
                            "description": "*(STRING)* - The timeline's id"
                        },
                        {
                            "name": "_isRunning",
                            "description": "*(BOOL)* - `true` to set as running, `false` to set as NOT"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// internal function that should not be directly called\n```"
                }
            ],
            "description": "Sets whether a given timeline is considered to be running."
        },
        "configuration": {
            "label": "KISKA_fnc_timeline_setIsRunning",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Timeline/fn_timeline_start.sqf",
            "syntaxes": [
                {
                    "outline": "[_timeline, _onTimelineStopped] call `KISKA_fnc_timeline_start`",
                    "parameters": [
                        {
                            "name": "_timeline",
                            "description": "*(ARRAY)* - An array of timeline events that will happen. See description above for formats"
                        },
                        {
                            "name": "_onTimelineStopped",
                            "description": "*(CODE, STRING, or ARRAY)* - (see KISKA_fnc_callBack),code that will be executed once a timeline is stopped. \n \n    Parameters:\n    - 0: *(ARRAY)* - The timeline array in the state when the stoppage actually happens.\n    - 1: *(HASHMAP)* - The Individual map defined for a specific timeline of the given ID"
                        }
                    ],
                    "returns": "*(STRING)* - The id of the new timeline"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nprivate _timeline = [\n    [\n        {\n            hint \"executed event #1\";\n            time + 3 // return/send to next and current wait condition\n        },\n        {\n            params [\"\",\"\",\"_eventReturn\"];\n            private _timeAfterWait = _eventReturn;\n            time >= _timeAfterWait // wait until current time is more than time + 3\n        },\n    ],\n    [\n        {hint \"executed event #2 ~3 seconds after event 1 completed\"}, 2\n    ]\n];\nprivate _timelineId = [_timeline,{hint \"timeline end\"}] call KISKA_fnc_timeline_start;\n```"
                }
            ],
            "description": "Creates a timeline of events that can happen. Waits/executes in an unscheduledenvironment. \n \nThere is a non-trivial amount of overhead to this, however, sodo not use with the intention of needing precise events to happen but rather tonot clog the scheduler or use a decent interface with smaller units of code.\n\n\n```sqf\n// A timeline is made up of events:\n[\n    [], // event 1\n    [] // event 2\n]\n```\n\n\n\n```sqf\n// Each event is made up of code to execute when the event comes up in the timeline,\n/// and what to wait for when executing the NEXT event in the timeline AFTER the \n/// current event completes:\n[\n    [\n        {\n            hint \"executed event #1\"\n        },\n        3 // wait 3 seconds AFTER current event to execute event 2\n    ],\n    [\n        {\n            hint \"executed event #2 3 seconds after event 1 completed\"\n        },\n        1 // wait 1 second to run _onTimelineStopped code\n    ]\n]\n```\n\n \n\n```sqf\n// Alternativeley, you can also wait for a condition before proceeeding to the next event:\nprivate _endTime = time + 10;\n[\n    [\n        {hint \"executed event #1\"},\n        3 // wait 3 seconds AFTER current event to execute event 1\n    ],\n    [\n        {hint \"executed event #2 3 seconds after event 1 completed\"},\n        [[_endTime],{\n            _thisArgs params [\"_endTime\"];\n            time >= (_endTime) // wait until current time is more than _endTime\n        }],\n        1 // check condition every second\n    ]\n]\n```\n\n\n\n```sqf\n// You can chain timeline events together by returning\n[\n    [\n        {\n            hint \"executed event #1\";\n            time + 3 // return/send to the next event and current wait condition\n        },\n        {\n            params [\"\",\"\",\"\",\"_eventReturn\"];\n            private _timeAfterWait = _eventReturn;\n            time >= _timeAfterWait // wait until current time is more than time + 3\n        },\n    ],\n    [\n        {hint \"executed event #2 ~3 seconds after event 1 completed\"}\n    ]\n]\n```"
        },
        "configuration": {
            "label": "KISKA_fnc_timeline_start",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Timeline/fn_timeline_stop.sqf",
            "syntaxes": [
                {
                    "outline": "[_timelineId, _onTimelineStopped] call `KISKA_fnc_timeline_stop`",
                    "parameters": [
                        {
                            "name": "_timelineId",
                            "description": "*(STRING)* - The id of the timeline to stop"
                        },
                        {
                            "name": "_onTimelineStopped",
                            "description": "*(CODE, STRING, or ARRAY)* - (see KISKA_fnc_callBack),code that will be executed once a timeline is stopped. \n \n    Parameters:\n    - 0: *(ARRAY)* - The timeline array in the state when the stoppage actually happens.\n    - 1: *(HASHMAP)* - The Individual map defined for a specific timeline of the given ID"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"KISKA_timeline_1\"] call KISKA_fnc_timeline_stop;\n```"
                },
                {
                    "text": "```sqf\n[\"KISKA_timeline_1\",{hint str [\"timeline stopped!\",_this]}] call KISKA_fnc_timeline_stop;\n```"
                }
            ],
            "description": "Ques a timeline to end on the next execution of an event in it or at the veryend of the timeline. This will immediately set KISKA_fnc_timeline_isRunning\n (where _isFullyComplete-is-false) to be true."
        },
        "configuration": {
            "label": "KISKA_fnc_timeline_stop",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_TraitManager/Functions/fn_traitManager_addDiaryEntry.sqf",
            "syntaxes": [
                {
                    "outline": "spawn `KISKA_fnc_traitManager_addDiaryEntry`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nPRE-INIT function\n```"
                }
            ],
            "description": "Creates a diary entry in the map for the player to open the trait Manager."
        },
        "configuration": {
            "label": "KISKA_fnc_traitManager_addDiaryEntry",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_TraitManager/Functions/fn_traitManager_addToPool.sqf",
            "syntaxes": [
                {
                    "outline": "[_entryToAdd] call `KISKA_fnc_traitManager_addToPool`",
                    "parameters": [
                        {
                            "name": "_entryToAdd",
                            "description": "*(STRING)* - The trait to add"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"medic\"] call KISKA_fnc_traitManager_addToPool;\n```"
                }
            ],
            "description": "Adds an entry into the local trait manager pool."
        },
        "configuration": {
            "label": "KISKA_fnc_traitManager_addToPool",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_TraitManager/Functions/fn_traitManager_addToPool_global.sqf",
            "syntaxes": [
                {
                    "outline": "[_entryToAdd] call `KISKA_fnc_traitManager_addToPool_global`",
                    "parameters": [
                        {
                            "name": "_entryToAdd",
                            "description": "*(STRING)* - The trait to add"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\"medic\"] call KISKA_fnc_traitManager_addToPool_global;\n```"
                }
            ],
            "description": "Adds an entry into the global trait manager pool."
        },
        "configuration": {
            "label": "KISKA_fnc_traitManager_addToPool_global",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_TraitManager/Functions/fn_traitManager_onLoad.sqf",
            "syntaxes": [
                {
                    "outline": "[_display] call `KISKA_fnc_traitManager_onLoad`",
                    "parameters": [
                        {
                            "name": "_display",
                            "description": "*(DISPLAY)* - The loaded display"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// called from config\n[_this select 0] call KISKA_fnc_traitManager_onLoad;\n```"
                }
            ],
            "description": "Sets up uiNamespace globals for and intializes the Trait Manager GUI."
        },
        "configuration": {
            "label": "KISKA_fnc_traitManager_onLoad",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_TraitManager/Functions/fn_traitManager_onLoad_traitPool.sqf",
            "syntaxes": [
                {
                    "outline": "[_display] spawn `KISKA_fnc_traitManager_onLoad_traitPool`",
                    "parameters": [
                        {
                            "name": "_display",
                            "description": "*(DISPLAY)* - The loaded display of the trait manager"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n// called from config\n[_display] spawn KISKA_fnc_traitManager_onLoad_traitPool;\n```"
                }
            ],
            "description": "Begins the loop that syncs across the network and populates the pool list."
        },
        "configuration": {
            "label": "KISKA_fnc_traitManager_onLoad_traitPool",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_TraitManager/Functions/fn_traitManager_openDialog.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_traitManager_openDialog`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_traitManager_openDialog;\n```"
                }
            ],
            "description": "Opens KISKA Trait Manager dialog."
        },
        "configuration": {
            "label": "KISKA_fnc_traitManager_openDialog",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_TraitManager/Functions/fn_traitManager_removeFromPool.sqf",
            "syntaxes": [
                {
                    "outline": "[_index] call `KISKA_fnc_traitManager_removeFromPool`",
                    "parameters": [
                        {
                            "name": "_index",
                            "description": "*(NUMBER)* - The selected index"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[0] call KISKA_fnc_traitManager_removeFromPool;\n```"
                }
            ],
            "description": "Removes the provided index from the pool."
        },
        "configuration": {
            "label": "KISKA_fnc_traitManager_removeFromPool",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_TraitManager/Functions/fn_traitManager_removeFromPool_global.sqf",
            "syntaxes": [
                {
                    "outline": "[_index] call `KISKA_fnc_traitManager_removeFromPool_global`",
                    "parameters": [
                        {
                            "name": "_index",
                            "description": "*(NUMBER)* - The selected index"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[0] call KISKA_fnc_traitManager_removeFromPool_global;\n```"
                }
            ],
            "description": "Removes the provided index from the trait pool with GLOBAl EFFECT."
        },
        "configuration": {
            "label": "KISKA_fnc_traitManager_removeFromPool_global",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_TraitManager/Functions/fn_traitManager_store_buttonClickEvent.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_traitManager_store_buttonClickEvent`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_traitManager_store_buttonClickEvent;\n```"
                }
            ],
            "description": "Activates when the take button is pressed and gives player the support."
        },
        "configuration": {
            "label": "KISKA_fnc_traitManager_store_buttonClickEvent",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_TraitManager/Functions/fn_traitManager_take_buttonClickEvent.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_traitManager_take_buttonClickEvent`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_traitManager_take_buttonClickEvent;\n```"
                }
            ],
            "description": "Activates when the take button is pressed and gives player the trait"
        },
        "configuration": {
            "label": "KISKA_fnc_traitManager_take_buttonClickEvent",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_TraitManager/Functions/fn_traitManager_updateCurrentList.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_traitManager_updateCurrentList`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_traitManager_updateCurrentList;\n```"
                }
            ],
            "description": "Acts as an event that will update the current trait list of a player inthe GUI."
        },
        "configuration": {
            "label": "KISKA_fnc_traitManager_updateCurrentList",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_TraitManager/Functions/fn_traitManager_updatePoolList.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_traittManager_updatePoolList`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_traitManager_updatePoolList;\n```"
                }
            ],
            "description": "Acts as an event that will update the available traits pool list inthe Trait Manager GUI."
        },
        "configuration": {
            "label": "KISKA_fnc_traittManager_updatePoolList",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/Support Framework/Functions/fn_updateFlareEffects.sqf",
            "syntaxes": [
                {
                    "outline": "[_light, _flare] call `KISKA_fnc_updateFlareEffects`",
                    "parameters": [
                        {
                            "name": "_light",
                            "description": "*(OBJECT)* - The #lightPoint attached to the flare"
                        },
                        {
                            "name": "_flare",
                            "description": "*(OBJECT)* - The flare object"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[_light,_flare] remoteExecCall [\"KISKA_fnc_updateFlareEffects\",0,_flare];\n```"
                }
            ],
            "description": "Due to the local nature of many light commands, this function is usedto sync up the brightness increase of the flares launched in the support function."
        },
        "configuration": {
            "label": "KISKA_fnc_updateFlareEffects",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Rally/fn_updateRallyPointNotification.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_updateRallyPointNotification`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nremoteExec [\"KISKA_fnc_updateRallyPointNotification\",somePlayer];\n```"
                }
            ],
            "description": "Informs the player that their rally point was updated"
        },
        "configuration": {
            "label": "KISKA_fnc_updateRallyPointNotification",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Rally/fn_updateRespawnMarker.sqf",
            "syntaxes": [
                {
                    "outline": "[_caller, _marker, _markerText] call `KISKA_fnc_updateRespawnMarker`",
                    "parameters": [
                        {
                            "name": "_caller",
                            "description": "*(OBJECT)* - The person calling the respawn update action"
                        },
                        {
                            "name": "_marker",
                            "description": "*(MARKER)* - The old marker to delete"
                        },
                        {
                            "name": "_markerText",
                            "description": "*(STRING)* - The text of the new marker"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[player,myMarker,myMarkerText] call KISKA_fnc_updateRespawnMarker;\n```"
                }
            ],
            "description": "Deletes the old respawn marker and makes a new one."
        },
        "configuration": {
            "label": "KISKA_fnc_updateRespawnMarker",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Rally/fn_updateRespawnMarkerQuery.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_updateRespawnMarkerQuery`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_updateRespawnMarkerQuery;\n```"
                }
            ],
            "description": "Acts as a go between for use inside of a string in a diary entry expression.\n(You can't use remoteExecCall with a string inside of double strings)"
        },
        "configuration": {
            "label": "KISKA_fnc_updateRespawnMarkerQuery",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_ViewDistanceLimiter/Functions/fn_VDL_addOpenGuiDiaryEntry.sqf",
            "syntaxes": [
                {
                    "outline": "spawn `KISKA_fnc_VDL_addOpenGuiDiaryEntry`",
                    "parameters": [],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nPRE-INIT function\n```"
                }
            ],
            "description": "Creates a diary entry to open the VDL dialog."
        },
        "configuration": {
            "label": "KISKA_fnc_VDL_addOpenGuiDiaryEntry",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_ViewDistanceLimiter/Functions/fn_VDL_controlsGroup_onLoad.sqf",
            "syntaxes": [
                {
                    "outline": "[_controlsGroup, _varName] call `KISKA_fnc_VDL_controlsGroup_onLoad`",
                    "parameters": [
                        {
                            "name": "_controlsGroup",
                            "description": "*(CONTROL)* - The controls group for the particular setting"
                        },
                        {
                            "name": "_varName",
                            "description": "*(STRING)* - The name of the profileNamespace variable in which thissetting will be saved when changed"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[controlsGroup,\"someName\"] call KISKA_fnc_VDL_controlsGroup_onLoad;\n```"
                }
            ],
            "description": "Acts as the onload event for the KISKA View Distance Limiter Dialog"
        },
        "configuration": {
            "label": "KISKA_fnc_VDL_controlsGroup_onLoad",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_ViewDistanceLimiter/Functions/fn_VDL_onLoad.sqf",
            "syntaxes": [
                {
                    "outline": "[_display] call `KISKA_fnc_VDL_onLoad`",
                    "parameters": [
                        {
                            "name": "_display",
                            "description": "*(DISPLAY)* - The display of the dialog"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[display] call KISKA_fnc_VDL_onLoad;\n```"
                }
            ],
            "description": "Acts as the onload event for the KISKA View Distance Limiter Dialog"
        },
        "configuration": {
            "label": "KISKA_fnc_VDL_onLoad",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_ViewDistanceLimiter/Functions/fn_VDL_openDialog.sqf",
            "syntaxes": [
                {
                    "outline": "call `KISKA_fnc_VDL_openDialog`",
                    "parameters": [],
                    "returns": "BOOL"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\ncall KISKA_fnc_VDL_openDialog;\n```"
                }
            ],
            "description": "Opens the GUI for the VDL system."
        },
        "configuration": {
            "label": "KISKA_fnc_VDL_openDialog",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_vehicleFactory.sqf",
            "syntaxes": [
                {
                    "outline": "[_controlPanel, _spawnPosition, _vehicleTypes, _clearRadius, _onCreateCode] spawn `KISKA_fnc_vehicleFactory`",
                    "parameters": [
                        {
                            "name": "_controlPanel",
                            "description": "*(OBJECT)* - The object to add the action to"
                        },
                        {
                            "name": "_spawnPosition",
                            "description": "*(OBJECT or ARRAY)* - Where to spawn the vehicle (ASL)"
                        },
                        {
                            "name": "_vehicleTypes",
                            "description": "*(ARRAY or STRING)* - The class names of vehicles to create an action for (each will get its own action if in an array)"
                        },
                        {
                            "name": "_clearRadius",
                            "description": "*(NUMBER)* - How far until pad is considered clear of entities"
                        },
                        {
                            "name": "_onCreateCode",
                            "description": "*(CODE)* - Code to run upon vehicle creation. Passed arg is the created vehicle"
                        }
                    ],
                    "returns": "*(BOOL)* - false if not added, true otherwise"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[player,(getPosATL player) vectorAdd [2,2,0],\"B_MRAP_01_F\"] spawn KISKA_fnc_vehicleFactory;\n```"
                }
            ],
            "description": "Add an action to given object that allows the spawn of a vehicle"
        },
        "configuration": {
            "label": "KISKA_fnc_vehicleFactory",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/KISKA_ViewDistanceLimiter/Functions/fn_viewDistanceLimiter.sqf",
            "syntaxes": [
                {
                    "outline": "[_targetFPS, _checkFreq, _minObjectDistance, _maxObjectDistance, _increment, _viewDistance] spawn `KISKA_fnc_viewDistanceLimiter`",
                    "parameters": [
                        {
                            "name": "_targetFPS",
                            "description": "*(NUMBER)* - The desired FPS (lower) limit (KISKA_VDL_fps)"
                        },
                        {
                            "name": "_checkFreq",
                            "description": "*(NUMBER)* - The frequency of checks for FPS (KISKA_VDL_freq)"
                        },
                        {
                            "name": "_minObjectDistance",
                            "description": "*(NUMBER)* - The minimum the objectViewDistance, can be set by (KISKA_VDL_minDist)"
                        },
                        {
                            "name": "_maxObjectDistance",
                            "description": "*(NUMBER)* - The max the objectViewDistance, can be set by (KISKA_VDL_maxDist)"
                        },
                        {
                            "name": "_increment",
                            "description": "*(NUMBER)* - The amount the viewDistance can incriment up or down each cycle (KISKA_VDL_inc)"
                        },
                        {
                            "name": "_viewDistance",
                            "description": "*(NUMBER)* - This is the static overall viewDistance, can be set by (KISKA_VDL_viewDist)This is static because it doesn't affect FPS too much."
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\nEvery 3 seconds, check\n[45,3,500,1700,25,3000] spawn KISKA_fnc_viewDistanceLimiter;\n```"
                }
            ],
            "description": "Starts a looping function for limiting a player's viewDistance.Loop can be stopped by setting mission variable \"KISKA_VDL_run\" to false.All other values have global vars that can be edited while it is in use.\nSee each param for associated global var."
        },
        "configuration": {
            "label": "KISKA_fnc_viewDistanceLimiter",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Supports/fn_virtualArty.sqf",
            "syntaxes": [
                {
                    "outline": "[_target, _ammoType, _radius, _numberOfRounds, _delayBetween, _markPosition] spawn `KISKA_fnc_virtualArty`",
                    "parameters": [
                        {
                            "name": "_target",
                            "description": "*(OBJECT, ARRAY, or STRING(marker))* - The target you want to cluter fire around"
                        },
                        {
                            "name": "_ammoType",
                            "description": "*(STRING)* - The ammo type from cfgAmmo"
                        },
                        {
                            "name": "_radius",
                            "description": "*(NUMER)* - Spread of rounds"
                        },
                        {
                            "name": "_numberOfRounds",
                            "description": "*(NUMER)* - The number of rounds to fire"
                        },
                        {
                            "name": "_delayBetween",
                            "description": "*(NUMER)* - Time between shots"
                        },
                        {
                            "name": "_markPosition",
                            "description": "*(BOOL)* - Marks the target position with smoke and chemlight (delete after 20 seconds)"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[target_1,\"Sh_155mm_AMOS\"] spawn KISKA_fnc_virtualArty;\n```"
                }
            ],
            "description": "Calls for an artillery or mortar strike at a designated position and marks the spot."
        },
        "configuration": {
            "label": "KISKA_fnc_virtualArty",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/AI/fn_vlsFireAt.sqf",
            "syntaxes": [
                {
                    "outline": "[_launcher, _target] call `KISKA_fnc_vlsFireAt`",
                    "parameters": [
                        {
                            "name": "_launcher",
                            "description": "*(OBJECT)* - The VLS launcher to have the missile originate from"
                        },
                        {
                            "name": "_target",
                            "description": "*(OBJECT or ARRAY)* - Target to hit missile with, can also be a position (AGL)"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[VLS_1,target_1] call KISKA_fnc_vlsFireAt;\n```"
                }
            ],
            "description": "Orders VLS to fire at a target. Projectile will follow terrain."
        },
        "configuration": {
            "label": "KISKA_fnc_vlsFireAt",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "documentationLink": "https://github.com/Ansible2/Kiska-Function-Library/blob/master/addons/Kiska_Functions/Utilities/fn_waitUntil.sqf",
            "syntaxes": [
                {
                    "outline": "[_condition, _function, _interval, _parameters, _unscheduled] call `KISKA_fnc_waitUntil`",
                    "parameters": [
                        {
                            "name": "_condition",
                            "description": "*(CODE, STRING, or ARRAY)* - Code that must evaluate as a `BOOL`.If `(_interval <= 0) AND (_unscheduled isEqualTo true)`, this will only accept CODEor `STRING` as an arguement for performance reasons and `_parameters` will be available in `_this`.\n    (See KISKA_fnc_callBack)"
                        },
                        {
                            "name": "_function",
                            "description": "*(CODE, STRING, or ARRAY)* - The code to execute upon condition being reached.\n    (See KISKA_fnc_callBack)"
                        },
                        {
                            "name": "_interval",
                            "description": "*(NUMBER)* - How often to check the condition"
                        },
                        {
                            "name": "_parameters",
                            "description": "*(ARRAY)* - An array of local parameters that can be accessed with _this"
                        },
                        {
                            "name": "_unscheduled",
                            "description": "*(BOOL)* - Run in unscheduled environment"
                        }
                    ],
                    "returns": "NOTHING"
                }
            ],
            "examples": [
                {
                    "text": "```sqf\n[\n    {\n        true\n    },\n    {\n        hint \"wait\";\n    },\n    0.5,\n    [],\n    true\n] call KISKA_fnc_waitUntil;\n```"
                }
            ],
            "description": "Waitunil that allows variable evaluation time instead of frame by frame."
        },
        "configuration": {
            "label": "KISKA_fnc_waitUntil",
            "grammarType": "function"
        }
    }
]