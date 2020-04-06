# SB305

## GLA and SB305 interface mapping table

| Parameter | Number of bits | Description | SB305 Interface| XDR ID |
| -- | :--: |-- | -- | -- |
| Message ID | 6 | Identifier for this message 6; always 6.|  |
| Repeat Indicator | 2 | Used by the repeater to indicate how many times a message has been repeated.<br/>0 – 3;<br/>default = 0;<br/>3 = do not repeat any more. |  |
| Source ID | 30 | MMSI number of source Unit|  |
| Sequence Number | 2 | 0 – 3 |  |
| Destination ID | 30 | MMSI number of destination Unit.|  |
| Retransmit Flag | 1 | Retransmit Flag should be set upon retransmission:<br/>0 = no retransmission = default<br/>1 = retransmitted.|  |
| Spare | 1 | Not used. Should be zero.| |
| DAC | 10 | Destination Area Code.Default: 235 |  |
| FI | 6 | Function Identifier Default: 10 for this GLA standard message|  |
| Analogue #1| 10 | 0.05– 36V 0.05V step Supply voltage to AIS Unit<br/>0 – Not Used| isolated analogue input #1 | Converter#0 |
| Analogue #2| 10 | 0.05 – 36V 0.05V step<br/>0 – Not Used | isolated analogue input #2 | Converter#1 |
| Analogue #3| 10 | 0.05 – 36V 0.05V step<br/>0 – Not Used| non-isolated analogue input #1 | Converter#2 |
| Status Bits 0 / 1<br/>(same as the 5 LSBs of status bits from Message type 21)| 5 | 4 \ / 00 – no RACON installed; 01 – RACON not monitored<br/>3 / \ 10 – RACON operational; 11 – RACON ERROR<br/>2 \ / 00 – no light or no monitoring; 01 – Light ON<br/>1 / \ 10 – Light OFF; 11 – Light ERROR<br/>0 0 - Good Health, 1 - Alarm| | 
| Status Bits 0 / 1 | 8 |7 Digital Input Off/ / On<br/>:<br/>:<br/>0 Digital Input Off/ / On| Isolate digital input| Switch#1<br/>Switch#2<br/>Switch#3<br/>Switch#4<br/>Switch#5<br/>Switch#6<br/>Switch#7<br/>Switch#8<br/>  |
| Off Position Status | 1 | Off position or On position<br/>0: On position<br/>1: Off position ||
| Spare | 4 | For future use. Should be zero.| |
| TOTAL OF BITS. | 136 | Occupies 1 slot.| |

## Reference

IALA A-126 Edition 1.5 2011
https://www.iala-aism.org/product/use-of-the-ais-in-marine-aids-to-navigation-service-126/
