#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <WiFi.h>
#include <ESPAsyncWebServer.h>
#include <DHT.h>

// --- Wi-Fi Ayarları ---
const char* ssid = "Redmi Note 10 Pro";
const char* password = "12481632";

// --- LCD Ayarları ---
LiquidCrystal_I2C lcd(0x27, 16, 2);

// --- DHT11 Ayarları ---
#define DHTPIN 4
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

// --- Motor Kontrol ---
#define IN1 33
#define IN2 32
#define B1A 26
#define B1B 25

int motor1Speed = 0;
String motor1Direction = "stop";
int motor2Speed = 0;
String motor2Direction = "stop";

// --- LED Kontrol ---
#define LED_RED 16
#define LED_GREEN 17
#define LED_WHITE 5

// --- Voltaj Ölçüm ---
#define ANALOG_IN_PIN 34
float adc_voltage = 0.0;
float in_voltage = 0.0;
float R1 = 30000.0;
float R2 = 7000.0;
float ref_voltage = 3.3;
float correction_factor = 1.02;
int average_samples = 50;

// --- Sunucu ---
AsyncWebServer server(80);

void setup() {
  Serial.begin(9600);

  // LCD Başlatma
  lcd.begin();
  lcd.backlight();
  lcd.setCursor(6, 0);
  lcd.print("IoT");
  lcd.setCursor(2, 1);
  lcd.print("Akilli Sistem");

  // Wi-Fi Bağlantısı
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Wi-Fi'ye bağlanılıyor...");
  }
  Serial.println("Wi-Fi bağlı!");
  Serial.print("IP Adresi: ");
  Serial.println(WiFi.localIP());

  // Motor Pinlerini Ayarla
  pinMode(IN1, OUTPUT);
  pinMode(IN2, OUTPUT);
  pinMode(B1A, OUTPUT);
  pinMode(B1B, OUTPUT);

  // LED Pinlerini Ayarla
  pinMode(LED_RED, OUTPUT);
  pinMode(LED_GREEN, OUTPUT);
  pinMode(LED_WHITE, OUTPUT);

  // DHT Sensörünü Başlat
  dht.begin();

  // Endpoint'ler
  configureEndpoints();

  // Sunucuyu Başlat
  server.begin();
}

void loop() {
  // Döngüye gerek yok
}

// --- Endpoint Ayarları ---
void configureEndpoints() {
  // Şifre Kontrol
  server.on("/setPasswordStatus", HTTP_POST, [](AsyncWebServerRequest *request) {
    if (request->hasParam("isCorrect", true)) {
      String status = request->getParam("isCorrect", true)->value();
      if (status == "true") {
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print("Sifre Dogru!");
        delay(2000);
        lcd.clear();
        lcd.setCursor(6, 0);
        lcd.print("IoT");
        lcd.setCursor(2, 1);
        lcd.print("Akilli Sistem");
      } else {
        lcd.clear();
        lcd.setCursor(0, 0);
        lcd.print("Sifre Yanlis!");
        delay(2000);
        lcd.clear();
        lcd.setCursor(6, 0);
        lcd.print("IoT");
        lcd.setCursor(2, 1);
        lcd.print("Akilli Sistem");
      }
      request->send(200, "text/plain", "Durum alindi");
    } else {
      request->send(400, "text/plain", "isCorrect parametresi gerekli!");
    }
  });

  // LED Kontrol
  setupLedEndpoints();

  // Motor Kontrol
  setupMotorEndpoints();

  // Voltaj Ölçüm
  server.on("/getVoltage", HTTP_GET, [](AsyncWebServerRequest *request) {
    int adc_sum = 0;
    for (int i = 0; i < average_samples; i++) {
      adc_sum += analogRead(ANALOG_IN_PIN);
      delay(10);
    }
    int adc_value = adc_sum / average_samples;
    adc_voltage = (adc_value * ref_voltage) / 4095.0;
    in_voltage = adc_voltage * (R1 + R2) / R2 * correction_factor;

    String json = "{\"adc_value\":" + String(adc_value) + 
                  ",\"adc_voltage\":" + String(adc_voltage, 2) +
                  ",\"input_voltage\":" + String(in_voltage, 2) + "}";
    request->send(200, "application/json", json);
  });

  // DHT Sensör
  server.on("/getDHTData", HTTP_GET, [](AsyncWebServerRequest *request) {
    float temperature = dht.readTemperature();
    float humidity = dht.readHumidity();
    if (isnan(temperature) || isnan(humidity)) {
      request->send(500, "application/json", "{\"error\":\"Veri okunamadı\"}");
    } else {
      String json = "{\"temperature\":" + String(temperature) +
                    ",\"humidity\":" + String(humidity) + "}";
      request->send(200, "application/json", json);
    }
  });
}

// --- LED Kontrol ---
void setupLedEndpoints() {
  server.on("/led/red/on", HTTP_GET, [](AsyncWebServerRequest *request) {
    digitalWrite(LED_RED, HIGH);
    request->send(200, "text/plain", "Kırmızı LED Açıldı");
  });

  server.on("/led/red/off", HTTP_GET, [](AsyncWebServerRequest *request) {
    digitalWrite(LED_RED, LOW);
    request->send(200, "text/plain", "Kırmızı LED Kapandı");
  });

  server.on("/led/green/on", HTTP_GET, [](AsyncWebServerRequest *request) {
    digitalWrite(LED_GREEN, HIGH);
    request->send(200, "text/plain", "Yeşil LED Açıldı");
  });

  server.on("/led/green/off", HTTP_GET, [](AsyncWebServerRequest *request) {
    digitalWrite(LED_GREEN, LOW);
    request->send(200, "text/plain", "Yeşil LED Kapandı");
  });

  server.on("/led/white/on", HTTP_GET, [](AsyncWebServerRequest *request) {
    digitalWrite(LED_WHITE, HIGH);
    request->send(200, "text/plain", "Beyaz LED Açıldı");
  });

  server.on("/led/white/off", HTTP_GET, [](AsyncWebServerRequest *request) {
    digitalWrite(LED_WHITE, LOW);
    request->send(200, "text/plain", "Beyaz LED Kapandı");
  });
}

// --- Motor Kontrol ---
void setupMotorEndpoints() {
  server.on("/motor1/forward", HTTP_GET, [](AsyncWebServerRequest *request) {
    motor1Speed = 255;
    motor1Direction = "forward";
    controlMotor1();
    request->send(200, "text/plain", "Motor 1 ileri çalışıyor");
  });

  server.on("/motor1/backward", HTTP_GET, [](AsyncWebServerRequest *request) {
    motor1Speed = 255;
    motor1Direction = "backward";
    controlMotor1();
    request->send(200, "text/plain", "Motor 1 geri çalışıyor");
  });

  server.on("/motor1/stop", HTTP_GET, [](AsyncWebServerRequest *request) {
    motor1Speed = 0;
    motor1Direction = "stop";
    controlMotor1();
    request->send(200, "text/plain", "Motor 1 durduruldu");
  });

  // Motor 2 kontrol
  server.on("/motor2/forward", HTTP_GET, [](AsyncWebServerRequest *request) {
    motor2Speed = 255;
    motor2Direction = "forward";
    controlMotor2();
    request->send(200, "text/plain", "Motor 2 ileri çalışıyor");
  });

  server.on("/motor2/backward", HTTP_GET, [](AsyncWebServerRequest *request) {
    motor2Speed = 255;
    motor2Direction = "backward";
    controlMotor2();
    request->send(200, "text/plain", "Motor 2 geri çalışıyor");
  });

  server.on("/motor2/stop", HTTP_GET, [](AsyncWebServerRequest *request) {
    motor2Speed = 0;
    motor2Direction = "stop";
    controlMotor2();
    request->send(200, "text/plain", "Motor 2 durduruldu");
  });
}

void controlMotor1() {
  if (motor1Direction == "forward") {
    digitalWrite(IN1, HIGH);
    digitalWrite(IN2, LOW);
  } else if (motor1Direction == "backward") {
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, HIGH);
  } else {
    digitalWrite(IN1, LOW);
    digitalWrite(IN2, LOW);
  }
}

void controlMotor2() {
  if (motor2Direction == "forward") {
    digitalWrite(B1A, HIGH);
    digitalWrite(B1B, LOW);
  } else if (motor2Direction == "backward") {
    digitalWrite(B1A, LOW);
    digitalWrite(B1B, HIGH);
  } else {
    digitalWrite(B1A, LOW);
    digitalWrite(B1B, LOW);
  }
}
