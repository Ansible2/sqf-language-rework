import { SQFItemConfig } from "../sqf.namespace";

export const configs: SQFItemConfig[] = [
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [myVehicle] spawn KISKA_fnc_AAAZone;\n    \n```"
                }
            ],
            "description": "Sets up a zone that when entered by an enemy aircraft, the provided vehicle will engage.\n\nOtherwise, vehicle will stay the same."
        },
        "configuration": {
            "label": "KISKA_fnc_AAAZone",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        PRE-INIT Function\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            _vehicle,\n            (fullCrew [_vehicle,\"cargo\"]) apply {\n                _x select 0\n            }\n        ] call KISKA_fnc_ACE_deployFastRope;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [heli] call KISKA_fnc_ACE_deployRopes;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        //  basic example\n        [\n            _vehicle,\n            _position,\n            (fullCrew [_vehicle,\"cargo\"]) apply {\n                _x select 0\n            },\n            {hint \"fastrope done\"},\n            28,\n            [[0,0,0]]\n        ] call KISKA_fnc_ACE_fastRope;\n    \n```"
                },
                {
                    "text": "```sqf\n        // using code instead to defer the list of units to drop\n        // until the helicopter is over the drop point\n        [\n            _vehicle,\n            _position,\n            {\n                params [\"_vehicle\"];\n\n                (fullCrew [_vehicle,\"cargo\"]) apply {\n                    _x select 0\n                }\n            },\n            {hint \"fastrope done\"},\n            28,\n            [[0,0,0]]\n        ] call KISKA_fnc_ACE_fastRope;\n    \n```"
                }
            ],
            "description": "Sends a vehicle to a given point and fastropes the given units from the helicopter.\n\nPilots should ideally be placed in \"CARELESS\" behaviour when around enemies."
        },
        "configuration": {
            "label": "KISKA_fnc_ACE_fastRope",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            _vehicle,\n            {4} // takes 4 seconds to lower ropes\n        ] call KISKA_fnc_ACE_setOnPrepareFastrope;\n    \n```"
                }
            ],
            "description": "Sets the onprepare function of a specific vehicle when it conducts fastropingwith KISKA_fnc_fastRope (not any other implementation of ACE fastroping).\nBy default, ACE uses a config value (on the vehicle's class) of a string that is the name of the function to call. This function will overwrite that config function or add support for vehicles that do not have an onPrepare function defined.\n\nThe onPrepare function is what happens just prior to the helicopter droppingits ropes. You may want to do something like openning the vehicles doors beforethe units fastrope, for example.\nYour new onPrepare function can return a number that will then be used as thetime it takes for the ropes to be lowered down from the helicopter \n (the default is 4 seconds)."
        },
        "configuration": {
            "label": "KISKA_fnc_ACE_setOnPrepareFastrope",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        POST-INIT Function\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // disable transfer\n        [someGroup,true] call KISKA_fnc_ACEX_setHCTransfer;\n    \n```"
                },
                {
                    "text": "```sqf\n        // enable transfer\n        [someGroup,false] call KISKA_fnc_ACEX_setHCTransfer;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [[arsenal1, arsenal2]] call KISKA_fnc_addArsenal;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _id = [player,\"myClass\"] call KISKA_fnc_addCommMenuItem;\n    \n```"
                }
            ],
            "description": "This is an alias of sorts of Bohemia's BIS_fnc_addCommMenuItem.It is mostly made with the purpose of using default values and specificallypassing a -1 by default to _expressionArguments.\n\nAlso initializes/adds entries to the KISKA_playersSupportMap which is used forkeeping track of the number of uses left on a support if they are passed betweenthe Support Manager."
        },
        "configuration": {
            "label": "KISKA_fnc_addCommMenuItem",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _id = [aUnit,{hint _this}] call KISKA_fnc_addEntityKilledEventHandler;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [[\"test title\",\"test text\"]] call KISKA_fnc_addKiskaDiaryEntry;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_addMagRepack;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_addMagRepack;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            cursorObject,\n            15,\n            [\"test\",{hint \"action\"},[]]\n        ] call KISKA_fnc_addProximityPlayerAction\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        PRE-INIT Function\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [player,[0,0,0],\"go to the Zero\"] call KISKA_fnc_addTeleportAction;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [true] call KISKA_fnc_alivePlayers;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // allows player's group to drop a rally point (if they're the server)\n        [player] call KISKA_fnc_allowGroupRally;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // exits on combat\n        [\n            someUnit,\n            \"SIT_GROUND_ARMED\",\n            true\n        ] call KISKA_fnc_ambientAnim;\n    \n```"
                },
                {
                    "text": "```sqf\n        // use animation set SIT_CHAIR_ARMED_2 and snap\n        // to objects within 10 meters of unit's position\n        // if no objects that are snappable for SIT_CHAIR_ARMED_2\n        // are found, unit will use SIT_GROUND_ARMED animation set\n        [\n            someUnit,\n            createHashMapFromArray [\n                [\"_animSet\", \"SIT_CHAIR_ARMED_2\"],\n                [\"_snapToRange\", 10],\n                [\"_backupAnims\",\"SIT_GROUND_ARMED\"]\n            ]\n        ] call KISKA_fnc_ambientAnim;\n    \n```"
                },
                {
                    "text": "```sqf\n        // STAND_UNARMED_3 is 10x more likely to be used than STAND_ARMED_1\n        [\n            someUnit,\n            [\n                \"STAND_ARMED_1\",1,\n                \"STAND_UNARMED_3\",10\n            ]\n        ] call KISKA_fnc_ambientAnim;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _isAnimated = [someUnit] call KISKA_fnc_ambientAnim_isAnimated;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [createGroup sideLogic] call KISKA_fnc_ambientAnim_getAttachToLogicGroup;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _group = [player] call KISKA_fnc_ambientAnim_getNearestAttachLogicGroup;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _map = [\n            configFile >> \"KISKA_AmbientAnimations\"\n        ] call KISKA_fnc_ambientAnim_createMapFromConfig;\n    \n```"
                }
            ],
            "description": "Parses a given config into a hashmap that can be used by KISKA_fnc_ambientAnim.This config will then be the hashmap KISKA_ambientAnim_configAnimationSetMapwith the config as the key.\n\nSee configFile >> \"KISKA_AmbientAnimations\" for an example of a configed map.\n\n\n```cpp\n        class ambientAnimsConfig\n        {\n            class someAnimSet\n            {\n                animations[] = {\"myAnimation\"}; // the only required property of an anim set\n            };\n        };\n    \n```"
        },
        "configuration": {
            "label": "KISKA_fnc_ambientAnim_createMapFromConfig",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _map = call KISKA_fnc_ambientAnim_getAttachLogicGroupsMap;\n    \n```"
                }
            ],
            "description": "Returns the hashmap that contains all logic groups used for ambient animations.\n\nUsers can then reference all the groups with the `values` command.\n\nA hashmap was used in order to provide a quicker means of removing entries whena group is deleted as opposed to having to used the `find` command with an array."
        },
        "configuration": {
            "label": "KISKA_fnc_ambientAnim_getAttachLogicGroupsMap",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        (SHOULD NOT BE DIRECTLY CALLED)\n    \n```"
                }
            ],
            "description": "Starts animations for KISKA_fnc_ambientAnim.\n\nThis should not be directly called and is instead handled in events definedin KISKA_fnc_ambientAnim."
        },
        "configuration": {
            "label": "KISKA_fnc_ambientAnim_play",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            someUnit,\n            getUnitLoadout someUnit\n        ] call KISKA_fnc_ambientAnim_setStoredLoadout;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [someUnit] call KISKA_fnc_ambientAnim_stop;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [myRadio] call KISKA_fnc_ambientNewsRadio;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [position player] call KISKA_fnc_arsenalSupplyDrop;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [vehicle, target, 2, 100, 360, [9,10,11]] spawn KISKA_fnc_arty;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            missionConfigFile >> \"KISKA_loadouts\" >> \"ONL\",\n            unit1\n        ] call KISKA_fnc_assignUnitLoadout\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [group1,attackPosition,100,\"COMBAT\",\"RED\"] call KISKA_fnc_attack;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [] spawn KISKA_fnc_balanceHeadless;\n    \n```"
                }
            ],
            "description": "Balances AI among all logged Headless Clients in a very simple fashion.Designed to be run once and also should only be done when all HC are logged onto the server.\n\nExcluded groups and units can be added to the array KISKA_hcExcluded."
        },
        "configuration": {
            "label": "KISKA_fnc_balanceHeadless",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _baseMap = [\"SomeBaseConfig\"] call KISKA_fnc_bases_createFromConfig;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            \"SomeBaseConfig\"\n        ] call KISKA_fnc_bases_createFromConfig_agents;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            \"SomeBaseConfig\"\n        ] call KISKA_fnc_bases_createFromConfig_infantry;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            \"SomeBaseConfig\"\n        ] call KISKA_fnc_bases_createFromConfig_landVehicles;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            \"SomeBaseConfig\"\n        ] call KISKA_fnc_bases_createFromConfig_patrols;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            \"SomeBaseConfig\"\n        ] call KISKA_fnc_bases_createFromConfig_simples;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            \"SomeBaseConfig\"\n        ] call KISKA_fnc_bases_createFromConfig_turrets;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _mapOfDataForSpecificBase = [\n            \"SomeBaseConfig\"\n        ] call KISKA_fnc_bases_getHashmap;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            [\n                missionConfigFile >> \"KISKA_Bases\" >> \"myBase\",\n                missionConfigFile >> \"KISKA_Bases\" >> \"myBase\" >> \"Infantry\",\n                missionConfigFile >> \"KISKA_Bases\" >> \"myBase\" >> \"Infantry\" >> \"myInfantryClass\"\n            ]\n        ] call KISKA_fnc_bases_getInfantryClasses;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            [\n                missionConfigFile >> \"KISKA_Bases\" >> \"myBase\"\n                missionConfigFile >> \"KISKA_Bases\" >> \"myBase\" >> \"Infantry\",\n                missionConfigFile >> \"KISKA_Bases\" >> \"myBase\" >> \"Infantry\" >> \"myInfantryClass\"\n            ]\n        ] call KISKA_fnc_bases_getSide;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            missionConfigFile >> \"SomeBaseConfig\" >> \"infantry >> \"someInfantryConfigClass\",\n            someUnit\n        ] call KISKA_fnc_bases_initAmbientAnimFromClass;\n    \n```"
                }
            ],
            "description": "Parses and initializes a KISKA base entry's ambient animation class.\n\nThis is meant to be called from KISKA bases createFromConfig functions."
        },
        "configuration": {
            "label": "KISKA_fnc_bases_initAmbientAnimFromClass",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            _group,\n            SomeBaseConfig >> \"infantry\" >> \"someUnitClass\"\n        ] call KISKA_fnc_bases_initReinforceFromClass;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            aGroup,\n            123,\n            [\"anotherGroupsId\"],\n            1,\n            {\n                hint str _this;\n                false // continue with default reaction behaviour\n            }\n        ] call KISKA_fnc_bases_setupReactivity;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            someGroup,\n            anEnemyUnit\n        ] call KISKA_fnc_bases_triggerReaction\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [player,20,10] call KISKA_fnc_battleSound;\n    \n```"
                },
                {
                    "text": "```sqf\n        // distance will be between 10-30m, leaning towards 20m\n        [player,[10,20,30],10] call KISKA_fnc_battleSound;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _createdMenu = [] call KISKA_fnc_buildCommandMenu\n    \n```"
                }
            ],
            "description": "Creates a showCommandingMenu compatible menu global array to be used withKISKA_fnc_commandMenuTree.\n\nThis will be saved as a missionNamespace global var."
        },
        "configuration": {
            "label": "KISKA_fnc_buildCommandMenu",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            [],\n            [\n                // hint player\n                [player],\n                {hint (_thisArgs select 0)}\n            ]\n        ] call KISKA_fnc_callBack\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [] call KISKA_fnc_callingForArsenalSupplyDrop;\n    \n```"
                }
            ],
            "description": "Used as a means of expanding on the \"expression\" property of the CfgCommunicationMenu.\n\nThis is essentially just another level of abrstraction to be able to more easily reusecode between similar supports and make things easier to read instead of fitting it allin the config."
        },
        "configuration": {
            "label": "KISKA_fnc_callingForArsenalSupplyDrop",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [] call KISKA_fnc_callingForArty;\n    \n```"
                }
            ],
            "description": "Used as a means of expanding on the \"expression\" property of the CfgCommunicationMenu.\n\nThis is essentially just another level of abrstraction to be able to more easily reusecode between similar supports and make things easier to read instead of fitting it allin the config."
        },
        "configuration": {
            "label": "KISKA_fnc_callingForArty",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [] call KISKA_fnc_callingForCAS;\n    \n```"
                }
            ],
            "description": "Used as a means of expanding on the \"expression\" property of the CfgCommunicationMenu.\n\nThis is essentially just another level of abrstraction to be able to more easily reusecode between similar supports and make things easier to read instead of fitting it allin the config."
        },
        "configuration": {
            "label": "KISKA_fnc_callingForCAS",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [] call KISKA_fnc_callingForHelicopterCAS;\n    \n```"
                }
            ],
            "description": "Used as a means of expanding on the \"expression\" property of the CfgCommunicationMenu.\n\nThis is essentially just another level of abrstraction to be able to more easily reusecode between similar supports and make things easier to read instead of fitting it allin the config."
        },
        "configuration": {
            "label": "KISKA_fnc_callingForHelicopterCAS",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [] call KISKA_fnc_callingForSupplyDrop_aircraft;\n    \n```"
                }
            ],
            "description": "Used as a means of expanding on the \"expression\" property of the CfgCommunicationMenu.\n\nThis is essentially just another level of abrstraction to be able to more easily reusecode between similar supports and make things easier to read instead of fitting it allin the config."
        },
        "configuration": {
            "label": "KISKA_fnc_callingForSupplyDrop_aircraft",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"myClass\",_this] call KISKA_fnc_callingForSupportMaster;\n    \n```"
                }
            ],
            "description": "Used as a means of expanding on the \"expression\" property of the CfgCommunicationMenu.\n\nThis is essentially just another level of abrstraction to be able to more easily reusecode between similar supports and make things easier to read instead of fitting it allin the config."
        },
        "configuration": {
            "label": "KISKA_fnc_callingForSupportMaster",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [myTarget] call KISKA_fnc_CAS;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        Should not be called on its own but in KISKA_fnc_CAS\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [turret1] spawn KISKA_fnc_ciwsAlarm;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [turret,3000,100] spawn KISKA_fnc_ciwsInit;\n    \n```"
                }
            ],
            "description": "Fires a number of rounds from AAA piece at target with random disperstion values.\n\nTo stop, set the variable \"KISKA_runCIWS\" to false."
        },
        "configuration": {
            "label": "KISKA_fnc_ciwsInit",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [turret1] spawn KISKA_fnc_ciwsSiren;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _turretPaths = [\"B_Heli_Transport_01_F\"] call KISKA_fnc_classTurretsWithGuns;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [myVehicle] call KISKA_fnc_clearCargoGlobal;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [group player,-1,false] call KISKA_fnc_clearWaypoints\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            [\"#USER:myMenu_1\",\"#USER:myMenu_2\"],\n            \"hint str _this\"\n        ] spawn KISKA_fnc_commandMenuTree\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            \"myMarkerID\"\n            \"images\\info_icon.paa\"\n        ] call KISKA_fnc_compass_addIcon;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_compass_configure;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [findDisplay 46] spawn KISKA_fnc_compass_mainLoop;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _array = [\n            configFile >> \"KISKA_compass\" >> \"compass\",\n            \"KISKA_compass_configs\"\n        ] call KISKA_fnc_compass_parseConfig;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_compass_refresh;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_compass_updateColors;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_compass_updateConstants;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _convoyMap = [] call KISKA_fnc_convoy_create;\n        private _spotInConvoy = [\n            _convoyMap,\n            vic\n        ] call KISKA_fnc_convoy_addVehicle;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [vic] call KISKA_fnc_convoy_addVehicleKilledEvent;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n\t\t[_vehicle] call KISKA_fnc_convoy_clearVehicleDebugFollowedPath;\n    \n```"
                }
            ],
            "description": "Clears a vehicle's current debug followed path objects array. \n\nWhen a vehicle is in debug mode, a path of objects will be drawn for the durationthat shows the positions the vehicle had followed while on its drive path. One followed object is created each time a drive path point is considered \"complete\"\n (vehicle within a radius of that point)."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_clearVehicleDebugFollowedPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n\t\t[_vehicle] call KISKA_fnc_convoy_clearVehicleDebugFollowPath;\n    \n```"
                }
            ],
            "description": "Clears a vehicle's current debug follow path objects array. \n\nWhen a vehicle is in debug mode, a path of objects will be drawn for the durationthat shows the positions currently in the vehicle's drive path. This is the followpath."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_clearVehicleDebugFollowPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _convoyHashMap = [\n            [leadVehicle],\n            10\n        ] call KISKA_fnc_convoy_create;\n    \n```"
                }
            ],
            "description": "Creates an advanced KISKA convoy. Vehicles should be already physically placed in the orderthat they intend to travel in. If creating in an urban setting, ensure vehicles are in a straight line so that they do not initially crash into a building.\nThis will create a CBA statemachine that processes one vehicle a frame. It manages the speedof the vehicle relative to the vehicle in front to keep a desired spacing between them. The space between each vehicle can be customized for that specific vehicle or any individual one.\nThe first vehicle added to the convoy WILL NOT have its movement managed in any capacity.All other vehicles will essentially follow the path of the lead vehicle. You should limit the speed and control the path of the lead vehicle for your specific use case.\n\nA convoy requires at least one vehicle (the lead vehicle) to be valid at any given moment.It will be automatically deleted otherwise."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_create",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _convoyHashMap = [\n            [leadVehicle],\n            10\n        ] call KISKA_fnc_convoy_create;\n        // some time later...\n        [_convoyHashMap] call KISKA_fnc_convoy_delete;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _rearBumperPositionWorld = [vic,true] call KISKA_fnc_convoy_getBumperPosition;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _convoyHashMap = [\n            _vehicle\n        ] call KISKA_fnc_convoy_getConvoyHashMapFromVehicle;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _convoyLeader = [\n            _convoyHashMap\n\t\t] call KISKA_fnc_convoy_getConvoyLeader;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _convoyStatemachine = [\n            SomeConvoyHashMap\n        ] call KISKA_fnc_convoy_getConvoyStatemachine;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _convoyVehicles = [\n            SomeConvoyHashMap\n        ] call KISKA_fnc_convoy_getConvoyVehicles;\n    \n```"
                },
                {
                    "text": "```sqf\n        private _convoyVehiclesCopy = +([\n            SomeConvoyHashMap\n        ] call KISKA_fnc_convoy_getConvoyVehicles);\n    \n```"
                },
                {
                    "text": "```sqf\n        private _startingIndex = 1;\n        private _allVehiclesButLeader = [\n            SomeConvoyHashMap,\n            _startingIndex\n        ] call KISKA_fnc_convoy_getConvoyVehicles;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _minBufferBetweenPoints = [\n            _convoyHashMap\n\t\t] call KISKA_fnc_convoy_getPointBuffer;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _convoyLeader = [\n            _convoyHashMap,\n            0\n\t\t] call KISKA_fnc_convoy_getVehicleAtIndex;\n    \n```"
                }
            ],
            "description": "Gets the a vehicle at the specified index of a convoy. \nFor example, the convoy leader is the vehicle at index 0 and the vehicle directly behind the leader is index 1."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getVehicleAtIndex",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _debugFollowedPathObjects = [\n            _vehicle\n        ] call KISKA_fnc_convoy_getVehicleDebugFollowedPath;\n    \n```"
                }
            ],
            "description": "Gets a vehicle's current debug followed path objects array. \nWhen a vehicle is in debug mode, a path of objects will be drawn for the durationthat shows the positions the vehicle had followed while on its drive path. One followed object is created each time a drive path point is considered \"complete\"\n (vehicle within a radius of that point)."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getVehicleDebugFollowedPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _debugFollowPathObjects = [\n            _vehicle\n        ] call KISKA_fnc_convoy_getVehicleDebugFollowPath;\n    \n```"
                }
            ],
            "description": "Gets a given convoy vehicle's current debug follow path.\nWhen a vehicle is in debug mode, a path of objects will be drawn for the durationthat shows the positions currently in the vehicle's drive path. This is the followpath."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getVehicleDebugFollowPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _followedPathMarkerType = [\n            _vehicle\n        ] call KISKA_fnc_convoy_getVehicleDebugMarkerType_followedPath;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _followPathMarkerType = [\n            _vehicle\n        ] call KISKA_fnc_convoy_getVehicleDebugMarkerType_followPath;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _currentDrivePath = [_vehicle] call KISKA_fnc_convoy_getVehicleDrivePath;\n    \n```"
                }
            ],
            "description": "Gets a given convoy vehicle's current drive path. This will return the referenceto the actual array used with `setDriveOnPath` for the vehicle's following.\nYou should not set a vehicle's drive path directly. If you want to overwrite a vehicle'scurrent path, use KISKA_fnc_convoy_modifyVehicleDrivePath."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getVehicleDrivePath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _indexOfVehicleInConvoy = [\n            _vehicle\n        ] call KISKA_fnc_convoy_getVehicleIndex;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _lastAddedPositionFromLead = [\n            _vehicle\n        ] call KISKA_fnc_convoy_getVehicleLastAddedPoint;\n    \n```"
                }
            ],
            "description": "Gets the last position added to the vehicle's drive path from the LEAD VEHICLE.\n\nThis does not include modified positions from KISKA_fnc_convoy_modifyVehicleDrivePath."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_getVehicleLastAddedPoint",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _vehicleConvoySeperation = [\n            _vehicle\n        ] call KISKA_fnc_convoy_getVehicleSeperation;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // SHOULD NOT BE CALLED DIRECTLY\n    \n```"
                }
            ],
            "description": "The default function that runs when a driver is detected as dead in a vehicle convoy.This is not fired based off an event handler but rather a check in the onEachFrame forthe convoy vehicles.The function will wait 4 seconds before affecting its behavior on the vehicle.\nIf the previous driver was a player, and a player is in the vehicle, nothing will happen.If the previous driver was a player, and a player is NOT in the vehicle, an AI will take overdriving the vehicle.If the previous driver was NOT a player, and a player is in the highest priority seat tobe the new driver, nothing will happen.If the previous driver was NOT a player, and an AI is in the highest priority seat tobe the new driver, they will be automatically moved into the driver seat.\nThe priority of vehicle role in the order of who the next driver is:1. commander2. cargo3. turrets4. gunner\n\nThis means commanders if present will be desired to move into the driver seat overall other vehicle roles."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_handleDeadDriver_default",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // SHOULD NOT BE CALLED DIRECTLY\n    \n```"
                }
            ],
            "description": "The default function that runs when a driver is detected as incapacitated in a vehicle convoy.\n\nThe function will wait 4 seconds before affecting its behavior on the vehicle.\nIf the previous driver was a player, and a player is in the vehicle, nothing will happen.If the previous driver was a player, and a player is NOT in the vehicle, an AI will take overdriving the vehicle.If the previous driver was NOT a player, and a player is in the highest priority seat tobe the new driver, nothing will happen.If the previous driver was NOT a player, and an AI is in the highest priority seat tobe the new driver, they will be automatically moved into the driver seat.\nThe priority of vehicle role in the order of who the next driver is:1. commander2. cargo3. turrets4. gunner\n\nThis means commanders if present will be desired to move into the driver seat overall other vehicle roles."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_handleUnconsciousDriver_default",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // SHOULD NOT BE CALLED DIRECTLY\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // SHOULD NOT BE CALLED DIRECTLY\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _isInDebug = [\n            _vehicle\n        ] call KISKA_fnc_convoy_isVehicleInDebug;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n\t\t// overwrite array entirely\n\t\t[\n            _vehicle,\n            -1, // without deleting any points in current drive path, add positions to the front of path\n            [\n                [12,34,56],\n                [12,34,58]\n            ]\n        ] call KISKA_fnc_convoy_modifyVehicleDrivePath;\n    \n```"
                }
            ],
            "description": "Changes the drive path of a given convoy vehicle.\n\nThe drive path will be overwritten from the _lastIndexToModify (inclusive) backwards until all of the _pointsToAdd have been placed in the array. This means that this function is not capable of appending to the end of an array, but only adding to the front."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_modifyVehicleDrivePath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // SHOULD NOT BE CALLED DIRECTLY\n    \n```"
                }
            ],
            "description": "Mananges an individual vehicle's position relative to the vehicle in front ofit in a convoy. This function is what the statemachine runs each frame/vehicle.\n\nThis function intentionally forgoes the use of several getter/setter functions to reduce overhead because it runs every frame."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_onEachFrame",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [vic] call KISKA_fnc_convoy_removeVehicle;\n    \n```"
                }
            ],
            "description": "Removes a given vehicle from its convoy.\n\nThis will shift the index's of all vehicles in the convoy that are lowerthan the given vehicle to remove. If the vehicle is moving (speed > 0)then the vehicle will be told to \"stop\" via a `move` order."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_removeVehicle",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [vic] call KISKA_fnc_convoy_removeVehicleKilledEvent;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _defaultSeperation = [\n            _convoyHashMap\n\t\t] call KISKA_fnc_convoy_getDefaultSeperation;\n    \n```"
                }
            ],
            "description": "Gets the default seperation between NEWLY added vehicles to a convoy.\nThis is the seperation that vehicles will get by default when they areadded to the convoy."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_setDefaultSeperation",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [_convoyHashMap,20] call KISKA_fnc_convoy_setDefaultSeperation;\n    \n```"
                }
            ],
            "description": "Sets the default seperation between NEWLY added vehicles to a convoy.\nThis will NOT update the spacing between any vehicles currently in the convoy."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_setDefaultSeperation",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [_convoyHashMap,1] call KISKA_fnc_convoy_setPointBuffer;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // debug enabled \n        [\n            _vehicle,\n            true\n        ] call KISKA_fnc_convoy_setVehicleDebug;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            _vehicle,\n            \"Sign_Arrow_Large_blue_F\"\n        ] call KISKA_fnc_convoy_setVehicleDebugMarkerType_followedPath;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            _vehicle,\n            \"Sign_Arrow_Large_Cyan_F\"\n        ] call KISKA_fnc_convoy_setVehicleDebugMarkerType_followPath;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // do-drive-on-path enabled \n        [\n            _vehicle,\n            true\n        ] call KISKA_fnc_convoy_setVehicleDriveOnPath;\n    \n```"
                }
            ],
            "description": "Sets whether or not the vehicle will initiate new `setDriveOnPath`'s whenevernew positions are added to its internal drive path.\nWhile false, a vehicle will continue to add points from the lead vehicle to itsdrive path and will continue to drive on the path prior to the setting of this to false unless otherwise stopped."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_setVehicleDriveOnPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _eventCode = [\n            vic\n        ] call KISKA_fnc_convoy_getVehicleKilledEvent;\n    \n```"
                }
            ],
            "description": "Gets the code that should execute when a vehicle dies in a convoy.\nThis will by default return KISKA_convoy_handleVehicleKilled_default ifnot explicitly set on the vehicle."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_setVehicleKilledEvent",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            vic,\n            {hint str _this}\n        ] call KISKA_fnc_convoy_setVehicleKilledEvent;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            _vehicle,\n            10\n        ] call KISKA_fnc_convoy_setVehicleSeperation;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _doDriveOnPath = [_vehicle] call KISKA_fnc_convoy_shouldVehicleDriveOnPath;\n    \n```"
                }
            ],
            "description": "Gets whether or not the vehicle will initiate new `setDriveOnPath`'s whenevera new point is added to the vehicle's drive path.\nWhile false, a vehicle will continue to receive new points in the vehicles drive path."
        },
        "configuration": {
            "label": "KISKA_fnc_convoy_shouldVehicleDriveOnPath",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [vic] call KISKA_fnc_convoy_stopVehicle;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [ConvoyHashMap] call KISKA_fnc_convoy_syncLatestDrivePoint;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // print numbers when at 15 and play sound at 10\n        [30,15,10] spawn KISKA_fnc_countdown;\n    \n```"
                },
                {
                    "text": "```sqf\n        // print numbers when at 15 and play no sound\n        [30,15,-1] spawn KISKA_fnc_countdown;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // simple task from config\n        [missionConfigFile >> MyTasks >> \"someTaskClass\",true] call KISKA_fnc_createTaskFromConfig;\n    \n```"
                },
                {
                    "text": "```sqf\n        [\n            \"someTaskClass\", // will search in missionConfigFile >> \"KISKA_cfgTasks\"\n            true,\n            \"ASSIGNED\",\n            configNull, // get configed destination value\n            \"ATTACK\"\n        ] call KISKA_fnc_createTaskFromConfig;\n    \n```"
                }
            ],
            "description": "Creates a task from a config entry. Config should be placed inside KISKA_cfgTasks,just the string is needed to reference the config entry.\n\nParameters from index 2 onwards will accept configNull as an alias for retrievingthe configed value of the param if it is not changed (see example 2)"
        },
        "configuration": {
            "label": "KISKA_fnc_createTaskFromConfig",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _menuArray = [\n            [\"B_Heli_Transport_01_F\",\"B_Heli_Attack_01_dynamicLoadout_F\"]\n        ] call KISKA_fnc_createClassSelectMenu;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [target_1] call KISKA_fnc_cruiseMissileStrike;\n    \n```"
                }
            ],
            "description": "Spawns a cruise missile at designated \"launcher\" and then guides it to a target.\n\nIf you need a missile that terrain follows, see KISKA_fnc_vlsFireAt."
        },
        "configuration": {
            "label": "KISKA_fnc_cruiseMissileStrike",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"this is the message\", 5] call KISKA_fnc_datalinkMsg;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [this] call KISKA_fnc_defend\n    \n```"
                }
            ],
            "description": "A function for a group to defend a parsed location. Should be ran locally.\n\nUnits will mount nearby static machine guns and garrison in nearby buildings.10% chance to patrol the radius unless specified differently (100% when no available building positions).0% chance to hold defensive positions in combat unless specified differently.\n\nModifications:Accounted for doMove command's inability to use z-axis"
        },
        "configuration": {
            "label": "KISKA_fnc_defend",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"myGlobalArrayVar\",someInfoHere] call KISKA_fnc_deleteAtArray;\n    \n```"
                }
            ],
            "description": "Removes an index from a global array.\n\nThis was used in lieu of creating a public variable to sync the array.In order to keep network traffic lower if the array becomes large."
        },
        "configuration": {
            "label": "KISKA_fnc_deleteAtArray",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"myGlobalArrayVar\",someInfoHere] call KISKA_fnc_deleteAtArray;\n    \n```"
                }
            ],
            "description": "Removes an index from a global array. Checks if machine hasInterface before.\n\nThis was used in lieu of creating a public variable to sync the array.In order to keep network traffic lower if the array becomes large."
        },
        "configuration": {
            "label": "KISKA_fnc_deleteAtArray_interface",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _randomDeletedItem = [[1,2,3]] call KISKA_fnc_deleteRandomIndex;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        PRE-INIT Function\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // disallows player's group to drop a rally point (if they're the server)\n        [player] call KISKA_fnc_disallowGroupRally;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [player] call KISKA_fnc_doMagRepack;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [_group1, _vehicle, myDismountPoint] call KISKA_fnc_driveTo;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            myVehicle,\n            myPosition,\n            player\n        ] call KISKA_fnc_dropOff;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _taskIsSucceeded = [\"mytaskID\",0] call KISKA_fnc_endTask;\n    \n```"
                }
            ],
            "description": "Either completes, cancels, or ends a task and calls the task's onCompleteevent if it is defined in KISKA_cfgTasks.\n\nMeant to be paired with KISKA_fnc_createTaskFromConfig."
        },
        "configuration": {
            "label": "KISKA_fnc_endTask",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            _vehicle,\n            5,\n            4,\n            250,\n            1,\n            true\n        ] spawn KISKA_fnc_engageHeliTurretsLoop;\n    \n```"
                }
            ],
            "description": "Sets up a helicopter's turrets to be able to properly engage enemies withoutwithout the pilot going crazy.\n\nStarts a loop that will reveal targets within a given radius to gunners to engage.\n\nYou can use variables in the _heli's namepsace to adjust params dynamically:\n\"KISKA_heliTurrets_endLoop\" - ends the function\n\"KISKA_heliTurrets_sleepTime\" - adjusts the _sleepTime param\n\"KISKA_heliTurrets_revealAccuracy\" - adjusts the _revealAccuracy param\n\"KISKA_heliTurrets_detectionRadius\" - adjusts the _detectionRadius param\n\"KISKA_heliTurrets_running\" - checks if the system is running"
        },
        "configuration": {
            "label": "KISKA_fnc_engageHeliTurretsLoop",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"You made and error\"] call KISKA_fnc_errorNotification;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _eventID = [\n            player,\n            myConfig\n        ] call KISKA_fnc_eventHandler_addFromConfig\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _statemachine = [myConfig] call KISKA_fnc_eventHandler_createCBAStateMachine\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _removed = [\n            player,\n            configFile >> \"KISKA_EventHandlers\" >> \"KISKA_combatBehaviourChangedEvent\",\n            0\n        ] call KISKA_fnc_eventHandler_remove\n    \n```"
                }
            ],
            "description": "Removes a configed custom eventhandler.\n\nWorth noting that this will still return `true` even after the event has beenremoved as BIS_fnc_removeScriptedEventHandler essentially checks that the eventisn't one that never could have existed."
        },
        "configuration": {
            "label": "KISKA_fnc_eventHandler_remove",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _loadouts = [_units,true] call KISKA_fnc_exportLoadouts;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"someLayer\",true] call KISKA_fnc_exportSpawnPositions;\n    \n```"
                }
            ],
            "description": "Takes a layer of objects and produces an array of arrays that are their 3dATL position and current direction ([0,0,0,0]).\n\nCan also convert the arrays to config compatible format.\n\nThis will copy its output to the clipboard if run on the server;"
        },
        "configuration": {
            "label": "KISKA_fnc_exportSpawnPositions",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _configPath = [[\"CfgMusic\",\"Music_Intro_02_MissionStart\"]] call KISKA_fnc_findConfigAny;\n    \n```"
                }
            ],
            "description": "Searchs missionConfigFile, campaignConfigFile, and the configFile\n (in that order) to find a config based upon the sub paths provided.\n\nReturns the first one it finds.\n\nThe BIS counterpart to this is BIS_fnc_loadClass and while it can be about 0.0005-0.0010msfaster if the path is short (about 2 entries). It can yield about 0.005ms faster in various cases."
        },
        "configuration": {
            "label": "KISKA_fnc_findConfigAny",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // returns true if any player is alive\n        [allPlayers,{alive _x}] call KISKA_fnc_findIfBool;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        PRE-INIT function\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [group player] call KISKA_fnc_GCH_addGroupEventhandlers\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        PRE-INIT function\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [someGroup] call KISKA_fnc_GCH_canPlayerChangeGroup;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [group player] call KISKA_fnc_GCH_doesGroupHaveAnotherPlayer\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        POST-INIT Function\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _playerSide = call KISKA_fnc_GCH_getPlayerSide;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _selectedGroup = [] call KISKA_fnc_GCH_getSelectedGroup;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _playerSide = [] call KISKA_fnc_GCH_getPlayerSide;\n        _groups = [_playerSide] call KISKA_fnc_GCH_getSideGroups;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [myGroup,false] call KISKA_fnc_GCH_groupDeleteQuery;\n    \n```"
                }
            ],
            "description": "Acts as a liason from a client to add a group to auto delete if necessary.\n\nOnly works where the group is local and need to use groupOwner to get thatwhich only works on the server."
        },
        "configuration": {
            "label": "KISKA_fnc_GCH_groupDeleteQuery",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _canEdit = [myGroup] call KISKA_fnc_GCH_isAllowedToEdit;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _isExcluded = [group player] call KISKA_fnc_GCH_isGroupExcluded;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _isOpen = call KISKA_fnc_GCH_isOpen;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_GCH_openDialog;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // exclude group\n        private _isExcluded = [group player,true] call KISKA_fnc_GCH_setGroupExcluded;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [group player, player] call KISKA_fnc_GCH_setLeaderRemote;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // update just the unit list\n        [true] call KISKA_fnc_GCH_updateCurrentGroupSection;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [true] call KISKA_fnc_GCH_updateSideGroupsList;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [_display] call KISKA_fnc_GCHOnLoad;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [_control] call KISKA_fnc_GCHOnLoad_assignTeamCombo;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [aUnit] remoteExec [\"KISKA_fnc_GCH_assignTeam\",LocalPlayerUnitOrLeaderOfGroup];\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [_control] call KISKA_fnc_GCHOnLoad_canBeDeletedCombo;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [_control] call KISKA_fnc_GCHOnLoad_canRallyCombo;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [_control] call KISKA_fnc_GCHOnLoad_closeButton;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n       [buttonControl]  call KISKA_fnc_GCHOnLoad_joinGroupButton;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [buttonControl] call KISKA_fnc_GCHOnload_leaveGroupButton;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [buttonControl] call KISKA_fnc_GCHOnLoad_setGroupIdButton;\n    \n```"
                }
            ],
            "description": "The function that fires on the set group id button click event.\n\nThis is called from KISKA_fnc_GCHOnLoad"
        },
        "configuration": {
            "label": "KISKA_fnc_GCHOnLoad_setGroupIdButton",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n           [buttonControl] call KISKA_fnc_GCHOnLoad_setLeaderButton;\n    \n```"
                }
            ],
            "description": "The function that fires on the set leader button click event.\n\nThe function is called in KISKA_fnc_GCHOnLoad."
        },
        "configuration": {
            "label": "KISKA_fnc_GCHOnLoad_setLeaderButton",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [_control] call KISKA_fnc_GCHOnLoad_showAiCheckbox;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [_control] call KISKA_fnc_GCHOnLoad_sideGroupsList;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_generateUniqueId;\n        // KISKA_uid_0_0\n    \n```"
                },
                {
                    "text": "```sqf\n        [\"MYTAG\"] call KISKA_fnc_generateUniqueId;\n        // MYTAG_uid_0_0\n    \n```"
                }
            ],
            "description": "Creates a unique identifier with a given tag. \nThe id format is: *tag*_*clientOwner*_*increment* which as an example could be\n `KISKA_uid_0_0` as the first unique id made in a single player scenario."
        },
        "configuration": {
            "label": "KISKA_fnc_generateUniqueId",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _class = [0] call KISKA_fnc_getAmmoClassFromId\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _title = [0] call KISKA_fnc_getAmmoClassFromId\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _playerBoxDimensions = [player] call KISKA_fnc_getBoundingBoxDimensions;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _rearBumperPositionRelatives = [vic,true] call KISKA_fnc_getBumperPositionRelative;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _title = [0] call KISKA_fnc_getCasTitleFromId\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [container] call KISKA_fnc_getContainerCargo;\n    \n```"
                }
            ],
            "description": "Saves the cargo of a container in a formatterd array to be used withKISKA_fnc_pasteContainerCargo for copying cargos of containers.\n\nExact ammo counts will be preserved even inside of an item such as magazinesinside of a vest or backpack."
        },
        "configuration": {
            "label": "KISKA_fnc_getContainerCargo",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _waypoint = [myUnit] call KISKA_fnc_getCurrentWaypoint;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _entity = [\"0:0\"] call KISKA_fnc_netId;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _id = call KISKA_fnc_getLatestPlayedMusicID;\n    \n```"
                }
            ],
            "description": "Returns the latest track ID of music that played (each song played increments)the ID by one.\n\nThis DOES NOT indicated whether or not this ID is still playing.See KISKA_fnc_getPlayingMusic to check what track is present (if any)."
        },
        "configuration": {
            "label": "KISKA_fnc_getLatestPlayedMusicID",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _objects = [\"myLayer\"] call KISKA_fnc_getMissionLayerObjects;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _valueFromMostSpecificClass = [\n            \"myProperty\"\n            [\n                missionConfigFile >> \"SomeClass\",\n                missionConfigFile >> \"SomeClass\" >> \"SomeSubClass\",\n                missionConfigFile >> \"SomeClass\" >> \"SomeSubClass\" >> \"SomeFurtherSubClass\",\n            ],\n            [\"\"], // shouldn't be an empty string,\n            [123] // ignore number properties\n        ] call KISKA_fnc_getMostSpecificCfgValue;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _duration = [\"LeadTrack01_F_Curator\"] call KISKA_fnc_getMusicDuration;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"stealth\"] call KISKA_fnc_getMusicFromClass;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // -0.22\n        _nearestIncriment = [-0.223,0.01] call KISKA_fnc_getNearestIncriment;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _track = call KISKA_fnc_getPlayingMusic;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            player,\n            100,\n            180\n        ] call KISKA_fnc_getPosRelativeSurface;\n    \n```"
                },
                {
                    "text": "```sqf\n        [\n            player,\n            100,\n            180,\n            10 // 10 meters above water surface or terrain\n        ] call KISKA_fnc_getPosRelativeSurface;\n    \n```"
                }
            ],
            "description": "Returns a relative position but that the position is at the 0 position for thesurface beneath (being either water or the terrain) in an ATL format.\n\nThis means the z will always be 0 or the height of the sea above the terrain levelat the given _centerPosition."
        },
        "configuration": {
            "label": "KISKA_fnc_getPosRelativeSurface",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private relativeArray = [\n            parentObject,\n            childObject\n        ] call KISKA_fnc_getRelativeVectorAndPos\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            parentObject,\n            childObject,\n            [[0,0,0],[0,1,0],[0,0,1]]\n        ] call KISKA_fnc_setRelativeVectorAndPos;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _bluforCAS_types = [BLUFOR,SUPPORT_TYPE_CAS] call KISKA_fnc_getSupportVehicleClasses;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [] spawn {\n            // need to call for direct return\n            private _serversSomeVariable = [\n                \"someVariable\",\n                missionNamespace,\n                \"\",\n                2\n            ] call KISKA_fnc_getVariableTarget;\n        };\n    \n```"
                }
            ],
            "description": "Gets a variable from a remote target object, id, or string (uses remoteExec targets)\n\nTakes a bit of time and therefore needs to be scheduled."
        },
        "configuration": {
            "label": "KISKA_fnc_getVariableTarget",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            _namespace,\n            _variableName,\n            _saveVariable,\n            _defaultValue,\n            clientOwner\n        ] remoteExecCall [\"KISKA_fnc_getVariableTarget_sendBack\",_target];\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // angles to player\n        myObject setVectorDirAndUp ([myObject,player] call KISKA_fnc_getVectorToTarget);\n    \n```"
                }
            ],
            "description": "Returns vectorDir and vectorUp that should angle the object towards the target.\n\nE.g. this will point the nose of a plane towards a target if paired withsetVector commands."
        },
        "configuration": {
            "label": "KISKA_fnc_getVectorToTarget",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _associatedKey = [\n\t\t\tsomeObject\n\t\t] call KISKA_fnc_hashmap_assignObjectOrGroupKey;\n    \n```"
                }
            ],
            "description": "Provides a unique hashmap key for a given object or group.\n\nThe key can be reverse looked up for the object or group with KISKA_fnc_hashmap_getObjectOrGroupFromRealKey."
        },
        "configuration": {
            "label": "KISKA_fnc_hashmap_assignObjectOrGroupKey",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _value = [myMap,_key] call KISKA_fnc_hashmap_deleteAt;\n    \n```"
                }
            ],
            "description": "Deletes a key/value pair if it's in a hashmap, supports objects and groups as keys.\n\nIdeally, not something that should be used if the map is not intended toalso hold groups and objects as keys."
        },
        "configuration": {
            "label": "KISKA_fnc_hashmap_deleteAt",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _value = [\n            myMap,\n            someObject,\n            \"Hello World\"\n        ] call KISKA_fnc_hashmap_get;\n    \n```"
                }
            ],
            "description": "Gets a value from a hashmap but also supports objects and groups as keys.\n\nIdeally, not something that should be used if the map is not intended toalso hold groups and objects as keys."
        },
        "configuration": {
            "label": "KISKA_fnc_hashmap_get",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _kiskaObjectOrGroupKeyHashMap = call KISKA_fnc_hashmap_getKiskaObjectGroupKeyMap;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n\t\tprivate _key = [someObject] call KISKA_fnc_hashmap_getRealKey;\n        private _someObject = [\n\t\t\t_key\n\t\t] call KISKA_fnc_hashmap_getObjectOrGroupFromRealKey;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _keyUsedInKiskaHashmap = [someObject] call KISKA_fnc_hashmap_getRealKey;\n    \n```"
                }
            ],
            "description": "Returns the actual value used for a key when using KISKA hashmap functions.\nThis really only applies to objects or groups as they will have a special stringused to identify them in the hashmap. Use this function to get the key of themif you need to do multiple operations on a hashmap with the same object or groupand do not want the overhead of the functions."
        },
        "configuration": {
            "label": "KISKA_fnc_hashmap_getRealKey",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [myMap,_key] call KISKA_fnc_hashmap_in;\n    \n```"
                }
            ],
            "description": "Checks if a key exists in a hashmap, supports objects and groups as keys.\n\nIdeally, not something that should be used if the map is not intended toalso hold groups and objects as keys."
        },
        "configuration": {
            "label": "KISKA_fnc_hashmap_in",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _inserted = [\n            myMap,\n            someObject,\n            \"Hello World\"\n        ] call KISKA_fnc_hashmap_set;\n    \n```"
                }
            ],
            "description": "Sets a key/value pair in a hashmap but also supports objects and groups as keys.\n\nIdeally, not something that should be used if the map is not intended toalso hold groups and objects as keys."
        },
        "configuration": {
            "label": "KISKA_fnc_hashmap_set",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            player,\n            250,\n            \"B_Heli_Attack_01_dynamicLoadout_F\"\n        ] call KISKA_fnc_helicopterGunner;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [myHeli,position player] call KISKA_fnc_heliLand;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [heli,[logic1,logic2,logic3],500,200,false] call KISKA_fnc_heliPatrol;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"this is the message\", \"Subject\"] call KISKA_fnc_hintDiary;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n\t\t\tmyHeli,\n\t\t\tmyHoverPositionASL,\n\t\t\t{\n\t\t\t\tlocalNamespace getVariable [\"stopMyHover\",false]\n\t\t\t},\n\t\t\t{\n\t\t\t\thint \"after hover\";\n\t\t\t}\n        ] call KISKA_fnc_hover;\n    \n```"
                }
            ],
            "description": "Sends a vehicle to a given point to hover.\n\nPilots should ideally be placed in \"CARELESS\" behaviour when around enemies."
        },
        "configuration": {
            "label": "KISKA_fnc_hover",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _latesIndexFor_myId = [\"myId\"] call KISKA_fnc_idCounter;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        POST-INIT Function\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _isAdminOrHost = call KISKA_fnc_isAdminOrHost;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [group player] call KISKA_fnc_isGroupAlive;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // checks if player's group can use the rally system (if they're the server)\n        [player] call KISKA_fnc_isGroupRallyAllowed;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        isMainMenu = call KISKA_fnc_isMainMenu;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _isSomethingPlaying = call KISKA_fnc_isMusicPlaying;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"OPTRE_Core\"] call KISKA_fnc_isPatchLoaded;\n\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        PRE-INIT function\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        missionNamespace setVariable [\"KISKA_doLog\",true];\n        scriptName \"My Script\";\n        private _myvar = 1;\n        [[\"Hello Number\",_myvar]] call KISKA_fnc_log;\n\n        // prints [\"My Script\"] \"Hello Number 1\" to console\n    \n```"
                }
            ],
            "description": "Prints a log with a script name to console.\n\nWhether or not something is logged depends on whether the script is set inthe KISKA_logScripts array. If the script name (or \"all\") is found in the arraya log is printed."
        },
        "configuration": {
            "label": "KISKA_fnc_log",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [player,[[0,0,0]]] call KISKA_fnc_lookHere;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // add code for given id\n        [\n            \"KISKA_manage_allowDamage\",\n            {\n                params [\"_unit\",\"_isDamageAllowed\"];\n                _unit allowDamage _isDamageAllowed;\n            }\n        ] call KISKA_fnc_managedRun_updateCode;\n\n        // initial run\n        private _idOfRun = [\n            \"KISKA_manage_allowDamage\",\n            [player, false],\n            player\n        ] call KISKA_fnc_managedRun_execute;\n\n        // try to change in the future\n        [_idOfRun] spawn {\n            params [\"_idOfRun\"];\n            sleep 3;\n            // does nothing because id was overwritten in the meantime\n            [\n                \"KISKA_manage_allowDamage\",\n                [player, true],\n                player,\n                _idOfRun\n            ] call KISKA_fnc_managedRun_execute;\n\n            hint str (isDamageAllowed player) // false\n        };\n\n        private _idOfADifferentRun = [\n            \"KISKA_manage_allowDamage\",\n            [player, false],\n            player\n        ] call KISKA_fnc_managedRun_execute;\n    \n```"
                }
            ],
            "description": "Allows multiple systems to manage a particular functionality or subset of codeby restricting runs to only the latest id for a given namespace\n\nThe code must be added with KISKA_fnc_managedRun_updateCode.\n\nAn example is having competing systems that need to adjust the damage of the playerat different times an perhaps with delays. Perhaps one system starts by taking ownershipof this functionality to not allow the player to be damaged, however, later this systemwill reset wether or not the player has damage allowed after some delay.If another system (or the same one again in the future) wants to take ownership of thisfunctionality to also set the player to not allow damage BEFORE the previous systemhas reset the player's isDamageAllowed state, it could become complex to try and handlethe reset vs continuing to allow the player to not take damage. Instead, the previoussystem's code will now be blocked from running, as another id has taken ownership."
        },
        "configuration": {
            "label": "KISKA_fnc_managedRun_execute",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // false\n        private _isDefined = [\"KISKA_test\"] call KISKA_fnc_managedRun_isDefined;\n        [\"KISKA_test\",{hint \"Hello World\"}] call KISKA_fnc_managedRun_updateCode;\n        // true now\n        _isDefined = [\"KISKA_test\"] call KISKA_fnc_managedRun_isDefined;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"KISKA_test\",{hint \"Hello World\"}] call KISKA_fnc_managedRun_updateCode;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _markers = [\n            player\n        ] call KISKA_fnc_markBorder;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [[0,0,0],[0,0,0]] call KISKA_fnc_markPositions;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [60] call KISKA_fnc_monitorFPS;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        PREINIT FUNCTION\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"trackThatStarted\"] call KISKA_fnc_musicStartEvent;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [] call KISKA_fnc_musicStopEvent;\n    \n```"
                }
            ],
            "description": "The function that should be activated when music stops playing.\n\nIt can also be manually triggered and a param is added to stop the music audioby playing an empty track (\"\")."
        },
        "configuration": {
            "label": "KISKA_fnc_musicStopEvent",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _id = [player] call KISKA_fnc_netId;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"Hello World\"] call KISKA_fnc_notification;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            [\"Hello\",1.1,[0.75,0,0,1]],\n            \"World\",\n            5,\n            false\n        ] call KISKA_fnc_notify;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [] spawn KISKA_fnc_paratroopers;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [_group,_positionsArray,5] call KISKA_fnc_patrolSpecific;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            _vehicle,\n            _pathArray\n        ] call KISKA_fnc_playDrivePath;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"track\", 0, true, 1, 3] spawn KISKA_fnc_playMusic;\n    \n```"
                },
                {
                    "text": "```sqf\n        [\n            \"track\",\n            [10,60]    // start ten seconds into the song, and play for 60 seconds\n        ] spawn KISKA_fnc_playMusic;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            player,\n            [],\n            5,\n            [],\n            {hint str _this}\n        ] call KISKA_fnc_playRandom3dSoundLoop;\n    \n```"
                }
            ],
            "description": "Randomly plays sounds (or music) in 3d space from a given list at one or multiple origins.\nThis function will produce synchronized audio on all machines."
        },
        "configuration": {
            "label": "KISKA_fnc_playRandom3dSoundLoop",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"alarm\",player,20] call KISKA_fnc_playSound2D;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            \"BattlefieldJet1_3D\",\n            (getPosASL player) vectorAdd [50,50,100],\n            2000\n        ] call KISKA_fnc_playSound3D;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"myGlobalArrayVar\",someInfoHere,missionNamespace] call KISKA_fnc_pushBackToArray;\n    \n```"
                }
            ],
            "description": "Pushes back a value to a global array.\n\nThis was used in lieu of creating a public variable to sync the array.In order to keep network traffic lower if the array becomes large."
        },
        "configuration": {
            "label": "KISKA_fnc_pushBackToArray",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            \"myGlobalArrayVar\",\n            someInfoHere,\n            missionNamespace\n        ] call KISKA_fnc_pushBackToArray_interface;\n    \n```"
                }
            ],
            "description": "Pushes back a value to a global array. Checks if machine hasInterface before pushing.\n\nThis was used in lieu of creating a public variable to sync the array.In order to keep network traffic lower if the array becomes large."
        },
        "configuration": {
            "label": "KISKA_fnc_pushBackToArray_interface",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // radio sound follows player\n        [\n            true,\n            [player]\n        ] call KISKA_fnc_radioChatter;\n    \n```"
                },
                {
                    "text": "```sqf\n        // radio sound follows front of player\n        [\n            true,\n            [player,5,[0,1,0]]\n        ] call KISKA_fnc_radioChatter;\n    \n```"
                }
            ],
            "description": "Plays a random radio ambient at the specified position.\n\nThis has a global effect now and should be executed on one machine."
        },
        "configuration": {
            "label": "KISKA_fnc_radioChatter",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _uniforms = [\"U_B_CombatUniform_mcam_vest\"];\n        private _headgear = [];\n        private _facewear = [];\n        private _vests = [];\n        private _backpacks = [];\n        private _primaryWeapons = [\n            // add a mag an optic to rifle\n            [\"arifle_MXC_F\",[\"optic_Aco\",\"30Rnd_65x39_caseless_mag\"]]\n        ];\n\n        [\n            _unit,\n            _uniforms,\n            _headgear,\n            _facewear,\n            _vests,\n            _backpacks,\n            _primaryWeapons\n        ] call KISKA_fnc_randomGear;\n    \n```"
                }
            ],
            "description": "Randomizes gear based upon input arrays for each slot. Be aware that this functionis very slow (can take >1ms) and should be used ideally on initialization for largenumbers of units. \n\nThe unit must be local to the machine where this function is executed.\n\nAll gear arrays can be weighted or unweighted arrays."
        },
        "configuration": {
            "label": "KISKA_fnc_randomGear",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _randomIndex = [[1,2,3]] call KISKA_fnc_randomIndex;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [guy,[globalLoadout1,globalLoadout2]] call KISKA_fnc_randomLoadout;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // space tracks by 20 seconds exactly each\n        [-1,arrayOfTracks,20] call KISKA_fnc_randomMusic;\n    \n```"
                },
                {
                    "text": "```sqf\n        // space tracks by UP TO 20 seconds each\n        [-1,arrayOfTracks,[20]] call KISKA_fnc_randomMusic;\n    \n```"
                }
            ],
            "description": "Starts playing a random assortment of curated music tracks to all players on a server.This is essentially a multiplayer jukebox. Should only be executed on the server.\n\nAll songs will be played in a random order and then loop back to play in another random order infinitely.\n\nIt will not interrupt music commanded to play by other means.\n\nYou can define quiet time space between tracks."
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _mostRecentRandomTrack = call KISKA_fnc_randomMusic_getCurrentTrack;\n    \n```"
                }
            ],
            "description": "Returns the most recent track selected by the random music system.Will be an empty string \"\" if none is defined.\n\nThis is regardless of whether the song is actually playing."
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_getCurrentTrack",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _interval = call KISKA_fnc_randomMusic_getTrackInterval;\n       \n```"
                }
            ],
            "description": "Retrieves the current tracks in the random music system that could play.\n\nPossible Values:\n[NUMBER,NUMBER,NUMBER] - used with the \"random\" command's [min,mid,max]to get a uniform random space between tracks.\n[NNUMBER] - used with denotes that the space between tracks can be UP TO this number.NUMBER - the exact time between tracks that will be the same every time."
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_getTrackInterval",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _arrayOfTracks = call KISKA_fnc_randomMusic_getUnusedTracks;\n       \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _arrayOfTracks = call KISKA_fnc_randomMusic_getUsedTracks;\n       \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _volume = call KISKA_fnc_randomMusic_getVolume;\n       \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _isRunning = call KISKA_fnc_randomMusic_isSystemRunning;\n       \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"Some_Music_Track\"] call KISKA_fnc_randomMusic_setCurrentTrack;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // set to running\n        [true] call KISKA_fnc_randomMusic_setSystemRunning;\n       \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [20] remoteExecCall [\"KISKA_fnc_randomMusic_setTrackInterval\",2];\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [[\"someTrack\",\"anotherTrack\"]] call KISKA_fnc_randomMusic_setUnusedTracks;\n       \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [[\"SomeTrack\",\"AnotherTrack\"]] call KISKA_fnc_randomMusic_setUsedTracks;\n       \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [1] remoteExecCall [\"KISKA_fnc_randomMusic_setVolume\",2];\n    \n```"
                }
            ],
            "description": "Changes the volume at which random music specifically will play at (on all clients).\n\nOnly executes on server."
        },
        "configuration": {
            "label": "KISKA_fnc_randomMusic_setVolume",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_randomMusic_stopClient;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_randomMusic_stopServer;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // show hint messages\n        [myCuratorObject,true] call KISKA_fnc_reassignCurator;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            objectParent player,\n            0.25\n        ] call KISKA_fnc_recordDrivePath\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            _code,\n            _args,\n            _scheduled,\n            _uniqueId,\n            clientOwner\n        ] remoteExecCall [\"KISKA_fnc_remoteReturn_receive\",_target];\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [] spawn {\n            // need to call for direct return but in scheduled environment\n            _clientIdFromServer = [\"owner (_this select 0)\",[player],2] call KISKA_fnc_remoteReturn_send;\n        };\n    \n```"
                }
            ],
            "description": "Gets a remote return from a scripting command on a target machine.\nBasically remoteExec but with a return.\n\nNeeds to be run in a scheduled environment as it takes time to receivethe return.\n\nThis should not be abused to obtain large returns over the network.\nBe smart and use for simple types (not massive arrays)."
        },
        "configuration": {
            "label": "KISKA_fnc_remoteReturn_send",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [[arsenal1, arsenal2]] call KISKA_fnc_removeArsenal;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _done = [arsenal] call KISKA_fnc_removeBISArsenalAction;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [aUnit,{hint _this}] call KISKA_fnc_removeEntityKilledEventHandler;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [0] call KISKA_fnc_removeProximityPlayerAction;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        PRE-INIT function\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [_unit] remoteExecCall [\"KISKA_fnc_resetMove\"]\n    \n```"
                }
            ],
            "description": "Call switchMove \"\" on a given unit. This function was created because as of release 2.10 there is an issue where remoteExec'ing switchMove \"\" on a unit directly within some functions (KISKA_fnc_ambientAnim_stop) does not work as intended \n (the intention being the unit returns to normal animations)\nRemoteexecuting this function, however, fixes the issue."
        },
        "configuration": {
            "label": "KISKA_fnc_selectRandom",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _randomValue = [[\n            \"thing1\",\n            \"thing2\"\n        ]] call KISKA_fnc_selectRandom;\n    \n```"
                },
                {
                    "text": "```sqf\n        private _weight1 = 0.5;\n        private _weight2 = 0.5;\n\n        private _randomWeightedValue = [\n            [\n                \"thing1\", _weight1,\n                \"thing2\", _weight2\n            ],\n            \"\"\n        ] call KISKA_fnc_selectRandom;\n    \n```"
                },
                {
                    "text": "```sqf\n        private _weight1 = 0.5;\n        private _weight2 = 0.5;\n\n        private _randomWeightedValue = [\n            [\n                [\"thing1\", \"thing2\"],\n                [_weight1, _weight2]\n            ],\n            \"\"\n        ] call KISKA_fnc_selectRandom;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [container,otherContainer] call KISKA_fnc_setContainerCargo;\n    \n```"
                },
                {
                    "text": "```sqf\n        private _cargoToCopy = [otherContainer] call KISKA_fnc_getContainerCargo;\n        [container,_cargoToCopy] call KISKA_fnc_setContainerCargo;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [_group1,_vehicle] call KISKA_fnc_setCrew;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _eventMap = [\n            [someObject, anotherObject],\n            {\n                params [\"_killedEventParams\",\"_eventMap\"];\n                _killedEventParams params [\"_killedObject\"];\n                hint str [_killedEventParams, _eventMap];\n            }\n        ] call KISKA_fnc_setupMultiKillEvent;\n    \n```"
                },
                {
                    "text": "```sqf\n        // add more objects to the existing event made above\n        private _eventMap = [\n            [andAdditionalObject],\n            (\"#\" + (_eventMap get \"id\"))\n        ] call KISKA_fnc_setupMultiKillEvent;\n    \n```"
                }
            ],
            "description": "Sets up an event that will fire when a percentage of objects are killed.Uses `\"KILLED\"` or `\"MPKILLED\"` eventhandlers.\n\nThis should be called where the arguements are local if `_useMPKilled` is `false`or on the server if `_useMPKilled` is `true`."
        },
        "configuration": {
            "label": "KISKA_fnc_setupMultiKillEvent",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _waypoint = myGroup addWaypoint [position player, 0];\n        private _id = [\n            _waypoint,\n            { hint str _this; }\n        ] call KISKA_fnc_setWaypointExecStatement\n    \n```"
                }
            ],
            "description": "Sets the (execution) statement of a given waypoint using an interface that allowsarg passing.\n\nThis statement will only be executed on the machine where added.\n\nBe aware that this will create variables on the provided waypoint's group. If a waypointis deleted, the variable on the group will still remain."
        },
        "configuration": {
            "label": "KISKA_fnc_setWaypointExecStatement",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [group1, true, true] call KISKA_fnc_showHide;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            heli,\n            someObject,\n            dropOff,\n            [\n                [heli],\n                {\n                    hint str [_this,_thisArgs]\n                }\n            ]\n        ] call KISKA_fnc_slingLoad;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            [\"myString_2\",\"myString_3\",\"myString_1_1\",\"myString_1\"]\n        ] call KISKA_fnc_sortStringsNumerically;\n        // returns -> `[\"myString_1\",\"myString_1_1\",\"myString_2\",\"myString_3\"]`\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _spawnedUnits = [2, 2, _arrayOfTypes, [[0,0,0],spawnObject]] call KISKA_fnc_spawn;\n    \n```"
                }
            ],
            "description": "Randomly spawns units on an array of positions.\n\nPositionATL is expected and arrays can have 4 indexes with a direction for theunit to face being the 4th. If no direction is specified, a random one is chosen.Using an object instead of a position will result in the unit facing the same waythat the object is.\n\nThis is destructive on the _spawnPositions array so be sure to copy (+_spawnPositions)if you need to reuse the array."
        },
        "configuration": {
            "label": "KISKA_fnc_spawn",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _spawnedGroup = [4, _listOfUnitTypes, OPFOR, [0,0,0], true] call KISKA_fnc_spawnGroup;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [player,0,\"someclass\"] call KISKA_fnc_spawnVehicle;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _signalId = [\n            [100,[0,0,0],100]\n        ] call KISKA_fnc_spectrum_addSignal;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"KISKA_spectrumSignal_2_1\"] call KISKA_fnc_spectrum_deleteSignal;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _max = call KISKA_fnc_spectrum_getMaxDecibels;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _max = call KISKA_fnc_spectrum_getMaxFrequency;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _min = call KISKA_fnc_spectrum_getMinDecibels;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _min = call KISKA_fnc_spectrum_getMinFrequency;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _selection = call KISKA_fnc_spectrum_getSelection;\n        // _selection params [\"_min\",\"_max\"];\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _signalMap = call KISKA_fnc_spectrum_getSignalMap;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _isInitialized = call KISKA_fnc_spectrum_isInitialized\n    \n```"
                }
            ],
            "description": "Determines whether the spectrum device display has been initialized.\n\nThis display will be created once a player has added the device to theirinventory. They do not have to equip the device."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_isInitialized",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _isTransmitting = call KISKA_fnc_spectrum_isTransmitting\n    \n```"
                }
            ],
            "description": "Checks whether or not the local machine is transimitting on the spectrum device.\n\nThis shows as a green tint to the player's selection area with the full spectrumdevice ui open, and as a wifi esque signal when merely holding the spectrum device."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_isTransmitting",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [-10] call KISKA_fnc_spectrum_setMaxDecibels;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [125] call KISKA_fnc_spectrum_setMaxFrequency;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [-60] call KISKA_fnc_spectrum_setMinDecibels;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [80] call KISKA_fnc_spectrum_setMinFrequency;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n\t\t// bar is 2 MHz wide\n        [2] call KISKA_fnc_spectrum_setSelectionWidth;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"KISKA_spectrumSignal_2_1\",-100] call KISKA_fnc_spectrum_setSignalDecibels;\n    \n```"
                }
            ],
            "description": "Sets the signal's decibel level.\n\nNOTE: If you intend to update more than one property of a signal, use\n `KISKA_fnc_spectrum_updateSignal` as it is more efficient."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_setSignalDecibels",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"KISKA_spectrumSignal_2_1\",1000] call KISKA_fnc_spectrum_setSignalDistance;\n    \n```"
                }
            ],
            "description": "Sets the signal's distance that it can be heard from.\n\nNOTE: If you intend to update more than one property of a signal, use\n `KISKA_fnc_spectrum_updateSignal` as it is more efficient."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_setSignalDistance",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"KISKA_spectrumSignal_2_1\",100] call KISKA_fnc_spectrum_setSignalFrequency;\n    \n```"
                }
            ],
            "description": "Sets the signal's frequency.\n\nNOTE: If you intend to update more than one property of a signal, use\n `KISKA_fnc_spectrum_updateSignal` as it is more efficient."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_setSignalFrequency",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"KISKA_spectrumSignal_2_1\",myOrigin] call KISKA_fnc_spectrum_setSignalPosition;\n    \n```"
                }
            ],
            "description": "Sets the signal's origin position.\n\nNOTE: If you intend to update more than one property of a signal, use\n `KISKA_fnc_spectrum_updateSignal` as it is more efficient."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_setSignalPosition",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [true] call KISKA_fnc_spectrum_setTransmitting;\n    \n```"
                }
            ],
            "description": "Adjusts whether or not the spectrum device is in transmit mode.\n\nThis shows as a green tint to the player's selection area with the full spectrumdevice ui open, and as a wifi esque signal when merely holding the spectrum device."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_setTransmitting",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _signalExists = [\"KISKA_spectrumSignal_2_1\"] call KISKA_fnc_spectrum_signalExists\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_spectrum_startSignalLoop;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // should use KISKA_fnc_spectrum_updateSignal for snyched updates\n        // but if you only want a subset of machines:\n        [\n            [\n                \"KISKA_spectrumSignal_2_1\",\n                100,\n                [0,0,0],\n                100\n            ],\n            false\n        ] remoteExecCall [\n            \"KISKA_fnc_spectrum_updateSignal\",\n            [3,4]\n        ];\n    \n```"
                },
                {
                    "text": "```sqf\n        // broadcast to all machines by default\n        [\n            [\n                \"KISKA_spectrumSignal_2_1\",\n                100,\n                [0,0,0],\n                100\n            ]\n        ] call KISKA_fnc_spectrum_updateSignal;\n    \n```"
                }
            ],
            "description": "Updates a signal's base properties for the local machine or creates it if itdid not exist prior. It is not recommended to directly create a signal with thisfunction. Rather use `KISKA_fnc_spectrum_addSignal`.\n\nWARNING, this function updats ALL base properties. Meaning if you intend toa single property, use the corresponding setter function. For example, to updatethe origin position only and not every signal property, use \n `KISKA_fnc_spectrum_setSignalPosition`."
        },
        "configuration": {
            "label": "KISKA_fnc_spectrum_updateSignal",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"name\",loadFile \"myXmlFile.xml\"] call KISKA_fnc_SR_addGrammarXml;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _return = [\"kiska_ext_sr_startrecording\"] call KISKA_fnc_SR_callExtension;\n    \n```"
                },
                {
                    "text": "```sqf\n        private _return = [\n            \"kiska_ext_sr_addgrammarxml\",\n            [\"my grammar\",\"...gramarxml\"]\n        ] call KISKA_fnc_SR_callExtension;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _started = call KISKA_fnc_SR_startRecording;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _stopped = call KISKA_fnc_SR_stopRecording;\n    \n```"
                }
            ],
            "description": "Manually stops KISKA's Speech Recognition extension from listening to the user'smicrophone.\n\nNOTE: Every complete recognition of a phrase after beginning a recording will automatically stop the extension from listening. The purpose of this function is to manually tell the extension you want to stop recording during the act of saying a phrase"
        },
        "configuration": {
            "label": "KISKA_fnc_SR_stopRecording",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            someGroup,\n            group player,\n            15,\n            {hint str _this},\n            {false}\n        ] spawn KISKA_fnc_stalk\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [plane,group] spawn KISKA_fnc_staticLine;\n    \n```"
                },
                {
                    "text": "```sqf\n        [plane,[group1,unit2]] spawn KISKA_fnc_staticLine;\n    \n```"
                }
            ],
            "description": "Ejects units from vehicle and deploys chutes, will select CUP T10 chute if available.\n\nCAUTION:All units from a group THAT ARE IN THE SAME AIRCRAFT should be droppedwith the same function call. Not doing so can see odd behaviour from the aircraft.\n\nThis is tied to KISKA_fnc_staticLine_eject and the use of the leaveVehiclecommand. If there are units from the same group still in the aircraft when it isexecuted, the aircraft will ignore all commands and attempt to pickup those unitsthat were dropped."
        },
        "configuration": {
            "label": "KISKA_fnc_staticLine",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [0] call KISKA_fnc_stopBattleSound;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [] spawn KISKA_fnc_stopMusic;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [0] call KISKA_fnc_radioChatter;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [0] call KISKA_fnc_stopRandom3dSoundLoop;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        _asString = [_someValue] call KISKA_fnc_str;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [[\"className1\",\"className2\"], 500, player] call KISKA_fnc_supplyDrop;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [position player] call KISKA_fnc_supplyDrop_aircraft;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        POST-INIT function\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"someClass\"] call KISKA_fnc_supportManager_addToPool;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"someClass\"] call KISKA_fnc_supportManager_addToPool_global;\n    \n```"
                }
            ],
            "description": "Adds an entry into the global support manager pool.\n\nTHIS FUNCTION HAS A GLOBAL EFFECT"
        },
        "configuration": {
            "label": "KISKA_fnc_supportManager_addToPool_global",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // called from config\n        [_this select 0] call KISKA_fnc_supportManager_onLoad;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_supportManager_openDialog;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [0] call KISKA_fnc_supportManager_removeFromPool;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [0] call KISKA_fnc_supportManager_removeFromPool_global;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_supportManager_store_buttonClickEvent;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_supportManager_take_buttonClickEvent;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_supportManager_updateCurrentList;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_supportManager_updatePoolList;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [0] call KISKA_fnc_supportNotification;\n    \n```"
                }
            ],
            "description": "Gives the player a sound or text notification that they called in a supportfrom the KISKA systems. Just used for feedback to know a call was placed.\n\nPlayers can adjust the notifcation settings in the CBA addon menu."
        },
        "configuration": {
            "label": "KISKA_fnc_supportNotification",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"artillery\"] call KISKA_fnc_supportRadio;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [_timelineEvents,\"KISKA_timeline_1\"] call KISKA_fnc_timeline_executeEvent\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _timelineMapForId = [\"KISKA_timeline_1\"] call KISKA_fnc_timeline_getInfoMap;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _isRunningMap = call KISKA_fnc_timeline_getIsRunningMap;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _mainTimelineMap = call KISKA_fnc_timeline_getMainMap;\n        private _timelineId = \"KISKA_timeline_1\";\n        private _timelineValues = _mainTimelineMap get _timelineId;\n        _timelineValues params [\"_timelineEvents\",\"_timelineMap\",\"_onTimelineStopped\"];\n    \n```"
                }
            ],
            "description": "The map that links a given timeline id to its info map. This is an internal functionthat you (likely) don't need to use except for altering timelines that have already started.\n See KISKA_fnc_timeline_getInfoMap to retrieve an info map for a given timeline."
        },
        "configuration": {
            "label": "KISKA_fnc_timeline_getMainMap",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _isRunning = [\"KISKA_timeline_1\",false] call KISKA_fnc_timeline_isRunning;\n    \n```"
                },
                {
                    "text": "```sqf\n        private _timelineIsNotComplete = [\"KISKA_timeline_1\",true] call KISKA_fnc_timeline_isRunning;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // internal function that should not be directly called\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        private _timeline = [\n            [\n                {\n                    hint \"executed event #1\";\n                    time + 3 // return/send to next and current wait condition\n                },\n                {\n                    params [\"\",\"\",\"_eventReturn\"];\n                    private _timeAfterWait = _eventReturn;\n                    time >= _timeAfterWait // wait until current time is more than time + 3\n                },\n            ],\n            [\n                {hint \"executed event #2 ~3 seconds after event 1 completed\"}, 2\n            ]\n        ];\n        private _timelineId = [_timeline,{hint \"timeline end\"}] call KISKA_fnc_timeline_start;\n    \n```"
                }
            ],
            "description": "Creates a timeline of events that can happen. Waits/executes in an unscheduledenvironment. \nThere is a non-trivial amount of overhead to this, however, sodo not use with the intention of needing precise events to happen but rather tonot clog the scheduler or use a decent interface with smaller units of code.\n\n\n```sqf\n        // A timeline is made up of events:\n        [\n            [], // event 1\n            [] // event 2\n        ]\n    \n```\n\n\n\n```sqf\n        // Each event is made up of code to execute when the event comes up in the timeline,\n        /// and what to wait for when executing the NEXT event in the timeline AFTER the \n        /// current event completes:\n        [\n            [\n                {\n                    hint \"executed event #1\"\n                },\n                3 // wait 3 seconds AFTER current event to execute event 2\n            ],\n            [\n                {\n                    hint \"executed event #2 3 seconds after event 1 completed\"\n                },\n                1 // wait 1 second to run _onTimelineStopped code\n            ]\n        ]\n    \n```\n\n\n\n```sqf\n        // Alternativeley, you can also wait for a condition before proceeeding to the next event:\n        private _endTime = time + 10;\n        [\n            [\n                {hint \"executed event #1\"},\n                3 // wait 3 seconds AFTER current event to execute event 1\n            ],\n            [\n                {hint \"executed event #2 3 seconds after event 1 completed\"},\n                [[_endTime],{\n                    _thisArgs params [\"_endTime\"];\n                    time >= (_endTime) // wait until current time is more than _endTime\n                }],\n                1 // check condition every second\n            ]\n        ]\n    \n```\n\n\n\n```sqf\n        // You can chain timeline events together by returning\n        [\n            [\n                {\n                    hint \"executed event #1\";\n                    time + 3 // return/send to the next event and current wait condition\n                },\n                {\n                    params [\"\",\"\",\"\",\"_eventReturn\"];\n                    private _timeAfterWait = _eventReturn;\n                    time >= _timeAfterWait // wait until current time is more than time + 3\n                },\n            ],\n            [\n                {hint \"executed event #2 ~3 seconds after event 1 completed\"}\n            ]\n        ]\n    \n```"
        },
        "configuration": {
            "label": "KISKA_fnc_timeline_start",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"KISKA_timeline_1\"] call KISKA_fnc_timeline_stop;\n    \n```"
                },
                {
                    "text": "```sqf\n        [\"KISKA_timeline_1\",{hint str [\"timeline stopped!\",_this]}] call KISKA_fnc_timeline_stop;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        PRE-INIT function\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"medic\"] call KISKA_fnc_traitManager_addToPool;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\"medic\"] call KISKA_fnc_traitManager_addToPool_global;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // called from config\n        [_this select 0] call KISKA_fnc_traitManager_onLoad;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        // called from config\n        [_display] spawn KISKA_fnc_traitManager_onLoad_traitPool;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_traitManager_openDialog;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [0] call KISKA_fnc_traitManager_removeFromPool;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [0] call KISKA_fnc_traitManager_removeFromPool_global;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_traitManager_store_buttonClickEvent;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_traitManager_take_buttonClickEvent;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_traitManager_updateCurrentList;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_traitManager_updatePoolList;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [_light,_flare] remoteExecCall [\"KISKA_fnc_updateFlareEffects\",0,_flare];\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        remoteExec [\"KISKA_fnc_updateRallyPointNotification\",somePlayer];\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [player,myMarker,myMarkerText] call KISKA_fnc_updateRespawnMarker;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_updateRespawnMarkerQuery;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        PRE-INIT function\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [controlsGroup,\"someName\"] call KISKA_fnc_VDL_controlsGroup_onLoad;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [display] call KISKA_fnc_VDL_onLoad;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        call KISKA_fnc_VDL_openDialog;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [player,(getPosATL player) vectorAdd [2,2,0],\"B_MRAP_01_F\"] spawn KISKA_fnc_vehicleFactory;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        Every 3 seconds, check\n        [45,3,500,1700,25,3000] spawn KISKA_fnc_viewDistanceLimiter;\n    \n```"
                }
            ],
            "description": "Starts a looping function for limiting a player's viewDistance.Loop can be stopped by setting mission variable \"KISKA_VDL_run\" to false.All other values have global vars that can be edited while it is in use.\n\nSee each param for associated global var."
        },
        "configuration": {
            "label": "KISKA_fnc_viewDistanceLimiter",
            "grammarType": "function"
        }
    },
    {
        "documentation": {
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [target_1,\"Sh_155mm_AMOS\"] spawn KISKA_fnc_virtualArty;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [VLS_1,target_1] call KISKA_fnc_vlsFireAt;\n    \n```"
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
            "syntaxes": [],
            "examples": [
                {
                    "text": "```sqf\n        [\n            {\n                true\n            },\n            {\n                hint \"wait\";\n            },\n            0.5,\n            [],\n            true\n        ] call KISKA_fnc_waitUntil;\n    \n```"
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