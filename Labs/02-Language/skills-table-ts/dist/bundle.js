/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/SPRest.ts":
/*!***********************!*\
  !*** ./src/SPRest.ts ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var SPRest = /** @class */ (function () {
    function SPRest(url) {
        this.url = url;
    }
    SPRest.prototype.getSkills = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(this.url).then(function (response) { return response.json(); })];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    return SPRest;
}());
exports.SPRest = SPRest;


/***/ }),

/***/ "./src/TableHelper.ts":
/*!****************************!*\
  !*** ./src/TableHelper.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var TableHelper = /** @class */ (function () {
    function TableHelper() {
    }
    TableHelper.getTableHTML = function (data) {
        console.log("TableHelper, data received:", data);
        var html = "<table border=\"1\" width=\"100%\"><tr><th>ID</th><th>Name</th><th>Completed</th></tr>";
        data.forEach(function (item) {
            html += "<tr style=\"cursor:pointer\" onclick=\"console.log('You clicked skill: " + item.name + "')\"><td>" + item.id + "</td><td>" + item.name + "</td><td>" + item.completed + "</td></tr>";
        });
        html += "</table>";
        return html;
    };
    return TableHelper;
}());
exports.TableHelper = TableHelper;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var SPRest_1 = __webpack_require__(/*! ./SPRest */ "./src/SPRest.ts");
var TableHelper_1 = __webpack_require__(/*! ./TableHelper */ "./src/TableHelper.ts");
var sp = new SPRest_1.SPRest("http://localhost:3000/skills");
sp.getSkills().then(function (data) {
    var html = TableHelper_1.TableHelper.getTableHTML(data);
    var tbl = document.querySelector("#tbl");
    tbl.innerHTML = html;
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub2RlYmFzaWNzLy4vc3JjL1NQUmVzdC50cyIsIndlYnBhY2s6Ly9ub2RlYmFzaWNzLy4vc3JjL1RhYmxlSGVscGVyLnRzIiwid2VicGFjazovL25vZGViYXNpY3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbm9kZWJhc2ljcy8uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBQ0UsZ0JBQW9CLEdBQUc7UUFBSCxRQUFHLEdBQUgsR0FBRztJQUFHLENBQUM7SUFFckIsMEJBQVMsR0FBZjs7Ozs7NEJBQ2EscUJBQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxRQUFRLElBQUssZUFBUSxDQUFDLElBQUksRUFBRSxFQUFmLENBQWUsQ0FBQzs7d0JBQWhFLElBQUksR0FBRyxTQUF5RDt3QkFDcEUsc0JBQU8sSUFBSSxFQUFDOzs7O0tBQ2I7SUFDSCxhQUFDO0FBQUQsQ0FBQztBQVBZLHdCQUFNOzs7Ozs7Ozs7Ozs7O0FDRG5CO0lBQUE7SUFVQSxDQUFDO0lBVFEsd0JBQVksR0FBbkIsVUFBb0IsSUFBYTtRQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksSUFBSSxHQUFHLHdGQUFvRixDQUFDO1FBQ2hHLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ2hCLElBQUksSUFBSSw0RUFBdUUsSUFBSSxDQUFDLElBQUksaUJBQVcsSUFBSSxDQUFDLEVBQUUsaUJBQVksSUFBSSxDQUFDLElBQUksaUJBQVksSUFBSSxDQUFDLFNBQVMsZUFBWSxDQUFDO1FBQ3hLLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxJQUFJLFVBQVUsQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDSCxrQkFBQztBQUFELENBQUM7QUFWWSxrQ0FBVzs7Ozs7OztVQ0R4QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDckJBLHNFQUFrQztBQUNsQyxxRkFBNEM7QUFFNUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxlQUFNLENBQUMsOEJBQThCLENBQUMsQ0FBQztBQUVwRCxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsSUFBSTtJQUN2QixJQUFNLElBQUksR0FBRyx5QkFBVyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0FBQ3ZCLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNraWxsIH0gZnJvbSBcIi4vc2tpbGxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTUFJlc3Qge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXJsKSB7fVxyXG5cclxuICBhc3luYyBnZXRTa2lsbHMoKSB7XHJcbiAgICBsZXQgZGF0YSA9IGF3YWl0IGZldGNoKHRoaXMudXJsKS50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKTtcclxuICAgIHJldHVybiBkYXRhO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBTa2lsbCB9IGZyb20gXCIuL3NraWxsXCI7XHJcbmV4cG9ydCBjbGFzcyBUYWJsZUhlbHBlciB7XHJcbiAgc3RhdGljIGdldFRhYmxlSFRNTChkYXRhOiBTa2lsbFtdKTogc3RyaW5nIHtcclxuICAgIGNvbnNvbGUubG9nKFwiVGFibGVIZWxwZXIsIGRhdGEgcmVjZWl2ZWQ6XCIsIGRhdGEpO1xyXG4gICAgdmFyIGh0bWwgPSBgPHRhYmxlIGJvcmRlcj1cIjFcIiB3aWR0aD1cIjEwMCVcIj48dHI+PHRoPklEPC90aD48dGg+TmFtZTwvdGg+PHRoPkNvbXBsZXRlZDwvdGg+PC90cj5gO1xyXG4gICAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGh0bWwgKz0gYDx0ciBzdHlsZT1cImN1cnNvcjpwb2ludGVyXCIgb25jbGljaz1cImNvbnNvbGUubG9nKCdZb3UgY2xpY2tlZCBza2lsbDogJHtpdGVtLm5hbWV9JylcIj48dGQ+JHtpdGVtLmlkfTwvdGQ+PHRkPiR7aXRlbS5uYW1lfTwvdGQ+PHRkPiR7aXRlbS5jb21wbGV0ZWR9PC90ZD48L3RyPmA7XHJcbiAgICB9KTtcclxuICAgIGh0bWwgKz0gYDwvdGFibGU+YDtcclxuICAgIHJldHVybiBodG1sO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IFNQUmVzdCB9IGZyb20gXCIuL1NQUmVzdFwiO1xyXG5pbXBvcnQgeyBUYWJsZUhlbHBlciB9IGZyb20gXCIuL1RhYmxlSGVscGVyXCI7XHJcblxyXG5sZXQgc3AgPSBuZXcgU1BSZXN0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL3NraWxsc1wiKTtcclxuXHJcbnNwLmdldFNraWxscygpLnRoZW4oKGRhdGEpID0+IHtcclxuICBjb25zdCBodG1sID0gVGFibGVIZWxwZXIuZ2V0VGFibGVIVE1MKGRhdGEpO1xyXG4gIGNvbnN0IHRibCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGJsXCIpO1xyXG4gIHRibC5pbm5lckhUTUwgPSBodG1sO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==