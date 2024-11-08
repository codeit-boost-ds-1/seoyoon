"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/qrcodes/[id]";
exports.ids = ["pages/api/qrcodes/[id]"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "(api)/./db/dbConnect.js":
/*!*************************!*\
  !*** ./db/dbConnect.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = `${process.env.MONGODB_URI}/shortit`;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable inside .env.local\");\n}\n/**\n * Global is used here to maintain a cached connection across hot reloads\n * in development. This prevents connections growing exponentially\n * during API Route usage.\n */ let cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9kYkNvbm5lY3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGNBQWMsQ0FBQyxFQUFFQyxRQUFRQyxHQUFHLENBQUNGLFdBQVcsQ0FBQyxRQUFRLENBQUM7QUFFeEQsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFDUix3RUFDQTtBQUNKLENBQUM7QUFFRDs7OztDQUlDLEdBQ0QsSUFBSUMsU0FBU0MsT0FBT04sUUFBUTtBQUU1QixJQUFJLENBQUNLLFFBQVE7SUFDWEEsU0FBU0MsT0FBT04sUUFBUSxHQUFHO1FBQUVPLE1BQU0sSUFBSTtRQUFFQyxTQUFTLElBQUk7SUFBQztBQUN6RCxDQUFDO0FBRUQsZUFBZUMsWUFBWTtJQUN6QixJQUFJSixPQUFPRSxJQUFJLEVBQUU7UUFDZixPQUFPRixPQUFPRSxJQUFJO0lBQ3BCLENBQUM7SUFFRCxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGdCQUFnQixLQUFLO1FBQ3ZCO1FBRUFOLE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLGFBQWFTLE1BQU1HLElBQUksQ0FBQyxDQUFDYixXQUFhO1lBQ3RFLE9BQU9BO1FBQ1Q7SUFDRixDQUFDO0lBRUQsSUFBSTtRQUNGSyxPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNwQyxFQUFFLE9BQU9NLEdBQUc7UUFDVlQsT0FBT0csT0FBTyxHQUFHLElBQUk7UUFDckIsTUFBTU0sRUFBRTtJQUNWO0lBRUEsT0FBT1QsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRpdC8uL2RiL2RiQ29ubmVjdC5qcz9mY2QzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gYCR7cHJvY2Vzcy5lbnYuTU9OR09EQl9VUkl9L3Nob3J0aXRgO1xuXG5pZiAoIU1PTkdPREJfVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcbiAgICAnUGxlYXNlIGRlZmluZSB0aGUgTU9OR09EQl9VUkkgZW52aXJvbm1lbnQgdmFyaWFibGUgaW5zaWRlIC5lbnYubG9jYWwnXG4gICk7XG59XG5cbi8qKlxuICogR2xvYmFsIGlzIHVzZWQgaGVyZSB0byBtYWludGFpbiBhIGNhY2hlZCBjb25uZWN0aW9uIGFjcm9zcyBob3QgcmVsb2Fkc1xuICogaW4gZGV2ZWxvcG1lbnQuIFRoaXMgcHJldmVudHMgY29ubmVjdGlvbnMgZ3Jvd2luZyBleHBvbmVudGlhbGx5XG4gKiBkdXJpbmcgQVBJIFJvdXRlIHVzYWdlLlxuICovXG5sZXQgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlO1xuXG5pZiAoIWNhY2hlZCkge1xuICBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgPSB7IGNvbm46IG51bGwsIHByb21pc2U6IG51bGwgfTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gZGJDb25uZWN0KCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY29uc3Qgb3B0cyA9IHtcbiAgICAgIGJ1ZmZlckNvbW1hbmRzOiBmYWxzZSxcbiAgICB9O1xuXG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvcHRzKS50aGVuKChtb25nb29zZSkgPT4ge1xuICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xuICAgIHRocm93IGU7XG4gIH1cblxuICByZXR1cm4gY2FjaGVkLmNvbm47XG59XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvcHRzIiwiYnVmZmVyQ29tbWFuZHMiLCJjb25uZWN0IiwidGhlbiIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./db/dbConnect.js\n");

/***/ }),

/***/ "(api)/./db/models/QRCode.js":
/*!*****************************!*\
  !*** ./db/models/QRCode.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst qrcodeSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    title: {\n        type: String,\n        default: \"\"\n    },\n    url: {\n        type: String,\n        default: \"\"\n    }\n}, {\n    timestamps: true\n});\nconst QRCode = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.QRCode) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"QRCode\", qrcodeSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QRCode);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9kYi9tb2RlbHMvUVJDb2RlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxlQUFlLElBQUlELHdEQUFlLENBQ3RDO0lBQ0VHLE9BQU87UUFBRUMsTUFBTUM7UUFBUUMsU0FBUztJQUFHO0lBQ25DQyxLQUFLO1FBQUVILE1BQU1DO1FBQVFDLFNBQVM7SUFBRztBQUNuQyxHQUNBO0lBQ0VFLFlBQVksSUFBSTtBQUNsQjtBQUdGLE1BQU1DLFNBQ0pULCtEQUF5QixJQUFJQSxxREFBYyxDQUFDLFVBQVVDO0FBRXhELGlFQUFlUSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRpdC8uL2RiL21vZGVscy9RUkNvZGUuanM/ZTYzMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBxcmNvZGVTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKFxuICB7XG4gICAgdGl0bGU6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiAnJyB9LFxuICAgIHVybDogeyB0eXBlOiBTdHJpbmcsIGRlZmF1bHQ6ICcnIH0sXG4gIH0sXG4gIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICB9XG4pO1xuXG5jb25zdCBRUkNvZGUgPVxuICBtb25nb29zZS5tb2RlbHNbJ1FSQ29kZSddIHx8IG1vbmdvb3NlLm1vZGVsKCdRUkNvZGUnLCBxcmNvZGVTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBRUkNvZGU7XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJxcmNvZGVTY2hlbWEiLCJTY2hlbWEiLCJ0aXRsZSIsInR5cGUiLCJTdHJpbmciLCJkZWZhdWx0IiwidXJsIiwidGltZXN0YW1wcyIsIlFSQ29kZSIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./db/models/QRCode.js\n");

/***/ }),

/***/ "(api)/./pages/api/qrcodes/[id].js":
/*!***********************************!*\
  !*** ./pages/api/qrcodes/[id].js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _db_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/db/dbConnect */ \"(api)/./db/dbConnect.js\");\n/* harmony import */ var _db_models_QRCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/db/models/QRCode */ \"(api)/./db/models/QRCode.js\");\n\n\nasync function handler(req, res) {\n    await (0,_db_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const { id  } = req.query;\n    switch(req.method){\n        case \"GET\":\n            const qrcode = await _db_models_QRCode__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n            res.send(qrcode);\n            break;\n        case \"PATCH\":\n            const updatedQRCode = await _db_models_QRCode__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(id, req.body, {\n                new: true\n            });\n            res.send(updatedQRCode);\n            break;\n        case \"DELETE\":\n            await _db_models_QRCode__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(id);\n            res.status(204).send();\n            break;\n        default:\n            res.status(404).send();\n            break;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcXJjb2Rlcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUF1QztBQUNDO0FBRXpCLGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE1BQU1KLHlEQUFTQTtJQUNmLE1BQU0sRUFBRUssR0FBRSxFQUFFLEdBQUdGLElBQUlHLEtBQUs7SUFFeEIsT0FBUUgsSUFBSUksTUFBTTtRQUNoQixLQUFLO1lBQ0gsTUFBTUMsU0FBUyxNQUFNUCxrRUFBZSxDQUFDSTtZQUNyQ0QsSUFBSU0sSUFBSSxDQUFDRjtZQUNULEtBQU07UUFFUixLQUFLO1lBQ0gsTUFBTUcsZ0JBQWdCLE1BQU1WLDJFQUF3QixDQUFDSSxJQUFJRixJQUFJVSxJQUFJLEVBQUU7Z0JBQUVDLEtBQUssSUFBSTtZQUFDO1lBQy9FVixJQUFJTSxJQUFJLENBQUNDO1lBQ1QsS0FBTTtRQUVSLEtBQUs7WUFDSCxNQUFNViwyRUFBd0IsQ0FBQ0k7WUFDL0JELElBQUlZLE1BQU0sQ0FBQyxLQUFLTixJQUFJO1lBQ3BCLEtBQU07UUFFUjtZQUNFTixJQUFJWSxNQUFNLENBQUMsS0FBS04sSUFBSTtZQUNwQixLQUFNO0lBQ1Y7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hvcnRpdC8uL3BhZ2VzL2FwaS9xcmNvZGVzL1tpZF0uanM/Zjk1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gJ0AvZGIvZGJDb25uZWN0JztcbmltcG9ydCBRUkNvZGUgZnJvbSAnQC9kYi9tb2RlbHMvUVJDb2RlJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBhd2FpdCBkYkNvbm5lY3QoKTtcbiAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xuXG4gIHN3aXRjaCAocmVxLm1ldGhvZCkge1xuICAgIGNhc2UgJ0dFVCc6XG4gICAgICBjb25zdCBxcmNvZGUgPSBhd2FpdCBRUkNvZGUuZmluZEJ5SWQoaWQpO1xuICAgICAgcmVzLnNlbmQocXJjb2RlKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUEFUQ0gnOlxuICAgICAgY29uc3QgdXBkYXRlZFFSQ29kZSA9IGF3YWl0IFFSQ29kZS5maW5kQnlJZEFuZFVwZGF0ZShpZCwgcmVxLmJvZHksIHsgbmV3OiB0cnVlIH0pO1xuICAgICAgcmVzLnNlbmQodXBkYXRlZFFSQ29kZSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ0RFTEVURSc6XG4gICAgICBhd2FpdCBRUkNvZGUuZmluZEJ5SWRBbmREZWxldGUoaWQpO1xuICAgICAgcmVzLnN0YXR1cygyMDQpLnNlbmQoKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJlcy5zdGF0dXMoNDA0KS5zZW5kKCk7XG4gICAgICBicmVhaztcbiAgfVxufVxuIl0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlFSQ29kZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwibWV0aG9kIiwicXJjb2RlIiwiZmluZEJ5SWQiLCJzZW5kIiwidXBkYXRlZFFSQ29kZSIsImZpbmRCeUlkQW5kVXBkYXRlIiwiYm9keSIsIm5ldyIsImZpbmRCeUlkQW5kRGVsZXRlIiwic3RhdHVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/qrcodes/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/qrcodes/[id].js"));
module.exports = __webpack_exports__;

})();