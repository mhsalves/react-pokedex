webpackHotUpdate_N_E("pages/_app",{

/***/ "./theme/breakpoints.js":
/*!******************************!*\
  !*** ./theme/breakpoints.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/**\n * Based in Mobile First always\n */\nvar breakpoints = {\n  xs: '@media (min-width: 0px)',\n  sm: '@media (min-width: 576px)',\n  md: '@media (min-width: 768px)',\n  lg: '@media (min-width: 992px)',\n  xl: '@media (min-width: 1200px)'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (breakpoints);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUvYnJlYWtwb2ludHMuanM/NTIxYiJdLCJuYW1lcyI6WyJicmVha3BvaW50cyIsInhzIiwic20iLCJtZCIsImxnIiwieGwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUMsSUFBTUEsV0FBVyxHQUFHO0FBQ25CQyxJQUFFLEVBQUUseUJBRGU7QUFFbkJDLElBQUUsRUFBRSwyQkFGZTtBQUduQkMsSUFBRSxFQUFFLDJCQUhlO0FBSW5CQyxJQUFFLEVBQUUsMkJBSmU7QUFLbkJDLElBQUUsRUFBRTtBQUxlLENBQXBCO0FBUWNMLDBFQUFmIiwiZmlsZSI6Ii4vdGhlbWUvYnJlYWtwb2ludHMuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEJhc2VkIGluIE1vYmlsZSBGaXJzdCBhbHdheXNcbiAqL1xuXG4gY29uc3QgYnJlYWtwb2ludHMgPSB7XG4gIHhzOiAnQG1lZGlhIChtaW4td2lkdGg6IDBweCknLFxuICBzbTogJ0BtZWRpYSAobWluLXdpZHRoOiA1NzZweCknLFxuICBtZDogJ0BtZWRpYSAobWluLXdpZHRoOiA3NjhweCknLFxuICBsZzogJ0BtZWRpYSAobWluLXdpZHRoOiA5OTJweCknLFxuICB4bDogJ0BtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGJyZWFrcG9pbnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme/breakpoints.js\n");

/***/ }),

/***/ "./theme/index.js":
/*!************************!*\
  !*** ./theme/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpoints */ \"./theme/breakpoints.js\");\n/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colors */ \"./theme/colors.js\");\n/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./space */ \"./theme/space.js\");\n/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./typography */ \"./theme/typography.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  breakpoints: _breakpoints__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  colors: _colors__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  space: _space__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  typography: _typography__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUvaW5kZXguanM/NGJkMiJdLCJuYW1lcyI6WyJicmVha3BvaW50cyIsImNvbG9ycyIsInNwYWNlIiwidHlwb2dyYXBoeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRWU7QUFDYkEsYUFBVyxFQUFYQSxvREFEYTtBQUViQyxRQUFNLEVBQU5BLCtDQUZhO0FBR2JDLE9BQUssRUFBTEEsOENBSGE7QUFJYkMsWUFBVSxFQUFWQSxtREFBVUE7QUFKRyxDQUFmIiwiZmlsZSI6Ii4vdGhlbWUvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYnJlYWtwb2ludHMgZnJvbSBcIi4vYnJlYWtwb2ludHNcIjtcbmltcG9ydCBjb2xvcnMgZnJvbSBcIi4vY29sb3JzXCI7XG5pbXBvcnQgc3BhY2UgZnJvbSBcIi4vc3BhY2VcIjtcbmltcG9ydCB0eXBvZ3JhcGh5IGZyb20gXCIuL3R5cG9ncmFwaHlcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBicmVha3BvaW50cyxcbiAgY29sb3JzLFxuICBzcGFjZSxcbiAgdHlwb2dyYXBoeSwgIFxufTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./theme/index.js\n");

/***/ })

})