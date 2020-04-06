---
layout: post
---

# I/O interface

The following table description MANDO interface.

| Connecor | Type| Description|
| :--: | :--: | -- |
| Power| 3-pin| power input
| VHF | SO-239(female)| connect to VHF antenna|
| GPS | TNC| connect to GPS antenna|
| CON1 | 12-pin| See below table for detail|
| CON2 | 8-pin| See below table for detail|

---

## CON1 Connector

| Pin| Color| Definition| I/O| Description|
| :--: | :--: |-- | :--: | -- |
| 1| Brown| RS232_TX| O| Communication interface (NMEA0183 sentence)|
| 2| Blue| GND| -| Ground (RS-232)|
| 3| White| 1_PPS| O| 1 PPS (1 pulse per second output from built-in GPS module)|
| 4| Green| GND| -| Ground (GPS_1PPS)|
| 5| Yellow| ADC4| I| Analog to Digital input 4 (0~36 V)|
| 6| Gray| ADC3| I| Analog to Digital input 4 (0~36 V)|
| 7| Pink| ADC2| I| Analog to Digital input 4 (0~36 V)|
| 8| Red| ADC1| I| Analog to Digital input 4 (0~36 V)|
| 9| Black| RS232_RX| I| Communication interface (NMEA0183 sentence)|
| 10| Orange| GND| - | Ground (ADC)|
| 11| Purple| - | - | Reserved|
| 12| Light Green| - | - | Reserved|

---

## CON2 Connector

| Pin| Color| Definition| I/O| Description|
| :--: | :--: |-- | :--: | -- |
| 1| Black| RS232_RX| I| Configuration interface (NMEA0183 sentence)|
| 2| Brown| RS232_TX| O| Configuration interface (NMEA0183 sentence)|
| 3| White| GND| - | Ground (RS-232)|
| 4| Blue| DO_NO| -| Digital-out Normal Open|
| 5| Red| DO_NC| -| Digital-out Normal Close|
| 6| Oragne| DO_COMM| -| Digital-out Common|
| 7| Yellow| DI_RTN| I| Digital-in return|
| 8| Green| DI| I| Digital-in (5~36 V)|
