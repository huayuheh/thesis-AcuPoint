
var Gpio = require('onoff').Gpio,	//onoff module (use npm install onoff)
  button = new Gpio(18, 'in', 'both'),	//setup GPIO17 as output
  //led = new Gpio(4, 'out'),      //setup GPIO27 as output
  ledState = 0, 		  //internal variable to track LED state (1 = on, 0 = off)
  timer = 0;

var RgbChannel = require('rpi-rgb').Channel;
var Colour = require('rpi-rgb').Colour;

var channel1 = new RgbChannel(6,5,4);// BCM 25,24,23

var red = new Colour(100,0,0);
var softRed = new Colour(10,0,0);
var blue = new Colour(0,100,0);
var white = new Colour(100,100,100);
var yellow = new Colour(100,100,0);
var black = new Colour(0,0,0);

button.setActiveLow( true );		//optional to reverse button value

button.watch(function(err, value) {	//watch button changes
	if (value == true){
		timer = timer +1 ;
        console.log('timer:'+ timer);
	}else{
	//	led.writeSync( 0 );
	//	console.log('Button is OFF');
	}
    if ( timer % 2 == 0 ){
        channel1.fadeRgb(black, 100, function() {});
	}else{
        channel1.strobeRgb(white, 3, 1000, function() {});
	}




});

process.on('SIGINT', function(){
  button.unexport();
  //led.unexport();
  process.exit();
});






// Start by fading to blue.
//channel1.fadeRgb(blue, 2000, function() {
//console.log("RGB LED");
    // When that's done, strobe.
   // channel1.strobeRgb(white, 18, 1000, function() {
        // After strobing, fade to yellow.
      //  channel1.fadeRgb(yellow, 700);
   // });
//});

// After the timeout, all the above is likely done, so start pulsing red.
//setTimeout(function(thisobj) { thisobj.pulseRgb(softRed, red, 800, 1500); }, 7000, channel1);