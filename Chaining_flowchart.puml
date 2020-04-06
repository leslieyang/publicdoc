
```plantuml
@startuml
start
:Received message;
if (message number = 6) then (Yes)
partition "Msg. 6" {
    if (Destination MMSI = own station) then (No)
        if (Destination = 0 and source MMSI = parent) then (No)
            :Ignore message;
            stop
        else (Yes)
        endif
    else (Yes)
    endif
    if (DAC 990) then (No)
        : Non configuration processing;
        stop
    else (Yes)
    endif
}
elseif (message number = 25) then (Yes)
partition "Msg. 25" {
    if (Unstuctued type) then (No)
        : Non configuration processing;
        stop
    else (Yes)
    endif
}
else (Other)
    :Non configuration processing;
    end
endif


:Decrypt message;
if (Success) then (no)
    :Ignore message;
    stop
else (Yes)
endif
if (FI = qurey response) then (Yes)
partition "Query Response" {
    if (Souce ID = child) then (No)
        :Ignore message;
        stop
    else (Yes)
        :Forward to parent;
        stop
    endif
}
else (No)
endif

:Extract "MMSI of AtoN";
if ("MMSI of AtoN" = own station) then (Yes)
    : Process message;
    stop
else (No)
endif
if (Source MMSI parent) then (No)
    :Ignore message;
    stop
else (Yes)
endif
if ("MMSI of AtoN" = child MMSI) then (no)
    :Ignore message;
    stop
else (Yes)
endif
:Forward to child;
stop

@enduml
```