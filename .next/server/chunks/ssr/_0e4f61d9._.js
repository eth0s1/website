module.exports = {

"[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Navbar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
function Navbar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const links = [
        {
            href: "/#about",
            label: "Hakkımda"
        },
        {
            href: "/yazilar",
            label: "Yazılar"
        },
        {
            href: "/projeler",
            label: "Projeler"
        },
        {
            href: "/iletisim",
            label: "İletişim"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        style: {
            width: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 100,
            background: '#fff',
            boxShadow: '0 2px 12px #0001',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 36,
            padding: '1.1rem 0 1.1rem 0',
            fontSize: '1.18rem',
            fontWeight: 500,
            letterSpacing: 0.2,
            fontFamily: 'Segoe UI, Fira Mono, Arial, sans-serif'
        },
        children: links.map((link)=>{
            const isActive = link.href === "/#about" && pathname === "/" || link.href !== "/#about" && pathname.startsWith(link.href.replace("#about", ""));
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: link.href,
                style: {
                    color: isActive ? '#0070f3' : '#222',
                    textDecoration: 'none',
                    margin: '0 18px',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: isActive ? '1.25rem' : '1.13rem',
                    letterSpacing: 0.3,
                    borderBottom: isActive ? '2.5px solid #0070f3' : '2.5px solid transparent',
                    transition: 'all 0.22s cubic-bezier(.4,2,.6,1)',
                    borderRadius: 6,
                    padding: '0.2rem 0.7rem',
                    boxShadow: isActive ? '0 2px 12px #0070f322' : 'none'
                },
                onMouseEnter: (e)=>{
                    e.currentTarget.style.transform = 'scale(1.11)';
                    e.currentTarget.style.boxShadow = '0 4px 18px #0070f344';
                },
                onMouseLeave: (e)=>{
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = isActive ? '0 2px 12px #0070f322' : 'none';
                },
                children: link.label
            }, link.href, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 37,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/projeler/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Projeler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../../content/projeler'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
// Her kelimenin ilk harfi büyük, ancak 'ile' kelimesi küçük kalsın
function customTitleCase(title) {
    return title.split(' ').map((word)=>word.toLowerCase() === 'ile' ? 'ile' : word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
function Projeler() {
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [expandedProject, setExpandedProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedImage, setSelectedImage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (titleRef.current) {
            titleRef.current.style.opacity = '0';
            titleRef.current.style.transform = 'translateY(-20px)';
            setTimeout(()=>{
                if (titleRef.current) {
                    titleRef.current.style.transition = 'all 0.8s ease-out';
                    titleRef.current.style.opacity = '1';
                    titleRef.current.style.transform = 'translateY(0)';
                }
            }, 100);
        }
    }, []);
    const toggleProject = (slug)=>{
        setExpandedProject(expandedProject === slug ? null : slug);
        setSelectedImage(null);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/projeler/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                style: {
                    maxWidth: 1440,
                    margin: '0 auto',
                    padding: '2.5rem 1rem'
                },
                className: "jsx-5f7edb6c038c4b60",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: titleRef,
                        style: {
                            fontSize: '2.7rem',
                            marginBottom: 18,
                            fontWeight: 800,
                            color: '#111',
                            letterSpacing: 0.5,
                            fontFamily: 'Playfair Display, serif',
                            textShadow: '0 2px 12px #0070f322',
                            textAlign: 'center',
                            lineHeight: 1.1
                        },
                        className: "jsx-5f7edb6c038c4b60",
                        children: "Projelerim"
                    }, void 0, false, {
                        fileName: "[project]/app/projeler/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '100%',
                            height: 4,
                            background: '#000',
                            borderRadius: 2,
                            marginBottom: 24,
                            maxWidth: 180,
                            margin: '0 auto 24px auto'
                        },
                        className: "jsx-5f7edb6c038c4b60"
                    }, void 0, false, {
                        fileName: "[project]/app/projeler/page.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            textAlign: 'center',
                            fontSize: '1.1rem',
                            color: '#444',
                            maxWidth: 800,
                            margin: '0 auto 38px auto',
                            lineHeight: 1.6
                        },
                        className: "jsx-5f7edb6c038c4b60",
                        children: "Okul kapsamında ve hobi olarak uğraştığım projeleri bu sekmede inceleyebilirsiniz."
                    }, void 0, false, {
                        fileName: "[project]/app/projeler/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 36,
                            width: '100%',
                            minHeight: 400
                        },
                        className: "jsx-5f7edb6c038c4b60",
                        children: projeler.map((project, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>cardRefs.current[idx] = el,
                                style: {
                                    background: '#fff',
                                    borderRadius: 22,
                                    boxShadow: '0 8px 40px rgba(0, 0, 0, 0.15)',
                                    display: 'flex',
                                    flexDirection: 'row',
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease-in-out',
                                    height: 260,
                                    maxWidth: 1100,
                                    margin: '0 auto',
                                    position: 'relative',
                                    zIndex: expandedProject === project.slug ? 10 : 1,
                                    transform: expandedProject === project.slug ? 'scale(1.02)' : 'scale(1)'
                                },
                                onMouseEnter: (e)=>{
                                    if (expandedProject !== project.slug) {
                                        e.currentTarget.style.transform = 'scale(1.02)';
                                        e.currentTarget.style.boxShadow = '0 16px 48px rgba(0, 0, 0, 0.25)';
                                    }
                                },
                                onMouseLeave: (e)=>{
                                    if (expandedProject !== project.slug) {
                                        e.currentTarget.style.transform = 'scale(1)';
                                        e.currentTarget.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.15)';
                                    }
                                },
                                onClick: ()=>toggleProject(project.slug),
                                className: "jsx-5f7edb6c038c4b60",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: 400,
                                            height: 260,
                                            background: '#f5f5f5',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        },
                                        className: "jsx-5f7edb6c038c4b60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                                            lineNumber: 119,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/projeler/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between',
                                            padding: '2rem 1.7rem 2.2rem 1.7rem',
                                            rowGap: 18,
                                            overflowY: 'auto'
                                        },
                                        className: "jsx-5f7edb6c038c4b60",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-5f7edb6c038c4b60",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        style: {
                                                            fontSize: '1.38rem',
                                                            marginBottom: 14,
                                                            fontWeight: 600,
                                                            letterSpacing: 0.2,
                                                            lineHeight: 1.3
                                                        },
                                                        className: "jsx-5f7edb6c038c4b60",
                                                        children: project.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/projeler/page.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: '#444',
                                                            fontSize: '1.05rem',
                                                            marginBottom: 20,
                                                            lineHeight: 1.7,
                                                            letterSpacing: 0.01
                                                        },
                                                        className: "jsx-5f7edb6c038c4b60",
                                                        children: project.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/projeler/page.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/projeler/page.tsx",
                                                lineNumber: 128,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    color: '#888',
                                                    fontSize: '1.08rem',
                                                    marginTop: 'auto',
                                                    letterSpacing: 0.01,
                                                    lineHeight: 1.5
                                                },
                                                className: "jsx-5f7edb6c038c4b60",
                                                children: project.date
                                            }, void 0, false, {
                                                fileName: "[project]/app/projeler/page.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    marginTop: '1rem',
                                                    fontSize: '1.05rem',
                                                    color: '#666',
                                                    textAlign: 'center'
                                                },
                                                className: "jsx-5f7edb6c038c4b60",
                                                children: expandedProject === project.slug ? 'Detayları Gizle' : 'Detaylar için tıklayınız >>'
                                            }, void 0, false, {
                                                fileName: "[project]/app/projeler/page.tsx",
                                                lineNumber: 135,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/projeler/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    expandedProject === project.slug && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            position: 'fixed',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            background: 'rgba(0, 0, 0, 0.85)',
                                            zIndex: 100,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '2rem',
                                            overflowY: 'auto',
                                            animation: 'fadeIn 0.3s ease-out'
                                        },
                                        className: "jsx-5f7edb6c038c4b60",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                background: '#fff',
                                                borderRadius: 22,
                                                padding: '2rem',
                                                maxWidth: '90%',
                                                maxHeight: '90vh',
                                                overflowY: 'auto',
                                                position: 'relative',
                                                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
                                                animation: 'scaleIn 0.3s ease-out'
                                            },
                                            className: "jsx-5f7edb6c038c4b60",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: (e)=>{
                                                        e.stopPropagation();
                                                        toggleProject(project.slug);
                                                    },
                                                    style: {
                                                        position: 'absolute',
                                                        top: '1rem',
                                                        right: '1rem',
                                                        background: 'none',
                                                        border: 'none',
                                                        fontSize: '1.5rem',
                                                        cursor: 'pointer',
                                                        color: '#666',
                                                        padding: '0.5rem',
                                                        borderRadius: '50%',
                                                        width: '40px',
                                                        height: '40px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        transition: 'background-color 0.2s'
                                                    },
                                                    onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = '#f5f5f5',
                                                    onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = 'transparent',
                                                    className: "jsx-5f7edb6c038c4b60",
                                                    children: "×"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/projeler/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: {
                                                        padding: '1rem'
                                                    },
                                                    className: "jsx-5f7edb6c038c4b60",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            style: {
                                                                fontSize: '1.4rem',
                                                                fontWeight: 600,
                                                                marginBottom: '1.5rem'
                                                            },
                                                            className: "jsx-5f7edb6c038c4b60",
                                                            children: project.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projeler/page.tsx",
                                                            lineNumber: 197,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                color: '#444',
                                                                fontSize: '1.1rem',
                                                                lineHeight: 1.7,
                                                                marginBottom: '2rem'
                                                            },
                                                            className: "jsx-5f7edb6c038c4b60",
                                                            children: project.detailedDescription || project.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/projeler/page.tsx",
                                                            lineNumber: 198,
                                                            columnNumber: 23
                                                        }, this),
                                                        project.technologies && project.technologies.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginBottom: '2rem'
                                                            },
                                                            className: "jsx-5f7edb6c038c4b60",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    style: {
                                                                        fontSize: '1.2rem',
                                                                        fontWeight: 600,
                                                                        marginBottom: '1rem'
                                                                    },
                                                                    className: "jsx-5f7edb6c038c4b60",
                                                                    children: "Kullanılan Teknolojiler"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/projeler/page.tsx",
                                                                    lineNumber: 205,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'flex',
                                                                        flexWrap: 'wrap',
                                                                        gap: '0.8rem'
                                                                    },
                                                                    className: "jsx-5f7edb6c038c4b60",
                                                                    children: project.technologies.map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                background: '#f0f0f0',
                                                                                padding: '0.5rem 1rem',
                                                                                borderRadius: '20px',
                                                                                fontSize: '0.9rem',
                                                                                color: '#444',
                                                                                fontWeight: 500
                                                                            },
                                                                            className: "jsx-5f7edb6c038c4b60",
                                                                            children: tech
                                                                        }, index, false, {
                                                                            fileName: "[project]/app/projeler/page.tsx",
                                                                            lineNumber: 208,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/projeler/page.tsx",
                                                                    lineNumber: 206,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/projeler/page.tsx",
                                                            lineNumber: 204,
                                                            columnNumber: 25
                                                        }, this),
                                                        project.gallery && project.gallery.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                marginTop: '2rem'
                                                            },
                                                            className: "jsx-5f7edb6c038c4b60",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    style: {
                                                                        fontSize: '1.2rem',
                                                                        fontWeight: 600,
                                                                        marginBottom: '1rem'
                                                                    },
                                                                    className: "jsx-5f7edb6c038c4b60",
                                                                    children: "Proje Görselleri"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/projeler/page.tsx",
                                                                    lineNumber: 229,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        display: 'grid',
                                                                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                                                                        gap: '1.5rem',
                                                                        marginBottom: '1rem'
                                                                    },
                                                                    className: "jsx-5f7edb6c038c4b60",
                                                                    children: project.gallery.map((image, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            onClick: (e)=>{
                                                                                e.stopPropagation();
                                                                                setSelectedImage(image);
                                                                            },
                                                                            style: {
                                                                                cursor: 'pointer',
                                                                                borderRadius: '12px',
                                                                                overflow: 'hidden',
                                                                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                                                                transition: 'transform 0.2s'
                                                                            },
                                                                            onMouseEnter: (e)=>e.currentTarget.style.transform = 'scale(1.05)',
                                                                            onMouseLeave: (e)=>e.currentTarget.style.transform = 'scale(1)',
                                                                            className: "jsx-5f7edb6c038c4b60",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                                src: image,
                                                                                alt: `${project.title} - Görsel ${index + 1}`,
                                                                                width: 300,
                                                                                height: 200,
                                                                                style: {
                                                                                    width: '100%',
                                                                                    height: '200px',
                                                                                    objectFit: 'cover'
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/projeler/page.tsx",
                                                                                lineNumber: 253,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, index, false, {
                                                                            fileName: "[project]/app/projeler/page.tsx",
                                                                            lineNumber: 237,
                                                                            columnNumber: 31
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/projeler/page.tsx",
                                                                    lineNumber: 230,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/projeler/page.tsx",
                                                            lineNumber: 228,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/projeler/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/projeler/page.tsx",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/projeler/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, project.slug, true, {
                                fileName: "[project]/app/projeler/page.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/projeler/page.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    selectedImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        onClick: ()=>setSelectedImage(null),
                        style: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'rgba(0, 0, 0, 0.9)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000,
                            cursor: 'pointer',
                            animation: 'fadeIn 0.2s ease-out'
                        },
                        className: "jsx-5f7edb6c038c4b60",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                maxWidth: '90vw',
                                maxHeight: '90vh'
                            },
                            className: "jsx-5f7edb6c038c4b60",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                src: selectedImage,
                                alt: "Büyük görsel",
                                width: 1200,
                                height: 800,
                                style: {
                                    width: 'auto',
                                    height: 'auto',
                                    maxWidth: '100%',
                                    maxHeight: '90vh',
                                    objectFit: 'contain'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/projeler/page.tsx",
                                lineNumber: 293,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/projeler/page.tsx",
                            lineNumber: 292,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/projeler/page.tsx",
                        lineNumber: 275,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        id: "5f7edb6c038c4b60",
                        children: "@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes scaleIn{0%{opacity:0;transform:scale(.95)}to{opacity:1;transform:scale(1)}}"
                    }, void 0, false, void 0, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projeler/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}}),

};

//# sourceMappingURL=_0e4f61d9._.js.map