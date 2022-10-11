Set the custom radio channel's call sign. 

Available special parameters:
* $KEY (reference to a localized text)
* %CHANNEL_LABEL
* %UNIT_SIDE
* %UNIT_NAME
* %UNIT_RANK
* %UNIT_ID
* %UNIT_REF
* %UNIT_GRP_NAME
* %UNIT_GRP_LEADER
* %UNIT_VEH_NAME
* %UNIT_VEH_POSITION


---
*Example 1:*
```sqf
4 radioChannelSetCallSign "%UNIT_NAME";
```