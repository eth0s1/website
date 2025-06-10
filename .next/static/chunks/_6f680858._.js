(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/content/projects.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "projects": (()=>projects)
});
const projects = [
    {
        slug: "iot-akilli-sistem-tasarimi",
        title: "IoT Akıllı Sistem Tasarımı",
        date: "Ocak 2025",
        image: "/pcbiot.jpeg",
        description: "Bir okul projesi olarak sunulan bu akıllı sistem, ESP32 mikrodenetleyicisiyle entegre şekilde çalışmakta olup, 12V güç girişi, 5 röle, 6 dijital giriş, 4 analog giriş ve RS485 bağlantısı içeren özel tasarım bir PCB ile donatılmıştır. Sisteme ek olarak, Wi-Fi iletişimi için Flutter kullanılarak geliştirilen özel bir Android uygulaması da mevcuttur.",
        details: "",
        files: [
            {
                name: "Android Uygulama (Flutter, ZIP)",
                url: "/iot/androidApp.zip",
                size: "649MB"
            },
            {
                name: "ESP32 IP Bulma Kodu",
                url: "/iot/esp32_ip_bulma/esp32_ip_bulma.ino",
                size: "695B"
            },
            {
                name: "Arduino Birleşik Kod",
                url: "/iot/arduino_birles1/arduino_birles1.ino",
                size: "7.0KB"
            },
            {
                name: "Tez (PDF)",
                url: "/iot/thesis.pdf",
                size: "3.0MB"
            }
        ],
        gallery: [
            "/iot/android_ana_ekran.jpeg",
            "/iot/3d.JPG",
            "/iot/bottomlayer.JPG",
            "/iot/toplayer.JPG",
            "/iot/connectionschematic.JPG",
            "/iot/mcuschematic.JPG",
            "/iot/pwrschematic.JPG"
        ]
    },
    {
        slug: "matlab-frekans-analizi",
        title: "Matlab Frekans Analizi",
        date: "Mayıs 2024",
        image: "/projefrq.JPG",
        description: "Bu MATLAB GUI uygulaması, kullanıcıların belirli parametrelere göre sinyaller üretip bu sinyalleri hem zaman hem de frekans düzleminde incelemesini sağlar. Kullanıcı arayüzü üzerinde frekans, genlik ve faz kayması değerleri girilerek kare, üçgen, rampa, tam dalga ve yarım dalga doğrultulmuş sinüs/kosinüs gibi farklı sinyal türleri seçilebilir. Seçilen sinyal zaman düzleminde çizilirken, aynı zamanda Fourier dönüşümü alınarak genlik ve faz spektrumları da görsel olarak sunulur. Kullanıcı dostu arayüzü sayesinde sinyallerin davranışları kolayca analiz edilebilir ve temel sinyal işleme kavramları pratik olarak öğrenilebilir. Proje Adı: Matlab Frekans Analizi, Tarih: Mayıs 2024",
        details: "",
        files: [
            {
                name: "MATLAB Kod Dosyası (proje.m)",
                url: "/matlabfreq/matlabcode/proje.m",
                size: "7.9KB"
            },
            {
                name: "MATLAB Arayüz Dosyası (proje.fig)",
                url: "/matlabfreq/matlabcode/proje.fig",
                size: "53KB"
            }
        ],
        gallery: [
            "/matlabfreq/ucgen.JPG",
            "/matlabfreq/rampa.JPG",
            "/matlabfreq/tamdalgacos.JPG",
            "/matlabfreq/tamdalgasin.JPG",
            "/matlabfreq/yarımdalgasin.JPG"
        ]
    },
    {
        slug: "buckboost",
        title: "LM5118 ile 9-36V Girişten 12V Sabit Çıkış Alabilen Buck-Boost Konvertör Tasarımı",
        date: "Ağustos 2024",
        image: "/buckboost.jpg",
        description: "Bu projede, LM5118 entegresi kullanılarak tasarlanan buck-boost konvertör ile 9V ile 36V arasında değişen giriş gerilimi, sabit 12V çıkışa dönüştürülmüştür. Geniş giriş aralığına sahip bu yapı, hem step-down (buck) hem de step-up (boost) modlarında çalışarak kararlı ve verimli bir çıkış sağlar. Özellikle otomotiv, endüstriyel sistemler ve güneş enerjisi gibi değişken besleme kaynaklarında sabit voltaj gerektiren uygulamalar için uygundur.",
        details: "",
        gallery: [
            "/buckboost/bottomlayer.JPG",
            "/buckboost/toplayer.JPG",
            "/buckboost/buckboost.JPG",
            "/buckboost/schematic.JPG",
            "/buckboost/lm5118.jpeg"
        ]
    },
    {
        slug: "btmodule",
        title: "STM32 ile BT Modül AT Komut Gönderimi",
        date: "Nisan 2025",
        image: "/blmodule.jpg",
        description: "Bu projede, BL652 Bluetooth modülünün ismi STM32 mikrodenetleyicisi üzerinden AT komutları ile değiştirilmiştir. Terminal üzerinden çapraz derlenmiş yaklaşık 50 kB boyutundaki autorun dosyası, log kayıtları kullanılarak hex formatında elde edilmiştir. Bu hex veriler STM32 yazılımında dizi (array) olarak tanımlanmış ve debug arayüzü kullanılarak modüle yüklenmiştir. Yükleme işlemi tamamlandıktan sonra, STM32 tarafından UART haberleşmesi üzerinden gönderilen uygun AT komutları ile modülün cihaz adı başarıyla değiştirilmiştir.",
        details: "",
        files: [
            {
                name: "AT Komutları ile BL652 Modül İsimi Değişimi (PDF)",
                url: "/btmodule/AT Komutları ile BL652 Modül İsimi Değişimi.pdf",
                size: "187KB"
            },
            {
                name: "STM32 Gömülü Kod (CubeIDE Projesi, ZIP)",
                url: "/btmodule/EmbeddedCode.zip",
                size: "4.8MB"
            }
        ]
    },
    {
        slug: "motorcontrol",
        title: "Temel Robot kontrol kartı",
        date: "Temmuz 2024",
        image: "/motorcontrol.jpg",
        description: "Bu projede, STM32F103 mikrodenetleyici tabanlı, 2 adet step motor, 2 adet DC motor ve 16x2 LCD ekran içeren çok amaçlı bir robot kontrol PCB'si tasarlanmıştır. 12V giriş gerilimiyle çalışan bu kart, 4 adet buton ile robotun yön kontrolünü manuel olarak sağlayacak şekilde planlanmıştır. Kullanıcı girişlerine karşılık gelen hareket bilgileri, LCD ekran üzerinden anlık olarak görüntülenebilecek şekilde yazılım uyumluluğu gözetilerek tasarım yapılmıştır.",
        details: "",
        gallery: [
            "/rccontrol/3d.JPG",
            "/rccontrol/toplayer.JPG",
            "/rccontrol/bottomlayer.JPG",
            "/rccontrol/schematic.JPG",
            "/rccontrol/schematic2.JPG",
            "/rccontrol/schematic3.JPG"
        ]
    },
    {
        slug: "canopen",
        title: "Gömülü yazılım Tabanlı CANopen ile Aktüatör kullanımı",
        date: "Mayıs 2025",
        image: "/canopen.jpg",
        description: "Bu projede, STM32 mikrodenetleyicisi ve CANopen haberleşme protokolü kullanılarak kompakt aktüatörlerin pozisyon, tork, hız ve fren gibi birçok fonksiyonu hassas bir şekilde kontrol edilmiştir. CANopen'in sunduğu gerçek zamanlı ve güvenilir iletişim altyapısı sayesinde, aktüatörlerin dinamik hareketleri senkronize bir biçimde yönetilmiş; pozisyonlama, hız profili belirleme, anlık tork sınırlaması ve gerektiğinde acil durdurma (frenleme) gibi işlevler başarıyla uygulanmıştır. Sistemin esnek ve modüler yapısı, farklı hareket senaryolarına uyum sağlamasına olanak tanırken, STM32'nin işlem gücü ve CAN haberleşme yetenekleri, endüstriyel seviyede kararlı ve düşük gecikmeli bir kontrol imkânı sunmuştur. Bu yapı sayesinde, robotik sistemlerden otomasyona kadar birçok uygulamada kullanılabilecek, yüksek performanslı bir aktüatör kontrol altyapısı oluşturulmuştur. Bir şirkete yapılması sebebiyle site üzerinde proje kodları ve detayları eklenmemiştir.",
        details: ""
    },
    {
        slug: "saytas",
        title: "Oda Işık Kontrolü Sayısal Devresi",
        date: "Aralık 2024",
        image: "/saytas.jpg",
        description: "Bu projede, sayıcı, karşılaştırıcı ve BCD to 7-segment kod çözücü entegreleri kullanılarak, 7 segment display üzerinden çalışan bir sayısal devre tasarlanmıştır. Devrede yer alan iki adet 7 segment ekran, sırasıyla içeri giren ve dışarı çıkan kişi sayılarını göstermektedir. Giriş ve çıkış bilgileri butonlar yardımıyla sayıcılara aktarılmakta, her bir işlem sayıcılar aracılığıyla sayısal olarak takip edilmektedir. Karşılaştırıcı entegresi sayesinde, giren kişi sayısı çıkan kişi sayısından fazla olduğunda, sistem bunu algılayarak bir uyarı LED'ini aktif hale getirmektedir. Bu yapı, özellikle sınırlı kişi girişine sahip alanlarda basit ve etkili bir kontrol ve bilgilendirme sistemi olarak kullanılabilecek şekilde tasarlanmıştır.",
        details: "",
        files: [
            {
                name: "Proteus Devre Dosyası (ZIP)",
                url: "/7segment/proteus.zip",
                size: "38KB"
            },
            {
                name: "Proje Raporu (PDF)",
                url: "/7segment/proje_raporu.pdf",
                size: "826KB"
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/projeler/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Projeler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/projects.js [app-client] (ecmascript)");
"use client";
;
;
;
;
// Her kelimenin ilk harfi büyük, ancak 'ile' kelimesi küçük kalsın
function customTitleCase(title) {
    return title.split(' ').map((word)=>word.toLowerCase() === 'ile' ? 'ile' : word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function Projeler() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            maxWidth: 1440,
            margin: '0 auto',
            padding: '2.5rem 1rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: '2.7rem',
                    marginBottom: 18,
                    fontWeight: 800,
                    color: '#111',
                    letterSpacing: 0.5,
                    fontFamily: 'Segoe UI, Arial, sans-serif',
                    textShadow: '0 2px 12px #0070f322',
                    textAlign: 'left',
                    lineHeight: 1.1
                },
                children: "Projeler"
            }, void 0, false, {
                fileName: "[project]/app/projeler/page.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    height: 4,
                    background: 'linear-gradient(90deg, #0070f3 0%, #00c6ff 100%)',
                    borderRadius: 2,
                    marginBottom: 38,
                    maxWidth: 180
                }
            }, void 0, false, {
                fileName: "[project]/app/projeler/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 36,
                    justifyContent: 'center',
                    alignItems: 'stretch',
                    width: '100%',
                    minHeight: 800
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$projects$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/projeler/${project.slug}`,
                        style: {
                            flex: '1 1 400px',
                            maxWidth: 420,
                            minWidth: 320,
                            background: 'none',
                            borderRadius: 22,
                            boxShadow: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            textDecoration: 'none',
                            color: '#111',
                            transition: 'none',
                            cursor: 'pointer',
                            overflow: 'visible',
                            height: 700,
                            fontFamily: 'Segoe UI, Arial, sans-serif'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: '#fff',
                                borderRadius: 22,
                                boxShadow: '0 6px 32px #0001',
                                display: 'flex',
                                flexDirection: 'column',
                                height: 700,
                                transition: 'box-shadow 0.2s, transform 0.2s',
                                overflow: 'hidden'
                            },
                            onMouseEnter: (e)=>{
                                e.currentTarget.style.transform = 'scale(1.045)';
                                e.currentTarget.style.boxShadow = '0 12px 36px #0070f344';
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.transform = 'scale(1)';
                                e.currentTarget.style.boxShadow = '0 6px 32px #0001';
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        width: '100%',
                                        height: 260,
                                        background: '#f5f5f5',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: project.image,
                                        alt: project.title,
                                        width: 400,
                                        height: 260,
                                        style: {
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/projeler/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/projeler/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        flex: 1,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        padding: '2rem 1.7rem 2.2rem 1.7rem',
                                        rowGap: 18,
                                        overflowY: 'auto',
                                        maxHeight: 420
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    style: {
                                                        fontSize: '1.38rem',
                                                        marginBottom: 14,
                                                        fontWeight: 600,
                                                        letterSpacing: 0.2,
                                                        lineHeight: 1.3
                                                    },
                                                    children: customTitleCase(project.title)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/projeler/page.tsx",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: '#444',
                                                        fontSize: '1.05rem',
                                                        marginBottom: 20,
                                                        lineHeight: 1.7,
                                                        letterSpacing: 0.01
                                                    },
                                                    children: project.description
                                                }, void 0, false, {
                                                    fileName: "[project]/app/projeler/page.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/projeler/page.tsx",
                                            lineNumber: 100,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: '#888',
                                                fontSize: '1.08rem',
                                                marginTop: 'auto',
                                                letterSpacing: 0.01,
                                                lineHeight: 1.5
                                            },
                                            children: project.date
                                        }, void 0, false, {
                                            fileName: "[project]/app/projeler/page.tsx",
                                            lineNumber: 104,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/projeler/page.tsx",
                                    lineNumber: 99,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/projeler/page.tsx",
                            lineNumber: 70,
                            columnNumber: 13
                        }, this)
                    }, project.slug, false, {
                        fileName: "[project]/app/projeler/page.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/projeler/page.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/projeler/page.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_c = Projeler;
var _c;
__turbopack_context__.k.register(_c, "Projeler");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_6f680858._.js.map