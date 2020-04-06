encapSentence = function () {
    // 
    var binData = new Uint8Array(160);
    var binSixBitData = new Uint8Array(214);
    var encapData;
    var bitLength = 0;
    var byteLength = 0;
    var msgId;
    var aisChannel;
    var fillBit;
};

encapSentence.prototype.addTo6Bitdata = function(data, bit) {
}

encapSentence.prototype.convert8To6 = function() {
    let srcIndx;
    let destIndx;
}

encapSentence.prototype.addByte = function(data, bit) {
    let byteIdx = this.bitLength >> 3;
    let bitShit = this.bitLength & 0xF;
    let bitMask = 0xFF >> bitShit;
    let bitAdd;
    
    bitAdd = data << (8 - bit);
    bitAdd = bitAdd>>>bitShit;

    binData[byteIdx] = binData[byteIdx] | (bitAdd & bitMask);
    byteIdx++;

    binData[byteIdx] = binData[byteIdx] | ((data>>>bitShit) & bitMask);
};

encapSentence.prototype.setAisChannel = function(channel) {
    this.aisChannel = channel;
};

encapSentence.prototype.getAisChannel = function() {
    return this.aisChannel;
};

encapSentence.prototype.setMsgId = function(msgId) {
    this.msgId = msgId;
};

encapSentence.prototype.getMsgId = function() {
    return this.msgId;
};