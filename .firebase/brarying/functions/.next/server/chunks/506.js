"use strict";
exports.id = 506;
exports.ids = [506];
exports.modules = {

/***/ 506:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Marker)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(346);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



function Marker({ xPos , yPos , openMod , pushLoc  }) {
    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("#FF5858");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "marker",
        style: {
            left: xPos - 106 + "px",
            top: yPos - 35 + "px"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                width: "2em",
                height: "2em",
                viewBox: "0 0 103 137",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: "loc-img",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
                        clipPath: "url(#clip0_9_60)",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            d: "M57.857 133.575C71.6172 116.396 103 74.7613 103 51.375C103 23.0117 79.9323 0 51.5 0C23.0677 0 0 23.0117 0 51.375C0 74.7613 31.3828 116.396 45.143 133.575C48.4422 137.669 54.5578 137.669 57.857 133.575ZM51.5 34.25C56.0529 34.25 60.4193 36.0542 63.6387 39.2658C66.858 42.4774 68.6667 46.8332 68.6667 51.375C68.6667 55.9168 66.858 60.2726 63.6387 63.4842C60.4193 66.6958 56.0529 68.5 51.5 68.5C46.9471 68.5 42.5807 66.6958 39.3613 63.4842C36.142 60.2726 34.3333 55.9168 34.3333 51.375C34.3333 46.8332 36.142 42.4774 39.3613 39.2658C42.5807 36.0542 46.9471 34.25 51.5 34.25Z",
                            fill: color
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("clipPath", {
                            id: "clip0_9_60",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("rect", {
                                width: "103",
                                height: "137",
                                fill: "white"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_editor__WEBPACK_IMPORTED_MODULE_1__["default"], {
                selectedColor: color,
                setColor: setColor,
                handleClick: pushLoc,
                openMod: openMod,
                xPos: xPos,
                yPos: yPos
            })
        ]
    });
}


/***/ })

};
;