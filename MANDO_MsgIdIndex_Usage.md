---
layout: post
---

# Message ID Index Usage

This document descript AMEC MANDO message ID and message ID index usage.

|ID|Index|Name|Description|
| :--: | :--: | -- | -- |
| 6| 1| ABM|Scheduling setting for ABM(Addressed Binary Message).<br>The format of ABM is defined in NMEA0183.|
| 6| 2| GLA|Scheduling setting for GLA message format, define by IALA A-126 document.|
| ~~6~~| ~~3~~| ~~ShanHai Msg~~|~~Scheduling setting for Shang Hai message format.~~|
| 6| 6| Lantern status|Scheduling setting for lantern status report.|
| 8| 1| BBM|Scheduling setting for BBM(Broadcast Binary Message).<br>The format of BBM is defined in NMEA0183.|
| 8| 3| Metero/Hydro|Scheduling setting for IMO SN.1/Circ.289 (2010/01/02).<br>Meteorological and hydrographic data format.|
| 12| 1| ABM|Scheduling setting for ABM(Addressed Binary Message).<br>The format of ABM is defined in NMEA0183.|
| 12| 2| off-position SRM|Scheduling setting for off position alarm message.<br>Content for message 12 requires configuration at the Auxiliary tab.|
| 14| 1| BBM|Scheduling setting for BBM(Broadcast Binary Message).<br>The format of BBM is defined in NMEA0183.|
| 14| 2| off-position SRM| Scheduling setting for off position alarm message.<br>Content for message 12 requires configuration at the Auxiliary tab.|
| 21| 0| On position| AtoN position report|
| 21| 1| Off position| AtoN position report|
| 0| 0| Chaining| For chaining|
