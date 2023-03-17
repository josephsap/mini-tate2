"use strict";
// Copyright (c) 2023 Alteryx, Inc. All rights reserved.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var utils_1 = require("../utils");
var colors = [
    [245, 121, 58],
    [169, 90, 161],
    [133, 192, 249],
    [15, 32, 128],
];
var getColor = function (types, type) {
    if (!types.length || type === null || types.indexOf(type) === -1)
        return 'none';
    var _a = colors[types.indexOf(type) % 4], r = _a[0], g = _a[1], b = _a[2];
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", 0.5)");
};
function StaticAnnotation(_a) {
    var height = _a.height, width = _a.width, top = _a.top, left = _a.left, onClick = _a.onClick, options = _a.options, name = _a.name, rainbowMode = _a.rainbowMode, _b = _a.type, type = _b === void 0 ? null : _b, _c = _a.types, types = _c === void 0 ? [] : _c, setHoverActiveAnno = _a.setHoverActiveAnno, onHoverFromList = _a.onHoverFromList;
    var styles = options.annoStyles || {};
    var _d = (0, react_1.useState)(false), showName = _d[0], setShowName = _d[1];
    // color-code by type
    var backgroundColor = rainbowMode ? getColor(types, type) : options.annoStyles.backgroundColor;
    var calculateTooltipPosition = function () {
        var _a;
        var leftCoord = (0, utils_1.pixelToNum)(width) / 2 - 100;
        var imgBounds = (_a = document.getElementById('anno-img')) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
        if (imgBounds) {
            if (imgBounds.right < leftCoord + (0, utils_1.pixelToNum)(left) + 200) {
                return (0, utils_1.pixelToNum)(width) < 200 ? "".concat((0, utils_1.pixelToNum)(width) - 200, "px") : left;
            }
            if (imgBounds.left > leftCoord + (0, utils_1.pixelToNum)(left)) {
                return left;
            }
        }
        console.log(leftCoord, 'left coords');
        return "".concat(leftCoord, "px");
    };
    return (react_1["default"].createElement("div", { className: "staticAnno".concat(showName ? ' pointer' : ''), "data-testid": "static-annotation", onClick: onClick, onPointerDown: function (e) { return e.stopPropagation(); }, style: __assign(__assign({}, styles), { height: height, width: width, top: top, left: left, backgroundColor: backgroundColor }), onMouseEnter: function () { setShowName(true); setHoverActiveAnno(name); }, onMouseLeave: function () { setShowName(false); setHoverActiveAnno(''); } },
        react_1["default"].createElement("h3", { className: "annotationNameHover", style: {
                top: "".concat((0, utils_1.pixelToNum)(height) - 10, "px"),
                left: calculateTooltipPosition()
            } }, name),
        onHoverFromList === name ? (react_1["default"].createElement("h3", { className: "annotationNameHover", style: {
                top: "".concat((0, utils_1.pixelToNum)(height) - 10, "px"),
                left: calculateTooltipPosition()
            } }, name)) : null));
}
exports["default"] = StaticAnnotation;
//# sourceMappingURL=StaticAnnotation.js.map