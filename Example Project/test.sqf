/* ----------------------------------------------------------------------------
Function: KISKA_fnc_convoy_onEachFrame

Description:
    Mananges an individual vehicle's position relative to the vehicle in front of
     it in a convoy. This function is what the statemachine runs each frame/vehicle.

    This function intentionally forgoes the use of several getter/setter functions 
     to reduce overhead because it runs every frame.

Parameters:
    _this <OBJECT> - A convoy vehicle to be processed during the current frame

Returns:
    NOTHING

Examples:
    (begin example)
        // SHOULD NOT BE CALLED DIRECTLY
    (end)

Author(s):
    Ansible2
---------------------------------------------------------------------------- */
scriptName "KISKA_fnc_convoy_onEachFrame";

#define MIN_VEHICLE_SPEED_LIMIT_MODIFIER 5
#define MIN_VEHICLE_SPEED_LIMIT 5
#define VEHICLE_SPEED_LIMIT_MULTIPLIER 2.5
#define SMALL_SPEED_LIMIT_DISTANCE_MODIFIER 1.25
#define LEAD_VEHICLE_MAX_SPEED_TO_HALT_FOLLOW 2
#define VEHICLE_SHOULD_CATCH_UP_DISTANCE 100
#define SPEED_DIFFERENTIAL_LIMIT 20
#define MIN_CONVOY_SEPERATION 10
#define CONVOY_LEAD_MIN_RECORD_SPEED 5
#define CONVOY_LEAD_MAX_RECORD_SPEED 20

private _currentVehicle = _this;
private _convoyHashMap = _currentVehicle getVariable "KISKA_convoy_hashMap";
private _convoyLead = _convoyHashMap getOrDefault [0,objNull];


/* ----------------------------------------------------------------------------
    Exit states
---------------------------------------------------------------------------- */
if (isNull _convoyLead) exitWith {
    [_convoyHashMap] call KISKA_fnc_convoy_delete;
};


if !(canMove _currentVehicle) exitWith {
    private _cantMoveEventHandler = _currentVehicle getVariable [
        "KISKA_convoy_handleVehicleCantMove",
        KISKA_fnc_convoy_handleVehicleCantMove_default
    ];

    [
        _currentVehicle,
        _convoyHashMap,
        _convoyLead
    ] call _cantMoveEventHandler;
};

// did not use an eventhandler due to the complexity of handling
// potentially remote units and/or changing drivers
// and the limited cost of this check
private _currentVehicle_driver = driver _currentVehicle;
if !(alive _currentVehicle_driver) exitWith {
    private _deadDriverBeingHandled = _currentVehicle getVariable ["KISKA_convoy_deadDriverBeingHandled",false];
    if (_deadDriverBeingHandled) exitWith {};

    _currentVehicle setVariable ["KISKA_convoy_deadDriverBeingHandled",true];
    
    private _driverKilledHandler = _currentVehicle getVariable [
        "KISKA_convoy_handleDeadDriver",
        KISKA_fnc_convoy_handleDeadDriver_default
    ];

    [
        _currentVehicle,
        _convoyHashMap,
        _convoyLead,
        _currentVehicle_driver
    ] call _driverKilledHandler;
};	

if ((lifeState _currentVehicle_driver) == "INCAPACITATED") exitWith {
    private _currentUnconsciousDriver = _currentVehicle getVariable "KISKA_convoy_currentUnconsciousDriver";
    if (!isNil "_currentUnconsciousDriver" AND {_currentUnconsciousDriver isEqualTo _currentVehicle_driver}) exitWith {};
    
    _currentVehicle setVariable ["KISKA_convoy_currentUnconsciousDriver",_currentVehicle_driver];
    private _driverIncapcitatedEventHandler = _currentVehicle getVariable [
        "KISKA_convoy_handleUnconsciousDriver",
        KISKA_fnc_convoy_handleUnconsciousDriver_default
    ];

    [
        _currentVehicle,
        _convoyHashMap,
        _convoyLead,
        _currentVehicle_driver
    ] call _driverIncapcitatedEventHandler;
};


/* ----------------------------------------------------------------------------
    Handle Convoy Lead Vehicle
---------------------------------------------------------------------------- */
private _speedLimitMap = _convoyHashMap get "_speedLimitPoints";
if (_currentVehicle isEqualTo _convoyLead) exitWith {
    private _convoyLead_currentPosition_ATL = getPosATLVisual _convoyLead;
    // getOrDefaultCall is slightly faster than getOrDefault for this
    private _latestPointOnPath = _convoyHashMap getOrDefaultCall ["_latestPointOnPath",{[0,0,0]}];
   
    private _distanceBetweenPoints = _convoyLead_currentPosition_ATL vectorDistance _latestPointOnPath;
    private _minBufferBetweenPoints = _convoyHashMap get "_minBufferBetweenPoints";
    if (_distanceBetweenPoints <= _minBufferBetweenPoints) exitWith {};

    private _convoyLeadSpeed = speed _convoyLead;
    if (
        (_convoyLeadSpeed < CONVOY_LEAD_MAX_RECORD_SPEED) AND 
        (_convoyLeadSpeed > CONVOY_LEAD_MIN_RECORD_SPEED)
    ) then {
        _speedLimitMap set [_convoyLead_currentPosition_ATL, _convoyLeadSpeed];
    };

    (_convoyHashMap get "_convoyPath") pushBack _convoyLead_currentPosition_ATL;
    _convoyHashMap set ["_latestPointOnPath",_convoyLead_currentPosition_ATL];
};


/* ----------------------------------------------------------------------------
    Handle speed
---------------------------------------------------------------------------- */
private _currentVehicle_drivePath = _currentVehicle getVariable "KISKA_convoy_drivePath";
private _currentPointSpeedLimit = _speedLimitMap getOrDefaultCall [_currentVehicle_drivePath param [0,-1],{-1}];
private _debug = _currentVehicle getVariable ["KISKA_convoy_debug",false];

private _driverIsAI = !(isPlayer _currentVehicle_driver);
if (_driverIsAI) then {

    private _currentVehicle_index = _currentVehicle getVariable "KISKA_convoy_index";
    private _vehicleAhead = _convoyHashMap get (_currentVehicle_index - 1);

    private _currentVehicle_frontBumperPosition = [_currentVehicle,false] call KISKA_fnc_convoy_getBumperPosition;
    private _vehicleAhead_rearBumperPosition = [_vehicleAhead,true] call KISKA_fnc_convoy_getBumperPosition;
    private _distanceBetweenVehicles = _currentVehicle_frontBumperPosition vectorDistance _vehicleAhead_rearBumperPosition;

    private _vehicleAhead_speed = speed _vehicleAhead;
    private _currentVehicle_seperation = (_currentVehicle getVariable ["KISKA_convoy_seperation",20]) max MIN_CONVOY_SEPERATION;
    private _vehiclesAreWithinBoundary = _distanceBetweenVehicles < _currentVehicle_seperation;

    private _currentVehicle_isStopped = _currentVehicle getVariable ["KISKA_convoy_isStopped",false];
    private _vehicleAhead_isStopped = _vehicleAhead_speed <= LEAD_VEHICLE_MAX_SPEED_TO_HALT_FOLLOW;
    private _currentVehicle_shouldBeStopped = _vehicleAhead_isStopped AND _vehiclesAreWithinBoundary;

    if (_currentVehicle_shouldBeStopped AND (!_currentVehicle_isStopped)) exitWith {
        if (_debug) then {
            private _currentVehicle_speed = speed _currentVehicle;
            hint str ["In Halt",_currentVehicle_speed,_distanceBetweenVehicles];
        };

        _currentVehicle setVariable ["KISKA_convoy_isStopped",true];
        [_currentVehicle] call KISKA_fnc_convoy_stopVehicle;
    };


    if ((!_currentVehicle_shouldBeStopped) AND _currentVehicle_isStopped) then {
        _currentVehicle setVariable ["KISKA_convoy_isStopped",false];
        if !(_currentVehicle_driver checkAIFeature "path") then {
            _currentVehicle_driver enableAI "path";
        };
    };

    /* ---------------------------------
        Force speed based on distance
    --------------------------------- */
    private _currentVehicle_speed = speed _currentVehicle;
    private "_debugText";
    private _speedLimit = -1;
    if (_vehiclesAreWithinBoundary) then {
        private _modifier = (
            (_currentVehicle_seperation - _distanceBetweenVehicles) * VEHICLE_SPEED_LIMIT_MULTIPLIER
        ) max MIN_VEHICLE_SPEED_LIMIT_MODIFIER;

        _speedLimit = (_vehicleAhead_speed - _modifier) max MIN_VEHICLE_SPEED_LIMIT;
        
        if (_debug) then {
            _debugText = parseText format [
                "Limited Vehicle Speed
                <br/>
                <t align='left'>Within seperation boundary</t>
                <br/>
                <t align='left'>Distance To Vehicle In Front: %1</t>
                <br/>
                <t align='left'>Current Vehicle Speed: %2</t>
                <br/>
                <t align='left'>Speed Limited To: %3</t>",
                _distanceBetweenVehicles,
                _currentVehicle_speed,
                _speedLimit
            ];
        };

    } else {
        private _distanceToLimitToVehicleAheadSpeed = _currentVehicle_seperation * SMALL_SPEED_LIMIT_DISTANCE_MODIFIER;
        if (_distanceBetweenVehicles < _distanceToLimitToVehicleAheadSpeed) exitWith {
            _speedLimit = [_vehicleAhead_speed,5] select _vehicleAhead_isStopped;

            if (_debug) then {
                _debugText = parseText format [
                    "Limited Vehicle Speed To Vehicle Ahead
                    <br/>
                    <t align='left'>Vehicle outside of convoy seperation</t>
                    <br/>
                    <t align='left'>Distance To Vehicle In Front: %1</t>
                    <br/>
                    <t align='left'>Speed Limited To: %2</t>",
                    _distanceBetweenVehicles,
                    _speedLimit
                ];
            };
        };

        if ((_distanceBetweenVehicles > VEHICLE_SHOULD_CATCH_UP_DISTANCE) AND _debug) exitWith { 
            _debugText = parseText format [
                "Unlimited Vehicle Speed
                <br/>
                <t align='left'>Outside of handle distance (%2)</t>
                <br/>
                <t align='left'>Distance To Vehicle In Front: %1</t>",
                _distanceBetweenVehicles,
                VEHICLE_SHOULD_CATCH_UP_DISTANCE
            ];
        };
        
        private _speedDifferential = abs (_currentVehicle_speed - _vehicleAhead_speed);
        if (_speedDifferential > SPEED_DIFFERENTIAL_LIMIT) exitWith {
            _speedLimit = _distanceBetweenVehicles;
            
            if (_debug) then {
                _debugText = parseText format [
                    "Limited Speed Based On Differential
                    <br/>
                    <t align='left'>Vehicle Speed: %1</t>
                    <br/>
                    <t align='left'>Distance To Vehicle In Front: %2</t>",
                    _currentVehicle_speed,
                    _distanceBetweenVehicles
                ];
            };
        };
        
        if (_debug) then {
            _debugText = parseText format [
                "Unlimited Vehicle Speed
                <br/>
                <t align='left'>Met no handle conditions</t>
                <br/>
                <t align='left'>Distance To Vehicle In Front: %1</t>",
                _distanceBetweenVehicles
            ];
        };
    };


    if (
        (_currentPointSpeedLimit isNotEqualTo -1) AND 
        (_speedLimit > _currentPointSpeedLimit)
    ) then {
        _speedLimit = _currentPointSpeedLimit;

        if (_debug) then {
            _debugText = parseText format [
                "Limited Vehicle Speed
                <br/>
                <t align='left'>Low Lead Vehicle Speed At Point</t>
                <br/>
                <t align='left'>Speed Limited To: %1</t>",
                _currentPointSpeedLimit
            ];
        };
    };


    if (_debug) then { hint _debugText };

    _currentVehicle limitSpeed _speedLimit;
};




/* ----------------------------------------------------------------------------
    Delete old points
---------------------------------------------------------------------------- */
private ["_currentVehicle_debugDrivePathObjects","_currentVehicle_debugDeletedDrivePathObjects"];
if (_debug) then {
    _currentVehicle_debugDrivePathObjects = _currentVehicle getVariable "KISKA_convoy_debug_followPathObjects";
    _currentVehicle_debugDeletedDrivePathObjects = _currentVehicle getVariable "KISKA_convoy_debug_followedPathObjects";
};

private _deleteStartIndex = -1;
private _numberToDelete = 0;
// getting by ASL (instead of getPosVisual) and then converting to AGL is more accurate, don't know why
private _currentVehicle_position_ASL = getPosASLVisual _currentVehicle;
private _offset = _currentVehicle getVariable "KISKA_convoy_vehicleAreaOffset";
private _currentVehicle_position_AGL = ASLToAGL _currentVehicle_position_ASL;
private _currentVehicle_direction = getDirVisual _currentVehicle;
private _area = _currentVehicle getVariable "KISKA_convoy_vehicleCompletionArea";
_area set [0,_currentVehicle_position_AGL vectorDiff (_currentVehicle vectorModelToWorldVisual _offset)];
_area set [3,_currentVehicle_direction];
{
    // some points can include speed limit
    // NOTE/TODO: it might be worth increasing the width/area in general as speed increases.
    // Higher speed likely means that the probability of missing a point is higher

    private _pointReached = _x inArea _area;

    if !(_pointReached) then { break };
    _numberToDelete = _numberToDelete + 1;

    private _deleteStartIndexDefined = _deleteStartIndex isNotEqualTo -1;
    if (_deleteStartIndexDefined) then { continue };
    _deleteStartIndex = _forEachIndex;

} forEach _currentVehicle_drivePath;

private _pointsCanBeDeleted = (_deleteStartIndex >= 0) AND (_numberToDelete > 0);
if (_pointsCanBeDeleted) then {
    _currentVehicle_drivePath deleteRange [_deleteStartIndex,_numberToDelete];

    if (_debug) then {
        private _lastIndexToDelete = _deleteStartIndex + (_numberToDelete - 1);
        private _debugObjectType = _currentVehicle getVariable [
            "KISKA_convoy_debugMarkerType_followedPath",
            "Sign_Arrow_Large_blue_F"
        ];
        private _deletedPointMarker = createVehicle [_debugObjectType, _currentVehicle_position_AGL, [], 0, "CAN_COLLIDE"];
        _currentVehicle_debugDeletedDrivePathObjects pushBack _deletedPointMarker;

        for "_i" from _deleteStartIndex to _lastIndexToDelete do { 
            deleteVehicle (_currentVehicle_debugDrivePathObjects select _i);
        };
        _currentVehicle_debugDrivePathObjects deleteRange [_deleteStartIndex,_numberToDelete];
    };
};


/* ----------------------------------------------------------------------------
    Update current vehicle drive path with new point
---------------------------------------------------------------------------- */
private _pointToAdd = _convoyHashMap get "_latestPointOnPath";
private _lastAddedPoint = _currentVehicle getVariable "KISKA_convoy_lastAddedPoint";
if (_lastAddedPoint isEqualTo _pointToAdd) exitWith {};


_currentVehicle setVariable ["KISKA_convoy_lastAddedPoint",_pointToAdd];

if (_debug) then {
    private _debugObjectType = _currentVehicle getVariable [
        "KISKA_convoy_debugMarkerType_followPath",
        "Sign_Arrow_Large_Cyan_F"
    ];

    // speed limit added to drive path point
    private _debugObject = createVehicle [_debugObjectType, _pointToAdd, [], 0, "CAN_COLLIDE"];
    _currentVehicle_debugDrivePathObjects pushBack _debugObject;
};

private _indexInserted = _currentVehicle_drivePath pushBack _pointToAdd;
private _doDriveOnPath = _currentVehicle getVariable ["KISKA_convoy_doDriveOnPath",true];
if (_driverIsAI AND {(_indexInserted >= 1) AND _doDriveOnPath}) then {
    _currentVehicle setDriveOnPath _currentVehicle_drivePath;
};

