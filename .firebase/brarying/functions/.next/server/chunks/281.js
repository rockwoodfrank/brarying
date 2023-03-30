"use strict";
exports.id = 281;
exports.ids = [281];
exports.modules = {

/***/ 281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _marker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(506);
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(569);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(398);
/* harmony import */ var uuidv4__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuidv4__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);






function Map({ locations  }) {
    const [locList, setList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [pageX, setPageX] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const [pageY, setPageY] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
    const [openEditor, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const mapHeight = 300;
    const mapRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    function handleClick({ pageX , pageY  }) {
        if (!openEditor) {
            setOpen(true);
            setPageX(pageX);
            setPageY(pageY);
        } else setOpen(false);
    }
    function calcPercentX(pageX) {
        let mapWidth = window.innerWidth * 0.6;
        let baselineConst = (window.innerWidth - mapWidth) / 2;
        return (pageX - baselineConst) / mapWidth * 100;
    }
    function calcPercentY(pageY) {
        let baselineConst = mapRef.current.getBoundingClientRect().y;
        console.log(baselineConst);
        console.log((pageY - baselineConst) / mapHeight * 100);
        return (pageY - baselineConst) / mapHeight * 100;
    }
    function pushLocation(name, color, time, xPos, yPos) {
        console.log("Bing!");
        let newLocation = {
            name: name,
            xPos: calcPercentX(xPos),
            yPos: calcPercentY(yPos),
            color: color,
            time_exp: time,
            key: (0,uuidv4__WEBPACK_IMPORTED_MODULE_4__.uuid)()
        };
        setList((oldArray)=>[
                ...oldArray,
                newLocation
            ]);
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "map",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "direction",
                children: [
                    "S",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "o",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "u",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "t",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "h"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                id: "map-grid",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        width: "100%",
                        height: mapHeight + "px",
                        viewBox: "0 0 1000 1279",
                        fill: "none",
                        onClick: handleClick,
                        id: "map-actual",
                        xmlns: "http://www.w3.org/2000/svg",
                        preserveAspectRatio: "none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M504.5 22.5H605.5V5H902V21H985V212.5V230.5H994.5V347.5H985V898H993V1012.5H985V1155H875V1170.5H720V1155H615.5V1274H50.5V1012.5H5.5V898H65V682.5H48.5V566H65V232.5H52V6H504.5V22.5ZM281 866H587V332H281V866Z",
                            fill: "#FFDFAE",
                            stroke: "#4C697B",
                            strokeWidth: "10",
                            ref: mapRef
                        })
                    }),
                    locations && locations.length > 0 && locations.map((loc)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_location__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            name: loc.name,
                            xPos: loc.xPos,
                            yPos: loc.yPos,
                            givenColor: loc.color,
                            givenTime: loc.time_exp
                        }, loc.key)),
                    locList.map((loc)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_location__WEBPACK_IMPORTED_MODULE_2__["default"], {
                            xPos: loc.xPos,
                            yPos: loc.yPos,
                            name: loc.name,
                            givenColor: loc.color,
                            givenTime: loc.time
                        }, loc.key))
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "direction",
                children: [
                    "N",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "o",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "r",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "t",
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                    "h"
                ]
            }),
            openEditor && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_marker__WEBPACK_IMPORTED_MODULE_1__["default"], {
                xPos: pageX,
                yPos: pageY,
                openMod: setOpen,
                pushLoc: pushLocation
            })
        ]
    });
}


/***/ })

};
;