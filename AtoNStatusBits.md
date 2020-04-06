---
layout: post
---
# AtoN Status Bits

The table below represents the recommended use of these bits.

| | 111 | XX | XX | X |
| :--: | :--: | :--: | :--: | :--: |
| Bit | 765 | 43 | 21 | 0|
| Name | Page ID| RACON Status | Light Status| Health Flag|

<br>

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
