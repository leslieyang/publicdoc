###### tags: `webdoc`

# Assignment and use of identities in the maritime mobile service

[ToC]

## MMSI

maritime mobile service identities (MMSI)

## Usage

| MMSI | Applications | |
| -- | -- | -- |
| `00MID1XXX`| Coast radio stations| coast station|
| `00MID2XXX`| Harbour radio stations| coast station|
| `00MID3XXX`| Pilot stations, etc.| coast station|
| `00MID4XXX`| AIS repeater stations| coast station|
| `0MIDXXXXX`| Group ship station call identities for calling simultaneously more than one ship are formed as follows|
| `111MID1XX`| Fixed-wing aircraft| aircraft (SAR)|
| `111MID5XX`| Helicopters| aircraft (SAR)|
| `MIDXXXXXX`| ships| ship station|
| `8MIDXXXXX`| | handheld VHF transceivers with digital selective calling and global navigation satellite system|
| `970XXYYYY`| AIS-SART (*1)| Automatic identification system-search and rescue transmitter|
| `972XXXXXX`| MOB(*1)| Man overboard|
| `974XXXXXX`| EPIRB-AIS(*1)| Emergency position indicating radio beacon-automatic identification syste|
| `98MIDXXXX`| | craft associated with a parent ship|
| `99MID1XXX`| Physical AIS AtoN| automatic identification systems aids to navigation|
| `99MID6XXX`| Virtual AIS AtoN| automatic identification systems aids to navigation|
| `99MID8XXX`| Mobile toN| automatic identification systems aids to navigation|

## Manufacturer ID

[http://www.cirm.org/services/manufacturer-ids.html](http://www.cirm.org/services/manufacturer-ids.html)
*1
where
XX = manufacturer ID 01 to 99;
YYYY = the sequence number 0000 to 9999. When reaching 9999 the manufacturer should restart the sequence numbering at 0000.

## MID

Maritime Identification Digit
[https://www.itu.int/en/ITU-R/terrestrial/fmd/Pages/mid.aspx](https://www.itu.int/en/ITU-R/terrestrial/fmd/Pages/mid.aspx)

## Reference

 * ITU-R M.585 : Assignment and use of identities in the maritime mobile service
 [https://www.itu.int/rec/R-REC-M.585/en](https://www.itu.int/rec/R-REC-M.585/en)
