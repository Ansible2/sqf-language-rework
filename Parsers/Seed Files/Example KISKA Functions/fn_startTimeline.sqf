/* ----------------------------------------------------------------------------
Function: KISKA_fnc_startTimeline

Description:
    Creates a timeline of events that can happen. Waits/executes in an unscheduled
     environment. 
    
    There is a non-trivial amount of overhead to this, however, so
     do not use with the intention of needing precise events to happen but rather to
     not clog the scheduler or use a decent interface with smaller units of code.

    (begin example)
        // A timeline is made up of events:
        [
            [], // event 1
            [] // event 2
        ]
    (end)

    (begin example)
        // Each event is made up of code to execute when the event comes up in the timeline,
        /// and what to wait for when executing the NEXT event in the timeline AFTER the 
        /// current event completes:
        [
            [
                {
                    hint "executed event #1"
                },
                3 // wait 3 seconds AFTER current event to execute event 2
            ],
            [
                {
                    hint "executed event #2 3 seconds after event 1 completed"
                },
                1 // wait 1 second to run _onTimelineStopped code
            ]
        ]
    (end)
    
    (begin example)
        // Alternativeley, you can also wait for a condition before proceeeding to the next event:
        private _endTime = time + 10;
        [
            [
                {hint "executed event #1"},
                3 // wait 3 seconds AFTER current event to execute event 1
            ],
            [
                {hint "executed event #2 3 seconds after event 1 completed"},
                [[_endTime],{
                    _thisArgs params ["_endTime"];
                    time >= (_endTime) // wait until current time is more than _endTime
                }],
                1 // check condition every second
            ]
        ]
    (end)

    (begin example)
        // You can chain timeline events together by returning
        [
            [
                {
                    hint "executed event #1";
                    time + 3 // return/send to the next event and current wait condition
                },
                {
                    params ["","","","_eventReturn"];
                    private _timeAfterWait = _eventReturn;
                    time >= _timeAfterWait // wait until current time is more than time + 3
                },
            ],
            [
                {hint "executed event #2 ~3 seconds after event 1 completed"}
            ]
        ]
    (end)

Parameters:
    0: _timeline <ARRAY> - An array of timeline events that will happen. 
        See description above for formats
    1: _onTimelineStopped <CODE, STRING, or ARRAY> - (see KISKA_fnc_callBack),
        code that will be executed once a timeline is stopped. 
            
            Parameters:
            - 0: <ARRAY> - The timeline array in the state when the stoppage actually happens.
            - 1: <HASHMAP> - The Individual map defined for a specific timeline of the given ID

Returns:
    <NUMBER> - The id of the new timeline

Examples:
    (begin example)
        private _timeline = [
            [
                {
                    hint "executed event #1";
                    time + 3 // return/send to next and current wait condition
                },
                {
                    params ["","","_eventReturn"];
                    private _timeAfterWait = _eventReturn;
                    time >= _timeAfterWait // wait until current time is more than time + 3
                },
            ],
            [
                {hint "executed event #2 ~3 seconds after event 1 completed"}, 2
            ]
        ];
        private _timelineId = [_timeline,{hint "timeline end"}] call KISKA_fnc_startTimeline;
    (end)

Author(s):
    Ansible2
---------------------------------------------------------------------------- */
scriptName "KISKA_fnc_startTimeline";

params [
    ["_timeline",[],[[]]],
    ["_onTimelineStopped",{},[[],{},""]]
];

if (_timeline isEqualTo []) exitWith {
    ["Empty _timeline provided"] call KISKA_fnc_log;
    nil
};

private _timelineId = ["KISKA_timelines"] call KISKA_fnc_idCounter;
localNamespace setVariable ["KISKA_timelineIsRunning_" + (str _timelineId),true];

private _overallTimelineMap = call KISKA_fnc_getOverallTimelineMap;
private _timelineHashmap = createHashMap;
private _timelineValues = [_timeline,_timelineHashmap];
if (_onTimelineStopped isNotEqualTo {}) then {
    _timelineValues pushBack _onTimelineStopped;
};

_overallTimelineMap set [_timelineId,_timelineValues];

[
    _timeline,
    _timelineId,
    _timelineHashmap
] call KISKA_fnc_executeTimelineEvent;


_timelineId
