---
layout: post
---

# AIS AtoN Chaining

A chain of AIS AtoN stations allows for communication from a configuring AIS station to AIS AtoN stations that may be unable to communicate directly with the configuring AIS station. The messages are passed from station to station until the intended recipient is reached, see Figure 4.

The concept requires an AIS AtoN station to have knowledge of other AIS AtoN stations in the chain, namely its parent and all children below it in the chain. A “parent station” is a station that is in the direction of the configuring AIS station. A “child station” is a station that is directed away from a configuring AIS station. In order to prevent unnecessary retransmission of the messages, each AIS AtoN station in a chain shall have only one parent, but may have
multiple children (this includes all synthetic and virtual AIS AtoN).

Message 6 or 25 is used for the transfer of the encrypted binary field. It is assumed that the whole chain has the same encryption key. The source ID and “MMSI of AtoN” fields of Message 6 or 25 is used to determine whether the received message is from a parent or child station. If not, then the received message is ignored.

When Message 6 is used, the destination ID shall be own station MMSI or zero. If the destination is zero, the message shall not be processed unless the source ID is the parent.

The encrypted binary data field is decrypted to obtain the function ID and “MMSI of AtoN”. If the source ID of the message is set to the parent station ID and the function ID is a configuration, query request or function, and the MMSI of the AIS AtoN station is in the chain, then the message shall be retransmitted, with the source ID set to its own MMSI. If the source ID of the message is set to a child MMSI and the function ID is a query response, then the message shall be retransmitted, with the destination ID set to the parent MMSI. Any other combination of known or unknown MMSI is ignored (see Table 5).

The AIS AtoN station shall attempt to decrypt the binary data, and check that it, or one of its children, is the intended recipient of the message, before processing the message any further.

<script src="https://unpkg.com/mermaid@8.0.0-rc.8/dist/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script>

<div class='mermaid'>
graph TD;
    A(Received message) --> B{Message<br>Number};
    B-->|6|msg6{Destination MMSI<br> = Own station};
    B-->|25|msg25{Unstructured<br>type};
    B-->|other|NonConfig[Non configuraiton<br>process];
    msg6-->|Yes|DAC{DAC = 990?};
    msg6-->|No|Dest{Destination = 0 &&<br>source MMSI = parent};
    Dest-->|Yes|DAC;
    Dest-->|No|Ignore[Ignore<br>message];
    DAC-->|No|NonConfig;
    DAC-->|Yes|DecMsg[Decrypt<br>message];
    msg25-->|No|NonConfig;
    msg25-->|Yes|DecMsg;
</div>

<div class='mermaid'>
graph TD;
    Start(Decrypt<br>message)-->DecOk{Sucess?};
    DecOk-->|No|Ignore[Ignore<br>message];
    DecOk-->|Yes|FI{FI<br>= query response?};
    FI-->|Yes|SrcId{Source ID child?};
    SrcId-->|No|Ignore;
    SrcId-->|Yes|FChild[Forward<br>to parent];
    FI-->|No|Extract[Extract 'MMSI of AtoN'];
    Extract-->Own{MMSI of AtoN<br>= own station};
    Own-->|Yes|Pro[Process];
    Own-->|No|SourceId{Source MMSI<br>= parent?};
    SourceId-->|No|Ignore;
    SourceId-->|Yes|SrcChild{MMSI of AtoN<br>= chiild MMSI ?};
    SrcChild-->|No|Ignore;
    SrcChild-->|Yes|F[Forward<br>to child];
</div>


Figure 4 - VDL configuration decision tree

Table 5 - Configuration of AIS AtoN stations via VDL

| Source ID | Type of Message according to function ID from Table in A.1 | "MMSI of AtoN" from encrypted binary field | Action by own station |
| :-------: | ----------- | - | - |
| Parent| Query response| Any| Ignore|
| Parent| Configuration, functional or query request| Not own station| Verify that the destination ID = own MMSI or 0, then verify intended recipient is a child and re-transmit message with source ID set to own station MMSI.|
| Parent| Configuration or functional| Own station| Verify that the destination ID = own MMSI or 0, then process|
| Parent| Query request| Own station| Verify that the destination ID = own MMSI or 0, then send response with "MMSI of AtoN" = own station|
| Child| Query response| Any| Re-transmit message to the parent without changing the "MMSI of AtoN"|
| Child| Configuration, query request or functional| Any| Ingore|
| Other| Configuration or functional| Own station| Verify that the destination ID = own MMSI, then process|
| Other| Query request| Own station| Verify that the destination ID = own MMSI, then send response with "MMSI of AtoN" = own station|
| Other| Any| Not own station| Ingore|
