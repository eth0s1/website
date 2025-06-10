export const blogPosts = [
  {
    slug: "bldc-foc",
    title: "IHM08-M1 ile BLDC FOC Kontrol",
    date: "Şubat 2025",
    description: "Bu çalışmada, STM32 Nucleo-F103 geliştirme kartı ile IHM08M1 motor sürücü kartı kullanılarak bir BLDC motor kontrol sistemi gerçekleştirilmiştir. Sistem tasarımında, ST Motor Control Workbench yazılımı üzerinden motor parametreleri belirlenmiş ve bu parametrelere uygun olarak STM32CubeIDE üzerinde çalışacak gömülü yazılım otomatik olarak oluşturulmuştur. Geliştirilen yazılım, STM32 kartına yüklenerek motorun kontrolü sağlanmıştır. Kontrol süreci, ST'nin Motor Pilot arayüzü üzerinden izlenmiş ve yönetilmiştir. Bu uygulamada motorun hassas ve verimli çalışmasını sağlamak amacıyla FOC (Field Oriented Control) yöntemi tercih edilmiştir. Gerçekleştirilen sistem, hem donanım hem de yazılım açısından STM32 ekosisteminin güçlü araçlarıyla entegre bir şekilde çalışarak başarılı bir BLDC motor kontrol çözümü sunmuştur.",
    image: "/bldc/daa8d918-d013-45f4-aafe-2657dc6f4d7c.jpg",
    files: [
      { name: "Proje Raporu (PDF)", url: "/bldc/NUCLEO F302R8 VE IHM08M1 İLE BLDC MOTOR SÜRÜMÜ .pdf", size: "1.0MB" }
    ]
  },
  {
    slug: "buck-converter",
    title: "Buck Converter (Alçaltan Dönüştürücü Tasarımı)",
    date: "Mayıs 2024",
    image: "/buckconverter/buckk.jpg",
    description:
      "Üniversitede alınan seçmeli Güç Elektroniği dersi kapsamında bir buck converter (alçaltan dönüştürücü) devresi tasarlanmış ve bu devrenin MATLAB-Simulink ortamındaki simülasyonu gerçekleştirilmiştir. Simülasyon sırasında elde edilen osiloskop dalga formları, laboratuvar uygulamasında gerçek donanım üzerinde elde edilen osiloskop görüntüleriyle karşılaştırılmış ve gözlemler yapılmıştır. Bu süreçte özellikle duty cycle (çalışma çevrimi oranı), anahtarlama frekansı ve yük direnci gibi parametrelerde yapılan değişikliklerin sistem üzerindeki etkileri incelenmiştir. Ayrıca devre farklı iletim modlarında – CCM (Sürekli İletim Modu), DCM (Kesikli İletim Modu) ve BCM (Sınırda İletim Modu) – çalıştırılarak davranışları gözlemlenmiştir. Bunun yanında, devrede kullanılan MOSFET ve diyot bağlantıları farklı şekillerde yapılandırılarak sistemin performansı üzerindeki etkileri değerlendirilmiştir. Elde edilen veriler üzerinden analizler yapılarak konverter tasarımına dair kapsamlı bir değerlendirme gerçekleştirilmiştir.",
    files: [
      { name: "buckconverter (Simulink)", url: "/buckconverter/buckconverter.slx", size: "139KB" },
      { name: "guncelBuckConv (PDF)", url: "/buckconverter/gucelBuckConv.pdf", size: "1.7MB" },
      { name: "buck_con (MATLAB)", url: "/buckconverter/buck_con.m", size: "208B" }
    ]
  },
  {
    slug: "boost-converter",
    title: "Boost Converter (Yükselten Dönüştürücü Tasarımı)",
    date: "Mayıs 2024",
    image: "/boostconverter/boosttt.png",
    description:
      "Üniversitede alınan seçmeli Güç Elektroniği dersi kapsamında bir boost converter (yükselten dönüştürücü) devresi tasarlanmış ve bu devrenin MATLAB-Simulink ortamındaki simülasyonu gerçekleştirilmiştir. Simülasyon sırasında elde edilen osiloskop dalga formları, laboratuvar uygulamasında gerçek donanım üzerinde elde edilen osiloskop görüntüleriyle karşılaştırılmış ve gözlemler yapılmıştır.",
    files: [
      { name: "Boost Converter Simülasyon Dosyası (SLX)", url: "/boostconverter/gucboost.slx", size: "39KB" },
      { name: "Boost Converter Raporu (PDF)", url: "/boostconverter/boostconverter.pdf", size: "2.4MB" }
    ]
  },
  {
    slug: "buckboost-converter",
    title: "Buck-Boost Converter (Alçaltan-Yükselten Dönüştürücü) Tasarımı",
    date: "Mayıs 2024",
    image: "/buckboostyazi/buckboostt.jpg",
    description:
      "Üniversitede alınan seçmeli Güç Elektroniği dersi kapsamında bir buck-boost converter (alçaltan-yükselten dönüştürücü) devresi tasarlanmış ve bu devrenin MATLAB-Simulink ortamındaki simülasyonu gerçekleştirilmiştir.",
    files: [
      { name: "Buck-Boost Converter Simülasyon Dosyası (SLX)", url: "/buckboostyazi/buckboost.slx", size: "41KB" },
      { name: "Buck-Boost Converter Raporu (PDF)", url: "/buckboostyazi/buckboost.pdf", size: "86KB" }
    ]
  },
  {
    slug: "flyback-converter",
    title: "Flyback Converter Tasarımı",
    date: "Haziran 2024",
    image: "/flyback/flybackk.jpg",
    description:
      "Üniversitede alınan seçmeli Güç Elektroniği dersi kapsamında bir Flyback devresi tasarlanmış ve bu devrenin MATLAB-Simulink ortamındaki simülasyonu gerçekleştirilmiştir.",
    files: [
      { name: "Flyback Simülasyon Dosyası (SLX)", url: "/flyback/flyback.slx", size: "42KB" },
      { name: "Flyback Raporu (PDF)", url: "/flyback/FLYBACK.pdf", size: "129KB" },
      { name: "Flyback MATLAB Kodu (M)", url: "/flyback/flyback.m", size: "227B" }
    ]
  },
  {
    title: "Matlab to PLC Veri Aktarımı",
    date: "Ocak 2023",
    hazirlayanlar: "Ethem Işıldar, Hayati Yılmaz",
    description: "Bu çalışmada, Siemens TIA Portal ortamı kullanılarak MATLAB ile PLC arasında haberleşme sağlanmıştır. Yapılan uygulamada, her iki sistem arasında veri alışverişi gerçekleştirilebilmesi için IP adresi atamaları yapılmış ve PLC programı içerisine uygun bloklar eklenmiştir. Böylece PLC tarafından gönderilen veriler MATLAB ortamında okunabilir hale gelmiş, aynı şekilde MATLAB üzerinden gönderilen veriler de PLC tarafından alınarak işlenebilmiştir. Bu haberleşmenin test edilmesi ve doğrulanması amacıyla, Siemens'in kendi PLC simülasyon aracı (PLCSIM) kullanılmıştır. Bu sayede fiziksel donanım olmadan sistemin doğruluğu sanal ortamda test edilmiş ve haberleşme senaryoları başarıyla gerçekleştirilmiştir.",
    image: "/matlabtoplc/logoo.jpg",
    pdf: "/matlabtoplc/matlab_to_plc.pdf",
    files: [
      { name: "Proje Raporu (PDF)", url: "/matlabtoplc/matlab_to_plc.pdf", size: "443KB" }
    ],
    slug: "matlabtoplc"
  },
  {
    slug: "wattmetre",
    title: "PIC Mikrodenetleyici ile Wattmetre Uygulaması",
    date: "Nisan 2024",
    description: "Bu projede, PIC16F877 mikrodenetleyicisi kullanılarak potansiyometreler aracılığıyla giriş değerlerinin ayarlandığı ve wattmetre işlevi gören bir sistem tasarlanmıştır. Sistem, mikrodenetleyici ile programlanarak gerekli işlemleri gerçekleştirecek şekilde hex dosyası oluşturulmuş ve bu dosya Proteus simülasyon ortamında test edilmiştir. Potansiyometreler üzerinden girilen gerilim ve akım değerlerine göre gerçek zamanlı olarak güç (watt) hesabı yapılmakta, sonuçlar Proteus üzerindeki sanal LCD ekran veya benzeri bir arayüz aracılığıyla görselleştirilmektedir. Bu uygulama sayesinde hem analog girişlerin işlenmesi hem de sayısal hesaplamaların mikrodenetleyici ile nasıl yapılabileceği örneklenmiş, wattmetre fonksiyonunun yazılım ve donanım entegrasyonu başarılı bir şekilde simüle edilmiştir.",
    image: "/wattmetre/wattmetree.jpg",
    files: [
      { name: "Proteus ve HEX Dosyaları (ZIP)", url: "/wattmetre/proteusandhex.zip", size: "29KB" }
    ]
  }
]; 