"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"pages/index.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"pages/index.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var components_pages_components_Pong__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/pages/components/Pong */ \"./pages/components/Pong.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const response = await fetch(\"/api/your-edge-api-route\");\n                const data = await response.json();\n                setData(data);\n            } catch (error) {\n                console.error(\"Error fetching data:\", error);\n            }\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"flex min-h-screen flex-col items-center justify-between p-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30\",\n                        children: [\n                            \"Get started by editing\\xa0\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                className: \"font-mono font-bold\",\n                                children: \"pages/index.tsx\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                                lineNumber: 29,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0\",\n                            href: \"https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app\",\n                            target: \"_blank\",\n                            rel: \"noopener noreferrer\",\n                            children: [\n                                \"By GPT4\",\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_pages_components_Pong__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app\",\n                        className: \"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"\".concat((next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className), \" mb-3 text-2xl font-semibold\"),\n                                children: [\n                                    \"Docs\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\",\n                                        children: \"->\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                                lineNumber: 70,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\".concat((next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className), \" m-0 max-w-[30ch] text-sm opacity-50\"),\n                                children: \"Find in-depth information about Next.js features and API.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app\",\n                        className: \"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"\".concat((next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className), \" mb-3 text-2xl font-semibold\"),\n                                children: [\n                                    \"Learn\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\",\n                                        children: \"->\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                                lineNumber: 89,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\".concat((next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className), \" m-0 max-w-[30ch] text-sm opacity-50\"),\n                                children: \"Learn about Next.js in an interactive course with\\xa0quizzes!\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app\",\n                        className: \"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"\".concat((next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className), \" mb-3 text-2xl font-semibold\"),\n                                children: [\n                                    \"Templates\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\",\n                                        children: \"->\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                                        lineNumber: 110,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                                lineNumber: 108,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\".concat((next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className), \" m-0 max-w-[30ch] text-sm opacity-50\"),\n                                children: \"Discover and deploy boilerplate example Next.js\\xa0projects.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                                lineNumber: 114,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app\",\n                        className: \"group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30\",\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"\".concat((next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className), \" mb-3 text-2xl font-semibold\"),\n                                children: [\n                                    \"Deploy\",\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none\",\n                                        children: \"->\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                                        lineNumber: 129,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                                lineNumber: 127,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"\".concat((next_font_google_target_css_path_pages_index_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className), \" m-0 max-w-[30ch] text-sm opacity-50\"),\n                                children: \"Instantly deploy your Next.js site to a shareable URL with Vercel.\"\n                            }, void 0, false, {\n                                fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                                lineNumber: 133,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                        lineNumber: 121,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/taaniel/ms/next-ssr-test/pages/index.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUtNQTtBQUg4QztBQUNwQjtBQUlqQixTQUFTRyxPQUFPOztJQUU3QkQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLE1BQU1FLFlBQVksVUFBWTtZQUM1QixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTTtnQkFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO2dCQUNoQ0MsUUFBUUY7WUFDVixFQUFFLE9BQU9HLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyx3QkFBd0JBO1lBQ3hDO1FBQ0Y7UUFFQU47SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1E7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUNDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQUVGLFdBQVU7OzRCQUE0UjswQ0FFdlMsOERBQUNHO2dDQUFLSCxXQUFVOzBDQUFzQjs7Ozs7Ozs7Ozs7O2tDQUV4Qyw4REFBQ0M7d0JBQUlELFdBQVU7a0NBQ2IsNEVBQUNJOzRCQUNDSixXQUFVOzRCQUNWSyxNQUFLOzRCQUNMQyxRQUFPOzRCQUNQQyxLQUFJOztnQ0FDTDtnQ0FDUzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQWFkLDhEQUFDTjtnQkFBSUQsV0FBVTswQkFTYiw0RUFBQ1osd0VBQUlBOzs7Ozs7Ozs7OzBCQUdQLDhEQUFDYTtnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNJO3dCQUNDQyxNQUFLO3dCQUNMTCxXQUFVO3dCQUNWTSxRQUFPO3dCQUNQQyxLQUFJOzswQ0FFSiw4REFBQ0M7Z0NBQUdSLFdBQVcsR0FBbUIsT0FBaEJiLDRKQUFlLEVBQUM7O29DQUErQjtvQ0FDMUQ7a0RBQ0wsOERBQUNzQjt3Q0FBS1QsV0FBVTtrREFBMkY7Ozs7Ozs7Ozs7OzswQ0FJN0csOERBQUNFO2dDQUNDRixXQUFXLEdBQW1CLE9BQWhCYiw0SkFBZSxFQUFDOzBDQUMvQjs7Ozs7Ozs7Ozs7O2tDQUtILDhEQUFDaUI7d0JBQ0NDLE1BQUs7d0JBQ0xMLFdBQVU7d0JBQ1ZNLFFBQU87d0JBQ1BDLEtBQUk7OzBDQUVKLDhEQUFDQztnQ0FBR1IsV0FBVyxHQUFtQixPQUFoQmIsNEpBQWUsRUFBQzs7b0NBQStCO29DQUN6RDtrREFDTiw4REFBQ3NCO3dDQUFLVCxXQUFVO2tEQUEyRjs7Ozs7Ozs7Ozs7OzBDQUk3Ryw4REFBQ0U7Z0NBQ0NGLFdBQVcsR0FBbUIsT0FBaEJiLDRKQUFlLEVBQUM7MENBQy9COzs7Ozs7Ozs7Ozs7a0NBS0gsOERBQUNpQjt3QkFDQ0MsTUFBSzt3QkFDTEwsV0FBVTt3QkFDVk0sUUFBTzt3QkFDUEMsS0FBSTs7MENBRUosOERBQUNDO2dDQUFHUixXQUFXLEdBQW1CLE9BQWhCYiw0SkFBZSxFQUFDOztvQ0FBK0I7b0NBQ3JEO2tEQUNWLDhEQUFDc0I7d0NBQUtULFdBQVU7a0RBQTJGOzs7Ozs7Ozs7Ozs7MENBSTdHLDhEQUFDRTtnQ0FDQ0YsV0FBVyxHQUFtQixPQUFoQmIsNEpBQWUsRUFBQzswQ0FDL0I7Ozs7Ozs7Ozs7OztrQ0FLSCw4REFBQ2lCO3dCQUNDQyxNQUFLO3dCQUNMTCxXQUFVO3dCQUNWTSxRQUFPO3dCQUNQQyxLQUFJOzswQ0FFSiw4REFBQ0M7Z0NBQUdSLFdBQVcsR0FBbUIsT0FBaEJiLDRKQUFlLEVBQUM7O29DQUErQjtvQ0FDeEQ7a0RBQ1AsOERBQUNzQjt3Q0FBS1QsV0FBVTtrREFBMkY7Ozs7Ozs7Ozs7OzswQ0FJN0csOERBQUNFO2dDQUNDRixXQUFXLEdBQW1CLE9BQWhCYiw0SkFBZSxFQUFDOzBDQUMvQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT1gsQ0FBQztHQXRJdUJHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IFBvbmcgZnJvbSBcImNvbXBvbmVudHMvcGFnZXMvY29tcG9uZW50cy9Qb25nXCI7XG5pbXBvcnQge3VzZUVmZmVjdH0gZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbJ2xhdGluJ10gfSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkveW91ci1lZGdlLWFwaS1yb3V0ZScpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXREYXRhKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgZGF0YTonLCBlcnJvcik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHAtMjRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiei0xMCB3LWZ1bGwgbWF4LXctNXhsIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gZm9udC1tb25vIHRleHQtc20gbGc6ZmxleFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmaXhlZCBsZWZ0LTAgdG9wLTAgZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMzAwIGJnLWdyYWRpZW50LXRvLWIgZnJvbS16aW5jLTIwMCBwYi02IHB0LTggYmFja2Ryb3AtYmx1ci0yeGwgZGFyazpib3JkZXItbmV1dHJhbC04MDAgZGFyazpiZy16aW5jLTgwMC8zMCBkYXJrOmZyb20taW5oZXJpdCBsZzpzdGF0aWMgbGc6dy1hdXRvICBsZzpyb3VuZGVkLXhsIGxnOmJvcmRlciBsZzpiZy1ncmF5LTIwMCBsZzpwLTQgbGc6ZGFyazpiZy16aW5jLTgwMC8zMFwiPlxuICAgICAgICAgIEdldCBzdGFydGVkIGJ5IGVkaXRpbmcmbmJzcDtcbiAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJmb250LW1vbm8gZm9udC1ib2xkXCI+cGFnZXMvaW5kZXgudHN4PC9jb2RlPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTAgbGVmdC0wIGZsZXggaC00OCB3LWZ1bGwgaXRlbXMtZW5kIGp1c3RpZnktY2VudGVyIGJnLWdyYWRpZW50LXRvLXQgZnJvbS13aGl0ZSB2aWEtd2hpdGUgZGFyazpmcm9tLWJsYWNrIGRhcms6dmlhLWJsYWNrIGxnOnN0YXRpYyBsZzpoLWF1dG8gbGc6dy1hdXRvIGxnOmJnLW5vbmVcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicG9pbnRlci1ldmVudHMtbm9uZSBmbGV4IHBsYWNlLWl0ZW1zLWNlbnRlciBnYXAtMiBwLTggbGc6cG9pbnRlci1ldmVudHMtYXV0byBsZzpwLTBcIlxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUtdHcmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgQnkgR1BUNHsnICd9XG4gICAgICAgICAgICB7Lyo8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPVwiL3ZlcmNlbC5zdmdcIlxuICAgICAgICAgICAgICBhbHQ9XCJWZXJjZWwgTG9nb1wiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRhcms6aW52ZXJ0XCJcbiAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgICAgICAgICAgcHJpb3JpdHlcbiAgICAgICAgICAgIC8+Ki99XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggcGxhY2UtaXRlbXMtY2VudGVyIGJlZm9yZTphYnNvbHV0ZSBiZWZvcmU6aC1bMzAwcHhdIGJlZm9yZTp3LVs0ODBweF0gYmVmb3JlOi10cmFuc2xhdGUteC0xLzIgYmVmb3JlOnJvdW5kZWQtZnVsbCBiZWZvcmU6YmctZ3JhZGllbnQtcmFkaWFsIGJlZm9yZTpmcm9tLXdoaXRlIGJlZm9yZTp0by10cmFuc3BhcmVudCBiZWZvcmU6Ymx1ci0yeGwgYmVmb3JlOmNvbnRlbnQtWycnXSBhZnRlcjphYnNvbHV0ZSBhZnRlcjotei0yMCBhZnRlcjpoLVsxODBweF0gYWZ0ZXI6dy1bMjQwcHhdIGFmdGVyOnRyYW5zbGF0ZS14LTEvMyBhZnRlcjpiZy1ncmFkaWVudC1jb25pYyBhZnRlcjpmcm9tLXNreS0yMDAgYWZ0ZXI6dmlhLWJsdWUtMjAwIGFmdGVyOmJsdXItMnhsIGFmdGVyOmNvbnRlbnQtWycnXSBiZWZvcmU6ZGFyazpiZy1ncmFkaWVudC10by1iciBiZWZvcmU6ZGFyazpmcm9tLXRyYW5zcGFyZW50IGJlZm9yZTpkYXJrOnRvLWJsdWUtNzAwLzEwIGFmdGVyOmRhcms6ZnJvbS1za3ktOTAwIGFmdGVyOmRhcms6dmlhLVsjMDE0MWZmXS80MCBiZWZvcmU6bGc6aC1bMzYwcHhdXCI+XG4gICAgICAgIHsvKjxJbWFnZVxuICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGRhcms6ZHJvcC1zaGFkb3ctWzBfMF8wLjNyZW1fI2ZmZmZmZjcwXSBkYXJrOmludmVydFwiXG4gICAgICAgICAgc3JjPVwiL25leHQuc3ZnXCJcbiAgICAgICAgICBhbHQ9XCJOZXh0LmpzIExvZ29cIlxuICAgICAgICAgIHdpZHRoPXsxODB9XG4gICAgICAgICAgaGVpZ2h0PXszN31cbiAgICAgICAgICBwcmlvcml0eVxuICAgICAgICAvPiovfVxuICAgICAgICA8UG9uZy8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zMiBncmlkIHRleHQtY2VudGVyIGxnOm1iLTAgbGc6Z3JpZC1jb2xzLTQgbGc6dGV4dC1sZWZ0XCI+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZS10dyZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwLzMwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7aW50ZXIuY2xhc3NOYW1lfSBtYi0zIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRgfT5cbiAgICAgICAgICAgIERvY3N7JyAnfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRyYW5zaXRpb24tdHJhbnNmb3JtIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgbW90aW9uLXJlZHVjZTp0cmFuc2Zvcm0tbm9uZVwiPlxuICAgICAgICAgICAgICAtJmd0O1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW50ZXIuY2xhc3NOYW1lfSBtLTAgbWF4LXctWzMwY2hdIHRleHQtc20gb3BhY2l0eS01MGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgRmluZCBpbi1kZXB0aCBpbmZvcm1hdGlvbiBhYm91dCBOZXh0LmpzIGZlYXR1cmVzIGFuZCBBUEkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9uZXh0anMub3JnL2xlYXJuP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZS10dyZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJncm91cCByb3VuZGVkLWxnIGJvcmRlciBib3JkZXItdHJhbnNwYXJlbnQgcHgtNSBweS00IHRyYW5zaXRpb24tY29sb3JzIGhvdmVyOmJvcmRlci1ncmF5LTMwMCBob3ZlcjpiZy1ncmF5LTEwMCBob3ZlcjpkYXJrOmJvcmRlci1uZXV0cmFsLTcwMCBob3ZlcjpkYXJrOmJnLW5ldXRyYWwtODAwLzMwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17YCR7aW50ZXIuY2xhc3NOYW1lfSBtYi0zIHRleHQtMnhsIGZvbnQtc2VtaWJvbGRgfT5cbiAgICAgICAgICAgIExlYXJueycgJ31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0cmFuc2l0aW9uLXRyYW5zZm9ybSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0xIG1vdGlvbi1yZWR1Y2U6dHJhbnNmb3JtLW5vbmVcIj5cbiAgICAgICAgICAgICAgLSZndDtcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ludGVyLmNsYXNzTmFtZX0gbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIExlYXJuIGFib3V0IE5leHQuanMgaW4gYW4gaW50ZXJhY3RpdmUgY291cnNlIHdpdGgmbmJzcDtxdWl6emVzIVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9hPlxuXG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbS90ZW1wbGF0ZXM/ZnJhbWV3b3JrPW5leHQuanMmdXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlLXR3JnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImdyb3VwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCBweC01IHB5LTQgdHJhbnNpdGlvbi1jb2xvcnMgaG92ZXI6Ym9yZGVyLWdyYXktMzAwIGhvdmVyOmJnLWdyYXktMTAwIGhvdmVyOmRhcms6Ym9yZGVyLW5ldXRyYWwtNzAwIGhvdmVyOmRhcms6YmctbmV1dHJhbC04MDAvMzBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgJHtpbnRlci5jbGFzc05hbWV9IG1iLTMgdGV4dC0yeGwgZm9udC1zZW1pYm9sZGB9PlxuICAgICAgICAgICAgVGVtcGxhdGVzeycgJ31cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlubGluZS1ibG9jayB0cmFuc2l0aW9uLXRyYW5zZm9ybSBncm91cC1ob3Zlcjp0cmFuc2xhdGUteC0xIG1vdGlvbi1yZWR1Y2U6dHJhbnNmb3JtLW5vbmVcIj5cbiAgICAgICAgICAgICAgLSZndDtcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2gyPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2ludGVyLmNsYXNzTmFtZX0gbS0wIG1heC13LVszMGNoXSB0ZXh0LXNtIG9wYWNpdHktNTBgfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIERpc2NvdmVyIGFuZCBkZXBsb3kgYm9pbGVycGxhdGUgZXhhbXBsZSBOZXh0LmpzJm5ic3A7cHJvamVjdHMuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2E+XG5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tL25ldz91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUtdHcmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZ3JvdXAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHB4LTUgcHktNCB0cmFuc2l0aW9uLWNvbG9ycyBob3Zlcjpib3JkZXItZ3JheS0zMDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6ZGFyazpib3JkZXItbmV1dHJhbC03MDAgaG92ZXI6ZGFyazpiZy1uZXV0cmFsLTgwMC8zMFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e2Ake2ludGVyLmNsYXNzTmFtZX0gbWItMyB0ZXh0LTJ4bCBmb250LXNlbWlib2xkYH0+XG4gICAgICAgICAgICBEZXBsb3l7JyAnfVxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHRyYW5zaXRpb24tdHJhbnNmb3JtIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTEgbW90aW9uLXJlZHVjZTp0cmFuc2Zvcm0tbm9uZVwiPlxuICAgICAgICAgICAgICAtJmd0O1xuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7aW50ZXIuY2xhc3NOYW1lfSBtLTAgbWF4LXctWzMwY2hdIHRleHQtc20gb3BhY2l0eS01MGB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgSW5zdGFudGx5IGRlcGxveSB5b3VyIE5leHQuanMgc2l0ZSB0byBhIHNoYXJlYWJsZSBVUkwgd2l0aCBWZXJjZWwuXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIlBvbmciLCJ1c2VFZmZlY3QiLCJIb21lIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic2V0RGF0YSIsImVycm9yIiwiY29uc29sZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwiY29kZSIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIiwiaDIiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});