---
layout: post
---

# IALA A-126 GLA message format

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
|`Status Bits`| 8| bit[7] Digital Input Off/On<br/>bit[6] Digital Input Off/On<br/>bit[5] Digital Input Off/On<br/>bit[4] Digital Input Off/On<br/>bit[3] Digital Input Off/On<br/>bit[2] Digital Input Off/On<br/>bit[1] Digital Input Off/On<br/>bit[0] Digital Input Off/On| N/A<br/>N/A<br/>N/A<br/>N/A<br/>N/A<br/>N/A<br/>N/A<br/>Digital Input|
|`Off Position Satus`| 1| Off position or On position<br/>0: On position<br/>1: Off position| Same as AIS message 21|
|`Spare`| 4| For future use. Should be zero.| 0|
|Total of bits| 136 | Occupies 1 slot. | -|
