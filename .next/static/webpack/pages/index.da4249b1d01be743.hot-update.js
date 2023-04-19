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

/***/ "./pages/components/Pong.tsx":
/*!***********************************!*\
  !*** ./pages/components/Pong.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst randomFloat = (min, max)=>{\n    return Math.random() * (max - min) + min;\n};\nconst Pong = ()=>{\n    _s();\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [player1Score, setPlayer1Score] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [player2Score, setPlayer2Score] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const paddleWidth = 10;\n    const paddleHeight = 100;\n    const paddleSpeed = 5;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!canvasRef.current) return;\n        const canvas = canvasRef.current;\n        const ctx = canvas.getContext(\"2d\");\n        if (!ctx) return;\n        let ballX = canvas.width / 2;\n        let ballY = canvas.height / 2;\n        let ballSpeedX = 5;\n        let ballSpeedY = 3;\n        let ballColor = \"white\";\n        let paddle1Y = (canvas.height - paddleHeight) / 2;\n        let paddle2Y = (canvas.height - paddleHeight) / 2;\n        const keys = {\n            up: false,\n            down: false\n        };\n        const keyDownHandler = (e)=>{\n            if (e.key === \"ArrowUp\") {\n                keys.up = true;\n            } else if (e.key === \"ArrowDown\") {\n                keys.down = true;\n            }\n        };\n        const keyUpHandler = (e)=>{\n            if (e.key === \"ArrowUp\") {\n                keys.up = false;\n            } else if (e.key === \"ArrowDown\") {\n                keys.down = false;\n            }\n        };\n        document.addEventListener(\"keydown\", keyDownHandler);\n        document.addEventListener(\"keyup\", keyUpHandler);\n        const draw = ()=>{\n            // Clear canvas\n            ctx.clearRect(0, 0, canvas.width, canvas.height);\n            ctx.fillStyle = \"#2276a2\";\n            ctx.fillRect(0, 0, canvas.width, canvas.height);\n            // Draw ball\n            ctx.beginPath();\n            ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);\n            ctx.fillStyle = ballColor;\n            ctx.fill();\n            ctx.closePath();\n            // Draw paddles\n            ctx.fillStyle = \"white\";\n            ctx.fillRect(0, paddle1Y, paddleWidth, paddleHeight);\n            ctx.fillRect(canvas.width - paddleWidth, paddle2Y, paddleWidth, paddleHeight);\n        };\n        const move = ()=>{\n            ballX += ballSpeedX;\n            ballY += ballSpeedY;\n            // Move player 1 paddle\n            if (keys.up && paddle1Y > 0) {\n                paddle1Y -= paddleSpeed;\n            }\n            if (keys.down && paddle1Y < canvas.height - paddleHeight) {\n                paddle1Y += paddleSpeed;\n            }\n            // Bounce ball off top and bottom walls\n            if (ballY <= 0 || ballY >= canvas.height) {\n                ballSpeedY = -ballSpeedY;\n                ballColor = getRandomColor();\n            }\n            // Bounce ball off paddles\n            if (ballX <= paddleWidth && ballY > paddle1Y && ballY < paddle1Y + paddleHeight || ballX >= canvas.width - paddleWidth * 2 && ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {\n                ballSpeedX = -ballSpeedX;\n                ballSpeedY += randomFloat(-2, 2);\n                ballColor = getRandomColor();\n            }\n            // Update scores\n            if (ballX <= 0) {\n                setPlayer2Score((prevScore)=>prevScore + 1);\n                resetBall();\n            } else if (ballX >= canvas.width) {\n                setPlayer1Score((prevScore)=>prevScore + 1);\n                resetBall();\n            }\n        };\n        const resetBall = ()=>{\n            ballX = canvas.width / 2;\n            ballY = canvas.height / 2;\n            ballSpeedX = -ballSpeedX;\n        };\n        const ai = ()=>{\n            // Add a random delay to the AI's reaction time\n            if (Math.random() < 0.93) {\n                // Make the AI paddle follow the ball with a slower speed\n                const aiPaddleSpeed = paddleSpeed * 0.7;\n                if (ballY < paddle2Y + paddleHeight / 2 && paddle2Y > 0) {\n                    paddle2Y -= aiPaddleSpeed;\n                } else if (ballY > paddle2Y + paddleHeight / 2 && paddle2Y < canvas.height - paddleHeight) {\n                    paddle2Y += aiPaddleSpeed;\n                }\n            }\n        };\n        const getRandomColor = ()=>{\n            const letters = \"0123456789ABCDEF\";\n            let color = \"#\";\n            for(let i = 0; i < 6; i++){\n                color += letters[Math.floor(Math.random() * 16)];\n            }\n            return color;\n        };\n        const gameLoop = ()=>{\n            draw();\n            move();\n            ai();\n        };\n        const intervalId = setInterval(gameLoop, 1000 / 60);\n        return ()=>{\n            clearInterval(intervalId);\n            document.removeEventListener(\"keydown\", keyDownHandler);\n            document.removeEventListener(\"keyup\", keyUpHandler);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef,\n                width: \"800\",\n                height: \"400\",\n                style: {\n                    backgroundColor: \"black\"\n                }\n            }, void 0, false, {\n                fileName: \"/Users/taaniel/ms/next-ssr-test/pages/components/Pong.tsx\",\n                lineNumber: 161,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Player 1: \",\n                            player1Score\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taaniel/ms/next-ssr-test/pages/components/Pong.tsx\",\n                        lineNumber: 163,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Player 2: \",\n                            player2Score\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/taaniel/ms/next-ssr-test/pages/components/Pong.tsx\",\n                        lineNumber: 164,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/taaniel/ms/next-ssr-test/pages/components/Pong.tsx\",\n                lineNumber: 162,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/taaniel/ms/next-ssr-test/pages/components/Pong.tsx\",\n        lineNumber: 160,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Pong, \"Scd6A3GXGk9FnQCpGIRGBJ2O/zw=\");\n_c = Pong;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pong);\nvar _c;\n$RefreshReg$(_c, \"Pong\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxHQUFHVCxjQUFjO29CQUN2RmMsWUFBWXdCO2dCQUNoQixDQUFDO1lBQ0wsQ0FBQztRQUNMO1FBRUEsTUFBTUosaUJBQWlCLElBQWM7WUFDakMsTUFBTUssVUFBVTtZQUNoQixJQUFJQyxRQUFRO1lBQ1osSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUksR0FBR0EsSUFBSztnQkFDeEJELFNBQVNELE9BQU8sQ0FBQ2hELEtBQUttRCxLQUFLLENBQUNuRCxLQUFLQyxNQUFNLEtBQUssSUFBSTtZQUNwRDtZQUNBLE9BQU9nRDtRQUNYO1FBRUEsTUFBTUcsV0FBVyxJQUFNO1lBQ25CbkI7WUFDQVM7WUFDQUk7UUFDSjtRQUVBLE1BQU1PLGFBQWFDLFlBQVlGLFVBQVUsT0FBTztRQUVoRCxPQUFPLElBQU07WUFDVEcsY0FBY0Y7WUFDZHRCLFNBQVN5QixtQkFBbUIsQ0FBQyxXQUFXN0I7WUFDeENJLFNBQVN5QixtQkFBbUIsQ0FBQyxTQUFTMUI7UUFDMUM7SUFDSixHQUFHLEVBQUU7SUFJVCxxQkFDSSw4REFBQzJCOzswQkFDRyw4REFBQzdDO2dCQUFPOEMsS0FBS3ZEO2dCQUFXYSxPQUFNO2dCQUFNRSxRQUFPO2dCQUFNeUMsT0FBTztvQkFBQ0MsaUJBQWlCO2dCQUFPOzs7Ozs7MEJBQ2pGLDhEQUFDSDs7a0NBQ0csOERBQUNJOzs0QkFBRTs0QkFBV3pEOzs7Ozs7O2tDQUNkLDhEQUFDeUQ7OzRCQUFFOzRCQUFXdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJOUI7R0FqS01KO0tBQUFBO0FBb0tOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvUG9uZy50c3g/ZjgxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VSZWYsIHVzZUVmZmVjdCwgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgcmFuZG9tRmxvYXQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluO1xufTtcblxuY29uc3QgUG9uZzogUmVhY3QuRkMgPSAoKSA9PiB7XG4gICAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmPEhUTUxDYW52YXNFbGVtZW50PihudWxsKTtcbiAgICBjb25zdCBbcGxheWVyMVNjb3JlLCBzZXRQbGF5ZXIxU2NvcmVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgICBjb25zdCBbcGxheWVyMlNjb3JlLCBzZXRQbGF5ZXIyU2NvcmVdID0gdXNlU3RhdGU8bnVtYmVyPigwKTtcbiAgICBjb25zdCBwYWRkbGVXaWR0aCA9IDEwO1xuICAgIGNvbnN0IHBhZGRsZUhlaWdodCA9IDEwMDtcbiAgICBjb25zdCBwYWRkbGVTcGVlZCA9IDU7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFjYW52YXNSZWYuY3VycmVudCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICAgICAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG4gICAgICAgICAgICBpZiAoIWN0eCkgcmV0dXJuO1xuXG4gICAgICAgICAgICBsZXQgYmFsbFggPSBjYW52YXMud2lkdGggLyAyO1xuICAgICAgICAgICAgbGV0IGJhbGxZID0gY2FudmFzLmhlaWdodCAvIDI7XG4gICAgICAgICAgICBsZXQgYmFsbFNwZWVkWCA9IDU7XG4gICAgICAgICAgICBsZXQgYmFsbFNwZWVkWSA9IDM7XG4gICAgICAgICAgICBsZXQgYmFsbENvbG9yID0gJ3doaXRlJztcblxuICAgICAgICAgICAgbGV0IHBhZGRsZTFZID0gKGNhbnZhcy5oZWlnaHQgLSBwYWRkbGVIZWlnaHQpIC8gMjtcbiAgICAgICAgICAgIGxldCBwYWRkbGUyWSA9IChjYW52YXMuaGVpZ2h0IC0gcGFkZGxlSGVpZ2h0KSAvIDI7XG5cbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSB7XG4gICAgICAgICAgICAgICAgdXA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvd246IGZhbHNlLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qga2V5RG93bkhhbmRsZXIgPSAoZTogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMudXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleXMuZG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3Qga2V5VXBIYW5kbGVyID0gKGU6IEtleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1VwJykge1xuICAgICAgICAgICAgICAgICAgICBrZXlzLnVwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93RG93bicpIHtcbiAgICAgICAgICAgICAgICAgICAga2V5cy5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywga2V5VXBIYW5kbGVyKTtcblxuICAgICAgICAgICAgY29uc3QgZHJhdyA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBDbGVhciBjYW52YXNcbiAgICAgICAgICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzIyNzZhMlwiO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgLy8gRHJhdyBiYWxsXG4gICAgICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGN0eC5hcmMoYmFsbFgsIGJhbGxZLCAxMCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBiYWxsQ29sb3I7XG4gICAgICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgICAgICAgICBjdHguY2xvc2VQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBEcmF3IHBhZGRsZXNcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QoMCwgcGFkZGxlMVksIHBhZGRsZVdpZHRoLCBwYWRkbGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIGN0eC5maWxsUmVjdChjYW52YXMud2lkdGggLSBwYWRkbGVXaWR0aCwgcGFkZGxlMlksIHBhZGRsZVdpZHRoLCBwYWRkbGVIZWlnaHQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBiYWxsWCArPSBiYWxsU3BlZWRYO1xuICAgICAgICAgICAgICAgIGJhbGxZICs9IGJhbGxTcGVlZFk7XG5cbiAgICAgICAgICAgICAgICAvLyBNb3ZlIHBsYXllciAxIHBhZGRsZVxuICAgICAgICAgICAgICAgIGlmIChrZXlzLnVwICYmIHBhZGRsZTFZID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwYWRkbGUxWSAtPSBwYWRkbGVTcGVlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGtleXMuZG93biAmJiBwYWRkbGUxWSA8IGNhbnZhcy5oZWlnaHQgLSBwYWRkbGVIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGxlMVkgKz0gcGFkZGxlU3BlZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQm91bmNlIGJhbGwgb2ZmIHRvcCBhbmQgYm90dG9tIHdhbGxzXG4gICAgICAgICAgICAgICAgaWYgKGJhbGxZIDw9IDAgfHwgYmFsbFkgPj0gY2FudmFzLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICBiYWxsU3BlZWRZID0gLWJhbGxTcGVlZFk7XG4gICAgICAgICAgICAgICAgICAgIGJhbGxDb2xvciA9IGdldFJhbmRvbUNvbG9yKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQm91bmNlIGJhbGwgb2ZmIHBhZGRsZXNcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgIChiYWxsWCA8PSBwYWRkbGVXaWR0aCAmJiBiYWxsWSA+IHBhZGRsZTFZICYmIGJhbGxZIDwgcGFkZGxlMVkgKyBwYWRkbGVIZWlnaHQpIHx8XG4gICAgICAgICAgICAgICAgICAgIChiYWxsWCA+PSBjYW52YXMud2lkdGggLSBwYWRkbGVXaWR0aCAqIDIgJiYgYmFsbFkgPiBwYWRkbGUyWSAmJiBiYWxsWSA8IHBhZGRsZTJZICsgcGFkZGxlSGVpZ2h0KVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICBiYWxsU3BlZWRYID0gLWJhbGxTcGVlZFg7XG4gICAgICAgICAgICAgICAgICAgIGJhbGxTcGVlZFkgKz0gcmFuZG9tRmxvYXQoLTIsIDIpO1xuICAgICAgICAgICAgICAgICAgICBiYWxsQ29sb3IgPSBnZXRSYW5kb21Db2xvcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBzY29yZXNcbiAgICAgICAgICAgICAgICBpZiAoYmFsbFggPD0gMCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRQbGF5ZXIyU2NvcmUoKHByZXZTY29yZSkgPT4gcHJldlNjb3JlICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc2V0QmFsbCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYmFsbFggPj0gY2FudmFzLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFBsYXllcjFTY29yZSgocHJldlNjb3JlKSA9PiBwcmV2U2NvcmUgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRCYWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcmVzZXRCYWxsID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGJhbGxYID0gY2FudmFzLndpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICBiYWxsWSA9IGNhbnZhcy5oZWlnaHQgLyAyO1xuICAgICAgICAgICAgICAgIGJhbGxTcGVlZFggPSAtYmFsbFNwZWVkWDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGNvbnN0IGFpID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vIEFkZCBhIHJhbmRvbSBkZWxheSB0byB0aGUgQUkncyByZWFjdGlvbiB0aW1lXG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPCAwLjkzKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIE1ha2UgdGhlIEFJIHBhZGRsZSBmb2xsb3cgdGhlIGJhbGwgd2l0aCBhIHNsb3dlciBzcGVlZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhaVBhZGRsZVNwZWVkID0gcGFkZGxlU3BlZWQgKiAwLjc7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhbGxZIDwgcGFkZGxlMlkgKyBwYWRkbGVIZWlnaHQgLyAyICYmIHBhZGRsZTJZID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGxlMlkgLT0gYWlQYWRkbGVTcGVlZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChiYWxsWSA+IHBhZGRsZTJZICsgcGFkZGxlSGVpZ2h0IC8gMiAmJiBwYWRkbGUyWSA8IGNhbnZhcy5oZWlnaHQgLSBwYWRkbGVIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRsZTJZICs9IGFpUGFkZGxlU3BlZWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBjb25zdCBnZXRSYW5kb21Db2xvciA9ICgpOiBzdHJpbmcgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxldHRlcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRic7XG4gICAgICAgICAgICAgICAgbGV0IGNvbG9yID0gJyMnO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yICs9IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTYpXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbG9yO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIG1vdmUoKTtcbiAgICAgICAgICAgICAgICBhaSgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgaW50ZXJ2YWxJZCA9IHNldEludGVydmFsKGdhbWVMb29wLCAxMDAwIC8gNjApO1xuXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGtleURvd25IYW5kbGVyKTtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIGtleVVwSGFuZGxlcik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LCBbXVxuICAgIClcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9IHdpZHRoPVwiODAwXCIgaGVpZ2h0PVwiNDAwXCIgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6ICdibGFjayd9fT48L2NhbnZhcz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+UGxheWVyIDE6IHtwbGF5ZXIxU2NvcmV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPlBsYXllciAyOiB7cGxheWVyMlNjb3JlfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFBvbmc7XG5cblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJyYW5kb21GbG9hdCIsIm1pbiIsIm1heCIsIk1hdGgiLCJyYW5kb20iLCJQb25nIiwiY2FudmFzUmVmIiwicGxheWVyMVNjb3JlIiwic2V0UGxheWVyMVNjb3JlIiwicGxheWVyMlNjb3JlIiwic2V0UGxheWVyMlNjb3JlIiwicGFkZGxlV2lkdGgiLCJwYWRkbGVIZWlnaHQiLCJwYWRkbGVTcGVlZCIsImN1cnJlbnQiLCJjYW52YXMiLCJjdHgiLCJnZXRDb250ZXh0IiwiYmFsbFgiLCJ3aWR0aCIsImJhbGxZIiwiaGVpZ2h0IiwiYmFsbFNwZWVkWCIsImJhbGxTcGVlZFkiLCJiYWxsQ29sb3IiLCJwYWRkbGUxWSIsInBhZGRsZTJZIiwia2V5cyIsInVwIiwiZG93biIsImtleURvd25IYW5kbGVyIiwiZSIsImtleSIsImtleVVwSGFuZGxlciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYXciLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImJlZ2luUGF0aCIsImFyYyIsIlBJIiwiZmlsbCIsImNsb3NlUGF0aCIsIm1vdmUiLCJnZXRSYW5kb21Db2xvciIsInByZXZTY29yZSIsInJlc2V0QmFsbCIsImFpIiwiYWlQYWRkbGVTcGVlZCIsImxldHRlcnMiLCJjb2xvciIsImkiLCJmbG9vciIsImdhbWVMb29wIiwiaW50ZXJ2YWxJZCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJyZWYiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Pong.tsx\n"));

/***/ })

});