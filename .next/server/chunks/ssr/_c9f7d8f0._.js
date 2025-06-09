module.exports = {

"[project]/.next-internal/server/app/yazilar/[slug]/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/content/yazilar.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "yazilar": (()=>yazilar)
});
const yazilar = [
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
    }
];
}}),
"[project]/app/yazilar/[slug]/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>YaziDetay)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$yazilar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/content/yazilar.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
;
;
;
;
;
function YaziDetay({ params }) {
    const yazi = __TURBOPACK__imported__module__$5b$project$5d2f$content$2f$yazilar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["yazilar"].find((y)=>y.slug === params.slug);
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    if (!yazi) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: {
            maxWidth: 900,
            margin: '0 auto',
            padding: '2.5rem 1rem'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    fontSize: '2.3rem',
                    fontWeight: 800,
                    color: '#111',
                    letterSpacing: 0.5,
                    fontFamily: 'Segoe UI, Arial, sans-serif',
                    textShadow: '0 2px 12px #0070f322',
                    marginBottom: 18
                },
                children: yazi.title
            }, void 0, false, {
                fileName: "[project]/app/yazilar/[slug]/page.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: '100%',
                    height: 4,
                    background: 'linear-gradient(90deg, #0070f3 0%, #00c6ff 100%)',
                    borderRadius: 2,
                    marginBottom: 32,
                    maxWidth: 180
                }
            }, void 0, false, {
                fileName: "[project]/app/yazilar/[slug]/page.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '2.5rem',
                    alignItems: 'flex-start',
                    marginBottom: 32
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: 400,
                            height: 260,
                            background: '#f5f5f5',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            borderRadius: 12,
                            overflow: 'hidden',
                            cursor: 'pointer'
                        },
                        onClick: ()=>setModalOpen(true),
                        title: "Büyütmek için tıklayın",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
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
                            fileName: "[project]/app/yazilar/[slug]/page.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/yazilar/[slug]/page.tsx",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            flex: 1
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    color: '#888',
                                    fontSize: 16,
                                    marginBottom: 10
                                },
                                children: yazi.date
                            }, void 0, false, {
                                fileName: "[project]/app/yazilar/[slug]/page.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '1.08rem',
                                    color: '#444',
                                    lineHeight: 1.7,
                                    marginBottom: 18
                                },
                                children: yazi.description
                            }, void 0, false, {
                                fileName: "[project]/app/yazilar/[slug]/page.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                style: {
                                    padding: 0,
                                    listStyle: 'none',
                                    margin: 0
                                },
                                children: yazi.files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        style: {
                                            marginBottom: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: file.url,
                                                download: true,
                                                style: {
                                                    color: '#1976d2',
                                                    textDecoration: 'underline',
                                                    fontSize: 16
                                                },
                                                children: file.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/yazilar/[slug]/page.tsx",
                                                lineNumber: 27,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                style: {
                                                    color: '#888',
                                                    marginLeft: 8,
                                                    fontSize: 14
                                                },
                                                children: [
                                                    "(",
                                                    file.size,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/yazilar/[slug]/page.tsx",
                                                lineNumber: 28,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, file.url, true, {
                                        fileName: "[project]/app/yazilar/[slug]/page.tsx",
                                        lineNumber: 26,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/yazilar/[slug]/page.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/yazilar/[slug]/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/yazilar/[slug]/page.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            modalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                onClick: ()=>setModalOpen(false),
                style: {
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(0,0,0,0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                    cursor: 'zoom-out'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: yazi.image,
                    alt: yazi.title,
                    width: 900,
                    height: 600,
                    style: {
                        maxWidth: '90vw',
                        maxHeight: '80vh',
                        objectFit: 'contain',
                        borderRadius: 16,
                        boxShadow: '0 8px 32px #0008'
                    }
                }, void 0, false, {
                    fileName: "[project]/app/yazilar/[slug]/page.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/yazilar/[slug]/page.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/yazilar/[slug]/page.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/yazilar/[slug]/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/yazilar/[slug]/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_c9f7d8f0._.js.map