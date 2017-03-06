
const int buttonPin1 = 4;     
const int buttonPin2 = 7;

int motorPin = 3;

int button1State = 0; 
int button2State = 0; 
int speed = 150;

void setup() {
  // put your setup code here, to run once:
pinMode(motorPin, OUTPUT);
Serial.begin(9600);
while (! Serial);
Serial.println("Speed 0 to 255");
}

void loop() {
 button1State = digitalRead(buttonPin1);
 if (button1State == HIGH) {
  speed = speed + 20;
  delay(200);
  } else {
  }
 button2State = digitalRead(buttonPin2);
 if (button2State == HIGH) {
  speed = speed - 20;
  delay(200);
  } else {
  }
  Serial.println(speed);
  analogWrite(motorPin, speed);
  delay(200);
}
