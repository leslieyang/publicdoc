---
layout: post
---
# Meteorological and Hydrographic data

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
|`Spare`| 10| |- |
