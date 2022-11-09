#### Description:
Starts playing a random assortment of curated music tracks to all players on a server. This is essentially a multiplayer jukebox. Should only be executed on the server. All songs will be played in a random order and then loop back to play in another random order infinitely. It will not interrupt music commanded to play by other means. You can define quiet time space between tracks.

#### Parameters:
0: **_tickId** *(NUMBER)* - Used to superceed another random music loop, passs -1 to start a new one

1: **_musicTracks** *(ARRAY)* - An array of strings (music tracks) to use

2: **_interval** *(ARRAY or NUMBER)* - A random or set time between tracks.Formats are [min,mid,max] & [max] for random numbers andjust a single number for a set time between (see example)

3: **_usedMusicTracks** *(ARRAY)* - An array of already used music tracks, don't bother manually entering anyhting, this is for looping purposes

#### Returns:
NOTHING

#### Examples:
```sqf
// space tracks by 20 seconds exactly each
[-1,arrayOfTracks,20] call KISKA_fnc_randomMusic;
   ```
```sqf
// space tracks by UP TO 20 seconds each
[-1,arrayOfTracks,[20]] call KISKA_fnc_randomMusic;
   ```

