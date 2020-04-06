---
layout: post
---

# AMEC MANDO Message format

[ToC]

## AtoN Status Bits

The table below represents the recommended use of these bits.

| | 111 | XX | XX | X |
| :--: | :--: | :--: | :--: | :--: |
| Bit | 765 | 43 | 21 | 0|
| Name | Page ID| RACON Status | Light Status| Health Flag|

| Bit | Name | Description | MANDO| SensorBox|
| -- | :--: | -- | -- | -- |
| 765 | Page ID| 111(7), fixed value| | |
| 43 | RACON Status|00 = No RACON installed<br/>01 = RACON installed but not monitored<br/>10 = RACON operational<br/>11 = RACON Error| Not support| N/A|
| 21 | Light Status|00 = No light or no monitoring<br/>01 = Light ON<br/>10 = Light OFF<br/>11 = Light fail or reduced ragne| ADC4/Digital Input| N/A|
| 0| Health Flag|0 = Good health<br/>1 = Alarm| Auto| Auto|

These bits shall be employed as follows:

The first three bits shall be used to define a Page ID. The Page ID can range from 0 to 7, allowing 8 pages. The first page (page 0) is not used for the Regional/International application and is
defined as the default ‘not used’ condition in Recommendation ITU-R M.1371. Page 7 (binary 111) is defined above. Pages 1 to 6 are reserved for future use. The future use is envisaged as being
for monitoring of AtoN parameters such as voltages, currents, temperatures, etc.

Page 7 shall be implemented in all types of AIS AtoN Stations. The final 5 data bits are defined as
in the diagram above.

### Note

1. Manufacturer’s default setting for the eight AtoN Status bits of Message 21 should be all zeros.
2. One bit is used for alerting the competent authority that there is a problem at the AIS AtoN Station. This allows a competent authority to avoid using Message 6, if there is pressure on VDL slots, while still receiving some monitoring information every time Message 21 is sent by the AIS AtoN Station.
3. Health flag alarm should be set to 1 to indicate a fault in or failure of the AtoN system or AIS AtoN station, at this location. Further indication of the fault or failure detail can be achieved by use of additional pages within the eight AtoN Status bits, or addressed binary Message 6.
4. By using only page 7 there is no need to toggle through the messages, only Message Id 7 has to be read thus allowing an immediate filtering.
5. Main Light Status - For the main light, a fail is a situation where:
    1. The light is off when it should be on.
    2. The flash character is incorrect (e.g. an optic drive failure).
    3. The ‘Main light fail’ may be set if the main light is operating at a reduced range (e.g. running on emergency, lower range, lanterns).
6. Racon Status - For the Racon, a fail is a situation where the Racon unit signals a failure from an on-board built-in integrity test (BIIT). It may also signify a power failure for the Racon;
7. AtoN Alarm Flag:
    1. The AtoN Alarm flag is un-set when all the AtoN devices are working correctly and the mariner should be able to use the AtoN as expected.
    2. The AtoN Alarm flag is set when any AtoN device has a failure, or is not working as expected. For example, if a sector light has failed, this should set the flag. If either the Racon of the main light has failed (or operating at reduced range in the case of the light), then this will also set the flag as well as the correct bit settings in the racon / main light bits. This allows a very simple indication of a problem on the AtoN without needing to decode the rest of the bits (e.g. useful for charting software to provide a quick method of determining the status of the AtoN).
    3. The flag should not be set by failures that do not directly affect the use of the AtoN by the mariner. For example, a failure of the telemetry system should not be relayed to the mariner. Also, if the station’s batteries are running low, this should not set the AtoN Alarm flag (unless it causes a failure of an AtoN device).

## IALA A-126 GLA message format

| Parameter| No. of bits| Description| MANDO|
| -- | :--: | -- | -- |
|`Message Id`| 6 | Identifier for this message 6; always 6.| 6|
|`Repeat Indicator`| 2 | Used by the repeater to indicate how many times a message has been repeated. 0 – 3; default = 0; 3 = do not repeat any more.| 0|
|`Source ID`| 30| MMSI number of source Unit| Real AtoN station MMSI |
|`Sequence Number`| 2| 0 ~ 3| 0|
|`Destination ID`| 30| MMSI number of destination Unit.| Configuration via AID,D.|
|`Retransmit Flag`| 1| Retransmit Flag should be set upon retransmission:<br/>0 = no retransmission = default<br/>1 = retransmitted.| 0|
|`Spare`| 1| Not used. Should be zero.| 0|
|`DAC`| 10| Destination Area Code.<br/>Default: 235 (UK & NI) or 250 (ROI)| 235|
|`FI`| 6| Function Identifier<br/>Default: 10 for this GLA standard message | 10|
|`Analogue`| 10| 0.05– 36V 0.05V step Supply voltage to AIS Unit<br/>0 – Not Used| ADC1|
|`Analogue`| 10| 0.05– 36V 0.05V step Supply voltage to AIS Unit<br/>0 – Not Used| ADC2|
|`Analogue`| 10| 0.05– 36V 0.05V step Supply voltage to AIS Unit<br/>0 – Not Used| ADC3|
|`AtoN Status Bits`| 5| 4\ / 00 – no RACON installed; 01 – RACON not monitored<br/>3 / \ 10 – RACON operational; 11 – RACON ERROR<br/>2 \ / 00 – no light or no monitoring; 01 – Light ON<br/>1 / \ 10 – Light OFF; 11 – Light ERROR<br/>0 0 - Good Health, 1 - Alarm| Same as AIS message 21|
|`Status Bits`| 8| 7 Digital Input Off/On<br/>:<br/>:<br/>:<br/>0 Digital Input Off/On| Digital Input|
|`Off Position Satus`| 1| Off position or On position<br/>0: On position<br/>1: Off position| Same as AIS message 21|
|`Spare`| 4| For future use. Should be zero.| 0|
|Total of bits| 136 | Occupies 1 slot. | |

## Meteorological and Hydrographic data

| Parameter| No. of bits| NMEA0183 formatter| Notes|
| -- | -- | -- | -- |
|`Message Id`| 6| | |
|`Repeat Indicator`| 2| | |
|`Source ID`| 30| | |
|`Spare`| 2| | |
|`IAI`| 16| | |
|`Longitude`| 25| | |
|`Latitude`| 24| | |
|`Position Accuracy`| 1| | |
|`UTC Day`| 5| | |
|`UTC Hour`| 5| | |
|`UTC Minute`| 5| | |
|`Average Wind Speed`| 7| MWD wind speed output| The wind speed provided by the sensor is averaged over 10 minutes before transmit AIS message|
|`Wind Gust`| 7| MWD wind speed output| This value is the peak wind speed recorded during the previous 10 minute period|
|`Wind Direction`| 9| MWD wind speed output| The wind direction provided by the sensor is averaged over 10 minutes before transmit AIS message|
|`Wind Gust Direction`| 9| MWD wind direction output| The direction of the wind at the peak wind speed during the previous 10 minute period|
|`Air Temperature`| 11| MDA air temperature output| The air temperature provided by the sensor is averaged over 10 minutes before output|
|`Relative Humidity`| 7| | |
|`Dew Point`| 10| | |
|`Air Pressure`| 9| MDA barometric pressure output| The barometric pressure provided by the sensor is averaged over 10 minutes before output|
|`Air Pressure Tendency`| 2| MDA barometric pressure output| The air pressure is monitored over a 30 minute period and 'steady', 'increasing' or 'decreasing' tendency reported as appropriate|
|`Horizontal Visibility`| 8| | |
|`Water level (incl. tide)`| 12| | Water level averaged over the data reporting interval specified for this message.|
|`Water Level Trend`| 2| | |
|`Surface Current Speed (incl.tide)`| 8| | |
|`Surface Current Direction`| 9| | |
|`Current Speed, #2`| 8| | |
|`Current Direction, #2`| 9| | |
|`Current Measuring level, #2`| 5| | |
|`Current Speed, #3`| 8| | |
|`Current Direction, #3`| 9| | |
|`Current Measuring level, #3`| 5| | |
|`Significant Wave Height`| 8| | |
|`Wave Period`| 6| | |
|`Wave Direction`| 9| | |
|`Swell Height`| 8| | |
|`Swell Period`| 6| | |
|`Swell Direction`| 9| | |
|`Sea State`| 4| | |
|`Water Temperature`| 10| MTW, water temperature degrees C| Current temperature reported by the sensor|
|`Precipitation (type)`| 3| | |
|`Salinity`| 9| | |
|`Ice`| 2| | |
|`Spare`| 10| | |

## Meteorological and Hydrographic data (SRT)

| Parameter| No. of bits| Description| Note|
| -- | -- | -- | -- |
|`Message Id`| 6| | |
|`Repeat Indicator`| 2| | |
|`Source ID`| 30| | |
|`Spare`| 2| | |
|`IAI`| 16| | |
|`Longitude`| 25| | |
|`Latitude`| 24| | |
|`Position Accuracy`| 1| | |
|`UTC Day`| 5| | |
|`UTC Hour`| 5| | |
|`UTC Minute`| 5| | |
|`Average Wind Speed`| 7| `data[0]`| Airmar 150WX weather station WIMWD wind speed output|
|`Wind Gust`| 7| | Airmar 150WX weather station WIMWD wind speed output|
|`Wind Direction`| 9| | Airmar 150WX weather station WIMWD wind direction output|
|`Wind Gust Direction`| 9| |Airmar 150WX weather station WIMWD wind direction output |
|`Air Temperature`| 11| | Airmar 150WX weather station WIMDA air temperature output|
|`Relative Humidity`| 7| | |
|`Dew Point`| 10| | |
|`Air Pressure`| 9| | Airmar 150WX weather station WIMDA barometric pressure output|
|`Air Pressure Tendency`| 2| | Airmar 150WX weather station WIMDA barometric pressure output|
|`Horizontal Visibility`| 8| | |
|`Water level (incl. tide)`| 12| | IMPRESS S12C sensor water level|
|`Water Level Trend`| 2| | |
|`Surface Current Speed (incl.tide)`| 8| | |
|`Surface Current Direction`| 9| | |
|`Current Speed, #2`| 8| | |
|`Current Direction, #2`| 9| | |
|`Current Measuring level, #2`| 5| | |
|`Current Speed, #3`| 8| | |
|`Current Direction, #3`| 9| | |
|`Current Measuring level, #3`| 5| | |
|`Significant Wave Height`| 8| | |
|`Wave Period`| 6| | |
|`Wave Direction`| 9| | |
|`Swell Height`| 8| | |
|`Swell Period`| 6| | |
|`Swell Direction`| 9| | |
|`Sea State`| 4| | |
|`Water Temperature`| 10| | IMPRESS S12C sensor water temperature|
|`Precipitation (type)`| 3| | |
|`Salinity`| 9| | |
|`Ice`| 2| | |
|`Spare`| 10| | |
