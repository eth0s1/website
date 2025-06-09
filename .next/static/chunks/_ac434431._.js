(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/content/yazilar.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "yazilar": (()=>yazilar)
});
const yazilar = [
    {
        slug: "bldc-foc",
        title: "IHM08-M1 ile BLDC FOC Kontrol",
        date: "Şubat 2025",
        description: "Bu çalışmada, STM32 Nucleo-F103 geliştirme kartı ile IHM08M1 motor sürücü kartı kullanılarak bir BLDC motor kontrol sistemi gerçekleştirilmiştir. Sistem tasarımında, ST Motor Control Workbench yazılımı üzerinden motor parametreleri belirlenmiş ve bu parametrelere uygun olarak STM32CubeIDE üzerinde çalışacak gömülü yazılım otomatik olarak oluşturulmuştur. Geliştirilen yazılım, STM32 kartına yüklenerek motorun kontrolü sağlanmıştır. Kontrol süreci, ST'nin Motor Pilot arayüzü üzerinden izlenmiş ve yönetilmiştir. Bu uygulamada motorun hassas ve verimli çalışmasını sağlamak amacıyla FOC (Field Oriented Control) yöntemi tercih edilmiştir. Gerçekleştirilen sistem, hem donanım hem de yazılım açısından STM32 ekosisteminin güçlü araçlarıyla entegre bir şekilde çalışarak başarılı bir BLDC motor kontrol çözümü sunmuştur.",
        image: "/bldc/daa8d918-d013-45f4-aafe-2657dc6f4d7c.jpg",
        files: [
            {
                name: "Proje Raporu (PDF)",
                url: "/bldc/NUCLEO F302R8 VE IHM08M1 İLE BLDC MOTOR SÜRÜMÜ .pdf",
                size: "1.0MB"
            }
        ]
    },
    {
        slug: "buck-converter",
        title: "Buck Converter (Alçaltan Dönüştürücü Tasarımı)",
        date: "Mayıs 2024",
        image: "/buckconverter/buck.JPG",
        description: "Üniversitede alınan seçmeli Güç Elektroniği dersi kapsamında bir buck converter (alçaltan dönüştürücü) devresi tasarlanmış ve bu devrenin MATLAB-Simulink ortamındaki simülasyonu gerçekleştirilmiştir. Simülasyon sırasında elde edilen osiloskop dalga formları, laboratuvar uygulamasında gerçek donanım üzerinde elde edilen osiloskop görüntüleriyle karşılaştırılmış ve gözlemler yapılmıştır. Bu süreçte özellikle duty cycle (çalışma çevrimi oranı), anahtarlama frekansı ve yük direnci gibi parametrelerde yapılan değişikliklerin sistem üzerindeki etkileri incelenmiştir. Ayrıca devre farklı iletim modlarında – CCM (Sürekli İletim Modu), DCM (Kesikli İletim Modu) ve BCM (Sınırda İletim Modu) – çalıştırılarak davranışları gözlemlenmiştir. Bunun yanında, devrede kullanılan MOSFET ve diyot bağlantıları farklı şekillerde yapılandırılarak sistemin performansı üzerindeki etkileri değerlendirilmiştir. Elde edilen veriler üzerinden analizler yapılarak konverter tasarımına dair kapsamlı bir değerlendirme gerçekleştirilmiştir.",
        files: [
            {
                name: "buckconverter (Simulink)",
                url: "/buckconverter/buckconverter.slx",
                size: "139KB"
            },
            {
                name: "guncelBuckConv (PDF)",
                url: "/buckconverter/gucelBuckConv.pdf",
                size: "1.7MB"
            },
            {
                name: "buck_con (MATLAB)",
                url: "/buckconverter/buck_con.m",
                size: "208B"
            }
        ]
    },
    {
        slug: "boost-converter",
        title: "Boost Converter (Yükselten Dönüştürücü Tasarımı)",
        date: "Mayıs 2024",
        image: "/boostconverter/boost.JPG",
        description: "Üniversitede alınan seçmeli Güç Elektroniği dersi kapsamında bir boost converter (yükselten dönüştürücü) devresi tasarlanmış ve bu devrenin MATLAB-Simulink ortamındaki simülasyonu gerçekleştirilmiştir. Simülasyon sırasında elde edilen osiloskop dalga formları, laboratuvar uygulamasında gerçek donanım üzerinde elde edilen osiloskop görüntüleriyle karşılaştırılmış ve gözlemler yapılmıştır.",
        files: [
            {
                name: "Boost Converter Simülasyon Dosyası (SLX)",
                url: "/boostconverter/gucboost.slx",
                size: "39KB"
            },
            {
                name: "Boost Converter Raporu (PDF)",
                url: "/boostconverter/boostconverter.pdf",
                size: "2.4MB"
            }
        ]
    },
    {
        slug: "buckboost-converter",
        title: "Buck-Boost Converter (Alçaltan-Yükselten Dönüştürücü) Tasarımı",
        date: "Mayıs 2024",
        image: "/buckboostyazi/buckboost.JPG",
        description: "Üniversitede alınan seçmeli Güç Elektroniği dersi kapsamında bir buck-boost converter (alçaltan-yükselten dönüştürücü) devresi tasarlanmış ve bu devrenin MATLAB-Simulink ortamındaki simülasyonu gerçekleştirilmiştir.",
        files: [
            {
                name: "Buck-Boost Converter Simülasyon Dosyası (SLX)",
                url: "/buckboostyazi/buckboost.slx",
                size: "41KB"
            },
            {
                name: "Buck-Boost Converter Raporu (PDF)",
                url: "/buckboostyazi/buckboost.pdf",
                size: "86KB"
            }
        ]
    },
    {
        slug: "flyback-converter",
        title: "Flyback Converter Tasarımı",
        date: "Haziran 2024",
        image: "/flyback/flyback.JPG",
        description: "Üniversitede alınan seçmeli Güç Elektroniği dersi kapsamında bir Flyback devresi tasarlanmış ve bu devrenin MATLAB-Simulink ortamındaki simülasyonu gerçekleştirilmiştir.",
        files: [
            {
                name: "Flyback Simülasyon Dosyası (SLX)",
                url: "/flyback/flyback.slx",
                size: "42KB"
            },
            {
                name: "Flyback Raporu (PDF)",
                url: "/flyback/FLYBACK.pdf",
                size: "129KB"
            },
            {
                name: "Flyback MATLAB Kodu (M)",
                url: "/flyback/flyback.m",
                size: "227B"
            }
        ]
    },
    {
        title: "Matlab to PLC Veri Aktarımı",
        date: "Ocak 2023",
        hazirlayanlar: "Ethem Işıldar, Hayati Yılmaz",
        description: "Bu çalışmada, Siemens TIA Portal ortamı kullanılarak MATLAB ile PLC arasında haberleşme sağlanmıştır. Yapılan uygulamada, her iki sistem arasında veri alışverişi gerçekleştirilebilmesi için IP adresi atamaları yapılmış ve PLC programı içerisine uygun bloklar eklenmiştir. Böylece PLC tarafından gönderilen veriler MATLAB ortamında okunabilir hale gelmiş, aynı şekilde MATLAB üzerinden gönderilen veriler de PLC tarafından alınarak işlenebilmiştir. Bu haberleşmenin test edilmesi ve doğrulanması amacıyla, Siemens'in kendi PLC simülasyon aracı (PLCSIM) kullanılmıştır. Bu sayede fiziksel donanım olmadan sistemin doğruluğu sanal ortamda test edilmiş ve haberleşme senaryoları başarıyla gerçekleştirilmiştir.",
        image: "/matlabtoplc/logo.JPG",
        pdf: "/matlabtoplc/matlab_to_plc.pdf",
        files: [
            {
                name: "Proje Raporu (PDF)",
                url: "/matlabtoplc/matlab_to_plc.pdf",
                size: "443KB"
            }
        ],
        slug: "matlabtoplc"
    },
    {
        slug: "wattmetre",
        title: "PIC Mikrodenetleyici ile Wattmetre Uygulaması",
        date: "Nisan 2024",
        description: "Bu projede, PIC16F877 mikrodenetleyicisi kullanılarak potansiyometreler aracılığıyla giriş değerlerinin ayarlandığı ve wattmetre işlevi gören bir sistem tasarlanmıştır. Sistem, mikrodenetleyici ile programlanarak gerekli işlemleri gerçekleştirecek şekilde hex dosyası oluşturulmuş ve bu dosya Proteus simülasyon ortamında test edilmiştir. Potansiyometreler üzerinden girilen gerilim ve akım değerlerine göre gerçek zamanlı olarak güç (watt) hesabı yapılmakta, sonuçlar Proteus üzerindeki sanal LCD ekran veya benzeri bir arayüz aracılığıyla görselleştirilmektedir. Bu uygulama sayesinde hem analog girişlerin işlenmesi hem de sayısal hesaplamaların mikrodenetleyici ile nasıl yapılabileceği örneklenmiş, wattmetre fonksiyonunun yazılım ve donanım entegrasyonu başarılı bir şekilde simüle edilmiştir.",
        image: "/wattmetre/wattmetre.JPG",
        files: [
            {
                name: "Proteus ve HEX Dosyaları (ZIP)",
                url: "/wattmetre/proteusandhex.zip",
                size: "29KB"
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/yazilar/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Yazilar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$yazilar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/yazilar.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Yazilar() {
    _s();
    // Animasyon için ref kullan
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
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
                children: "Yazılar"
            }, void 0, false, {
                fileName: "[project]/app/yazilar/page.tsx",
                lineNumber: 12,
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
                fileName: "[project]/app/yazilar/page.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 36,
                    width: '100%',
                    minHeight: 400
                },
                children: __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$yazilar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yazilar"].map((yazi, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>cardRefs.current[idx] = el,
                        style: {
                            background: '#fff',
                            borderRadius: 22,
                            boxShadow: '0 6px 32px #0001',
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'stretch',
                            cursor: 'pointer',
                            overflow: 'hidden',
                            transition: 'box-shadow 0.2s, transform 0.2s',
                            minHeight: 260,
                            maxWidth: 1100,
                            margin: '0 auto'
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
                                    width: 400,
                                    height: 260,
                                    background: '#f5f5f5',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: yazi.image,
                                    alt: yazi.title,
                                    width: 400,
                                    height: 260,
                                    style: {
                                        objectFit: 'contain',
                                        width: '100%',
                                        height: '100%'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/yazilar/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/yazilar/page.tsx",
                                lineNumber: 67,
                                columnNumber: 13
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
                                    maxHeight: 260
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/yazilar/${yazi.slug}`,
                                    style: {
                                        textDecoration: 'none',
                                        color: 'inherit',
                                        display: 'block'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            style: {
                                                fontSize: '1.38rem',
                                                marginBottom: 14,
                                                fontWeight: 600,
                                                letterSpacing: 0.2,
                                                lineHeight: 1.3
                                            },
                                            children: yazi.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/yazilar/page.tsx",
                                            lineNumber: 78,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: '#444',
                                                fontSize: '1.05rem',
                                                marginBottom: 20,
                                                lineHeight: 1.7,
                                                letterSpacing: 0.01
                                            },
                                            children: yazi.description
                                        }, void 0, false, {
                                            fileName: "[project]/app/yazilar/page.tsx",
                                            lineNumber: 79,
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
                                            children: [
                                                yazi.date,
                                                yazi.hazirlayanlar && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            style: {
                                                                margin: '0 6px'
                                                            },
                                                            children: "•"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/yazilar/page.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: yazi.hazirlayanlar
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/yazilar/page.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/yazilar/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/yazilar/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/yazilar/page.tsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this)
                        ]
                    }, yazi.slug, true, {
                        fileName: "[project]/app/yazilar/page.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/yazilar/page.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/yazilar/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_s(Yazilar, "RDB6Gmp7XqrQHsbnbJ5P45oSkzY=");
_c = Yazilar;
var _c;
__turbopack_context__.k.register(_c, "Yazilar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_ac434431._.js.map