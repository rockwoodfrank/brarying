"use strict";
exports.id = 346;
exports.ids = [346];
exports.modules = {

/***/ 346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Editor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _swatch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(425);
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(125);




function Editor({ selectedColor , setColor , handleClick , openMod , xPos , yPos  }) {
    const colors = [
        "#FF5858",
        "#2CB55B",
        "#DE58FF",
        "#FC9A27",
        "#58AFFF",
        "#606060"
    ];
    const times = [
        1,
        2,
        4,
        -1
    ];
    const [inputVal, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [selectedTime, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(times[0]);
    const [tag, setTag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    function handleTagChange(e) {
        setInput(e.target.value);
    }
    function sendInfo() {
        if (inputVal != "") {
            handleClick(inputVal, selectedColor, selectedTime, xPos, yPos);
            openMod(false);
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "editor",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "top",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        type: "text",
                        name: "",
                        id: "",
                        placeholder: "Name(s)...",
                        onChange: handleTagChange
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "symbols",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/check.svg",
                                alt: "Confirm",
                                onClick: sendInfo,
                                style: {
                                    width: "1em"
                                }
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/cross.svg",
                                alt: "Close",
                                style: {
                                    width: "1em"
                                },
                                onClick: ()=>openMod(false)
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "options",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "colors",
                        children: colors.map((color)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_swatch__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                color: color,
                                selected: color == selectedColor,
                                handleClick: setColor
                            }, color))
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "times",
                        children: times.map((time)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_time__WEBPACK_IMPORTED_MODULE_3__["default"], {
                                time: time,
                                selected: time == selectedTime,
                                handleClick: setTime
                            }, time))
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Swatch)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Swatch({ color , selected , handleClick  }) {
    const [borderVal, setBorder] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("none");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "swatch",
        style: {
            backgroundColor: color,
            border: selected ? "2px solid #f3f3f3" : "none"
        },
        onClick: ()=>handleClick(color)
    });
}


/***/ }),

/***/ 125:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Time)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Time({ time , selected , handleClick  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "time",
        style: {
            backgroundColor: selected && "#9e9e9e"
        },
        onClick: ()=>handleClick(time),
        children: time < 0 ? "Custom" : time == 1 ? time + " Hour" : time + " Hours"
    });
}


/***/ })

};
;