var com = require("serialport");
// 請自行修改序列埠設定
var serialPort = new com.SerialPort("/dev/cu.usbmodem14131", {
    baudrate: 9600,
    parser: com.parsers.readline("\n")
});

serialPort.on("open", function(){
    console.log("已開啟序列埠");

    serialPort.on("data", function(d){
        console.log("資料：" + d);             // 顯示傳入序列埠的資料
    });
});

