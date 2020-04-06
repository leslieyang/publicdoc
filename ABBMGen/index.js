function alertStr(str) { 
    alert(str);
}

function alertErr(err) { 
    alert(err.message);
}

function onBtnClear() { 
    let textarea = getElementById("output", undefined);
    textarea.value = "";
}

function getElementById(id, defaultVal) { 
    let htmlElement = defaultVal;
    let srtId;
    if (typeof id === "string") {
        srtId = id;
    } else {
        return htmlElement;
    }
    try {
        htmlElement = document.getElementById(srtId);
    }
    catch (err) {
        alertErr(err);
    }
    return htmlElement;
}

function getElementById_radio(id, defaultVal) { 
    let htmlElement = defaultVal;
    let srtId;
    if (typeof id === "string") {
        srtId = id;
    } else {
        return htmlElement;
    }

    let radios;
    try {
        radios = document.getElementById(srtId);
    }
    catch (err) {
        alertErr(err.message);
    }
    for(let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            htmlElement = radios[i];
            break;
        }
    }
    return htmlElement;

}

function addText(id, strText) {
    let textarea = getElementById(id, undefined);
    textarea.value += strText;
}

function getMessgeId() {
    let radios = document.getElementById("aismsgid");
    let msgId = 0;
    for(let i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            msgId = radios[i].value;
            break;
        }
    }
    return Number(msgId);
}

function getFormatter(msgId) {
    let formatter;
    if (typeof msgId === "string") {
        msgId = Number(msgId);
    }
    switch(msgId) {
    case 6:
    case 12:
        formatter = "ABM";
        break;
    case 8:
    case 14:
        formatter = "BBM";
        break;
    default:
        formatter = "XXX";
    }
    
    return formatter;
}

function convertAsciiTo6bitAscii(ch) {    
    let strCh = String(ch);
    let chValue = strCh.charCodeAt(0) & 0x7F;
    if ((0x40 <= chValue) && (chValue <= 0x5F)) {
        // mask bit[7:6]
        chValue = chValue & 0x3F;
    } else if ((0x21 <= chValue) && (chValue <= 0x3F)) {
        // mask bit[7:6]
        chValue = chValue & 0x3F;
    } else {
        chValue = chValue & 0x3F;
    }
    return chValue;
}

function convertSixBitTo0183Ch(ch) {
    ch = ch & 0x3F;
    if (0x28 < ch) {
        ch = ch + 0x38;
    } else {
        ch = ch + 0x30;
    }
    ch = ch & 0x7F;
    return String.fromCharCode(ch);
}

function convertTextTo0183Ch(text) {
    let text_s = String(text).split("");
    let str0183 = "";
    for(let i = 0; i < text_s.length; i++) {
        let d = convertAsciiTo6bitAscii(text_s[i]);
        str0183 += convertSixBitTo0183Ch(d);
    }
    return str0183;
}

function onChangeMsgId() {
    let msgId = getElementById_radio("aismsgid", "6");
    let payload = getElementById("payload", "0");

    let maxLen = 0;
    switch(Number(msgId.value)) {
    case 12:
        maxLen = (80 - 28 - 5);        
        break;
    case 14:
        maxLen = (80 - 18 - 5)
        break;        
    default:
    }
    payload.maxLength = maxLen;

    updatInputRemain();
    updatSeqIdNote();
}

function updatSeqIdNote() {
    let msgId = getElementById_radio("aismsgid", "6");
    let seqIdNote = getElementById("seqidnote", "0");
    let maxSeqId = 3;
    switch(Number(msgId.value)) {
    case 6:
    case 12:
        maxSeqId = 3;
        break;
    case 8:
    case 14:
        maxSeqId = 9;
        break;
    }

    seqIdNote.innerHTML = " (0 ~ " + maxSeqId + ")";

    let seqId = getElementById("seqid", "0");
    seqId.max = Number(maxSeqId);
}

function updatInputRemain() {
    let payload = getElementById("payload", "0");
    let payloadNote = getElementById("payloadnote", "0");
    payloadNote.innerHTML = " (" + (payload.maxLength - String(payload.value).length) + " character left)";
}

function calChecksum(str) {
    let checksum = 0;
    for (let i = 1; i < str.length; i++) {
        checksum = checksum ^ str.charCodeAt(i);
    }
    return checksum;
}

function getAllValue() {
    let outputStr = [];
    let talkerId = getElementById("talkerid", "AI");
    let seqId = getElementById("seqid", "1");
    let aischannel = getElementById_radio("aischannel", "0");
    let msgId = getElementById_radio("aismsgid", "6");
    let destMMSI = getElementById("destmmsi", "000000000");
    let payload = getElementById("payload", "0");
    let formatter = getFormatter(msgId.value);

    // formatter
    outputStr.push("!" + talkerId.value + formatter);
    // total number
    outputStr.push('1');
    // sentence number
    outputStr.push('1');
    // sequenctial message identifier, 0 ~ 3
    outputStr.push(String(seqId.value));
    // destination mmsi
    if (formatter == "ABM") {
        outputStr.push(String(destMMSI.value));
    }
    // AIS channel
    outputStr.push(String(aischannel.value));
    // Message Id
    outputStr.push(String(msgId.value));
    // encapsulate data
    outputStr.push(convertTextTo0183Ch(payload.value));
    // number of fill-bits
    outputStr.push("0");

    let outputSentence = outputStr.toString();
    let checksum = calChecksum(outputSentence);
    outputSentence = outputSentence + "*" + checksum.toString(16).toUpperCase() + "\r\n";
    
    addText("output", outputSentence);
}


function onLoad() {
    onChangeMsgId();
}
