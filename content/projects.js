export const projects = [
  {
    slug: "iot-akilli-sistem-tasarimi",
    title: "IoT Akıllı Sistem Tasarımı",
    date: "Ocak 2025",
    image: "/pcbiot.jpeg",
    description:
      "Bir okul projesi olarak sunulan bu akıllı sistem, ESP32 mikrodenetleyicisiyle entegre şekilde çalışmakta olup, 12V güç girişi, 5 röle, 6 dijital giriş, 4 analog giriş ve RS485 bağlantısı içeren özel tasarım bir PCB ile donatılmıştır. Sisteme ek olarak, Wi-Fi iletişimi için Flutter kullanılarak geliştirilen özel bir Android uygulaması da mevcuttur.",
    details: "",
    files: [
      { name: "Android Uygulama (Flutter, ZIP)", url: "/iot/androidApp.zip", size: "649MB" },
      { name: "ESP32 IP Bulma Kodu", url: "/iot/esp32_ip_bulma/esp32_ip_bulma.ino", size: "695B" },
      { name: "Arduino Birleşik Kod", url: "/iot/arduino_birles1/arduino_birles1.ino", size: "7.0KB" },
      { name: "Tez (PDF)", url: "/iot/thesis.pdf", size: "3.0MB" }
    ],
    gallery: [
      "/iot/android_ana_ekran.jpeg",
      "/iot/3d.jpg",
      "/iot/bottomlayer.jpg",
      "/iot/toplayer.jpg",
      "/iot/connectionschematic.jpg",
      "/iot/mcuschematic.jpg",
      "/iot/pwrschematic.jpg"
    ]
  },
  {
    slug: "matlab-frekans-analizi",
    title: "Matlab Frekans Analizi",
    date: "Mayıs 2024",
    image: "/projefrqq.jpg",
    description:
      "Bu MATLAB GUI uygulaması, kullanıcıların belirli parametrelere göre sinyaller üretip bu sinyalleri hem zaman hem de frekans düzleminde incelemesini sağlar. Kullanıcı arayüzü üzerinde frekans, genlik ve faz kayması değerleri girilerek kare, üçgen, rampa, tam dalga ve yarım dalga doğrultulmuş sinüs/kosinüs gibi farklı sinyal türleri seçilebilir. Seçilen sinyal zaman düzleminde çizilirken, aynı zamanda Fourier dönüşümü alınarak genlik ve faz spektrumları da görsel olarak sunulur. Kullanıcı dostu arayüzü sayesinde sinyallerin davranışları kolayca analiz edilebilir ve temel sinyal işleme kavramları pratik olarak öğrenilebilir. Proje Adı: Matlab Frekans Analizi, Tarih: Mayıs 2024",
    details: "",
    files: [
      { name: "MATLAB Kod Dosyası (proje.m)", url: "/matlabfreq/matlabcode/proje.m", size: "7.9KB" },
      { name: "MATLAB Arayüz Dosyası (proje.fig)", url: "/matlabfreq/matlabcode/proje.fig", size: "53KB" }
    ],
    gallery: [
      "/matlabfreq/ucgen.jpg",
      "/matlabfreq/rampa.jpg",
      "/matlabfreq/tamdalgacos.jpg",
      "/matlabfreq/tamdalgasin.jpg",
      "/matlabfreq/yarımdalgasin.jpg"
    ]
  },
  {
    slug: "buckboost",
    title: "LM5118 ile 9-36V Girişten 12V Sabit Çıkış Alabilen Buck-Boost Konvertör Tasarımı",
    date: "Ağustos 2024",
    image: "/buckboostt.jpg",
    description:
      "Bu projede, LM5118 entegresi kullanılarak tasarlanan buck-boost konvertör ile 9V ile 36V arasında değişen giriş gerilimi, sabit 12V çıkışa dönüştürülmüştür. Geniş giriş aralığına sahip bu yapı, hem step-down (buck) hem de step-up (boost) modlarında çalışarak kararlı ve verimli bir çıkış sağlar. Özellikle otomotiv, endüstriyel sistemler ve güneş enerjisi gibi değişken besleme kaynaklarında sabit voltaj gerektiren uygulamalar için uygundur.",
    details: "",
    gallery: [
      "/buckboost/bottomlayer.jpg",
      "/buckboost/toplayer.jpg",
      "/buckboost/buckboost.jpg",
      "/buckboost/schematic.jpg",
      "/buckboost/lm5118.jpeg"
    ]
  },
  {
    slug: "btmodule",
    title: "STM32 ile BT Modül AT Komut Gönderimi",
    date: "Nisan 2025",
    image: "/blmodule.jpg",
    description:
      "Bu projede, BL652 Bluetooth modülünün ismi STM32 mikrodenetleyicisi üzerinden AT komutları ile değiştirilmiştir. Terminal üzerinden çapraz derlenmiş yaklaşık 50 kB boyutundaki autorun dosyası, log kayıtları kullanılarak hex formatında elde edilmiştir. Bu hex veriler STM32 yazılımında dizi (array) olarak tanımlanmış ve debug arayüzü kullanılarak modüle yüklenmiştir. Yükleme işlemi tamamlandıktan sonra, STM32 tarafından UART haberleşmesi üzerinden gönderilen uygun AT komutları ile modülün cihaz adı başarıyla değiştirilmiştir.",
    details: "",
    files: [
      { name: "AT Komutları ile BL652 Modül İsimi Değişimi (PDF)", url: "/btmodule/AT Komutları ile BL652 Modül İsimi Değişimi.pdf", size: "187KB" },
      { name: "STM32 Gömülü Kod (CubeIDE Projesi, ZIP)", url: "/btmodule/EmbeddedCode.zip", size: "4.8MB" }
    ]
  },
  {
    slug: "motorcontrol",
    title: "Temel Robot kontrol kartı",
    date: "Temmuz 2024",
    image: "/motorcontroll.jpg",
    description:
      "Bu projede, STM32F103 mikrodenetleyici tabanlı, 2 adet step motor, 2 adet DC motor ve 16x2 LCD ekran içeren çok amaçlı bir robot kontrol PCB'si tasarlanmıştır. 12V giriş gerilimiyle çalışan bu kart, 4 adet buton ile robotun yön kontrolünü manuel olarak sağlayacak şekilde planlanmıştır. Kullanıcı girişlerine karşılık gelen hareket bilgileri, LCD ekran üzerinden anlık olarak görüntülenebilecek şekilde yazılım uyumluluğu gözetilerek tasarım yapılmıştır.",
    details: "",
    gallery: [
      "/rccontrol/3d.jpg",
      "/rccontrol/toplayer.jpg",
      "/rccontrol/bottomlayer.jpg",
      "/rccontrol/schematic.jpg",
      "/rccontrol/schematic2.jpg",
      "/rccontrol/schematic3.jpg"
    ]
  },
  {
    slug: "canopen",
    title: "Gömülü yazılım Tabanlı CANopen ile Aktüatör kullanımı",
    date: "Mayıs 2025",
    image: "/canopen.jpg",
    description:
      "Bu projede, STM32 mikrodenetleyicisi ve CANopen haberleşme protokolü kullanılarak kompakt aktüatörlerin pozisyon, tork, hız ve fren gibi birçok fonksiyonu hassas bir şekilde kontrol edilmiştir. CANopen'in sunduğu gerçek zamanlı ve güvenilir iletişim altyapısı sayesinde, aktüatörlerin dinamik hareketleri senkronize bir biçimde yönetilmiş; pozisyonlama, hız profili belirleme, anlık tork sınırlaması ve gerektiğinde acil durdurma (frenleme) gibi işlevler başarıyla uygulanmıştır. Sistemin esnek ve modüler yapısı, farklı hareket senaryolarına uyum sağlamasına olanak tanırken, STM32'nin işlem gücü ve CAN haberleşme yetenekleri, endüstriyel seviyede kararlı ve düşük gecikmeli bir kontrol imkânı sunmuştur. Bu yapı sayesinde, robotik sistemlerden otomasyona kadar birçok uygulamada kullanılabilecek, yüksek performanslı bir aktüatör kontrol altyapısı oluşturulmuştur. Bir şirkete yapılması sebebiyle site üzerinde proje kodları ve detayları eklenmemiştir.",
    details: "",
  },
  {
    slug: "saytas",
    title: "Oda Işık Kontrolü Sayısal Devresi",
    date: "Aralık 2024",
    image: "/saytas.jpg",
    description:
      "Bu projede, sayıcı, karşılaştırıcı ve BCD to 7-segment kod çözücü entegreleri kullanılarak, 7 segment display üzerinden çalışan bir sayısal devre tasarlanmıştır. Devrede yer alan iki adet 7 segment ekran, sırasıyla içeri giren ve dışarı çıkan kişi sayılarını göstermektedir. Giriş ve çıkış bilgileri butonlar yardımıyla sayıcılara aktarılmakta, her bir işlem sayıcılar aracılığıyla sayısal olarak takip edilmektedir. Karşılaştırıcı entegresi sayesinde, giren kişi sayısı çıkan kişi sayısından fazla olduğunda, sistem bunu algılayarak bir uyarı LED'ini aktif hale getirmektedir. Bu yapı, özellikle sınırlı kişi girişine sahip alanlarda basit ve etkili bir kontrol ve bilgilendirme sistemi olarak kullanılabilecek şekilde tasarlanmıştır.",
    details: "",
    files: [
      { name: "Proteus Devre Dosyası (ZIP)", url: "/7segment/proteus.zip", size: "38KB" },
      { name: "Proje Raporu (PDF)", url: "/7segment/proje_raporu.pdf", size: "826KB" }
    ]
  },
]; 