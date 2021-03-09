webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/UserProfile.js":
/*!***********************************!*\
  !*** ./components/UserProfile.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/hyojelee/Desktop/sns/client/components/UserProfile.js\";\n\n\n\n\nvar Meta = antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Meta; // const CardWrapper = styled.div`\n//   display: flex;\n//   justify-content: center;\n//   align-items: center;\n// `\n\nfunction UserProfile(_ref) {\n  var setIsLoggedIn = _ref.setIsLoggedIn;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n    actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(SettingOutlined, {}, 'setting', false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(EditOutlined, {}, 'edit', false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 9\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(EllipsisOutlined, {}, 'ellipsis', false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 9\n    }, this) // <>\n    //   <div key='view'>\n    //     view\n    //     <br />0\n    //   </div>\n    //   <div key='follower'>\n    //     follwer\n    //     <br />0\n    //   </div>\n    //   <div key='follwing'>\n    //     follwing\n    //     <br />0\n    //   </div>\n    // </>,\n    ],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Meta, {\n      title: \"Hyoje Profile\",\n      avatar: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Avatar\"], {\n        children: \"hyojelee\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 48\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n      onClick: function onClick() {\n        return setIsLoggedIn(false);\n      },\n      children: \"Logout\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, this);\n}\n\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\n\nvar _c;\n\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcz8yN2I5Il0sIm5hbWVzIjpbIk1ldGEiLCJDYXJkIiwiVXNlclByb2ZpbGUiLCJzZXRJc0xvZ2dlZEluIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFDUUEsSSxHQUFTQyx5QyxDQUFURCxJLEVBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTRSxXQUFULE9BQXdDO0FBQUEsTUFBakJDLGFBQWlCLFFBQWpCQSxhQUFpQjtBQUN0QyxzQkFDRSxxRUFBQyx5Q0FBRDtBQUNFLFdBQU8sRUFBRSxjQUNQLHFFQUFDLGVBQUQsTUFBcUIsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURPLGVBRVAscUVBQUMsWUFBRCxNQUFrQixNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRk8sZUFHUCxxRUFBQyxnQkFBRCxNQUFzQixVQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSE8sQ0FJUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJPLEtBRFg7QUFBQSw0QkFxQkUscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcsV0FBSyxFQUFDLGVBQWpCO0FBQWlDLFlBQU0sZUFBRSxxRUFBQywyQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBckJGLGVBc0JFLHFFQUFDLDJDQUFEO0FBQVEsYUFBTyxFQUFFO0FBQUEsZUFBTUEsYUFBYSxDQUFDLEtBQUQsQ0FBbkI7QUFBQSxPQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTBCRDs7S0EzQlFELFc7QUE2Qk1BLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Vc2VyUHJvZmlsZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IENhcmQsIEF2YXRhciwgQnV0dG9uIH0gZnJvbSAnYW50ZCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5jb25zdCB7IE1ldGEgfSA9IENhcmRcblxuLy8gY29uc3QgQ2FyZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuLy8gICBkaXNwbGF5OiBmbGV4O1xuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vIGBcblxuZnVuY3Rpb24gVXNlclByb2ZpbGUoeyBzZXRJc0xvZ2dlZEluIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZFxuICAgICAgYWN0aW9ucz17W1xuICAgICAgICA8U2V0dGluZ091dGxpbmVkIGtleT0nc2V0dGluZycgLz4sXG4gICAgICAgIDxFZGl0T3V0bGluZWQga2V5PSdlZGl0JyAvPixcbiAgICAgICAgPEVsbGlwc2lzT3V0bGluZWQga2V5PSdlbGxpcHNpcycgLz4sXG4gICAgICAgIC8vIDw+XG4gICAgICAgIC8vICAgPGRpdiBrZXk9J3ZpZXcnPlxuICAgICAgICAvLyAgICAgdmlld1xuICAgICAgICAvLyAgICAgPGJyIC8+MFxuICAgICAgICAvLyAgIDwvZGl2PlxuICAgICAgICAvLyAgIDxkaXYga2V5PSdmb2xsb3dlcic+XG4gICAgICAgIC8vICAgICBmb2xsd2VyXG4gICAgICAgIC8vICAgICA8YnIgLz4wXG4gICAgICAgIC8vICAgPC9kaXY+XG4gICAgICAgIC8vICAgPGRpdiBrZXk9J2ZvbGx3aW5nJz5cbiAgICAgICAgLy8gICAgIGZvbGx3aW5nXG4gICAgICAgIC8vICAgICA8YnIgLz4wXG4gICAgICAgIC8vICAgPC9kaXY+XG4gICAgICAgIC8vIDwvPixcbiAgICAgIF19XG4gICAgPlxuICAgICAgPENhcmQuTWV0YSB0aXRsZT0nSHlvamUgUHJvZmlsZScgYXZhdGFyPXs8QXZhdGFyPmh5b2plbGVlPC9BdmF0YXI+fSAvPlxuICAgICAgPEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0xvZ2dlZEluKGZhbHNlKX0+TG9nb3V0PC9CdXR0b24+XG4gICAgPC9DYXJkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXJQcm9maWxlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/UserProfile.js\n");

/***/ })

})