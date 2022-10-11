Returns what surface type is at the given position. For surface texture see `surfaceTexture` command.<br>
<br>

<spoiler text="Show surface types (Armed Assault)">
* #GRASSSOUTH
* #GRASSGENERAL
* #SANDGENERAL
</spoiler>
<spoiler text="Show surface types (Arma 2)">
* #UTGRASS - for natural surfaces
* #UTCONCRETE - for urban surfaces
</spoiler>
<spoiler text="Show surface types (Arma 3)">
{{Columns|4|
* BuildingRubble
* BuildingRubble_exp
* cardboard
* cardboard_exp
* carpet
* carpet_exp
* carpet_inside
* carpet_in_exp
* concrete
* concrete_exp
* concrete_hall
* concrete_hall_exp
* concrete_inside
* concrete_in_exp
* concrete_out
* Default
* dirtrunway
* floor
* floor_exp
* floor_inside
* floor_in_exp
* GdtAsphalt
* GdtBeach
* GdtCliff
* GdtConcrete
* GdtDead
* GdtDesert
* GdtDirt
* GdtField
* GdtForest
* GdtForestMalden
* GdtForestPine
* GdtGrassDry
* GdtGrassGreen
* GdtGrassLong
* GdtGrassShort
* GdtGrassTall
* GdtGrassWild
* GdtKLCobblestone
* GdtKLDirt
* GdtKlField
* GdtKLForestCon
* GdtKLForestDec
* GdtKLGrass1
* GdtKLGrass2
* GdtKlSoil
* GdtKlStubble
* GdtKlTarmac
* GdtKlWeatheredTarmac
* GdtMarsh
* GdtMud
* GdtRedDirt
* GdtRock
* GdtRubble
* GdtSeabed
* GdtSeabedExp
* GdtSoil
* GdtStony
* GdtStonyThistle
* GdtStratisBeach
* GdtStratisConcrete
* GdtStratisDirt
* GdtStratisDryGrass
* GdtStratisForestPine
* GdtStratisGreenGrass
* GdtStratisRocky
* GdtStratisSeabed
* GdtStratisSeabedCluttered
* GdtStratisThistles
* GdtThorn
* GdtVolcano
* GdtVolcanoBeach
* GdtVRsurface01
* GdtWeed
* GdtWildField
* grid
* grid_exp
* lino
* lino_exp
* lino_in_exp
* mat_in_exp
* metalPlate
* metalPlatePressed_exp
* metalPlate_exp
* metalPlate_in_exp
* mud
* mud_exp
* parquet
* planks
* planks_exp
* planks_inside
* planks_in_exp
* road
* road_exp
* roof_tiles_exp
* rubble
* rubble_exp
* sand
* sand_exp
* softwood_in_exp
* steel
* steel_exp
* stones
* stones_exp
* straw_exp
* SurfIntConcrete
* SurfIntMetal
* SurfIntTiles
* SurfIntWood
* surfint_concrete
* surfint_metal
* surfint_tiles
* surfint_wood
* SurfMetal
* SurfRoadConcrete
* SurfRoadConcrete_exp
* SurfRoadDirt
* SurfRoadDirt_Enoch
* SurfRoadDirt_exp
* SurfRoadTarmac
* SurfRoadTarmac1_Enoch
* SurfRoadTarmac2_Enoch
* SurfRoadTarmac3_Enoch
* SurfRoadTarmac_exp
* SurfRoofTiles
* SurfRoofTin
* SurfTrailDirt_Enoch
* SurfTrailDirt_exp
* SurfWater
* SurfWood
* surf_metal
* surf_roadconcrete
* surf_roaddirt
* surf_roadtarmac
* surf_rooftiles
* surf_rooftin
* surf_wood
* TEST_SurfNormal
* tiling
* trash
* trash_exp
* Water
* wavyMetal
* wavyMetal_exp
* woodenFloor


---
*Example 1:*
```sqf
private _surface = surfaceType [4500, 4500];
```

*Example 2:*
```sqf
hint surfaceType position player;
```