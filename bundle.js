/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/js/VideoStorage.js":
/*!********************************!*\
  !*** ./src/js/VideoStorage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoStorage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldSet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/constants */ "./src/js/constants/constants.js");






function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }



var _videos = /*#__PURE__*/new WeakMap();

var VideoStorage = /*#__PURE__*/function () {
  function VideoStorage() {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VideoStorage);

    _classPrivateFieldInitSpec(this, _videos, {
      writable: true,
      value: JSON.parse(localStorage.getItem("videos")) || []
    });
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(VideoStorage, [{
    key: "checkTypeVideoEmpty",
    value: function checkTypeVideoEmpty(isWatchedVideoOnly) {
      return !this.getVideos().some(function (item) {
        return item.isWatched === isWatchedVideoOnly;
      });
    }
  }, {
    key: "addVideoData",
    value: function addVideoData(data) {
      if ((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _videos).length >= _constants_constants__WEBPACK_IMPORTED_MODULE_5__.STORAGE_MAX_COUNT) {
        throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_5__.ERROR_MESSAGE.VIDEO_STORAGE_OVERFLOW);
      }

      (0,_babel_runtime_helpers_classPrivateFieldSet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _videos, [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _videos)), [data]));

      localStorage.setItem("videos", JSON.stringify((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _videos)));
    }
  }, {
    key: "getVideos",
    value: function getVideos() {
      return (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _videos);
    }
  }, {
    key: "getVideoIdArray",
    value: function getVideoIdArray() {
      return this.getVideos().map(function (item) {
        return item.videoId;
      });
    }
  }, {
    key: "setVideoStateWatched",
    value: function setVideoStateWatched(target) {
      var targetIndex = this.getVideos().findIndex(function (item) {
        return item.videoId === target;
      });
      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _videos)[targetIndex].isWatched = !(0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _videos)[targetIndex].isWatched;
      localStorage.setItem("videos", JSON.stringify((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _videos)));
    }
  }, {
    key: "deleteVideo",
    value: function deleteVideo(target) {
      var targetIndex = this.getVideos().findIndex(function (item) {
        return item.videoId === target;
      });

      (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _videos).splice(targetIndex, 1);

      localStorage.setItem("videos", JSON.stringify((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_4__["default"])(this, _videos)));
    }
  }]);

  return VideoStorage;
}();



/***/ }),

/***/ "./src/js/YoutubeApp.js":
/*!******************************!*\
  !*** ./src/js/YoutubeApp.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ YoutubeApp)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _VideoStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VideoStorage */ "./src/js/VideoStorage.js");
/* harmony import */ var _view_SearchModalView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/SearchModalView */ "./src/js/view/SearchModalView.js");
/* harmony import */ var _view_VideoStorageView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./view/VideoStorageView */ "./src/js/view/VideoStorageView.js");
/* harmony import */ var _api_getSearchResult__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./api/getSearchResult */ "./src/js/api/getSearchResult.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utils/utils */ "./src/js/utils/utils.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils/dom */ "./src/js/utils/dom.js");






function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }









var _bindEvents = /*#__PURE__*/new WeakSet();

var _reloadStorageData = /*#__PURE__*/new WeakMap();

var _onClickWatchLaterVideoListButton = /*#__PURE__*/new WeakMap();

var _onClickWatchedVideoListButton = /*#__PURE__*/new WeakMap();

var _onClickSearchModalButton = /*#__PURE__*/new WeakMap();

var _onClickDimmer = /*#__PURE__*/new WeakMap();

var _onClickWatchedButton = /*#__PURE__*/new WeakMap();

var _onClickDeleteButton = /*#__PURE__*/new WeakMap();

var _onClickSaveButton = /*#__PURE__*/new WeakMap();

var _onSubmitSearchButton = /*#__PURE__*/new WeakMap();

var _onScrollVideoList = /*#__PURE__*/new WeakMap();

var YoutubeApp = /*#__PURE__*/function () {
  function YoutubeApp() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, YoutubeApp);

    _classPrivateMethodInitSpec(this, _bindEvents);

    _classPrivateFieldInitSpec(this, _reloadStorageData, {
      writable: true,
      value: function value() {
        if (_this.videoStorage.checkTypeVideoEmpty(_this.isWatchedVideoOnly)) {
          _this.videoStorageView.renderEmptyStorage();

          return;
        }

        _this.videoStorageView.renderSavedVideo(_this.videoStorage.getVideos(), _this.isWatchedVideoOnly);
      }
    });

    _classPrivateFieldInitSpec(this, _onClickWatchLaterVideoListButton, {
      writable: true,
      value: function value() {
        if (!_this.isWatchedVideoOnly) {
          return;
        }

        _this.isWatchedVideoOnly = false;

        _this.videoStorageView.renderNavButtonStateChanged(_this.isWatchedVideoOnly);

        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _reloadStorageData).call(_this);
      }
    });

    _classPrivateFieldInitSpec(this, _onClickWatchedVideoListButton, {
      writable: true,
      value: function value() {
        if (_this.isWatchedVideoOnly) {
          return;
        }

        _this.isWatchedVideoOnly = true;

        _this.videoStorageView.renderNavButtonStateChanged(_this.isWatchedVideoOnly);

        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _reloadStorageData).call(_this);
      }
    });

    _classPrivateFieldInitSpec(this, _onClickSearchModalButton, {
      writable: true,
      value: function value() {
        _this.searchModalView.openSearchModal();
      }
    });

    _classPrivateFieldInitSpec(this, _onClickDimmer, {
      writable: true,
      value: function value() {
        _this.searchModalView.closeSearchModal();

        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _reloadStorageData).call(_this);
      }
    });

    _classPrivateFieldInitSpec(this, _onClickWatchedButton, {
      writable: true,
      value: function value(_ref) {
        var target = _ref.target;
        if (!target.matches(".video-item__watched-button")) return;
        var videoData = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_11__.getTargetVideoData)(target, ".video-item");

        _this.videoStorage.setVideoStateWatched(videoData.videoId);

        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _reloadStorageData).call(_this);
      }
    });

    _classPrivateFieldInitSpec(this, _onClickDeleteButton, {
      writable: true,
      value: function value(_ref2) {
        var target = _ref2.target;

        if (!target.matches(".video-item__delete-button")) {
          return;
        }

        if (!window.confirm("정말로 삭제하시겠습니까?")) {
          return;
        }

        var videoData = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_11__.getTargetVideoData)(target, ".video-item");

        _this.videoStorage.deleteVideo(videoData.videoId);

        (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _reloadStorageData).call(_this);
      }
    });

    _classPrivateFieldInitSpec(this, _onClickSaveButton, {
      writable: true,
      value: function value(_ref3) {
        var target = _ref3.target;
        if (!target.matches(".video-item__save-button")) return;
        var videoData = (0,_utils_dom__WEBPACK_IMPORTED_MODULE_11__.getTargetVideoData)(target, ".video-item");

        try {
          _this.videoStorage.addVideoData(videoData);
        } catch (_ref4) {
          var message = _ref4.message;
          alert(message);
        }

        _this.searchModalView.hideSaveButton(target);
      }
    });

    _classPrivateFieldInitSpec(this, _onSubmitSearchButton, {
      writable: true,
      value: function value(e) {
        e.preventDefault();
        var searchInputKeyword = document.querySelector("#search-input-keyword");

        try {
          (0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.checkKeywordValid)(searchInputKeyword.value);
        } catch (_ref5) {
          var message = _ref5.message;
          alert(message);
          return;
        }

        _this.search(searchInputKeyword.value);
      }
    });

    _classPrivateFieldInitSpec(this, _onScrollVideoList, {
      writable: true,
      value: function () {
        var _value = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee() {
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (!(0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.isScrollToBottom)(_this.videoList)) {
                    _context.next = 2;
                    break;
                  }

                  return _context.abrupt("return");

                case 2:
                  _this.searchNextPage();

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        function value() {
          return _value.apply(this, arguments);
        }

        return value;
      }()
    });

    this.videoList = document.querySelector(".video-list");
    this.savedVideoList = document.querySelector(".saved-video-list");
    this.videoStorage = new _VideoStorage__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.videoStorageView = new _view_VideoStorageView__WEBPACK_IMPORTED_MODULE_7__["default"]();
    this.searchModalView = new _view_SearchModalView__WEBPACK_IMPORTED_MODULE_6__["default"]();
    this.isWatchedVideoOnly = false;

    _classPrivateMethodGet(this, _bindEvents, _bindEvents2).call(this);

    (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _reloadStorageData).call(this);
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(YoutubeApp, [{
    key: "search",
    value: function () {
      var _search = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee2(keyword) {
        var responseData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.searchModalView.clearVideoList();
                this.searchModalView.renderSkeleton();
                this.keyword = keyword;
                _context2.prev = 3;
                _context2.next = 6;
                return (0,_api_getSearchResult__WEBPACK_IMPORTED_MODULE_8__["default"])(this.keyword);

              case 6:
                responseData = _context2.sent;

                if (!(responseData === null)) {
                  _context2.next = 10;
                  break;
                }

                this.searchModalView.unrenderSkeleton();
                return _context2.abrupt("return");

              case 10:
                this.nextPageToken = responseData.nextPageToken;

                if (!(responseData.items.length === 0)) {
                  _context2.next = 14;
                  break;
                }

                this.searchModalView.renderNoResultPage();
                return _context2.abrupt("return");

              case 14:
                this.searchModalView.renderSearchResult(responseData, this.videoStorage.getVideoIdArray());
                _context2.next = 20;
                break;

              case 17:
                _context2.prev = 17;
                _context2.t0 = _context2["catch"](3);
                this.searchModalView.unrenderSkeleton();

              case 20:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 17]]);
      }));

      function search(_x) {
        return _search.apply(this, arguments);
      }

      return search;
    }()
  }, {
    key: "searchNextPage",
    value: function () {
      var _searchNextPage = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().mark(function _callee3() {
        var responseData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_4___default().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.searchModalView.renderSkeleton();
                _context3.prev = 1;
                _context3.next = 4;
                return (0,_api_getSearchResult__WEBPACK_IMPORTED_MODULE_8__["default"])(this.keyword, this.nextPageToken);

              case 4:
                responseData = _context3.sent;

                if (!(responseData === null)) {
                  _context3.next = 8;
                  break;
                }

                this.searchModalView.unrenderSkeleton();
                return _context3.abrupt("return");

              case 8:
                this.nextPageToken = responseData.nextPageToken;
                this.searchModalView.renderSearchResult(responseData, this.videoStorage.getVideoIdArray());
                _context3.next = 15;
                break;

              case 12:
                _context3.prev = 12;
                _context3.t0 = _context3["catch"](1);
                this.searchModalView.unrenderSkeleton();

              case 15:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 12]]);
      }));

      function searchNextPage() {
        return _searchNextPage.apply(this, arguments);
      }

      return searchNextPage;
    }()
  }]);

  return YoutubeApp;
}();

function _bindEvents2() {
  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_11__.bindEventListener)(document.querySelector("#watch-later-video-button"), "click", (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _onClickWatchLaterVideoListButton));
  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_11__.bindEventListener)(document.querySelector("#watched-video-button"), "click", (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _onClickWatchedVideoListButton));
  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_11__.bindEventListener)(document.querySelector("#search-modal-button"), "click", (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _onClickSearchModalButton));
  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_11__.bindEventListener)(document.querySelector("#search-button"), "click", (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _onSubmitSearchButton));
  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_11__.bindEventListener)(this.videoList, "scroll", (0,_utils_utils__WEBPACK_IMPORTED_MODULE_10__.throttle)((0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _onScrollVideoList), _constants_constants__WEBPACK_IMPORTED_MODULE_9__.DELAY_TIME));
  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_11__.bindEventListener)(this.savedVideoList, "click", (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _onClickWatchedButton));
  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_11__.bindEventListener)(this.savedVideoList, "click", (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _onClickDeleteButton));
  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_11__.bindEventListener)(this.videoList, "click", (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _onClickSaveButton));
  (0,_utils_dom__WEBPACK_IMPORTED_MODULE_11__.bindEventListener)(document.querySelector(".dimmer"), "click", (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _onClickDimmer));
}



/***/ }),

/***/ "./src/js/api/getSearchResult.js":
/*!***************************************!*\
  !*** ./src/js/api/getSearchResult.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getSearchResult)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _mockObject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mockObject */ "./src/js/mockObject.js");




var isProgressing = false;
function getSearchResult(_x) {
  return _getSearchResult.apply(this, arguments);
}

function _getSearchResult() {
  _getSearchResult = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(searchKeyword) {
    var nextPageToken,
        REDIRECT_SERVER_HOST,
        url,
        parameters,
        response,
        data,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            nextPageToken = _args.length > 1 && _args[1] !== undefined ? _args[1] : "";

            if (!isProgressing) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", null);

          case 3:
            if (!_constants_constants__WEBPACK_IMPORTED_MODULE_2__.DEVELOP_MODE) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return", {
              items: (0,_mockObject__WEBPACK_IMPORTED_MODULE_3__["default"])(),
              nextPageToken: "ABCDEF"
            });

          case 5:
            isProgressing = true;
            REDIRECT_SERVER_HOST = "https://unruffled-turing-aacdf7.netlify.app";
            url = new URL("youtube/v3/search", REDIRECT_SERVER_HOST);
            parameters = new URLSearchParams({
              part: "snippet",
              type: "video",
              maxResults: _constants_constants__WEBPACK_IMPORTED_MODULE_2__.ITEMS_PER_REQUEST,
              regionCode: "kr",
              safeSearch: "strict",
              pageToken: nextPageToken || "",
              q: searchKeyword
            });
            url.search = parameters.toString();
            _context.prev = 10;
            _context.next = 13;
            return fetch(url, {
              method: "GET"
            });

          case 13:
            response = _context.sent;
            _context.next = 16;
            return response.json();

          case 16:
            data = _context.sent;

            if (response.ok) {
              _context.next = 19;
              break;
            }

            throw new Error(data.error.message);

          case 19:
            isProgressing = false;
            return _context.abrupt("return", data);

          case 23:
            _context.prev = 23;
            _context.t0 = _context["catch"](10);
            _context.t1 = _context.t0.message;
            _context.next = _context.t1 === "Failed to fetch" ? 28 : _context.t1 === "" ? 30 : 31;
            break;

          case 28:
            alert("인터넷 연결이 원활하지 않습니다. 잠시 후 다시 시도해주세요.");
            return _context.abrupt("break", 31);

          case 30:
            return _context.abrupt("break", 31);

          case 31:
            isProgressing = false;
            return _context.abrupt("return", null);

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[10, 23]]);
  }));
  return _getSearchResult.apply(this, arguments);
}

/***/ }),

/***/ "./src/js/constants/constants.js":
/*!***************************************!*\
  !*** ./src/js/constants/constants.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ALLOCATE_FOR_RENDER_PX": () => (/* binding */ ALLOCATE_FOR_RENDER_PX),
/* harmony export */   "DELAY_TIME": () => (/* binding */ DELAY_TIME),
/* harmony export */   "DEVELOP_MODE": () => (/* binding */ DEVELOP_MODE),
/* harmony export */   "ERROR_MESSAGE": () => (/* binding */ ERROR_MESSAGE),
/* harmony export */   "ITEMS_PER_REQUEST": () => (/* binding */ ITEMS_PER_REQUEST),
/* harmony export */   "STORAGE_MAX_COUNT": () => (/* binding */ STORAGE_MAX_COUNT)
/* harmony export */ });
var ERROR_MESSAGE = {
  VIDEO_STORAGE_OVERFLOW: "동영상 저장소가 가득 찼습니다. 동영상은 100개까지 저장이 가능하니, 시청하지 않는 동영상을 제거하신 후 이용해주시기 바랍니다.",
  SEARCH_INPUT_IS_EMPTY: "원하시는 영상의 검색어를 입력하신 후 검색 버튼을 클릭해주시기 바랍니다."
};
var DELAY_TIME = 300;
var ITEMS_PER_REQUEST = 10;
var ALLOCATE_FOR_RENDER_PX = 40;
var STORAGE_MAX_COUNT = 100;
var DEVELOP_MODE = true;

/***/ }),

/***/ "./src/js/mockObject.js":
/*!******************************!*\
  !*** ./src/js/mockObject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ mockObject)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");

function mockObject() {
  return (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(Array(10).keys()).map(function (index) {
    return {
      id: {
        videoId: index
      },
      snippet: {
        channelTitle: "essential;",
        thumbnails: {
          high: {
            url: "https://i.ytimg.com/vi/ECfuKi5-Cfs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvmIcX-TgdcH2g_Bd4AUxw6hjmvQ"
          }
        },
        publishTime: "2022-03-02T11:39:31Z",
        title: "[Playlist] 너무 좋은데 괜찮으시겠어요?"
      }
    };
  });
}

/***/ }),

/***/ "./src/js/utils/dom.js":
/*!*****************************!*\
  !*** ./src/js/utils/dom.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bindEventListener": () => (/* binding */ bindEventListener),
/* harmony export */   "currentScrollHeight": () => (/* binding */ currentScrollHeight),
/* harmony export */   "getTargetVideoData": () => (/* binding */ getTargetVideoData),
/* harmony export */   "scrollToTop": () => (/* binding */ scrollToTop),
/* harmony export */   "totalScrollHeight": () => (/* binding */ totalScrollHeight)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");

var bindEventListener = function bindEventListener(element, type, callback) {
  element.addEventListener(type, callback);
};
var getTargetVideoData = function getTargetVideoData(target, parentSelector) {
  var parentElement = target.closest(parentSelector);
  var videoDataObject = {
    videoId: parentElement.dataset.videoId,
    channel: parentElement.querySelector(".video-item__channel-name").innerText,
    thumbnail: parentElement.querySelector(".video-item__thumbnail").src,
    title: parentElement.querySelector(".video-item__title").innerText,
    publishTime: parentElement.querySelector(".video-item__published-date").innerText,
    isWatched: false
  };
  return videoDataObject;
};
var scrollToTop = function scrollToTop() {
  var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector("body");
  element.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
var totalScrollHeight = function totalScrollHeight(element) {
  return element.scrollHeight - _constants_constants__WEBPACK_IMPORTED_MODULE_0__.ALLOCATE_FOR_RENDER_PX;
};
var currentScrollHeight = function currentScrollHeight(element) {
  return element.clientHeight + element.scrollTop;
};

/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkKeywordValid": () => (/* binding */ checkKeywordValid),
/* harmony export */   "isDuplicate": () => (/* binding */ isDuplicate),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isScrollToBottom": () => (/* binding */ isScrollToBottom),
/* harmony export */   "parsedDate": () => (/* binding */ parsedDate),
/* harmony export */   "throttle": () => (/* binding */ throttle)
/* harmony export */ });
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/js/utils/dom.js");


var isDuplicate = function isDuplicate(inputData, storeData) {
  return storeData.some(function (store) {
    return store.id === inputData.id;
  });
};
var parsedDate = function parsedDate(rawDate) {
  var date = rawDate.split("T")[0];
  var standard = ["년", "월", "일"];
  return date.split("-").map(function (item, index) {
    return Number(item) + standard[index];
  }).join(" ").trim();
};
var throttle = function throttle(callback, delayTime) {
  var timerId;
  return function () {
    if (timerId) return;
    timerId = setTimeout(function () {
      timerId = null;
      callback();
    }, delayTime);
  };
};
var isEmpty = function isEmpty(inputValue) {
  return !inputValue.trim().length;
};
var checkKeywordValid = function checkKeywordValid(inputValue) {
  if (isEmpty(inputValue)) {
    throw new Error(_constants_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_MESSAGE.SEARCH_INPUT_IS_EMPTY);
  }
};
var isScrollToBottom = function isScrollToBottom(element) {
  return (0,_dom__WEBPACK_IMPORTED_MODULE_1__.totalScrollHeight)(element) > (0,_dom__WEBPACK_IMPORTED_MODULE_1__.currentScrollHeight)(element);
};

/***/ }),

/***/ "./src/js/view/SearchModalView.js":
/*!****************************************!*\
  !*** ./src/js/view/SearchModalView.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchModalView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/dom */ "./src/js/utils/dom.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/utils */ "./src/js/utils/utils.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/constants */ "./src/js/constants/constants.js");
/* harmony import */ var _assets_images_not_found_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../assets/images/not_found.png */ "./src/assets/images/not_found.png");





function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }






var _videoItems = /*#__PURE__*/new WeakMap();

var _skeleton = /*#__PURE__*/new WeakMap();

var _noResult = /*#__PURE__*/new WeakSet();

var SearchModalView = /*#__PURE__*/function () {
  function SearchModalView() {
    var _this = this;

    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SearchModalView);

    _classPrivateMethodInitSpec(this, _noResult);

    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "videoItem", function (_ref, videoIdArray) {
      var id = _ref.id,
          channel = _ref.channel,
          thumbnail = _ref.thumbnail,
          title = _ref.title,
          date = _ref.date;
      return "<li class=\"video-item\" data-video-id=\"".concat(id, "\">\n    <a href=\"https://www.youtube.com/watch?v=").concat(id, "\" target=\"_blank\">\n      <img\n      src=\"").concat(thumbnail, "\"\n      alt=\"video-item-thumbnail\"\n      class=\"video-item__thumbnail\"\n      />\n      <h4 class=\"video-item__title\">\n        ").concat(title, "\n      </h4>\n      <p class=\"video-item__channel-name \">").concat(channel, "</p>\n      <p class=\"video-item__published-date \">").concat(date, "</p>\n    </a>\n    <button class=\"video-item__save-button button ").concat(videoIdArray.includes(String(id)) ? "hide" : "", " \">\n      \u2B07 \uC800\uC7A5\n    </button>\n  </li>");
    });

    _classPrivateFieldInitSpec(this, _videoItems, {
      writable: true,
      value: function value(responseData, videoIdArray) {
        return responseData.map(function (item) {
          return _this.videoItem({
            id: item.id.videoId,
            channel: item.snippet.channelTitle,
            thumbnail: item.snippet.thumbnails.high.url,
            title: item.snippet.title,
            date: (0,_utils_utils__WEBPACK_IMPORTED_MODULE_5__.parsedDate)(item.snippet.publishTime)
          }, videoIdArray);
        }).join("");
      }
    });

    _classPrivateFieldInitSpec(this, _skeleton, {
      writable: true,
      value: function value() {
        return "\n    <li class=\"video-item skeleton\" data-video-id=\"\">\n      <div class=\"video-item__thumbnail image\"></div>\n      <div>\n        <div class=\"video-item__title line\"></div>\n        <div class=\"video-item__channel-name line\"></div>\n        <div class=\"video-item__published-date line\"></div>\n      </div>\n      <div class=\"video-item__save-button button\"></div>\n    </li>\n  ".repeat(_constants_constants__WEBPACK_IMPORTED_MODULE_6__.ITEMS_PER_REQUEST);
      }
    });

    this.modalContainer = document.querySelector(".modal-container");
    this.searchInputKeyword = document.querySelector("#search-input-keyword");
    this.searchResult = document.querySelector(".search-result");
    this.videoList = document.querySelector(".search-result .video-list");
    this.noResultDiv = document.querySelector(".search-result .no-result");
    this.noResultImage = document.querySelector("#search-modal-no-result__image");
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SearchModalView, [{
    key: "openSearchModal",
    value: function openSearchModal() {
      this.modalContainer.classList.remove("hide");
    }
  }, {
    key: "closeSearchModal",
    value: function closeSearchModal() {
      this.searchInputKeyword.value = "";
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.scrollToTop)(this.videoList);
      document.querySelectorAll(".search-result .video-item").forEach(function (element) {
        return element.remove();
      });
      this.modalContainer.classList.add("hide");
    }
  }, {
    key: "clearVideoList",
    value: function clearVideoList() {
      (0,_utils_dom__WEBPACK_IMPORTED_MODULE_4__.scrollToTop)(this.videoList);
      document.querySelectorAll(".search-result .video-item").forEach(function (element) {
        return element.remove();
      });
    }
  }, {
    key: "renderSkeleton",
    value: function renderSkeleton() {
      this.videoList.insertAdjacentHTML("beforeend", (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _skeleton).call(this));
    }
  }, {
    key: "unrenderSkeleton",
    value: function unrenderSkeleton() {
      var _this2 = this;

      document.querySelectorAll(".skeleton").forEach(function (element) {
        _this2.videoList.removeChild(element);
      });
    }
  }, {
    key: "renderNoResultPage",
    value: function renderNoResultPage() {
      this.searchResult.removeChild(this.videoList);
      this.searchResult.classList.add("search-result--no-result");
      this.noResultDiv.classList.remove("hide");
      this.noResultImage.src = _assets_images_not_found_png__WEBPACK_IMPORTED_MODULE_7__;
    }
  }, {
    key: "renderSearchResult",
    value: function renderSearchResult(responseData, videoIdArray) {
      this.unrenderSkeleton();
      this.noResultDiv.classList.add("hide");

      var videoItemTemplate = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(this, _videoItems).call(this, responseData.items, videoIdArray);

      this.videoList.insertAdjacentHTML("beforeend", videoItemTemplate);
    }
  }, {
    key: "hideSaveButton",
    value: function hideSaveButton(target) {
      target.classList.add("hide");
    }
  }]);

  return SearchModalView;
}();

function _noResult2(src, message) {
  return "\n    <div class=\"no-result\">\n      <img src=".concat(src, " alt=\"no result image\" class=\"no-result__image\">\n      <p class=\"no-result__description\">\n        ").concat(message, "\n      </p>\n    </div>\n  ");
}



/***/ }),

/***/ "./src/js/view/VideoStorageView.js":
/*!*****************************************!*\
  !*** ./src/js/view/VideoStorageView.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoStorageView)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classPrivateFieldGet */ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js");
/* harmony import */ var _assets_images_not_found_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/not_found.png */ "./src/assets/images/not_found.png");





function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }



var _savedVideoItems = /*#__PURE__*/new WeakMap();

var VideoStorageView = /*#__PURE__*/(0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function VideoStorageView() {
  var _this = this;

  (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, VideoStorageView);

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "savedVideoItem", function (_ref) {
    var id = _ref.id,
        channel = _ref.channel,
        thumbnail = _ref.thumbnail,
        title = _ref.title,
        date = _ref.date,
        isWatched = _ref.isWatched;
    return "<li class=\"video-item\" data-video-id=\"".concat(id, "\">\n    <a href=\"https://www.youtube.com/watch?v=").concat(id, "\" target=\"_blank\">\n      <img\n        src=\"").concat(thumbnail, "\"\n        alt=\"video-item-thumbnail\"\n        class=\"video-item__thumbnail\"\n      />\n      <h4 class=\"video-item__title\">").concat(title, "</h4>\n      <p class=\"video-item__channel-name\">").concat(channel, "</p>\n      <p class=\"video-item__published-date\">").concat(date, "</p>\n    </a>\n    <div class=\"video-button__wrapper\">\n      <button class=\"video-item__watched-button button ").concat(isWatched ? "selected" : "", "\">\u2705</button>\n      <button class=\"video-item__delete-button button\">\uD83D\uDDD1\uFE0F</button>\n    </div>\n  </li>");
  });

  _classPrivateFieldInitSpec(this, _savedVideoItems, {
    writable: true,
    value: function value(videoStorage, watchedVideoOnly) {
      if (watchedVideoOnly) {
        return videoStorage.map(function (item) {
          return item.isWatched ? _this.savedVideoItem({
            id: item.videoId,
            channel: item.channel,
            thumbnail: item.thumbnail,
            title: item.title,
            date: item.publishTime,
            isWatched: item.isWatched
          }) : "";
        }).join("");
      }

      return videoStorage.map(function (item) {
        return item.isWatched ? "" : _this.savedVideoItem({
          id: item.videoId,
          channel: item.channel,
          thumbnail: item.thumbnail,
          title: item.title,
          date: item.publishTime,
          isWatched: item.isWatched
        });
      }).join("");
    }
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "renderEmptyStorage", function () {
    _this.savedVideoList.classList.add("hide");

    _this.noResultDiv.classList.remove("hide");

    document.querySelector(".no-result__image").src = _assets_images_not_found_png__WEBPACK_IMPORTED_MODULE_4__;
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "renderSavedVideo", function (videoData, watchedVideoOnly) {
    var videoItemTemplate = (0,_babel_runtime_helpers_classPrivateFieldGet__WEBPACK_IMPORTED_MODULE_3__["default"])(_this, _savedVideoItems).call(_this, videoData, watchedVideoOnly);

    document.querySelectorAll(".saved-video-list .video-item").forEach(function (element) {
      return element.remove();
    });

    _this.savedVideoList.classList.remove("hide");

    _this.savedVideoList.insertAdjacentHTML("beforeend", videoItemTemplate);

    if (!_this.noResultDiv) {
      return;
    }

    _this.noResultDiv.classList.add("hide");
  });

  (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "renderNavButtonStateChanged", function (watchedVideoOnly) {
    if (watchedVideoOnly) {
      document.querySelector("#watch-later-video-button").classList.remove("selected");
      document.querySelector("#watched-video-button").classList.add("selected");
      return;
    }

    document.querySelector("#watch-later-video-button").classList.add("selected");
    document.querySelector("#watched-video-button").classList.remove("selected");
  });

  this.savedVideoSection = document.querySelector(".saved-video__section");
  this.savedVideoList = document.querySelector(".saved-video-list");
  this.noResultDiv = document.querySelector(".saved-video__section .no-result");
});



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/app.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  margin: 0 auto;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.nav__button:hover {\n  background: #ebebeb;\n}\n\n#search-modal-button {\n  margin-left: auto;\n}\n\n.saved-video__button {\n  border: 1px solid #cccccc;\n}\n\n.saved-video__button:hover {\n  background: rgba(0, 188, 212, 0.12);\n}\n\n.selected {\n  background: rgba(0, 188, 212, 0.12);\n}\n\n.saved-video-list {\n  width: 105%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: hidden;\n}\n\n.video-button__wrapper {\n  text-align: right;\n}\n\n.no-result {\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n/* ******** */\n/* skeleton */\n/* ******** */\n.skeleton {\n  width: 236px;\n}\n\n.skeleton .button,\n.skeleton .button:hover,\n.skeleton .image,\n.skeleton .line {\n  background-image: linear-gradient(\n    90deg,\n    #e0e0e0 0px,\n    #ededed 30px,\n    #e0e0e0 60px\n  );\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton .image {\n  border-style: hidden;\n  border: 0;\n  border-width: 0;\n\n  height: 150px;\n}\n\n.skeleton .line {\n  height: 16px;\n  margin-bottom: 0.25rem;\n}\n\n.skeleton .line:first-child {\n  width: 50%;\n}\n\n.skeleton .line:last-child {\n  width: 80%;\n}\n\n.skeleton .button {\n  cursor: default;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/app.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;EACjB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;;EAEZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA,aAAa;AACb,aAAa;AACb,aAAa;AACb;EACE,YAAY;AACd;;AAEA;;;;EAIE;;;;;GAKC;EACD,uCAAuC;AACzC;;AAEA;EACE,oBAAoB;EACpB,SAAS;EACT,eAAe;;EAEf,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,sBAAsB;AACxB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,iCAAiC;EACnC;EACA;;IAEE,0BAA0B;EAC5B;AACF","sourcesContent":["body {\n  padding: 64px 0;\n  font-size: 16px;\n}\n\n#app {\n  max-width: 1020px;\n  margin: 0 auto;\n}\n\n.classroom-container__title {\n  text-align: center;\n  font-weight: bold;\n  line-height: 36px;\n  margin-bottom: 64px;\n}\n\n.nav {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.nav__button:hover {\n  background: #ebebeb;\n}\n\n#search-modal-button {\n  margin-left: auto;\n}\n\n.saved-video__button {\n  border: 1px solid #cccccc;\n}\n\n.saved-video__button:hover {\n  background: rgba(0, 188, 212, 0.12);\n}\n\n.selected {\n  background: rgba(0, 188, 212, 0.12);\n}\n\n.saved-video-list {\n  width: 105%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: hidden;\n}\n\n.video-button__wrapper {\n  text-align: right;\n}\n\n.no-result {\n  flex-grow: 1;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n/* ******** */\n/* skeleton */\n/* ******** */\n.skeleton {\n  width: 236px;\n}\n\n.skeleton .button,\n.skeleton .button:hover,\n.skeleton .image,\n.skeleton .line {\n  background-image: linear-gradient(\n    90deg,\n    #e0e0e0 0px,\n    #ededed 30px,\n    #e0e0e0 60px\n  );\n  animation: refresh 2s infinite ease-out;\n}\n\n.skeleton .image {\n  border-style: hidden;\n  border: 0;\n  border-width: 0;\n\n  height: 150px;\n}\n\n.skeleton .line {\n  height: 16px;\n  margin-bottom: 0.25rem;\n}\n\n.skeleton .line:first-child {\n  width: 50%;\n}\n\n.skeleton .line:last-child {\n  width: 80%;\n}\n\n.skeleton .button {\n  cursor: default;\n}\n\n@keyframes refresh {\n  0% {\n    background-position: calc(-100px);\n  }\n  40%,\n  100% {\n    background-position: 320px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./app.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/app.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!./modal.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_app_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\ntextarea,\nselect {\n  font: inherit;\n}\n\nbutton {\n  height: 36px;\n  cursor: pointer;\n  font-style: normal;\n  font-weight: bold;\n  padding: 0 10px;\n  border-radius: 4px;\n  border: none;\n  background: #f5f5f5;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\nh1 {\n  font-size: 34px;\n}\n\nh2 {\n  font-size: 34px;\n}\n\na {\n  text-decoration: none;\n  color: #000000;\n  font: inherit;\n}\n\n@media (max-width: 1279px) {\n  #app {\n    max-width: 760px;\n  }\n\n  .search-modal {\n    max-width: 860px;\n  }\n}\n\n@media (max-width: 959px) {\n  #app {\n    max-width: 500px;\n  }\n\n  .search-modal {\n    max-width: 600px;\n  }\n}\n\n@media (max-width: 599px) {\n  #app {\n    max-width: 300px;\n  }\n\n  .search-modal {\n    max-width: 360px;\n  }\n\n  h1,\n  h2 {\n    font-size: 22px;\n  }\n\n  button {\n    height: 28px;\n    font-size: 12px;\n  }\n\n  .search-input__keyword {\n    width: 200px;\n    font-size: 10px;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAGA;EACE,SAAS;EACT,UAAU;EACV,sBAAsB;AACxB;;AAEA;;EAEE,gBAAgB;AAClB;;AAEA;;EAEE,YAAY;EACZ,mCAAmC;AACrC;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,mBAAmB;EACnB,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,aAAa;AACf;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;;IAEE,eAAe;EACjB;;EAEA;IACE,YAAY;IACZ,eAAe;EACjB;;EAEA;IACE,YAAY;IACZ,eAAe;EACjB;AACF","sourcesContent":["@import \"./app.css\";\n@import \"./modal.css\";\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nhtml,\nbody {\n  height: 100%;\n  -webkit-font-smoothing: antialiased;\n}\n\ninput,\ntextarea,\nselect {\n  font: inherit;\n}\n\nbutton {\n  height: 36px;\n  cursor: pointer;\n  font-style: normal;\n  font-weight: bold;\n  padding: 0 10px;\n  border-radius: 4px;\n  border: none;\n  background: #f5f5f5;\n  font-size: 14px;\n  letter-spacing: 1.25px;\n}\n\nh1 {\n  font-size: 34px;\n}\n\nh2 {\n  font-size: 34px;\n}\n\na {\n  text-decoration: none;\n  color: #000000;\n  font: inherit;\n}\n\n@media (max-width: 1279px) {\n  #app {\n    max-width: 760px;\n  }\n\n  .search-modal {\n    max-width: 860px;\n  }\n}\n\n@media (max-width: 959px) {\n  #app {\n    max-width: 500px;\n  }\n\n  .search-modal {\n    max-width: 600px;\n  }\n}\n\n@media (max-width: 599px) {\n  #app {\n    max-width: 300px;\n  }\n\n  .search-modal {\n    max-width: 360px;\n  }\n\n  h1,\n  h2 {\n    font-size: 22px;\n  }\n\n  button {\n    height: 28px;\n    font-size: 12px;\n  }\n\n  .search-input__keyword {\n    width: 200px;\n    font-size: 10px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/modal.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/modal.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  display: flex;\n  flex-direction: column;\n\n  position: relative;\n  width: 1080px;\n  height: 727px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  width: 102%;\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: #efefef;\n}\n", "",{"version":3,"sources":["webpack://./src/css/modal.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,MAAM;EACN,OAAO;AACT;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,sBAAsB;;EAEtB,kBAAkB;EAClB,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,qCAAqC;EACrC,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,yBAAyB;EACzB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;EACrB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":[".modal-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.hide {\n  display: none;\n}\n\n.dimmer {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n}\n\n.search-modal {\n  display: flex;\n  flex-direction: column;\n\n  position: relative;\n  width: 1080px;\n  height: 727px;\n  background: #ffffff;\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  border-radius: 4px;\n  padding: 50px 30px 32px 30px;\n}\n\n.search-modal__title {\n  font-weight: bold;\n  line-height: 36px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.search-input {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 40px;\n}\n\n.search-input__keyword {\n  width: 400px;\n  height: 36px;\n  margin-right: 20px;\n  padding: 4px 8px;\n  border: 1px solid #b4b4b4;\n  border-radius: 4px;\n}\n\n.search-input__keyword::placeholder {\n  color: #8b8b8b;\n  font-size: 16px;\n}\n\n.search-input__search-button {\n  width: 72px;\n  height: 36px;\n  background: #00bcd4;\n  color: #ffffff;\n}\n\n.no-result__image {\n  width: 190px;\n  height: 140px;\n  margin-bottom: 32px;\n}\n\n.no-result__description {\n  font-size: 16px;\n  line-height: 150%;\n  text-align: center;\n  letter-spacing: 0.5px;\n}\n\n.video-list {\n  width: 102%;\n  height: 493px;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: 32px 20px;\n  overflow-y: scroll;\n}\n\n.video-item {\n  position: relative;\n  width: 240px;\n  height: 255px;\n}\n\n.video-item__thumbnail {\n  width: 100%;\n  height: 135px;\n}\n\n.video-item__title {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin: 4px 0;\n}\n\n.video-item__channel-name {\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.video-item__published-date {\n  font-size: 12px;\n  line-height: 24px;\n  letter-spacing: 0.5px;\n}\n\n.video-item__save-button {\n  position: absolute;\n  right: 0;\n  width: 80px;\n  height: 36px;\n  background: #f9f9f9;\n  margin-top: 4px;\n}\n\n.video-item__save-button:hover {\n  background: #efefef;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/images/not_found.png":
/*!*****************************************!*\
  !*** ./src/assets/images/not_found.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6a8b7db4b5b4659f9362.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _asyncToGenerator)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorGet)
/* harmony export */ });
function _classApplyDescriptorGet(receiver, descriptor) {
  if (descriptor.get) {
    return descriptor.get.call(receiver);
  }

  return descriptor.value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classApplyDescriptorSet)
/* harmony export */ });
function _classApplyDescriptorSet(receiver, descriptor, value) {
  if (descriptor.set) {
    descriptor.set.call(receiver, value);
  } else {
    if (!descriptor.writable) {
      throw new TypeError("attempted to set read only private field");
    }

    descriptor.value = value;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classExtractFieldDescriptor)
/* harmony export */ });
function _classExtractFieldDescriptor(receiver, privateMap, action) {
  if (!privateMap.has(receiver)) {
    throw new TypeError("attempted to " + action + " private field on non-instance");
  }

  return privateMap.get(receiver);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldGet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorGet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorGet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldGet(receiver, privateMap) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "get");
  return (0,_classApplyDescriptorGet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classPrivateFieldSet)
/* harmony export */ });
/* harmony import */ var _classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classApplyDescriptorSet.js */ "./node_modules/@babel/runtime/helpers/esm/classApplyDescriptorSet.js");
/* harmony import */ var _classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classExtractFieldDescriptor.js */ "./node_modules/@babel/runtime/helpers/esm/classExtractFieldDescriptor.js");


function _classPrivateFieldSet(receiver, privateMap, value) {
  var descriptor = (0,_classExtractFieldDescriptor_js__WEBPACK_IMPORTED_MODULE_1__["default"])(receiver, privateMap, "set");
  (0,_classApplyDescriptorSet_js__WEBPACK_IMPORTED_MODULE_0__["default"])(receiver, descriptor, value);
  return value;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index */ "./src/css/index.css");
/* harmony import */ var _YoutubeApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./YoutubeApp */ "./src/js/YoutubeApp.js");


new _YoutubeApp__WEBPACK_IMPORTED_MODULE_1__["default"]();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map