#### Description:
Deletes a signal with the given id.

#### Parameters:
0: **_id** : *(STRING)* - The id of the signal to remove

1: **_global** : *(BOOL)* - `true` to broadcast the change to all machines including JIP (default: `true`)

#### Returns:
NOTHING

#### Examples:
```sqf
["KISKA_spectrumSignal_2_1"] call KISKA_fnc_spectrum_deleteSignal;
```

