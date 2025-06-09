#include <WiFi.h>

const char* ssid = "Turksat_Kablonet_2.4_DPEY";  // Wi-Fi SSID
const char* password = "tzRk6YHy";  // Wi-Fi şifresi

void setup() {
  // Seri haberleşmeyi başlat
  Serial.begin(9600);

  // Wi-Fi'a bağlan
  WiFi.begin(ssid, password);
  
  // Wi-Fi bağlantısının yapılmasını bekle
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("WiFi'ye bağlanıyor...");
  }

  // Wi-Fi bağlantısı başarılı olduğunda IP adresini yazdır
  Serial.println("WiFi bağlantısı başarılı!");
  Serial.print("ESP32 IP Adresi: ");
  Serial.println(WiFi.localIP());  // ESP32'nin IP adresi
}

void loop() {
  // Ana döngü boş bırakılabilir
}
