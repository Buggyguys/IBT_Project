import {
  require_react
} from "./chunk-O5DBXPPX.js";
import {
  __glob,
  __toESM
} from "./chunk-5N7ZOTW6.js";

// node_modules/@metamask/sdk-react/dist/esm/index.js
var import_react = __toESM(require_react());

// import("./**/*.entry.js") in node_modules/@metamask/sdk-react/dist/esm/index.js
var globImport_entry_js = __glob({});

// node_modules/@metamask/sdk-react/dist/esm/index.js
var c = "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
var l = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
var d = { exports: {} };
!function(e8, t2) {
  var n2 = "undefined" != typeof globalThis && globalThis || "undefined" != typeof self && self || void 0 !== l && l, r2 = function() {
    function e9() {
      this.fetch = false, this.DOMException = n2.DOMException;
    }
    return e9.prototype = n2, new e9();
  }();
  !function(e9) {
    !function(t3) {
      var n3 = void 0 !== e9 && e9 || "undefined" != typeof self && self || void 0 !== n3 && n3, r3 = "URLSearchParams" in n3, i3 = "Symbol" in n3 && "iterator" in Symbol, o2 = "FileReader" in n3 && "Blob" in n3 && function() {
        try {
          return new Blob(), true;
        } catch (e10) {
          return false;
        }
      }(), s2 = "FormData" in n3, a2 = "ArrayBuffer" in n3;
      if (a2) var c2 = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], l2 = ArrayBuffer.isView || function(e10) {
        return e10 && c2.indexOf(Object.prototype.toString.call(e10)) > -1;
      };
      function d2(e10) {
        if ("string" != typeof e10 && (e10 = String(e10)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e10) || "" === e10) throw new TypeError('Invalid character in header field name: "' + e10 + '"');
        return e10.toLowerCase();
      }
      function u2(e10) {
        return "string" != typeof e10 && (e10 = String(e10)), e10;
      }
      function h2(e10) {
        var t4 = { next: function() {
          var t5 = e10.shift();
          return { done: void 0 === t5, value: t5 };
        } };
        return i3 && (t4[Symbol.iterator] = function() {
          return t4;
        }), t4;
      }
      function f2(e10) {
        this.map = {}, e10 instanceof f2 ? e10.forEach(function(e11, t4) {
          this.append(t4, e11);
        }, this) : Array.isArray(e10) ? e10.forEach(function(e11) {
          this.append(e11[0], e11[1]);
        }, this) : e10 && Object.getOwnPropertyNames(e10).forEach(function(t4) {
          this.append(t4, e10[t4]);
        }, this);
      }
      function p2(e10) {
        if (e10.bodyUsed) return Promise.reject(new TypeError("Already read"));
        e10.bodyUsed = true;
      }
      function g2(e10) {
        return new Promise(function(t4, n4) {
          e10.onload = function() {
            t4(e10.result);
          }, e10.onerror = function() {
            n4(e10.error);
          };
        });
      }
      function m2(e10) {
        var t4 = new FileReader(), n4 = g2(t4);
        return t4.readAsArrayBuffer(e10), n4;
      }
      function y2(e10) {
        if (e10.slice) return e10.slice(0);
        var t4 = new Uint8Array(e10.byteLength);
        return t4.set(new Uint8Array(e10)), t4.buffer;
      }
      function v2() {
        return this.bodyUsed = false, this._initBody = function(e10) {
          var t4;
          this.bodyUsed = this.bodyUsed, this._bodyInit = e10, e10 ? "string" == typeof e10 ? this._bodyText = e10 : o2 && Blob.prototype.isPrototypeOf(e10) ? this._bodyBlob = e10 : s2 && FormData.prototype.isPrototypeOf(e10) ? this._bodyFormData = e10 : r3 && URLSearchParams.prototype.isPrototypeOf(e10) ? this._bodyText = e10.toString() : a2 && o2 && ((t4 = e10) && DataView.prototype.isPrototypeOf(t4)) ? (this._bodyArrayBuffer = y2(e10.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : a2 && (ArrayBuffer.prototype.isPrototypeOf(e10) || l2(e10)) ? this._bodyArrayBuffer = y2(e10) : this._bodyText = e10 = Object.prototype.toString.call(e10) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof e10 ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r3 && URLSearchParams.prototype.isPrototypeOf(e10) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, o2 && (this.blob = function() {
          var e10 = p2(this);
          if (e10) return e10;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData) throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          if (this._bodyArrayBuffer) {
            var e10 = p2(this);
            return e10 || (ArrayBuffer.isView(this._bodyArrayBuffer) ? Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset, this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength)) : Promise.resolve(this._bodyArrayBuffer));
          }
          return this.blob().then(m2);
        }), this.text = function() {
          var e10, t4, n4, r4 = p2(this);
          if (r4) return r4;
          if (this._bodyBlob) return e10 = this._bodyBlob, t4 = new FileReader(), n4 = g2(t4), t4.readAsText(e10), n4;
          if (this._bodyArrayBuffer) return Promise.resolve(function(e11) {
            for (var t5 = new Uint8Array(e11), n5 = new Array(t5.length), r5 = 0; r5 < t5.length; r5++) n5[r5] = String.fromCharCode(t5[r5]);
            return n5.join("");
          }(this._bodyArrayBuffer));
          if (this._bodyFormData) throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, s2 && (this.formData = function() {
          return this.text().then(E2);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      f2.prototype.append = function(e10, t4) {
        e10 = d2(e10), t4 = u2(t4);
        var n4 = this.map[e10];
        this.map[e10] = n4 ? n4 + ", " + t4 : t4;
      }, f2.prototype.delete = function(e10) {
        delete this.map[d2(e10)];
      }, f2.prototype.get = function(e10) {
        return e10 = d2(e10), this.has(e10) ? this.map[e10] : null;
      }, f2.prototype.has = function(e10) {
        return this.map.hasOwnProperty(d2(e10));
      }, f2.prototype.set = function(e10, t4) {
        this.map[d2(e10)] = u2(t4);
      }, f2.prototype.forEach = function(e10, t4) {
        for (var n4 in this.map) this.map.hasOwnProperty(n4) && e10.call(t4, this.map[n4], n4, this);
      }, f2.prototype.keys = function() {
        var e10 = [];
        return this.forEach(function(t4, n4) {
          e10.push(n4);
        }), h2(e10);
      }, f2.prototype.values = function() {
        var e10 = [];
        return this.forEach(function(t4) {
          e10.push(t4);
        }), h2(e10);
      }, f2.prototype.entries = function() {
        var e10 = [];
        return this.forEach(function(t4, n4) {
          e10.push([n4, t4]);
        }), h2(e10);
      }, i3 && (f2.prototype[Symbol.iterator] = f2.prototype.entries);
      var b2 = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function w2(e10, t4) {
        if (!(this instanceof w2)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        var n4, r4, i4 = (t4 = t4 || {}).body;
        if (e10 instanceof w2) {
          if (e10.bodyUsed) throw new TypeError("Already read");
          this.url = e10.url, this.credentials = e10.credentials, t4.headers || (this.headers = new f2(e10.headers)), this.method = e10.method, this.mode = e10.mode, this.signal = e10.signal, i4 || null == e10._bodyInit || (i4 = e10._bodyInit, e10.bodyUsed = true);
        } else this.url = String(e10);
        if (this.credentials = t4.credentials || this.credentials || "same-origin", !t4.headers && this.headers || (this.headers = new f2(t4.headers)), this.method = (n4 = t4.method || this.method || "GET", r4 = n4.toUpperCase(), b2.indexOf(r4) > -1 ? r4 : n4), this.mode = t4.mode || this.mode || null, this.signal = t4.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && i4) throw new TypeError("Body not allowed for GET or HEAD requests");
        if (this._initBody(i4), !("GET" !== this.method && "HEAD" !== this.method || "no-store" !== t4.cache && "no-cache" !== t4.cache)) {
          var o3 = /([?&])_=[^&]*/;
          if (o3.test(this.url)) this.url = this.url.replace(o3, "$1_=" + (/* @__PURE__ */ new Date()).getTime());
          else {
            this.url += (/\?/.test(this.url) ? "&" : "?") + "_=" + (/* @__PURE__ */ new Date()).getTime();
          }
        }
      }
      function E2(e10) {
        var t4 = new FormData();
        return e10.trim().split("&").forEach(function(e11) {
          if (e11) {
            var n4 = e11.split("="), r4 = n4.shift().replace(/\+/g, " "), i4 = n4.join("=").replace(/\+/g, " ");
            t4.append(decodeURIComponent(r4), decodeURIComponent(i4));
          }
        }), t4;
      }
      function C2(e10, t4) {
        if (!(this instanceof C2)) throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
        t4 || (t4 = {}), this.type = "default", this.status = void 0 === t4.status ? 200 : t4.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = void 0 === t4.statusText ? "" : "" + t4.statusText, this.headers = new f2(t4.headers), this.url = t4.url || "", this._initBody(e10);
      }
      w2.prototype.clone = function() {
        return new w2(this, { body: this._bodyInit });
      }, v2.call(w2.prototype), v2.call(C2.prototype), C2.prototype.clone = function() {
        return new C2(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new f2(this.headers), url: this.url });
      }, C2.error = function() {
        var e10 = new C2(null, { status: 0, statusText: "" });
        return e10.type = "error", e10;
      };
      var _2 = [301, 302, 303, 307, 308];
      C2.redirect = function(e10, t4) {
        if (-1 === _2.indexOf(t4)) throw new RangeError("Invalid status code");
        return new C2(null, { status: t4, headers: { location: e10 } });
      }, t3.DOMException = n3.DOMException;
      try {
        new t3.DOMException();
      } catch (e10) {
        t3.DOMException = function(e11, t4) {
          this.message = e11, this.name = t4;
          var n4 = Error(e11);
          this.stack = n4.stack;
        }, t3.DOMException.prototype = Object.create(Error.prototype), t3.DOMException.prototype.constructor = t3.DOMException;
      }
      function S2(e10, r4) {
        return new Promise(function(i4, s3) {
          var c3 = new w2(e10, r4);
          if (c3.signal && c3.signal.aborted) return s3(new t3.DOMException("Aborted", "AbortError"));
          var l3 = new XMLHttpRequest();
          function d3() {
            l3.abort();
          }
          l3.onload = function() {
            var e11, t4, n4 = { status: l3.status, statusText: l3.statusText, headers: (e11 = l3.getAllResponseHeaders() || "", t4 = new f2(), e11.replace(/\r?\n[\t ]+/g, " ").split("\r").map(function(e12) {
              return 0 === e12.indexOf("\n") ? e12.substr(1, e12.length) : e12;
            }).forEach(function(e12) {
              var n5 = e12.split(":"), r6 = n5.shift().trim();
              if (r6) {
                var i5 = n5.join(":").trim();
                t4.append(r6, i5);
              }
            }), t4) };
            n4.url = "responseURL" in l3 ? l3.responseURL : n4.headers.get("X-Request-URL");
            var r5 = "response" in l3 ? l3.response : l3.responseText;
            setTimeout(function() {
              i4(new C2(r5, n4));
            }, 0);
          }, l3.onerror = function() {
            setTimeout(function() {
              s3(new TypeError("Network request failed"));
            }, 0);
          }, l3.ontimeout = function() {
            setTimeout(function() {
              s3(new TypeError("Network request failed"));
            }, 0);
          }, l3.onabort = function() {
            setTimeout(function() {
              s3(new t3.DOMException("Aborted", "AbortError"));
            }, 0);
          }, l3.open(c3.method, function(e11) {
            try {
              return "" === e11 && n3.location.href ? n3.location.href : e11;
            } catch (t4) {
              return e11;
            }
          }(c3.url), true), "include" === c3.credentials ? l3.withCredentials = true : "omit" === c3.credentials && (l3.withCredentials = false), "responseType" in l3 && (o2 ? l3.responseType = "blob" : a2 && c3.headers.get("Content-Type") && -1 !== c3.headers.get("Content-Type").indexOf("application/octet-stream") && (l3.responseType = "arraybuffer")), !r4 || "object" != typeof r4.headers || r4.headers instanceof f2 ? c3.headers.forEach(function(e11, t4) {
            l3.setRequestHeader(t4, e11);
          }) : Object.getOwnPropertyNames(r4.headers).forEach(function(e11) {
            l3.setRequestHeader(e11, u2(r4.headers[e11]));
          }), c3.signal && (c3.signal.addEventListener("abort", d3), l3.onreadystatechange = function() {
            4 === l3.readyState && c3.signal.removeEventListener("abort", d3);
          }), l3.send(void 0 === c3._bodyInit ? null : c3._bodyInit);
        });
      }
      S2.polyfill = true, n3.fetch || (n3.fetch = S2, n3.Headers = f2, n3.Request = w2, n3.Response = C2), t3.Headers = f2, t3.Request = w2, t3.Response = C2, t3.fetch = S2;
    }({});
  }(r2), r2.fetch.ponyfill = true, delete r2.fetch.polyfill;
  var i2 = n2.fetch ? n2 : r2;
  (t2 = i2.fetch).default = i2.fetch, t2.fetch = i2.fetch, t2.Headers = i2.Headers, t2.Request = i2.Request, t2.Response = i2.Response, e8.exports = t2;
}(d, d.exports);
var u = d.exports;
function h() {
  throw new Error("setTimeout has not been defined");
}
function f() {
  throw new Error("clearTimeout has not been defined");
}
var p = h;
var g = f;
function m(e8) {
  if (p === setTimeout) return setTimeout(e8, 0);
  if ((p === h || !p) && setTimeout) return p = setTimeout, setTimeout(e8, 0);
  try {
    return p(e8, 0);
  } catch (t2) {
    try {
      return p.call(null, e8, 0);
    } catch (t3) {
      return p.call(this, e8, 0);
    }
  }
}
"function" == typeof c.setTimeout && (p = setTimeout), "function" == typeof c.clearTimeout && (g = clearTimeout);
var y;
var v = [];
var b = false;
var w = -1;
function E() {
  b && y && (b = false, y.length ? v = y.concat(v) : w = -1, v.length && C());
}
function C() {
  if (!b) {
    var e8 = m(E);
    b = true;
    for (var t2 = v.length; t2; ) {
      for (y = v, v = []; ++w < t2; ) y && y[w].run();
      w = -1, t2 = v.length;
    }
    y = null, b = false, function(e9) {
      if (g === clearTimeout) return clearTimeout(e9);
      if ((g === f || !g) && clearTimeout) return g = clearTimeout, clearTimeout(e9);
      try {
        return g(e9);
      } catch (t3) {
        try {
          return g.call(null, e9);
        } catch (t4) {
          return g.call(this, e9);
        }
      }
    }(e8);
  }
}
function _(e8, t2) {
  this.fun = e8, this.array = t2;
}
_.prototype.run = function() {
  this.fun.apply(null, this.array);
};
function S() {
}
var k = S;
var x = S;
var A = S;
var M = S;
var L = S;
var T = S;
var O = S;
var R = c.performance || {};
var P = R.now || R.mozNow || R.msNow || R.oNow || R.webkitNow || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
var I = /* @__PURE__ */ new Date();
var N;
var D;
var B = { nextTick: function(e8) {
  var t2 = new Array(arguments.length - 1);
  if (arguments.length > 1) for (var n2 = 1; n2 < arguments.length; n2++) t2[n2 - 1] = arguments[n2];
  v.push(new _(e8, t2)), 1 !== v.length || b || m(C);
}, title: "browser", browser: true, env: {}, argv: [], version: "", versions: {}, on: k, addListener: x, once: A, off: M, removeListener: L, removeAllListeners: T, emit: O, binding: function(e8) {
  throw new Error("process.binding is not supported");
}, cwd: function() {
  return "/";
}, chdir: function(e8) {
  throw new Error("process.chdir is not supported");
}, umask: function() {
  return 0;
}, hrtime: function(e8) {
  var t2 = 1e-3 * P.call(R), n2 = Math.floor(t2), r2 = Math.floor(t2 % 1 * 1e9);
  return e8 && (n2 -= e8[0], (r2 -= e8[1]) < 0 && (n2--, r2 += 1e9)), [n2, r2];
}, platform: "browser", release: {}, config: {}, uptime: function() {
  return (/* @__PURE__ */ new Date() - I) / 1e3;
} };
var $ = { exports: {} };
function j() {
  if (D) return N;
  D = 1;
  var e8 = 1e3, t2 = 60 * e8, n2 = 60 * t2, r2 = 24 * n2, i2 = 7 * r2, o2 = 365.25 * r2;
  function s2(e9, t3, n3, r3) {
    var i3 = t3 >= 1.5 * n3;
    return Math.round(e9 / n3) + " " + r3 + (i3 ? "s" : "");
  }
  return N = function(a2, c2) {
    c2 = c2 || {};
    var l2 = typeof a2;
    if ("string" === l2 && a2.length > 0) return function(s3) {
      if ((s3 = String(s3)).length > 100) return;
      var a3 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(s3);
      if (!a3) return;
      var c3 = parseFloat(a3[1]);
      switch ((a3[2] || "ms").toLowerCase()) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return c3 * o2;
        case "weeks":
        case "week":
        case "w":
          return c3 * i2;
        case "days":
        case "day":
        case "d":
          return c3 * r2;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return c3 * n2;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return c3 * t2;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return c3 * e8;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return c3;
        default:
          return;
      }
    }(a2);
    if ("number" === l2 && isFinite(a2)) return c2.long ? function(i3) {
      var o3 = Math.abs(i3);
      if (o3 >= r2) return s2(i3, o3, r2, "day");
      if (o3 >= n2) return s2(i3, o3, n2, "hour");
      if (o3 >= t2) return s2(i3, o3, t2, "minute");
      if (o3 >= e8) return s2(i3, o3, e8, "second");
      return i3 + " ms";
    }(a2) : function(i3) {
      var o3 = Math.abs(i3);
      if (o3 >= r2) return Math.round(i3 / r2) + "d";
      if (o3 >= n2) return Math.round(i3 / n2) + "h";
      if (o3 >= t2) return Math.round(i3 / t2) + "m";
      if (o3 >= e8) return Math.round(i3 / e8) + "s";
      return i3 + "ms";
    }(a2);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(a2));
  }, N;
}
var K = function(e8) {
  function t2(e9) {
    let r3, i2, o2, s2 = null;
    function a2(...e10) {
      if (!a2.enabled) return;
      const n3 = a2, i3 = Number(/* @__PURE__ */ new Date()), o3 = i3 - (r3 || i3);
      n3.diff = o3, n3.prev = r3, n3.curr = i3, r3 = i3, e10[0] = t2.coerce(e10[0]), "string" != typeof e10[0] && e10.unshift("%O");
      let s3 = 0;
      e10[0] = e10[0].replace(/%([a-zA-Z%])/g, (r4, i4) => {
        if ("%%" === r4) return "%";
        s3++;
        const o4 = t2.formatters[i4];
        if ("function" == typeof o4) {
          const t3 = e10[s3];
          r4 = o4.call(n3, t3), e10.splice(s3, 1), s3--;
        }
        return r4;
      }), t2.formatArgs.call(n3, e10);
      (n3.log || t2.log).apply(n3, e10);
    }
    return a2.namespace = e9, a2.useColors = t2.useColors(), a2.color = t2.selectColor(e9), a2.extend = n2, a2.destroy = t2.destroy, Object.defineProperty(a2, "enabled", { enumerable: true, configurable: false, get: () => null !== s2 ? s2 : (i2 !== t2.namespaces && (i2 = t2.namespaces, o2 = t2.enabled(e9)), o2), set: (e10) => {
      s2 = e10;
    } }), "function" == typeof t2.init && t2.init(a2), a2;
  }
  function n2(e9, n3) {
    const r3 = t2(this.namespace + (void 0 === n3 ? ":" : n3) + e9);
    return r3.log = this.log, r3;
  }
  function r2(e9) {
    return e9.toString().substring(2, e9.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  return t2.debug = t2, t2.default = t2, t2.coerce = function(e9) {
    if (e9 instanceof Error) return e9.stack || e9.message;
    return e9;
  }, t2.disable = function() {
    const e9 = [...t2.names.map(r2), ...t2.skips.map(r2).map((e10) => "-" + e10)].join(",");
    return t2.enable(""), e9;
  }, t2.enable = function(e9) {
    let n3;
    t2.save(e9), t2.namespaces = e9, t2.names = [], t2.skips = [];
    const r3 = ("string" == typeof e9 ? e9 : "").split(/[\s,]+/), i2 = r3.length;
    for (n3 = 0; n3 < i2; n3++) r3[n3] && ("-" === (e9 = r3[n3].replace(/\*/g, ".*?"))[0] ? t2.skips.push(new RegExp("^" + e9.slice(1) + "$")) : t2.names.push(new RegExp("^" + e9 + "$")));
  }, t2.enabled = function(e9) {
    if ("*" === e9[e9.length - 1]) return true;
    let n3, r3;
    for (n3 = 0, r3 = t2.skips.length; n3 < r3; n3++) if (t2.skips[n3].test(e9)) return false;
    for (n3 = 0, r3 = t2.names.length; n3 < r3; n3++) if (t2.names[n3].test(e9)) return true;
    return false;
  }, t2.humanize = j(), t2.destroy = function() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }, Object.keys(e8).forEach((n3) => {
    t2[n3] = e8[n3];
  }), t2.names = [], t2.skips = [], t2.formatters = {}, t2.selectColor = function(e9) {
    let n3 = 0;
    for (let t3 = 0; t3 < e9.length; t3++) n3 = (n3 << 5) - n3 + e9.charCodeAt(t3), n3 |= 0;
    return t2.colors[Math.abs(n3) % t2.colors.length];
  }, t2.enable(t2.load()), t2;
};
!function(e8, t2) {
  t2.formatArgs = function(t3) {
    if (t3[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t3[0] + (this.useColors ? "%c " : " ") + "+" + e8.exports.humanize(this.diff), !this.useColors) return;
    const n3 = "color: " + this.color;
    t3.splice(1, 0, n3, "color: inherit");
    let r2 = 0, i2 = 0;
    t3[0].replace(/%[a-zA-Z%]/g, (e9) => {
      "%%" !== e9 && (r2++, "%c" === e9 && (i2 = r2));
    }), t3.splice(i2, 0, n3);
  }, t2.save = function(e9) {
    try {
      e9 ? t2.storage.setItem("debug", e9) : t2.storage.removeItem("debug");
    } catch (e10) {
    }
  }, t2.load = function() {
    let e9;
    try {
      e9 = t2.storage.getItem("debug");
    } catch (e10) {
    }
    !e9 && void 0 !== B && "env" in B && (e9 = B.env.DEBUG);
    return e9;
  }, t2.useColors = function() {
    if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return true;
    if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }, t2.storage = function() {
    try {
      return localStorage;
    } catch (e9) {
    }
  }(), t2.destroy = /* @__PURE__ */ (() => {
    let e9 = false;
    return () => {
      e9 || (e9 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), t2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t2.log = console.debug || console.log || (() => {
  }), e8.exports = K(t2);
  const { formatters: n2 } = e8.exports;
  n2.j = function(e9) {
    try {
      return JSON.stringify(e9);
    } catch (e10) {
      return "[UnexpectedJSONParseError]: " + e10.message;
    }
  };
}($, $.exports);
var F;
var U = $.exports;
var H = { exports: {} };
F = H, function(e8) {
  var t2 = Object.hasOwnProperty, n2 = Array.isArray ? Array.isArray : function(e9) {
    return "[object Array]" === Object.prototype.toString.call(e9);
  }, r2 = "object" == typeof B && "function" == typeof B.nextTick, i2 = "function" == typeof Symbol, o2 = "object" == typeof Reflect, s2 = "function" == typeof setImmediate ? setImmediate : setTimeout, a2 = i2 ? o2 && "function" == typeof Reflect.ownKeys ? Reflect.ownKeys : function(e9) {
    var t3 = Object.getOwnPropertyNames(e9);
    return t3.push.apply(t3, Object.getOwnPropertySymbols(e9)), t3;
  } : Object.keys;
  function c2() {
    this._events = {}, this._conf && l2.call(this, this._conf);
  }
  function l2(t3) {
    t3 && (this._conf = t3, t3.delimiter && (this.delimiter = t3.delimiter), t3.maxListeners !== e8 && (this._maxListeners = t3.maxListeners), t3.wildcard && (this.wildcard = t3.wildcard), t3.newListener && (this._newListener = t3.newListener), t3.removeListener && (this._removeListener = t3.removeListener), t3.verboseMemoryLeak && (this.verboseMemoryLeak = t3.verboseMemoryLeak), t3.ignoreErrors && (this.ignoreErrors = t3.ignoreErrors), this.wildcard && (this.listenerTree = {}));
  }
  function d2(e9, t3) {
    var n3 = "(node) warning: possible EventEmitter memory leak detected. " + e9 + " listeners added. Use emitter.setMaxListeners() to increase limit.";
    if (this.verboseMemoryLeak && (n3 += " Event name: " + t3 + "."), void 0 !== B && B.emitWarning) {
      var r3 = new Error(n3);
      r3.name = "MaxListenersExceededWarning", r3.emitter = this, r3.count = e9, B.emitWarning(r3);
    } else console.error(n3), console.trace && console.trace();
  }
  var u2 = function(e9, t3, n3) {
    var r3 = arguments.length;
    switch (r3) {
      case 0:
        return [];
      case 1:
        return [e9];
      case 2:
        return [e9, t3];
      case 3:
        return [e9, t3, n3];
      default:
        for (var i3 = new Array(r3); r3--; ) i3[r3] = arguments[r3];
        return i3;
    }
  };
  function h2(t3, n3) {
    for (var r3 = {}, i3 = t3.length, o3 = n3 ? n3.length : 0, s3 = 0; s3 < i3; s3++) r3[t3[s3]] = s3 < o3 ? n3[s3] : e8;
    return r3;
  }
  function f2(e9, t3, n3) {
    var r3, i3;
    if (this._emitter = e9, this._target = t3, this._listeners = {}, this._listenersCount = 0, (n3.on || n3.off) && (r3 = n3.on, i3 = n3.off), t3.addEventListener ? (r3 = t3.addEventListener, i3 = t3.removeEventListener) : t3.addListener ? (r3 = t3.addListener, i3 = t3.removeListener) : t3.on && (r3 = t3.on, i3 = t3.off), !r3 && !i3) throw Error("target does not implement any known event API");
    if ("function" != typeof r3) throw TypeError("on method must be a function");
    if ("function" != typeof i3) throw TypeError("off method must be a function");
    this._on = r3, this._off = i3;
    var o3 = e9._observers;
    o3 ? o3.push(this) : e9._observers = [this];
  }
  function p2(n3, r3, i3, o3) {
    var s3 = Object.assign({}, r3);
    if (!n3) return s3;
    if ("object" != typeof n3) throw TypeError("options must be an object");
    var a3, c3, l3, d3 = Object.keys(n3), u3 = d3.length;
    function h3(e9) {
      throw Error('Invalid "' + a3 + '" option value' + (e9 ? ". Reason: " + e9 : ""));
    }
    for (var f3 = 0; f3 < u3; f3++) {
      if (a3 = d3[f3], !o3 && !t2.call(r3, a3)) throw Error('Unknown "' + a3 + '" option');
      (c3 = n3[a3]) !== e8 && (l3 = i3[a3], s3[a3] = l3 ? l3(c3, h3) : c3);
    }
    return s3;
  }
  function g2(e9, t3) {
    return "function" == typeof e9 && e9.hasOwnProperty("prototype") || t3("value must be a constructor"), e9;
  }
  function m2(e9) {
    var t3 = "value must be type of " + e9.join("|"), n3 = e9.length, r3 = e9[0], i3 = e9[1];
    return 1 === n3 ? function(e10, n4) {
      if (typeof e10 === r3) return e10;
      n4(t3);
    } : 2 === n3 ? function(e10, n4) {
      var o3 = typeof e10;
      if (o3 === r3 || o3 === i3) return e10;
      n4(t3);
    } : function(r4, i4) {
      for (var o3 = typeof r4, s3 = n3; s3-- > 0; ) if (o3 === e9[s3]) return r4;
      i4(t3);
    };
  }
  Object.assign(f2.prototype, { subscribe: function(e9, t3, n3) {
    var r3 = this, i3 = this._target, o3 = this._emitter, s3 = this._listeners, a3 = function() {
      var r4 = u2.apply(null, arguments), s4 = { data: r4, name: t3, original: e9 };
      n3 ? false !== n3.call(i3, s4) && o3.emit.apply(o3, [s4.name].concat(r4)) : o3.emit.apply(o3, [t3].concat(r4));
    };
    if (s3[e9]) throw Error("Event '" + e9 + "' is already listening");
    this._listenersCount++, o3._newListener && o3._removeListener && !r3._onNewListener ? (this._onNewListener = function(n4) {
      n4 === t3 && null === s3[e9] && (s3[e9] = a3, r3._on.call(i3, e9, a3));
    }, o3.on("newListener", this._onNewListener), this._onRemoveListener = function(n4) {
      n4 === t3 && !o3.hasListeners(n4) && s3[e9] && (s3[e9] = null, r3._off.call(i3, e9, a3));
    }, s3[e9] = null, o3.on("removeListener", this._onRemoveListener)) : (s3[e9] = a3, r3._on.call(i3, e9, a3));
  }, unsubscribe: function(e9) {
    var t3, n3, r3, i3 = this, o3 = this._listeners, s3 = this._emitter, c3 = this._off, l3 = this._target;
    if (e9 && "string" != typeof e9) throw TypeError("event must be a string");
    function d3() {
      i3._onNewListener && (s3.off("newListener", i3._onNewListener), s3.off("removeListener", i3._onRemoveListener), i3._onNewListener = null, i3._onRemoveListener = null);
      var e10 = w2.call(s3, i3);
      s3._observers.splice(e10, 1);
    }
    if (e9) {
      if (!(t3 = o3[e9])) return;
      c3.call(l3, e9, t3), delete o3[e9], --this._listenersCount || d3();
    } else {
      for (r3 = (n3 = a2(o3)).length; r3-- > 0; ) e9 = n3[r3], c3.call(l3, e9, o3[e9]);
      this._listeners = {}, this._listenersCount = 0, d3();
    }
  } });
  var y2 = m2(["function"]), v2 = m2(["object", "function"]);
  function b2(e9, t3, n3) {
    var r3, i3, o3, s3 = 0, a3 = new e9(function(c3, l3, d3) {
      function u3() {
        i3 && (i3 = null), s3 && (clearTimeout(s3), s3 = 0);
      }
      n3 = p2(n3, { timeout: 0, overload: false }, { timeout: function(e10, t4) {
        return ("number" != typeof (e10 *= 1) || e10 < 0 || !Number.isFinite(e10)) && t4("timeout must be a positive number"), e10;
      } }), r3 = !n3.overload && "function" == typeof e9.prototype.cancel && "function" == typeof d3;
      var h3 = function(e10) {
        u3(), c3(e10);
      }, f3 = function(e10) {
        u3(), l3(e10);
      };
      r3 ? t3(h3, f3, d3) : (i3 = [function(e10) {
        f3(e10 || Error("canceled"));
      }], t3(h3, f3, function(e10) {
        if (o3) throw Error("Unable to subscribe on cancel event asynchronously");
        if ("function" != typeof e10) throw TypeError("onCancel callback must be a function");
        i3.push(e10);
      }), o3 = true), n3.timeout > 0 && (s3 = setTimeout(function() {
        var e10 = Error("timeout");
        e10.code = "ETIMEDOUT", s3 = 0, a3.cancel(e10), l3(e10);
      }, n3.timeout));
    });
    return r3 || (a3.cancel = function(e10) {
      if (i3) {
        for (var t4 = i3.length, n4 = 1; n4 < t4; n4++) i3[n4](e10);
        i3[0](e10), i3 = null;
      }
    }), a3;
  }
  function w2(e9) {
    var t3 = this._observers;
    if (!t3) return -1;
    for (var n3 = t3.length, r3 = 0; r3 < n3; r3++) if (t3[r3]._target === e9) return r3;
    return -1;
  }
  function E2(e9, t3, n3, r3, i3) {
    if (!n3) return null;
    if (0 === r3) {
      var o3 = typeof t3;
      if ("string" === o3) {
        var s3, c3, l3 = 0, d3 = 0, u3 = this.delimiter, h3 = u3.length;
        if (-1 !== (c3 = t3.indexOf(u3))) {
          s3 = new Array(5);
          do {
            s3[l3++] = t3.slice(d3, c3), d3 = c3 + h3;
          } while (-1 !== (c3 = t3.indexOf(u3, d3)));
          s3[l3++] = t3.slice(d3), t3 = s3, i3 = l3;
        } else t3 = [t3], i3 = 1;
      } else "object" === o3 ? i3 = t3.length : (t3 = [t3], i3 = 1);
    }
    var f3, p3, g3, m3, y3, v3, b3, w3 = null, C3 = t3[r3], _3 = t3[r3 + 1];
    if (r3 === i3) n3._listeners && ("function" == typeof n3._listeners ? (e9 && e9.push(n3._listeners), w3 = [n3]) : (e9 && e9.push.apply(e9, n3._listeners), w3 = [n3]));
    else {
      if ("*" === C3) {
        for (c3 = (v3 = a2(n3)).length; c3-- > 0; ) "_listeners" !== (f3 = v3[c3]) && (b3 = E2(e9, t3, n3[f3], r3 + 1, i3)) && (w3 ? w3.push.apply(w3, b3) : w3 = b3);
        return w3;
      }
      if ("**" === C3) {
        for ((y3 = r3 + 1 === i3 || r3 + 2 === i3 && "*" === _3) && n3._listeners && (w3 = E2(e9, t3, n3, i3, i3)), c3 = (v3 = a2(n3)).length; c3-- > 0; ) "_listeners" !== (f3 = v3[c3]) && ("*" === f3 || "**" === f3 ? (n3[f3]._listeners && !y3 && (b3 = E2(e9, t3, n3[f3], i3, i3)) && (w3 ? w3.push.apply(w3, b3) : w3 = b3), b3 = E2(e9, t3, n3[f3], r3, i3)) : b3 = E2(e9, t3, n3[f3], f3 === _3 ? r3 + 2 : r3, i3), b3 && (w3 ? w3.push.apply(w3, b3) : w3 = b3));
        return w3;
      }
      n3[C3] && (w3 = E2(e9, t3, n3[C3], r3 + 1, i3));
    }
    if ((p3 = n3["*"]) && E2(e9, t3, p3, r3 + 1, i3), g3 = n3["**"]) if (r3 < i3) for (g3._listeners && E2(e9, t3, g3, i3, i3), c3 = (v3 = a2(g3)).length; c3-- > 0; ) "_listeners" !== (f3 = v3[c3]) && (f3 === _3 ? E2(e9, t3, g3[f3], r3 + 2, i3) : f3 === C3 ? E2(e9, t3, g3[f3], r3 + 1, i3) : ((m3 = {})[f3] = g3[f3], E2(e9, t3, { "**": m3 }, r3 + 1, i3)));
    else g3._listeners ? E2(e9, t3, g3, i3, i3) : g3["*"] && g3["*"]._listeners && E2(e9, t3, g3["*"], i3, i3);
    return w3;
  }
  function C2(e9, t3, n3) {
    var r3, i3, o3 = 0, s3 = 0, a3 = this.delimiter, c3 = a3.length;
    if ("string" == typeof e9) if (-1 !== (r3 = e9.indexOf(a3))) {
      i3 = new Array(5);
      do {
        i3[o3++] = e9.slice(s3, r3), s3 = r3 + c3;
      } while (-1 !== (r3 = e9.indexOf(a3, s3)));
      i3[o3++] = e9.slice(s3);
    } else i3 = [e9], o3 = 1;
    else i3 = e9, o3 = e9.length;
    if (o3 > 1) {
      for (r3 = 0; r3 + 1 < o3; r3++) if ("**" === i3[r3] && "**" === i3[r3 + 1]) return;
    }
    var l3, u3 = this.listenerTree;
    for (r3 = 0; r3 < o3; r3++) if (u3 = u3[l3 = i3[r3]] || (u3[l3] = {}), r3 === o3 - 1) return u3._listeners ? ("function" == typeof u3._listeners && (u3._listeners = [u3._listeners]), n3 ? u3._listeners.unshift(t3) : u3._listeners.push(t3), !u3._listeners.warned && this._maxListeners > 0 && u3._listeners.length > this._maxListeners && (u3._listeners.warned = true, d2.call(this, u3._listeners.length, l3))) : u3._listeners = t3, true;
    return true;
  }
  function _2(e9, t3, n3, r3) {
    for (var i3, o3, s3, c3, l3 = a2(e9), d3 = l3.length, u3 = e9._listeners; d3-- > 0; ) i3 = e9[o3 = l3[d3]], s3 = "_listeners" === o3 ? n3 : n3 ? n3.concat(o3) : [o3], c3 = r3 || "symbol" == typeof o3, u3 && t3.push(c3 ? s3 : s3.join(this.delimiter)), "object" == typeof i3 && _2.call(this, i3, t3, s3, c3);
    return t3;
  }
  function S2(e9) {
    for (var t3, n3, r3, i3 = a2(e9), o3 = i3.length; o3-- > 0; ) (t3 = e9[n3 = i3[o3]]) && (r3 = true, "_listeners" === n3 || S2(t3) || delete e9[n3]);
    return r3;
  }
  function k2(e9, t3, n3) {
    this.emitter = e9, this.event = t3, this.listener = n3;
  }
  function x2(t3, n3, i3) {
    if (true === i3) a3 = true;
    else if (false === i3) o3 = true;
    else {
      if (!i3 || "object" != typeof i3) throw TypeError("options should be an object or true");
      var o3 = i3.async, a3 = i3.promisify, c3 = i3.nextTick, l3 = i3.objectify;
    }
    if (o3 || c3 || a3) {
      var d3 = n3, u3 = n3._origin || n3;
      if (c3 && !r2) throw Error("process.nextTick is not supported");
      a3 === e8 && (a3 = "AsyncFunction" === n3.constructor.name), n3 = function() {
        var e9 = arguments, t4 = this, n4 = this.event;
        return a3 ? c3 ? Promise.resolve() : new Promise(function(e10) {
          s2(e10);
        }).then(function() {
          return t4.event = n4, d3.apply(t4, e9);
        }) : (c3 ? B.nextTick : s2)(function() {
          t4.event = n4, d3.apply(t4, e9);
        });
      }, n3._async = true, n3._origin = u3;
    }
    return [n3, l3 ? new k2(this, t3, n3) : this];
  }
  function A2(e9) {
    this._events = {}, this._newListener = false, this._removeListener = false, this.verboseMemoryLeak = false, l2.call(this, e9);
  }
  k2.prototype.off = function() {
    return this.emitter.off(this.event, this.listener), this;
  }, A2.EventEmitter2 = A2, A2.prototype.listenTo = function(t3, r3, i3) {
    if ("object" != typeof t3) throw TypeError("target musts be an object");
    var o3 = this;
    function s3(e9) {
      if ("object" != typeof e9) throw TypeError("events must be an object");
      var n3, r4 = i3.reducers, s4 = w2.call(o3, t3);
      n3 = -1 === s4 ? new f2(o3, t3, i3) : o3._observers[s4];
      for (var c3, l3 = a2(e9), d3 = l3.length, u3 = "function" == typeof r4, h3 = 0; h3 < d3; h3++) c3 = l3[h3], n3.subscribe(c3, e9[c3] || c3, u3 ? r4 : r4 && r4[c3]);
    }
    return i3 = p2(i3, { on: e8, off: e8, reducers: e8 }, { on: y2, off: y2, reducers: v2 }), n2(r3) ? s3(h2(r3)) : s3("string" == typeof r3 ? h2(r3.split(/\s+/)) : r3), this;
  }, A2.prototype.stopListeningTo = function(e9, t3) {
    var n3 = this._observers;
    if (!n3) return false;
    var r3, i3 = n3.length, o3 = false;
    if (e9 && "object" != typeof e9) throw TypeError("target should be an object");
    for (; i3-- > 0; ) r3 = n3[i3], e9 && r3._target !== e9 || (r3.unsubscribe(t3), o3 = true);
    return o3;
  }, A2.prototype.delimiter = ".", A2.prototype.setMaxListeners = function(t3) {
    t3 !== e8 && (this._maxListeners = t3, this._conf || (this._conf = {}), this._conf.maxListeners = t3);
  }, A2.prototype.getMaxListeners = function() {
    return this._maxListeners;
  }, A2.prototype.event = "", A2.prototype.once = function(e9, t3, n3) {
    return this._once(e9, t3, false, n3);
  }, A2.prototype.prependOnceListener = function(e9, t3, n3) {
    return this._once(e9, t3, true, n3);
  }, A2.prototype._once = function(e9, t3, n3, r3) {
    return this._many(e9, 1, t3, n3, r3);
  }, A2.prototype.many = function(e9, t3, n3, r3) {
    return this._many(e9, t3, n3, false, r3);
  }, A2.prototype.prependMany = function(e9, t3, n3, r3) {
    return this._many(e9, t3, n3, true, r3);
  }, A2.prototype._many = function(e9, t3, n3, r3, i3) {
    var o3 = this;
    if ("function" != typeof n3) throw new Error("many only accepts instances of Function");
    function s3() {
      return 0 == --t3 && o3.off(e9, s3), n3.apply(this, arguments);
    }
    return s3._origin = n3, this._on(e9, s3, r3, i3);
  }, A2.prototype.emit = function() {
    if (!this._events && !this._all) return false;
    this._events || c2.call(this);
    var e9, t3, n3, r3, o3, s3, a3 = arguments[0], l3 = this.wildcard;
    if ("newListener" === a3 && !this._newListener && !this._events.newListener) return false;
    if (l3 && (e9 = a3, "newListener" !== a3 && "removeListener" !== a3 && "object" == typeof a3)) {
      if (n3 = a3.length, i2) {
        for (r3 = 0; r3 < n3; r3++) if ("symbol" == typeof a3[r3]) {
          s3 = true;
          break;
        }
      }
      s3 || (a3 = a3.join(this.delimiter));
    }
    var d3, u3 = arguments.length;
    if (this._all && this._all.length) for (r3 = 0, n3 = (d3 = this._all.slice()).length; r3 < n3; r3++) switch (this.event = a3, u3) {
      case 1:
        d3[r3].call(this, a3);
        break;
      case 2:
        d3[r3].call(this, a3, arguments[1]);
        break;
      case 3:
        d3[r3].call(this, a3, arguments[1], arguments[2]);
        break;
      default:
        d3[r3].apply(this, arguments);
    }
    if (l3) d3 = [], E2.call(this, d3, e9, this.listenerTree, 0, n3);
    else {
      if ("function" == typeof (d3 = this._events[a3])) {
        switch (this.event = a3, u3) {
          case 1:
            d3.call(this);
            break;
          case 2:
            d3.call(this, arguments[1]);
            break;
          case 3:
            d3.call(this, arguments[1], arguments[2]);
            break;
          default:
            for (t3 = new Array(u3 - 1), o3 = 1; o3 < u3; o3++) t3[o3 - 1] = arguments[o3];
            d3.apply(this, t3);
        }
        return true;
      }
      d3 && (d3 = d3.slice());
    }
    if (d3 && d3.length) {
      if (u3 > 3) for (t3 = new Array(u3 - 1), o3 = 1; o3 < u3; o3++) t3[o3 - 1] = arguments[o3];
      for (r3 = 0, n3 = d3.length; r3 < n3; r3++) switch (this.event = a3, u3) {
        case 1:
          d3[r3].call(this);
          break;
        case 2:
          d3[r3].call(this, arguments[1]);
          break;
        case 3:
          d3[r3].call(this, arguments[1], arguments[2]);
          break;
        default:
          d3[r3].apply(this, t3);
      }
      return true;
    }
    if (!this.ignoreErrors && !this._all && "error" === a3) throw arguments[1] instanceof Error ? arguments[1] : new Error("Uncaught, unspecified 'error' event.");
    return !!this._all;
  }, A2.prototype.emitAsync = function() {
    if (!this._events && !this._all) return false;
    this._events || c2.call(this);
    var e9, t3, n3, r3, o3, s3, a3 = arguments[0], l3 = this.wildcard;
    if ("newListener" === a3 && !this._newListener && !this._events.newListener) return Promise.resolve([false]);
    if (l3 && (e9 = a3, "newListener" !== a3 && "removeListener" !== a3 && "object" == typeof a3)) {
      if (r3 = a3.length, i2) {
        for (o3 = 0; o3 < r3; o3++) if ("symbol" == typeof a3[o3]) {
          t3 = true;
          break;
        }
      }
      t3 || (a3 = a3.join(this.delimiter));
    }
    var d3, u3 = [], h3 = arguments.length;
    if (this._all) for (o3 = 0, r3 = this._all.length; o3 < r3; o3++) switch (this.event = a3, h3) {
      case 1:
        u3.push(this._all[o3].call(this, a3));
        break;
      case 2:
        u3.push(this._all[o3].call(this, a3, arguments[1]));
        break;
      case 3:
        u3.push(this._all[o3].call(this, a3, arguments[1], arguments[2]));
        break;
      default:
        u3.push(this._all[o3].apply(this, arguments));
    }
    if (l3 ? (d3 = [], E2.call(this, d3, e9, this.listenerTree, 0)) : d3 = this._events[a3], "function" == typeof d3) switch (this.event = a3, h3) {
      case 1:
        u3.push(d3.call(this));
        break;
      case 2:
        u3.push(d3.call(this, arguments[1]));
        break;
      case 3:
        u3.push(d3.call(this, arguments[1], arguments[2]));
        break;
      default:
        for (n3 = new Array(h3 - 1), s3 = 1; s3 < h3; s3++) n3[s3 - 1] = arguments[s3];
        u3.push(d3.apply(this, n3));
    }
    else if (d3 && d3.length) {
      if (d3 = d3.slice(), h3 > 3) for (n3 = new Array(h3 - 1), s3 = 1; s3 < h3; s3++) n3[s3 - 1] = arguments[s3];
      for (o3 = 0, r3 = d3.length; o3 < r3; o3++) switch (this.event = a3, h3) {
        case 1:
          u3.push(d3[o3].call(this));
          break;
        case 2:
          u3.push(d3[o3].call(this, arguments[1]));
          break;
        case 3:
          u3.push(d3[o3].call(this, arguments[1], arguments[2]));
          break;
        default:
          u3.push(d3[o3].apply(this, n3));
      }
    } else if (!this.ignoreErrors && !this._all && "error" === a3) return arguments[1] instanceof Error ? Promise.reject(arguments[1]) : Promise.reject("Uncaught, unspecified 'error' event.");
    return Promise.all(u3);
  }, A2.prototype.on = function(e9, t3, n3) {
    return this._on(e9, t3, false, n3);
  }, A2.prototype.prependListener = function(e9, t3, n3) {
    return this._on(e9, t3, true, n3);
  }, A2.prototype.onAny = function(e9) {
    return this._onAny(e9, false);
  }, A2.prototype.prependAny = function(e9) {
    return this._onAny(e9, true);
  }, A2.prototype.addListener = A2.prototype.on, A2.prototype._onAny = function(e9, t3) {
    if ("function" != typeof e9) throw new Error("onAny only accepts instances of Function");
    return this._all || (this._all = []), t3 ? this._all.unshift(e9) : this._all.push(e9), this;
  }, A2.prototype._on = function(t3, n3, r3, i3) {
    if ("function" == typeof t3) return this._onAny(t3, n3), this;
    if ("function" != typeof n3) throw new Error("on only accepts instances of Function");
    this._events || c2.call(this);
    var o3, s3 = this;
    return i3 !== e8 && (n3 = (o3 = x2.call(this, t3, n3, i3))[0], s3 = o3[1]), this._newListener && this.emit("newListener", t3, n3), this.wildcard ? (C2.call(this, t3, n3, r3), s3) : (this._events[t3] ? ("function" == typeof this._events[t3] && (this._events[t3] = [this._events[t3]]), r3 ? this._events[t3].unshift(n3) : this._events[t3].push(n3), !this._events[t3].warned && this._maxListeners > 0 && this._events[t3].length > this._maxListeners && (this._events[t3].warned = true, d2.call(this, this._events[t3].length, t3))) : this._events[t3] = n3, s3);
  }, A2.prototype.off = function(e9, t3) {
    if ("function" != typeof t3) throw new Error("removeListener only takes instances of Function");
    var r3, i3 = [];
    if (this.wildcard) {
      var o3 = "string" == typeof e9 ? e9.split(this.delimiter) : e9.slice();
      if (!(i3 = E2.call(this, null, o3, this.listenerTree, 0))) return this;
    } else {
      if (!this._events[e9]) return this;
      r3 = this._events[e9], i3.push({ _listeners: r3 });
    }
    for (var s3 = 0; s3 < i3.length; s3++) {
      var a3 = i3[s3];
      if (r3 = a3._listeners, n2(r3)) {
        for (var c3 = -1, l3 = 0, d3 = r3.length; l3 < d3; l3++) if (r3[l3] === t3 || r3[l3].listener && r3[l3].listener === t3 || r3[l3]._origin && r3[l3]._origin === t3) {
          c3 = l3;
          break;
        }
        if (c3 < 0) continue;
        return this.wildcard ? a3._listeners.splice(c3, 1) : this._events[e9].splice(c3, 1), 0 === r3.length && (this.wildcard ? delete a3._listeners : delete this._events[e9]), this._removeListener && this.emit("removeListener", e9, t3), this;
      }
      (r3 === t3 || r3.listener && r3.listener === t3 || r3._origin && r3._origin === t3) && (this.wildcard ? delete a3._listeners : delete this._events[e9], this._removeListener && this.emit("removeListener", e9, t3));
    }
    return this.listenerTree && S2(this.listenerTree), this;
  }, A2.prototype.offAny = function(e9) {
    var t3, n3 = 0, r3 = 0;
    if (e9 && this._all && this._all.length > 0) {
      for (n3 = 0, r3 = (t3 = this._all).length; n3 < r3; n3++) if (e9 === t3[n3]) return t3.splice(n3, 1), this._removeListener && this.emit("removeListenerAny", e9), this;
    } else {
      if (t3 = this._all, this._removeListener) for (n3 = 0, r3 = t3.length; n3 < r3; n3++) this.emit("removeListenerAny", t3[n3]);
      this._all = [];
    }
    return this;
  }, A2.prototype.removeListener = A2.prototype.off, A2.prototype.removeAllListeners = function(t3) {
    if (t3 === e8) return !this._events || c2.call(this), this;
    if (this.wildcard) {
      var n3, r3 = E2.call(this, null, t3, this.listenerTree, 0);
      if (!r3) return this;
      for (n3 = 0; n3 < r3.length; n3++) r3[n3]._listeners = null;
      this.listenerTree && S2(this.listenerTree);
    } else this._events && (this._events[t3] = null);
    return this;
  }, A2.prototype.listeners = function(t3) {
    var n3, r3, i3, o3, s3, c3 = this._events;
    if (t3 === e8) {
      if (this.wildcard) throw Error("event name required for wildcard emitter");
      if (!c3) return [];
      for (o3 = (n3 = a2(c3)).length, i3 = []; o3-- > 0; ) "function" == typeof (r3 = c3[n3[o3]]) ? i3.push(r3) : i3.push.apply(i3, r3);
      return i3;
    }
    if (this.wildcard) {
      if (!(s3 = this.listenerTree)) return [];
      var l3 = [], d3 = "string" == typeof t3 ? t3.split(this.delimiter) : t3.slice();
      return E2.call(this, l3, d3, s3, 0), l3;
    }
    return c3 && (r3 = c3[t3]) ? "function" == typeof r3 ? [r3] : r3 : [];
  }, A2.prototype.eventNames = function(e9) {
    var t3 = this._events;
    return this.wildcard ? _2.call(this, this.listenerTree, [], null, e9) : t3 ? a2(t3) : [];
  }, A2.prototype.listenerCount = function(e9) {
    return this.listeners(e9).length;
  }, A2.prototype.hasListeners = function(t3) {
    if (this.wildcard) {
      var n3 = [], r3 = "string" == typeof t3 ? t3.split(this.delimiter) : t3.slice();
      return E2.call(this, n3, r3, this.listenerTree, 0), n3.length > 0;
    }
    var i3 = this._events, o3 = this._all;
    return !!(o3 && o3.length || i3 && (t3 === e8 ? a2(i3).length : i3[t3]));
  }, A2.prototype.listenersAny = function() {
    return this._all ? this._all : [];
  }, A2.prototype.waitFor = function(t3, n3) {
    var r3 = this, i3 = typeof n3;
    return "number" === i3 ? n3 = { timeout: n3 } : "function" === i3 && (n3 = { filter: n3 }), b2((n3 = p2(n3, { timeout: 0, filter: e8, handleError: false, Promise, overload: false }, { filter: y2, Promise: g2 })).Promise, function(e9, i4, o3) {
      function s3() {
        var o4 = n3.filter;
        if (!o4 || o4.apply(r3, arguments)) if (r3.off(t3, s3), n3.handleError) {
          var a3 = arguments[0];
          a3 ? i4(a3) : e9(u2.apply(null, arguments).slice(1));
        } else e9(u2.apply(null, arguments));
      }
      o3(function() {
        r3.off(t3, s3);
      }), r3._on(t3, s3, false);
    }, { timeout: n3.timeout, overload: n3.overload });
  };
  var M2 = A2.prototype;
  Object.defineProperties(A2, { defaultMaxListeners: { get: function() {
    return M2._maxListeners;
  }, set: function(e9) {
    if ("number" != typeof e9 || e9 < 0 || Number.isNaN(e9)) throw TypeError("n must be a non-negative number");
    M2._maxListeners = e9;
  }, enumerable: true }, once: { value: function(e9, t3, n3) {
    return b2((n3 = p2(n3, { Promise, timeout: 0, overload: false }, { Promise: g2 })).Promise, function(n4, r3, i3) {
      var o3;
      if ("function" == typeof e9.addEventListener) return o3 = function() {
        n4(u2.apply(null, arguments));
      }, i3(function() {
        e9.removeEventListener(t3, o3);
      }), void e9.addEventListener(t3, o3, { once: true });
      var s3, a3 = function() {
        s3 && e9.removeListener("error", s3), n4(u2.apply(null, arguments));
      };
      "error" !== t3 && (s3 = function(n5) {
        e9.removeListener(t3, a3), r3(n5);
      }, e9.once("error", s3)), i3(function() {
        s3 && e9.removeListener("error", s3), e9.removeListener(t3, a3);
      }), e9.once(t3, a3);
    }, { timeout: n3.timeout, overload: n3.overload });
  }, writable: true, configurable: true } }), Object.defineProperties(M2, { _maxListeners: { value: 10, writable: true, configurable: true }, _observers: { value: null, writable: true, configurable: true } }), "function" == typeof e8 && e8.amd ? e8(function() {
    return A2;
  }) : F.exports = A2;
}();
var z;
var q = H.exports;
var V = new Uint8Array(16);
function W() {
  if (!z && !(z = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return z(V);
}
var G = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function Y(e8) {
  return "string" == typeof e8 && G.test(e8);
}
for (Z = [], J = 0; J < 256; ++J) Z.push((J + 256).toString(16).substr(1));
var Z;
var J;
function X(e8) {
  var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, n2 = (Z[e8[t2 + 0]] + Z[e8[t2 + 1]] + Z[e8[t2 + 2]] + Z[e8[t2 + 3]] + "-" + Z[e8[t2 + 4]] + Z[e8[t2 + 5]] + "-" + Z[e8[t2 + 6]] + Z[e8[t2 + 7]] + "-" + Z[e8[t2 + 8]] + Z[e8[t2 + 9]] + "-" + Z[e8[t2 + 10]] + Z[e8[t2 + 11]] + Z[e8[t2 + 12]] + Z[e8[t2 + 13]] + Z[e8[t2 + 14]] + Z[e8[t2 + 15]]).toLowerCase();
  if (!Y(n2)) throw TypeError("Stringified UUID is invalid");
  return n2;
}
function Q(e8, t2, n2) {
  function r2(e9, r3, i2, o2) {
    if ("string" == typeof e9 && (e9 = function(e10) {
      e10 = unescape(encodeURIComponent(e10));
      for (var t3 = [], n3 = 0; n3 < e10.length; ++n3) t3.push(e10.charCodeAt(n3));
      return t3;
    }(e9)), "string" == typeof r3 && (r3 = function(e10) {
      if (!Y(e10)) throw TypeError("Invalid UUID");
      var t3, n3 = new Uint8Array(16);
      return n3[0] = (t3 = parseInt(e10.slice(0, 8), 16)) >>> 24, n3[1] = t3 >>> 16 & 255, n3[2] = t3 >>> 8 & 255, n3[3] = 255 & t3, n3[4] = (t3 = parseInt(e10.slice(9, 13), 16)) >>> 8, n3[5] = 255 & t3, n3[6] = (t3 = parseInt(e10.slice(14, 18), 16)) >>> 8, n3[7] = 255 & t3, n3[8] = (t3 = parseInt(e10.slice(19, 23), 16)) >>> 8, n3[9] = 255 & t3, n3[10] = (t3 = parseInt(e10.slice(24, 36), 16)) / 1099511627776 & 255, n3[11] = t3 / 4294967296 & 255, n3[12] = t3 >>> 24 & 255, n3[13] = t3 >>> 16 & 255, n3[14] = t3 >>> 8 & 255, n3[15] = 255 & t3, n3;
    }(r3)), 16 !== r3.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
    var s2 = new Uint8Array(16 + e9.length);
    if (s2.set(r3), s2.set(e9, r3.length), (s2 = n2(s2))[6] = 15 & s2[6] | t2, s2[8] = 63 & s2[8] | 128, i2) {
      o2 = o2 || 0;
      for (var a2 = 0; a2 < 16; ++a2) i2[o2 + a2] = s2[a2];
      return i2;
    }
    return X(s2);
  }
  try {
    r2.name = e8;
  } catch (e9) {
  }
  return r2.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", r2.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", r2;
}
function ee(e8) {
  return 14 + (e8 + 64 >>> 9 << 4) + 1;
}
function te(e8, t2) {
  var n2 = (65535 & e8) + (65535 & t2);
  return (e8 >> 16) + (t2 >> 16) + (n2 >> 16) << 16 | 65535 & n2;
}
function ne(e8, t2, n2, r2, i2, o2) {
  return te((s2 = te(te(t2, e8), te(r2, o2))) << (a2 = i2) | s2 >>> 32 - a2, n2);
  var s2, a2;
}
function re(e8, t2, n2, r2, i2, o2, s2) {
  return ne(t2 & n2 | ~t2 & r2, e8, t2, i2, o2, s2);
}
function ie(e8, t2, n2, r2, i2, o2, s2) {
  return ne(t2 & r2 | n2 & ~r2, e8, t2, i2, o2, s2);
}
function oe(e8, t2, n2, r2, i2, o2, s2) {
  return ne(t2 ^ n2 ^ r2, e8, t2, i2, o2, s2);
}
function se(e8, t2, n2, r2, i2, o2, s2) {
  return ne(n2 ^ (t2 | ~r2), e8, t2, i2, o2, s2);
}
function ae(e8, t2, n2) {
  var r2 = (e8 = e8 || {}).random || (e8.rng || W)();
  if (r2[6] = 15 & r2[6] | 64, r2[8] = 63 & r2[8] | 128, t2) {
    n2 = n2 || 0;
    for (var i2 = 0; i2 < 16; ++i2) t2[n2 + i2] = r2[i2];
    return t2;
  }
  return X(r2);
}
function ce(e8, t2, n2, r2) {
  switch (e8) {
    case 0:
      return t2 & n2 ^ ~t2 & r2;
    case 1:
    case 3:
      return t2 ^ n2 ^ r2;
    case 2:
      return t2 & n2 ^ t2 & r2 ^ n2 & r2;
  }
}
function le(e8, t2) {
  return e8 << t2 | e8 >>> 32 - t2;
}
Q("v3", 48, function(e8) {
  if ("string" == typeof e8) {
    var t2 = unescape(encodeURIComponent(e8));
    e8 = new Uint8Array(t2.length);
    for (var n2 = 0; n2 < t2.length; ++n2) e8[n2] = t2.charCodeAt(n2);
  }
  return function(e9) {
    for (var t3 = [], n3 = 32 * e9.length, r2 = "0123456789abcdef", i2 = 0; i2 < n3; i2 += 8) {
      var o2 = e9[i2 >> 5] >>> i2 % 32 & 255, s2 = parseInt(r2.charAt(o2 >>> 4 & 15) + r2.charAt(15 & o2), 16);
      t3.push(s2);
    }
    return t3;
  }(function(e9, t3) {
    e9[t3 >> 5] |= 128 << t3 % 32, e9[ee(t3) - 1] = t3;
    for (var n3 = 1732584193, r2 = -271733879, i2 = -1732584194, o2 = 271733878, s2 = 0; s2 < e9.length; s2 += 16) {
      var a2 = n3, c2 = r2, l2 = i2, d2 = o2;
      n3 = re(n3, r2, i2, o2, e9[s2], 7, -680876936), o2 = re(o2, n3, r2, i2, e9[s2 + 1], 12, -389564586), i2 = re(i2, o2, n3, r2, e9[s2 + 2], 17, 606105819), r2 = re(r2, i2, o2, n3, e9[s2 + 3], 22, -1044525330), n3 = re(n3, r2, i2, o2, e9[s2 + 4], 7, -176418897), o2 = re(o2, n3, r2, i2, e9[s2 + 5], 12, 1200080426), i2 = re(i2, o2, n3, r2, e9[s2 + 6], 17, -1473231341), r2 = re(r2, i2, o2, n3, e9[s2 + 7], 22, -45705983), n3 = re(n3, r2, i2, o2, e9[s2 + 8], 7, 1770035416), o2 = re(o2, n3, r2, i2, e9[s2 + 9], 12, -1958414417), i2 = re(i2, o2, n3, r2, e9[s2 + 10], 17, -42063), r2 = re(r2, i2, o2, n3, e9[s2 + 11], 22, -1990404162), n3 = re(n3, r2, i2, o2, e9[s2 + 12], 7, 1804603682), o2 = re(o2, n3, r2, i2, e9[s2 + 13], 12, -40341101), i2 = re(i2, o2, n3, r2, e9[s2 + 14], 17, -1502002290), n3 = ie(n3, r2 = re(r2, i2, o2, n3, e9[s2 + 15], 22, 1236535329), i2, o2, e9[s2 + 1], 5, -165796510), o2 = ie(o2, n3, r2, i2, e9[s2 + 6], 9, -1069501632), i2 = ie(i2, o2, n3, r2, e9[s2 + 11], 14, 643717713), r2 = ie(r2, i2, o2, n3, e9[s2], 20, -373897302), n3 = ie(n3, r2, i2, o2, e9[s2 + 5], 5, -701558691), o2 = ie(o2, n3, r2, i2, e9[s2 + 10], 9, 38016083), i2 = ie(i2, o2, n3, r2, e9[s2 + 15], 14, -660478335), r2 = ie(r2, i2, o2, n3, e9[s2 + 4], 20, -405537848), n3 = ie(n3, r2, i2, o2, e9[s2 + 9], 5, 568446438), o2 = ie(o2, n3, r2, i2, e9[s2 + 14], 9, -1019803690), i2 = ie(i2, o2, n3, r2, e9[s2 + 3], 14, -187363961), r2 = ie(r2, i2, o2, n3, e9[s2 + 8], 20, 1163531501), n3 = ie(n3, r2, i2, o2, e9[s2 + 13], 5, -1444681467), o2 = ie(o2, n3, r2, i2, e9[s2 + 2], 9, -51403784), i2 = ie(i2, o2, n3, r2, e9[s2 + 7], 14, 1735328473), n3 = oe(n3, r2 = ie(r2, i2, o2, n3, e9[s2 + 12], 20, -1926607734), i2, o2, e9[s2 + 5], 4, -378558), o2 = oe(o2, n3, r2, i2, e9[s2 + 8], 11, -2022574463), i2 = oe(i2, o2, n3, r2, e9[s2 + 11], 16, 1839030562), r2 = oe(r2, i2, o2, n3, e9[s2 + 14], 23, -35309556), n3 = oe(n3, r2, i2, o2, e9[s2 + 1], 4, -1530992060), o2 = oe(o2, n3, r2, i2, e9[s2 + 4], 11, 1272893353), i2 = oe(i2, o2, n3, r2, e9[s2 + 7], 16, -155497632), r2 = oe(r2, i2, o2, n3, e9[s2 + 10], 23, -1094730640), n3 = oe(n3, r2, i2, o2, e9[s2 + 13], 4, 681279174), o2 = oe(o2, n3, r2, i2, e9[s2], 11, -358537222), i2 = oe(i2, o2, n3, r2, e9[s2 + 3], 16, -722521979), r2 = oe(r2, i2, o2, n3, e9[s2 + 6], 23, 76029189), n3 = oe(n3, r2, i2, o2, e9[s2 + 9], 4, -640364487), o2 = oe(o2, n3, r2, i2, e9[s2 + 12], 11, -421815835), i2 = oe(i2, o2, n3, r2, e9[s2 + 15], 16, 530742520), n3 = se(n3, r2 = oe(r2, i2, o2, n3, e9[s2 + 2], 23, -995338651), i2, o2, e9[s2], 6, -198630844), o2 = se(o2, n3, r2, i2, e9[s2 + 7], 10, 1126891415), i2 = se(i2, o2, n3, r2, e9[s2 + 14], 15, -1416354905), r2 = se(r2, i2, o2, n3, e9[s2 + 5], 21, -57434055), n3 = se(n3, r2, i2, o2, e9[s2 + 12], 6, 1700485571), o2 = se(o2, n3, r2, i2, e9[s2 + 3], 10, -1894986606), i2 = se(i2, o2, n3, r2, e9[s2 + 10], 15, -1051523), r2 = se(r2, i2, o2, n3, e9[s2 + 1], 21, -2054922799), n3 = se(n3, r2, i2, o2, e9[s2 + 8], 6, 1873313359), o2 = se(o2, n3, r2, i2, e9[s2 + 15], 10, -30611744), i2 = se(i2, o2, n3, r2, e9[s2 + 6], 15, -1560198380), r2 = se(r2, i2, o2, n3, e9[s2 + 13], 21, 1309151649), n3 = se(n3, r2, i2, o2, e9[s2 + 4], 6, -145523070), o2 = se(o2, n3, r2, i2, e9[s2 + 11], 10, -1120210379), i2 = se(i2, o2, n3, r2, e9[s2 + 2], 15, 718787259), r2 = se(r2, i2, o2, n3, e9[s2 + 9], 21, -343485551), n3 = te(n3, a2), r2 = te(r2, c2), i2 = te(i2, l2), o2 = te(o2, d2);
    }
    return [n3, r2, i2, o2];
  }(function(e9) {
    if (0 === e9.length) return [];
    for (var t3 = 8 * e9.length, n3 = new Uint32Array(ee(t3)), r2 = 0; r2 < t3; r2 += 8) n3[r2 >> 5] |= (255 & e9[r2 / 8]) << r2 % 32;
    return n3;
  }(e8), 8 * e8.length));
}), Q("v5", 80, function(e8) {
  var t2 = [1518500249, 1859775393, 2400959708, 3395469782], n2 = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if ("string" == typeof e8) {
    var r2 = unescape(encodeURIComponent(e8));
    e8 = [];
    for (var i2 = 0; i2 < r2.length; ++i2) e8.push(r2.charCodeAt(i2));
  } else Array.isArray(e8) || (e8 = Array.prototype.slice.call(e8));
  e8.push(128);
  for (var o2 = e8.length / 4 + 2, s2 = Math.ceil(o2 / 16), a2 = new Array(s2), c2 = 0; c2 < s2; ++c2) {
    for (var l2 = new Uint32Array(16), d2 = 0; d2 < 16; ++d2) l2[d2] = e8[64 * c2 + 4 * d2] << 24 | e8[64 * c2 + 4 * d2 + 1] << 16 | e8[64 * c2 + 4 * d2 + 2] << 8 | e8[64 * c2 + 4 * d2 + 3];
    a2[c2] = l2;
  }
  a2[s2 - 1][14] = 8 * (e8.length - 1) / Math.pow(2, 32), a2[s2 - 1][14] = Math.floor(a2[s2 - 1][14]), a2[s2 - 1][15] = 8 * (e8.length - 1) & 4294967295;
  for (var u2 = 0; u2 < s2; ++u2) {
    for (var h2 = new Uint32Array(80), f2 = 0; f2 < 16; ++f2) h2[f2] = a2[u2][f2];
    for (var p2 = 16; p2 < 80; ++p2) h2[p2] = le(h2[p2 - 3] ^ h2[p2 - 8] ^ h2[p2 - 14] ^ h2[p2 - 16], 1);
    for (var g2 = n2[0], m2 = n2[1], y2 = n2[2], v2 = n2[3], b2 = n2[4], w2 = 0; w2 < 80; ++w2) {
      var E2 = Math.floor(w2 / 20), C2 = le(g2, 5) + ce(E2, m2, y2, v2) + b2 + t2[E2] + h2[w2] >>> 0;
      b2 = v2, v2 = y2, y2 = le(m2, 30) >>> 0, m2 = g2, g2 = C2;
    }
    n2[0] = n2[0] + g2 >>> 0, n2[1] = n2[1] + m2 >>> 0, n2[2] = n2[2] + y2 >>> 0, n2[3] = n2[3] + v2 >>> 0, n2[4] = n2[4] + b2 >>> 0;
  }
  return [n2[0] >> 24 & 255, n2[0] >> 16 & 255, n2[0] >> 8 & 255, 255 & n2[0], n2[1] >> 24 & 255, n2[1] >> 16 & 255, n2[1] >> 8 & 255, 255 & n2[1], n2[2] >> 24 & 255, n2[2] >> 16 & 255, n2[2] >> 8 & 255, 255 & n2[2], n2[3] >> 24 & 255, n2[3] >> 16 & 255, n2[3] >> 8 & 255, 255 & n2[3], n2[4] >> 24 & 255, n2[4] >> 16 & 255, n2[4] >> 8 & 255, 255 & n2[4]];
});
var de = /* @__PURE__ */ Object.create(null);
de.open = "0", de.close = "1", de.ping = "2", de.pong = "3", de.message = "4", de.upgrade = "5", de.noop = "6";
var ue = /* @__PURE__ */ Object.create(null);
Object.keys(de).forEach((e8) => {
  ue[de[e8]] = e8;
});
var he = { type: "error", data: "parser error" };
var fe = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob);
var pe = "function" == typeof ArrayBuffer;
var ge = (e8) => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e8) : e8 && e8.buffer instanceof ArrayBuffer;
var me = ({ type: e8, data: t2 }, n2, r2) => fe && t2 instanceof Blob ? n2 ? r2(t2) : ye(t2, r2) : pe && (t2 instanceof ArrayBuffer || ge(t2)) ? n2 ? r2(t2) : ye(new Blob([t2]), r2) : r2(de[e8] + (t2 || ""));
var ye = (e8, t2) => {
  const n2 = new FileReader();
  return n2.onload = function() {
    const e9 = n2.result.split(",")[1];
    t2("b" + (e9 || ""));
  }, n2.readAsDataURL(e8);
};
function ve(e8) {
  return e8 instanceof Uint8Array ? e8 : e8 instanceof ArrayBuffer ? new Uint8Array(e8) : new Uint8Array(e8.buffer, e8.byteOffset, e8.byteLength);
}
var be;
function we(e8, t2) {
  return fe && e8.data instanceof Blob ? e8.data.arrayBuffer().then(ve).then(t2) : pe && (e8.data instanceof ArrayBuffer || ge(e8.data)) ? t2(ve(e8.data)) : void me(e8, false, (e9) => {
    be || (be = new TextEncoder()), t2(be.encode(e9));
  });
}
var Ee = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var Ce = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256);
for (let e8 = 0; e8 < 64; e8++) Ce[Ee.charCodeAt(e8)] = e8;
var _e = "function" == typeof ArrayBuffer;
var Se = (e8, t2) => {
  if ("string" != typeof e8) return { type: "message", data: xe(e8, t2) };
  const n2 = e8.charAt(0);
  if ("b" === n2) return { type: "message", data: ke(e8.substring(1), t2) };
  return ue[n2] ? e8.length > 1 ? { type: ue[n2], data: e8.substring(1) } : { type: ue[n2] } : he;
};
var ke = (e8, t2) => {
  if (_e) {
    const n2 = ((e9) => {
      let t3, n3, r2, i2, o2, s2 = 0.75 * e9.length, a2 = e9.length, c2 = 0;
      "=" === e9[e9.length - 1] && (s2--, "=" === e9[e9.length - 2] && s2--);
      const l2 = new ArrayBuffer(s2), d2 = new Uint8Array(l2);
      for (t3 = 0; t3 < a2; t3 += 4) n3 = Ce[e9.charCodeAt(t3)], r2 = Ce[e9.charCodeAt(t3 + 1)], i2 = Ce[e9.charCodeAt(t3 + 2)], o2 = Ce[e9.charCodeAt(t3 + 3)], d2[c2++] = n3 << 2 | r2 >> 4, d2[c2++] = (15 & r2) << 4 | i2 >> 2, d2[c2++] = (3 & i2) << 6 | 63 & o2;
      return l2;
    })(e8);
    return xe(n2, t2);
  }
  return { base64: true, data: e8 };
};
var xe = (e8, t2) => "blob" === t2 ? e8 instanceof Blob ? e8 : new Blob([e8]) : e8 instanceof ArrayBuffer ? e8 : e8.buffer;
var Ae = String.fromCharCode(30);
var Me;
function Le(e8) {
  if (e8) return function(e9) {
    for (var t2 in Le.prototype) e9[t2] = Le.prototype[t2];
    return e9;
  }(e8);
}
Le.prototype.on = Le.prototype.addEventListener = function(e8, t2) {
  return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e8] = this._callbacks["$" + e8] || []).push(t2), this;
}, Le.prototype.once = function(e8, t2) {
  function n2() {
    this.off(e8, n2), t2.apply(this, arguments);
  }
  return n2.fn = t2, this.on(e8, n2), this;
}, Le.prototype.off = Le.prototype.removeListener = Le.prototype.removeAllListeners = Le.prototype.removeEventListener = function(e8, t2) {
  if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
  var n2, r2 = this._callbacks["$" + e8];
  if (!r2) return this;
  if (1 == arguments.length) return delete this._callbacks["$" + e8], this;
  for (var i2 = 0; i2 < r2.length; i2++) if ((n2 = r2[i2]) === t2 || n2.fn === t2) {
    r2.splice(i2, 1);
    break;
  }
  return 0 === r2.length && delete this._callbacks["$" + e8], this;
}, Le.prototype.emit = function(e8) {
  this._callbacks = this._callbacks || {};
  for (var t2 = new Array(arguments.length - 1), n2 = this._callbacks["$" + e8], r2 = 1; r2 < arguments.length; r2++) t2[r2 - 1] = arguments[r2];
  if (n2) {
    r2 = 0;
    for (var i2 = (n2 = n2.slice(0)).length; r2 < i2; ++r2) n2[r2].apply(this, t2);
  }
  return this;
}, Le.prototype.emitReserved = Le.prototype.emit, Le.prototype.listeners = function(e8) {
  return this._callbacks = this._callbacks || {}, this._callbacks["$" + e8] || [];
}, Le.prototype.hasListeners = function(e8) {
  return !!this.listeners(e8).length;
};
var Te = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")();
function Oe(e8, ...t2) {
  return t2.reduce((t3, n2) => (e8.hasOwnProperty(n2) && (t3[n2] = e8[n2]), t3), {});
}
var Re = Te.setTimeout;
var Pe = Te.clearTimeout;
function Ie(e8, t2) {
  t2.useNativeTimers ? (e8.setTimeoutFn = Re.bind(Te), e8.clearTimeoutFn = Pe.bind(Te)) : (e8.setTimeoutFn = Te.setTimeout.bind(Te), e8.clearTimeoutFn = Te.clearTimeout.bind(Te));
}
var Ne = class extends Error {
  constructor(e8, t2, n2) {
    super(e8), this.description = t2, this.context = n2, this.type = "TransportError";
  }
};
var De = class extends Le {
  constructor(e8) {
    super(), this.writable = false, Ie(this, e8), this.opts = e8, this.query = e8.query, this.socket = e8.socket;
  }
  onError(e8, t2, n2) {
    return super.emitReserved("error", new Ne(e8, t2, n2)), this;
  }
  open() {
    return this.readyState = "opening", this.doOpen(), this;
  }
  close() {
    return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this;
  }
  send(e8) {
    "open" === this.readyState && this.write(e8);
  }
  onOpen() {
    this.readyState = "open", this.writable = true, super.emitReserved("open");
  }
  onData(e8) {
    const t2 = Se(e8, this.socket.binaryType);
    this.onPacket(t2);
  }
  onPacket(e8) {
    super.emitReserved("packet", e8);
  }
  onClose(e8) {
    this.readyState = "closed", super.emitReserved("close", e8);
  }
  pause(e8) {
  }
  createUri(e8, t2 = {}) {
    return e8 + "://" + this._hostname() + this._port() + this.opts.path + this._query(t2);
  }
  _hostname() {
    const e8 = this.opts.hostname;
    return -1 === e8.indexOf(":") ? e8 : "[" + e8 + "]";
  }
  _port() {
    return this.opts.port && (this.opts.secure && Number(443 !== this.opts.port) || !this.opts.secure && 80 !== Number(this.opts.port)) ? ":" + this.opts.port : "";
  }
  _query(e8) {
    const t2 = function(e9) {
      let t3 = "";
      for (let n2 in e9) e9.hasOwnProperty(n2) && (t3.length && (t3 += "&"), t3 += encodeURIComponent(n2) + "=" + encodeURIComponent(e9[n2]));
      return t3;
    }(e8);
    return t2.length ? "?" + t2 : "";
  }
};
var Be = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
var $e = 64;
var je = {};
var Ke;
var Fe = 0;
var Ue = 0;
function He(e8) {
  let t2 = "";
  do {
    t2 = Be[e8 % $e] + t2, e8 = Math.floor(e8 / $e);
  } while (e8 > 0);
  return t2;
}
function ze() {
  const e8 = He(+/* @__PURE__ */ new Date());
  return e8 !== Ke ? (Fe = 0, Ke = e8) : e8 + "." + He(Fe++);
}
for (; Ue < $e; Ue++) je[Be[Ue]] = Ue;
var qe = false;
try {
  qe = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest();
} catch (e8) {
}
var Ve = qe;
function We(e8) {
  const t2 = e8.xdomain;
  try {
    if ("undefined" != typeof XMLHttpRequest && (!t2 || Ve)) return new XMLHttpRequest();
  } catch (e9) {
  }
  if (!t2) try {
    return new Te[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
  } catch (e9) {
  }
}
function Ge() {
}
var Ye = null != new We({ xdomain: false }).responseType;
var Ze = class _Ze extends Le {
  constructor(e8, t2) {
    super(), Ie(this, t2), this.opts = t2, this.method = t2.method || "GET", this.uri = e8, this.data = void 0 !== t2.data ? t2.data : null, this.create();
  }
  create() {
    var e8;
    const t2 = Oe(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
    t2.xdomain = !!this.opts.xd;
    const n2 = this.xhr = new We(t2);
    try {
      n2.open(this.method, this.uri, true);
      try {
        if (this.opts.extraHeaders) {
          n2.setDisableHeaderCheck && n2.setDisableHeaderCheck(true);
          for (let e9 in this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(e9) && n2.setRequestHeader(e9, this.opts.extraHeaders[e9]);
        }
      } catch (e9) {
      }
      if ("POST" === this.method) try {
        n2.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
      } catch (e9) {
      }
      try {
        n2.setRequestHeader("Accept", "*/*");
      } catch (e9) {
      }
      null === (e8 = this.opts.cookieJar) || void 0 === e8 || e8.addCookies(n2), "withCredentials" in n2 && (n2.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (n2.timeout = this.opts.requestTimeout), n2.onreadystatechange = () => {
        var e9;
        3 === n2.readyState && (null === (e9 = this.opts.cookieJar) || void 0 === e9 || e9.parseCookies(n2)), 4 === n2.readyState && (200 === n2.status || 1223 === n2.status ? this.onLoad() : this.setTimeoutFn(() => {
          this.onError("number" == typeof n2.status ? n2.status : 0);
        }, 0));
      }, n2.send(this.data);
    } catch (e9) {
      return void this.setTimeoutFn(() => {
        this.onError(e9);
      }, 0);
    }
    "undefined" != typeof document && (this.index = _Ze.requestsCount++, _Ze.requests[this.index] = this);
  }
  onError(e8) {
    this.emitReserved("error", e8, this.xhr), this.cleanup(true);
  }
  cleanup(e8) {
    if (void 0 !== this.xhr && null !== this.xhr) {
      if (this.xhr.onreadystatechange = Ge, e8) try {
        this.xhr.abort();
      } catch (e9) {
      }
      "undefined" != typeof document && delete _Ze.requests[this.index], this.xhr = null;
    }
  }
  onLoad() {
    const e8 = this.xhr.responseText;
    null !== e8 && (this.emitReserved("data", e8), this.emitReserved("success"), this.cleanup());
  }
  abort() {
    this.cleanup();
  }
};
if (Ze.requestsCount = 0, Ze.requests = {}, "undefined" != typeof document) {
  if ("function" == typeof attachEvent) attachEvent("onunload", Je);
  else if ("function" == typeof addEventListener) {
    addEventListener("onpagehide" in Te ? "pagehide" : "unload", Je, false);
  }
}
function Je() {
  for (let e8 in Ze.requests) Ze.requests.hasOwnProperty(e8) && Ze.requests[e8].abort();
}
var Xe = "function" == typeof Promise && "function" == typeof Promise.resolve ? (e8) => Promise.resolve().then(e8) : (e8, t2) => t2(e8, 0);
var Qe = Te.WebSocket || Te.MozWebSocket;
var et = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
function tt(e8, t2) {
  return "message" === e8.type && "string" != typeof e8.data && t2[0] >= 48 && t2[0] <= 54;
}
var nt = { websocket: class extends De {
  constructor(e8) {
    super(e8), this.supportsBinary = !e8.forceBase64;
  }
  get name() {
    return "websocket";
  }
  doOpen() {
    if (!this.check()) return;
    const e8 = this.uri(), t2 = this.opts.protocols, n2 = et ? {} : Oe(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
    this.opts.extraHeaders && (n2.headers = this.opts.extraHeaders);
    try {
      this.ws = et ? new Qe(e8, t2, n2) : t2 ? new Qe(e8, t2) : new Qe(e8);
    } catch (e9) {
      return this.emitReserved("error", e9);
    }
    this.ws.binaryType = this.socket.binaryType || "arraybuffer", this.addEventListeners();
  }
  addEventListeners() {
    this.ws.onopen = () => {
      this.opts.autoUnref && this.ws._socket.unref(), this.onOpen();
    }, this.ws.onclose = (e8) => this.onClose({ description: "websocket connection closed", context: e8 }), this.ws.onmessage = (e8) => this.onData(e8.data), this.ws.onerror = (e8) => this.onError("websocket error", e8);
  }
  write(e8) {
    this.writable = false;
    for (let t2 = 0; t2 < e8.length; t2++) {
      const n2 = e8[t2], r2 = t2 === e8.length - 1;
      me(n2, this.supportsBinary, (e9) => {
        try {
          this.ws.send(e9);
        } catch (e10) {
        }
        r2 && Xe(() => {
          this.writable = true, this.emitReserved("drain");
        }, this.setTimeoutFn);
      });
    }
  }
  doClose() {
    void 0 !== this.ws && (this.ws.close(), this.ws = null);
  }
  uri() {
    const e8 = this.opts.secure ? "wss" : "ws", t2 = this.query || {};
    return this.opts.timestampRequests && (t2[this.opts.timestampParam] = ze()), this.supportsBinary || (t2.b64 = 1), this.createUri(e8, t2);
  }
  check() {
    return !!Qe;
  }
}, webtransport: class extends De {
  get name() {
    return "webtransport";
  }
  doOpen() {
    "function" == typeof WebTransport && (this.transport = new WebTransport(this.createUri("https"), this.opts.transportOptions[this.name]), this.transport.closed.then(() => {
      this.onClose();
    }).catch((e8) => {
      this.onError("webtransport error", e8);
    }), this.transport.ready.then(() => {
      this.transport.createBidirectionalStream().then((e8) => {
        const t2 = e8.readable.getReader();
        let n2;
        this.writer = e8.writable.getWriter();
        const r2 = () => {
          t2.read().then(({ done: e9, value: t3 }) => {
            e9 || (n2 || 1 !== t3.byteLength || 54 !== t3[0] ? (this.onPacket(function(e10, t4, n3) {
              Me || (Me = new TextDecoder());
              const r3 = t4 || e10[0] < 48 || e10[0] > 54;
              return Se(r3 ? e10 : Me.decode(e10), n3);
            }(t3, n2, "arraybuffer")), n2 = false) : n2 = true, r2());
          }).catch((e9) => {
          });
        };
        r2();
        const i2 = this.query.sid ? `0{"sid":"${this.query.sid}"}` : "0";
        this.writer.write(new TextEncoder().encode(i2)).then(() => this.onOpen());
      });
    }));
  }
  write(e8) {
    this.writable = false;
    for (let t2 = 0; t2 < e8.length; t2++) {
      const n2 = e8[t2], r2 = t2 === e8.length - 1;
      we(n2, (e9) => {
        tt(n2, e9) && this.writer.write(Uint8Array.of(54)), this.writer.write(e9).then(() => {
          r2 && Xe(() => {
            this.writable = true, this.emitReserved("drain");
          }, this.setTimeoutFn);
        });
      });
    }
  }
  doClose() {
    var e8;
    null === (e8 = this.transport) || void 0 === e8 || e8.close();
  }
}, polling: class extends De {
  constructor(e8) {
    if (super(e8), this.polling = false, "undefined" != typeof location) {
      const t3 = "https:" === location.protocol;
      let n2 = location.port;
      n2 || (n2 = t3 ? "443" : "80"), this.xd = "undefined" != typeof location && e8.hostname !== location.hostname || n2 !== e8.port;
    }
    const t2 = e8 && e8.forceBase64;
    this.supportsBinary = Ye && !t2, this.opts.withCredentials && (this.cookieJar = void 0);
  }
  get name() {
    return "polling";
  }
  doOpen() {
    this.poll();
  }
  pause(e8) {
    this.readyState = "pausing";
    const t2 = () => {
      this.readyState = "paused", e8();
    };
    if (this.polling || !this.writable) {
      let e9 = 0;
      this.polling && (e9++, this.once("pollComplete", function() {
        --e9 || t2();
      })), this.writable || (e9++, this.once("drain", function() {
        --e9 || t2();
      }));
    } else t2();
  }
  poll() {
    this.polling = true, this.doPoll(), this.emitReserved("poll");
  }
  onData(e8) {
    ((e9, t2) => {
      const n2 = e9.split(Ae), r2 = [];
      for (let e10 = 0; e10 < n2.length; e10++) {
        const i2 = Se(n2[e10], t2);
        if (r2.push(i2), "error" === i2.type) break;
      }
      return r2;
    })(e8, this.socket.binaryType).forEach((e9) => {
      if ("opening" === this.readyState && "open" === e9.type && this.onOpen(), "close" === e9.type) return this.onClose({ description: "transport closed by the server" }), false;
      this.onPacket(e9);
    }), "closed" !== this.readyState && (this.polling = false, this.emitReserved("pollComplete"), "open" === this.readyState && this.poll());
  }
  doClose() {
    const e8 = () => {
      this.write([{ type: "close" }]);
    };
    "open" === this.readyState ? e8() : this.once("open", e8);
  }
  write(e8) {
    this.writable = false, ((e9, t2) => {
      const n2 = e9.length, r2 = new Array(n2);
      let i2 = 0;
      e9.forEach((e10, o2) => {
        me(e10, false, (e11) => {
          r2[o2] = e11, ++i2 === n2 && t2(r2.join(Ae));
        });
      });
    })(e8, (e9) => {
      this.doWrite(e9, () => {
        this.writable = true, this.emitReserved("drain");
      });
    });
  }
  uri() {
    const e8 = this.opts.secure ? "https" : "http", t2 = this.query || {};
    return false !== this.opts.timestampRequests && (t2[this.opts.timestampParam] = ze()), this.supportsBinary || t2.sid || (t2.b64 = 1), this.createUri(e8, t2);
  }
  request(e8 = {}) {
    return Object.assign(e8, { xd: this.xd, cookieJar: this.cookieJar }, this.opts), new Ze(this.uri(), e8);
  }
  doWrite(e8, t2) {
    const n2 = this.request({ method: "POST", data: e8 });
    n2.on("success", t2), n2.on("error", (e9, t3) => {
      this.onError("xhr post error", e9, t3);
    });
  }
  doPoll() {
    const e8 = this.request();
    e8.on("data", this.onData.bind(this)), e8.on("error", (e9, t2) => {
      this.onError("xhr poll error", e9, t2);
    }), this.pollXhr = e8;
  }
} };
var rt = /^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
var it = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
function ot(e8) {
  const t2 = e8, n2 = e8.indexOf("["), r2 = e8.indexOf("]");
  -1 != n2 && -1 != r2 && (e8 = e8.substring(0, n2) + e8.substring(n2, r2).replace(/:/g, ";") + e8.substring(r2, e8.length));
  let i2 = rt.exec(e8 || ""), o2 = {}, s2 = 14;
  for (; s2--; ) o2[it[s2]] = i2[s2] || "";
  return -1 != n2 && -1 != r2 && (o2.source = t2, o2.host = o2.host.substring(1, o2.host.length - 1).replace(/;/g, ":"), o2.authority = o2.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), o2.ipv6uri = true), o2.pathNames = function(e9, t3) {
    const n3 = /\/{2,9}/g, r3 = t3.replace(n3, "/").split("/");
    "/" != t3.slice(0, 1) && 0 !== t3.length || r3.splice(0, 1);
    "/" == t3.slice(-1) && r3.splice(r3.length - 1, 1);
    return r3;
  }(0, o2.path), o2.queryKey = function(e9, t3) {
    const n3 = {};
    return t3.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(e10, t4, r3) {
      t4 && (n3[t4] = r3);
    }), n3;
  }(0, o2.query), o2;
}
var st = class e2 extends Le {
  constructor(e8, t2 = {}) {
    super(), this.writeBuffer = [], e8 && "object" == typeof e8 && (t2 = e8, e8 = null), e8 ? (e8 = ot(e8), t2.hostname = e8.host, t2.secure = "https" === e8.protocol || "wss" === e8.protocol, t2.port = e8.port, e8.query && (t2.query = e8.query)) : t2.host && (t2.hostname = ot(t2.host).host), Ie(this, t2), this.secure = null != t2.secure ? t2.secure : "undefined" != typeof location && "https:" === location.protocol, t2.hostname && !t2.port && (t2.port = this.secure ? "443" : "80"), this.hostname = t2.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = t2.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? "443" : "80"), this.transports = t2.transports || ["polling", "websocket", "webtransport"], this.writeBuffer = [], this.prevBufferLen = 0, this.opts = Object.assign({ path: "/engine.io", agent: false, withCredentials: false, upgrade: true, timestampParam: "t", rememberUpgrade: false, addTrailingSlash: true, rejectUnauthorized: true, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: false }, t2), this.opts.path = this.opts.path.replace(/\/$/, "") + (this.opts.addTrailingSlash ? "/" : ""), "string" == typeof this.opts.query && (this.opts.query = function(e9) {
      let t3 = {}, n2 = e9.split("&");
      for (let e10 = 0, r2 = n2.length; e10 < r2; e10++) {
        let r3 = n2[e10].split("=");
        t3[decodeURIComponent(r3[0])] = decodeURIComponent(r3[1]);
      }
      return t3;
    }(this.opts.query)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingTimeoutTimer = null, "function" == typeof addEventListener && (this.opts.closeOnBeforeunload && (this.beforeunloadEventListener = () => {
      this.transport && (this.transport.removeAllListeners(), this.transport.close());
    }, addEventListener("beforeunload", this.beforeunloadEventListener, false)), "localhost" !== this.hostname && (this.offlineEventListener = () => {
      this.onClose("transport close", { description: "network connection lost" });
    }, addEventListener("offline", this.offlineEventListener, false))), this.open();
  }
  createTransport(e8) {
    const t2 = Object.assign({}, this.opts.query);
    t2.EIO = 4, t2.transport = e8, this.id && (t2.sid = this.id);
    const n2 = Object.assign({}, this.opts, { query: t2, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }, this.opts.transportOptions[e8]);
    return new nt[e8](n2);
  }
  open() {
    let t2;
    if (this.opts.rememberUpgrade && e2.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t2 = "websocket";
    else {
      if (0 === this.transports.length) return void this.setTimeoutFn(() => {
        this.emitReserved("error", "No transports available");
      }, 0);
      t2 = this.transports[0];
    }
    this.readyState = "opening";
    try {
      t2 = this.createTransport(t2);
    } catch (e8) {
      return this.transports.shift(), void this.open();
    }
    t2.open(), this.setTransport(t2);
  }
  setTransport(e8) {
    this.transport && this.transport.removeAllListeners(), this.transport = e8, e8.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (e9) => this.onClose("transport close", e9));
  }
  probe(t2) {
    let n2 = this.createTransport(t2), r2 = false;
    e2.priorWebsocketSuccess = false;
    const i2 = () => {
      r2 || (n2.send([{ type: "ping", data: "probe" }]), n2.once("packet", (t3) => {
        if (!r2) if ("pong" === t3.type && "probe" === t3.data) {
          if (this.upgrading = true, this.emitReserved("upgrading", n2), !n2) return;
          e2.priorWebsocketSuccess = "websocket" === n2.name, this.transport.pause(() => {
            r2 || "closed" !== this.readyState && (d2(), this.setTransport(n2), n2.send([{ type: "upgrade" }]), this.emitReserved("upgrade", n2), n2 = null, this.upgrading = false, this.flush());
          });
        } else {
          const e8 = new Error("probe error");
          e8.transport = n2.name, this.emitReserved("upgradeError", e8);
        }
      }));
    };
    function o2() {
      r2 || (r2 = true, d2(), n2.close(), n2 = null);
    }
    const s2 = (e8) => {
      const t3 = new Error("probe error: " + e8);
      t3.transport = n2.name, o2(), this.emitReserved("upgradeError", t3);
    };
    function a2() {
      s2("transport closed");
    }
    function c2() {
      s2("socket closed");
    }
    function l2(e8) {
      n2 && e8.name !== n2.name && o2();
    }
    const d2 = () => {
      n2.removeListener("open", i2), n2.removeListener("error", s2), n2.removeListener("close", a2), this.off("close", c2), this.off("upgrading", l2);
    };
    n2.once("open", i2), n2.once("error", s2), n2.once("close", a2), this.once("close", c2), this.once("upgrading", l2), -1 !== this.upgrades.indexOf("webtransport") && "webtransport" !== t2 ? this.setTimeoutFn(() => {
      r2 || n2.open();
    }, 200) : n2.open();
  }
  onOpen() {
    if (this.readyState = "open", e2.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush(), "open" === this.readyState && this.opts.upgrade) {
      let e8 = 0;
      const t2 = this.upgrades.length;
      for (; e8 < t2; e8++) this.probe(this.upgrades[e8]);
    }
  }
  onPacket(e8) {
    if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emitReserved("packet", e8), this.emitReserved("heartbeat"), e8.type) {
      case "open":
        this.onHandshake(JSON.parse(e8.data));
        break;
      case "ping":
        this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong");
        break;
      case "error":
        const t2 = new Error("server error");
        t2.code = e8.data, this.onError(t2);
        break;
      case "message":
        this.emitReserved("data", e8.data), this.emitReserved("message", e8.data);
    }
  }
  onHandshake(e8) {
    this.emitReserved("handshake", e8), this.id = e8.sid, this.transport.query.sid = e8.sid, this.upgrades = this.filterUpgrades(e8.upgrades), this.pingInterval = e8.pingInterval, this.pingTimeout = e8.pingTimeout, this.maxPayload = e8.maxPayload, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout();
  }
  resetPingTimeout() {
    this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn(() => {
      this.onClose("ping timeout");
    }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref();
  }
  onDrain() {
    this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush();
  }
  flush() {
    if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
      const e8 = this.getWritablePackets();
      this.transport.send(e8), this.prevBufferLen = e8.length, this.emitReserved("flush");
    }
  }
  getWritablePackets() {
    if (!(this.maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1)) return this.writeBuffer;
    let e8 = 1;
    for (let n2 = 0; n2 < this.writeBuffer.length; n2++) {
      const r2 = this.writeBuffer[n2].data;
      if (r2 && (e8 += "string" == typeof (t2 = r2) ? function(e9) {
        let t3 = 0, n3 = 0;
        for (let r3 = 0, i2 = e9.length; r3 < i2; r3++) t3 = e9.charCodeAt(r3), t3 < 128 ? n3 += 1 : t3 < 2048 ? n3 += 2 : t3 < 55296 || t3 >= 57344 ? n3 += 3 : (r3++, n3 += 4);
        return n3;
      }(t2) : Math.ceil(1.33 * (t2.byteLength || t2.size))), n2 > 0 && e8 > this.maxPayload) return this.writeBuffer.slice(0, n2);
      e8 += 2;
    }
    var t2;
    return this.writeBuffer;
  }
  write(e8, t2, n2) {
    return this.sendPacket("message", e8, t2, n2), this;
  }
  send(e8, t2, n2) {
    return this.sendPacket("message", e8, t2, n2), this;
  }
  sendPacket(e8, t2, n2, r2) {
    if ("function" == typeof t2 && (r2 = t2, t2 = void 0), "function" == typeof n2 && (r2 = n2, n2 = null), "closing" === this.readyState || "closed" === this.readyState) return;
    (n2 = n2 || {}).compress = false !== n2.compress;
    const i2 = { type: e8, data: t2, options: n2 };
    this.emitReserved("packetCreate", i2), this.writeBuffer.push(i2), r2 && this.once("flush", r2), this.flush();
  }
  close() {
    const e8 = () => {
      this.onClose("forced close"), this.transport.close();
    }, t2 = () => {
      this.off("upgrade", t2), this.off("upgradeError", t2), e8();
    }, n2 = () => {
      this.once("upgrade", t2), this.once("upgradeError", t2);
    };
    return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", () => {
      this.upgrading ? n2() : e8();
    }) : this.upgrading ? n2() : e8()), this;
  }
  onError(t2) {
    e2.priorWebsocketSuccess = false, this.emitReserved("error", t2), this.onClose("transport error", t2);
  }
  onClose(e8, t2) {
    "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && (removeEventListener("beforeunload", this.beforeunloadEventListener, false), removeEventListener("offline", this.offlineEventListener, false)), this.readyState = "closed", this.id = null, this.emitReserved("close", e8, t2), this.writeBuffer = [], this.prevBufferLen = 0);
  }
  filterUpgrades(e8) {
    const t2 = [];
    let n2 = 0;
    const r2 = e8.length;
    for (; n2 < r2; n2++) ~this.transports.indexOf(e8[n2]) && t2.push(e8[n2]);
    return t2;
  }
};
st.protocol = 4;
var at = "function" == typeof ArrayBuffer;
var ct = (e8) => "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e8) : e8.buffer instanceof ArrayBuffer;
var lt = Object.prototype.toString;
var dt = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === lt.call(Blob);
var ut = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === lt.call(File);
function ht(e8) {
  return at && (e8 instanceof ArrayBuffer || ct(e8)) || dt && e8 instanceof Blob || ut && e8 instanceof File;
}
function ft(e8, t2) {
  if (!e8 || "object" != typeof e8) return false;
  if (Array.isArray(e8)) {
    for (let t3 = 0, n2 = e8.length; t3 < n2; t3++) if (ft(e8[t3])) return true;
    return false;
  }
  if (ht(e8)) return true;
  if (e8.toJSON && "function" == typeof e8.toJSON && 1 === arguments.length) return ft(e8.toJSON(), true);
  for (const t3 in e8) if (Object.prototype.hasOwnProperty.call(e8, t3) && ft(e8[t3])) return true;
  return false;
}
function pt(e8) {
  const t2 = [], n2 = e8.data, r2 = e8;
  return r2.data = gt(n2, t2), r2.attachments = t2.length, { packet: r2, buffers: t2 };
}
function gt(e8, t2) {
  if (!e8) return e8;
  if (ht(e8)) {
    const n2 = { _placeholder: true, num: t2.length };
    return t2.push(e8), n2;
  }
  if (Array.isArray(e8)) {
    const n2 = new Array(e8.length);
    for (let r2 = 0; r2 < e8.length; r2++) n2[r2] = gt(e8[r2], t2);
    return n2;
  }
  if ("object" == typeof e8 && !(e8 instanceof Date)) {
    const n2 = {};
    for (const r2 in e8) Object.prototype.hasOwnProperty.call(e8, r2) && (n2[r2] = gt(e8[r2], t2));
    return n2;
  }
  return e8;
}
function mt(e8, t2) {
  return e8.data = yt(e8.data, t2), delete e8.attachments, e8;
}
function yt(e8, t2) {
  if (!e8) return e8;
  if (e8 && true === e8._placeholder) {
    if ("number" == typeof e8.num && e8.num >= 0 && e8.num < t2.length) return t2[e8.num];
    throw new Error("illegal attachments");
  }
  if (Array.isArray(e8)) for (let n2 = 0; n2 < e8.length; n2++) e8[n2] = yt(e8[n2], t2);
  else if ("object" == typeof e8) for (const n2 in e8) Object.prototype.hasOwnProperty.call(e8, n2) && (e8[n2] = yt(e8[n2], t2));
  return e8;
}
var vt = ["connect", "connect_error", "disconnect", "disconnecting", "newListener", "removeListener"];
var bt;
!function(e8) {
  e8[e8.CONNECT = 0] = "CONNECT", e8[e8.DISCONNECT = 1] = "DISCONNECT", e8[e8.EVENT = 2] = "EVENT", e8[e8.ACK = 3] = "ACK", e8[e8.CONNECT_ERROR = 4] = "CONNECT_ERROR", e8[e8.BINARY_EVENT = 5] = "BINARY_EVENT", e8[e8.BINARY_ACK = 6] = "BINARY_ACK";
}(bt || (bt = {}));
function wt(e8) {
  return "[object Object]" === Object.prototype.toString.call(e8);
}
var Et = class _Et extends Le {
  constructor(e8) {
    super(), this.reviver = e8;
  }
  add(e8) {
    let t2;
    if ("string" == typeof e8) {
      if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet");
      t2 = this.decodeString(e8);
      const n2 = t2.type === bt.BINARY_EVENT;
      n2 || t2.type === bt.BINARY_ACK ? (t2.type = n2 ? bt.EVENT : bt.ACK, this.reconstructor = new Ct(t2), 0 === t2.attachments && super.emitReserved("decoded", t2)) : super.emitReserved("decoded", t2);
    } else {
      if (!ht(e8) && !e8.base64) throw new Error("Unknown type: " + e8);
      if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
      t2 = this.reconstructor.takeBinaryData(e8), t2 && (this.reconstructor = null, super.emitReserved("decoded", t2));
    }
  }
  decodeString(e8) {
    let t2 = 0;
    const n2 = { type: Number(e8.charAt(0)) };
    if (void 0 === bt[n2.type]) throw new Error("unknown packet type " + n2.type);
    if (n2.type === bt.BINARY_EVENT || n2.type === bt.BINARY_ACK) {
      const r3 = t2 + 1;
      for (; "-" !== e8.charAt(++t2) && t2 != e8.length; ) ;
      const i2 = e8.substring(r3, t2);
      if (i2 != Number(i2) || "-" !== e8.charAt(t2)) throw new Error("Illegal attachments");
      n2.attachments = Number(i2);
    }
    if ("/" === e8.charAt(t2 + 1)) {
      const r3 = t2 + 1;
      for (; ++t2; ) {
        if ("," === e8.charAt(t2)) break;
        if (t2 === e8.length) break;
      }
      n2.nsp = e8.substring(r3, t2);
    } else n2.nsp = "/";
    const r2 = e8.charAt(t2 + 1);
    if ("" !== r2 && Number(r2) == r2) {
      const r3 = t2 + 1;
      for (; ++t2; ) {
        const n3 = e8.charAt(t2);
        if (null == n3 || Number(n3) != n3) {
          --t2;
          break;
        }
        if (t2 === e8.length) break;
      }
      n2.id = Number(e8.substring(r3, t2 + 1));
    }
    if (e8.charAt(++t2)) {
      const r3 = this.tryParse(e8.substr(t2));
      if (!_Et.isPayloadValid(n2.type, r3)) throw new Error("invalid payload");
      n2.data = r3;
    }
    return n2;
  }
  tryParse(e8) {
    try {
      return JSON.parse(e8, this.reviver);
    } catch (e9) {
      return false;
    }
  }
  static isPayloadValid(e8, t2) {
    switch (e8) {
      case bt.CONNECT:
        return wt(t2);
      case bt.DISCONNECT:
        return void 0 === t2;
      case bt.CONNECT_ERROR:
        return "string" == typeof t2 || wt(t2);
      case bt.EVENT:
      case bt.BINARY_EVENT:
        return Array.isArray(t2) && ("number" == typeof t2[0] || "string" == typeof t2[0] && -1 === vt.indexOf(t2[0]));
      case bt.ACK:
      case bt.BINARY_ACK:
        return Array.isArray(t2);
    }
  }
  destroy() {
    this.reconstructor && (this.reconstructor.finishedReconstruction(), this.reconstructor = null);
  }
};
var Ct = class {
  constructor(e8) {
    this.packet = e8, this.buffers = [], this.reconPack = e8;
  }
  takeBinaryData(e8) {
    if (this.buffers.push(e8), this.buffers.length === this.reconPack.attachments) {
      const e9 = mt(this.reconPack, this.buffers);
      return this.finishedReconstruction(), e9;
    }
    return null;
  }
  finishedReconstruction() {
    this.reconPack = null, this.buffers = [];
  }
};
var _t = Object.freeze({ __proto__: null, Decoder: Et, Encoder: class {
  constructor(e8) {
    this.replacer = e8;
  }
  encode(e8) {
    return e8.type !== bt.EVENT && e8.type !== bt.ACK || !ft(e8) ? [this.encodeAsString(e8)] : this.encodeAsBinary({ type: e8.type === bt.EVENT ? bt.BINARY_EVENT : bt.BINARY_ACK, nsp: e8.nsp, data: e8.data, id: e8.id });
  }
  encodeAsString(e8) {
    let t2 = "" + e8.type;
    return e8.type !== bt.BINARY_EVENT && e8.type !== bt.BINARY_ACK || (t2 += e8.attachments + "-"), e8.nsp && "/" !== e8.nsp && (t2 += e8.nsp + ","), null != e8.id && (t2 += e8.id), null != e8.data && (t2 += JSON.stringify(e8.data, this.replacer)), t2;
  }
  encodeAsBinary(e8) {
    const t2 = pt(e8), n2 = this.encodeAsString(t2.packet), r2 = t2.buffers;
    return r2.unshift(n2), r2;
  }
}, get PacketType() {
  return bt;
}, protocol: 5 });
function St(e8, t2, n2) {
  return e8.on(t2, n2), function() {
    e8.off(t2, n2);
  };
}
var kt = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 });
var xt = class extends Le {
  constructor(e8, t2, n2) {
    super(), this.connected = false, this.recovered = false, this.receiveBuffer = [], this.sendBuffer = [], this._queue = [], this._queueSeq = 0, this.ids = 0, this.acks = {}, this.flags = {}, this.io = e8, this.nsp = t2, n2 && n2.auth && (this.auth = n2.auth), this._opts = Object.assign({}, n2), this.io._autoConnect && this.open();
  }
  get disconnected() {
    return !this.connected;
  }
  subEvents() {
    if (this.subs) return;
    const e8 = this.io;
    this.subs = [St(e8, "open", this.onopen.bind(this)), St(e8, "packet", this.onpacket.bind(this)), St(e8, "error", this.onerror.bind(this)), St(e8, "close", this.onclose.bind(this))];
  }
  get active() {
    return !!this.subs;
  }
  connect() {
    return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this;
  }
  open() {
    return this.connect();
  }
  send(...e8) {
    return e8.unshift("message"), this.emit.apply(this, e8), this;
  }
  emit(e8, ...t2) {
    if (kt.hasOwnProperty(e8)) throw new Error('"' + e8.toString() + '" is a reserved event name');
    if (t2.unshift(e8), this._opts.retries && !this.flags.fromQueue && !this.flags.volatile) return this._addToQueue(t2), this;
    const n2 = { type: bt.EVENT, data: t2, options: {} };
    if (n2.options.compress = false !== this.flags.compress, "function" == typeof t2[t2.length - 1]) {
      const e9 = this.ids++, r3 = t2.pop();
      this._registerAckCallback(e9, r3), n2.id = e9;
    }
    const r2 = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
    return this.flags.volatile && (!r2 || !this.connected) || (this.connected ? (this.notifyOutgoingListeners(n2), this.packet(n2)) : this.sendBuffer.push(n2)), this.flags = {}, this;
  }
  _registerAckCallback(e8, t2) {
    var n2;
    const r2 = null !== (n2 = this.flags.timeout) && void 0 !== n2 ? n2 : this._opts.ackTimeout;
    if (void 0 === r2) return void (this.acks[e8] = t2);
    const i2 = this.io.setTimeoutFn(() => {
      delete this.acks[e8];
      for (let t3 = 0; t3 < this.sendBuffer.length; t3++) this.sendBuffer[t3].id === e8 && this.sendBuffer.splice(t3, 1);
      t2.call(this, new Error("operation has timed out"));
    }, r2);
    this.acks[e8] = (...e9) => {
      this.io.clearTimeoutFn(i2), t2.apply(this, [null, ...e9]);
    };
  }
  emitWithAck(e8, ...t2) {
    const n2 = void 0 !== this.flags.timeout || void 0 !== this._opts.ackTimeout;
    return new Promise((r2, i2) => {
      t2.push((e9, t3) => n2 ? e9 ? i2(e9) : r2(t3) : r2(e9)), this.emit(e8, ...t2);
    });
  }
  _addToQueue(e8) {
    let t2;
    "function" == typeof e8[e8.length - 1] && (t2 = e8.pop());
    const n2 = { id: this._queueSeq++, tryCount: 0, pending: false, args: e8, flags: Object.assign({ fromQueue: true }, this.flags) };
    e8.push((e9, ...r2) => {
      if (n2 !== this._queue[0]) return;
      return null !== e9 ? n2.tryCount > this._opts.retries && (this._queue.shift(), t2 && t2(e9)) : (this._queue.shift(), t2 && t2(null, ...r2)), n2.pending = false, this._drainQueue();
    }), this._queue.push(n2), this._drainQueue();
  }
  _drainQueue(e8 = false) {
    if (!this.connected || 0 === this._queue.length) return;
    const t2 = this._queue[0];
    t2.pending && !e8 || (t2.pending = true, t2.tryCount++, this.flags = t2.flags, this.emit.apply(this, t2.args));
  }
  packet(e8) {
    e8.nsp = this.nsp, this.io._packet(e8);
  }
  onopen() {
    "function" == typeof this.auth ? this.auth((e8) => {
      this._sendConnectPacket(e8);
    }) : this._sendConnectPacket(this.auth);
  }
  _sendConnectPacket(e8) {
    this.packet({ type: bt.CONNECT, data: this._pid ? Object.assign({ pid: this._pid, offset: this._lastOffset }, e8) : e8 });
  }
  onerror(e8) {
    this.connected || this.emitReserved("connect_error", e8);
  }
  onclose(e8, t2) {
    this.connected = false, delete this.id, this.emitReserved("disconnect", e8, t2);
  }
  onpacket(e8) {
    if (e8.nsp === this.nsp) switch (e8.type) {
      case bt.CONNECT:
        e8.data && e8.data.sid ? this.onconnect(e8.data.sid, e8.data.pid) : this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));
        break;
      case bt.EVENT:
      case bt.BINARY_EVENT:
        this.onevent(e8);
        break;
      case bt.ACK:
      case bt.BINARY_ACK:
        this.onack(e8);
        break;
      case bt.DISCONNECT:
        this.ondisconnect();
        break;
      case bt.CONNECT_ERROR:
        this.destroy();
        const t2 = new Error(e8.data.message);
        t2.data = e8.data.data, this.emitReserved("connect_error", t2);
    }
  }
  onevent(e8) {
    const t2 = e8.data || [];
    null != e8.id && t2.push(this.ack(e8.id)), this.connected ? this.emitEvent(t2) : this.receiveBuffer.push(Object.freeze(t2));
  }
  emitEvent(e8) {
    if (this._anyListeners && this._anyListeners.length) {
      const t2 = this._anyListeners.slice();
      for (const n2 of t2) n2.apply(this, e8);
    }
    super.emit.apply(this, e8), this._pid && e8.length && "string" == typeof e8[e8.length - 1] && (this._lastOffset = e8[e8.length - 1]);
  }
  ack(e8) {
    const t2 = this;
    let n2 = false;
    return function(...r2) {
      n2 || (n2 = true, t2.packet({ type: bt.ACK, id: e8, data: r2 }));
    };
  }
  onack(e8) {
    const t2 = this.acks[e8.id];
    "function" == typeof t2 && (t2.apply(this, e8.data), delete this.acks[e8.id]);
  }
  onconnect(e8, t2) {
    this.id = e8, this.recovered = t2 && this._pid === t2, this._pid = t2, this.connected = true, this.emitBuffered(), this.emitReserved("connect"), this._drainQueue(true);
  }
  emitBuffered() {
    this.receiveBuffer.forEach((e8) => this.emitEvent(e8)), this.receiveBuffer = [], this.sendBuffer.forEach((e8) => {
      this.notifyOutgoingListeners(e8), this.packet(e8);
    }), this.sendBuffer = [];
  }
  ondisconnect() {
    this.destroy(), this.onclose("io server disconnect");
  }
  destroy() {
    this.subs && (this.subs.forEach((e8) => e8()), this.subs = void 0), this.io._destroy(this);
  }
  disconnect() {
    return this.connected && this.packet({ type: bt.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this;
  }
  close() {
    return this.disconnect();
  }
  compress(e8) {
    return this.flags.compress = e8, this;
  }
  get volatile() {
    return this.flags.volatile = true, this;
  }
  timeout(e8) {
    return this.flags.timeout = e8, this;
  }
  onAny(e8) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.push(e8), this;
  }
  prependAny(e8) {
    return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(e8), this;
  }
  offAny(e8) {
    if (!this._anyListeners) return this;
    if (e8) {
      const t2 = this._anyListeners;
      for (let n2 = 0; n2 < t2.length; n2++) if (e8 === t2[n2]) return t2.splice(n2, 1), this;
    } else this._anyListeners = [];
    return this;
  }
  listenersAny() {
    return this._anyListeners || [];
  }
  onAnyOutgoing(e8) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(e8), this;
  }
  prependAnyOutgoing(e8) {
    return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(e8), this;
  }
  offAnyOutgoing(e8) {
    if (!this._anyOutgoingListeners) return this;
    if (e8) {
      const t2 = this._anyOutgoingListeners;
      for (let n2 = 0; n2 < t2.length; n2++) if (e8 === t2[n2]) return t2.splice(n2, 1), this;
    } else this._anyOutgoingListeners = [];
    return this;
  }
  listenersAnyOutgoing() {
    return this._anyOutgoingListeners || [];
  }
  notifyOutgoingListeners(e8) {
    if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) {
      const t2 = this._anyOutgoingListeners.slice();
      for (const n2 of t2) n2.apply(this, e8.data);
    }
  }
};
function At(e8) {
  e8 = e8 || {}, this.ms = e8.min || 100, this.max = e8.max || 1e4, this.factor = e8.factor || 2, this.jitter = e8.jitter > 0 && e8.jitter <= 1 ? e8.jitter : 0, this.attempts = 0;
}
At.prototype.duration = function() {
  var e8 = this.ms * Math.pow(this.factor, this.attempts++);
  if (this.jitter) {
    var t2 = Math.random(), n2 = Math.floor(t2 * this.jitter * e8);
    e8 = 0 == (1 & Math.floor(10 * t2)) ? e8 - n2 : e8 + n2;
  }
  return 0 | Math.min(e8, this.max);
}, At.prototype.reset = function() {
  this.attempts = 0;
}, At.prototype.setMin = function(e8) {
  this.ms = e8;
}, At.prototype.setMax = function(e8) {
  this.max = e8;
}, At.prototype.setJitter = function(e8) {
  this.jitter = e8;
};
var Mt = class extends Le {
  constructor(e8, t2) {
    var n2;
    super(), this.nsps = {}, this.subs = [], e8 && "object" == typeof e8 && (t2 = e8, e8 = void 0), (t2 = t2 || {}).path = t2.path || "/socket.io", this.opts = t2, Ie(this, t2), this.reconnection(false !== t2.reconnection), this.reconnectionAttempts(t2.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t2.reconnectionDelay || 1e3), this.reconnectionDelayMax(t2.reconnectionDelayMax || 5e3), this.randomizationFactor(null !== (n2 = t2.randomizationFactor) && void 0 !== n2 ? n2 : 0.5), this.backoff = new At({ min: this.reconnectionDelay(), max: this.reconnectionDelayMax(), jitter: this.randomizationFactor() }), this.timeout(null == t2.timeout ? 2e4 : t2.timeout), this._readyState = "closed", this.uri = e8;
    const r2 = t2.parser || _t;
    this.encoder = new r2.Encoder(), this.decoder = new r2.Decoder(), this._autoConnect = false !== t2.autoConnect, this._autoConnect && this.open();
  }
  reconnection(e8) {
    return arguments.length ? (this._reconnection = !!e8, this) : this._reconnection;
  }
  reconnectionAttempts(e8) {
    return void 0 === e8 ? this._reconnectionAttempts : (this._reconnectionAttempts = e8, this);
  }
  reconnectionDelay(e8) {
    var t2;
    return void 0 === e8 ? this._reconnectionDelay : (this._reconnectionDelay = e8, null === (t2 = this.backoff) || void 0 === t2 || t2.setMin(e8), this);
  }
  randomizationFactor(e8) {
    var t2;
    return void 0 === e8 ? this._randomizationFactor : (this._randomizationFactor = e8, null === (t2 = this.backoff) || void 0 === t2 || t2.setJitter(e8), this);
  }
  reconnectionDelayMax(e8) {
    var t2;
    return void 0 === e8 ? this._reconnectionDelayMax : (this._reconnectionDelayMax = e8, null === (t2 = this.backoff) || void 0 === t2 || t2.setMax(e8), this);
  }
  timeout(e8) {
    return arguments.length ? (this._timeout = e8, this) : this._timeout;
  }
  maybeReconnectOnOpen() {
    !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect();
  }
  open(e8) {
    if (~this._readyState.indexOf("open")) return this;
    this.engine = new st(this.uri, this.opts);
    const t2 = this.engine, n2 = this;
    this._readyState = "opening", this.skipReconnect = false;
    const r2 = St(t2, "open", function() {
      n2.onopen(), e8 && e8();
    }), i2 = (t3) => {
      this.cleanup(), this._readyState = "closed", this.emitReserved("error", t3), e8 ? e8(t3) : this.maybeReconnectOnOpen();
    }, o2 = St(t2, "error", i2);
    if (false !== this._timeout) {
      const e9 = this._timeout, n3 = this.setTimeoutFn(() => {
        r2(), i2(new Error("timeout")), t2.close();
      }, e9);
      this.opts.autoUnref && n3.unref(), this.subs.push(() => {
        this.clearTimeoutFn(n3);
      });
    }
    return this.subs.push(r2), this.subs.push(o2), this;
  }
  connect(e8) {
    return this.open(e8);
  }
  onopen() {
    this.cleanup(), this._readyState = "open", this.emitReserved("open");
    const e8 = this.engine;
    this.subs.push(St(e8, "ping", this.onping.bind(this)), St(e8, "data", this.ondata.bind(this)), St(e8, "error", this.onerror.bind(this)), St(e8, "close", this.onclose.bind(this)), St(this.decoder, "decoded", this.ondecoded.bind(this)));
  }
  onping() {
    this.emitReserved("ping");
  }
  ondata(e8) {
    try {
      this.decoder.add(e8);
    } catch (e9) {
      this.onclose("parse error", e9);
    }
  }
  ondecoded(e8) {
    Xe(() => {
      this.emitReserved("packet", e8);
    }, this.setTimeoutFn);
  }
  onerror(e8) {
    this.emitReserved("error", e8);
  }
  socket(e8, t2) {
    let n2 = this.nsps[e8];
    return n2 ? this._autoConnect && !n2.active && n2.connect() : (n2 = new xt(this, e8, t2), this.nsps[e8] = n2), n2;
  }
  _destroy(e8) {
    const t2 = Object.keys(this.nsps);
    for (const e9 of t2) {
      if (this.nsps[e9].active) return;
    }
    this._close();
  }
  _packet(e8) {
    const t2 = this.encoder.encode(e8);
    for (let n2 = 0; n2 < t2.length; n2++) this.engine.write(t2[n2], e8.options);
  }
  cleanup() {
    this.subs.forEach((e8) => e8()), this.subs.length = 0, this.decoder.destroy();
  }
  _close() {
    this.skipReconnect = true, this._reconnecting = false, this.onclose("forced close"), this.engine && this.engine.close();
  }
  disconnect() {
    return this._close();
  }
  onclose(e8, t2) {
    this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", e8, t2), this._reconnection && !this.skipReconnect && this.reconnect();
  }
  reconnect() {
    if (this._reconnecting || this.skipReconnect) return this;
    const e8 = this;
    if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = false;
    else {
      const t2 = this.backoff.duration();
      this._reconnecting = true;
      const n2 = this.setTimeoutFn(() => {
        e8.skipReconnect || (this.emitReserved("reconnect_attempt", e8.backoff.attempts), e8.skipReconnect || e8.open((t3) => {
          t3 ? (e8._reconnecting = false, e8.reconnect(), this.emitReserved("reconnect_error", t3)) : e8.onreconnect();
        }));
      }, t2);
      this.opts.autoUnref && n2.unref(), this.subs.push(() => {
        this.clearTimeoutFn(n2);
      });
    }
  }
  onreconnect() {
    const e8 = this.backoff.attempts;
    this._reconnecting = false, this.backoff.reset(), this.emitReserved("reconnect", e8);
  }
};
var Lt = {};
function Tt(e8, t2) {
  "object" == typeof e8 && (t2 = e8, e8 = void 0);
  const n2 = function(e9, t3 = "", n3) {
    let r3 = e9;
    n3 = n3 || "undefined" != typeof location && location, null == e9 && (e9 = n3.protocol + "//" + n3.host), "string" == typeof e9 && ("/" === e9.charAt(0) && (e9 = "/" === e9.charAt(1) ? n3.protocol + e9 : n3.host + e9), /^(https?|wss?):\/\//.test(e9) || (e9 = void 0 !== n3 ? n3.protocol + "//" + e9 : "https://" + e9), r3 = ot(e9)), r3.port || (/^(http|ws)$/.test(r3.protocol) ? r3.port = "80" : /^(http|ws)s$/.test(r3.protocol) && (r3.port = "443")), r3.path = r3.path || "/";
    const i3 = -1 !== r3.host.indexOf(":") ? "[" + r3.host + "]" : r3.host;
    return r3.id = r3.protocol + "://" + i3 + ":" + r3.port + t3, r3.href = r3.protocol + "://" + i3 + (n3 && n3.port === r3.port ? "" : ":" + r3.port), r3;
  }(e8, (t2 = t2 || {}).path || "/socket.io"), r2 = n2.source, i2 = n2.id, o2 = n2.path, s2 = Lt[i2] && o2 in Lt[i2].nsps;
  let a2;
  return t2.forceNew || t2["force new connection"] || false === t2.multiplex || s2 ? a2 = new Mt(r2, t2) : (Lt[i2] || (Lt[i2] = new Mt(r2, t2)), a2 = Lt[i2]), n2.query && !t2.query && (t2.query = n2.queryKey), a2.socket(n2.path, t2);
}
function Ot(e8, t2, n2, r2) {
  return new (n2 || (n2 = Promise))(function(i2, o2) {
    function s2(e9) {
      try {
        c2(r2.next(e9));
      } catch (e10) {
        o2(e10);
      }
    }
    function a2(e9) {
      try {
        c2(r2.throw(e9));
      } catch (e10) {
        o2(e10);
      }
    }
    function c2(e9) {
      var t3;
      e9.done ? i2(e9.value) : (t3 = e9.value, t3 instanceof n2 ? t3 : new n2(function(e10) {
        e10(t3);
      })).then(s2, a2);
    }
    c2((r2 = r2.apply(e8, t2 || [])).next());
  });
}
Object.assign(Tt, { Manager: Mt, Socket: xt, io: Tt, connect: Tt }), "function" == typeof SuppressedError && SuppressedError;
var Rt = void 0 !== c ? c : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {};
var Pt = [];
var It = [];
var Nt = "undefined" != typeof Uint8Array ? Uint8Array : Array;
var Dt = false;
function Bt() {
  Dt = true;
  for (var e8 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t2 = 0; t2 < 64; ++t2) Pt[t2] = e8[t2], It[e8.charCodeAt(t2)] = t2;
  It["-".charCodeAt(0)] = 62, It["_".charCodeAt(0)] = 63;
}
function $t(e8, t2, n2) {
  for (var r2, i2, o2 = [], s2 = t2; s2 < n2; s2 += 3) r2 = (e8[s2] << 16) + (e8[s2 + 1] << 8) + e8[s2 + 2], o2.push(Pt[(i2 = r2) >> 18 & 63] + Pt[i2 >> 12 & 63] + Pt[i2 >> 6 & 63] + Pt[63 & i2]);
  return o2.join("");
}
function jt(e8) {
  var t2;
  Dt || Bt();
  for (var n2 = e8.length, r2 = n2 % 3, i2 = "", o2 = [], s2 = 16383, a2 = 0, c2 = n2 - r2; a2 < c2; a2 += s2) o2.push($t(e8, a2, a2 + s2 > c2 ? c2 : a2 + s2));
  return 1 === r2 ? (t2 = e8[n2 - 1], i2 += Pt[t2 >> 2], i2 += Pt[t2 << 4 & 63], i2 += "==") : 2 === r2 && (t2 = (e8[n2 - 2] << 8) + e8[n2 - 1], i2 += Pt[t2 >> 10], i2 += Pt[t2 >> 4 & 63], i2 += Pt[t2 << 2 & 63], i2 += "="), o2.push(i2), o2.join("");
}
function Kt(e8, t2, n2, r2, i2) {
  var o2, s2, a2 = 8 * i2 - r2 - 1, c2 = (1 << a2) - 1, l2 = c2 >> 1, d2 = -7, u2 = n2 ? i2 - 1 : 0, h2 = n2 ? -1 : 1, f2 = e8[t2 + u2];
  for (u2 += h2, o2 = f2 & (1 << -d2) - 1, f2 >>= -d2, d2 += a2; d2 > 0; o2 = 256 * o2 + e8[t2 + u2], u2 += h2, d2 -= 8) ;
  for (s2 = o2 & (1 << -d2) - 1, o2 >>= -d2, d2 += r2; d2 > 0; s2 = 256 * s2 + e8[t2 + u2], u2 += h2, d2 -= 8) ;
  if (0 === o2) o2 = 1 - l2;
  else {
    if (o2 === c2) return s2 ? NaN : 1 / 0 * (f2 ? -1 : 1);
    s2 += Math.pow(2, r2), o2 -= l2;
  }
  return (f2 ? -1 : 1) * s2 * Math.pow(2, o2 - r2);
}
function Ft(e8, t2, n2, r2, i2, o2) {
  var s2, a2, c2, l2 = 8 * o2 - i2 - 1, d2 = (1 << l2) - 1, u2 = d2 >> 1, h2 = 23 === i2 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, f2 = r2 ? 0 : o2 - 1, p2 = r2 ? 1 : -1, g2 = t2 < 0 || 0 === t2 && 1 / t2 < 0 ? 1 : 0;
  for (t2 = Math.abs(t2), isNaN(t2) || t2 === 1 / 0 ? (a2 = isNaN(t2) ? 1 : 0, s2 = d2) : (s2 = Math.floor(Math.log(t2) / Math.LN2), t2 * (c2 = Math.pow(2, -s2)) < 1 && (s2--, c2 *= 2), (t2 += s2 + u2 >= 1 ? h2 / c2 : h2 * Math.pow(2, 1 - u2)) * c2 >= 2 && (s2++, c2 /= 2), s2 + u2 >= d2 ? (a2 = 0, s2 = d2) : s2 + u2 >= 1 ? (a2 = (t2 * c2 - 1) * Math.pow(2, i2), s2 += u2) : (a2 = t2 * Math.pow(2, u2 - 1) * Math.pow(2, i2), s2 = 0)); i2 >= 8; e8[n2 + f2] = 255 & a2, f2 += p2, a2 /= 256, i2 -= 8) ;
  for (s2 = s2 << i2 | a2, l2 += i2; l2 > 0; e8[n2 + f2] = 255 & s2, f2 += p2, s2 /= 256, l2 -= 8) ;
  e8[n2 + f2 - p2] |= 128 * g2;
}
var Ut = {}.toString;
var Ht = Array.isArray || function(e8) {
  return "[object Array]" == Ut.call(e8);
};
Wt.TYPED_ARRAY_SUPPORT = void 0 === Rt.TYPED_ARRAY_SUPPORT || Rt.TYPED_ARRAY_SUPPORT;
var zt = qt();
function qt() {
  return Wt.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function Vt(e8, t2) {
  if (qt() < t2) throw new RangeError("Invalid typed array length");
  return Wt.TYPED_ARRAY_SUPPORT ? (e8 = new Uint8Array(t2)).__proto__ = Wt.prototype : (null === e8 && (e8 = new Wt(t2)), e8.length = t2), e8;
}
function Wt(e8, t2, n2) {
  if (!(Wt.TYPED_ARRAY_SUPPORT || this instanceof Wt)) return new Wt(e8, t2, n2);
  if ("number" == typeof e8) {
    if ("string" == typeof t2) throw new Error("If encoding is specified then the first argument must be a string");
    return Zt(this, e8);
  }
  return Gt(this, e8, t2, n2);
}
function Gt(e8, t2, n2, r2) {
  if ("number" == typeof t2) throw new TypeError('"value" argument must not be a number');
  return "undefined" != typeof ArrayBuffer && t2 instanceof ArrayBuffer ? function(e9, t3, n3, r3) {
    if (t3.byteLength, n3 < 0 || t3.byteLength < n3) throw new RangeError("'offset' is out of bounds");
    if (t3.byteLength < n3 + (r3 || 0)) throw new RangeError("'length' is out of bounds");
    return t3 = void 0 === n3 && void 0 === r3 ? new Uint8Array(t3) : void 0 === r3 ? new Uint8Array(t3, n3) : new Uint8Array(t3, n3, r3), Wt.TYPED_ARRAY_SUPPORT ? (e9 = t3).__proto__ = Wt.prototype : e9 = Jt(e9, t3), e9;
  }(e8, t2, n2, r2) : "string" == typeof t2 ? function(e9, t3, n3) {
    if ("string" == typeof n3 && "" !== n3 || (n3 = "utf8"), !Wt.isEncoding(n3)) throw new TypeError('"encoding" must be a valid string encoding');
    var r3 = 0 | en(t3, n3), i2 = (e9 = Vt(e9, r3)).write(t3, n3);
    return i2 !== r3 && (e9 = e9.slice(0, i2)), e9;
  }(e8, t2, n2) : function(e9, t3) {
    if (Qt(t3)) {
      var n3 = 0 | Xt(t3.length);
      return 0 === (e9 = Vt(e9, n3)).length || t3.copy(e9, 0, 0, n3), e9;
    }
    if (t3) {
      if ("undefined" != typeof ArrayBuffer && t3.buffer instanceof ArrayBuffer || "length" in t3) return "number" != typeof t3.length || (r3 = t3.length) != r3 ? Vt(e9, 0) : Jt(e9, t3);
      if ("Buffer" === t3.type && Ht(t3.data)) return Jt(e9, t3.data);
    }
    var r3;
    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
  }(e8, t2);
}
function Yt(e8) {
  if ("number" != typeof e8) throw new TypeError('"size" argument must be a number');
  if (e8 < 0) throw new RangeError('"size" argument must not be negative');
}
function Zt(e8, t2) {
  if (Yt(t2), e8 = Vt(e8, t2 < 0 ? 0 : 0 | Xt(t2)), !Wt.TYPED_ARRAY_SUPPORT) for (var n2 = 0; n2 < t2; ++n2) e8[n2] = 0;
  return e8;
}
function Jt(e8, t2) {
  var n2 = t2.length < 0 ? 0 : 0 | Xt(t2.length);
  e8 = Vt(e8, n2);
  for (var r2 = 0; r2 < n2; r2 += 1) e8[r2] = 255 & t2[r2];
  return e8;
}
function Xt(e8) {
  if (e8 >= qt()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + qt().toString(16) + " bytes");
  return 0 | e8;
}
function Qt(e8) {
  return !(null == e8 || !e8._isBuffer);
}
function en(e8, t2) {
  if (Qt(e8)) return e8.length;
  if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e8) || e8 instanceof ArrayBuffer)) return e8.byteLength;
  "string" != typeof e8 && (e8 = "" + e8);
  var n2 = e8.length;
  if (0 === n2) return 0;
  for (var r2 = false; ; ) switch (t2) {
    case "ascii":
    case "latin1":
    case "binary":
      return n2;
    case "utf8":
    case "utf-8":
    case void 0:
      return Mn(e8).length;
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return 2 * n2;
    case "hex":
      return n2 >>> 1;
    case "base64":
      return Ln(e8).length;
    default:
      if (r2) return Mn(e8).length;
      t2 = ("" + t2).toLowerCase(), r2 = true;
  }
}
function tn(e8, t2, n2) {
  var r2 = false;
  if ((void 0 === t2 || t2 < 0) && (t2 = 0), t2 > this.length) return "";
  if ((void 0 === n2 || n2 > this.length) && (n2 = this.length), n2 <= 0) return "";
  if ((n2 >>>= 0) <= (t2 >>>= 0)) return "";
  for (e8 || (e8 = "utf8"); ; ) switch (e8) {
    case "hex":
      return yn(this, t2, n2);
    case "utf8":
    case "utf-8":
      return fn(this, t2, n2);
    case "ascii":
      return gn(this, t2, n2);
    case "latin1":
    case "binary":
      return mn(this, t2, n2);
    case "base64":
      return hn(this, t2, n2);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return vn(this, t2, n2);
    default:
      if (r2) throw new TypeError("Unknown encoding: " + e8);
      e8 = (e8 + "").toLowerCase(), r2 = true;
  }
}
function nn(e8, t2, n2) {
  var r2 = e8[t2];
  e8[t2] = e8[n2], e8[n2] = r2;
}
function rn(e8, t2, n2, r2, i2) {
  if (0 === e8.length) return -1;
  if ("string" == typeof n2 ? (r2 = n2, n2 = 0) : n2 > 2147483647 ? n2 = 2147483647 : n2 < -2147483648 && (n2 = -2147483648), n2 = +n2, isNaN(n2) && (n2 = i2 ? 0 : e8.length - 1), n2 < 0 && (n2 = e8.length + n2), n2 >= e8.length) {
    if (i2) return -1;
    n2 = e8.length - 1;
  } else if (n2 < 0) {
    if (!i2) return -1;
    n2 = 0;
  }
  if ("string" == typeof t2 && (t2 = Wt.from(t2, r2)), Qt(t2)) return 0 === t2.length ? -1 : on(e8, t2, n2, r2, i2);
  if ("number" == typeof t2) return t2 &= 255, Wt.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i2 ? Uint8Array.prototype.indexOf.call(e8, t2, n2) : Uint8Array.prototype.lastIndexOf.call(e8, t2, n2) : on(e8, [t2], n2, r2, i2);
  throw new TypeError("val must be string, number or Buffer");
}
function on(e8, t2, n2, r2, i2) {
  var o2, s2 = 1, a2 = e8.length, c2 = t2.length;
  if (void 0 !== r2 && ("ucs2" === (r2 = String(r2).toLowerCase()) || "ucs-2" === r2 || "utf16le" === r2 || "utf-16le" === r2)) {
    if (e8.length < 2 || t2.length < 2) return -1;
    s2 = 2, a2 /= 2, c2 /= 2, n2 /= 2;
  }
  function l2(e9, t3) {
    return 1 === s2 ? e9[t3] : e9.readUInt16BE(t3 * s2);
  }
  if (i2) {
    var d2 = -1;
    for (o2 = n2; o2 < a2; o2++) if (l2(e8, o2) === l2(t2, -1 === d2 ? 0 : o2 - d2)) {
      if (-1 === d2 && (d2 = o2), o2 - d2 + 1 === c2) return d2 * s2;
    } else -1 !== d2 && (o2 -= o2 - d2), d2 = -1;
  } else for (n2 + c2 > a2 && (n2 = a2 - c2), o2 = n2; o2 >= 0; o2--) {
    for (var u2 = true, h2 = 0; h2 < c2; h2++) if (l2(e8, o2 + h2) !== l2(t2, h2)) {
      u2 = false;
      break;
    }
    if (u2) return o2;
  }
  return -1;
}
function sn(e8, t2, n2, r2) {
  n2 = Number(n2) || 0;
  var i2 = e8.length - n2;
  r2 ? (r2 = Number(r2)) > i2 && (r2 = i2) : r2 = i2;
  var o2 = t2.length;
  if (o2 % 2 != 0) throw new TypeError("Invalid hex string");
  r2 > o2 / 2 && (r2 = o2 / 2);
  for (var s2 = 0; s2 < r2; ++s2) {
    var a2 = parseInt(t2.substr(2 * s2, 2), 16);
    if (isNaN(a2)) return s2;
    e8[n2 + s2] = a2;
  }
  return s2;
}
function an(e8, t2, n2, r2) {
  return Tn(Mn(t2, e8.length - n2), e8, n2, r2);
}
function cn(e8, t2, n2, r2) {
  return Tn(function(e9) {
    for (var t3 = [], n3 = 0; n3 < e9.length; ++n3) t3.push(255 & e9.charCodeAt(n3));
    return t3;
  }(t2), e8, n2, r2);
}
function ln(e8, t2, n2, r2) {
  return cn(e8, t2, n2, r2);
}
function dn(e8, t2, n2, r2) {
  return Tn(Ln(t2), e8, n2, r2);
}
function un(e8, t2, n2, r2) {
  return Tn(function(e9, t3) {
    for (var n3, r3, i2, o2 = [], s2 = 0; s2 < e9.length && !((t3 -= 2) < 0); ++s2) r3 = (n3 = e9.charCodeAt(s2)) >> 8, i2 = n3 % 256, o2.push(i2), o2.push(r3);
    return o2;
  }(t2, e8.length - n2), e8, n2, r2);
}
function hn(e8, t2, n2) {
  return 0 === t2 && n2 === e8.length ? jt(e8) : jt(e8.slice(t2, n2));
}
function fn(e8, t2, n2) {
  n2 = Math.min(e8.length, n2);
  for (var r2 = [], i2 = t2; i2 < n2; ) {
    var o2, s2, a2, c2, l2 = e8[i2], d2 = null, u2 = l2 > 239 ? 4 : l2 > 223 ? 3 : l2 > 191 ? 2 : 1;
    if (i2 + u2 <= n2) switch (u2) {
      case 1:
        l2 < 128 && (d2 = l2);
        break;
      case 2:
        128 == (192 & (o2 = e8[i2 + 1])) && (c2 = (31 & l2) << 6 | 63 & o2) > 127 && (d2 = c2);
        break;
      case 3:
        o2 = e8[i2 + 1], s2 = e8[i2 + 2], 128 == (192 & o2) && 128 == (192 & s2) && (c2 = (15 & l2) << 12 | (63 & o2) << 6 | 63 & s2) > 2047 && (c2 < 55296 || c2 > 57343) && (d2 = c2);
        break;
      case 4:
        o2 = e8[i2 + 1], s2 = e8[i2 + 2], a2 = e8[i2 + 3], 128 == (192 & o2) && 128 == (192 & s2) && 128 == (192 & a2) && (c2 = (15 & l2) << 18 | (63 & o2) << 12 | (63 & s2) << 6 | 63 & a2) > 65535 && c2 < 1114112 && (d2 = c2);
    }
    null === d2 ? (d2 = 65533, u2 = 1) : d2 > 65535 && (d2 -= 65536, r2.push(d2 >>> 10 & 1023 | 55296), d2 = 56320 | 1023 & d2), r2.push(d2), i2 += u2;
  }
  return function(e9) {
    var t3 = e9.length;
    if (t3 <= pn) return String.fromCharCode.apply(String, e9);
    for (var n3 = "", r3 = 0; r3 < t3; ) n3 += String.fromCharCode.apply(String, e9.slice(r3, r3 += pn));
    return n3;
  }(r2);
}
Wt.poolSize = 8192, Wt._augment = function(e8) {
  return e8.__proto__ = Wt.prototype, e8;
}, Wt.from = function(e8, t2, n2) {
  return Gt(null, e8, t2, n2);
}, Wt.TYPED_ARRAY_SUPPORT && (Wt.prototype.__proto__ = Uint8Array.prototype, Wt.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && Wt[Symbol.species]), Wt.alloc = function(e8, t2, n2) {
  return function(e9, t3, n3, r2) {
    return Yt(t3), t3 <= 0 ? Vt(e9, t3) : void 0 !== n3 ? "string" == typeof r2 ? Vt(e9, t3).fill(n3, r2) : Vt(e9, t3).fill(n3) : Vt(e9, t3);
  }(null, e8, t2, n2);
}, Wt.allocUnsafe = function(e8) {
  return Zt(null, e8);
}, Wt.allocUnsafeSlow = function(e8) {
  return Zt(null, e8);
}, Wt.isBuffer = On, Wt.compare = function(e8, t2) {
  if (!Qt(e8) || !Qt(t2)) throw new TypeError("Arguments must be Buffers");
  if (e8 === t2) return 0;
  for (var n2 = e8.length, r2 = t2.length, i2 = 0, o2 = Math.min(n2, r2); i2 < o2; ++i2) if (e8[i2] !== t2[i2]) {
    n2 = e8[i2], r2 = t2[i2];
    break;
  }
  return n2 < r2 ? -1 : r2 < n2 ? 1 : 0;
}, Wt.isEncoding = function(e8) {
  switch (String(e8).toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
}, Wt.concat = function(e8, t2) {
  if (!Ht(e8)) throw new TypeError('"list" argument must be an Array of Buffers');
  if (0 === e8.length) return Wt.alloc(0);
  var n2;
  if (void 0 === t2) for (t2 = 0, n2 = 0; n2 < e8.length; ++n2) t2 += e8[n2].length;
  var r2 = Wt.allocUnsafe(t2), i2 = 0;
  for (n2 = 0; n2 < e8.length; ++n2) {
    var o2 = e8[n2];
    if (!Qt(o2)) throw new TypeError('"list" argument must be an Array of Buffers');
    o2.copy(r2, i2), i2 += o2.length;
  }
  return r2;
}, Wt.byteLength = en, Wt.prototype._isBuffer = true, Wt.prototype.swap16 = function() {
  var e8 = this.length;
  if (e8 % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
  for (var t2 = 0; t2 < e8; t2 += 2) nn(this, t2, t2 + 1);
  return this;
}, Wt.prototype.swap32 = function() {
  var e8 = this.length;
  if (e8 % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
  for (var t2 = 0; t2 < e8; t2 += 4) nn(this, t2, t2 + 3), nn(this, t2 + 1, t2 + 2);
  return this;
}, Wt.prototype.swap64 = function() {
  var e8 = this.length;
  if (e8 % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
  for (var t2 = 0; t2 < e8; t2 += 8) nn(this, t2, t2 + 7), nn(this, t2 + 1, t2 + 6), nn(this, t2 + 2, t2 + 5), nn(this, t2 + 3, t2 + 4);
  return this;
}, Wt.prototype.toString = function() {
  var e8 = 0 | this.length;
  return 0 === e8 ? "" : 0 === arguments.length ? fn(this, 0, e8) : tn.apply(this, arguments);
}, Wt.prototype.equals = function(e8) {
  if (!Qt(e8)) throw new TypeError("Argument must be a Buffer");
  return this === e8 || 0 === Wt.compare(this, e8);
}, Wt.prototype.inspect = function() {
  var e8 = "";
  return this.length > 0 && (e8 = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e8 += " ... ")), "<Buffer " + e8 + ">";
}, Wt.prototype.compare = function(e8, t2, n2, r2, i2) {
  if (!Qt(e8)) throw new TypeError("Argument must be a Buffer");
  if (void 0 === t2 && (t2 = 0), void 0 === n2 && (n2 = e8 ? e8.length : 0), void 0 === r2 && (r2 = 0), void 0 === i2 && (i2 = this.length), t2 < 0 || n2 > e8.length || r2 < 0 || i2 > this.length) throw new RangeError("out of range index");
  if (r2 >= i2 && t2 >= n2) return 0;
  if (r2 >= i2) return -1;
  if (t2 >= n2) return 1;
  if (this === e8) return 0;
  for (var o2 = (i2 >>>= 0) - (r2 >>>= 0), s2 = (n2 >>>= 0) - (t2 >>>= 0), a2 = Math.min(o2, s2), c2 = this.slice(r2, i2), l2 = e8.slice(t2, n2), d2 = 0; d2 < a2; ++d2) if (c2[d2] !== l2[d2]) {
    o2 = c2[d2], s2 = l2[d2];
    break;
  }
  return o2 < s2 ? -1 : s2 < o2 ? 1 : 0;
}, Wt.prototype.includes = function(e8, t2, n2) {
  return -1 !== this.indexOf(e8, t2, n2);
}, Wt.prototype.indexOf = function(e8, t2, n2) {
  return rn(this, e8, t2, n2, true);
}, Wt.prototype.lastIndexOf = function(e8, t2, n2) {
  return rn(this, e8, t2, n2, false);
}, Wt.prototype.write = function(e8, t2, n2, r2) {
  if (void 0 === t2) r2 = "utf8", n2 = this.length, t2 = 0;
  else if (void 0 === n2 && "string" == typeof t2) r2 = t2, n2 = this.length, t2 = 0;
  else {
    if (!isFinite(t2)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    t2 |= 0, isFinite(n2) ? (n2 |= 0, void 0 === r2 && (r2 = "utf8")) : (r2 = n2, n2 = void 0);
  }
  var i2 = this.length - t2;
  if ((void 0 === n2 || n2 > i2) && (n2 = i2), e8.length > 0 && (n2 < 0 || t2 < 0) || t2 > this.length) throw new RangeError("Attempt to write outside buffer bounds");
  r2 || (r2 = "utf8");
  for (var o2 = false; ; ) switch (r2) {
    case "hex":
      return sn(this, e8, t2, n2);
    case "utf8":
    case "utf-8":
      return an(this, e8, t2, n2);
    case "ascii":
      return cn(this, e8, t2, n2);
    case "latin1":
    case "binary":
      return ln(this, e8, t2, n2);
    case "base64":
      return dn(this, e8, t2, n2);
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return un(this, e8, t2, n2);
    default:
      if (o2) throw new TypeError("Unknown encoding: " + r2);
      r2 = ("" + r2).toLowerCase(), o2 = true;
  }
}, Wt.prototype.toJSON = function() {
  return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
};
var pn = 4096;
function gn(e8, t2, n2) {
  var r2 = "";
  n2 = Math.min(e8.length, n2);
  for (var i2 = t2; i2 < n2; ++i2) r2 += String.fromCharCode(127 & e8[i2]);
  return r2;
}
function mn(e8, t2, n2) {
  var r2 = "";
  n2 = Math.min(e8.length, n2);
  for (var i2 = t2; i2 < n2; ++i2) r2 += String.fromCharCode(e8[i2]);
  return r2;
}
function yn(e8, t2, n2) {
  var r2 = e8.length;
  (!t2 || t2 < 0) && (t2 = 0), (!n2 || n2 < 0 || n2 > r2) && (n2 = r2);
  for (var i2 = "", o2 = t2; o2 < n2; ++o2) i2 += An(e8[o2]);
  return i2;
}
function vn(e8, t2, n2) {
  for (var r2 = e8.slice(t2, n2), i2 = "", o2 = 0; o2 < r2.length; o2 += 2) i2 += String.fromCharCode(r2[o2] + 256 * r2[o2 + 1]);
  return i2;
}
function bn(e8, t2, n2) {
  if (e8 % 1 != 0 || e8 < 0) throw new RangeError("offset is not uint");
  if (e8 + t2 > n2) throw new RangeError("Trying to access beyond buffer length");
}
function wn(e8, t2, n2, r2, i2, o2) {
  if (!Qt(e8)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (t2 > i2 || t2 < o2) throw new RangeError('"value" argument is out of bounds');
  if (n2 + r2 > e8.length) throw new RangeError("Index out of range");
}
function En(e8, t2, n2, r2) {
  t2 < 0 && (t2 = 65535 + t2 + 1);
  for (var i2 = 0, o2 = Math.min(e8.length - n2, 2); i2 < o2; ++i2) e8[n2 + i2] = (t2 & 255 << 8 * (r2 ? i2 : 1 - i2)) >>> 8 * (r2 ? i2 : 1 - i2);
}
function Cn(e8, t2, n2, r2) {
  t2 < 0 && (t2 = 4294967295 + t2 + 1);
  for (var i2 = 0, o2 = Math.min(e8.length - n2, 4); i2 < o2; ++i2) e8[n2 + i2] = t2 >>> 8 * (r2 ? i2 : 3 - i2) & 255;
}
function _n(e8, t2, n2, r2, i2, o2) {
  if (n2 + r2 > e8.length) throw new RangeError("Index out of range");
  if (n2 < 0) throw new RangeError("Index out of range");
}
function Sn(e8, t2, n2, r2, i2) {
  return i2 || _n(e8, 0, n2, 4), Ft(e8, t2, n2, r2, 23, 4), n2 + 4;
}
function kn(e8, t2, n2, r2, i2) {
  return i2 || _n(e8, 0, n2, 8), Ft(e8, t2, n2, r2, 52, 8), n2 + 8;
}
Wt.prototype.slice = function(e8, t2) {
  var n2, r2 = this.length;
  if ((e8 = ~~e8) < 0 ? (e8 += r2) < 0 && (e8 = 0) : e8 > r2 && (e8 = r2), (t2 = void 0 === t2 ? r2 : ~~t2) < 0 ? (t2 += r2) < 0 && (t2 = 0) : t2 > r2 && (t2 = r2), t2 < e8 && (t2 = e8), Wt.TYPED_ARRAY_SUPPORT) (n2 = this.subarray(e8, t2)).__proto__ = Wt.prototype;
  else {
    var i2 = t2 - e8;
    n2 = new Wt(i2, void 0);
    for (var o2 = 0; o2 < i2; ++o2) n2[o2] = this[o2 + e8];
  }
  return n2;
}, Wt.prototype.readUIntLE = function(e8, t2, n2) {
  e8 |= 0, t2 |= 0, n2 || bn(e8, t2, this.length);
  for (var r2 = this[e8], i2 = 1, o2 = 0; ++o2 < t2 && (i2 *= 256); ) r2 += this[e8 + o2] * i2;
  return r2;
}, Wt.prototype.readUIntBE = function(e8, t2, n2) {
  e8 |= 0, t2 |= 0, n2 || bn(e8, t2, this.length);
  for (var r2 = this[e8 + --t2], i2 = 1; t2 > 0 && (i2 *= 256); ) r2 += this[e8 + --t2] * i2;
  return r2;
}, Wt.prototype.readUInt8 = function(e8, t2) {
  return t2 || bn(e8, 1, this.length), this[e8];
}, Wt.prototype.readUInt16LE = function(e8, t2) {
  return t2 || bn(e8, 2, this.length), this[e8] | this[e8 + 1] << 8;
}, Wt.prototype.readUInt16BE = function(e8, t2) {
  return t2 || bn(e8, 2, this.length), this[e8] << 8 | this[e8 + 1];
}, Wt.prototype.readUInt32LE = function(e8, t2) {
  return t2 || bn(e8, 4, this.length), (this[e8] | this[e8 + 1] << 8 | this[e8 + 2] << 16) + 16777216 * this[e8 + 3];
}, Wt.prototype.readUInt32BE = function(e8, t2) {
  return t2 || bn(e8, 4, this.length), 16777216 * this[e8] + (this[e8 + 1] << 16 | this[e8 + 2] << 8 | this[e8 + 3]);
}, Wt.prototype.readIntLE = function(e8, t2, n2) {
  e8 |= 0, t2 |= 0, n2 || bn(e8, t2, this.length);
  for (var r2 = this[e8], i2 = 1, o2 = 0; ++o2 < t2 && (i2 *= 256); ) r2 += this[e8 + o2] * i2;
  return r2 >= (i2 *= 128) && (r2 -= Math.pow(2, 8 * t2)), r2;
}, Wt.prototype.readIntBE = function(e8, t2, n2) {
  e8 |= 0, t2 |= 0, n2 || bn(e8, t2, this.length);
  for (var r2 = t2, i2 = 1, o2 = this[e8 + --r2]; r2 > 0 && (i2 *= 256); ) o2 += this[e8 + --r2] * i2;
  return o2 >= (i2 *= 128) && (o2 -= Math.pow(2, 8 * t2)), o2;
}, Wt.prototype.readInt8 = function(e8, t2) {
  return t2 || bn(e8, 1, this.length), 128 & this[e8] ? -1 * (255 - this[e8] + 1) : this[e8];
}, Wt.prototype.readInt16LE = function(e8, t2) {
  t2 || bn(e8, 2, this.length);
  var n2 = this[e8] | this[e8 + 1] << 8;
  return 32768 & n2 ? 4294901760 | n2 : n2;
}, Wt.prototype.readInt16BE = function(e8, t2) {
  t2 || bn(e8, 2, this.length);
  var n2 = this[e8 + 1] | this[e8] << 8;
  return 32768 & n2 ? 4294901760 | n2 : n2;
}, Wt.prototype.readInt32LE = function(e8, t2) {
  return t2 || bn(e8, 4, this.length), this[e8] | this[e8 + 1] << 8 | this[e8 + 2] << 16 | this[e8 + 3] << 24;
}, Wt.prototype.readInt32BE = function(e8, t2) {
  return t2 || bn(e8, 4, this.length), this[e8] << 24 | this[e8 + 1] << 16 | this[e8 + 2] << 8 | this[e8 + 3];
}, Wt.prototype.readFloatLE = function(e8, t2) {
  return t2 || bn(e8, 4, this.length), Kt(this, e8, true, 23, 4);
}, Wt.prototype.readFloatBE = function(e8, t2) {
  return t2 || bn(e8, 4, this.length), Kt(this, e8, false, 23, 4);
}, Wt.prototype.readDoubleLE = function(e8, t2) {
  return t2 || bn(e8, 8, this.length), Kt(this, e8, true, 52, 8);
}, Wt.prototype.readDoubleBE = function(e8, t2) {
  return t2 || bn(e8, 8, this.length), Kt(this, e8, false, 52, 8);
}, Wt.prototype.writeUIntLE = function(e8, t2, n2, r2) {
  e8 = +e8, t2 |= 0, n2 |= 0, r2 || wn(this, e8, t2, n2, Math.pow(2, 8 * n2) - 1, 0);
  var i2 = 1, o2 = 0;
  for (this[t2] = 255 & e8; ++o2 < n2 && (i2 *= 256); ) this[t2 + o2] = e8 / i2 & 255;
  return t2 + n2;
}, Wt.prototype.writeUIntBE = function(e8, t2, n2, r2) {
  e8 = +e8, t2 |= 0, n2 |= 0, r2 || wn(this, e8, t2, n2, Math.pow(2, 8 * n2) - 1, 0);
  var i2 = n2 - 1, o2 = 1;
  for (this[t2 + i2] = 255 & e8; --i2 >= 0 && (o2 *= 256); ) this[t2 + i2] = e8 / o2 & 255;
  return t2 + n2;
}, Wt.prototype.writeUInt8 = function(e8, t2, n2) {
  return e8 = +e8, t2 |= 0, n2 || wn(this, e8, t2, 1, 255, 0), Wt.TYPED_ARRAY_SUPPORT || (e8 = Math.floor(e8)), this[t2] = 255 & e8, t2 + 1;
}, Wt.prototype.writeUInt16LE = function(e8, t2, n2) {
  return e8 = +e8, t2 |= 0, n2 || wn(this, e8, t2, 2, 65535, 0), Wt.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e8, this[t2 + 1] = e8 >>> 8) : En(this, e8, t2, true), t2 + 2;
}, Wt.prototype.writeUInt16BE = function(e8, t2, n2) {
  return e8 = +e8, t2 |= 0, n2 || wn(this, e8, t2, 2, 65535, 0), Wt.TYPED_ARRAY_SUPPORT ? (this[t2] = e8 >>> 8, this[t2 + 1] = 255 & e8) : En(this, e8, t2, false), t2 + 2;
}, Wt.prototype.writeUInt32LE = function(e8, t2, n2) {
  return e8 = +e8, t2 |= 0, n2 || wn(this, e8, t2, 4, 4294967295, 0), Wt.TYPED_ARRAY_SUPPORT ? (this[t2 + 3] = e8 >>> 24, this[t2 + 2] = e8 >>> 16, this[t2 + 1] = e8 >>> 8, this[t2] = 255 & e8) : Cn(this, e8, t2, true), t2 + 4;
}, Wt.prototype.writeUInt32BE = function(e8, t2, n2) {
  return e8 = +e8, t2 |= 0, n2 || wn(this, e8, t2, 4, 4294967295, 0), Wt.TYPED_ARRAY_SUPPORT ? (this[t2] = e8 >>> 24, this[t2 + 1] = e8 >>> 16, this[t2 + 2] = e8 >>> 8, this[t2 + 3] = 255 & e8) : Cn(this, e8, t2, false), t2 + 4;
}, Wt.prototype.writeIntLE = function(e8, t2, n2, r2) {
  if (e8 = +e8, t2 |= 0, !r2) {
    var i2 = Math.pow(2, 8 * n2 - 1);
    wn(this, e8, t2, n2, i2 - 1, -i2);
  }
  var o2 = 0, s2 = 1, a2 = 0;
  for (this[t2] = 255 & e8; ++o2 < n2 && (s2 *= 256); ) e8 < 0 && 0 === a2 && 0 !== this[t2 + o2 - 1] && (a2 = 1), this[t2 + o2] = (e8 / s2 >> 0) - a2 & 255;
  return t2 + n2;
}, Wt.prototype.writeIntBE = function(e8, t2, n2, r2) {
  if (e8 = +e8, t2 |= 0, !r2) {
    var i2 = Math.pow(2, 8 * n2 - 1);
    wn(this, e8, t2, n2, i2 - 1, -i2);
  }
  var o2 = n2 - 1, s2 = 1, a2 = 0;
  for (this[t2 + o2] = 255 & e8; --o2 >= 0 && (s2 *= 256); ) e8 < 0 && 0 === a2 && 0 !== this[t2 + o2 + 1] && (a2 = 1), this[t2 + o2] = (e8 / s2 >> 0) - a2 & 255;
  return t2 + n2;
}, Wt.prototype.writeInt8 = function(e8, t2, n2) {
  return e8 = +e8, t2 |= 0, n2 || wn(this, e8, t2, 1, 127, -128), Wt.TYPED_ARRAY_SUPPORT || (e8 = Math.floor(e8)), e8 < 0 && (e8 = 255 + e8 + 1), this[t2] = 255 & e8, t2 + 1;
}, Wt.prototype.writeInt16LE = function(e8, t2, n2) {
  return e8 = +e8, t2 |= 0, n2 || wn(this, e8, t2, 2, 32767, -32768), Wt.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e8, this[t2 + 1] = e8 >>> 8) : En(this, e8, t2, true), t2 + 2;
}, Wt.prototype.writeInt16BE = function(e8, t2, n2) {
  return e8 = +e8, t2 |= 0, n2 || wn(this, e8, t2, 2, 32767, -32768), Wt.TYPED_ARRAY_SUPPORT ? (this[t2] = e8 >>> 8, this[t2 + 1] = 255 & e8) : En(this, e8, t2, false), t2 + 2;
}, Wt.prototype.writeInt32LE = function(e8, t2, n2) {
  return e8 = +e8, t2 |= 0, n2 || wn(this, e8, t2, 4, 2147483647, -2147483648), Wt.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e8, this[t2 + 1] = e8 >>> 8, this[t2 + 2] = e8 >>> 16, this[t2 + 3] = e8 >>> 24) : Cn(this, e8, t2, true), t2 + 4;
}, Wt.prototype.writeInt32BE = function(e8, t2, n2) {
  return e8 = +e8, t2 |= 0, n2 || wn(this, e8, t2, 4, 2147483647, -2147483648), e8 < 0 && (e8 = 4294967295 + e8 + 1), Wt.TYPED_ARRAY_SUPPORT ? (this[t2] = e8 >>> 24, this[t2 + 1] = e8 >>> 16, this[t2 + 2] = e8 >>> 8, this[t2 + 3] = 255 & e8) : Cn(this, e8, t2, false), t2 + 4;
}, Wt.prototype.writeFloatLE = function(e8, t2, n2) {
  return Sn(this, e8, t2, true, n2);
}, Wt.prototype.writeFloatBE = function(e8, t2, n2) {
  return Sn(this, e8, t2, false, n2);
}, Wt.prototype.writeDoubleLE = function(e8, t2, n2) {
  return kn(this, e8, t2, true, n2);
}, Wt.prototype.writeDoubleBE = function(e8, t2, n2) {
  return kn(this, e8, t2, false, n2);
}, Wt.prototype.copy = function(e8, t2, n2, r2) {
  if (n2 || (n2 = 0), r2 || 0 === r2 || (r2 = this.length), t2 >= e8.length && (t2 = e8.length), t2 || (t2 = 0), r2 > 0 && r2 < n2 && (r2 = n2), r2 === n2) return 0;
  if (0 === e8.length || 0 === this.length) return 0;
  if (t2 < 0) throw new RangeError("targetStart out of bounds");
  if (n2 < 0 || n2 >= this.length) throw new RangeError("sourceStart out of bounds");
  if (r2 < 0) throw new RangeError("sourceEnd out of bounds");
  r2 > this.length && (r2 = this.length), e8.length - t2 < r2 - n2 && (r2 = e8.length - t2 + n2);
  var i2, o2 = r2 - n2;
  if (this === e8 && n2 < t2 && t2 < r2) for (i2 = o2 - 1; i2 >= 0; --i2) e8[i2 + t2] = this[i2 + n2];
  else if (o2 < 1e3 || !Wt.TYPED_ARRAY_SUPPORT) for (i2 = 0; i2 < o2; ++i2) e8[i2 + t2] = this[i2 + n2];
  else Uint8Array.prototype.set.call(e8, this.subarray(n2, n2 + o2), t2);
  return o2;
}, Wt.prototype.fill = function(e8, t2, n2, r2) {
  if ("string" == typeof e8) {
    if ("string" == typeof t2 ? (r2 = t2, t2 = 0, n2 = this.length) : "string" == typeof n2 && (r2 = n2, n2 = this.length), 1 === e8.length) {
      var i2 = e8.charCodeAt(0);
      i2 < 256 && (e8 = i2);
    }
    if (void 0 !== r2 && "string" != typeof r2) throw new TypeError("encoding must be a string");
    if ("string" == typeof r2 && !Wt.isEncoding(r2)) throw new TypeError("Unknown encoding: " + r2);
  } else "number" == typeof e8 && (e8 &= 255);
  if (t2 < 0 || this.length < t2 || this.length < n2) throw new RangeError("Out of range index");
  if (n2 <= t2) return this;
  var o2;
  if (t2 >>>= 0, n2 = void 0 === n2 ? this.length : n2 >>> 0, e8 || (e8 = 0), "number" == typeof e8) for (o2 = t2; o2 < n2; ++o2) this[o2] = e8;
  else {
    var s2 = Qt(e8) ? e8 : Mn(new Wt(e8, r2).toString()), a2 = s2.length;
    for (o2 = 0; o2 < n2 - t2; ++o2) this[o2 + t2] = s2[o2 % a2];
  }
  return this;
};
var xn = /[^+\/0-9A-Za-z-_]/g;
function An(e8) {
  return e8 < 16 ? "0" + e8.toString(16) : e8.toString(16);
}
function Mn(e8, t2) {
  var n2;
  t2 = t2 || 1 / 0;
  for (var r2 = e8.length, i2 = null, o2 = [], s2 = 0; s2 < r2; ++s2) {
    if ((n2 = e8.charCodeAt(s2)) > 55295 && n2 < 57344) {
      if (!i2) {
        if (n2 > 56319) {
          (t2 -= 3) > -1 && o2.push(239, 191, 189);
          continue;
        }
        if (s2 + 1 === r2) {
          (t2 -= 3) > -1 && o2.push(239, 191, 189);
          continue;
        }
        i2 = n2;
        continue;
      }
      if (n2 < 56320) {
        (t2 -= 3) > -1 && o2.push(239, 191, 189), i2 = n2;
        continue;
      }
      n2 = 65536 + (i2 - 55296 << 10 | n2 - 56320);
    } else i2 && (t2 -= 3) > -1 && o2.push(239, 191, 189);
    if (i2 = null, n2 < 128) {
      if ((t2 -= 1) < 0) break;
      o2.push(n2);
    } else if (n2 < 2048) {
      if ((t2 -= 2) < 0) break;
      o2.push(n2 >> 6 | 192, 63 & n2 | 128);
    } else if (n2 < 65536) {
      if ((t2 -= 3) < 0) break;
      o2.push(n2 >> 12 | 224, n2 >> 6 & 63 | 128, 63 & n2 | 128);
    } else {
      if (!(n2 < 1114112)) throw new Error("Invalid code point");
      if ((t2 -= 4) < 0) break;
      o2.push(n2 >> 18 | 240, n2 >> 12 & 63 | 128, n2 >> 6 & 63 | 128, 63 & n2 | 128);
    }
  }
  return o2;
}
function Ln(e8) {
  return function(e9) {
    var t2, n2, r2, i2, o2, s2;
    Dt || Bt();
    var a2 = e9.length;
    if (a2 % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    o2 = "=" === e9[a2 - 2] ? 2 : "=" === e9[a2 - 1] ? 1 : 0, s2 = new Nt(3 * a2 / 4 - o2), r2 = o2 > 0 ? a2 - 4 : a2;
    var c2 = 0;
    for (t2 = 0, n2 = 0; t2 < r2; t2 += 4, n2 += 3) i2 = It[e9.charCodeAt(t2)] << 18 | It[e9.charCodeAt(t2 + 1)] << 12 | It[e9.charCodeAt(t2 + 2)] << 6 | It[e9.charCodeAt(t2 + 3)], s2[c2++] = i2 >> 16 & 255, s2[c2++] = i2 >> 8 & 255, s2[c2++] = 255 & i2;
    return 2 === o2 ? (i2 = It[e9.charCodeAt(t2)] << 2 | It[e9.charCodeAt(t2 + 1)] >> 4, s2[c2++] = 255 & i2) : 1 === o2 && (i2 = It[e9.charCodeAt(t2)] << 10 | It[e9.charCodeAt(t2 + 1)] << 4 | It[e9.charCodeAt(t2 + 2)] >> 2, s2[c2++] = i2 >> 8 & 255, s2[c2++] = 255 & i2), s2;
  }(function(e9) {
    if ((e9 = function(e10) {
      return e10.trim ? e10.trim() : e10.replace(/^\s+|\s+$/g, "");
    }(e9).replace(xn, "")).length < 2) return "";
    for (; e9.length % 4 != 0; ) e9 += "=";
    return e9;
  }(e8));
}
function Tn(e8, t2, n2, r2) {
  for (var i2 = 0; i2 < r2 && !(i2 + n2 >= t2.length || i2 >= e8.length); ++i2) t2[i2 + n2] = e8[i2];
  return i2;
}
function On(e8) {
  return null != e8 && (!!e8._isBuffer || Rn(e8) || function(e9) {
    return "function" == typeof e9.readFloatLE && "function" == typeof e9.slice && Rn(e9.slice(0, 0));
  }(e8));
}
function Rn(e8) {
  return !!e8.constructor && "function" == typeof e8.constructor.isBuffer && e8.constructor.isBuffer(e8);
}
var Pn = Object.freeze({ __proto__: null, Buffer: Wt, INSPECT_MAX_BYTES: 50, SlowBuffer: function(e8) {
  return +e8 != e8 && (e8 = 0), Wt.alloc(+e8);
}, isBuffer: On, kMaxLength: zt });
var In = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== c ? c : "undefined" != typeof self ? self : {};
function Nn(e8) {
  return e8 && e8.__esModule && Object.prototype.hasOwnProperty.call(e8, "default") ? e8.default : e8;
}
function Dn(e8) {
  if (e8.__esModule) return e8;
  var t2 = e8.default;
  if ("function" == typeof t2) {
    var n2 = function e9() {
      return this instanceof e9 ? Reflect.construct(t2, arguments, this.constructor) : t2.apply(this, arguments);
    };
    n2.prototype = t2.prototype;
  } else n2 = {};
  return Object.defineProperty(n2, "__esModule", { value: true }), Object.keys(e8).forEach(function(t3) {
    var r2 = Object.getOwnPropertyDescriptor(e8, t3);
    Object.defineProperty(n2, t3, r2.get ? r2 : { enumerable: true, get: function() {
      return e8[t3];
    } });
  }), n2;
}
var Bn = {};
var $n = {};
var jn = {};
function Kn(e8) {
  if (!Number.isSafeInteger(e8) || e8 < 0) throw new Error(`positive integer expected, not ${e8}`);
}
function Fn(e8) {
  if ("boolean" != typeof e8) throw new Error(`boolean expected, not ${e8}`);
}
function Un(e8) {
  return e8 instanceof Uint8Array || null != e8 && "object" == typeof e8 && "Uint8Array" === e8.constructor.name;
}
function Hn(e8, ...t2) {
  if (!Un(e8)) throw new Error("Uint8Array expected");
  if (t2.length > 0 && !t2.includes(e8.length)) throw new Error(`Uint8Array expected of length ${t2}, not of length=${e8.length}`);
}
function zn(e8) {
  if ("function" != typeof e8 || "function" != typeof e8.create) throw new Error("hash must be wrapped by utils.wrapConstructor");
  Kn(e8.outputLen), Kn(e8.blockLen);
}
function qn(e8, t2 = true) {
  if (e8.destroyed) throw new Error("Hash instance has been destroyed");
  if (t2 && e8.finished) throw new Error("Hash#digest() has already been called");
}
function Vn(e8, t2) {
  Hn(e8);
  const n2 = t2.outputLen;
  if (e8.length < n2) throw new Error(`digestInto() expects output buffer of length at least ${n2}`);
}
Object.defineProperty(jn, "__esModule", { value: true }), jn.isBytes = Un, jn.number = Kn, jn.bool = Fn, jn.bytes = Hn, jn.hash = zn, jn.exists = qn, jn.output = Vn;
var Wn = { number: Kn, bool: Fn, bytes: Hn, hash: zn, exists: qn, output: Vn };
jn.default = Wn, function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.wrapCipher = e8.Hash = e8.nextTick = e8.isLE = e8.createView = e8.u32 = e8.u16 = e8.u8 = void 0, e8.bytesToHex = r2, e8.hexToBytes = s2, e8.hexToNumber = a2, e8.bytesToNumberBE = function(e9) {
    return a2(r2(e9));
  }, e8.numberToBytesBE = function(e9, t3) {
    return s2(e9.toString(16).padStart(2 * t3, "0"));
  }, e8.asyncLoop = async function(t3, n3, r3) {
    let i3 = Date.now();
    for (let o3 = 0; o3 < t3; o3++) {
      r3(o3);
      const t4 = Date.now() - i3;
      t4 >= 0 && t4 < n3 || (await (0, e8.nextTick)(), i3 += t4);
    }
  }, e8.utf8ToBytes = c2, e8.bytesToUtf8 = function(e9) {
    return new TextDecoder().decode(e9);
  }, e8.toBytes = function(e9) {
    if ("string" == typeof e9) e9 = c2(e9);
    else {
      if (!(0, t2.isBytes)(e9)) throw new Error("Uint8Array expected, got " + typeof e9);
      e9 = d2(e9);
    }
    return e9;
  }, e8.concatBytes = function(...e9) {
    let n3 = 0;
    for (let r4 = 0; r4 < e9.length; r4++) {
      const i3 = e9[r4];
      (0, t2.bytes)(i3), n3 += i3.length;
    }
    const r3 = new Uint8Array(n3);
    for (let t3 = 0, n4 = 0; t3 < e9.length; t3++) {
      const i3 = e9[t3];
      r3.set(i3, n4), n4 += i3.length;
    }
    return r3;
  }, e8.checkOpts = function(e9, t3) {
    if (null == t3 || "object" != typeof t3) throw new Error("options must be defined");
    return Object.assign(e9, t3);
  }, e8.equalBytes = function(e9, t3) {
    if (e9.length !== t3.length) return false;
    let n3 = 0;
    for (let r3 = 0; r3 < e9.length; r3++) n3 |= e9[r3] ^ t3[r3];
    return 0 === n3;
  }, e8.setBigUint64 = l2, e8.u64Lengths = function(t3, n3) {
    const r3 = new Uint8Array(16), i3 = (0, e8.createView)(r3);
    return l2(i3, 0, BigInt(n3 ? n3.length : 0), true), l2(i3, 8, BigInt(t3.length), true), r3;
  }, e8.isAligned32 = function(e9) {
    return e9.byteOffset % 4 == 0;
  }, e8.copyBytes = d2, e8.clean = function(...e9) {
    for (let t3 = 0; t3 < e9.length; t3++) e9[t3].fill(0);
  };
  const t2 = jn;
  if (e8.u8 = (e9) => new Uint8Array(e9.buffer, e9.byteOffset, e9.byteLength), e8.u16 = (e9) => new Uint16Array(e9.buffer, e9.byteOffset, Math.floor(e9.byteLength / 2)), e8.u32 = (e9) => new Uint32Array(e9.buffer, e9.byteOffset, Math.floor(e9.byteLength / 4)), e8.createView = (e9) => new DataView(e9.buffer, e9.byteOffset, e9.byteLength), e8.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0], !e8.isLE) throw new Error("Non little-endian hardware is not supported");
  const n2 = Array.from({ length: 256 }, (e9, t3) => t3.toString(16).padStart(2, "0"));
  function r2(e9) {
    (0, t2.bytes)(e9);
    let r3 = "";
    for (let t3 = 0; t3 < e9.length; t3++) r3 += n2[e9[t3]];
    return r3;
  }
  const i2 = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function o2(e9) {
    return e9 >= i2._0 && e9 <= i2._9 ? e9 - i2._0 : e9 >= i2._A && e9 <= i2._F ? e9 - (i2._A - 10) : e9 >= i2._a && e9 <= i2._f ? e9 - (i2._a - 10) : void 0;
  }
  function s2(e9) {
    if ("string" != typeof e9) throw new Error("hex string expected, got " + typeof e9);
    const t3 = e9.length, n3 = t3 / 2;
    if (t3 % 2) throw new Error("padded hex string expected, got unpadded hex of length " + t3);
    const r3 = new Uint8Array(n3);
    for (let t4 = 0, i3 = 0; t4 < n3; t4++, i3 += 2) {
      const n4 = o2(e9.charCodeAt(i3)), s3 = o2(e9.charCodeAt(i3 + 1));
      if (void 0 === n4 || void 0 === s3) {
        const t5 = e9[i3] + e9[i3 + 1];
        throw new Error('hex string expected, got non-hex character "' + t5 + '" at index ' + i3);
      }
      r3[t4] = 16 * n4 + s3;
    }
    return r3;
  }
  function a2(e9) {
    if ("string" != typeof e9) throw new Error("hex string expected, got " + typeof e9);
    return BigInt("" === e9 ? "0" : `0x${e9}`);
  }
  function c2(e9) {
    if ("string" != typeof e9) throw new Error("string expected, got " + typeof e9);
    return new Uint8Array(new TextEncoder().encode(e9));
  }
  function l2(e9, t3, n3, r3) {
    if ("function" == typeof e9.setBigUint64) return e9.setBigUint64(t3, n3, r3);
    const i3 = BigInt(32), o3 = BigInt(4294967295), s3 = Number(n3 >> i3 & o3), a3 = Number(n3 & o3), c3 = r3 ? 4 : 0, l3 = r3 ? 0 : 4;
    e9.setUint32(t3 + c3, s3, r3), e9.setUint32(t3 + l3, a3, r3);
  }
  function d2(e9) {
    return Uint8Array.from(e9);
  }
  e8.nextTick = async () => {
  }, e8.Hash = class {
  }, e8.wrapCipher = (e9, t3) => (Object.assign(t3, e9), t3);
}($n);
var Gn = {};
var Yn = {};
Object.defineProperty(Yn, "__esModule", { value: true }), Yn.AEAD_TAG_LENGTH = Yn.XCHACHA20_NONCE_LENGTH = Yn.CURVE25519_PUBLIC_KEY_SIZE = Yn.ETH_PUBLIC_KEY_SIZE = Yn.UNCOMPRESSED_PUBLIC_KEY_SIZE = Yn.COMPRESSED_PUBLIC_KEY_SIZE = Yn.SECRET_KEY_LENGTH = void 0, Yn.SECRET_KEY_LENGTH = 32, Yn.COMPRESSED_PUBLIC_KEY_SIZE = 33, Yn.UNCOMPRESSED_PUBLIC_KEY_SIZE = 65, Yn.ETH_PUBLIC_KEY_SIZE = 64, Yn.CURVE25519_PUBLIC_KEY_SIZE = 32, Yn.XCHACHA20_NONCE_LENGTH = 24, Yn.AEAD_TAG_LENGTH = 16, function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.ephemeralKeySize = e8.symmetricNonceLength = e8.symmetricAlgorithm = e8.isHkdfKeyCompressed = e8.isEphemeralKeyCompressed = e8.ellipticCurve = e8.ECIES_CONFIG = void 0;
  var t2 = Yn;
  e8.ECIES_CONFIG = new function() {
    this.ellipticCurve = "secp256k1", this.isEphemeralKeyCompressed = false, this.isHkdfKeyCompressed = false, this.symmetricAlgorithm = "aes-256-gcm", this.symmetricNonceLength = 16;
  }(), e8.ellipticCurve = function() {
    return e8.ECIES_CONFIG.ellipticCurve;
  }, e8.isEphemeralKeyCompressed = function() {
    return e8.ECIES_CONFIG.isEphemeralKeyCompressed;
  }, e8.isHkdfKeyCompressed = function() {
    return e8.ECIES_CONFIG.isHkdfKeyCompressed;
  }, e8.symmetricAlgorithm = function() {
    return e8.ECIES_CONFIG.symmetricAlgorithm;
  }, e8.symmetricNonceLength = function() {
    return e8.ECIES_CONFIG.symmetricNonceLength;
  }, e8.ephemeralKeySize = function() {
    var n2 = { secp256k1: e8.ECIES_CONFIG.isEphemeralKeyCompressed ? t2.COMPRESSED_PUBLIC_KEY_SIZE : t2.UNCOMPRESSED_PUBLIC_KEY_SIZE, x25519: t2.CURVE25519_PUBLIC_KEY_SIZE, ed25519: t2.CURVE25519_PUBLIC_KEY_SIZE };
    if (e8.ECIES_CONFIG.ellipticCurve in n2) return n2[e8.ECIES_CONFIG.ellipticCurve];
    throw new Error("Not implemented");
  };
}(Gn);
var Zn = {};
var Jn = {};
var Xn = {};
var Qn = {};
var er = {};
var tr = {};
Object.defineProperty(tr, "__esModule", { value: true }), tr.crypto = void 0, tr.crypto = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0, function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.gcm = e8.ctr = e8.cbc = e8.utils = void 0, e8.randomBytes = i2, e8.getWebcryptoSubtle = o2, e8.managedNonce = function(e9) {
    return (0, n2.number)(e9.nonceLength), (t3, ...n3) => ({ encrypt(o3, ...s3) {
      const { nonceLength: a3 } = e9, c3 = i2(a3), l3 = e9(t3, c3, ...n3).encrypt(o3, ...s3), d2 = (0, r2.concatBytes)(c3, l3);
      return l3.fill(0), d2;
    }, decrypt(r3, ...i3) {
      const { nonceLength: o3 } = e9, s3 = r3.subarray(0, o3), a3 = r3.subarray(o3);
      return e9(t3, s3, ...n3).decrypt(a3, ...i3);
    } });
  };
  const t2 = tr, n2 = jn, r2 = $n;
  function i2(e9 = 32) {
    if (t2.crypto && "function" == typeof t2.crypto.getRandomValues) return t2.crypto.getRandomValues(new Uint8Array(e9));
    if (t2.crypto && "function" == typeof t2.crypto.randomBytes) return t2.crypto.randomBytes(e9);
    throw new Error("crypto.getRandomValues must be defined");
  }
  function o2() {
    if (t2.crypto && "object" == typeof t2.crypto.subtle && null != t2.crypto.subtle) return t2.crypto.subtle;
    throw new Error("crypto.subtle must be defined");
  }
  e8.utils = { async encrypt(e9, t3, n3, r3) {
    const i3 = o2(), s3 = await i3.importKey("raw", e9, t3, true, ["encrypt"]), a3 = await i3.encrypt(n3, s3, r3);
    return new Uint8Array(a3);
  }, async decrypt(e9, t3, n3, r3) {
    const i3 = o2(), s3 = await i3.importKey("raw", e9, t3, true, ["decrypt"]), a3 = await i3.decrypt(n3, s3, r3);
    return new Uint8Array(a3);
  } };
  const s2 = "AES-CBC", a2 = "AES-CTR", c2 = "AES-GCM";
  function l2(t3) {
    return (r3, i3, o3) => {
      (0, n2.bytes)(r3), (0, n2.bytes)(i3);
      const l3 = { name: t3, length: 8 * r3.length }, d2 = function(e9, t4, n3) {
        if (e9 === s2) return { name: s2, iv: t4 };
        if (e9 === a2) return { name: a2, counter: t4, length: 64 };
        if (e9 === c2) return n3 ? { name: c2, iv: t4, additionalData: n3 } : { name: c2, iv: t4 };
        throw new Error("unknown aes block mode");
      }(t3, i3, o3);
      return { encrypt: (t4) => ((0, n2.bytes)(t4), e8.utils.encrypt(r3, l3, d2, t4)), decrypt: (t4) => ((0, n2.bytes)(t4), e8.utils.decrypt(r3, l3, d2, t4)) };
    };
  }
  e8.cbc = l2(s2), e8.ctr = l2(a2), e8.gcm = l2(c2);
}(er);
var nr = {};
var rr = {};
var ir = {};
var or = {};
function sr(e8) {
  if (!Number.isSafeInteger(e8) || e8 < 0) throw new Error(`positive integer expected, not ${e8}`);
}
function ar(e8) {
  if ("boolean" != typeof e8) throw new Error(`boolean expected, not ${e8}`);
}
function cr(e8) {
  return e8 instanceof Uint8Array || null != e8 && "object" == typeof e8 && "Uint8Array" === e8.constructor.name;
}
function lr(e8, ...t2) {
  if (!cr(e8)) throw new Error("Uint8Array expected");
  if (t2.length > 0 && !t2.includes(e8.length)) throw new Error(`Uint8Array expected of length ${t2}, not of length=${e8.length}`);
}
function dr(e8) {
  if ("function" != typeof e8 || "function" != typeof e8.create) throw new Error("Hash should be wrapped by utils.wrapConstructor");
  sr(e8.outputLen), sr(e8.blockLen);
}
function ur(e8, t2 = true) {
  if (e8.destroyed) throw new Error("Hash instance has been destroyed");
  if (t2 && e8.finished) throw new Error("Hash#digest() has already been called");
}
function hr(e8, t2) {
  lr(e8);
  const n2 = t2.outputLen;
  if (e8.length < n2) throw new Error(`digestInto() expects output buffer of length at least ${n2}`);
}
Object.defineProperty(or, "__esModule", { value: true }), or.isBytes = cr, or.number = sr, or.bool = ar, or.bytes = lr, or.hash = dr, or.exists = ur, or.output = hr;
var fr = { number: sr, bool: ar, bytes: lr, hash: dr, exists: ur, output: hr };
or.default = fr;
var pr = {};
var gr = {};
Object.defineProperty(gr, "__esModule", { value: true }), gr.crypto = void 0, gr.crypto = "object" == typeof globalThis && "crypto" in globalThis ? globalThis.crypto : void 0, function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.Hash = e8.nextTick = e8.byteSwapIfBE = e8.byteSwap = e8.isLE = e8.rotl = e8.rotr = e8.createView = e8.u32 = e8.u8 = void 0, e8.isBytes = function(e9) {
    return e9 instanceof Uint8Array || null != e9 && "object" == typeof e9 && "Uint8Array" === e9.constructor.name;
  }, e8.byteSwap32 = function(t3) {
    for (let n3 = 0; n3 < t3.length; n3++) t3[n3] = (0, e8.byteSwap)(t3[n3]);
  }, e8.bytesToHex = function(e9) {
    (0, n2.bytes)(e9);
    let t3 = "";
    for (let n3 = 0; n3 < e9.length; n3++) t3 += r2[e9[n3]];
    return t3;
  }, e8.hexToBytes = function(e9) {
    if ("string" != typeof e9) throw new Error("hex string expected, got " + typeof e9);
    const t3 = e9.length, n3 = t3 / 2;
    if (t3 % 2) throw new Error("padded hex string expected, got unpadded hex of length " + t3);
    const r3 = new Uint8Array(n3);
    for (let t4 = 0, i3 = 0; t4 < n3; t4++, i3 += 2) {
      const n4 = o2(e9.charCodeAt(i3)), s3 = o2(e9.charCodeAt(i3 + 1));
      if (void 0 === n4 || void 0 === s3) {
        const t5 = e9[i3] + e9[i3 + 1];
        throw new Error('hex string expected, got non-hex character "' + t5 + '" at index ' + i3);
      }
      r3[t4] = 16 * n4 + s3;
    }
    return r3;
  }, e8.asyncLoop = async function(t3, n3, r3) {
    let i3 = Date.now();
    for (let o3 = 0; o3 < t3; o3++) {
      r3(o3);
      const t4 = Date.now() - i3;
      t4 >= 0 && t4 < n3 || (await (0, e8.nextTick)(), i3 += t4);
    }
  }, e8.utf8ToBytes = s2, e8.toBytes = a2, e8.concatBytes = function(...e9) {
    let t3 = 0;
    for (let r4 = 0; r4 < e9.length; r4++) {
      const i3 = e9[r4];
      (0, n2.bytes)(i3), t3 += i3.length;
    }
    const r3 = new Uint8Array(t3);
    for (let t4 = 0, n3 = 0; t4 < e9.length; t4++) {
      const i3 = e9[t4];
      r3.set(i3, n3), n3 += i3.length;
    }
    return r3;
  }, e8.checkOpts = function(e9, t3) {
    if (void 0 !== t3 && "[object Object]" !== c2.call(t3)) throw new Error("Options should be object or undefined");
    return Object.assign(e9, t3);
  }, e8.wrapConstructor = function(e9) {
    const t3 = (t4) => e9().update(a2(t4)).digest(), n3 = e9();
    return t3.outputLen = n3.outputLen, t3.blockLen = n3.blockLen, t3.create = () => e9(), t3;
  }, e8.wrapConstructorWithOpts = function(e9) {
    const t3 = (t4, n4) => e9(n4).update(a2(t4)).digest(), n3 = e9({});
    return t3.outputLen = n3.outputLen, t3.blockLen = n3.blockLen, t3.create = (t4) => e9(t4), t3;
  }, e8.wrapXOFConstructorWithOpts = function(e9) {
    const t3 = (t4, n4) => e9(n4).update(a2(t4)).digest(), n3 = e9({});
    return t3.outputLen = n3.outputLen, t3.blockLen = n3.blockLen, t3.create = (t4) => e9(t4), t3;
  }, e8.randomBytes = function(e9 = 32) {
    if (t2.crypto && "function" == typeof t2.crypto.getRandomValues) return t2.crypto.getRandomValues(new Uint8Array(e9));
    if (t2.crypto && "function" == typeof t2.crypto.randomBytes) return t2.crypto.randomBytes(e9);
    throw new Error("crypto.getRandomValues must be defined");
  };
  const t2 = gr, n2 = or;
  e8.u8 = (e9) => new Uint8Array(e9.buffer, e9.byteOffset, e9.byteLength), e8.u32 = (e9) => new Uint32Array(e9.buffer, e9.byteOffset, Math.floor(e9.byteLength / 4)), e8.createView = (e9) => new DataView(e9.buffer, e9.byteOffset, e9.byteLength), e8.rotr = (e9, t3) => e9 << 32 - t3 | e9 >>> t3, e8.rotl = (e9, t3) => e9 << t3 | e9 >>> 32 - t3 >>> 0, e8.isLE = 68 === new Uint8Array(new Uint32Array([287454020]).buffer)[0], e8.byteSwap = (e9) => e9 << 24 & 4278190080 | e9 << 8 & 16711680 | e9 >>> 8 & 65280 | e9 >>> 24 & 255, e8.byteSwapIfBE = e8.isLE ? (e9) => e9 : (t3) => (0, e8.byteSwap)(t3);
  const r2 = Array.from({ length: 256 }, (e9, t3) => t3.toString(16).padStart(2, "0")), i2 = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
  function o2(e9) {
    return e9 >= i2._0 && e9 <= i2._9 ? e9 - i2._0 : e9 >= i2._A && e9 <= i2._F ? e9 - (i2._A - 10) : e9 >= i2._a && e9 <= i2._f ? e9 - (i2._a - 10) : void 0;
  }
  function s2(e9) {
    if ("string" != typeof e9) throw new Error("utf8ToBytes expected string, got " + typeof e9);
    return new Uint8Array(new TextEncoder().encode(e9));
  }
  function a2(e9) {
    return "string" == typeof e9 && (e9 = s2(e9)), (0, n2.bytes)(e9), e9;
  }
  e8.nextTick = async () => {
  }, e8.Hash = class {
    clone() {
      return this._cloneInto();
    }
  };
  const c2 = {}.toString;
}(pr), Object.defineProperty(ir, "__esModule", { value: true }), ir.HashMD = ir.Maj = ir.Chi = void 0;
var mr = or;
var yr = pr;
ir.Chi = (e8, t2, n2) => e8 & t2 ^ ~e8 & n2, ir.Maj = (e8, t2, n2) => e8 & t2 ^ e8 & n2 ^ t2 & n2, ir.HashMD = class extends yr.Hash {
  constructor(e8, t2, n2, r2) {
    super(), this.blockLen = e8, this.outputLen = t2, this.padOffset = n2, this.isLE = r2, this.finished = false, this.length = 0, this.pos = 0, this.destroyed = false, this.buffer = new Uint8Array(e8), this.view = (0, yr.createView)(this.buffer);
  }
  update(e8) {
    (0, mr.exists)(this);
    const { view: t2, buffer: n2, blockLen: r2 } = this, i2 = (e8 = (0, yr.toBytes)(e8)).length;
    for (let o2 = 0; o2 < i2; ) {
      const s2 = Math.min(r2 - this.pos, i2 - o2);
      if (s2 !== r2) n2.set(e8.subarray(o2, o2 + s2), this.pos), this.pos += s2, o2 += s2, this.pos === r2 && (this.process(t2, 0), this.pos = 0);
      else {
        const t3 = (0, yr.createView)(e8);
        for (; r2 <= i2 - o2; o2 += r2) this.process(t3, o2);
      }
    }
    return this.length += e8.length, this.roundClean(), this;
  }
  digestInto(e8) {
    (0, mr.exists)(this), (0, mr.output)(e8, this), this.finished = true;
    const { buffer: t2, view: n2, blockLen: r2, isLE: i2 } = this;
    let { pos: o2 } = this;
    t2[o2++] = 128, this.buffer.subarray(o2).fill(0), this.padOffset > r2 - o2 && (this.process(n2, 0), o2 = 0);
    for (let e9 = o2; e9 < r2; e9++) t2[e9] = 0;
    !function(e9, t3, n3, r3) {
      if ("function" == typeof e9.setBigUint64) return e9.setBigUint64(t3, n3, r3);
      const i3 = BigInt(32), o3 = BigInt(4294967295), s3 = Number(n3 >> i3 & o3), a3 = Number(n3 & o3), c3 = r3 ? 4 : 0, l3 = r3 ? 0 : 4;
      e9.setUint32(t3 + c3, s3, r3), e9.setUint32(t3 + l3, a3, r3);
    }(n2, r2 - 8, BigInt(8 * this.length), i2), this.process(n2, 0);
    const s2 = (0, yr.createView)(e8), a2 = this.outputLen;
    if (a2 % 4) throw new Error("_sha2: outputLen should be aligned to 32bit");
    const c2 = a2 / 4, l2 = this.get();
    if (c2 > l2.length) throw new Error("_sha2: outputLen bigger than state");
    for (let e9 = 0; e9 < c2; e9++) s2.setUint32(4 * e9, l2[e9], i2);
  }
  digest() {
    const { buffer: e8, outputLen: t2 } = this;
    this.digestInto(e8);
    const n2 = e8.slice(0, t2);
    return this.destroy(), n2;
  }
  _cloneInto(e8) {
    e8 || (e8 = new this.constructor()), e8.set(...this.get());
    const { blockLen: t2, buffer: n2, length: r2, finished: i2, destroyed: o2, pos: s2 } = this;
    return e8.length = r2, e8.pos = s2, e8.finished = i2, e8.destroyed = o2, r2 % t2 && e8.buffer.set(n2), e8;
  }
};
var vr = {};
Object.defineProperty(vr, "__esModule", { value: true }), vr.add5L = vr.add5H = vr.add4H = vr.add4L = vr.add3H = vr.add3L = vr.rotlBL = vr.rotlBH = vr.rotlSL = vr.rotlSH = vr.rotr32L = vr.rotr32H = vr.rotrBL = vr.rotrBH = vr.rotrSL = vr.rotrSH = vr.shrSL = vr.shrSH = vr.toBig = void 0, vr.fromBig = Er, vr.split = Cr, vr.add = Dr;
var br = BigInt(2 ** 32 - 1);
var wr = BigInt(32);
function Er(e8, t2 = false) {
  return t2 ? { h: Number(e8 & br), l: Number(e8 >> wr & br) } : { h: 0 | Number(e8 >> wr & br), l: 0 | Number(e8 & br) };
}
function Cr(e8, t2 = false) {
  let n2 = new Uint32Array(e8.length), r2 = new Uint32Array(e8.length);
  for (let i2 = 0; i2 < e8.length; i2++) {
    const { h: o2, l: s2 } = Er(e8[i2], t2);
    [n2[i2], r2[i2]] = [o2, s2];
  }
  return [n2, r2];
}
var _r = (e8, t2) => BigInt(e8 >>> 0) << wr | BigInt(t2 >>> 0);
vr.toBig = _r;
var Sr = (e8, t2, n2) => e8 >>> n2;
vr.shrSH = Sr;
var kr = (e8, t2, n2) => e8 << 32 - n2 | t2 >>> n2;
vr.shrSL = kr;
var xr = (e8, t2, n2) => e8 >>> n2 | t2 << 32 - n2;
vr.rotrSH = xr;
var Ar = (e8, t2, n2) => e8 << 32 - n2 | t2 >>> n2;
vr.rotrSL = Ar;
var Mr = (e8, t2, n2) => e8 << 64 - n2 | t2 >>> n2 - 32;
vr.rotrBH = Mr;
var Lr = (e8, t2, n2) => e8 >>> n2 - 32 | t2 << 64 - n2;
vr.rotrBL = Lr;
var Tr = (e8, t2) => t2;
vr.rotr32H = Tr;
var Or = (e8, t2) => e8;
vr.rotr32L = Or;
var Rr = (e8, t2, n2) => e8 << n2 | t2 >>> 32 - n2;
vr.rotlSH = Rr;
var Pr = (e8, t2, n2) => t2 << n2 | e8 >>> 32 - n2;
vr.rotlSL = Pr;
var Ir = (e8, t2, n2) => t2 << n2 - 32 | e8 >>> 64 - n2;
vr.rotlBH = Ir;
var Nr = (e8, t2, n2) => e8 << n2 - 32 | t2 >>> 64 - n2;
function Dr(e8, t2, n2, r2) {
  const i2 = (t2 >>> 0) + (r2 >>> 0);
  return { h: e8 + n2 + (i2 / 2 ** 32 | 0) | 0, l: 0 | i2 };
}
vr.rotlBL = Nr;
var Br = (e8, t2, n2) => (e8 >>> 0) + (t2 >>> 0) + (n2 >>> 0);
vr.add3L = Br;
var $r = (e8, t2, n2, r2) => t2 + n2 + r2 + (e8 / 2 ** 32 | 0) | 0;
vr.add3H = $r;
var jr = (e8, t2, n2, r2) => (e8 >>> 0) + (t2 >>> 0) + (n2 >>> 0) + (r2 >>> 0);
vr.add4L = jr;
var Kr = (e8, t2, n2, r2, i2) => t2 + n2 + r2 + i2 + (e8 / 2 ** 32 | 0) | 0;
vr.add4H = Kr;
var Fr = (e8, t2, n2, r2, i2) => (e8 >>> 0) + (t2 >>> 0) + (n2 >>> 0) + (r2 >>> 0) + (i2 >>> 0);
vr.add5L = Fr;
var Ur = (e8, t2, n2, r2, i2, o2) => t2 + n2 + r2 + i2 + o2 + (e8 / 2 ** 32 | 0) | 0;
vr.add5H = Ur;
var Hr = { fromBig: Er, split: Cr, toBig: _r, shrSH: Sr, shrSL: kr, rotrSH: xr, rotrSL: Ar, rotrBH: Mr, rotrBL: Lr, rotr32H: Tr, rotr32L: Or, rotlSH: Rr, rotlSL: Pr, rotlBH: Ir, rotlBL: Nr, add: Dr, add3L: Br, add3H: $r, add4L: jr, add4H: Kr, add5H: Ur, add5L: Fr };
vr.default = Hr, Object.defineProperty(rr, "__esModule", { value: true }), rr.sha384 = rr.sha512_256 = rr.sha512_224 = rr.sha512 = rr.SHA384 = rr.SHA512_256 = rr.SHA512_224 = rr.SHA512 = void 0;
var zr = ir;
var qr = vr;
var Vr = pr;
var [Wr, Gr] = qr.default.split(["0x428a2f98d728ae22", "0x7137449123ef65cd", "0xb5c0fbcfec4d3b2f", "0xe9b5dba58189dbbc", "0x3956c25bf348b538", "0x59f111f1b605d019", "0x923f82a4af194f9b", "0xab1c5ed5da6d8118", "0xd807aa98a3030242", "0x12835b0145706fbe", "0x243185be4ee4b28c", "0x550c7dc3d5ffb4e2", "0x72be5d74f27b896f", "0x80deb1fe3b1696b1", "0x9bdc06a725c71235", "0xc19bf174cf692694", "0xe49b69c19ef14ad2", "0xefbe4786384f25e3", "0x0fc19dc68b8cd5b5", "0x240ca1cc77ac9c65", "0x2de92c6f592b0275", "0x4a7484aa6ea6e483", "0x5cb0a9dcbd41fbd4", "0x76f988da831153b5", "0x983e5152ee66dfab", "0xa831c66d2db43210", "0xb00327c898fb213f", "0xbf597fc7beef0ee4", "0xc6e00bf33da88fc2", "0xd5a79147930aa725", "0x06ca6351e003826f", "0x142929670a0e6e70", "0x27b70a8546d22ffc", "0x2e1b21385c26c926", "0x4d2c6dfc5ac42aed", "0x53380d139d95b3df", "0x650a73548baf63de", "0x766a0abb3c77b2a8", "0x81c2c92e47edaee6", "0x92722c851482353b", "0xa2bfe8a14cf10364", "0xa81a664bbc423001", "0xc24b8b70d0f89791", "0xc76c51a30654be30", "0xd192e819d6ef5218", "0xd69906245565a910", "0xf40e35855771202a", "0x106aa07032bbd1b8", "0x19a4c116b8d2d0c8", "0x1e376c085141ab53", "0x2748774cdf8eeb99", "0x34b0bcb5e19b48a8", "0x391c0cb3c5c95a63", "0x4ed8aa4ae3418acb", "0x5b9cca4f7763e373", "0x682e6ff3d6b2b8a3", "0x748f82ee5defb2fc", "0x78a5636f43172f60", "0x84c87814a1f0ab72", "0x8cc702081a6439ec", "0x90befffa23631e28", "0xa4506cebde82bde9", "0xbef9a3f7b2c67915", "0xc67178f2e372532b", "0xca273eceea26619c", "0xd186b8c721c0c207", "0xeada7dd6cde0eb1e", "0xf57d4f7fee6ed178", "0x06f067aa72176fba", "0x0a637dc5a2c898a6", "0x113f9804bef90dae", "0x1b710b35131c471b", "0x28db77f523047d84", "0x32caab7b40c72493", "0x3c9ebe0a15c9bebc", "0x431d67c49c100d4c", "0x4cc5d4becb3e42b6", "0x597f299cfc657e2a", "0x5fcb6fab3ad6faec", "0x6c44198c4a475817"].map((e8) => BigInt(e8)));
var Yr = new Uint32Array(80);
var Zr = new Uint32Array(80);
var Jr = class extends zr.HashMD {
  constructor() {
    super(128, 64, 16, false), this.Ah = 1779033703, this.Al = -205731576, this.Bh = -1150833019, this.Bl = -2067093701, this.Ch = 1013904242, this.Cl = -23791573, this.Dh = -1521486534, this.Dl = 1595750129, this.Eh = 1359893119, this.El = -1377402159, this.Fh = -1694144372, this.Fl = 725511199, this.Gh = 528734635, this.Gl = -79577749, this.Hh = 1541459225, this.Hl = 327033209;
  }
  get() {
    const { Ah: e8, Al: t2, Bh: n2, Bl: r2, Ch: i2, Cl: o2, Dh: s2, Dl: a2, Eh: c2, El: l2, Fh: d2, Fl: u2, Gh: h2, Gl: f2, Hh: p2, Hl: g2 } = this;
    return [e8, t2, n2, r2, i2, o2, s2, a2, c2, l2, d2, u2, h2, f2, p2, g2];
  }
  set(e8, t2, n2, r2, i2, o2, s2, a2, c2, l2, d2, u2, h2, f2, p2, g2) {
    this.Ah = 0 | e8, this.Al = 0 | t2, this.Bh = 0 | n2, this.Bl = 0 | r2, this.Ch = 0 | i2, this.Cl = 0 | o2, this.Dh = 0 | s2, this.Dl = 0 | a2, this.Eh = 0 | c2, this.El = 0 | l2, this.Fh = 0 | d2, this.Fl = 0 | u2, this.Gh = 0 | h2, this.Gl = 0 | f2, this.Hh = 0 | p2, this.Hl = 0 | g2;
  }
  process(e8, t2) {
    for (let n3 = 0; n3 < 16; n3++, t2 += 4) Yr[n3] = e8.getUint32(t2), Zr[n3] = e8.getUint32(t2 += 4);
    for (let e9 = 16; e9 < 80; e9++) {
      const t3 = 0 | Yr[e9 - 15], n3 = 0 | Zr[e9 - 15], r3 = qr.default.rotrSH(t3, n3, 1) ^ qr.default.rotrSH(t3, n3, 8) ^ qr.default.shrSH(t3, n3, 7), i3 = qr.default.rotrSL(t3, n3, 1) ^ qr.default.rotrSL(t3, n3, 8) ^ qr.default.shrSL(t3, n3, 7), o3 = 0 | Yr[e9 - 2], s3 = 0 | Zr[e9 - 2], a3 = qr.default.rotrSH(o3, s3, 19) ^ qr.default.rotrBH(o3, s3, 61) ^ qr.default.shrSH(o3, s3, 6), c3 = qr.default.rotrSL(o3, s3, 19) ^ qr.default.rotrBL(o3, s3, 61) ^ qr.default.shrSL(o3, s3, 6), l3 = qr.default.add4L(i3, c3, Zr[e9 - 7], Zr[e9 - 16]), d3 = qr.default.add4H(l3, r3, a3, Yr[e9 - 7], Yr[e9 - 16]);
      Yr[e9] = 0 | d3, Zr[e9] = 0 | l3;
    }
    let { Ah: n2, Al: r2, Bh: i2, Bl: o2, Ch: s2, Cl: a2, Dh: c2, Dl: l2, Eh: d2, El: u2, Fh: h2, Fl: f2, Gh: p2, Gl: g2, Hh: m2, Hl: y2 } = this;
    for (let e9 = 0; e9 < 80; e9++) {
      const t3 = qr.default.rotrSH(d2, u2, 14) ^ qr.default.rotrSH(d2, u2, 18) ^ qr.default.rotrBH(d2, u2, 41), v2 = qr.default.rotrSL(d2, u2, 14) ^ qr.default.rotrSL(d2, u2, 18) ^ qr.default.rotrBL(d2, u2, 41), b2 = d2 & h2 ^ ~d2 & p2, w2 = u2 & f2 ^ ~u2 & g2, E2 = qr.default.add5L(y2, v2, w2, Gr[e9], Zr[e9]), C2 = qr.default.add5H(E2, m2, t3, b2, Wr[e9], Yr[e9]), _2 = 0 | E2, S2 = qr.default.rotrSH(n2, r2, 28) ^ qr.default.rotrBH(n2, r2, 34) ^ qr.default.rotrBH(n2, r2, 39), k2 = qr.default.rotrSL(n2, r2, 28) ^ qr.default.rotrBL(n2, r2, 34) ^ qr.default.rotrBL(n2, r2, 39), x2 = n2 & i2 ^ n2 & s2 ^ i2 & s2, A2 = r2 & o2 ^ r2 & a2 ^ o2 & a2;
      m2 = 0 | p2, y2 = 0 | g2, p2 = 0 | h2, g2 = 0 | f2, h2 = 0 | d2, f2 = 0 | u2, { h: d2, l: u2 } = qr.default.add(0 | c2, 0 | l2, 0 | C2, 0 | _2), c2 = 0 | s2, l2 = 0 | a2, s2 = 0 | i2, a2 = 0 | o2, i2 = 0 | n2, o2 = 0 | r2;
      const M2 = qr.default.add3L(_2, k2, A2);
      n2 = qr.default.add3H(M2, C2, S2, x2), r2 = 0 | M2;
    }
    ({ h: n2, l: r2 } = qr.default.add(0 | this.Ah, 0 | this.Al, 0 | n2, 0 | r2)), { h: i2, l: o2 } = qr.default.add(0 | this.Bh, 0 | this.Bl, 0 | i2, 0 | o2), { h: s2, l: a2 } = qr.default.add(0 | this.Ch, 0 | this.Cl, 0 | s2, 0 | a2), { h: c2, l: l2 } = qr.default.add(0 | this.Dh, 0 | this.Dl, 0 | c2, 0 | l2), { h: d2, l: u2 } = qr.default.add(0 | this.Eh, 0 | this.El, 0 | d2, 0 | u2), { h: h2, l: f2 } = qr.default.add(0 | this.Fh, 0 | this.Fl, 0 | h2, 0 | f2), { h: p2, l: g2 } = qr.default.add(0 | this.Gh, 0 | this.Gl, 0 | p2, 0 | g2), { h: m2, l: y2 } = qr.default.add(0 | this.Hh, 0 | this.Hl, 0 | m2, 0 | y2), this.set(n2, r2, i2, o2, s2, a2, c2, l2, d2, u2, h2, f2, p2, g2, m2, y2);
  }
  roundClean() {
    Yr.fill(0), Zr.fill(0);
  }
  destroy() {
    this.buffer.fill(0), this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
};
rr.SHA512 = Jr;
var Xr = class extends Jr {
  constructor() {
    super(), this.Ah = -1942145080, this.Al = 424955298, this.Bh = 1944164710, this.Bl = -1982016298, this.Ch = 502970286, this.Cl = 855612546, this.Dh = 1738396948, this.Dl = 1479516111, this.Eh = 258812777, this.El = 2077511080, this.Fh = 2011393907, this.Fl = 79989058, this.Gh = 1067287976, this.Gl = 1780299464, this.Hh = 286451373, this.Hl = -1848208735, this.outputLen = 28;
  }
};
rr.SHA512_224 = Xr;
var Qr = class extends Jr {
  constructor() {
    super(), this.Ah = 573645204, this.Al = -64227540, this.Bh = -1621794909, this.Bl = -934517566, this.Ch = 596883563, this.Cl = 1867755857, this.Dh = -1774684391, this.Dl = 1497426621, this.Eh = -1775747358, this.El = -1467023389, this.Fh = -1101128155, this.Fl = 1401305490, this.Gh = 721525244, this.Gl = 746961066, this.Hh = 246885852, this.Hl = -2117784414, this.outputLen = 32;
  }
};
rr.SHA512_256 = Qr;
var ei = class extends Jr {
  constructor() {
    super(), this.Ah = -876896931, this.Al = -1056596264, this.Bh = 1654270250, this.Bl = 914150663, this.Ch = -1856437926, this.Cl = 812702999, this.Dh = 355462360, this.Dl = -150054599, this.Eh = 1731405415, this.El = -4191439, this.Fh = -1900787065, this.Fl = 1750603025, this.Gh = -619958771, this.Gl = 1694076839, this.Hh = 1203062813, this.Hl = -1090891868, this.outputLen = 48;
  }
};
rr.SHA384 = ei, rr.sha512 = (0, Vr.wrapConstructor)(() => new Jr()), rr.sha512_224 = (0, Vr.wrapConstructor)(() => new Xr()), rr.sha512_256 = (0, Vr.wrapConstructor)(() => new Qr()), rr.sha384 = (0, Vr.wrapConstructor)(() => new ei());
var ti = {};
var ni = {};
var ri = {};
var ii = {};
Object.defineProperty(ii, "__esModule", { value: true }), ii.notImplemented = ii.bitMask = void 0, ii.isBytes = ci, ii.abytes = li, ii.abool = function(e8, t2) {
  if ("boolean" != typeof t2) throw new Error(`${e8} must be valid boolean, got "${t2}".`);
}, ii.bytesToHex = ui, ii.numberToHexUnpadded = hi, ii.hexToNumber = fi, ii.hexToBytes = mi, ii.bytesToNumberBE = function(e8) {
  return fi(ui(e8));
}, ii.bytesToNumberLE = function(e8) {
  return li(e8), fi(ui(Uint8Array.from(e8).reverse()));
}, ii.numberToBytesBE = yi, ii.numberToBytesLE = function(e8, t2) {
  return yi(e8, t2).reverse();
}, ii.numberToVarBytesBE = function(e8) {
  return mi(hi(e8));
}, ii.ensureBytes = function(e8, t2, n2) {
  let r2;
  if ("string" == typeof t2) try {
    r2 = mi(t2);
  } catch (n3) {
    throw new Error(`${e8} must be valid hex string, got "${t2}". Cause: ${n3}`);
  }
  else {
    if (!ci(t2)) throw new Error(`${e8} must be hex string or Uint8Array`);
    r2 = Uint8Array.from(t2);
  }
  const i2 = r2.length;
  if ("number" == typeof n2 && i2 !== n2) throw new Error(`${e8} expected ${n2} bytes, got ${i2}`);
  return r2;
}, ii.concatBytes = vi, ii.equalBytes = function(e8, t2) {
  if (e8.length !== t2.length) return false;
  let n2 = 0;
  for (let r2 = 0; r2 < e8.length; r2++) n2 |= e8[r2] ^ t2[r2];
  return 0 === n2;
}, ii.utf8ToBytes = function(e8) {
  if ("string" != typeof e8) throw new Error("utf8ToBytes expected string, got " + typeof e8);
  return new Uint8Array(new TextEncoder().encode(e8));
}, ii.inRange = wi, ii.aInRange = function(e8, t2, n2, r2) {
  if (!wi(t2, n2, r2)) throw new Error(`expected valid ${e8}: ${n2} <= n < ${r2}, got ${typeof t2} ${t2}`);
}, ii.bitLen = function(e8) {
  let t2;
  for (t2 = 0; e8 > oi; e8 >>= si, t2 += 1) ;
  return t2;
}, ii.bitGet = function(e8, t2) {
  return e8 >> BigInt(t2) & si;
}, ii.bitSet = function(e8, t2, n2) {
  return e8 | (n2 ? si : oi) << BigInt(t2);
}, ii.createHmacDrbg = function(e8, t2, n2) {
  if ("number" != typeof e8 || e8 < 2) throw new Error("hashLen must be a number");
  if ("number" != typeof t2 || t2 < 2) throw new Error("qByteLen must be a number");
  if ("function" != typeof n2) throw new Error("hmacFn must be a function");
  let r2 = Ei(e8), i2 = Ei(e8), o2 = 0;
  const s2 = () => {
    r2.fill(1), i2.fill(0), o2 = 0;
  }, a2 = (...e9) => n2(i2, r2, ...e9), c2 = (e9 = Ei()) => {
    i2 = a2(Ci([0]), e9), r2 = a2(), 0 !== e9.length && (i2 = a2(Ci([1]), e9), r2 = a2());
  }, l2 = () => {
    if (o2++ >= 1e3) throw new Error("drbg: tried 1000 values");
    let e9 = 0;
    const n3 = [];
    for (; e9 < t2; ) {
      r2 = a2();
      const t3 = r2.slice();
      n3.push(t3), e9 += r2.length;
    }
    return vi(...n3);
  };
  return (e9, t3) => {
    let n3;
    for (s2(), c2(e9); !(n3 = t3(l2())); ) c2();
    return s2(), n3;
  };
}, ii.validateObject = function(e8, t2, n2 = {}) {
  const r2 = (t3, n3, r3) => {
    const i2 = _i[n3];
    if ("function" != typeof i2) throw new Error(`Invalid validator "${n3}", expected function`);
    const o2 = e8[t3];
    if (!(r3 && void 0 === o2 || i2(o2, e8))) throw new Error(`Invalid param ${String(t3)}=${o2} (${typeof o2}), expected ${n3}`);
  };
  for (const [e9, n3] of Object.entries(t2)) r2(e9, n3, false);
  for (const [e9, t3] of Object.entries(n2)) r2(e9, t3, true);
  return e8;
}, ii.memoized = function(e8) {
  const t2 = /* @__PURE__ */ new WeakMap();
  return (n2, ...r2) => {
    const i2 = t2.get(n2);
    if (void 0 !== i2) return i2;
    const o2 = e8(n2, ...r2);
    return t2.set(n2, o2), o2;
  };
};
var oi = BigInt(0);
var si = BigInt(1);
var ai = BigInt(2);
function ci(e8) {
  return e8 instanceof Uint8Array || null != e8 && "object" == typeof e8 && "Uint8Array" === e8.constructor.name;
}
function li(e8) {
  if (!ci(e8)) throw new Error("Uint8Array expected");
}
var di = Array.from({ length: 256 }, (e8, t2) => t2.toString(16).padStart(2, "0"));
function ui(e8) {
  li(e8);
  let t2 = "";
  for (let n2 = 0; n2 < e8.length; n2++) t2 += di[e8[n2]];
  return t2;
}
function hi(e8) {
  const t2 = e8.toString(16);
  return 1 & t2.length ? `0${t2}` : t2;
}
function fi(e8) {
  if ("string" != typeof e8) throw new Error("hex string expected, got " + typeof e8);
  return BigInt("" === e8 ? "0" : `0x${e8}`);
}
var pi = { _0: 48, _9: 57, _A: 65, _F: 70, _a: 97, _f: 102 };
function gi(e8) {
  return e8 >= pi._0 && e8 <= pi._9 ? e8 - pi._0 : e8 >= pi._A && e8 <= pi._F ? e8 - (pi._A - 10) : e8 >= pi._a && e8 <= pi._f ? e8 - (pi._a - 10) : void 0;
}
function mi(e8) {
  if ("string" != typeof e8) throw new Error("hex string expected, got " + typeof e8);
  const t2 = e8.length, n2 = t2 / 2;
  if (t2 % 2) throw new Error("padded hex string expected, got unpadded hex of length " + t2);
  const r2 = new Uint8Array(n2);
  for (let t3 = 0, i2 = 0; t3 < n2; t3++, i2 += 2) {
    const n3 = gi(e8.charCodeAt(i2)), o2 = gi(e8.charCodeAt(i2 + 1));
    if (void 0 === n3 || void 0 === o2) {
      const t4 = e8[i2] + e8[i2 + 1];
      throw new Error('hex string expected, got non-hex character "' + t4 + '" at index ' + i2);
    }
    r2[t3] = 16 * n3 + o2;
  }
  return r2;
}
function yi(e8, t2) {
  return mi(e8.toString(16).padStart(2 * t2, "0"));
}
function vi(...e8) {
  let t2 = 0;
  for (let n3 = 0; n3 < e8.length; n3++) {
    const r2 = e8[n3];
    li(r2), t2 += r2.length;
  }
  const n2 = new Uint8Array(t2);
  for (let t3 = 0, r2 = 0; t3 < e8.length; t3++) {
    const i2 = e8[t3];
    n2.set(i2, r2), r2 += i2.length;
  }
  return n2;
}
var bi = (e8) => "bigint" == typeof e8 && oi <= e8;
function wi(e8, t2, n2) {
  return bi(e8) && bi(t2) && bi(n2) && t2 <= e8 && e8 < n2;
}
ii.bitMask = (e8) => (ai << BigInt(e8 - 1)) - si;
var Ei = (e8) => new Uint8Array(e8);
var Ci = (e8) => Uint8Array.from(e8);
var _i = { bigint: (e8) => "bigint" == typeof e8, function: (e8) => "function" == typeof e8, boolean: (e8) => "boolean" == typeof e8, string: (e8) => "string" == typeof e8, stringOrUint8Array: (e8) => "string" == typeof e8 || ci(e8), isSafeInteger: (e8) => Number.isSafeInteger(e8), array: (e8) => Array.isArray(e8), field: (e8, t2) => t2.Fp.isValid(e8), hash: (e8) => "function" == typeof e8 && Number.isSafeInteger(e8.outputLen) };
ii.notImplemented = () => {
  throw new Error("not implemented");
}, Object.defineProperty(ri, "__esModule", { value: true }), ri.isNegativeLE = void 0, ri.mod = Ri, ri.pow = Pi, ri.pow2 = function(e8, t2, n2) {
  let r2 = e8;
  for (; t2-- > ki; ) r2 *= r2, r2 %= n2;
  return r2;
}, ri.invert = Ii, ri.tonelliShanks = Ni, ri.FpSqrt = Di, ri.validateField = function(e8) {
  const t2 = Bi.reduce((e9, t3) => (e9[t3] = "function", e9), { ORDER: "bigint", MASK: "bigint", BYTES: "isSafeInteger", BITS: "isSafeInteger" });
  return (0, Si.validateObject)(e8, t2);
}, ri.FpPow = $i, ri.FpInvertBatch = ji, ri.FpDiv = function(e8, t2, n2) {
  return e8.mul(t2, "bigint" == typeof n2 ? Ii(n2, e8.ORDER) : e8.inv(n2));
}, ri.FpLegendre = Ki, ri.FpIsSquare = function(e8) {
  const t2 = Ki(e8.ORDER);
  return (n2) => {
    const r2 = t2(e8, n2);
    return e8.eql(r2, e8.ZERO) || e8.eql(r2, e8.ONE);
  };
}, ri.nLength = Fi, ri.Field = function(e8, t2, n2 = false, r2 = {}) {
  if (e8 <= ki) throw new Error(`Expected Field ORDER > 0, got ${e8}`);
  const { nBitLength: i2, nByteLength: o2 } = Fi(e8, t2);
  if (o2 > 2048) throw new Error("Field lengths over 2048 bytes are not supported");
  const s2 = Di(e8), a2 = Object.freeze({ ORDER: e8, BITS: i2, BYTES: o2, MASK: (0, Si.bitMask)(i2), ZERO: ki, ONE: xi, create: (t3) => Ri(t3, e8), isValid: (t3) => {
    if ("bigint" != typeof t3) throw new Error("Invalid field element: expected bigint, got " + typeof t3);
    return ki <= t3 && t3 < e8;
  }, is0: (e9) => e9 === ki, isOdd: (e9) => (e9 & xi) === xi, neg: (t3) => Ri(-t3, e8), eql: (e9, t3) => e9 === t3, sqr: (t3) => Ri(t3 * t3, e8), add: (t3, n3) => Ri(t3 + n3, e8), sub: (t3, n3) => Ri(t3 - n3, e8), mul: (t3, n3) => Ri(t3 * n3, e8), pow: (e9, t3) => $i(a2, e9, t3), div: (t3, n3) => Ri(t3 * Ii(n3, e8), e8), sqrN: (e9) => e9 * e9, addN: (e9, t3) => e9 + t3, subN: (e9, t3) => e9 - t3, mulN: (e9, t3) => e9 * t3, inv: (t3) => Ii(t3, e8), sqrt: r2.sqrt || ((e9) => s2(a2, e9)), invertBatch: (e9) => ji(a2, e9), cmov: (e9, t3, n3) => n3 ? t3 : e9, toBytes: (e9) => n2 ? (0, Si.numberToBytesLE)(e9, o2) : (0, Si.numberToBytesBE)(e9, o2), fromBytes: (e9) => {
    if (e9.length !== o2) throw new Error(`Fp.fromBytes: expected ${o2}, got ${e9.length}`);
    return n2 ? (0, Si.bytesToNumberLE)(e9) : (0, Si.bytesToNumberBE)(e9);
  } });
  return Object.freeze(a2);
}, ri.FpSqrtOdd = function(e8, t2) {
  if (!e8.isOdd) throw new Error("Field doesn't have isOdd");
  const n2 = e8.sqrt(t2);
  return e8.isOdd(n2) ? n2 : e8.neg(n2);
}, ri.FpSqrtEven = function(e8, t2) {
  if (!e8.isOdd) throw new Error("Field doesn't have isOdd");
  const n2 = e8.sqrt(t2);
  return e8.isOdd(n2) ? e8.neg(n2) : n2;
}, ri.hashToPrivateScalar = function(e8, t2, n2 = false) {
  const r2 = (e8 = (0, Si.ensureBytes)("privateHash", e8)).length, i2 = Fi(t2).nByteLength + 8;
  if (i2 < 24 || r2 < i2 || r2 > 1024) throw new Error(`hashToPrivateScalar: expected ${i2}-1024 bytes of input, got ${r2}`);
  return Ri(n2 ? (0, Si.bytesToNumberLE)(e8) : (0, Si.bytesToNumberBE)(e8), t2 - xi) + xi;
}, ri.getFieldBytesLength = Ui, ri.getMinHashLength = Hi, ri.mapHashToField = function(e8, t2, n2 = false) {
  const r2 = e8.length, i2 = Ui(t2), o2 = Hi(t2);
  if (r2 < 16 || r2 < o2 || r2 > 1024) throw new Error(`expected ${o2}-1024 bytes of input, got ${r2}`);
  const s2 = Ri(n2 ? (0, Si.bytesToNumberBE)(e8) : (0, Si.bytesToNumberLE)(e8), t2 - xi) + xi;
  return n2 ? (0, Si.numberToBytesLE)(s2, i2) : (0, Si.numberToBytesBE)(s2, i2);
};
var Si = ii;
var ki = BigInt(0);
var xi = BigInt(1);
var Ai = BigInt(2);
var Mi = BigInt(3);
var Li = BigInt(4);
var Ti = BigInt(5);
var Oi = BigInt(8);
function Ri(e8, t2) {
  const n2 = e8 % t2;
  return n2 >= ki ? n2 : t2 + n2;
}
function Pi(e8, t2, n2) {
  if (n2 <= ki || t2 < ki) throw new Error("Expected power/modulo > 0");
  if (n2 === xi) return ki;
  let r2 = xi;
  for (; t2 > ki; ) t2 & xi && (r2 = r2 * e8 % n2), e8 = e8 * e8 % n2, t2 >>= xi;
  return r2;
}
function Ii(e8, t2) {
  if (e8 === ki || t2 <= ki) throw new Error(`invert: expected positive integers, got n=${e8} mod=${t2}`);
  let n2 = Ri(e8, t2), r2 = t2, i2 = ki, o2 = xi;
  for (; n2 !== ki; ) {
    const e9 = r2 % n2, t3 = i2 - o2 * (r2 / n2);
    r2 = n2, n2 = e9, i2 = o2, o2 = t3;
  }
  if (r2 !== xi) throw new Error("invert: does not exist");
  return Ri(i2, t2);
}
function Ni(e8) {
  const t2 = (e8 - xi) / Ai;
  let n2, r2, i2;
  for (n2 = e8 - xi, r2 = 0; n2 % Ai === ki; n2 /= Ai, r2++) ;
  for (i2 = Ai; i2 < e8 && Pi(i2, t2, e8) !== e8 - xi; i2++) ;
  if (1 === r2) {
    const t3 = (e8 + xi) / Li;
    return function(e9, n3) {
      const r3 = e9.pow(n3, t3);
      if (!e9.eql(e9.sqr(r3), n3)) throw new Error("Cannot find square root");
      return r3;
    };
  }
  const o2 = (n2 + xi) / Ai;
  return function(e9, s2) {
    if (e9.pow(s2, t2) === e9.neg(e9.ONE)) throw new Error("Cannot find square root");
    let a2 = r2, c2 = e9.pow(e9.mul(e9.ONE, i2), n2), l2 = e9.pow(s2, o2), d2 = e9.pow(s2, n2);
    for (; !e9.eql(d2, e9.ONE); ) {
      if (e9.eql(d2, e9.ZERO)) return e9.ZERO;
      let t3 = 1;
      for (let n4 = e9.sqr(d2); t3 < a2 && !e9.eql(n4, e9.ONE); t3++) n4 = e9.sqr(n4);
      const n3 = e9.pow(c2, xi << BigInt(a2 - t3 - 1));
      c2 = e9.sqr(n3), l2 = e9.mul(l2, n3), d2 = e9.mul(d2, c2), a2 = t3;
    }
    return l2;
  };
}
function Di(e8) {
  if (e8 % Li === Mi) {
    const t2 = (e8 + xi) / Li;
    return function(e9, n2) {
      const r2 = e9.pow(n2, t2);
      if (!e9.eql(e9.sqr(r2), n2)) throw new Error("Cannot find square root");
      return r2;
    };
  }
  if (e8 % Oi === Ti) {
    const t2 = (e8 - Ti) / Oi;
    return function(e9, n2) {
      const r2 = e9.mul(n2, Ai), i2 = e9.pow(r2, t2), o2 = e9.mul(n2, i2), s2 = e9.mul(e9.mul(o2, Ai), i2), a2 = e9.mul(o2, e9.sub(s2, e9.ONE));
      if (!e9.eql(e9.sqr(a2), n2)) throw new Error("Cannot find square root");
      return a2;
    };
  }
  return Ni(e8);
}
BigInt(9), BigInt(16), ri.isNegativeLE = (e8, t2) => (Ri(e8, t2) & xi) === xi;
var Bi = ["create", "isValid", "is0", "neg", "inv", "sqrt", "sqr", "eql", "add", "sub", "mul", "pow", "div", "addN", "subN", "mulN", "sqrN"];
function $i(e8, t2, n2) {
  if (n2 < ki) throw new Error("Expected power > 0");
  if (n2 === ki) return e8.ONE;
  if (n2 === xi) return t2;
  let r2 = e8.ONE, i2 = t2;
  for (; n2 > ki; ) n2 & xi && (r2 = e8.mul(r2, i2)), i2 = e8.sqr(i2), n2 >>= xi;
  return r2;
}
function ji(e8, t2) {
  const n2 = new Array(t2.length), r2 = t2.reduce((t3, r3, i3) => e8.is0(r3) ? t3 : (n2[i3] = t3, e8.mul(t3, r3)), e8.ONE), i2 = e8.inv(r2);
  return t2.reduceRight((t3, r3, i3) => e8.is0(r3) ? t3 : (n2[i3] = e8.mul(t3, n2[i3]), e8.mul(t3, r3)), i2), n2;
}
function Ki(e8) {
  const t2 = (e8 - xi) / Ai;
  return (e9, n2) => e9.pow(n2, t2);
}
function Fi(e8, t2) {
  const n2 = void 0 !== t2 ? t2 : e8.toString(2).length;
  return { nBitLength: n2, nByteLength: Math.ceil(n2 / 8) };
}
function Ui(e8) {
  if ("bigint" != typeof e8) throw new Error("field order must be bigint");
  const t2 = e8.toString(2).length;
  return Math.ceil(t2 / 8);
}
function Hi(e8) {
  const t2 = Ui(e8);
  return t2 + Math.ceil(t2 / 2);
}
Object.defineProperty(ni, "__esModule", { value: true }), ni.wNAF = function(e8, t2) {
  const n2 = (e9, t3) => {
    const n3 = t3.negate();
    return e9 ? n3 : t3;
  }, r2 = (e9) => {
    if (!Number.isSafeInteger(e9) || e9 <= 0 || e9 > t2) throw new Error(`Wrong window size=${e9}, should be [1..${t2}]`);
  }, i2 = (e9) => (r2(e9), { windows: Math.ceil(t2 / e9) + 1, windowSize: 2 ** (e9 - 1) });
  return { constTimeNegate: n2, unsafeLadder(t3, n3) {
    let r3 = e8.ZERO, i3 = t3;
    for (; n3 > Vi; ) n3 & Wi && (r3 = r3.add(i3)), i3 = i3.double(), n3 >>= Wi;
    return r3;
  }, precomputeWindow(e9, t3) {
    const { windows: n3, windowSize: r3 } = i2(t3), o2 = [];
    let s2 = e9, a2 = s2;
    for (let e10 = 0; e10 < n3; e10++) {
      a2 = s2, o2.push(a2);
      for (let e11 = 1; e11 < r3; e11++) a2 = a2.add(s2), o2.push(a2);
      s2 = a2.double();
    }
    return o2;
  }, wNAF(t3, r3, o2) {
    const { windows: s2, windowSize: a2 } = i2(t3);
    let c2 = e8.ZERO, l2 = e8.BASE;
    const d2 = BigInt(2 ** t3 - 1), u2 = 2 ** t3, h2 = BigInt(t3);
    for (let e9 = 0; e9 < s2; e9++) {
      const t4 = e9 * a2;
      let i3 = Number(o2 & d2);
      o2 >>= h2, i3 > a2 && (i3 -= u2, o2 += Wi);
      const s3 = t4, f2 = t4 + Math.abs(i3) - 1, p2 = e9 % 2 != 0, g2 = i3 < 0;
      0 === i3 ? l2 = l2.add(n2(p2, r3[s3])) : c2 = c2.add(n2(g2, r3[f2]));
    }
    return { p: c2, f: l2 };
  }, wNAFCached(e9, t3, n3) {
    const r3 = Yi.get(e9) || 1;
    let i3 = Gi.get(e9);
    return i3 || (i3 = this.precomputeWindow(e9, r3), 1 !== r3 && Gi.set(e9, n3(i3))), this.wNAF(r3, i3, t3);
  }, setWindowSize(e9, t3) {
    r2(t3), Yi.set(e9, t3), Gi.delete(e9);
  } };
}, ni.pippenger = function(e8, t2, n2, r2) {
  if (!Array.isArray(n2) || !Array.isArray(r2) || r2.length !== n2.length) throw new Error("arrays of points and scalars must have equal length");
  r2.forEach((e9, n3) => {
    if (!t2.isValid(e9)) throw new Error(`wrong scalar at index ${n3}`);
  }), n2.forEach((t3, n3) => {
    if (!(t3 instanceof e8)) throw new Error(`wrong point at index ${n3}`);
  });
  const i2 = (0, qi.bitLen)(BigInt(n2.length)), o2 = i2 > 12 ? i2 - 3 : i2 > 4 ? i2 - 2 : i2 ? 2 : 1, s2 = (1 << o2) - 1, a2 = new Array(s2 + 1).fill(e8.ZERO), c2 = Math.floor((t2.BITS - 1) / o2) * o2;
  let l2 = e8.ZERO;
  for (let t3 = c2; t3 >= 0; t3 -= o2) {
    a2.fill(e8.ZERO);
    for (let e9 = 0; e9 < r2.length; e9++) {
      const i4 = r2[e9], o3 = Number(i4 >> BigInt(t3) & BigInt(s2));
      a2[o3] = a2[o3].add(n2[e9]);
    }
    let i3 = e8.ZERO;
    for (let t4 = a2.length - 1, n3 = e8.ZERO; t4 > 0; t4--) n3 = n3.add(a2[t4]), i3 = i3.add(n3);
    if (l2 = l2.add(i3), 0 !== t3) for (let e9 = 0; e9 < o2; e9++) l2 = l2.double();
  }
  return l2;
}, ni.validateBasic = function(e8) {
  return (0, zi.validateField)(e8.Fp), (0, qi.validateObject)(e8, { n: "bigint", h: "bigint", Gx: "field", Gy: "field" }, { nBitLength: "isSafeInteger", nByteLength: "isSafeInteger" }), Object.freeze({ ...(0, zi.nLength)(e8.n, e8.nBitLength), ...e8, p: e8.Fp.ORDER });
};
var zi = ri;
var qi = ii;
var Vi = BigInt(0);
var Wi = BigInt(1);
var Gi = /* @__PURE__ */ new WeakMap();
var Yi = /* @__PURE__ */ new WeakMap();
Object.defineProperty(ti, "__esModule", { value: true }), ti.twistedEdwards = function(e8) {
  const t2 = function(e9) {
    const t3 = (0, Zi.validateBasic)(e9);
    return Xi.validateObject(e9, { hash: "function", a: "bigint", d: "bigint", randomBytes: "function" }, { adjustScalarBytes: "function", domain: "function", uvRatio: "function", mapToCurve: "function" }), Object.freeze({ ...t3 });
  }(e8), { Fp: n2, n: r2, prehash: i2, hash: o2, randomBytes: s2, nByteLength: a2, h: c2 } = t2, l2 = no << BigInt(8 * a2) - to, d2 = n2.create, u2 = (0, Ji.Field)(t2.n, t2.nBitLength), h2 = t2.uvRatio || ((e9, t3) => {
    try {
      return { isValid: true, value: n2.sqrt(e9 * n2.inv(t3)) };
    } catch (e10) {
      return { isValid: false, value: eo };
    }
  }), f2 = t2.adjustScalarBytes || ((e9) => e9), p2 = t2.domain || ((e9, t3, n3) => {
    if ((0, Qi.abool)("phflag", n3), t3.length || n3) throw new Error("Contexts/pre-hash are not supported");
    return e9;
  });
  function g2(e9, t3) {
    Xi.aInRange("coordinate " + e9, t3, eo, l2);
  }
  function m2(e9) {
    if (!(e9 instanceof b2)) throw new Error("ExtendedPoint expected");
  }
  const y2 = (0, Qi.memoized)((e9, t3) => {
    const { ex: r3, ey: i3, ez: o3 } = e9, s3 = e9.is0();
    null == t3 && (t3 = s3 ? ro : n2.inv(o3));
    const a3 = d2(r3 * t3), c3 = d2(i3 * t3), l3 = d2(o3 * t3);
    if (s3) return { x: eo, y: to };
    if (l3 !== to) throw new Error("invZ was invalid");
    return { x: a3, y: c3 };
  }), v2 = (0, Qi.memoized)((e9) => {
    const { a: n3, d: r3 } = t2;
    if (e9.is0()) throw new Error("bad point: ZERO");
    const { ex: i3, ey: o3, ez: s3, et: a3 } = e9, c3 = d2(i3 * i3), l3 = d2(o3 * o3), u3 = d2(s3 * s3), h3 = d2(u3 * u3), f3 = d2(c3 * n3);
    if (d2(u3 * d2(f3 + l3)) !== d2(h3 + d2(r3 * d2(c3 * l3)))) throw new Error("bad point: equation left != right (1)");
    if (d2(i3 * o3) !== d2(s3 * a3)) throw new Error("bad point: equation left != right (2)");
    return true;
  });
  class b2 {
    constructor(e9, t3, n3, r3) {
      this.ex = e9, this.ey = t3, this.ez = n3, this.et = r3, g2("x", e9), g2("y", t3), g2("z", n3), g2("t", r3), Object.freeze(this);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    static fromAffine(e9) {
      if (e9 instanceof b2) throw new Error("extended point not allowed");
      const { x: t3, y: n3 } = e9 || {};
      return g2("x", t3), g2("y", n3), new b2(t3, n3, to, d2(t3 * n3));
    }
    static normalizeZ(e9) {
      const t3 = n2.invertBatch(e9.map((e10) => e10.ez));
      return e9.map((e10, n3) => e10.toAffine(t3[n3])).map(b2.fromAffine);
    }
    static msm(e9, t3) {
      return (0, Zi.pippenger)(b2, u2, e9, t3);
    }
    _setWindowSize(e9) {
      C2.setWindowSize(this, e9);
    }
    assertValidity() {
      v2(this);
    }
    equals(e9) {
      m2(e9);
      const { ex: t3, ey: n3, ez: r3 } = this, { ex: i3, ey: o3, ez: s3 } = e9, a3 = d2(t3 * s3), c3 = d2(i3 * r3), l3 = d2(n3 * s3), u3 = d2(o3 * r3);
      return a3 === c3 && l3 === u3;
    }
    is0() {
      return this.equals(b2.ZERO);
    }
    negate() {
      return new b2(d2(-this.ex), this.ey, this.ez, d2(-this.et));
    }
    double() {
      const { a: e9 } = t2, { ex: n3, ey: r3, ez: i3 } = this, o3 = d2(n3 * n3), s3 = d2(r3 * r3), a3 = d2(no * d2(i3 * i3)), c3 = d2(e9 * o3), l3 = n3 + r3, u3 = d2(d2(l3 * l3) - o3 - s3), h3 = c3 + s3, f3 = h3 - a3, p3 = c3 - s3, g3 = d2(u3 * f3), m3 = d2(h3 * p3), y3 = d2(u3 * p3), v3 = d2(f3 * h3);
      return new b2(g3, m3, v3, y3);
    }
    add(e9) {
      m2(e9);
      const { a: n3, d: r3 } = t2, { ex: i3, ey: o3, ez: s3, et: a3 } = this, { ex: c3, ey: l3, ez: u3, et: h3 } = e9;
      if (n3 === BigInt(-1)) {
        const e10 = d2((o3 - i3) * (l3 + c3)), t3 = d2((o3 + i3) * (l3 - c3)), n4 = d2(t3 - e10);
        if (n4 === eo) return this.double();
        const r4 = d2(s3 * no * h3), f4 = d2(a3 * no * u3), p4 = f4 + r4, g4 = t3 + e10, m3 = f4 - r4, y4 = d2(p4 * n4), v4 = d2(g4 * m3), w4 = d2(p4 * m3), E4 = d2(n4 * g4);
        return new b2(y4, v4, E4, w4);
      }
      const f3 = d2(i3 * c3), p3 = d2(o3 * l3), g3 = d2(a3 * r3 * h3), y3 = d2(s3 * u3), v3 = d2((i3 + o3) * (c3 + l3) - f3 - p3), w3 = y3 - g3, E3 = y3 + g3, C3 = d2(p3 - n3 * f3), _3 = d2(v3 * w3), S3 = d2(E3 * C3), k3 = d2(v3 * C3), x3 = d2(w3 * E3);
      return new b2(_3, S3, x3, k3);
    }
    subtract(e9) {
      return this.add(e9.negate());
    }
    wNAF(e9) {
      return C2.wNAFCached(this, e9, b2.normalizeZ);
    }
    multiply(e9) {
      const t3 = e9;
      Xi.aInRange("scalar", t3, to, r2);
      const { p: n3, f: i3 } = this.wNAF(t3);
      return b2.normalizeZ([n3, i3])[0];
    }
    multiplyUnsafe(e9) {
      const t3 = e9;
      return Xi.aInRange("scalar", t3, eo, r2), t3 === eo ? E2 : this.equals(E2) || t3 === to ? this : this.equals(w2) ? this.wNAF(t3).p : C2.unsafeLadder(this, t3);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(c2).is0();
    }
    isTorsionFree() {
      return C2.unsafeLadder(this, r2).is0();
    }
    toAffine(e9) {
      return y2(this, e9);
    }
    clearCofactor() {
      const { h: e9 } = t2;
      return e9 === to ? this : this.multiplyUnsafe(e9);
    }
    static fromHex(e9, r3 = false) {
      const { d: i3, a: o3 } = t2, s3 = n2.BYTES;
      e9 = (0, Qi.ensureBytes)("pointHex", e9, s3), (0, Qi.abool)("zip215", r3);
      const a3 = e9.slice(), c3 = e9[s3 - 1];
      a3[s3 - 1] = -129 & c3;
      const u3 = Xi.bytesToNumberLE(a3), f3 = r3 ? l2 : n2.ORDER;
      Xi.aInRange("pointHex.y", u3, eo, f3);
      const p3 = d2(u3 * u3), g3 = d2(p3 - to), m3 = d2(i3 * p3 - o3);
      let { isValid: y3, value: v3 } = h2(g3, m3);
      if (!y3) throw new Error("Point.fromHex: invalid y coordinate");
      const w3 = (v3 & to) === to, E3 = 0 != (128 & c3);
      if (!r3 && v3 === eo && E3) throw new Error("Point.fromHex: x=0 and x_0=1");
      return E3 !== w3 && (v3 = d2(-v3)), b2.fromAffine({ x: v3, y: u3 });
    }
    static fromPrivateKey(e9) {
      return k2(e9).point;
    }
    toRawBytes() {
      const { x: e9, y: t3 } = this.toAffine(), r3 = Xi.numberToBytesLE(t3, n2.BYTES);
      return r3[r3.length - 1] |= e9 & to ? 128 : 0, r3;
    }
    toHex() {
      return Xi.bytesToHex(this.toRawBytes());
    }
  }
  b2.BASE = new b2(t2.Gx, t2.Gy, to, d2(t2.Gx * t2.Gy)), b2.ZERO = new b2(eo, to, to, eo);
  const { BASE: w2, ZERO: E2 } = b2, C2 = (0, Zi.wNAF)(b2, 8 * a2);
  function _2(e9) {
    return (0, Ji.mod)(e9, r2);
  }
  function S2(e9) {
    return _2(Xi.bytesToNumberLE(e9));
  }
  function k2(e9) {
    const t3 = a2;
    e9 = (0, Qi.ensureBytes)("private key", e9, t3);
    const n3 = (0, Qi.ensureBytes)("hashed private key", o2(e9), 2 * t3), r3 = f2(n3.slice(0, t3)), i3 = n3.slice(t3, 2 * t3), s3 = S2(r3), c3 = w2.multiply(s3), l3 = c3.toRawBytes();
    return { head: r3, prefix: i3, scalar: s3, point: c3, pointBytes: l3 };
  }
  function x2(e9 = new Uint8Array(), ...t3) {
    const n3 = Xi.concatBytes(...t3);
    return S2(o2(p2(n3, (0, Qi.ensureBytes)("context", e9), !!i2)));
  }
  const A2 = io;
  w2._setWindowSize(8);
  const M2 = { getExtendedPublicKey: k2, randomPrivateKey: () => s2(n2.BYTES), precompute: (e9 = 8, t3 = b2.BASE) => (t3._setWindowSize(e9), t3.multiply(BigInt(3)), t3) };
  return { CURVE: t2, getPublicKey: function(e9) {
    return k2(e9).pointBytes;
  }, sign: function(e9, t3, o3 = {}) {
    e9 = (0, Qi.ensureBytes)("message", e9), i2 && (e9 = i2(e9));
    const { prefix: s3, scalar: c3, pointBytes: l3 } = k2(t3), d3 = x2(o3.context, s3, e9), u3 = w2.multiply(d3).toRawBytes(), h3 = _2(d3 + x2(o3.context, u3, l3, e9) * c3);
    Xi.aInRange("signature.s", h3, eo, r2);
    const f3 = Xi.concatBytes(u3, Xi.numberToBytesLE(h3, n2.BYTES));
    return (0, Qi.ensureBytes)("result", f3, 2 * a2);
  }, verify: function(e9, t3, r3, o3 = A2) {
    const { context: s3, zip215: a3 } = o3, c3 = n2.BYTES;
    e9 = (0, Qi.ensureBytes)("signature", e9, 2 * c3), t3 = (0, Qi.ensureBytes)("message", t3), void 0 !== a3 && (0, Qi.abool)("zip215", a3), i2 && (t3 = i2(t3));
    const l3 = Xi.bytesToNumberLE(e9.slice(c3, 2 * c3));
    let d3, u3, h3;
    try {
      d3 = b2.fromHex(r3, a3), u3 = b2.fromHex(e9.slice(0, c3), a3), h3 = w2.multiplyUnsafe(l3);
    } catch (e10) {
      return false;
    }
    if (!a3 && d3.isSmallOrder()) return false;
    const f3 = x2(s3, u3.toRawBytes(), d3.toRawBytes(), t3);
    return u3.add(d3.multiplyUnsafe(f3)).subtract(h3).clearCofactor().equals(b2.ZERO);
  }, ExtendedPoint: b2, utils: M2 };
};
var Zi = ni;
var Ji = ri;
var Xi = ii;
var Qi = ii;
var eo = BigInt(0);
var to = BigInt(1);
var no = BigInt(2);
var ro = BigInt(8);
var io = { zip215: true };
var oo = {};
Object.defineProperty(oo, "__esModule", { value: true }), oo.expand_message_xmd = fo, oo.expand_message_xof = po, oo.hash_to_field = go, oo.isogenyMap = function(e8, t2) {
  const n2 = t2.map((e9) => Array.from(e9).reverse());
  return (t3, r2) => {
    const [i2, o2, s2, a2] = n2.map((n3) => n3.reduce((n4, r3) => e8.add(e8.mul(n4, t3), r3)));
    return t3 = e8.div(i2, o2), r2 = e8.mul(r2, e8.div(s2, a2)), { x: t3, y: r2 };
  };
}, oo.createHasher = function(e8, t2, n2) {
  if ("function" != typeof t2) throw new Error("mapToCurve() must be defined");
  return { hashToCurve(r2, i2) {
    const o2 = go(r2, 2, { ...n2, DST: n2.DST, ...i2 }), s2 = e8.fromAffine(t2(o2[0])), a2 = e8.fromAffine(t2(o2[1])), c2 = s2.add(a2).clearCofactor();
    return c2.assertValidity(), c2;
  }, encodeToCurve(r2, i2) {
    const o2 = go(r2, 1, { ...n2, DST: n2.encodeDST, ...i2 }), s2 = e8.fromAffine(t2(o2[0])).clearCofactor();
    return s2.assertValidity(), s2;
  }, mapToCurve(n3) {
    if (!Array.isArray(n3)) throw new Error("mapToCurve: expected array of bigints");
    for (const e9 of n3) if ("bigint" != typeof e9) throw new Error(`mapToCurve: expected array of bigints, got ${e9} in array`);
    const r2 = e8.fromAffine(t2(n3)).clearCofactor();
    return r2.assertValidity(), r2;
  } };
};
var so = ri;
var ao = ii;
var co = ao.bytesToNumberBE;
function lo(e8, t2) {
  if (ho(e8), ho(t2), e8 < 0 || e8 >= 1 << 8 * t2) throw new Error(`bad I2OSP call: value=${e8} length=${t2}`);
  const n2 = Array.from({ length: t2 }).fill(0);
  for (let r2 = t2 - 1; r2 >= 0; r2--) n2[r2] = 255 & e8, e8 >>>= 8;
  return new Uint8Array(n2);
}
function uo(e8, t2) {
  const n2 = new Uint8Array(e8.length);
  for (let r2 = 0; r2 < e8.length; r2++) n2[r2] = e8[r2] ^ t2[r2];
  return n2;
}
function ho(e8) {
  if (!Number.isSafeInteger(e8)) throw new Error("number expected");
}
function fo(e8, t2, n2, r2) {
  (0, ao.abytes)(e8), (0, ao.abytes)(t2), ho(n2), t2.length > 255 && (t2 = r2((0, ao.concatBytes)((0, ao.utf8ToBytes)("H2C-OVERSIZE-DST-"), t2)));
  const { outputLen: i2, blockLen: o2 } = r2, s2 = Math.ceil(n2 / i2);
  if (n2 > 65535 || s2 > 255) throw new Error("expand_message_xmd: invalid lenInBytes");
  const a2 = (0, ao.concatBytes)(t2, lo(t2.length, 1)), c2 = lo(0, o2), l2 = lo(n2, 2), d2 = new Array(s2), u2 = r2((0, ao.concatBytes)(c2, e8, l2, lo(0, 1), a2));
  d2[0] = r2((0, ao.concatBytes)(u2, lo(1, 1), a2));
  for (let e9 = 1; e9 <= s2; e9++) {
    const t3 = [uo(u2, d2[e9 - 1]), lo(e9 + 1, 1), a2];
    d2[e9] = r2((0, ao.concatBytes)(...t3));
  }
  return (0, ao.concatBytes)(...d2).slice(0, n2);
}
function po(e8, t2, n2, r2, i2) {
  if ((0, ao.abytes)(e8), (0, ao.abytes)(t2), ho(n2), t2.length > 255) {
    const e9 = Math.ceil(2 * r2 / 8);
    t2 = i2.create({ dkLen: e9 }).update((0, ao.utf8ToBytes)("H2C-OVERSIZE-DST-")).update(t2).digest();
  }
  if (n2 > 65535 || t2.length > 255) throw new Error("expand_message_xof: invalid lenInBytes");
  return i2.create({ dkLen: n2 }).update(e8).update(lo(n2, 2)).update(t2).update(lo(t2.length, 1)).digest();
}
function go(e8, t2, n2) {
  (0, ao.validateObject)(n2, { DST: "stringOrUint8Array", p: "bigint", m: "isSafeInteger", k: "isSafeInteger", hash: "hash" });
  const { p: r2, k: i2, m: o2, hash: s2, expand: a2, DST: c2 } = n2;
  (0, ao.abytes)(e8), ho(t2);
  const l2 = "string" == typeof c2 ? (0, ao.utf8ToBytes)(c2) : c2, d2 = r2.toString(2).length, u2 = Math.ceil((d2 + i2) / 8), h2 = t2 * o2 * u2;
  let f2;
  if ("xmd" === a2) f2 = fo(e8, l2, h2, s2);
  else if ("xof" === a2) f2 = po(e8, l2, h2, i2, s2);
  else {
    if ("_internal_pass" !== a2) throw new Error('expand must be "xmd" or "xof"');
    f2 = e8;
  }
  const p2 = new Array(t2);
  for (let e9 = 0; e9 < t2; e9++) {
    const t3 = new Array(o2);
    for (let n3 = 0; n3 < o2; n3++) {
      const i3 = u2 * (n3 + e9 * o2), s3 = f2.subarray(i3, i3 + u2);
      t3[n3] = (0, so.mod)(co(s3), r2);
    }
    p2[e9] = t3;
  }
  return p2;
}
var mo = {};
Object.defineProperty(mo, "__esModule", { value: true }), mo.montgomery = function(e8) {
  const t2 = function(e9) {
    return (0, vo.validateObject)(e9, { a: "bigint" }, { montgomeryBits: "isSafeInteger", nByteLength: "isSafeInteger", adjustScalarBytes: "function", domain: "function", powPminus2: "function", Gu: "bigint" }), Object.freeze({ ...e9 });
  }(e8), { P: n2 } = t2, r2 = (e9) => (0, yo.mod)(e9, n2), i2 = t2.montgomeryBits, o2 = Math.ceil(i2 / 8), s2 = t2.nByteLength, a2 = t2.adjustScalarBytes || ((e9) => e9), c2 = t2.powPminus2 || ((e9) => (0, yo.pow)(e9, n2 - BigInt(2), n2));
  function l2(e9, t3, n3) {
    const i3 = r2(e9 * (t3 - n3));
    return [t3 = r2(t3 - i3), n3 = r2(n3 + i3)];
  }
  const d2 = (t2.a - BigInt(2)) / BigInt(4);
  function u2(e9) {
    return (0, vo.numberToBytesLE)(r2(e9), o2);
  }
  function h2(e9, t3) {
    const h3 = function(e10) {
      const t4 = (0, vo.ensureBytes)("u coordinate", e10, o2);
      return 32 === s2 && (t4[31] &= 127), (0, vo.bytesToNumberLE)(t4);
    }(t3), f3 = function(e10) {
      const t4 = (0, vo.ensureBytes)("scalar", e10), n3 = t4.length;
      if (n3 !== o2 && n3 !== s2) throw new Error(`Expected ${o2} or ${s2} bytes, got ${n3}`);
      return (0, vo.bytesToNumberLE)(a2(t4));
    }(e9), p3 = function(e10, t4) {
      (0, vo.aInRange)("u", e10, bo, n2), (0, vo.aInRange)("scalar", t4, bo, n2);
      const o3 = t4, s3 = e10;
      let a3, u3 = wo, h4 = bo, f4 = e10, p4 = wo, g2 = bo;
      for (let e11 = BigInt(i2 - 1); e11 >= bo; e11--) {
        const t5 = o3 >> e11 & wo;
        g2 ^= t5, a3 = l2(g2, u3, f4), u3 = a3[0], f4 = a3[1], a3 = l2(g2, h4, p4), h4 = a3[0], p4 = a3[1], g2 = t5;
        const n3 = u3 + h4, i3 = r2(n3 * n3), c3 = u3 - h4, m3 = r2(c3 * c3), y2 = i3 - m3, v2 = f4 + p4, b2 = r2((f4 - p4) * n3), w2 = r2(v2 * c3), E2 = b2 + w2, C2 = b2 - w2;
        f4 = r2(E2 * E2), p4 = r2(s3 * r2(C2 * C2)), u3 = r2(i3 * m3), h4 = r2(y2 * (i3 + r2(d2 * y2)));
      }
      a3 = l2(g2, u3, f4), u3 = a3[0], f4 = a3[1], a3 = l2(g2, h4, p4), h4 = a3[0], p4 = a3[1];
      const m2 = c2(h4);
      return r2(u3 * m2);
    }(h3, f3);
    if (p3 === bo) throw new Error("Invalid private or public key received");
    return u2(p3);
  }
  const f2 = u2(t2.Gu);
  function p2(e9) {
    return h2(e9, f2);
  }
  return { scalarMult: h2, scalarMultBase: p2, getSharedSecret: (e9, t3) => h2(e9, t3), getPublicKey: (e9) => p2(e9), utils: { randomPrivateKey: () => t2.randomBytes(t2.nByteLength) }, GuBytes: f2 };
};
var yo = ri;
var vo = ii;
var bo = BigInt(0);
var wo = BigInt(1);
!function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.hash_to_ristretto255 = e8.hashToRistretto255 = e8.RistrettoPoint = e8.encodeToCurve = e8.hashToCurve = e8.edwardsToMontgomery = e8.x25519 = e8.ed25519ph = e8.ed25519ctx = e8.ed25519 = e8.ED25519_TORSION_SUBGROUP = void 0, e8.edwardsToMontgomeryPub = C2, e8.edwardsToMontgomeryPriv = function(e9) {
    const t3 = w2.hash(e9.subarray(0, 32));
    return w2.adjustScalarBytes(t3).subarray(0, 32);
  };
  const t2 = rr, n2 = pr, r2 = ti, i2 = oo, o2 = ri, s2 = mo, a2 = ii, c2 = BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819949"), l2 = BigInt("19681161376707505956807079304988542015446066515923890162744021073123829784752"), d2 = BigInt(0), u2 = BigInt(1), h2 = BigInt(2), f2 = BigInt(3), p2 = BigInt(5), g2 = BigInt(8);
  function m2(e9) {
    const t3 = BigInt(10), n3 = BigInt(20), r3 = BigInt(40), i3 = BigInt(80), s3 = c2, a3 = e9 * e9 % s3 * e9 % s3, l3 = (0, o2.pow2)(a3, h2, s3) * a3 % s3, d3 = (0, o2.pow2)(l3, u2, s3) * e9 % s3, f3 = (0, o2.pow2)(d3, p2, s3) * d3 % s3, g3 = (0, o2.pow2)(f3, t3, s3) * f3 % s3, m3 = (0, o2.pow2)(g3, n3, s3) * g3 % s3, y3 = (0, o2.pow2)(m3, r3, s3) * m3 % s3, v3 = (0, o2.pow2)(y3, i3, s3) * y3 % s3, b3 = (0, o2.pow2)(v3, i3, s3) * y3 % s3, w3 = (0, o2.pow2)(b3, t3, s3) * f3 % s3;
    return { pow_p_5_8: (0, o2.pow2)(w3, h2, s3) * e9 % s3, b2: a3 };
  }
  function y2(e9) {
    return e9[0] &= 248, e9[31] &= 127, e9[31] |= 64, e9;
  }
  function v2(e9, t3) {
    const n3 = c2, r3 = (0, o2.mod)(t3 * t3 * t3, n3), i3 = m2(e9 * (0, o2.mod)(r3 * r3 * t3, n3)).pow_p_5_8;
    let s3 = (0, o2.mod)(e9 * r3 * i3, n3);
    const a3 = (0, o2.mod)(t3 * s3 * s3, n3), d3 = s3, u3 = (0, o2.mod)(s3 * l2, n3), h3 = a3 === e9, f3 = a3 === (0, o2.mod)(-e9, n3), p3 = a3 === (0, o2.mod)(-e9 * l2, n3);
    return h3 && (s3 = d3), (f3 || p3) && (s3 = u3), (0, o2.isNegativeLE)(s3, n3) && (s3 = (0, o2.mod)(-s3, n3)), { isValid: h3 || f3, value: s3 };
  }
  e8.ED25519_TORSION_SUBGROUP = ["0100000000000000000000000000000000000000000000000000000000000000", "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a", "0000000000000000000000000000000000000000000000000000000000000080", "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05", "ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f", "26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85", "0000000000000000000000000000000000000000000000000000000000000000", "c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa"];
  const b2 = (0, o2.Field)(c2, void 0, true), w2 = { a: BigInt(-1), d: BigInt("37095705934669439343138083508754565189542113879843219016388785533085940283555"), Fp: b2, n: BigInt("7237005577332262213973186563042994240857116359379907606001950938285454250989"), h: g2, Gx: BigInt("15112221349535400772501151409588531511454012693041857206046113283949847762202"), Gy: BigInt("46316835694926478169428394003475163141307993866256225615783033603165251855960"), hash: t2.sha512, randomBytes: n2.randomBytes, adjustScalarBytes: y2, uvRatio: v2 };
  function E2(e9, t3, r3) {
    if (t3.length > 255) throw new Error("Context is too big");
    return (0, n2.concatBytes)((0, n2.utf8ToBytes)("SigEd25519 no Ed25519 collisions"), new Uint8Array([r3 ? 1 : 0, t3.length]), t3, e9);
  }
  function C2(t3) {
    const { y: n3 } = e8.ed25519.ExtendedPoint.fromHex(t3), r3 = BigInt(1);
    return b2.toBytes(b2.create((r3 + n3) * b2.inv(r3 - n3)));
  }
  e8.ed25519 = (0, r2.twistedEdwards)(w2), e8.ed25519ctx = (0, r2.twistedEdwards)({ ...w2, domain: E2 }), e8.ed25519ph = (0, r2.twistedEdwards)(Object.assign({}, w2, { domain: E2, prehash: t2.sha512 })), e8.x25519 = (0, s2.montgomery)({ P: c2, a: BigInt(486662), montgomeryBits: 255, nByteLength: 32, Gu: BigInt(9), powPminus2: (e9) => {
    const t3 = c2, { pow_p_5_8: n3, b2: r3 } = m2(e9);
    return (0, o2.mod)((0, o2.pow2)(n3, f2, t3) * r3, t3);
  }, adjustScalarBytes: y2, randomBytes: n2.randomBytes }), e8.edwardsToMontgomery = C2;
  const _2 = (b2.ORDER + f2) / g2, S2 = b2.pow(h2, _2), k2 = b2.sqrt(b2.neg(b2.ONE)), x2 = (0, o2.FpSqrtEven)(b2, b2.neg(BigInt(486664)));
  const A2 = (0, i2.createHasher)(e8.ed25519.ExtendedPoint, (e9) => function(e10) {
    const { xMn: t3, xMd: n3, yMn: r3, yMd: i3 } = function(e11) {
      const t4 = (b2.ORDER - p2) / g2, n4 = BigInt(486662);
      let r4 = b2.sqr(e11);
      r4 = b2.mul(r4, h2);
      let i4 = b2.add(r4, b2.ONE), o4 = b2.neg(n4), s4 = b2.sqr(i4), a4 = b2.mul(s4, i4), c4 = b2.mul(r4, n4);
      c4 = b2.mul(c4, o4), c4 = b2.add(c4, s4), c4 = b2.mul(c4, o4);
      let l4 = b2.sqr(a4);
      s4 = b2.sqr(l4), l4 = b2.mul(l4, a4), l4 = b2.mul(l4, c4), s4 = b2.mul(s4, l4);
      let d4 = b2.pow(s4, t4);
      d4 = b2.mul(d4, l4);
      let f4 = b2.mul(d4, k2);
      s4 = b2.sqr(d4), s4 = b2.mul(s4, a4);
      let m3 = b2.eql(s4, c4), y3 = b2.cmov(f4, d4, m3), v3 = b2.mul(o4, r4), w3 = b2.mul(d4, e11);
      w3 = b2.mul(w3, S2);
      let E3 = b2.mul(w3, k2), C3 = b2.mul(c4, r4);
      s4 = b2.sqr(w3), s4 = b2.mul(s4, a4);
      let _3 = b2.eql(s4, C3), x3 = b2.cmov(E3, w3, _3);
      s4 = b2.sqr(y3), s4 = b2.mul(s4, a4);
      let A3 = b2.eql(s4, c4), M3 = b2.cmov(v3, o4, A3), L3 = b2.cmov(x3, y3, A3), T3 = b2.isOdd(L3);
      return L3 = b2.cmov(L3, b2.neg(L3), A3 !== T3), { xMn: M3, xMd: i4, yMn: L3, yMd: u2 };
    }(e10);
    let o3 = b2.mul(t3, i3);
    o3 = b2.mul(o3, x2);
    let s3 = b2.mul(n3, r3), a3 = b2.sub(t3, n3), c3 = b2.add(t3, n3), l3 = b2.mul(s3, c3), d3 = b2.eql(l3, b2.ZERO);
    o3 = b2.cmov(o3, b2.ZERO, d3), s3 = b2.cmov(s3, b2.ONE, d3), a3 = b2.cmov(a3, b2.ONE, d3), c3 = b2.cmov(c3, b2.ONE, d3);
    const f3 = b2.invertBatch([s3, c3]);
    return { x: b2.mul(o3, f3[0]), y: b2.mul(a3, f3[1]) };
  }(e9[0]), { DST: "edwards25519_XMD:SHA-512_ELL2_RO_", encodeDST: "edwards25519_XMD:SHA-512_ELL2_NU_", p: b2.ORDER, m: 1, k: 128, expand: "xmd", hash: t2.sha512 });
  function M2(e9) {
    if (!(e9 instanceof $2)) throw new Error("RistrettoPoint expected");
  }
  e8.hashToCurve = A2.hashToCurve, e8.encodeToCurve = A2.encodeToCurve;
  const L2 = l2, T2 = BigInt("25063068953384623474111414158702152701244531502492656460079210482610430750235"), O2 = BigInt("54469307008909316920995813868745141605393597292927456921205312896311721017578"), R2 = BigInt("1159843021668779879193775521855586647937357759715417654439879720876111806838"), P2 = BigInt("40440834346308536858101042469323190826248399146238708352240133220865137265952"), I2 = (e9) => v2(u2, e9), N2 = BigInt("0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"), D2 = (t3) => e8.ed25519.CURVE.Fp.create((0, a2.bytesToNumberLE)(t3) & N2);
  function B2(t3) {
    const { d: n3 } = e8.ed25519.CURVE, r3 = e8.ed25519.CURVE.Fp.ORDER, i3 = e8.ed25519.CURVE.Fp.create, s3 = i3(L2 * t3 * t3), a3 = i3((s3 + u2) * R2);
    let c3 = BigInt(-1);
    const l3 = i3((c3 - n3 * s3) * i3(s3 + n3));
    let { isValid: d3, value: h3 } = v2(a3, l3), f3 = i3(h3 * t3);
    (0, o2.isNegativeLE)(f3, r3) || (f3 = i3(-f3)), d3 || (h3 = f3), d3 || (c3 = s3);
    const p3 = i3(c3 * (s3 - u2) * P2 - l3), g3 = h3 * h3, m3 = i3((h3 + h3) * l3), y3 = i3(p3 * T2), b3 = i3(u2 - g3), w3 = i3(u2 + g3);
    return new e8.ed25519.ExtendedPoint(i3(m3 * w3), i3(b3 * y3), i3(y3 * w3), i3(m3 * b3));
  }
  class $2 {
    constructor(e9) {
      this.ep = e9;
    }
    static fromAffine(t3) {
      return new $2(e8.ed25519.ExtendedPoint.fromAffine(t3));
    }
    static hashToCurve(e9) {
      e9 = (0, a2.ensureBytes)("ristrettoHash", e9, 64);
      const t3 = B2(D2(e9.slice(0, 32))), n3 = B2(D2(e9.slice(32, 64)));
      return new $2(t3.add(n3));
    }
    static fromHex(t3) {
      t3 = (0, a2.ensureBytes)("ristrettoHex", t3, 32);
      const { a: n3, d: r3 } = e8.ed25519.CURVE, i3 = e8.ed25519.CURVE.Fp.ORDER, s3 = e8.ed25519.CURVE.Fp.create, c3 = "RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint", l3 = D2(t3);
      if (!(0, a2.equalBytes)((0, a2.numberToBytesLE)(l3, 32), t3) || (0, o2.isNegativeLE)(l3, i3)) throw new Error(c3);
      const h3 = s3(l3 * l3), f3 = s3(u2 + n3 * h3), p3 = s3(u2 - n3 * h3), g3 = s3(f3 * f3), m3 = s3(p3 * p3), y3 = s3(n3 * r3 * g3 - m3), { isValid: v3, value: b3 } = I2(s3(y3 * m3)), w3 = s3(b3 * p3), E3 = s3(b3 * w3 * y3);
      let C3 = s3((l3 + l3) * w3);
      (0, o2.isNegativeLE)(C3, i3) && (C3 = s3(-C3));
      const _3 = s3(f3 * E3), S3 = s3(C3 * _3);
      if (!v3 || (0, o2.isNegativeLE)(S3, i3) || _3 === d2) throw new Error(c3);
      return new $2(new e8.ed25519.ExtendedPoint(C3, _3, u2, S3));
    }
    toRawBytes() {
      let { ex: t3, ey: n3, ez: r3, et: i3 } = this.ep;
      const s3 = e8.ed25519.CURVE.Fp.ORDER, c3 = e8.ed25519.CURVE.Fp.create, l3 = c3(c3(r3 + n3) * c3(r3 - n3)), d3 = c3(t3 * n3), u3 = c3(d3 * d3), { value: h3 } = I2(c3(l3 * u3)), f3 = c3(h3 * l3), p3 = c3(h3 * d3), g3 = c3(f3 * p3 * i3);
      let m3;
      if ((0, o2.isNegativeLE)(i3 * g3, s3)) {
        let e9 = c3(n3 * L2), r4 = c3(t3 * L2);
        t3 = e9, n3 = r4, m3 = c3(f3 * O2);
      } else m3 = p3;
      (0, o2.isNegativeLE)(t3 * g3, s3) && (n3 = c3(-n3));
      let y3 = c3((r3 - n3) * m3);
      return (0, o2.isNegativeLE)(y3, s3) && (y3 = c3(-y3)), (0, a2.numberToBytesLE)(y3, 32);
    }
    toHex() {
      return (0, a2.bytesToHex)(this.toRawBytes());
    }
    toString() {
      return this.toHex();
    }
    equals(t3) {
      M2(t3);
      const { ex: n3, ey: r3 } = this.ep, { ex: i3, ey: o3 } = t3.ep, s3 = e8.ed25519.CURVE.Fp.create, a3 = s3(n3 * o3) === s3(r3 * i3), c3 = s3(r3 * o3) === s3(n3 * i3);
      return a3 || c3;
    }
    add(e9) {
      return M2(e9), new $2(this.ep.add(e9.ep));
    }
    subtract(e9) {
      return M2(e9), new $2(this.ep.subtract(e9.ep));
    }
    multiply(e9) {
      return new $2(this.ep.multiply(e9));
    }
    multiplyUnsafe(e9) {
      return new $2(this.ep.multiplyUnsafe(e9));
    }
    double() {
      return new $2(this.ep.double());
    }
    negate() {
      return new $2(this.ep.negate());
    }
  }
  e8.RistrettoPoint = ($2.BASE || ($2.BASE = new $2(e8.ed25519.ExtendedPoint.BASE)), $2.ZERO || ($2.ZERO = new $2(e8.ed25519.ExtendedPoint.ZERO)), $2), e8.hashToRistretto255 = (e9, r3) => {
    const o3 = r3.DST, s3 = "string" == typeof o3 ? (0, n2.utf8ToBytes)(o3) : o3, a3 = (0, i2.expand_message_xmd)(e9, s3, 64, t2.sha512);
    return $2.hashToCurve(a3);
  }, e8.hash_to_ristretto255 = e8.hashToRistretto255;
}(nr);
var Eo = {};
var Co = {};
Object.defineProperty(Co, "__esModule", { value: true }), Co.sha224 = Co.sha256 = Co.SHA256 = void 0;
var _o = ir;
var So = pr;
var ko = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
var xo = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
var Ao = new Uint32Array(64);
var Mo = class extends _o.HashMD {
  constructor() {
    super(64, 32, 8, false), this.A = 0 | xo[0], this.B = 0 | xo[1], this.C = 0 | xo[2], this.D = 0 | xo[3], this.E = 0 | xo[4], this.F = 0 | xo[5], this.G = 0 | xo[6], this.H = 0 | xo[7];
  }
  get() {
    const { A: e8, B: t2, C: n2, D: r2, E: i2, F: o2, G: s2, H: a2 } = this;
    return [e8, t2, n2, r2, i2, o2, s2, a2];
  }
  set(e8, t2, n2, r2, i2, o2, s2, a2) {
    this.A = 0 | e8, this.B = 0 | t2, this.C = 0 | n2, this.D = 0 | r2, this.E = 0 | i2, this.F = 0 | o2, this.G = 0 | s2, this.H = 0 | a2;
  }
  process(e8, t2) {
    for (let n3 = 0; n3 < 16; n3++, t2 += 4) Ao[n3] = e8.getUint32(t2, false);
    for (let e9 = 16; e9 < 64; e9++) {
      const t3 = Ao[e9 - 15], n3 = Ao[e9 - 2], r3 = (0, So.rotr)(t3, 7) ^ (0, So.rotr)(t3, 18) ^ t3 >>> 3, i3 = (0, So.rotr)(n3, 17) ^ (0, So.rotr)(n3, 19) ^ n3 >>> 10;
      Ao[e9] = i3 + Ao[e9 - 7] + r3 + Ao[e9 - 16] | 0;
    }
    let { A: n2, B: r2, C: i2, D: o2, E: s2, F: a2, G: c2, H: l2 } = this;
    for (let e9 = 0; e9 < 64; e9++) {
      const t3 = l2 + ((0, So.rotr)(s2, 6) ^ (0, So.rotr)(s2, 11) ^ (0, So.rotr)(s2, 25)) + (0, _o.Chi)(s2, a2, c2) + ko[e9] + Ao[e9] | 0, d2 = ((0, So.rotr)(n2, 2) ^ (0, So.rotr)(n2, 13) ^ (0, So.rotr)(n2, 22)) + (0, _o.Maj)(n2, r2, i2) | 0;
      l2 = c2, c2 = a2, a2 = s2, s2 = o2 + t3 | 0, o2 = i2, i2 = r2, r2 = n2, n2 = t3 + d2 | 0;
    }
    n2 = n2 + this.A | 0, r2 = r2 + this.B | 0, i2 = i2 + this.C | 0, o2 = o2 + this.D | 0, s2 = s2 + this.E | 0, a2 = a2 + this.F | 0, c2 = c2 + this.G | 0, l2 = l2 + this.H | 0, this.set(n2, r2, i2, o2, s2, a2, c2, l2);
  }
  roundClean() {
    Ao.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0), this.buffer.fill(0);
  }
};
Co.SHA256 = Mo;
var Lo = class extends Mo {
  constructor() {
    super(), this.A = -1056596264, this.B = 914150663, this.C = 812702999, this.D = -150054599, this.E = -4191439, this.F = 1750603025, this.G = 1694076839, this.H = -1090891868, this.outputLen = 28;
  }
};
Co.sha256 = (0, So.wrapConstructor)(() => new Mo()), Co.sha224 = (0, So.wrapConstructor)(() => new Lo());
var To = {};
var Oo = {};
!function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.hmac = e8.HMAC = void 0;
  const t2 = or, n2 = pr;
  class r2 extends n2.Hash {
    constructor(e9, r3) {
      super(), this.finished = false, this.destroyed = false, (0, t2.hash)(e9);
      const i2 = (0, n2.toBytes)(r3);
      if (this.iHash = e9.create(), "function" != typeof this.iHash.update) throw new Error("Expected instance of class which extends utils.Hash");
      this.blockLen = this.iHash.blockLen, this.outputLen = this.iHash.outputLen;
      const o2 = this.blockLen, s2 = new Uint8Array(o2);
      s2.set(i2.length > o2 ? e9.create().update(i2).digest() : i2);
      for (let e10 = 0; e10 < s2.length; e10++) s2[e10] ^= 54;
      this.iHash.update(s2), this.oHash = e9.create();
      for (let e10 = 0; e10 < s2.length; e10++) s2[e10] ^= 106;
      this.oHash.update(s2), s2.fill(0);
    }
    update(e9) {
      return (0, t2.exists)(this), this.iHash.update(e9), this;
    }
    digestInto(e9) {
      (0, t2.exists)(this), (0, t2.bytes)(e9, this.outputLen), this.finished = true, this.iHash.digestInto(e9), this.oHash.update(e9), this.oHash.digestInto(e9), this.destroy();
    }
    digest() {
      const e9 = new Uint8Array(this.oHash.outputLen);
      return this.digestInto(e9), e9;
    }
    _cloneInto(e9) {
      e9 || (e9 = Object.create(Object.getPrototypeOf(this), {}));
      const { oHash: t3, iHash: n3, finished: r3, destroyed: i2, blockLen: o2, outputLen: s2 } = this;
      return e9.finished = r3, e9.destroyed = i2, e9.blockLen = o2, e9.outputLen = s2, e9.oHash = t3._cloneInto(e9.oHash), e9.iHash = n3._cloneInto(e9.iHash), e9;
    }
    destroy() {
      this.destroyed = true, this.oHash.destroy(), this.iHash.destroy();
    }
  }
  e8.HMAC = r2, e8.hmac = (e9, t3, n3) => new r2(e9, t3).update(n3).digest(), e8.hmac.create = (e9, t3) => new r2(e9, t3);
}(Oo);
var Ro = {};
!function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.DER = void 0, e8.weierstrassPoints = f2, e8.weierstrass = function(s3) {
    const a3 = function(e9) {
      const n3 = (0, t2.validateBasic)(e9);
      return r2.validateObject(n3, { hash: "hash", hmac: "function", randomBytes: "function" }, { bits2int: "function", bits2int_modN: "function", lowS: "boolean" }), Object.freeze({ lowS: true, ...n3 });
    }(s3), { Fp: d3, n: u3 } = a3, h3 = d3.BYTES + 1, p3 = 2 * d3.BYTES + 1;
    function g2(e9) {
      return n2.mod(e9, u3);
    }
    function m2(e9) {
      return n2.invert(e9, u3);
    }
    const { ProjectivePoint: y2, normPrivateKeyToScalar: v2, weierstrassEquation: b2, isWithinCurveOrder: w2 } = f2({ ...a3, toBytes(e9, t3, n3) {
      const o3 = t3.toAffine(), s4 = d3.toBytes(o3.x), a4 = r2.concatBytes;
      return (0, i2.abool)("isCompressed", n3), n3 ? a4(Uint8Array.from([t3.hasEvenY() ? 2 : 3]), s4) : a4(Uint8Array.from([4]), s4, d3.toBytes(o3.y));
    }, fromBytes(e9) {
      const t3 = e9.length, n3 = e9[0], i3 = e9.subarray(1);
      if (t3 !== h3 || 2 !== n3 && 3 !== n3) {
        if (t3 === p3 && 4 === n3) return { x: d3.fromBytes(i3.subarray(0, d3.BYTES)), y: d3.fromBytes(i3.subarray(d3.BYTES, 2 * d3.BYTES)) };
        throw new Error(`Point of length ${t3} was invalid. Expected ${h3} compressed bytes or ${p3} uncompressed bytes`);
      }
      {
        const t4 = r2.bytesToNumberBE(i3);
        if (!r2.inRange(t4, l2, d3.ORDER)) throw new Error("Point is not on curve");
        const o3 = b2(t4);
        let s4;
        try {
          s4 = d3.sqrt(o3);
        } catch (e10) {
          const t5 = e10 instanceof Error ? ": " + e10.message : "";
          throw new Error("Point is not on curve" + t5);
        }
        return 1 == (1 & n3) != ((s4 & l2) === l2) && (s4 = d3.neg(s4)), { x: t4, y: s4 };
      }
    } }), E2 = (e9) => r2.bytesToHex(r2.numberToBytesBE(e9, a3.nByteLength));
    function C2(e9) {
      return e9 > u3 >> l2;
    }
    const _2 = (e9, t3, n3) => r2.bytesToNumberBE(e9.slice(t3, n3));
    class S2 {
      constructor(e9, t3, n3) {
        this.r = e9, this.s = t3, this.recovery = n3, this.assertValidity();
      }
      static fromCompact(e9) {
        const t3 = a3.nByteLength;
        return e9 = (0, i2.ensureBytes)("compactSignature", e9, 2 * t3), new S2(_2(e9, 0, t3), _2(e9, t3, 2 * t3));
      }
      static fromDER(t3) {
        const { r: n3, s: r3 } = e8.DER.toSig((0, i2.ensureBytes)("DER", t3));
        return new S2(n3, r3);
      }
      assertValidity() {
        r2.aInRange("r", this.r, l2, u3), r2.aInRange("s", this.s, l2, u3);
      }
      addRecoveryBit(e9) {
        return new S2(this.r, this.s, e9);
      }
      recoverPublicKey(e9) {
        const { r: t3, s: n3, recovery: r3 } = this, o3 = M2((0, i2.ensureBytes)("msgHash", e9));
        if (null == r3 || ![0, 1, 2, 3].includes(r3)) throw new Error("recovery id invalid");
        const s4 = 2 === r3 || 3 === r3 ? t3 + a3.n : t3;
        if (s4 >= d3.ORDER) throw new Error("recovery id 2 or 3 invalid");
        const c3 = 0 == (1 & r3) ? "02" : "03", l3 = y2.fromHex(c3 + E2(s4)), u4 = m2(s4), h4 = g2(-o3 * u4), f3 = g2(n3 * u4), p4 = y2.BASE.multiplyAndAddUnsafe(l3, h4, f3);
        if (!p4) throw new Error("point at infinify");
        return p4.assertValidity(), p4;
      }
      hasHighS() {
        return C2(this.s);
      }
      normalizeS() {
        return this.hasHighS() ? new S2(this.r, g2(-this.s), this.recovery) : this;
      }
      toDERRawBytes() {
        return r2.hexToBytes(this.toDERHex());
      }
      toDERHex() {
        return e8.DER.hexFromSig({ r: this.r, s: this.s });
      }
      toCompactRawBytes() {
        return r2.hexToBytes(this.toCompactHex());
      }
      toCompactHex() {
        return E2(this.r) + E2(this.s);
      }
    }
    const k2 = { isValidPrivateKey(e9) {
      try {
        return v2(e9), true;
      } catch (e10) {
        return false;
      }
    }, normPrivateKeyToScalar: v2, randomPrivateKey: () => {
      const e9 = n2.getMinHashLength(a3.n);
      return n2.mapHashToField(a3.randomBytes(e9), a3.n);
    }, precompute: (e9 = 8, t3 = y2.BASE) => (t3._setWindowSize(e9), t3.multiply(BigInt(3)), t3) };
    function x2(e9) {
      const t3 = r2.isBytes(e9), n3 = "string" == typeof e9, i3 = (t3 || n3) && e9.length;
      return t3 ? i3 === h3 || i3 === p3 : n3 ? i3 === 2 * h3 || i3 === 2 * p3 : e9 instanceof y2;
    }
    const A2 = a3.bits2int || function(e9) {
      const t3 = r2.bytesToNumberBE(e9), n3 = 8 * e9.length - a3.nBitLength;
      return n3 > 0 ? t3 >> BigInt(n3) : t3;
    }, M2 = a3.bits2int_modN || function(e9) {
      return g2(A2(e9));
    }, L2 = r2.bitMask(a3.nBitLength);
    function T2(e9) {
      return r2.aInRange(`num < 2^${a3.nBitLength}`, e9, c2, L2), r2.numberToBytesBE(e9, a3.nByteLength);
    }
    function O2(e9, t3, n3 = R2) {
      if (["recovered", "canonical"].some((e10) => e10 in n3)) throw new Error("sign() legacy options not supported");
      const { hash: s4, randomBytes: u4 } = a3;
      let { lowS: h4, prehash: f3, extraEntropy: p4 } = n3;
      null == h4 && (h4 = true), e9 = (0, i2.ensureBytes)("msgHash", e9), o2(n3), f3 && (e9 = (0, i2.ensureBytes)("prehashed msgHash", s4(e9)));
      const b3 = M2(e9), E3 = v2(t3), _3 = [T2(E3), T2(b3)];
      if (null != p4 && false !== p4) {
        const e10 = true === p4 ? u4(d3.BYTES) : p4;
        _3.push((0, i2.ensureBytes)("extraEntropy", e10));
      }
      const k3 = r2.concatBytes(..._3), x3 = b3;
      return { seed: k3, k2sig: function(e10) {
        const t4 = A2(e10);
        if (!w2(t4)) return;
        const n4 = m2(t4), r3 = y2.BASE.multiply(t4).toAffine(), i3 = g2(r3.x);
        if (i3 === c2) return;
        const o3 = g2(n4 * g2(x3 + i3 * E3));
        if (o3 === c2) return;
        let s5 = (r3.x === i3 ? 0 : 2) | Number(r3.y & l2), a4 = o3;
        return h4 && C2(o3) && (a4 = function(e11) {
          return C2(e11) ? g2(-e11) : e11;
        }(o3), s5 ^= 1), new S2(i3, a4, s5);
      } };
    }
    const R2 = { lowS: a3.lowS, prehash: false }, P2 = { lowS: a3.lowS, prehash: false };
    return y2.BASE._setWindowSize(8), { CURVE: a3, getPublicKey: function(e9, t3 = true) {
      return y2.fromPrivateKey(e9).toRawBytes(t3);
    }, getSharedSecret: function(e9, t3, n3 = true) {
      if (x2(e9)) throw new Error("first arg must be private key");
      if (!x2(t3)) throw new Error("second arg must be public key");
      return y2.fromHex(t3).multiply(v2(e9)).toRawBytes(n3);
    }, sign: function(e9, t3, n3 = R2) {
      const { seed: i3, k2sig: o3 } = O2(e9, t3, n3), s4 = a3;
      return r2.createHmacDrbg(s4.hash.outputLen, s4.nByteLength, s4.hmac)(i3, o3);
    }, verify: function(t3, n3, s4, c3 = P2) {
      var _a2;
      const l3 = t3;
      if (n3 = (0, i2.ensureBytes)("msgHash", n3), s4 = (0, i2.ensureBytes)("publicKey", s4), "strict" in c3) throw new Error("options.strict was renamed to lowS");
      o2(c3);
      const { lowS: d4, prehash: u4 } = c3;
      let h4, f3;
      try {
        if ("string" == typeof l3 || r2.isBytes(l3)) try {
          h4 = S2.fromDER(l3);
        } catch (t4) {
          if (!(t4 instanceof e8.DER.Err)) throw t4;
          h4 = S2.fromCompact(l3);
        }
        else {
          if ("object" != typeof l3 || "bigint" != typeof l3.r || "bigint" != typeof l3.s) throw new Error("PARSE");
          {
            const { r: e9, s: t4 } = l3;
            h4 = new S2(e9, t4);
          }
        }
        f3 = y2.fromHex(s4);
      } catch (e9) {
        if ("PARSE" === e9.message) throw new Error("signature must be Signature instance, Uint8Array or hex string");
        return false;
      }
      if (d4 && h4.hasHighS()) return false;
      u4 && (n3 = a3.hash(n3));
      const { r: p4, s: v3 } = h4, b3 = M2(n3), w3 = m2(v3), E3 = g2(b3 * w3), C3 = g2(p4 * w3), _3 = (_a2 = y2.BASE.multiplyAndAddUnsafe(f3, E3, C3)) == null ? void 0 : _a2.toAffine();
      if (!_3) return false;
      return g2(_3.x) === p4;
    }, ProjectivePoint: y2, Signature: S2, utils: k2 };
  }, e8.SWUFpSqrtRatio = p2, e8.mapToCurveSimpleSWU = function(e9, t3) {
    if (n2.validateField(e9), !e9.isValid(t3.A) || !e9.isValid(t3.B) || !e9.isValid(t3.Z)) throw new Error("mapToCurveSimpleSWU: invalid opts");
    const r3 = p2(e9, t3.Z);
    if (!e9.isOdd) throw new Error("Fp.isOdd is not implemented!");
    return (n3) => {
      let i3, o3, s3, a3, c3, l3, d3, u3;
      i3 = e9.sqr(n3), i3 = e9.mul(i3, t3.Z), o3 = e9.sqr(i3), o3 = e9.add(o3, i3), s3 = e9.add(o3, e9.ONE), s3 = e9.mul(s3, t3.B), a3 = e9.cmov(t3.Z, e9.neg(o3), !e9.eql(o3, e9.ZERO)), a3 = e9.mul(a3, t3.A), o3 = e9.sqr(s3), l3 = e9.sqr(a3), c3 = e9.mul(l3, t3.A), o3 = e9.add(o3, c3), o3 = e9.mul(o3, s3), l3 = e9.mul(l3, a3), c3 = e9.mul(l3, t3.B), o3 = e9.add(o3, c3), d3 = e9.mul(i3, s3);
      const { isValid: h3, value: f3 } = r3(o3, l3);
      u3 = e9.mul(i3, n3), u3 = e9.mul(u3, f3), d3 = e9.cmov(d3, s3, h3), u3 = e9.cmov(u3, f3, h3);
      const p3 = e9.isOdd(n3) === e9.isOdd(u3);
      return u3 = e9.cmov(e9.neg(u3), u3, p3), d3 = e9.div(d3, a3), { x: d3, y: u3 };
    };
  };
  const t2 = ni, n2 = ri, r2 = ii, i2 = ii;
  function o2(e9) {
    void 0 !== e9.lowS && (0, i2.abool)("lowS", e9.lowS), void 0 !== e9.prehash && (0, i2.abool)("prehash", e9.prehash);
  }
  const { bytesToNumberBE: s2, hexToBytes: a2 } = r2;
  e8.DER = { Err: class extends Error {
    constructor(e9 = "") {
      super(e9);
    }
  }, _tlv: { encode: (t3, n3) => {
    const { Err: i3 } = e8.DER;
    if (t3 < 0 || t3 > 256) throw new i3("tlv.encode: wrong tag");
    if (1 & n3.length) throw new i3("tlv.encode: unpadded data");
    const o3 = n3.length / 2, s3 = r2.numberToHexUnpadded(o3);
    if (s3.length / 2 & 128) throw new i3("tlv.encode: long form length too big");
    const a3 = o3 > 127 ? r2.numberToHexUnpadded(s3.length / 2 | 128) : "";
    return `${r2.numberToHexUnpadded(t3)}${a3}${s3}${n3}`;
  }, decode(t3, n3) {
    const { Err: r3 } = e8.DER;
    let i3 = 0;
    if (t3 < 0 || t3 > 256) throw new r3("tlv.encode: wrong tag");
    if (n3.length < 2 || n3[i3++] !== t3) throw new r3("tlv.decode: wrong tlv");
    const o3 = n3[i3++];
    let s3 = 0;
    if (128 & o3) {
      const e9 = 127 & o3;
      if (!e9) throw new r3("tlv.decode(long): indefinite length not supported");
      if (e9 > 4) throw new r3("tlv.decode(long): byte length is too big");
      const t4 = n3.subarray(i3, i3 + e9);
      if (t4.length !== e9) throw new r3("tlv.decode: length bytes not complete");
      if (0 === t4[0]) throw new r3("tlv.decode(long): zero leftmost byte");
      for (const e10 of t4) s3 = s3 << 8 | e10;
      if (i3 += e9, s3 < 128) throw new r3("tlv.decode(long): not minimal encoding");
    } else s3 = o3;
    const a3 = n3.subarray(i3, i3 + s3);
    if (a3.length !== s3) throw new r3("tlv.decode: wrong value length");
    return { v: a3, l: n3.subarray(i3 + s3) };
  } }, _int: { encode(t3) {
    const { Err: n3 } = e8.DER;
    if (t3 < c2) throw new n3("integer: negative integers are not allowed");
    let i3 = r2.numberToHexUnpadded(t3);
    if (8 & Number.parseInt(i3[0], 16) && (i3 = "00" + i3), 1 & i3.length) throw new n3("unexpected assertion");
    return i3;
  }, decode(t3) {
    const { Err: n3 } = e8.DER;
    if (128 & t3[0]) throw new n3("Invalid signature integer: negative");
    if (0 === t3[0] && !(128 & t3[1])) throw new n3("Invalid signature integer: unnecessary leading zero");
    return s2(t3);
  } }, toSig(t3) {
    const { Err: n3, _int: i3, _tlv: o3 } = e8.DER, s3 = "string" == typeof t3 ? a2(t3) : t3;
    r2.abytes(s3);
    const { v: c3, l: l3 } = o3.decode(48, s3);
    if (l3.length) throw new n3("Invalid signature: left bytes after parsing");
    const { v: d3, l: u3 } = o3.decode(2, c3), { v: h3, l: f3 } = o3.decode(2, u3);
    if (f3.length) throw new n3("Invalid signature: left bytes after parsing");
    return { r: i3.decode(d3), s: i3.decode(h3) };
  }, hexFromSig(t3) {
    const { _tlv: n3, _int: r3 } = e8.DER, i3 = `${n3.encode(2, r3.encode(t3.r))}${n3.encode(2, r3.encode(t3.s))}`;
    return n3.encode(48, i3);
  } };
  const c2 = BigInt(0), l2 = BigInt(1), d2 = BigInt(2), u2 = BigInt(3), h2 = BigInt(4);
  function f2(e9) {
    const o3 = function(e10) {
      const n3 = (0, t2.validateBasic)(e10);
      r2.validateObject(n3, { a: "field", b: "field" }, { allowedPrivateKeyLengths: "array", wrapPrivateKey: "boolean", isTorsionFree: "function", clearCofactor: "function", allowInfinityPoint: "boolean", fromBytes: "function", toBytes: "function" });
      const { endo: i3, Fp: o4, a: s4 } = n3;
      if (i3) {
        if (!o4.eql(s4, o4.ZERO)) throw new Error("Endomorphism can only be defined for Koblitz curves that have a=0");
        if ("object" != typeof i3 || "bigint" != typeof i3.beta || "function" != typeof i3.splitScalar) throw new Error("Expected endomorphism with beta: bigint and splitScalar: function");
      }
      return Object.freeze({ ...n3 });
    }(e9), { Fp: s3 } = o3, a3 = n2.Field(o3.n, o3.nBitLength), d3 = o3.toBytes || ((e10, t3, n3) => {
      const i3 = t3.toAffine();
      return r2.concatBytes(Uint8Array.from([4]), s3.toBytes(i3.x), s3.toBytes(i3.y));
    }), h3 = o3.fromBytes || ((e10) => {
      const t3 = e10.subarray(1);
      return { x: s3.fromBytes(t3.subarray(0, s3.BYTES)), y: s3.fromBytes(t3.subarray(s3.BYTES, 2 * s3.BYTES)) };
    });
    function f3(e10) {
      const { a: t3, b: n3 } = o3, r3 = s3.sqr(e10), i3 = s3.mul(r3, e10);
      return s3.add(s3.add(i3, s3.mul(e10, t3)), n3);
    }
    if (!s3.eql(s3.sqr(o3.Gy), f3(o3.Gx))) throw new Error("bad generator point: equation left != right");
    function p3(e10) {
      const { allowedPrivateKeyLengths: t3, nByteLength: s4, wrapPrivateKey: a4, n: c3 } = o3;
      if (t3 && "bigint" != typeof e10) {
        if (r2.isBytes(e10) && (e10 = r2.bytesToHex(e10)), "string" != typeof e10 || !t3.includes(e10.length)) throw new Error("Invalid key");
        e10 = e10.padStart(2 * s4, "0");
      }
      let d4;
      try {
        d4 = "bigint" == typeof e10 ? e10 : r2.bytesToNumberBE((0, i2.ensureBytes)("private key", e10, s4));
      } catch (t4) {
        throw new Error(`private key must be ${s4} bytes, hex or bigint, not ${typeof e10}`);
      }
      return a4 && (d4 = n2.mod(d4, c3)), r2.aInRange("private key", d4, l2, c3), d4;
    }
    function g2(e10) {
      if (!(e10 instanceof v2)) throw new Error("ProjectivePoint expected");
    }
    const m2 = (0, i2.memoized)((e10, t3) => {
      const { px: n3, py: r3, pz: i3 } = e10;
      if (s3.eql(i3, s3.ONE)) return { x: n3, y: r3 };
      const o4 = e10.is0();
      null == t3 && (t3 = o4 ? s3.ONE : s3.inv(i3));
      const a4 = s3.mul(n3, t3), c3 = s3.mul(r3, t3), l3 = s3.mul(i3, t3);
      if (o4) return { x: s3.ZERO, y: s3.ZERO };
      if (!s3.eql(l3, s3.ONE)) throw new Error("invZ was invalid");
      return { x: a4, y: c3 };
    }), y2 = (0, i2.memoized)((e10) => {
      if (e10.is0()) {
        if (o3.allowInfinityPoint && !s3.is0(e10.py)) return;
        throw new Error("bad point: ZERO");
      }
      const { x: t3, y: n3 } = e10.toAffine();
      if (!s3.isValid(t3) || !s3.isValid(n3)) throw new Error("bad point: x or y not FE");
      const r3 = s3.sqr(n3), i3 = f3(t3);
      if (!s3.eql(r3, i3)) throw new Error("bad point: equation left != right");
      if (!e10.isTorsionFree()) throw new Error("bad point: not in prime-order subgroup");
      return true;
    });
    class v2 {
      constructor(e10, t3, n3) {
        if (this.px = e10, this.py = t3, this.pz = n3, null == e10 || !s3.isValid(e10)) throw new Error("x required");
        if (null == t3 || !s3.isValid(t3)) throw new Error("y required");
        if (null == n3 || !s3.isValid(n3)) throw new Error("z required");
        Object.freeze(this);
      }
      static fromAffine(e10) {
        const { x: t3, y: n3 } = e10 || {};
        if (!e10 || !s3.isValid(t3) || !s3.isValid(n3)) throw new Error("invalid affine point");
        if (e10 instanceof v2) throw new Error("projective point not allowed");
        const r3 = (e11) => s3.eql(e11, s3.ZERO);
        return r3(t3) && r3(n3) ? v2.ZERO : new v2(t3, n3, s3.ONE);
      }
      get x() {
        return this.toAffine().x;
      }
      get y() {
        return this.toAffine().y;
      }
      static normalizeZ(e10) {
        const t3 = s3.invertBatch(e10.map((e11) => e11.pz));
        return e10.map((e11, n3) => e11.toAffine(t3[n3])).map(v2.fromAffine);
      }
      static fromHex(e10) {
        const t3 = v2.fromAffine(h3((0, i2.ensureBytes)("pointHex", e10)));
        return t3.assertValidity(), t3;
      }
      static fromPrivateKey(e10) {
        return v2.BASE.multiply(p3(e10));
      }
      static msm(e10, n3) {
        return (0, t2.pippenger)(v2, a3, e10, n3);
      }
      _setWindowSize(e10) {
        w2.setWindowSize(this, e10);
      }
      assertValidity() {
        y2(this);
      }
      hasEvenY() {
        const { y: e10 } = this.toAffine();
        if (s3.isOdd) return !s3.isOdd(e10);
        throw new Error("Field doesn't support isOdd");
      }
      equals(e10) {
        g2(e10);
        const { px: t3, py: n3, pz: r3 } = this, { px: i3, py: o4, pz: a4 } = e10, c3 = s3.eql(s3.mul(t3, a4), s3.mul(i3, r3)), l3 = s3.eql(s3.mul(n3, a4), s3.mul(o4, r3));
        return c3 && l3;
      }
      negate() {
        return new v2(this.px, s3.neg(this.py), this.pz);
      }
      double() {
        const { a: e10, b: t3 } = o3, n3 = s3.mul(t3, u2), { px: r3, py: i3, pz: a4 } = this;
        let c3 = s3.ZERO, l3 = s3.ZERO, d4 = s3.ZERO, h4 = s3.mul(r3, r3), f4 = s3.mul(i3, i3), p4 = s3.mul(a4, a4), g3 = s3.mul(r3, i3);
        return g3 = s3.add(g3, g3), d4 = s3.mul(r3, a4), d4 = s3.add(d4, d4), c3 = s3.mul(e10, d4), l3 = s3.mul(n3, p4), l3 = s3.add(c3, l3), c3 = s3.sub(f4, l3), l3 = s3.add(f4, l3), l3 = s3.mul(c3, l3), c3 = s3.mul(g3, c3), d4 = s3.mul(n3, d4), p4 = s3.mul(e10, p4), g3 = s3.sub(h4, p4), g3 = s3.mul(e10, g3), g3 = s3.add(g3, d4), d4 = s3.add(h4, h4), h4 = s3.add(d4, h4), h4 = s3.add(h4, p4), h4 = s3.mul(h4, g3), l3 = s3.add(l3, h4), p4 = s3.mul(i3, a4), p4 = s3.add(p4, p4), h4 = s3.mul(p4, g3), c3 = s3.sub(c3, h4), d4 = s3.mul(p4, f4), d4 = s3.add(d4, d4), d4 = s3.add(d4, d4), new v2(c3, l3, d4);
      }
      add(e10) {
        g2(e10);
        const { px: t3, py: n3, pz: r3 } = this, { px: i3, py: a4, pz: c3 } = e10;
        let l3 = s3.ZERO, d4 = s3.ZERO, h4 = s3.ZERO;
        const f4 = o3.a, p4 = s3.mul(o3.b, u2);
        let m3 = s3.mul(t3, i3), y3 = s3.mul(n3, a4), b3 = s3.mul(r3, c3), w3 = s3.add(t3, n3), E2 = s3.add(i3, a4);
        w3 = s3.mul(w3, E2), E2 = s3.add(m3, y3), w3 = s3.sub(w3, E2), E2 = s3.add(t3, r3);
        let C2 = s3.add(i3, c3);
        return E2 = s3.mul(E2, C2), C2 = s3.add(m3, b3), E2 = s3.sub(E2, C2), C2 = s3.add(n3, r3), l3 = s3.add(a4, c3), C2 = s3.mul(C2, l3), l3 = s3.add(y3, b3), C2 = s3.sub(C2, l3), h4 = s3.mul(f4, E2), l3 = s3.mul(p4, b3), h4 = s3.add(l3, h4), l3 = s3.sub(y3, h4), h4 = s3.add(y3, h4), d4 = s3.mul(l3, h4), y3 = s3.add(m3, m3), y3 = s3.add(y3, m3), b3 = s3.mul(f4, b3), E2 = s3.mul(p4, E2), y3 = s3.add(y3, b3), b3 = s3.sub(m3, b3), b3 = s3.mul(f4, b3), E2 = s3.add(E2, b3), m3 = s3.mul(y3, E2), d4 = s3.add(d4, m3), m3 = s3.mul(C2, E2), l3 = s3.mul(w3, l3), l3 = s3.sub(l3, m3), m3 = s3.mul(w3, y3), h4 = s3.mul(C2, h4), h4 = s3.add(h4, m3), new v2(l3, d4, h4);
      }
      subtract(e10) {
        return this.add(e10.negate());
      }
      is0() {
        return this.equals(v2.ZERO);
      }
      wNAF(e10) {
        return w2.wNAFCached(this, e10, v2.normalizeZ);
      }
      multiplyUnsafe(e10) {
        r2.aInRange("scalar", e10, c2, o3.n);
        const t3 = v2.ZERO;
        if (e10 === c2) return t3;
        if (e10 === l2) return this;
        const { endo: n3 } = o3;
        if (!n3) return w2.unsafeLadder(this, e10);
        let { k1neg: i3, k1: a4, k2neg: d4, k2: u3 } = n3.splitScalar(e10), h4 = t3, f4 = t3, p4 = this;
        for (; a4 > c2 || u3 > c2; ) a4 & l2 && (h4 = h4.add(p4)), u3 & l2 && (f4 = f4.add(p4)), p4 = p4.double(), a4 >>= l2, u3 >>= l2;
        return i3 && (h4 = h4.negate()), d4 && (f4 = f4.negate()), f4 = new v2(s3.mul(f4.px, n3.beta), f4.py, f4.pz), h4.add(f4);
      }
      multiply(e10) {
        const { endo: t3, n: n3 } = o3;
        let i3, a4;
        if (r2.aInRange("scalar", e10, l2, n3), t3) {
          const { k1neg: n4, k1: r3, k2neg: o4, k2: c3 } = t3.splitScalar(e10);
          let { p: l3, f: d4 } = this.wNAF(r3), { p: u3, f: h4 } = this.wNAF(c3);
          l3 = w2.constTimeNegate(n4, l3), u3 = w2.constTimeNegate(o4, u3), u3 = new v2(s3.mul(u3.px, t3.beta), u3.py, u3.pz), i3 = l3.add(u3), a4 = d4.add(h4);
        } else {
          const { p: t4, f: n4 } = this.wNAF(e10);
          i3 = t4, a4 = n4;
        }
        return v2.normalizeZ([i3, a4])[0];
      }
      multiplyAndAddUnsafe(e10, t3, n3) {
        const r3 = v2.BASE, i3 = (e11, t4) => t4 !== c2 && t4 !== l2 && e11.equals(r3) ? e11.multiply(t4) : e11.multiplyUnsafe(t4), o4 = i3(this, t3).add(i3(e10, n3));
        return o4.is0() ? void 0 : o4;
      }
      toAffine(e10) {
        return m2(this, e10);
      }
      isTorsionFree() {
        const { h: e10, isTorsionFree: t3 } = o3;
        if (e10 === l2) return true;
        if (t3) return t3(v2, this);
        throw new Error("isTorsionFree() has not been declared for the elliptic curve");
      }
      clearCofactor() {
        const { h: e10, clearCofactor: t3 } = o3;
        return e10 === l2 ? this : t3 ? t3(v2, this) : this.multiplyUnsafe(o3.h);
      }
      toRawBytes(e10 = true) {
        return (0, i2.abool)("isCompressed", e10), this.assertValidity(), d3(v2, this, e10);
      }
      toHex(e10 = true) {
        return (0, i2.abool)("isCompressed", e10), r2.bytesToHex(this.toRawBytes(e10));
      }
    }
    v2.BASE = new v2(o3.Gx, o3.Gy, s3.ONE), v2.ZERO = new v2(s3.ZERO, s3.ONE, s3.ZERO);
    const b2 = o3.nBitLength, w2 = (0, t2.wNAF)(v2, o3.endo ? Math.ceil(b2 / 2) : b2);
    return { CURVE: o3, ProjectivePoint: v2, normPrivateKeyToScalar: p3, weierstrassEquation: f3, isWithinCurveOrder: function(e10) {
      return r2.inRange(e10, l2, o3.n);
    } };
  }
  function p2(e9, t3) {
    const n3 = e9.ORDER;
    let r3 = c2;
    for (let e10 = n3 - l2; e10 % d2 === c2; e10 /= d2) r3 += l2;
    const i3 = r3, o3 = d2 << i3 - l2 - l2, s3 = o3 * d2, a3 = (n3 - l2) / s3, f3 = (a3 - l2) / d2, p3 = s3 - l2, g2 = o3, m2 = e9.pow(t3, a3), y2 = e9.pow(t3, (a3 + l2) / d2);
    let v2 = (t4, n4) => {
      let r4 = m2, o4 = e9.pow(n4, p3), s4 = e9.sqr(o4);
      s4 = e9.mul(s4, n4);
      let a4 = e9.mul(t4, s4);
      a4 = e9.pow(a4, f3), a4 = e9.mul(a4, o4), o4 = e9.mul(a4, n4), s4 = e9.mul(a4, t4);
      let c3 = e9.mul(s4, o4);
      a4 = e9.pow(c3, g2);
      let u3 = e9.eql(a4, e9.ONE);
      o4 = e9.mul(s4, y2), a4 = e9.mul(c3, r4), s4 = e9.cmov(o4, s4, u3), c3 = e9.cmov(a4, c3, u3);
      for (let t5 = i3; t5 > l2; t5--) {
        let n5 = t5 - d2;
        n5 = d2 << n5 - l2;
        let i4 = e9.pow(c3, n5);
        const a5 = e9.eql(i4, e9.ONE);
        o4 = e9.mul(s4, r4), r4 = e9.mul(r4, r4), i4 = e9.mul(c3, r4), s4 = e9.cmov(o4, s4, a5), c3 = e9.cmov(i4, c3, a5);
      }
      return { isValid: u3, value: s4 };
    };
    if (e9.ORDER % h2 === u2) {
      const n4 = (e9.ORDER - u2) / h2, r4 = e9.sqrt(e9.neg(t3));
      v2 = (t4, i4) => {
        let o4 = e9.sqr(i4);
        const s4 = e9.mul(t4, i4);
        o4 = e9.mul(o4, s4);
        let a4 = e9.pow(o4, n4);
        a4 = e9.mul(a4, s4);
        const c3 = e9.mul(a4, r4), l3 = e9.mul(e9.sqr(a4), i4), d3 = e9.eql(l3, t4);
        return { isValid: d3, value: e9.cmov(c3, a4, d3) };
      };
    }
    return v2;
  }
}(Ro), Object.defineProperty(To, "__esModule", { value: true }), To.getHash = Do, To.createCurve = function(e8, t2) {
  const n2 = (t3) => (0, No.weierstrass)({ ...e8, ...Do(t3) });
  return Object.freeze({ ...n2(t2), create: n2 });
};
var Po = Oo;
var Io = pr;
var No = Ro;
function Do(e8) {
  return { hash: e8, hmac: (t2, ...n2) => (0, Po.hmac)(e8, t2, (0, Io.concatBytes)(...n2)), randomBytes: Io.randomBytes };
}
!function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.encodeToCurve = e8.hashToCurve = e8.schnorr = e8.secp256k1 = void 0;
  const t2 = Co, n2 = pr, r2 = To, i2 = oo, o2 = ri, s2 = ii, a2 = Ro, c2 = BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"), l2 = BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"), d2 = BigInt(1), u2 = BigInt(2), h2 = (e9, t3) => (e9 + t3 / u2) / t3;
  function f2(e9) {
    const t3 = c2, n3 = BigInt(3), r3 = BigInt(6), i3 = BigInt(11), s3 = BigInt(22), a3 = BigInt(23), l3 = BigInt(44), d3 = BigInt(88), h3 = e9 * e9 * e9 % t3, f3 = h3 * h3 * e9 % t3, g3 = (0, o2.pow2)(f3, n3, t3) * f3 % t3, m3 = (0, o2.pow2)(g3, n3, t3) * f3 % t3, y3 = (0, o2.pow2)(m3, u2, t3) * h3 % t3, v3 = (0, o2.pow2)(y3, i3, t3) * y3 % t3, b3 = (0, o2.pow2)(v3, s3, t3) * v3 % t3, w3 = (0, o2.pow2)(b3, l3, t3) * b3 % t3, E3 = (0, o2.pow2)(w3, d3, t3) * w3 % t3, C3 = (0, o2.pow2)(E3, l3, t3) * b3 % t3, _3 = (0, o2.pow2)(C3, n3, t3) * f3 % t3, S3 = (0, o2.pow2)(_3, a3, t3) * v3 % t3, k3 = (0, o2.pow2)(S3, r3, t3) * h3 % t3, x3 = (0, o2.pow2)(k3, u2, t3);
    if (!p2.eql(p2.sqr(x3), e9)) throw new Error("Cannot find square root");
    return x3;
  }
  const p2 = (0, o2.Field)(c2, void 0, void 0, { sqrt: f2 });
  e8.secp256k1 = (0, r2.createCurve)({ a: BigInt(0), b: BigInt(7), Fp: p2, n: l2, Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"), Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"), h: BigInt(1), lowS: true, endo: { beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"), splitScalar: (e9) => {
    const t3 = l2, n3 = BigInt("0x3086d221a7d46bcde86c90e49284eb15"), r3 = -d2 * BigInt("0xe4437ed6010e88286f547fa90abfe4c3"), i3 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"), s3 = n3, a3 = BigInt("0x100000000000000000000000000000000"), c3 = h2(s3 * e9, t3), u3 = h2(-r3 * e9, t3);
    let f3 = (0, o2.mod)(e9 - c3 * n3 - u3 * i3, t3), p3 = (0, o2.mod)(-c3 * r3 - u3 * s3, t3);
    const g3 = f3 > a3, m3 = p3 > a3;
    if (g3 && (f3 = t3 - f3), m3 && (p3 = t3 - p3), f3 > a3 || p3 > a3) throw new Error("splitScalar: Endomorphism failed, k=" + e9);
    return { k1neg: g3, k1: f3, k2neg: m3, k2: p3 };
  } } }, t2.sha256);
  const g2 = BigInt(0), m2 = {};
  function y2(e9, ...n3) {
    let r3 = m2[e9];
    if (void 0 === r3) {
      const n4 = (0, t2.sha256)(Uint8Array.from(e9, (e10) => e10.charCodeAt(0)));
      r3 = (0, s2.concatBytes)(n4, n4), m2[e9] = r3;
    }
    return (0, t2.sha256)((0, s2.concatBytes)(r3, ...n3));
  }
  const v2 = (e9) => e9.toRawBytes(true).slice(1), b2 = (e9) => (0, s2.numberToBytesBE)(e9, 32), w2 = (e9) => (0, o2.mod)(e9, c2), E2 = (e9) => (0, o2.mod)(e9, l2), C2 = e8.secp256k1.ProjectivePoint, _2 = (e9, t3, n3) => C2.BASE.multiplyAndAddUnsafe(e9, t3, n3);
  function S2(t3) {
    let n3 = e8.secp256k1.utils.normPrivateKeyToScalar(t3), r3 = C2.fromPrivateKey(n3);
    return { scalar: r3.hasEvenY() ? n3 : E2(-n3), bytes: v2(r3) };
  }
  function k2(e9) {
    (0, s2.aInRange)("x", e9, d2, c2);
    const t3 = w2(e9 * e9);
    let n3 = f2(w2(t3 * e9 + BigInt(7)));
    n3 % u2 !== g2 && (n3 = w2(-n3));
    const r3 = new C2(e9, n3, d2);
    return r3.assertValidity(), r3;
  }
  const x2 = s2.bytesToNumberBE;
  function A2(...e9) {
    return E2(x2(y2("BIP0340/challenge", ...e9)));
  }
  function M2(e9, t3, n3) {
    const r3 = (0, s2.ensureBytes)("signature", e9, 64), i3 = (0, s2.ensureBytes)("message", t3), o3 = (0, s2.ensureBytes)("publicKey", n3, 32);
    try {
      const e10 = k2(x2(o3)), t4 = x2(r3.subarray(0, 32));
      if (!(0, s2.inRange)(t4, d2, c2)) return false;
      const n4 = x2(r3.subarray(32, 64));
      if (!(0, s2.inRange)(n4, d2, l2)) return false;
      const a3 = A2(b2(t4), v2(e10), i3), u3 = _2(e10, n4, E2(-a3));
      return !(!u3 || !u3.hasEvenY() || u3.toAffine().x !== t4);
    } catch (e10) {
      return false;
    }
  }
  e8.schnorr = { getPublicKey: function(e9) {
    return S2(e9).bytes;
  }, sign: function(e9, t3, r3 = (0, n2.randomBytes)(32)) {
    const i3 = (0, s2.ensureBytes)("message", e9), { bytes: o3, scalar: a3 } = S2(t3), c3 = (0, s2.ensureBytes)("auxRand", r3, 32), l3 = b2(a3 ^ x2(y2("BIP0340/aux", c3))), d3 = y2("BIP0340/nonce", l3, o3, i3), u3 = E2(x2(d3));
    if (u3 === g2) throw new Error("sign failed: k is zero");
    const { bytes: h3, scalar: f3 } = S2(u3), p3 = A2(h3, o3, i3), m3 = new Uint8Array(64);
    if (m3.set(h3, 0), m3.set(b2(E2(f3 + p3 * a3)), 32), !M2(m3, i3, o3)) throw new Error("sign: Invalid signature produced");
    return m3;
  }, verify: M2, utils: { randomPrivateKey: e8.secp256k1.utils.randomPrivateKey, lift_x: k2, pointToBytes: v2, numberToBytesBE: s2.numberToBytesBE, bytesToNumberBE: s2.bytesToNumberBE, taggedHash: y2, mod: o2.mod } };
  const L2 = (0, i2.isogenyMap)(p2, [["0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa8c7", "0x7d3d4c80bc321d5b9f315cea7fd44c5d595d2fc0bf63b92dfff1044f17c6581", "0x534c328d23f234e6e2a413deca25caece4506144037c40314ecbd0b53d9dd262", "0x8e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38e38daaaaa88c"], ["0xd35771193d94918a9ca34ccbb7b640dd86cd409542f8487d9fe6b745781eb49b", "0xedadc6f64383dc1df7c4b2d51b54225406d36b641f5e41bbc52a56612a8c6d14", "0x0000000000000000000000000000000000000000000000000000000000000001"], ["0x4bda12f684bda12f684bda12f684bda12f684bda12f684bda12f684b8e38e23c", "0xc75e0c32d5cb7c0fa9d0a54b12a0a6d5647ab046d686da6fdffc90fc201d71a3", "0x29a6194691f91a73715209ef6512e576722830a201be2018a765e85a9ecee931", "0x2f684bda12f684bda12f684bda12f684bda12f684bda12f684bda12f38e38d84"], ["0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffff93b", "0x7a06534bb8bdb49fd5e9e6632722c2989467c1bfc8e8d978dfb425d2685c2573", "0x6484aa716545ca2cf3a70c3fa8fe337e0a3d21162f0d6299a7bf8192bfd2a76f", "0x0000000000000000000000000000000000000000000000000000000000000001"]].map((e9) => e9.map((e10) => BigInt(e10)))), T2 = (0, a2.mapToCurveSimpleSWU)(p2, { A: BigInt("0x3f8731abdd661adca08a5558f0f5d272e953d363cb6f0e5d405447c01a444533"), B: BigInt("1771"), Z: p2.create(BigInt("-11")) }), O2 = (0, i2.createHasher)(e8.secp256k1.ProjectivePoint, (e9) => {
    const { x: t3, y: n3 } = T2(p2.create(e9[0]));
    return L2(t3, n3);
  }, { DST: "secp256k1_XMD:SHA-256_SSWU_RO_", encodeDST: "secp256k1_XMD:SHA-256_SSWU_NU_", p: p2.ORDER, m: 1, k: 128, expand: "xmd", hash: t2.sha256 });
  e8.hashToCurve = O2.hashToCurve, e8.encodeToCurve = O2.encodeToCurve;
}(Eo);
var Bo = {};
!function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.decodeHex = e8.remove0x = void 0;
  var t2 = $n;
  e8.remove0x = function(e9) {
    return e9.startsWith("0x") || e9.startsWith("0X") ? e9.slice(2) : e9;
  }, e8.decodeHex = function(n2) {
    return (0, t2.hexToBytes)((0, e8.remove0x)(n2));
  };
}(Bo), function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.hexToPublicKey = e8.convertPublicKeyFormat = e8.getSharedPoint = e8.getPublicKey = e8.isValidPrivateKey = e8.getValidSecret = void 0;
  var t2 = er, n2 = nr, r2 = Eo, i2 = Gn, o2 = Yn, s2 = Bo;
  function a2(e9, t3, i3, o3) {
    if ("secp256k1" === e9) return t3(r2.secp256k1);
    if ("x25519" === e9) return i3(n2.x25519);
    if ("ed25519" === e9) return o3(n2.ed25519);
    throw new Error("Not implemented");
  }
  e8.getValidSecret = function() {
    var n3;
    do {
      n3 = (0, t2.randomBytes)(o2.SECRET_KEY_LENGTH);
    } while (!(0, e8.isValidPrivateKey)(n3));
    return n3;
  }, e8.isValidPrivateKey = function(e9) {
    return a2((0, i2.ellipticCurve)(), function(t3) {
      return t3.utils.isValidPrivateKey(e9);
    }, function() {
      return true;
    }, function() {
      return true;
    });
  }, e8.getPublicKey = function(e9) {
    return a2((0, i2.ellipticCurve)(), function(t3) {
      return t3.getPublicKey(e9);
    }, function(t3) {
      return t3.getPublicKey(e9);
    }, function(t3) {
      return t3.getPublicKey(e9);
    });
  }, e8.getSharedPoint = function(e9, t3, n3) {
    return a2((0, i2.ellipticCurve)(), function(r3) {
      return r3.getSharedSecret(e9, t3, n3);
    }, function(n4) {
      return n4.getSharedSecret(e9, t3);
    }, function(n4) {
      return l2(n4, e9, t3);
    });
  }, e8.convertPublicKeyFormat = function(e9, t3) {
    return a2((0, i2.ellipticCurve)(), function(n3) {
      return n3.getSharedSecret(BigInt(1), e9, t3);
    }, function() {
      return e9;
    }, function() {
      return e9;
    });
  }, e8.hexToPublicKey = function(e9) {
    var t3 = (0, s2.decodeHex)(e9);
    return a2((0, i2.ellipticCurve)(), function() {
      return c2(t3);
    }, function() {
      return t3;
    }, function() {
      return t3;
    });
  };
  var c2 = function(e9) {
    if (e9.length === o2.ETH_PUBLIC_KEY_SIZE) {
      var t3 = new Uint8Array(1 + e9.length);
      return t3.set([4]), t3.set(e9, 1), t3;
    }
    return e9;
  }, l2 = function(e9, t3, n3) {
    var r3 = e9.utils.getExtendedPublicKey(t3).scalar;
    return e9.ExtendedPoint.fromHex(n3).multiply(r3).toRawBytes();
  };
}(Qn);
var $o = {};
var jo = {};
Object.defineProperty(jo, "__esModule", { value: true }), jo.hkdf = void 0, jo.extract = Ho, jo.expand = Vo;
var Ko = or;
var Fo = pr;
var Uo = Oo;
function Ho(e8, t2, n2) {
  return (0, Ko.hash)(e8), void 0 === n2 && (n2 = new Uint8Array(e8.outputLen)), (0, Uo.hmac)(e8, (0, Fo.toBytes)(n2), (0, Fo.toBytes)(t2));
}
var zo = new Uint8Array([0]);
var qo = new Uint8Array();
function Vo(e8, t2, n2, r2 = 32) {
  if ((0, Ko.hash)(e8), (0, Ko.number)(r2), r2 > 255 * e8.outputLen) throw new Error("Length should be <= 255*HashLen");
  const i2 = Math.ceil(r2 / e8.outputLen);
  void 0 === n2 && (n2 = qo);
  const o2 = new Uint8Array(i2 * e8.outputLen), s2 = Uo.hmac.create(e8, t2), a2 = s2._cloneInto(), c2 = new Uint8Array(s2.outputLen);
  for (let t3 = 0; t3 < i2; t3++) zo[0] = t3 + 1, a2.update(0 === t3 ? qo : c2).update(n2).update(zo).digestInto(c2), o2.set(c2, e8.outputLen * t3), s2._cloneInto(a2);
  return s2.destroy(), a2.destroy(), c2.fill(0), zo.fill(0), o2.slice(0, r2);
}
jo.hkdf = (e8, t2, n2, r2, i2) => Vo(e8, Ho(e8, t2, n2), r2, i2), function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.getSharedKey = e8.deriveKey = void 0;
  var t2 = $n, n2 = jo, r2 = Co;
  e8.deriveKey = function(e9, t3, i2) {
    return (0, n2.hkdf)(r2.sha256, e9, t3, i2, 32);
  }, e8.getSharedKey = function() {
    for (var n3 = [], r3 = 0; r3 < arguments.length; r3++) n3[r3] = arguments[r3];
    return (0, e8.deriveKey)(t2.concatBytes.apply(void 0, n3));
  };
}($o);
var Wo = {};
var Go = {};
var Yo = {};
var Zo = {};
Object.defineProperty(Zo, "__esModule", { value: true }), Zo.polyval = Zo.ghash = void 0, Zo._toGHASHKey = rs;
var Jo = jn;
var Xo = $n;
var Qo = 16;
var es = new Uint8Array(16);
var ts = (0, Xo.u32)(es);
var ns = (e8) => (e8 >>> 0 & 255) << 24 | (e8 >>> 8 & 255) << 16 | (e8 >>> 16 & 255) << 8 | e8 >>> 24 & 255 | 0;
function rs(e8) {
  e8.reverse();
  const t2 = 1 & e8[15];
  let n2 = 0;
  for (let t3 = 0; t3 < e8.length; t3++) {
    const r2 = e8[t3];
    e8[t3] = r2 >>> 1 | n2, n2 = (1 & r2) << 7;
  }
  return e8[0] ^= 225 & -t2, e8;
}
var is = class {
  constructor(e8, t2) {
    this.blockLen = Qo, this.outputLen = Qo, this.s0 = 0, this.s1 = 0, this.s2 = 0, this.s3 = 0, this.finished = false, e8 = (0, Xo.toBytes)(e8), (0, Jo.bytes)(e8, 16);
    const n2 = (0, Xo.createView)(e8);
    let r2 = n2.getUint32(0, false), i2 = n2.getUint32(4, false), o2 = n2.getUint32(8, false), s2 = n2.getUint32(12, false);
    const a2 = [];
    for (let e9 = 0; e9 < 128; e9++) a2.push({ s0: ns(r2), s1: ns(i2), s2: ns(o2), s3: ns(s2) }), { s0: r2, s1: i2, s2: o2, s3: s2 } = { s3: (d2 = o2) << 31 | (u2 = s2) >>> 1, s2: (l2 = i2) << 31 | d2 >>> 1, s1: (c2 = r2) << 31 | l2 >>> 1, s0: c2 >>> 1 ^ 225 << 24 & -(1 & u2) };
    var c2, l2, d2, u2;
    const h2 = ((e9) => e9 > 65536 ? 8 : e9 > 1024 ? 4 : 2)(t2 || 1024);
    if (![1, 2, 4, 8].includes(h2)) throw new Error(`ghash: wrong window size=${h2}, should be 2, 4 or 8`);
    this.W = h2;
    const f2 = 128 / h2, p2 = this.windowSize = 2 ** h2, g2 = [];
    for (let e9 = 0; e9 < f2; e9++) for (let t3 = 0; t3 < p2; t3++) {
      let n3 = 0, r3 = 0, i3 = 0, o3 = 0;
      for (let s3 = 0; s3 < h2; s3++) {
        if (!(t3 >>> h2 - s3 - 1 & 1)) continue;
        const { s0: c3, s1: l3, s2: d3, s3: u3 } = a2[h2 * e9 + s3];
        n3 ^= c3, r3 ^= l3, i3 ^= d3, o3 ^= u3;
      }
      g2.push({ s0: n3, s1: r3, s2: i3, s3: o3 });
    }
    this.t = g2;
  }
  _updateBlock(e8, t2, n2, r2) {
    e8 ^= this.s0, t2 ^= this.s1, n2 ^= this.s2, r2 ^= this.s3;
    const { W: i2, t: o2, windowSize: s2 } = this;
    let a2 = 0, c2 = 0, l2 = 0, d2 = 0;
    const u2 = (1 << i2) - 1;
    let h2 = 0;
    for (const f2 of [e8, t2, n2, r2]) for (let e9 = 0; e9 < 4; e9++) {
      const t3 = f2 >>> 8 * e9 & 255;
      for (let e10 = 8 / i2 - 1; e10 >= 0; e10--) {
        const n3 = t3 >>> i2 * e10 & u2, { s0: r3, s1: f3, s2: p2, s3: g2 } = o2[h2 * s2 + n3];
        a2 ^= r3, c2 ^= f3, l2 ^= p2, d2 ^= g2, h2 += 1;
      }
    }
    this.s0 = a2, this.s1 = c2, this.s2 = l2, this.s3 = d2;
  }
  update(e8) {
    e8 = (0, Xo.toBytes)(e8), (0, Jo.exists)(this);
    const t2 = (0, Xo.u32)(e8), n2 = Math.floor(e8.length / Qo), r2 = e8.length % Qo;
    for (let e9 = 0; e9 < n2; e9++) this._updateBlock(t2[4 * e9 + 0], t2[4 * e9 + 1], t2[4 * e9 + 2], t2[4 * e9 + 3]);
    return r2 && (es.set(e8.subarray(n2 * Qo)), this._updateBlock(ts[0], ts[1], ts[2], ts[3]), (0, Xo.clean)(ts)), this;
  }
  destroy() {
    const { t: e8 } = this;
    for (const t2 of e8) t2.s0 = 0, t2.s1 = 0, t2.s2 = 0, t2.s3 = 0;
  }
  digestInto(e8) {
    (0, Jo.exists)(this), (0, Jo.output)(e8, this), this.finished = true;
    const { s0: t2, s1: n2, s2: r2, s3: i2 } = this, o2 = (0, Xo.u32)(e8);
    return o2[0] = t2, o2[1] = n2, o2[2] = r2, o2[3] = i2, e8;
  }
  digest() {
    const e8 = new Uint8Array(Qo);
    return this.digestInto(e8), this.destroy(), e8;
  }
};
var os = class extends is {
  constructor(e8, t2) {
    e8 = (0, Xo.toBytes)(e8);
    const n2 = rs((0, Xo.copyBytes)(e8));
    super(n2, t2), (0, Xo.clean)(n2);
  }
  update(e8) {
    e8 = (0, Xo.toBytes)(e8), (0, Jo.exists)(this);
    const t2 = (0, Xo.u32)(e8), n2 = e8.length % Qo, r2 = Math.floor(e8.length / Qo);
    for (let e9 = 0; e9 < r2; e9++) this._updateBlock(ns(t2[4 * e9 + 3]), ns(t2[4 * e9 + 2]), ns(t2[4 * e9 + 1]), ns(t2[4 * e9 + 0]));
    return n2 && (es.set(e8.subarray(r2 * Qo)), this._updateBlock(ns(ts[3]), ns(ts[2]), ns(ts[1]), ns(ts[0])), (0, Xo.clean)(ts)), this;
  }
  digestInto(e8) {
    (0, Jo.exists)(this), (0, Jo.output)(e8, this), this.finished = true;
    const { s0: t2, s1: n2, s2: r2, s3: i2 } = this, o2 = (0, Xo.u32)(e8);
    return o2[0] = t2, o2[1] = n2, o2[2] = r2, o2[3] = i2, e8.reverse();
  }
};
function ss(e8) {
  const t2 = (t3, n3) => e8(n3, t3.length).update((0, Xo.toBytes)(t3)).digest(), n2 = e8(new Uint8Array(16), 0);
  return t2.outputLen = n2.outputLen, t2.blockLen = n2.blockLen, t2.create = (t3, n3) => e8(t3, n3), t2;
}
Zo.ghash = ss((e8, t2) => new is(e8, t2)), Zo.polyval = ss((e8, t2) => new os(e8, t2)), Object.defineProperty(Yo, "__esModule", { value: true }), Yo.unsafe = Yo.aeskwp = Yo.aeskw = Yo.siv = Yo.gcm = Yo.cfb = Yo.cbc = Yo.ecb = Yo.ctr = void 0, Yo.expandKeyLE = Ss, Yo.expandKeyDecLE = ks;
var as = jn;
var cs = Zo;
var ls = $n;
var ds = 16;
var us = new Uint8Array(ds);
var hs = 283;
function fs(e8) {
  return e8 << 1 ^ hs & -(e8 >> 7);
}
function ps(e8, t2) {
  let n2 = 0;
  for (; t2 > 0; t2 >>= 1) n2 ^= e8 & -(1 & t2), e8 = fs(e8);
  return n2;
}
var gs = (() => {
  const e8 = new Uint8Array(256);
  for (let t3 = 0, n2 = 1; t3 < 256; t3++, n2 ^= fs(n2)) e8[t3] = n2;
  const t2 = new Uint8Array(256);
  t2[0] = 99;
  for (let n2 = 0; n2 < 255; n2++) {
    let r2 = e8[255 - n2];
    r2 |= r2 << 8, t2[e8[n2]] = 255 & (r2 ^ r2 >> 4 ^ r2 >> 5 ^ r2 >> 6 ^ r2 >> 7 ^ 99);
  }
  return (0, ls.clean)(e8), t2;
})();
var ms = gs.map((e8, t2) => gs.indexOf(t2));
var ys = (e8) => e8 << 24 | e8 >>> 8;
var vs = (e8) => e8 << 8 | e8 >>> 24;
var bs = (e8) => e8 << 24 & 4278190080 | e8 << 8 & 16711680 | e8 >>> 8 & 65280 | e8 >>> 24 & 255;
function ws(e8, t2) {
  if (256 !== e8.length) throw new Error("Wrong sbox length");
  const n2 = new Uint32Array(256).map((n3, r3) => t2(e8[r3])), r2 = n2.map(vs), i2 = r2.map(vs), o2 = i2.map(vs), s2 = new Uint32Array(65536), a2 = new Uint32Array(65536), c2 = new Uint16Array(65536);
  for (let t3 = 0; t3 < 256; t3++) for (let l2 = 0; l2 < 256; l2++) {
    const d2 = 256 * t3 + l2;
    s2[d2] = n2[t3] ^ r2[l2], a2[d2] = i2[t3] ^ o2[l2], c2[d2] = e8[t3] << 8 | e8[l2];
  }
  return { sbox: e8, sbox2: c2, T0: n2, T1: r2, T2: i2, T3: o2, T01: s2, T23: a2 };
}
var Es = ws(gs, (e8) => ps(e8, 3) << 24 | e8 << 16 | e8 << 8 | ps(e8, 2));
var Cs = ws(ms, (e8) => ps(e8, 11) << 24 | ps(e8, 13) << 16 | ps(e8, 9) << 8 | ps(e8, 14));
var _s = (() => {
  const e8 = new Uint8Array(16);
  for (let t2 = 0, n2 = 1; t2 < 16; t2++, n2 = fs(n2)) e8[t2] = n2;
  return e8;
})();
function Ss(e8) {
  (0, as.bytes)(e8);
  const t2 = e8.length;
  if (![16, 24, 32].includes(t2)) throw new Error(`aes: wrong key size: should be 16, 24 or 32, got: ${t2}`);
  const { sbox2: n2 } = Es, r2 = [];
  (0, ls.isAligned32)(e8) || r2.push(e8 = (0, ls.copyBytes)(e8));
  const i2 = (0, ls.u32)(e8), o2 = i2.length, s2 = (e9) => As(n2, e9, e9, e9, e9), a2 = new Uint32Array(t2 + 28);
  a2.set(i2);
  for (let e9 = o2; e9 < a2.length; e9++) {
    let t3 = a2[e9 - 1];
    e9 % o2 == 0 ? t3 = s2(ys(t3)) ^ _s[e9 / o2 - 1] : o2 > 6 && e9 % o2 == 4 && (t3 = s2(t3)), a2[e9] = a2[e9 - o2] ^ t3;
  }
  return (0, ls.clean)(...r2), a2;
}
function ks(e8) {
  const t2 = Ss(e8), n2 = t2.slice(), r2 = t2.length, { sbox2: i2 } = Es, { T0: o2, T1: s2, T2: a2, T3: c2 } = Cs;
  for (let e9 = 0; e9 < r2; e9 += 4) for (let i3 = 0; i3 < 4; i3++) n2[e9 + i3] = t2[r2 - e9 - 4 + i3];
  (0, ls.clean)(t2);
  for (let e9 = 4; e9 < r2 - 4; e9++) {
    const t3 = n2[e9], r3 = As(i2, t3, t3, t3, t3);
    n2[e9] = o2[255 & r3] ^ s2[r3 >>> 8 & 255] ^ a2[r3 >>> 16 & 255] ^ c2[r3 >>> 24];
  }
  return n2;
}
function xs(e8, t2, n2, r2, i2, o2) {
  return e8[n2 << 8 & 65280 | r2 >>> 8 & 255] ^ t2[i2 >>> 8 & 65280 | o2 >>> 24 & 255];
}
function As(e8, t2, n2, r2, i2) {
  return e8[255 & t2 | 65280 & n2] | e8[r2 >>> 16 & 255 | i2 >>> 16 & 65280] << 16;
}
function Ms(e8, t2, n2, r2, i2) {
  const { sbox2: o2, T01: s2, T23: a2 } = Es;
  let c2 = 0;
  t2 ^= e8[c2++], n2 ^= e8[c2++], r2 ^= e8[c2++], i2 ^= e8[c2++];
  const l2 = e8.length / 4 - 2;
  for (let o3 = 0; o3 < l2; o3++) {
    const o4 = e8[c2++] ^ xs(s2, a2, t2, n2, r2, i2), l3 = e8[c2++] ^ xs(s2, a2, n2, r2, i2, t2), d2 = e8[c2++] ^ xs(s2, a2, r2, i2, t2, n2), u2 = e8[c2++] ^ xs(s2, a2, i2, t2, n2, r2);
    t2 = o4, n2 = l3, r2 = d2, i2 = u2;
  }
  return { s0: e8[c2++] ^ As(o2, t2, n2, r2, i2), s1: e8[c2++] ^ As(o2, n2, r2, i2, t2), s2: e8[c2++] ^ As(o2, r2, i2, t2, n2), s3: e8[c2++] ^ As(o2, i2, t2, n2, r2) };
}
function Ls(e8, t2, n2, r2, i2) {
  const { sbox2: o2, T01: s2, T23: a2 } = Cs;
  let c2 = 0;
  t2 ^= e8[c2++], n2 ^= e8[c2++], r2 ^= e8[c2++], i2 ^= e8[c2++];
  const l2 = e8.length / 4 - 2;
  for (let o3 = 0; o3 < l2; o3++) {
    const o4 = e8[c2++] ^ xs(s2, a2, t2, i2, r2, n2), l3 = e8[c2++] ^ xs(s2, a2, n2, t2, i2, r2), d2 = e8[c2++] ^ xs(s2, a2, r2, n2, t2, i2), u2 = e8[c2++] ^ xs(s2, a2, i2, r2, n2, t2);
    t2 = o4, n2 = l3, r2 = d2, i2 = u2;
  }
  return { s0: e8[c2++] ^ As(o2, t2, i2, r2, n2), s1: e8[c2++] ^ As(o2, n2, t2, i2, r2), s2: e8[c2++] ^ As(o2, r2, n2, t2, i2), s3: e8[c2++] ^ As(o2, i2, r2, n2, t2) };
}
function Ts(e8, t2) {
  if (void 0 === t2) return new Uint8Array(e8);
  if ((0, as.bytes)(t2), t2.length < e8) throw new Error(`aes: wrong destination length, expected at least ${e8}, got: ${t2.length}`);
  if (!(0, ls.isAligned32)(t2)) throw new Error("unaligned dst");
  return t2;
}
function Os(e8, t2, n2, r2) {
  (0, as.bytes)(t2, ds), (0, as.bytes)(n2);
  const i2 = n2.length;
  r2 = Ts(i2, r2);
  const o2 = t2, s2 = (0, ls.u32)(o2);
  let { s0: a2, s1: c2, s2: l2, s3: d2 } = Ms(e8, s2[0], s2[1], s2[2], s2[3]);
  const u2 = (0, ls.u32)(n2), h2 = (0, ls.u32)(r2);
  for (let t3 = 0; t3 + 4 <= u2.length; t3 += 4) {
    h2[t3 + 0] = u2[t3 + 0] ^ a2, h2[t3 + 1] = u2[t3 + 1] ^ c2, h2[t3 + 2] = u2[t3 + 2] ^ l2, h2[t3 + 3] = u2[t3 + 3] ^ d2;
    let n3 = 1;
    for (let e9 = o2.length - 1; e9 >= 0; e9--) n3 = n3 + (255 & o2[e9]) | 0, o2[e9] = 255 & n3, n3 >>>= 8;
    ({ s0: a2, s1: c2, s2: l2, s3: d2 } = Ms(e8, s2[0], s2[1], s2[2], s2[3]));
  }
  const f2 = ds * Math.floor(u2.length / 4);
  if (f2 < i2) {
    const e9 = new Uint32Array([a2, c2, l2, d2]), t3 = (0, ls.u8)(e9);
    for (let e10 = f2, o3 = 0; e10 < i2; e10++, o3++) r2[e10] = n2[e10] ^ t3[o3];
    (0, ls.clean)(e9);
  }
  return r2;
}
function Rs(e8, t2, n2, r2, i2) {
  (0, as.bytes)(n2, ds), (0, as.bytes)(r2), i2 = Ts(r2.length, i2);
  const o2 = n2, s2 = (0, ls.u32)(o2), a2 = (0, ls.createView)(o2), c2 = (0, ls.u32)(r2), l2 = (0, ls.u32)(i2), d2 = t2 ? 0 : 12, u2 = r2.length;
  let h2 = a2.getUint32(d2, t2), { s0: f2, s1: p2, s2: g2, s3: m2 } = Ms(e8, s2[0], s2[1], s2[2], s2[3]);
  for (let n3 = 0; n3 + 4 <= c2.length; n3 += 4) l2[n3 + 0] = c2[n3 + 0] ^ f2, l2[n3 + 1] = c2[n3 + 1] ^ p2, l2[n3 + 2] = c2[n3 + 2] ^ g2, l2[n3 + 3] = c2[n3 + 3] ^ m2, h2 = h2 + 1 >>> 0, a2.setUint32(d2, h2, t2), { s0: f2, s1: p2, s2: g2, s3: m2 } = Ms(e8, s2[0], s2[1], s2[2], s2[3]);
  const y2 = ds * Math.floor(c2.length / 4);
  if (y2 < u2) {
    const e9 = new Uint32Array([f2, p2, g2, m2]), t3 = (0, ls.u8)(e9);
    for (let e10 = y2, n3 = 0; e10 < u2; e10++, n3++) i2[e10] = r2[e10] ^ t3[n3];
    (0, ls.clean)(e9);
  }
  return i2;
}
function Ps(e8) {
  if ((0, as.bytes)(e8), e8.length % ds != 0) throw new Error("aes/(cbc-ecb).decrypt ciphertext should consist of blocks with size 16");
}
function Is(e8, t2, n2) {
  (0, as.bytes)(e8);
  let r2 = e8.length;
  const i2 = r2 % ds;
  if (!t2 && 0 !== i2) throw new Error("aec/(cbc-ecb): unpadded plaintext with disabled padding");
  (0, ls.isAligned32)(e8) || (e8 = (0, ls.copyBytes)(e8));
  const o2 = (0, ls.u32)(e8);
  if (t2) {
    let e9 = ds - i2;
    e9 || (e9 = ds), r2 += e9;
  }
  const s2 = Ts(r2, n2);
  return { b: o2, o: (0, ls.u32)(s2), out: s2 };
}
function Ns(e8, t2) {
  if (!t2) return e8;
  const n2 = e8.length;
  if (!n2) throw new Error("aes/pcks5: empty ciphertext not allowed");
  const r2 = e8[n2 - 1];
  if (r2 <= 0 || r2 > 16) throw new Error("aes/pcks5: wrong padding");
  const i2 = e8.subarray(0, -r2);
  for (let t3 = 0; t3 < r2; t3++) if (e8[n2 - t3 - 1] !== r2) throw new Error("aes/pcks5: wrong padding");
  return i2;
}
function Ds(e8) {
  const t2 = new Uint8Array(16), n2 = (0, ls.u32)(t2);
  t2.set(e8);
  const r2 = ds - e8.length;
  for (let e9 = ds - r2; e9 < ds; e9++) t2[e9] = r2;
  return n2;
}
function Bs(e8, t2, n2, r2, i2) {
  const o2 = null == i2 ? 0 : i2.length, s2 = e8.create(n2, r2.length + o2);
  i2 && s2.update(i2), s2.update(r2);
  const a2 = new Uint8Array(16), c2 = (0, ls.createView)(a2);
  i2 && (0, ls.setBigUint64)(c2, 0, BigInt(8 * o2), t2), (0, ls.setBigUint64)(c2, 8, BigInt(8 * r2.length), t2), s2.update(a2);
  const l2 = s2.digest();
  return (0, ls.clean)(a2), l2;
}
Yo.ctr = (0, ls.wrapCipher)({ blockSize: 16, nonceLength: 16 }, function(e8, t2) {
  function n2(n3, r2) {
    if ((0, as.bytes)(n3), void 0 !== r2 && ((0, as.bytes)(r2), !(0, ls.isAligned32)(r2))) throw new Error("unaligned destination");
    const i2 = Ss(e8), o2 = (0, ls.copyBytes)(t2), s2 = [i2, o2];
    (0, ls.isAligned32)(n3) || s2.push(n3 = (0, ls.copyBytes)(n3));
    const a2 = Os(i2, o2, n3, r2);
    return (0, ls.clean)(...s2), a2;
  }
  return (0, as.bytes)(e8), (0, as.bytes)(t2, ds), { encrypt: (e9, t3) => n2(e9, t3), decrypt: (e9, t3) => n2(e9, t3) };
}), Yo.ecb = (0, ls.wrapCipher)({ blockSize: 16 }, function(e8, t2 = {}) {
  (0, as.bytes)(e8);
  const n2 = !t2.disablePadding;
  return { encrypt(t3, r2) {
    const { b: i2, o: o2, out: s2 } = Is(t3, n2, r2), a2 = Ss(e8);
    let c2 = 0;
    for (; c2 + 4 <= i2.length; ) {
      const { s0: e9, s1: t4, s2: n3, s3: r3 } = Ms(a2, i2[c2 + 0], i2[c2 + 1], i2[c2 + 2], i2[c2 + 3]);
      o2[c2++] = e9, o2[c2++] = t4, o2[c2++] = n3, o2[c2++] = r3;
    }
    if (n2) {
      const e9 = Ds(t3.subarray(4 * c2)), { s0: n3, s1: r3, s2: i3, s3 } = Ms(a2, e9[0], e9[1], e9[2], e9[3]);
      o2[c2++] = n3, o2[c2++] = r3, o2[c2++] = i3, o2[c2++] = s3;
    }
    return (0, ls.clean)(a2), s2;
  }, decrypt(t3, r2) {
    Ps(t3);
    const i2 = ks(e8), o2 = Ts(t3.length, r2), s2 = [i2];
    (0, ls.isAligned32)(t3) || s2.push(t3 = (0, ls.copyBytes)(t3));
    const a2 = (0, ls.u32)(t3), c2 = (0, ls.u32)(o2);
    for (let e9 = 0; e9 + 4 <= a2.length; ) {
      const { s0: t4, s1: n3, s2: r3, s3: o3 } = Ls(i2, a2[e9 + 0], a2[e9 + 1], a2[e9 + 2], a2[e9 + 3]);
      c2[e9++] = t4, c2[e9++] = n3, c2[e9++] = r3, c2[e9++] = o3;
    }
    return (0, ls.clean)(...s2), Ns(o2, n2);
  } };
}), Yo.cbc = (0, ls.wrapCipher)({ blockSize: 16, nonceLength: 16 }, function(e8, t2, n2 = {}) {
  (0, as.bytes)(e8), (0, as.bytes)(t2, 16);
  const r2 = !n2.disablePadding;
  return { encrypt(n3, i2) {
    const o2 = Ss(e8), { b: s2, o: a2, out: c2 } = Is(n3, r2, i2);
    let l2 = t2;
    const d2 = [o2];
    (0, ls.isAligned32)(l2) || d2.push(l2 = (0, ls.copyBytes)(l2));
    const u2 = (0, ls.u32)(l2);
    let h2 = u2[0], f2 = u2[1], p2 = u2[2], g2 = u2[3], m2 = 0;
    for (; m2 + 4 <= s2.length; ) h2 ^= s2[m2 + 0], f2 ^= s2[m2 + 1], p2 ^= s2[m2 + 2], g2 ^= s2[m2 + 3], { s0: h2, s1: f2, s2: p2, s3: g2 } = Ms(o2, h2, f2, p2, g2), a2[m2++] = h2, a2[m2++] = f2, a2[m2++] = p2, a2[m2++] = g2;
    if (r2) {
      const e9 = Ds(n3.subarray(4 * m2));
      h2 ^= e9[0], f2 ^= e9[1], p2 ^= e9[2], g2 ^= e9[3], { s0: h2, s1: f2, s2: p2, s3: g2 } = Ms(o2, h2, f2, p2, g2), a2[m2++] = h2, a2[m2++] = f2, a2[m2++] = p2, a2[m2++] = g2;
    }
    return (0, ls.clean)(...d2), c2;
  }, decrypt(n3, i2) {
    Ps(n3);
    const o2 = ks(e8);
    let s2 = t2;
    const a2 = [o2];
    (0, ls.isAligned32)(s2) || a2.push(s2 = (0, ls.copyBytes)(s2));
    const c2 = (0, ls.u32)(s2), l2 = Ts(n3.length, i2);
    (0, ls.isAligned32)(n3) || a2.push(n3 = (0, ls.copyBytes)(n3));
    const d2 = (0, ls.u32)(n3), u2 = (0, ls.u32)(l2);
    let h2 = c2[0], f2 = c2[1], p2 = c2[2], g2 = c2[3];
    for (let e9 = 0; e9 + 4 <= d2.length; ) {
      const t3 = h2, n4 = f2, r3 = p2, i3 = g2;
      h2 = d2[e9 + 0], f2 = d2[e9 + 1], p2 = d2[e9 + 2], g2 = d2[e9 + 3];
      const { s0: s3, s1: a3, s2: c3, s3: l3 } = Ls(o2, h2, f2, p2, g2);
      u2[e9++] = s3 ^ t3, u2[e9++] = a3 ^ n4, u2[e9++] = c3 ^ r3, u2[e9++] = l3 ^ i3;
    }
    return (0, ls.clean)(...a2), Ns(l2, r2);
  } };
}), Yo.cfb = (0, ls.wrapCipher)({ blockSize: 16, nonceLength: 16 }, function(e8, t2) {
  function n2(n3, r2, i2) {
    (0, as.bytes)(n3);
    const o2 = n3.length;
    i2 = Ts(o2, i2);
    const s2 = Ss(e8);
    let a2 = t2;
    const c2 = [s2];
    (0, ls.isAligned32)(a2) || c2.push(a2 = (0, ls.copyBytes)(a2)), (0, ls.isAligned32)(n3) || c2.push(n3 = (0, ls.copyBytes)(n3));
    const l2 = (0, ls.u32)(n3), d2 = (0, ls.u32)(i2), u2 = r2 ? d2 : l2, h2 = (0, ls.u32)(a2);
    let f2 = h2[0], p2 = h2[1], g2 = h2[2], m2 = h2[3];
    for (let e9 = 0; e9 + 4 <= l2.length; ) {
      const { s0: t3, s1: n4, s2: r3, s3: i3 } = Ms(s2, f2, p2, g2, m2);
      d2[e9 + 0] = l2[e9 + 0] ^ t3, d2[e9 + 1] = l2[e9 + 1] ^ n4, d2[e9 + 2] = l2[e9 + 2] ^ r3, d2[e9 + 3] = l2[e9 + 3] ^ i3, f2 = u2[e9++], p2 = u2[e9++], g2 = u2[e9++], m2 = u2[e9++];
    }
    const y2 = ds * Math.floor(l2.length / 4);
    if (y2 < o2) {
      ({ s0: f2, s1: p2, s2: g2, s3: m2 } = Ms(s2, f2, p2, g2, m2));
      const e9 = (0, ls.u8)(new Uint32Array([f2, p2, g2, m2]));
      for (let t3 = y2, r3 = 0; t3 < o2; t3++, r3++) i2[t3] = n3[t3] ^ e9[r3];
      (0, ls.clean)(e9);
    }
    return (0, ls.clean)(...c2), i2;
  }
  return (0, as.bytes)(e8), (0, as.bytes)(t2, 16), { encrypt: (e9, t3) => n2(e9, true, t3), decrypt: (e9, t3) => n2(e9, false, t3) };
}), Yo.gcm = (0, ls.wrapCipher)({ blockSize: 16, nonceLength: 12, tagLength: 16 }, function(e8, t2, n2) {
  if ((0, as.bytes)(e8), (0, as.bytes)(t2), void 0 !== n2 && (0, as.bytes)(n2), t2.length < 8) throw new Error("aes/gcm: invalid nonce length");
  function r2(e9, t3, r3) {
    const i3 = Bs(cs.ghash, false, e9, r3, n2);
    for (let e10 = 0; e10 < t3.length; e10++) i3[e10] ^= t3[e10];
    return i3;
  }
  function i2() {
    const n3 = Ss(e8), r3 = us.slice(), i3 = us.slice();
    if (Rs(n3, false, i3, i3, r3), 12 === t2.length) i3.set(t2);
    else {
      const e9 = us.slice(), n4 = (0, ls.createView)(e9);
      (0, ls.setBigUint64)(n4, 8, BigInt(8 * t2.length), false);
      const o2 = cs.ghash.create(r3).update(t2).update(e9);
      o2.digestInto(i3), o2.destroy();
    }
    return { xk: n3, authKey: r3, counter: i3, tagMask: Rs(n3, false, i3, us) };
  }
  return { encrypt(e9) {
    (0, as.bytes)(e9);
    const { xk: t3, authKey: n3, counter: o2, tagMask: s2 } = i2(), a2 = new Uint8Array(e9.length + 16), c2 = [t3, n3, o2, s2];
    (0, ls.isAligned32)(e9) || c2.push(e9 = (0, ls.copyBytes)(e9)), Rs(t3, false, o2, e9, a2);
    const l2 = r2(n3, s2, a2.subarray(0, a2.length - 16));
    return c2.push(l2), a2.set(l2, e9.length), (0, ls.clean)(...c2), a2;
  }, decrypt(e9) {
    if ((0, as.bytes)(e9), e9.length < 16) throw new Error("aes/gcm: ciphertext less than tagLen (16)");
    const { xk: t3, authKey: n3, counter: o2, tagMask: s2 } = i2(), a2 = [t3, n3, s2, o2];
    (0, ls.isAligned32)(e9) || a2.push(e9 = (0, ls.copyBytes)(e9));
    const c2 = e9.subarray(0, -16), l2 = e9.subarray(-16), d2 = r2(n3, s2, c2);
    if (a2.push(d2), !(0, ls.equalBytes)(d2, l2)) throw new Error("aes/gcm: invalid ghash tag");
    const u2 = Rs(t3, false, o2, c2);
    return (0, ls.clean)(...a2), u2;
  } };
});
var $s = (e8, t2, n2) => (r2) => {
  if (!Number.isSafeInteger(r2) || t2 > r2 || r2 > n2) throw new Error(`${e8}: invalid value=${r2}, must be [${t2}..${n2}]`);
};
function js(e8) {
  return null != e8 && "object" == typeof e8 && (e8 instanceof Uint32Array || "Uint32Array" === e8.constructor.name);
}
function Ks(e8, t2) {
  if ((0, as.bytes)(t2, 16), !js(e8)) throw new Error("_encryptBlock accepts result of expandKeyLE");
  const n2 = (0, ls.u32)(t2);
  let { s0: r2, s1: i2, s2: o2, s3: s2 } = Ms(e8, n2[0], n2[1], n2[2], n2[3]);
  return n2[0] = r2, n2[1] = i2, n2[2] = o2, n2[3] = s2, t2;
}
function Fs(e8, t2) {
  if ((0, as.bytes)(t2, 16), !js(e8)) throw new Error("_decryptBlock accepts result of expandKeyLE");
  const n2 = (0, ls.u32)(t2);
  let { s0: r2, s1: i2, s2: o2, s3: s2 } = Ls(e8, n2[0], n2[1], n2[2], n2[3]);
  return n2[0] = r2, n2[1] = i2, n2[2] = o2, n2[3] = s2, t2;
}
Yo.siv = (0, ls.wrapCipher)({ blockSize: 16, nonceLength: 12, tagLength: 16 }, function(e8, t2, n2) {
  const r2 = $s("AAD", 0, 2 ** 36), i2 = $s("plaintext", 0, 2 ** 36), o2 = $s("nonce", 12, 12), s2 = $s("ciphertext", 16, 2 ** 36 + 16);
  function a2() {
    const n3 = Ss(e8), r3 = new Uint8Array(e8.length), i3 = new Uint8Array(16), o3 = [n3, r3];
    let s3 = t2;
    (0, ls.isAligned32)(s3) || o3.push(s3 = (0, ls.copyBytes)(s3));
    const a3 = (0, ls.u32)(s3);
    let c3 = 0, l3 = a3[0], d2 = a3[1], u2 = a3[2], h2 = 0;
    for (const e9 of [i3, r3].map(ls.u32)) {
      const t3 = (0, ls.u32)(e9);
      for (let e10 = 0; e10 < t3.length; e10 += 2) {
        const { s0: r4, s1: i4 } = Ms(n3, c3, l3, d2, u2);
        t3[e10 + 0] = r4, t3[e10 + 1] = i4, c3 = ++h2;
      }
    }
    const f2 = { authKey: i3, encKey: Ss(r3) };
    return (0, ls.clean)(...o3), f2;
  }
  function c2(e9, r3, i3) {
    const o3 = Bs(cs.polyval, true, r3, i3, n2);
    for (let e10 = 0; e10 < 12; e10++) o3[e10] ^= t2[e10];
    o3[15] &= 127;
    const s3 = (0, ls.u32)(o3);
    let a3 = s3[0], c3 = s3[1], l3 = s3[2], d2 = s3[3];
    return { s0: a3, s1: c3, s2: l3, s3: d2 } = Ms(e9, a3, c3, l3, d2), s3[0] = a3, s3[1] = c3, s3[2] = l3, s3[3] = d2, o3;
  }
  function l2(e9, t3, n3) {
    let r3 = (0, ls.copyBytes)(t3);
    r3[15] |= 128;
    const i3 = Rs(e9, true, r3, n3);
    return (0, ls.clean)(r3), i3;
  }
  return (0, as.bytes)(e8, 16, 24, 32), (0, as.bytes)(t2), o2(t2.length), void 0 !== n2 && ((0, as.bytes)(n2), r2(n2.length)), { encrypt(e9) {
    (0, as.bytes)(e9), i2(e9.length);
    const { encKey: t3, authKey: n3 } = a2(), r3 = c2(t3, n3, e9), o3 = [t3, n3, r3];
    (0, ls.isAligned32)(e9) || o3.push(e9 = (0, ls.copyBytes)(e9));
    const s3 = new Uint8Array(e9.length + 16);
    return s3.set(r3, e9.length), s3.set(l2(t3, r3, e9)), (0, ls.clean)(...o3), s3;
  }, decrypt(e9) {
    (0, as.bytes)(e9), s2(e9.length);
    const t3 = e9.subarray(-16), { encKey: n3, authKey: r3 } = a2(), i3 = [n3, r3];
    (0, ls.isAligned32)(e9) || i3.push(e9 = (0, ls.copyBytes)(e9));
    const o3 = l2(n3, t3, e9.subarray(0, -16)), d2 = c2(n3, r3, o3);
    if (i3.push(d2), !(0, ls.equalBytes)(t3, d2)) throw (0, ls.clean)(...i3), new Error("invalid polyval tag");
    return (0, ls.clean)(...i3), o3;
  } };
});
var Us = { encrypt(e8, t2) {
  if (t2.length >= 2 ** 32) throw new Error("plaintext should be less than 4gb");
  const n2 = Ss(e8);
  if (16 === t2.length) Ks(n2, t2);
  else {
    const e9 = (0, ls.u32)(t2);
    let r2 = e9[0], i2 = e9[1];
    for (let t3 = 0, o2 = 1; t3 < 6; t3++) for (let t4 = 2; t4 < e9.length; t4 += 2, o2++) {
      const { s0: s2, s1: a2, s2: c2, s3: l2 } = Ms(n2, r2, i2, e9[t4], e9[t4 + 1]);
      r2 = s2, i2 = a2 ^ bs(o2), e9[t4] = c2, e9[t4 + 1] = l2;
    }
    e9[0] = r2, e9[1] = i2;
  }
  n2.fill(0);
}, decrypt(e8, t2) {
  if (t2.length - 8 >= 2 ** 32) throw new Error("ciphertext should be less than 4gb");
  const n2 = ks(e8), r2 = t2.length / 8 - 1;
  if (1 === r2) Fs(n2, t2);
  else {
    const e9 = (0, ls.u32)(t2);
    let i2 = e9[0], o2 = e9[1];
    for (let t3 = 0, s2 = 6 * r2; t3 < 6; t3++) for (let t4 = 2 * r2; t4 >= 1; t4 -= 2, s2--) {
      o2 ^= bs(s2);
      const { s0: r3, s1: a2, s2: c2, s3: l2 } = Ls(n2, i2, o2, e9[t4], e9[t4 + 1]);
      i2 = r3, o2 = a2, e9[t4] = c2, e9[t4 + 1] = l2;
    }
    e9[0] = i2, e9[1] = o2;
  }
  n2.fill(0);
} };
var Hs = new Uint8Array(8).fill(166);
Yo.aeskw = (0, ls.wrapCipher)({ blockSize: 8 }, (e8) => ({ encrypt(t2) {
  if ((0, as.bytes)(t2), !t2.length || t2.length % 8 != 0) throw new Error("invalid plaintext length");
  if (8 === t2.length) throw new Error("8-byte keys not allowed in AESKW, use AESKWP instead");
  const n2 = (0, ls.concatBytes)(Hs, t2);
  return Us.encrypt(e8, n2), n2;
}, decrypt(t2) {
  if ((0, as.bytes)(t2), t2.length % 8 != 0 || t2.length < 24) throw new Error("invalid ciphertext length");
  const n2 = (0, ls.copyBytes)(t2);
  if (Us.decrypt(e8, n2), !(0, ls.equalBytes)(n2.subarray(0, 8), Hs)) throw new Error("integrity check failed");
  return n2.subarray(0, 8).fill(0), n2.subarray(8);
} }));
var zs = 2790873510;
Yo.aeskwp = (0, ls.wrapCipher)({ blockSize: 8 }, (e8) => ({ encrypt(t2) {
  if ((0, as.bytes)(t2), !t2.length) throw new Error("invalid plaintext length");
  const n2 = 8 * Math.ceil(t2.length / 8), r2 = new Uint8Array(8 + n2);
  r2.set(t2, 8);
  const i2 = (0, ls.u32)(r2);
  return i2[0] = zs, i2[1] = bs(t2.length), Us.encrypt(e8, r2), r2;
}, decrypt(t2) {
  if ((0, as.bytes)(t2), t2.length < 16) throw new Error("invalid ciphertext length");
  const n2 = (0, ls.copyBytes)(t2), r2 = (0, ls.u32)(n2);
  Us.decrypt(e8, n2);
  const i2 = bs(r2[1]) >>> 0, o2 = 8 * Math.ceil(i2 / 8);
  if (r2[0] !== zs || n2.length - 8 !== o2) throw new Error("integrity check failed");
  for (let e9 = i2; e9 < o2; e9++) if (0 !== n2[8 + e9]) throw new Error("integrity check failed");
  return n2.subarray(0, 8).fill(0), n2.subarray(8, 8 + i2);
} })), Yo.unsafe = { expandKeyLE: Ss, expandKeyDecLE: ks, encrypt: Ms, decrypt: Ls, encryptBlock: Ks, decryptBlock: Fs, ctrCounter: Os, ctr32: Rs }, Object.defineProperty(Go, "__esModule", { value: true }), Go.aes256cbc = Go.aes256gcm = void 0;
var qs = Yo;
Go.aes256gcm = function(e8, t2, n2) {
  return (0, qs.gcm)(e8, t2, n2);
}, Go.aes256cbc = function(e8, t2, n2) {
  return (0, qs.cbc)(e8, t2);
};
var Vs = {};
var Ws = {};
var Gs = {};
Object.defineProperty(Gs, "__esModule", { value: true }), Gs.sigma = void 0, Gs.rotl = function(e8, t2) {
  return e8 << t2 | e8 >>> 32 - t2;
}, Gs.createCipher = function(e8, t2) {
  const { allowShortKeys: n2, extendNonceFn: r2, counterLength: i2, counterRight: o2, rounds: s2 } = (0, Zs.checkOpts)({ allowShortKeys: false, counterLength: 8, counterRight: false, rounds: 20 }, t2);
  if ("function" != typeof e8) throw new Error("core must be a function");
  return (0, Ys.number)(i2), (0, Ys.number)(s2), (0, Ys.bool)(o2), (0, Ys.bool)(n2), (t3, a2, c2, l2, d2 = 0) => {
    (0, Ys.bytes)(t3), (0, Ys.bytes)(a2), (0, Ys.bytes)(c2);
    const u2 = c2.length;
    if (void 0 === l2 && (l2 = new Uint8Array(u2)), (0, Ys.bytes)(l2), (0, Ys.number)(d2), d2 < 0 || d2 >= oa) throw new Error("arx: counter overflow");
    if (l2.length < u2) throw new Error(`arx: output (${l2.length}) is shorter than data (${u2})`);
    const h2 = [];
    let f2, p2, g2 = t3.length;
    if (32 === g2) h2.push(f2 = (0, Zs.copyBytes)(t3)), p2 = ta;
    else {
      if (16 !== g2 || !n2) throw new Error(`arx: invalid 32-byte key, got length=${g2}`);
      f2 = new Uint8Array(32), f2.set(t3), f2.set(t3, 16), p2 = ea, h2.push(f2);
    }
    na(a2) || h2.push(a2 = (0, Zs.copyBytes)(a2));
    const m2 = (0, Zs.u32)(f2);
    if (r2) {
      if (24 !== a2.length) throw new Error("arx: extended nonce must be 24 bytes");
      r2(p2, m2, (0, Zs.u32)(a2.subarray(0, 16)), m2), a2 = a2.subarray(16);
    }
    const y2 = 16 - i2;
    if (y2 !== a2.length) throw new Error(`arx: nonce must be ${y2} or 16 bytes`);
    if (12 !== y2) {
      const e9 = new Uint8Array(12);
      e9.set(a2, o2 ? 0 : 12 - a2.length), a2 = e9, h2.push(a2);
    }
    const v2 = (0, Zs.u32)(a2);
    return function(e9, t4, n3, r3, i3, o3, s3, a3) {
      const c3 = i3.length, l3 = new Uint8Array(ra), d3 = (0, Zs.u32)(l3), u3 = na(i3) && na(o3), h3 = u3 ? (0, Zs.u32)(i3) : sa, f3 = u3 ? (0, Zs.u32)(o3) : sa;
      for (let p3 = 0; p3 < c3; s3++) {
        if (e9(t4, n3, r3, d3, s3, a3), s3 >= oa) throw new Error("arx: counter overflow");
        const g3 = Math.min(ra, c3 - p3);
        if (u3 && g3 === ra) {
          const e10 = p3 / 4;
          if (p3 % 4 != 0) throw new Error("arx: invalid block position");
          for (let t5, n4 = 0; n4 < ia; n4++) t5 = e10 + n4, f3[t5] = h3[t5] ^ d3[n4];
          p3 += ra;
        } else {
          for (let e10, t5 = 0; t5 < g3; t5++) e10 = p3 + t5, o3[e10] = i3[e10] ^ l3[t5];
          p3 += g3;
        }
      }
    }(e8, p2, m2, v2, c2, l2, d2, s2), (0, Zs.clean)(...h2), l2;
  };
};
var Ys = jn;
var Zs = $n;
var Js = (e8) => Uint8Array.from(e8.split("").map((e9) => e9.charCodeAt(0)));
var Xs = Js("expand 16-byte k");
var Qs = Js("expand 32-byte k");
var ea = (0, Zs.u32)(Xs);
var ta = (0, Zs.u32)(Qs);
function na(e8) {
  return e8.byteOffset % 4 == 0;
}
Gs.sigma = ta.slice();
var ra = 64;
var ia = 16;
var oa = 2 ** 32 - 1;
var sa = new Uint32Array();
var aa = {};
Object.defineProperty(aa, "__esModule", { value: true }), aa.poly1305 = void 0, aa.wrapConstructorWithKey = ha;
var ca = jn;
var la = $n;
var da = (e8, t2) => 255 & e8[t2++] | (255 & e8[t2++]) << 8;
var ua = class {
  constructor(e8) {
    this.blockLen = 16, this.outputLen = 16, this.buffer = new Uint8Array(16), this.r = new Uint16Array(10), this.h = new Uint16Array(10), this.pad = new Uint16Array(8), this.pos = 0, this.finished = false, e8 = (0, la.toBytes)(e8), (0, ca.bytes)(e8, 32);
    const t2 = da(e8, 0), n2 = da(e8, 2), r2 = da(e8, 4), i2 = da(e8, 6), o2 = da(e8, 8), s2 = da(e8, 10), a2 = da(e8, 12), c2 = da(e8, 14);
    this.r[0] = 8191 & t2, this.r[1] = 8191 & (t2 >>> 13 | n2 << 3), this.r[2] = 7939 & (n2 >>> 10 | r2 << 6), this.r[3] = 8191 & (r2 >>> 7 | i2 << 9), this.r[4] = 255 & (i2 >>> 4 | o2 << 12), this.r[5] = o2 >>> 1 & 8190, this.r[6] = 8191 & (o2 >>> 14 | s2 << 2), this.r[7] = 8065 & (s2 >>> 11 | a2 << 5), this.r[8] = 8191 & (a2 >>> 8 | c2 << 8), this.r[9] = c2 >>> 5 & 127;
    for (let t3 = 0; t3 < 8; t3++) this.pad[t3] = da(e8, 16 + 2 * t3);
  }
  process(e8, t2, n2 = false) {
    const r2 = n2 ? 0 : 2048, { h: i2, r: o2 } = this, s2 = o2[0], a2 = o2[1], c2 = o2[2], l2 = o2[3], d2 = o2[4], u2 = o2[5], h2 = o2[6], f2 = o2[7], p2 = o2[8], g2 = o2[9], m2 = da(e8, t2 + 0), y2 = da(e8, t2 + 2), v2 = da(e8, t2 + 4), b2 = da(e8, t2 + 6), w2 = da(e8, t2 + 8), E2 = da(e8, t2 + 10), C2 = da(e8, t2 + 12), _2 = da(e8, t2 + 14);
    let S2 = i2[0] + (8191 & m2), k2 = i2[1] + (8191 & (m2 >>> 13 | y2 << 3)), x2 = i2[2] + (8191 & (y2 >>> 10 | v2 << 6)), A2 = i2[3] + (8191 & (v2 >>> 7 | b2 << 9)), M2 = i2[4] + (8191 & (b2 >>> 4 | w2 << 12)), L2 = i2[5] + (w2 >>> 1 & 8191), T2 = i2[6] + (8191 & (w2 >>> 14 | E2 << 2)), O2 = i2[7] + (8191 & (E2 >>> 11 | C2 << 5)), R2 = i2[8] + (8191 & (C2 >>> 8 | _2 << 8)), P2 = i2[9] + (_2 >>> 5 | r2), I2 = 0, N2 = I2 + S2 * s2 + k2 * (5 * g2) + x2 * (5 * p2) + A2 * (5 * f2) + M2 * (5 * h2);
    I2 = N2 >>> 13, N2 &= 8191, N2 += L2 * (5 * u2) + T2 * (5 * d2) + O2 * (5 * l2) + R2 * (5 * c2) + P2 * (5 * a2), I2 += N2 >>> 13, N2 &= 8191;
    let D2 = I2 + S2 * a2 + k2 * s2 + x2 * (5 * g2) + A2 * (5 * p2) + M2 * (5 * f2);
    I2 = D2 >>> 13, D2 &= 8191, D2 += L2 * (5 * h2) + T2 * (5 * u2) + O2 * (5 * d2) + R2 * (5 * l2) + P2 * (5 * c2), I2 += D2 >>> 13, D2 &= 8191;
    let B2 = I2 + S2 * c2 + k2 * a2 + x2 * s2 + A2 * (5 * g2) + M2 * (5 * p2);
    I2 = B2 >>> 13, B2 &= 8191, B2 += L2 * (5 * f2) + T2 * (5 * h2) + O2 * (5 * u2) + R2 * (5 * d2) + P2 * (5 * l2), I2 += B2 >>> 13, B2 &= 8191;
    let $2 = I2 + S2 * l2 + k2 * c2 + x2 * a2 + A2 * s2 + M2 * (5 * g2);
    I2 = $2 >>> 13, $2 &= 8191, $2 += L2 * (5 * p2) + T2 * (5 * f2) + O2 * (5 * h2) + R2 * (5 * u2) + P2 * (5 * d2), I2 += $2 >>> 13, $2 &= 8191;
    let j2 = I2 + S2 * d2 + k2 * l2 + x2 * c2 + A2 * a2 + M2 * s2;
    I2 = j2 >>> 13, j2 &= 8191, j2 += L2 * (5 * g2) + T2 * (5 * p2) + O2 * (5 * f2) + R2 * (5 * h2) + P2 * (5 * u2), I2 += j2 >>> 13, j2 &= 8191;
    let K2 = I2 + S2 * u2 + k2 * d2 + x2 * l2 + A2 * c2 + M2 * a2;
    I2 = K2 >>> 13, K2 &= 8191, K2 += L2 * s2 + T2 * (5 * g2) + O2 * (5 * p2) + R2 * (5 * f2) + P2 * (5 * h2), I2 += K2 >>> 13, K2 &= 8191;
    let F2 = I2 + S2 * h2 + k2 * u2 + x2 * d2 + A2 * l2 + M2 * c2;
    I2 = F2 >>> 13, F2 &= 8191, F2 += L2 * a2 + T2 * s2 + O2 * (5 * g2) + R2 * (5 * p2) + P2 * (5 * f2), I2 += F2 >>> 13, F2 &= 8191;
    let U2 = I2 + S2 * f2 + k2 * h2 + x2 * u2 + A2 * d2 + M2 * l2;
    I2 = U2 >>> 13, U2 &= 8191, U2 += L2 * c2 + T2 * a2 + O2 * s2 + R2 * (5 * g2) + P2 * (5 * p2), I2 += U2 >>> 13, U2 &= 8191;
    let H2 = I2 + S2 * p2 + k2 * f2 + x2 * h2 + A2 * u2 + M2 * d2;
    I2 = H2 >>> 13, H2 &= 8191, H2 += L2 * l2 + T2 * c2 + O2 * a2 + R2 * s2 + P2 * (5 * g2), I2 += H2 >>> 13, H2 &= 8191;
    let z2 = I2 + S2 * g2 + k2 * p2 + x2 * f2 + A2 * h2 + M2 * u2;
    I2 = z2 >>> 13, z2 &= 8191, z2 += L2 * d2 + T2 * l2 + O2 * c2 + R2 * a2 + P2 * s2, I2 += z2 >>> 13, z2 &= 8191, I2 = (I2 << 2) + I2 | 0, I2 = I2 + N2 | 0, N2 = 8191 & I2, I2 >>>= 13, D2 += I2, i2[0] = N2, i2[1] = D2, i2[2] = B2, i2[3] = $2, i2[4] = j2, i2[5] = K2, i2[6] = F2, i2[7] = U2, i2[8] = H2, i2[9] = z2;
  }
  finalize() {
    const { h: e8, pad: t2 } = this, n2 = new Uint16Array(10);
    let r2 = e8[1] >>> 13;
    e8[1] &= 8191;
    for (let t3 = 2; t3 < 10; t3++) e8[t3] += r2, r2 = e8[t3] >>> 13, e8[t3] &= 8191;
    e8[0] += 5 * r2, r2 = e8[0] >>> 13, e8[0] &= 8191, e8[1] += r2, r2 = e8[1] >>> 13, e8[1] &= 8191, e8[2] += r2, n2[0] = e8[0] + 5, r2 = n2[0] >>> 13, n2[0] &= 8191;
    for (let t3 = 1; t3 < 10; t3++) n2[t3] = e8[t3] + r2, r2 = n2[t3] >>> 13, n2[t3] &= 8191;
    n2[9] -= 8192;
    let i2 = (1 ^ r2) - 1;
    for (let e9 = 0; e9 < 10; e9++) n2[e9] &= i2;
    i2 = ~i2;
    for (let t3 = 0; t3 < 10; t3++) e8[t3] = e8[t3] & i2 | n2[t3];
    e8[0] = 65535 & (e8[0] | e8[1] << 13), e8[1] = 65535 & (e8[1] >>> 3 | e8[2] << 10), e8[2] = 65535 & (e8[2] >>> 6 | e8[3] << 7), e8[3] = 65535 & (e8[3] >>> 9 | e8[4] << 4), e8[4] = 65535 & (e8[4] >>> 12 | e8[5] << 1 | e8[6] << 14), e8[5] = 65535 & (e8[6] >>> 2 | e8[7] << 11), e8[6] = 65535 & (e8[7] >>> 5 | e8[8] << 8), e8[7] = 65535 & (e8[8] >>> 8 | e8[9] << 5);
    let o2 = e8[0] + t2[0];
    e8[0] = 65535 & o2;
    for (let n3 = 1; n3 < 8; n3++) o2 = (e8[n3] + t2[n3] | 0) + (o2 >>> 16) | 0, e8[n3] = 65535 & o2;
    (0, la.clean)(n2);
  }
  update(e8) {
    (0, ca.exists)(this);
    const { buffer: t2, blockLen: n2 } = this, r2 = (e8 = (0, la.toBytes)(e8)).length;
    for (let i2 = 0; i2 < r2; ) {
      const o2 = Math.min(n2 - this.pos, r2 - i2);
      if (o2 !== n2) t2.set(e8.subarray(i2, i2 + o2), this.pos), this.pos += o2, i2 += o2, this.pos === n2 && (this.process(t2, 0, false), this.pos = 0);
      else for (; n2 <= r2 - i2; i2 += n2) this.process(e8, i2);
    }
    return this;
  }
  destroy() {
    (0, la.clean)(this.h, this.r, this.buffer, this.pad);
  }
  digestInto(e8) {
    (0, ca.exists)(this), (0, ca.output)(e8, this), this.finished = true;
    const { buffer: t2, h: n2 } = this;
    let { pos: r2 } = this;
    if (r2) {
      for (t2[r2++] = 1; r2 < 16; r2++) t2[r2] = 0;
      this.process(t2, 0, true);
    }
    this.finalize();
    let i2 = 0;
    for (let t3 = 0; t3 < 8; t3++) e8[i2++] = n2[t3] >>> 0, e8[i2++] = n2[t3] >>> 8;
    return e8;
  }
  digest() {
    const { buffer: e8, outputLen: t2 } = this;
    this.digestInto(e8);
    const n2 = e8.slice(0, t2);
    return this.destroy(), n2;
  }
};
function ha(e8) {
  const t2 = (t3, n3) => e8(n3).update((0, la.toBytes)(t3)).digest(), n2 = e8(new Uint8Array(32));
  return t2.outputLen = n2.outputLen, t2.blockLen = n2.blockLen, t2.create = (t3) => e8(t3), t2;
}
aa.poly1305 = ha((e8) => new ua(e8)), function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.xchacha20poly1305 = e8.chacha20poly1305 = e8._poly1305_aead = e8.chacha12 = e8.chacha8 = e8.xchacha20 = e8.chacha20 = e8.chacha20orig = void 0, e8.hchacha = s2;
  const t2 = Gs, n2 = jn, r2 = aa, i2 = $n;
  function o2(e9, n3, r3, i3, o3, s3 = 20) {
    let a3 = e9[0], c3 = e9[1], l3 = e9[2], d3 = e9[3], u2 = n3[0], h2 = n3[1], f2 = n3[2], p2 = n3[3], g2 = n3[4], m2 = n3[5], y2 = n3[6], v2 = n3[7], b2 = o3, w2 = r3[0], E2 = r3[1], C2 = r3[2], _2 = a3, S2 = c3, k2 = l3, x2 = d3, A2 = u2, M2 = h2, L2 = f2, T2 = p2, O2 = g2, R2 = m2, P2 = y2, I2 = v2, N2 = b2, D2 = w2, B2 = E2, $2 = C2;
    for (let e10 = 0; e10 < s3; e10 += 2) _2 = _2 + A2 | 0, N2 = (0, t2.rotl)(N2 ^ _2, 16), O2 = O2 + N2 | 0, A2 = (0, t2.rotl)(A2 ^ O2, 12), _2 = _2 + A2 | 0, N2 = (0, t2.rotl)(N2 ^ _2, 8), O2 = O2 + N2 | 0, A2 = (0, t2.rotl)(A2 ^ O2, 7), S2 = S2 + M2 | 0, D2 = (0, t2.rotl)(D2 ^ S2, 16), R2 = R2 + D2 | 0, M2 = (0, t2.rotl)(M2 ^ R2, 12), S2 = S2 + M2 | 0, D2 = (0, t2.rotl)(D2 ^ S2, 8), R2 = R2 + D2 | 0, M2 = (0, t2.rotl)(M2 ^ R2, 7), k2 = k2 + L2 | 0, B2 = (0, t2.rotl)(B2 ^ k2, 16), P2 = P2 + B2 | 0, L2 = (0, t2.rotl)(L2 ^ P2, 12), k2 = k2 + L2 | 0, B2 = (0, t2.rotl)(B2 ^ k2, 8), P2 = P2 + B2 | 0, L2 = (0, t2.rotl)(L2 ^ P2, 7), x2 = x2 + T2 | 0, $2 = (0, t2.rotl)($2 ^ x2, 16), I2 = I2 + $2 | 0, T2 = (0, t2.rotl)(T2 ^ I2, 12), x2 = x2 + T2 | 0, $2 = (0, t2.rotl)($2 ^ x2, 8), I2 = I2 + $2 | 0, T2 = (0, t2.rotl)(T2 ^ I2, 7), _2 = _2 + M2 | 0, $2 = (0, t2.rotl)($2 ^ _2, 16), P2 = P2 + $2 | 0, M2 = (0, t2.rotl)(M2 ^ P2, 12), _2 = _2 + M2 | 0, $2 = (0, t2.rotl)($2 ^ _2, 8), P2 = P2 + $2 | 0, M2 = (0, t2.rotl)(M2 ^ P2, 7), S2 = S2 + L2 | 0, N2 = (0, t2.rotl)(N2 ^ S2, 16), I2 = I2 + N2 | 0, L2 = (0, t2.rotl)(L2 ^ I2, 12), S2 = S2 + L2 | 0, N2 = (0, t2.rotl)(N2 ^ S2, 8), I2 = I2 + N2 | 0, L2 = (0, t2.rotl)(L2 ^ I2, 7), k2 = k2 + T2 | 0, D2 = (0, t2.rotl)(D2 ^ k2, 16), O2 = O2 + D2 | 0, T2 = (0, t2.rotl)(T2 ^ O2, 12), k2 = k2 + T2 | 0, D2 = (0, t2.rotl)(D2 ^ k2, 8), O2 = O2 + D2 | 0, T2 = (0, t2.rotl)(T2 ^ O2, 7), x2 = x2 + A2 | 0, B2 = (0, t2.rotl)(B2 ^ x2, 16), R2 = R2 + B2 | 0, A2 = (0, t2.rotl)(A2 ^ R2, 12), x2 = x2 + A2 | 0, B2 = (0, t2.rotl)(B2 ^ x2, 8), R2 = R2 + B2 | 0, A2 = (0, t2.rotl)(A2 ^ R2, 7);
    let j2 = 0;
    i3[j2++] = a3 + _2 | 0, i3[j2++] = c3 + S2 | 0, i3[j2++] = l3 + k2 | 0, i3[j2++] = d3 + x2 | 0, i3[j2++] = u2 + A2 | 0, i3[j2++] = h2 + M2 | 0, i3[j2++] = f2 + L2 | 0, i3[j2++] = p2 + T2 | 0, i3[j2++] = g2 + O2 | 0, i3[j2++] = m2 + R2 | 0, i3[j2++] = y2 + P2 | 0, i3[j2++] = v2 + I2 | 0, i3[j2++] = b2 + N2 | 0, i3[j2++] = w2 + D2 | 0, i3[j2++] = E2 + B2 | 0, i3[j2++] = C2 + $2 | 0;
  }
  function s2(e9, n3, r3, i3) {
    let o3 = e9[0], s3 = e9[1], a3 = e9[2], c3 = e9[3], l3 = n3[0], d3 = n3[1], u2 = n3[2], h2 = n3[3], f2 = n3[4], p2 = n3[5], g2 = n3[6], m2 = n3[7], y2 = r3[0], v2 = r3[1], b2 = r3[2], w2 = r3[3];
    for (let e10 = 0; e10 < 20; e10 += 2) o3 = o3 + l3 | 0, y2 = (0, t2.rotl)(y2 ^ o3, 16), f2 = f2 + y2 | 0, l3 = (0, t2.rotl)(l3 ^ f2, 12), o3 = o3 + l3 | 0, y2 = (0, t2.rotl)(y2 ^ o3, 8), f2 = f2 + y2 | 0, l3 = (0, t2.rotl)(l3 ^ f2, 7), s3 = s3 + d3 | 0, v2 = (0, t2.rotl)(v2 ^ s3, 16), p2 = p2 + v2 | 0, d3 = (0, t2.rotl)(d3 ^ p2, 12), s3 = s3 + d3 | 0, v2 = (0, t2.rotl)(v2 ^ s3, 8), p2 = p2 + v2 | 0, d3 = (0, t2.rotl)(d3 ^ p2, 7), a3 = a3 + u2 | 0, b2 = (0, t2.rotl)(b2 ^ a3, 16), g2 = g2 + b2 | 0, u2 = (0, t2.rotl)(u2 ^ g2, 12), a3 = a3 + u2 | 0, b2 = (0, t2.rotl)(b2 ^ a3, 8), g2 = g2 + b2 | 0, u2 = (0, t2.rotl)(u2 ^ g2, 7), c3 = c3 + h2 | 0, w2 = (0, t2.rotl)(w2 ^ c3, 16), m2 = m2 + w2 | 0, h2 = (0, t2.rotl)(h2 ^ m2, 12), c3 = c3 + h2 | 0, w2 = (0, t2.rotl)(w2 ^ c3, 8), m2 = m2 + w2 | 0, h2 = (0, t2.rotl)(h2 ^ m2, 7), o3 = o3 + d3 | 0, w2 = (0, t2.rotl)(w2 ^ o3, 16), g2 = g2 + w2 | 0, d3 = (0, t2.rotl)(d3 ^ g2, 12), o3 = o3 + d3 | 0, w2 = (0, t2.rotl)(w2 ^ o3, 8), g2 = g2 + w2 | 0, d3 = (0, t2.rotl)(d3 ^ g2, 7), s3 = s3 + u2 | 0, y2 = (0, t2.rotl)(y2 ^ s3, 16), m2 = m2 + y2 | 0, u2 = (0, t2.rotl)(u2 ^ m2, 12), s3 = s3 + u2 | 0, y2 = (0, t2.rotl)(y2 ^ s3, 8), m2 = m2 + y2 | 0, u2 = (0, t2.rotl)(u2 ^ m2, 7), a3 = a3 + h2 | 0, v2 = (0, t2.rotl)(v2 ^ a3, 16), f2 = f2 + v2 | 0, h2 = (0, t2.rotl)(h2 ^ f2, 12), a3 = a3 + h2 | 0, v2 = (0, t2.rotl)(v2 ^ a3, 8), f2 = f2 + v2 | 0, h2 = (0, t2.rotl)(h2 ^ f2, 7), c3 = c3 + l3 | 0, b2 = (0, t2.rotl)(b2 ^ c3, 16), p2 = p2 + b2 | 0, l3 = (0, t2.rotl)(l3 ^ p2, 12), c3 = c3 + l3 | 0, b2 = (0, t2.rotl)(b2 ^ c3, 8), p2 = p2 + b2 | 0, l3 = (0, t2.rotl)(l3 ^ p2, 7);
    let E2 = 0;
    i3[E2++] = o3, i3[E2++] = s3, i3[E2++] = a3, i3[E2++] = c3, i3[E2++] = y2, i3[E2++] = v2, i3[E2++] = b2, i3[E2++] = w2;
  }
  e8.chacha20orig = (0, t2.createCipher)(o2, { counterRight: false, counterLength: 8, allowShortKeys: true }), e8.chacha20 = (0, t2.createCipher)(o2, { counterRight: false, counterLength: 4, allowShortKeys: false }), e8.xchacha20 = (0, t2.createCipher)(o2, { counterRight: false, counterLength: 8, extendNonceFn: s2, allowShortKeys: false }), e8.chacha8 = (0, t2.createCipher)(o2, { counterRight: false, counterLength: 4, rounds: 8 }), e8.chacha12 = (0, t2.createCipher)(o2, { counterRight: false, counterLength: 4, rounds: 12 });
  const a2 = new Uint8Array(16), c2 = (e9, t3) => {
    e9.update(t3);
    const n3 = t3.length % 16;
    n3 && e9.update(a2.subarray(n3));
  }, l2 = new Uint8Array(32);
  function d2(e9, t3, n3, o3, s3) {
    const a3 = e9(t3, n3, l2), d3 = r2.poly1305.create(a3);
    s3 && c2(d3, s3), c2(d3, o3);
    const u2 = new Uint8Array(16), h2 = (0, i2.createView)(u2);
    (0, i2.setBigUint64)(h2, 0, BigInt(s3 ? s3.length : 0), true), (0, i2.setBigUint64)(h2, 8, BigInt(o3.length), true), d3.update(u2);
    const f2 = d3.digest();
    return (0, i2.clean)(a3, u2), f2;
  }
  e8._poly1305_aead = (e9) => (t3, r3, o3) => ((0, n2.bytes)(t3, 32), (0, n2.bytes)(r3), { encrypt(s3, a3) {
    const c3 = s3.length, l3 = c3 + 16;
    a3 ? (0, n2.bytes)(a3, l3) : a3 = new Uint8Array(l3), e9(t3, r3, s3, a3, 1);
    const u2 = d2(e9, t3, r3, a3.subarray(0, -16), o3);
    return a3.set(u2, c3), (0, i2.clean)(u2), a3;
  }, decrypt(s3, a3) {
    const c3 = s3.length, l3 = c3 - 16;
    if (c3 < 16) throw new Error("encrypted data must be at least 16 bytes");
    a3 ? (0, n2.bytes)(a3, l3) : a3 = new Uint8Array(l3);
    const u2 = s3.subarray(0, -16), h2 = s3.subarray(-16), f2 = d2(e9, t3, r3, u2, o3);
    if (!(0, i2.equalBytes)(h2, f2)) throw new Error("invalid tag");
    return e9(t3, r3, u2, a3, 1), (0, i2.clean)(f2), a3;
  } }), e8.chacha20poly1305 = (0, i2.wrapCipher)({ blockSize: 64, nonceLength: 12, tagLength: 16 }, (0, e8._poly1305_aead)(e8.chacha20)), e8.xchacha20poly1305 = (0, i2.wrapCipher)({ blockSize: 64, nonceLength: 24, tagLength: 16 }, (0, e8._poly1305_aead)(e8.xchacha20));
}(Ws), Object.defineProperty(Vs, "__esModule", { value: true }), Vs.xchacha20 = void 0;
var fa;
var pa;
var ga;
var ma = Ws;
Vs.xchacha20 = function(e8, t2, n2) {
  return (0, ma.xchacha20poly1305)(e8, t2, n2);
}, function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.aesDecrypt = e8.aesEncrypt = e8.symDecrypt = e8.symEncrypt = void 0;
  var t2 = $n, n2 = er, r2 = Go, i2 = Vs, o2 = Gn, s2 = Yn;
  function a2(e9, t3, n3, a3) {
    var c3 = (0, o2.symmetricAlgorithm)();
    if ("aes-256-gcm" === c3) return e9(r2.aes256gcm, t3, n3, (0, o2.symmetricNonceLength)(), s2.AEAD_TAG_LENGTH, a3);
    if ("xchacha20" === c3) return e9(i2.xchacha20, t3, n3, s2.XCHACHA20_NONCE_LENGTH, s2.AEAD_TAG_LENGTH, a3);
    if ("aes-256-cbc" === c3) return e9(r2.aes256cbc, t3, n3, 16, 0);
    throw new Error("Not implemented");
  }
  function c2(e9, r3, i3, o3, s3, a3) {
    var c3 = (0, n2.randomBytes)(o3), l3 = e9(r3, c3, a3).encrypt(i3);
    if (0 === s3) return (0, t2.concatBytes)(c3, l3);
    var d2 = l3.length - s3, u2 = l3.subarray(0, d2), h2 = l3.subarray(d2);
    return (0, t2.concatBytes)(c3, h2, u2);
  }
  function l2(e9, n3, r3, i3, o3, s3) {
    var a3 = r3.subarray(0, i3), c3 = e9(n3, Uint8Array.from(a3), s3), l3 = r3.subarray(i3);
    if (0 === o3) return c3.decrypt(l3);
    var d2 = l3.subarray(0, o3), u2 = l3.subarray(o3);
    return c3.decrypt((0, t2.concatBytes)(u2, d2));
  }
  e8.symEncrypt = function(e9, t3, n3) {
    return a2(c2, e9, t3, n3);
  }, e8.symDecrypt = function(e9, t3, n3) {
    return a2(l2, e9, t3, n3);
  }, e8.aesEncrypt = e8.symEncrypt, e8.aesDecrypt = e8.symDecrypt;
}(Wo), fa = Xn, pa = In && In.__createBinding || (Object.create ? function(e8, t2, n2, r2) {
  void 0 === r2 && (r2 = n2);
  var i2 = Object.getOwnPropertyDescriptor(t2, n2);
  i2 && !("get" in i2 ? !t2.__esModule : i2.writable || i2.configurable) || (i2 = { enumerable: true, get: function() {
    return t2[n2];
  } }), Object.defineProperty(e8, r2, i2);
} : function(e8, t2, n2, r2) {
  void 0 === r2 && (r2 = n2), e8[r2] = t2[n2];
}), ga = In && In.__exportStar || function(e8, t2) {
  for (var n2 in e8) "default" === n2 || Object.prototype.hasOwnProperty.call(t2, n2) || pa(t2, e8, n2);
}, Object.defineProperty(fa, "__esModule", { value: true }), ga(Qn, fa), ga($o, fa), ga(Bo, fa), ga(Wo, fa);
var ya = {};
Object.defineProperty(ya, "__esModule", { value: true }), ya.PublicKey = void 0;
var va = $n;
var ba = Xn;
var wa = function() {
  function e8(e9) {
    this.data = (0, ba.convertPublicKeyFormat)(e9, true);
  }
  return e8.fromHex = function(t2) {
    return new e8((0, ba.hexToPublicKey)(t2));
  }, Object.defineProperty(e8.prototype, "uncompressed", { get: function() {
    return Wt.from((0, ba.convertPublicKeyFormat)(this.data, false));
  }, enumerable: false, configurable: true }), Object.defineProperty(e8.prototype, "compressed", { get: function() {
    return Wt.from(this.data);
  }, enumerable: false, configurable: true }), e8.prototype.toHex = function(e9) {
    return void 0 === e9 && (e9 = true), (0, va.bytesToHex)(e9 ? this.data : this.uncompressed);
  }, e8.prototype.decapsulate = function(e9, t2) {
    void 0 === t2 && (t2 = false);
    var n2 = t2 ? this.data : this.uncompressed, r2 = e9.multiply(this, t2);
    return (0, ba.getSharedKey)(n2, r2);
  }, e8.prototype.equals = function(e9) {
    return (0, va.equalBytes)(this.data, e9.data);
  }, e8;
}();
ya.PublicKey = wa, Object.defineProperty(Jn, "__esModule", { value: true }), Jn.PrivateKey = void 0;
var Ea = $n;
var Ca = Xn;
var _a = ya;
var Sa = function() {
  function e8(e9) {
    if (void 0 === e9) this.data = (0, Ca.getValidSecret)();
    else {
      if (!(0, Ca.isValidPrivateKey)(e9)) throw new Error("Invalid private key");
      this.data = e9;
    }
    this.publicKey = new _a.PublicKey((0, Ca.getPublicKey)(this.data));
  }
  return e8.fromHex = function(t2) {
    return new e8((0, Ca.decodeHex)(t2));
  }, Object.defineProperty(e8.prototype, "secret", { get: function() {
    return Wt.from(this.data);
  }, enumerable: false, configurable: true }), e8.prototype.toHex = function() {
    return (0, Ea.bytesToHex)(this.data);
  }, e8.prototype.encapsulate = function(e9, t2) {
    void 0 === t2 && (t2 = false);
    var n2 = t2 ? this.publicKey.compressed : this.publicKey.uncompressed, r2 = this.multiply(e9, t2);
    return (0, Ca.getSharedKey)(n2, r2);
  }, e8.prototype.multiply = function(e9, t2) {
    return void 0 === t2 && (t2 = false), (0, Ca.getSharedPoint)(this.data, e9.compressed, t2);
  }, e8.prototype.equals = function(e9) {
    return (0, Ea.equalBytes)(this.data, e9.data);
  }, e8;
}();
Jn.PrivateKey = Sa, function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.PublicKey = e8.PrivateKey = void 0;
  var t2 = Jn;
  Object.defineProperty(e8, "PrivateKey", { enumerable: true, get: function() {
    return t2.PrivateKey;
  } });
  var n2 = ya;
  Object.defineProperty(e8, "PublicKey", { enumerable: true, get: function() {
    return n2.PublicKey;
  } });
}(Zn), function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.utils = e8.PublicKey = e8.PrivateKey = e8.ECIES_CONFIG = void 0, e8.encrypt = function(e9, o3) {
    var s3 = new r2.PrivateKey(), a2 = e9 instanceof Uint8Array ? new r2.PublicKey(e9) : r2.PublicKey.fromHex(e9), c2 = s3.encapsulate(a2, (0, n2.isHkdfKeyCompressed)()), l2 = (0, n2.isEphemeralKeyCompressed)() ? s3.publicKey.compressed : s3.publicKey.uncompressed, d2 = (0, i2.symEncrypt)(c2, o3);
    return Wt.from((0, t2.concatBytes)(l2, d2));
  }, e8.decrypt = function(e9, t3) {
    var o3 = e9 instanceof Uint8Array ? new r2.PrivateKey(e9) : r2.PrivateKey.fromHex(e9), s3 = (0, n2.ephemeralKeySize)(), a2 = new r2.PublicKey(t3.subarray(0, s3)), c2 = t3.subarray(s3), l2 = a2.decapsulate(o3, (0, n2.isHkdfKeyCompressed)());
    return Wt.from((0, i2.symDecrypt)(l2, c2));
  };
  var t2 = $n, n2 = Gn, r2 = Zn, i2 = Xn, o2 = Gn;
  Object.defineProperty(e8, "ECIES_CONFIG", { enumerable: true, get: function() {
    return o2.ECIES_CONFIG;
  } });
  var s2 = Zn;
  Object.defineProperty(e8, "PrivateKey", { enumerable: true, get: function() {
    return s2.PrivateKey;
  } }), Object.defineProperty(e8, "PublicKey", { enumerable: true, get: function() {
    return s2.PublicKey;
  } }), e8.utils = { aesEncrypt: i2.aesEncrypt, aesDecrypt: i2.aesDecrypt, symEncrypt: i2.symEncrypt, symDecrypt: i2.symDecrypt, decodeHex: i2.decodeHex, getValidSecret: i2.getValidSecret, remove0x: i2.remove0x };
}(Bn);
var ka = U("KeyExchange:Layer");
var xa = U("SocketService:Layer");
var Aa = U("Ecies:Layer");
var Ma = U("RemoteCommunication:Layer");
ka.color = "##95c44e", xa.color = "#f638d7", Aa.color = "#465b9c", Ma.color = "#47a2be";
var La = { KeyExchange: ka, SocketService: xa, Ecies: Aa, RemoteCommunication: Ma };
var Ta;
var Oa = [];
var Ra = [];
var Pa = (e8, t2) => Ot(void 0, void 0, void 0, function* () {
  Ta = t2, Ra.push(e8), function(e9) {
    return Ot(this, void 0, void 0, function* () {
      if (!Ta || !e9) return;
      !function() {
        const e10 = Ra;
        Ra = Oa, Oa = e10;
      }();
      const t3 = Ta.endsWith("/") ? `${Ta}evt` : `${Ta}/evt`, n2 = Object.assign({}, e9);
      if (delete n2.params, e9.params) for (const [t4, r3] of Object.entries(e9.params)) n2[t4] = r3;
      const r2 = JSON.stringify(n2);
      La.RemoteCommunication(`[sendBufferedEvents] Sending ${Oa.length} analytics events to ${t3}`);
      try {
        const e10 = yield u(t3, { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: r2 }), n3 = yield e10.text();
        La.RemoteCommunication(`[sendBufferedEvents] Response: ${n3}`), Oa.length = 0;
      } catch (t4) {
      }
    });
  }(e8).catch(() => {
  });
});
var Ia = class {
  constructor(e8) {
    this.enabled = true, (null == e8 ? void 0 : e8.debug) && U.enable("Ecies:Layer"), this.ecies = (null == e8 ? void 0 : e8.privateKey) ? Bn.PrivateKey.fromHex(e8.privateKey) : new Bn.PrivateKey(), La.Ecies("[ECIES constructor()] initialized secret: ", this.ecies.toHex()), La.Ecies("[ECIES constructor()] initialized public: ", this.ecies.publicKey.toHex()), La.Ecies("[ECIES constructor()] init with", this);
  }
  generateECIES() {
    this.ecies = new Bn.PrivateKey();
  }
  getPublicKey() {
    return this.ecies.publicKey.toHex();
  }
  encrypt(e8, t2) {
    let n2 = e8;
    if (this.enabled) try {
      La.Ecies("[ECIES: encrypt()] using otherPublicKey", t2);
      const r2 = Wt.from(e8), i2 = Bn.encrypt(t2, r2);
      n2 = Wt.from(i2).toString("base64");
    } catch (n3) {
      throw La.Ecies("[ECIES: encrypt()] error encrypt:", n3), La.Ecies("[ECIES: encrypt()] private: ", this.ecies.toHex()), La.Ecies("[ECIES: encrypt()] data: ", e8), La.Ecies("[ECIES: encrypt()] otherkey: ", t2), n3;
    }
    return n2;
  }
  decrypt(e8) {
    let t2 = e8;
    if (this.enabled) try {
      La.Ecies("[ECIES: decrypt()] using privateKey", this.ecies.toHex());
      const n2 = Wt.from(e8.toString(), "base64");
      t2 = Bn.decrypt(this.ecies.toHex(), n2).toString();
    } catch (t3) {
      throw La.Ecies("[ECIES: decrypt()] error decrypt", t3), La.Ecies("[ECIES: decrypt()] private: ", this.ecies.toHex()), La.Ecies("[ECIES: decrypt()] encryptedData: ", e8), t3;
    }
    return t2;
  }
  getKeyInfo() {
    return { private: this.ecies.toHex(), public: this.ecies.publicKey.toHex() };
  }
  toString() {
    La.Ecies("[ECIES: toString()]", this.getKeyInfo());
  }
};
var Na = { name: "@metamask/sdk-communication-layer", version: "0.31.0", description: "", homepage: "https://github.com/MetaMask/metamask-sdk#readme", bugs: { url: "https://github.com/MetaMask/metamask-sdk/issues" }, repository: { type: "git", url: "https://github.com/MetaMask/metamask-sdk.git", directory: "packages/sdk-communication-layer" }, main: "dist/node/cjs/metamask-sdk-communication-layer.js", unpkg: "dist/browser/umd/metamask-sdk-communication-layer.js", module: "dist/node/es/metamask-sdk-communication-layer.js", browser: "dist/browser/es/metamask-sdk-communication-layer.js", "react-native": "dist/react-native/es/metamask-sdk-communication-layer.js", types: "dist/types/src/index.d.ts", files: ["/dist"], scripts: { "build:types": "tsc --project tsconfig.build.json --emitDeclarationOnly --outDir dist/types", "build:clean": "yarn clean && yarn build", build: "yarn build:types && rollup -c --bundleConfigAsCjs", "build:dev": "yarn build:types && NODE_ENV=dev rollup -c --bundleConfigAsCjs", "build:post-tsc": "echo 'N/A'", "build:pre-tsc": "echo 'N/A'", size: "size-limit", clean: "rimraf ./dist", lint: "yarn lint:eslint && yarn lint:misc --check", "lint:changelog": "../../scripts/validate-changelog.sh @metamask/sdk-communication-layer", "lint:eslint": "eslint . --cache --ext js,ts", "lint:fix": "yarn lint:eslint --fix && yarn lint:misc --write", "lint:misc": "prettier '**/*.json' '**/*.md' '!CHANGELOG.md' --ignore-path ../../.gitignore", "publish:preview": "yarn npm publish --tag preview", prepack: "../../scripts/prepack.sh", reset: "yarn clean && rimraf ./node_modules/", test: 'jest --testPathIgnorePatterns "/e2e/"', "test:e2e": 'jest --testPathPattern "/e2e/"', "test:coverage": "jest --coverage", "test:ci": 'jest --coverage --passWithNoTests --setupFilesAfterEnv ./jest-preload.js --testPathIgnorePatterns "/e2e/"', "test:dev": "jest", watch: "rollup -c --bundleConfigAsCjs -w" }, dependencies: { bufferutil: "^4.0.8", "date-fns": "^2.29.3", debug: "^4.3.4", "utf-8-validate": "^5.0.2", uuid: "^8.3.2" }, devDependencies: { "@jest/globals": "^29.3.1", "@lavamoat/allow-scripts": "^2.3.1", "@metamask/auto-changelog": "3.1.0", "@metamask/eslint-config": "^6.0.0", "@metamask/eslint-config-nodejs": "^6.0.0", "@metamask/eslint-config-typescript": "^6.0.0", "@rollup/plugin-commonjs": "^25.0.0", "@rollup/plugin-json": "^6.0.0", "@rollup/plugin-node-resolve": "^15.0.2", "@rollup/plugin-replace": "^6.0.1", "@rollup/plugin-terser": "^0.4.4", "@size-limit/preset-big-lib": "^11.0.2", "@types/jest": "^29.2.4", "@types/node": "^20.1.3", "@types/uuid": "^9.0.0", "@typescript-eslint/eslint-plugin": "^4.26.0", "@typescript-eslint/parser": "^4.26.0", "cross-fetch": "^4.0.0", eciesjs: "^0.4.11", eslint: "^7.30.0", "eslint-config-prettier": "^8.3.0", "eslint-plugin-import": "^2.23.4", "eslint-plugin-jest": "^24.4.0", "eslint-plugin-jsdoc": "^36.1.0", "eslint-plugin-node": "^11.1.0", "eslint-plugin-prettier": "^3.4.0", eventemitter2: "^6.4.9", jest: "^29.3.1", prettier: "^2.3.0", rimraf: "^3.0.2", rollup: "^4.26.0", "rollup-plugin-jscc": "^2.0.0", "rollup-plugin-natives": "^0.7.5", "rollup-plugin-node-builtins": "^2.1.2", "rollup-plugin-node-globals": "^1.4.0", "rollup-plugin-peer-deps-external": "^2.2.4", "rollup-plugin-polyfill-node": "^0.13.0", "rollup-plugin-sizes": "^1.0.6", "rollup-plugin-typescript2": "^0.31.2", "rollup-plugin-visualizer": "^5.12.0", "size-limit": "^11.1.6", "socket.io-client": "^4.5.1", "stream-browserify": "^3.0.0", "ts-jest": "^29.0.3", "ts-node": "^10.9.1", typescript: "^5.6.3" }, peerDependencies: { "cross-fetch": "^4.0.0", eciesjs: "*", eventemitter2: "^6.4.9", "readable-stream": "^3.6.2", "socket.io-client": "^4.5.1" }, publishConfig: { access: "public", registry: "https://registry.npmjs.org/" }, lavamoat: { allowScripts: { "@lavamoat/preinstall-always-fail": false, canvas: true, "eciesjs>secp256k1": false, "socket.io-client>engine.io-client>ws>bufferutil": false, "socket.io-client>engine.io-client>ws>utf-8-validate": false, bufferutil: false, "utf-8-validate": false } } };
var Da = "https://metamask-sdk.api.cx.metamask.io/";
var Ba = ["websocket"];
var $a = 6048e5;
var ja = 3e3;
var Ka = { METAMASK_GETPROVIDERSTATE: "metamask_getProviderState", ETH_REQUESTACCOUNTS: "eth_requestAccounts" };
function Fa(e8) {
  const { context: t2 } = e8;
  La.RemoteCommunication(`[RemoteCommunication: clean()] context=${t2}`), e8.channelConfig = void 0, e8.ready = false, e8.originatorConnectStarted = false;
}
var Ua;
var Ha;
var za;
var qa;
var Va;
var Wa;
var Ga;
(Ga = Ua || (Ua = {})).DISCONNECTED = "disconnected", Ga.WAITING = "waiting", Ga.TIMEOUT = "timeout", Ga.LINKED = "linked", Ga.PAUSED = "paused", Ga.TERMINATED = "terminated", function(e8) {
  e8.KEY_INFO = "key_info", e8.SERVICE_STATUS = "service_status", e8.PROVIDER_UPDATE = "provider_update", e8.RPC_UPDATE = "rpc_update", e8.KEYS_EXCHANGED = "keys_exchanged", e8.JOIN_CHANNEL = "join_channel", e8.PUBLIC_KEY = "public_key", e8.CHANNEL_CREATED = "channel_created", e8.CLIENTS_CONNECTED = "clients_connected", e8.CLIENTS_DISCONNECTED = "clients_disconnected", e8.CLIENTS_WAITING = "clients_waiting", e8.CLIENTS_READY = "clients_ready", e8.REJECTED = "rejected", e8.WALLET_INIT = "wallet_init", e8.CHANNEL_PERSISTENCE = "channel_persistence", e8.CONFIG = "config", e8.MESSAGE_ACK = "ack", e8.SOCKET_DISCONNECTED = "socket_disconnected", e8.SOCKET_RECONNECT = "socket_reconnect", e8.OTP = "otp", e8.SDK_RPC_CALL = "sdk_rpc_call", e8.AUTHORIZED = "authorized", e8.CONNECTION_STATUS = "connection_status", e8.MESSAGE = "message", e8.TERMINATE = "terminate";
}(Ha || (Ha = {})), (za || (za = {})).KEY_EXCHANGE = "key_exchange", function(e8) {
  e8.KEY_HANDSHAKE_START = "key_handshake_start", e8.KEY_HANDSHAKE_CHECK = "key_handshake_check", e8.KEY_HANDSHAKE_SYN = "key_handshake_SYN", e8.KEY_HANDSHAKE_SYNACK = "key_handshake_SYNACK", e8.KEY_HANDSHAKE_ACK = "key_handshake_ACK", e8.KEY_HANDSHAKE_WALLET = "key_handshake_wallet", e8.KEY_HANDSHAKE_NONE = "none";
}(qa || (qa = {}));
var Ya = class extends H.exports.EventEmitter2 {
  constructor({ communicationLayer: e8, otherPublicKey: t2, context: n2, ecies: r2, logging: i2 }) {
    super(), this.keysExchanged = false, this.step = qa.KEY_HANDSHAKE_NONE, this.debug = false, this.context = n2, this.communicationLayer = e8, (null == r2 ? void 0 : r2.privateKey) && t2 && (La.KeyExchange(`[KeyExchange: constructor()] otherPubKey=${t2} set keysExchanged to true!`, r2), this.keysExchanged = true), this.myECIES = new Ia(Object.assign(Object.assign({}, r2), { debug: null == i2 ? void 0 : i2.eciesLayer })), this.communicationLayer.state.eciesInstance = this.myECIES, this.myPublicKey = this.myECIES.getPublicKey(), this.debug = true === (null == i2 ? void 0 : i2.keyExchangeLayer), t2 && this.setOtherPublicKey(t2), this.communicationLayer.on(za.KEY_EXCHANGE, this.onKeyExchangeMessage.bind(this));
  }
  onKeyExchangeMessage(e8) {
    const { relayPersistence: t2 } = this.communicationLayer.remote.state;
    if (La.KeyExchange(`[KeyExchange: onKeyExchangeMessage()] context=${this.context} keysExchanged=${this.keysExchanged} relayPersistence=${t2}`, e8), t2) return void La.KeyExchange("[KeyExchange: onKeyExchangeMessage()] Ignoring key exchange message because relay persistence is activated");
    const { message: n2 } = e8;
    this.keysExchanged && La.KeyExchange(`[KeyExchange: onKeyExchangeMessage()] context=${this.context} received handshake while already exchanged. step=${this.step} otherPubKey=${this.otherPublicKey}`), this.emit(Ha.KEY_INFO, n2.type), n2.type === qa.KEY_HANDSHAKE_SYN ? (this.checkStep([qa.KEY_HANDSHAKE_NONE, qa.KEY_HANDSHAKE_ACK]), La.KeyExchange("[KeyExchange: onKeyExchangeMessage()] KEY_HANDSHAKE_SYN", n2), n2.pubkey && this.setOtherPublicKey(n2.pubkey), this.communicationLayer.sendMessage({ type: qa.KEY_HANDSHAKE_SYNACK, pubkey: this.myPublicKey }).catch((e9) => {
      La.KeyExchange("[KeyExchange: onKeyExchangeMessage()] Error sending KEY_HANDSHAKE_SYNACK", e9);
    }), this.setStep(qa.KEY_HANDSHAKE_ACK)) : n2.type === qa.KEY_HANDSHAKE_SYNACK ? (this.checkStep([qa.KEY_HANDSHAKE_SYNACK, qa.KEY_HANDSHAKE_ACK, qa.KEY_HANDSHAKE_NONE]), La.KeyExchange("[KeyExchange: onKeyExchangeMessage()] KEY_HANDSHAKE_SYNACK"), n2.pubkey && this.setOtherPublicKey(n2.pubkey), this.communicationLayer.sendMessage({ type: qa.KEY_HANDSHAKE_ACK }).catch((e9) => {
      La.KeyExchange("[KeyExchange: onKeyExchangeMessage()] Error sending KEY_HANDSHAKE_ACK", e9);
    }), this.keysExchanged = true, this.setStep(qa.KEY_HANDSHAKE_ACK), this.emit(Ha.KEYS_EXCHANGED)) : n2.type === qa.KEY_HANDSHAKE_ACK && (La.KeyExchange("[KeyExchange: onKeyExchangeMessage()] KEY_HANDSHAKE_ACK set keysExchanged to true!"), this.checkStep([qa.KEY_HANDSHAKE_ACK, qa.KEY_HANDSHAKE_NONE]), this.keysExchanged = true, this.setStep(qa.KEY_HANDSHAKE_ACK), this.emit(Ha.KEYS_EXCHANGED));
  }
  resetKeys(e8) {
    this.clean(), this.myECIES = new Ia(e8);
  }
  clean() {
    La.KeyExchange(`[KeyExchange: clean()] context=${this.context} reset handshake state`), this.setStep(qa.KEY_HANDSHAKE_NONE), this.emit(Ha.KEY_INFO, this.step), this.keysExchanged = false;
  }
  start({ isOriginator: e8, force: t2 }) {
    const { relayPersistence: n2, protocolVersion: r2 } = this.communicationLayer.remote.state, i2 = r2 >= 2;
    n2 ? La.KeyExchange("[KeyExchange: start()] Ignoring key exchange message because relay persistence is activated") : (La.KeyExchange(`[KeyExchange: start()] context=${this.context} protocolVersion=${r2} isOriginator=${e8} step=${this.step} force=${t2} relayPersistence=${n2} keysExchanged=${this.keysExchanged}`), e8 ? !(this.keysExchanged || this.step !== qa.KEY_HANDSHAKE_NONE && this.step !== qa.KEY_HANDSHAKE_SYNACK) || t2 ? (La.KeyExchange(`[KeyExchange: start()] context=${this.context} -- start key exchange (force=${t2}) -- step=${this.step}`, this.step), this.clean(), this.setStep(qa.KEY_HANDSHAKE_SYNACK), this.communicationLayer.sendMessage({ type: qa.KEY_HANDSHAKE_SYN, pubkey: this.myPublicKey, v: 2 }).catch((e9) => {
      La.KeyExchange("[KeyExchange: start()] Error sending KEY_HANDSHAKE_SYN", e9);
    })) : La.KeyExchange(`[KeyExchange: start()] context=${this.context} -- key exchange already ${this.keysExchanged ? "done" : "in progress"} -- aborted.`, this.step) : this.keysExchanged && true !== t2 ? La.KeyExchange("[KeyExchange: start()] don't send KEY_HANDSHAKE_START -- exchange already done.") : i2 ? this.communicationLayer.sendMessage({ type: qa.KEY_HANDSHAKE_SYNACK, pubkey: this.myPublicKey, v: 2 }).catch((e9) => {
      La.KeyExchange("[KeyExchange: start()] Error sending KEY_HANDSHAKE_SYNACK", e9);
    }) : (this.communicationLayer.sendMessage({ type: qa.KEY_HANDSHAKE_START }).catch((e9) => {
      La.KeyExchange("[KeyExchange: start()] Error sending KEY_HANDSHAKE_START", e9);
    }), this.clean()));
  }
  setStep(e8) {
    this.step = e8, this.emit(Ha.KEY_INFO, e8);
  }
  checkStep(e8) {
    e8.length > 0 && e8.indexOf(this.step.toString());
  }
  setRelayPersistence({ localKey: e8, otherKey: t2 }) {
    this.otherPublicKey = t2, this.myECIES = new Ia({ privateKey: e8, debug: this.debug }), this.keysExchanged = true;
  }
  setKeysExchanged(e8) {
    this.keysExchanged = e8;
  }
  areKeysExchanged() {
    return this.keysExchanged;
  }
  getMyPublicKey() {
    return this.myPublicKey;
  }
  getOtherPublicKey() {
    return this.otherPublicKey;
  }
  setOtherPublicKey(e8) {
    La.KeyExchange("[KeyExchange: setOtherPubKey()]", e8), this.otherPublicKey = e8;
  }
  encryptMessage(e8) {
    if (!this.otherPublicKey) throw new Error("encryptMessage: Keys not exchanged - missing otherPubKey");
    return this.myECIES.encrypt(e8, this.otherPublicKey);
  }
  decryptMessage(e8) {
    if (!this.otherPublicKey) throw new Error("decryptMessage: Keys not exchanged - missing otherPubKey");
    return this.myECIES.decrypt(e8);
  }
  getKeyInfo() {
    return { ecies: Object.assign(Object.assign({}, this.myECIES.getKeyInfo()), { otherPubKey: this.otherPublicKey }), step: this.step, keysExchanged: this.areKeysExchanged() };
  }
  toString() {
    const e8 = { keyInfo: this.getKeyInfo(), keysExchanged: this.keysExchanged, step: this.step };
    return JSON.stringify(e8);
  }
};
!function(e8) {
  e8.TERMINATE = "terminate", e8.ANSWER = "answer", e8.OFFER = "offer", e8.CANDIDATE = "candidate", e8.JSONRPC = "jsonrpc", e8.WALLET_INFO = "wallet_info", e8.WALLET_INIT = "wallet_init", e8.ORIGINATOR_INFO = "originator_info", e8.PAUSE = "pause", e8.OTP = "otp", e8.AUTHORIZED = "authorized", e8.PING = "ping", e8.READY = "ready";
}(Va || (Va = {})), function(e8) {
  e8.REQUEST = "sdk_connect_request_started", e8.REQUEST_MOBILE = "sdk_connect_request_started_mobile", e8.RECONNECT = "sdk_reconnect_request_started", e8.CONNECTED = "sdk_connection_established", e8.CONNECTED_MOBILE = "sdk_connection_established_mobile", e8.AUTHORIZED = "sdk_connection_authorized", e8.REJECTED = "sdk_connection_rejected", e8.TERMINATED = "sdk_connection_terminated", e8.DISCONNECTED = "sdk_disconnected", e8.SDK_USE_EXTENSION = "sdk_use_extension", e8.SDK_RPC_REQUEST = "sdk_rpc_request", e8.SDK_RPC_REQUEST_RECEIVED = "sdk_rpc_request_received", e8.SDK_RPC_REQUEST_DONE = "sdk_rpc_request_done", e8.SDK_EXTENSION_UTILIZED = "sdk_extension_utilized", e8.SDK_USE_INAPP_BROWSER = "sdk_use_inapp_browser";
}(Wa || (Wa = {}));
var Za = (e8, t2, n2) => Ot(void 0, void 0, void 0, function* () {
  var r2, i2, o2, s2, a2, c2;
  const { remote: l2, state: d2 } = e8, { channelId: u2, isOriginator: h2 } = d2;
  if ("error_terminated" === t2) return La.SocketService(`handleJoinChannelResults: Channel ${u2} terminated`), void e8.emit(Ha.TERMINATE);
  if (!n2) return void La.SocketService(`handleJoinChannelResults: No result for channel ${u2}`);
  const { persistence: f2, walletKey: p2, rejected: g2 } = n2;
  if (La.SocketService(`handleJoinChannelResults: Channel ${u2} persistence=${f2} walletKey=${p2} rejected=${g2}`), g2) return La.SocketService(`handleJoinChannelResults: Channel ${u2} rejected`), yield e8.remote.disconnect({ terminate: true }), e8.remote.emit(Ha.REJECTED, { channelId: u2 }), void e8.remote.emitServiceStatusEvent();
  if (p2 && !(null === (r2 = l2.state.channelConfig) || void 0 === r2 ? void 0 : r2.otherKey)) {
    e8.getKeyExchange().setOtherPublicKey(p2), null === (i2 = e8.state.keyExchange) || void 0 === i2 || i2.setKeysExchanged(true), l2.state.ready = true, l2.state.authorized = true, l2.emit(Ha.AUTHORIZED);
    const { communicationLayer: t3, storageManager: n3 } = l2.state, r3 = Object.assign(Object.assign({}, l2.state.channelConfig), { channelId: null !== (o2 = l2.state.channelId) && void 0 !== o2 ? o2 : "", validUntil: Date.now() + $a, localKey: null == t3 ? void 0 : t3.getKeyInfo().ecies.private, otherKey: p2 });
    e8.sendMessage({ type: qa.KEY_HANDSHAKE_ACK }).catch((e9) => {
    }), null === (s2 = e8.state.socket) || void 0 === s2 || s2.emit(Va.PING, { id: u2, clientType: h2 ? "dapp" : "wallet", context: "on_channel_reconnect", message: "" }), yield null == n3 ? void 0 : n3.persistChannelConfig(r3), l2.emitServiceStatusEvent(), l2.setConnectionStatus(Ua.LINKED);
  }
  f2 && (e8.emit(Ha.CHANNEL_PERSISTENCE), null === (a2 = e8.state.keyExchange) || void 0 === a2 || a2.setKeysExchanged(true), l2.state.ready = true, l2.state.authorized = true, l2.emit(Ha.AUTHORIZED), Pa(Object.assign(Object.assign({ id: null != u2 ? u2 : "", event: h2 ? Wa.CONNECTED : Wa.CONNECTED_MOBILE }, e8.remote.state.originatorInfo), { sdkVersion: e8.remote.state.sdkVersion, commLayer: e8.state.communicationLayerPreference, commLayerVersion: Na.version, walletVersion: null === (c2 = e8.remote.state.walletInfo) || void 0 === c2 ? void 0 : c2.version }), d2.communicationServerUrl).catch((e9) => {
  }));
});
var Ja = (e8) => new Promise((t2) => {
  setTimeout(t2, e8);
});
var Xa = (e8, t2, ...n2) => Ot(void 0, [e8, t2, ...n2], void 0, function* (e9, t3, n3 = 200) {
  let r2;
  const i2 = Date.now();
  let o2 = false;
  for (; !o2; ) {
    if (o2 = Date.now() - i2 > 3e5, r2 = t3[e9], void 0 !== r2.elapsedTime) return r2;
    yield Ja(n3);
  }
  throw new Error(`RPC ${e9} timed out`);
});
var Qa = (e8) => Ot(void 0, void 0, void 0, function* () {
  const { state: t2 } = e8, { socket: n2, channelId: r2, context: i2, isOriginator: o2, isReconnecting: s2 } = t2;
  if (s2) return La.SocketService("[SocketService: reconnectSocket()] Reconnection already in progress, skipping", e8), false;
  if (!n2) return La.SocketService("[SocketService: reconnectSocket()] socket is not defined", e8), false;
  if (!r2) return false;
  const { connected: a2 } = n2;
  t2.isReconnecting = true, t2.reconnectionAttempts = 0, La.SocketService(`[SocketService: reconnectSocket()] connected=${a2} trying to reconnect after socketio disconnection`, e8);
  try {
    for (; 3 > t2.reconnectionAttempts; ) {
      if (La.SocketService(`[SocketService: reconnectSocket()] Attempt ${t2.reconnectionAttempts + 1} of 3`, e8), yield Ja(200), n2.connected) return La.SocketService("Socket already connected --- ping to retrieve messages"), n2.emit(Va.PING, { id: r2, clientType: o2 ? "dapp" : "wallet", context: "on_channel_config", message: "" }), true;
      t2.resumed = true, n2.connect(), e8.emit(Ha.SOCKET_RECONNECT);
      try {
        if (yield new Promise((t3, s3) => {
          n2.emit(Ha.JOIN_CHANNEL, { channelId: r2, context: `${i2}connect_again`, clientType: o2 ? "dapp" : "wallet" }, (n3, r3) => Ot(void 0, void 0, void 0, function* () {
            try {
              yield Za(e8, n3, r3), t3();
            } catch (e9) {
              s3(e9);
            }
          }));
        }), yield Ja(100), n2.connected) return La.SocketService(`Reconnection successful on attempt ${t2.reconnectionAttempts + 1}`), true;
      } catch (e9) {
        La.SocketService(`Error during reconnection attempt ${t2.reconnectionAttempts + 1}:`, e9);
      }
      t2.reconnectionAttempts += 1, 3 > t2.reconnectionAttempts && (yield Ja(200));
    }
    return La.SocketService("Failed to reconnect after 3 attempts"), false;
  } finally {
    t2.isReconnecting = false, t2.reconnectionAttempts = 0;
  }
});
function ec(e8, t2) {
  return Ot(this, void 0, void 0, function* () {
    var n2;
    const r2 = null === (n2 = e8.state.keyExchange) || void 0 === n2 ? void 0 : n2.encryptMessage(JSON.stringify(t2)), i2 = { id: e8.state.channelId, context: e8.state.context, clientType: e8.state.isOriginator ? "dapp" : "wallet", message: r2, plaintext: e8.state.hasPlaintext ? JSON.stringify(t2) : void 0 };
    return La.SocketService(`[SocketService: encryptAndSendMessage()] context=${e8.state.context}`, i2), t2.type === Va.TERMINATE && (e8.state.manualDisconnect = true), new Promise((t3, n3) => {
      var r3;
      null === (r3 = e8.state.socket) || void 0 === r3 || r3.emit(Ha.MESSAGE, i2, (e9, r4) => {
        var i3;
        e9 && (La.SocketService(`[SocketService: encryptAndSendMessage()] error=${e9}`), n3(e9)), La.SocketService("[encryptAndSendMessage] response", r4), t3(null !== (i3 = null == r4 ? void 0 : r4.success) && void 0 !== i3 && i3);
      });
    });
  });
}
var tc;
!function(e8) {
  e8.RPC_CHECK = "rpcCheck", e8.SKIPPED_RPC = "skippedRpc";
}(tc || (tc = {}));
var nc = ["eth_sendTransaction", "eth_signTypedData", "eth_signTransaction", "personal_sign", "wallet_requestPermissions", "wallet_switchEthereumChain", "eth_signTypedData_v3", "eth_signTypedData_v4", "metamask_connectSign", "metamask_connectWith", "metamask_batch"].map((e8) => e8.toLowerCase());
var rc = [{ event: Ha.CLIENTS_CONNECTED, handler: function(e8, t2) {
  return (n2) => Ot(this, void 0, void 0, function* () {
    var n3, r2, i2, o2, s2, a2, c2, l2, d2, u2, h2;
    const f2 = null !== (r2 = null === (n3 = e8.remote.state.channelConfig) || void 0 === n3 ? void 0 : n3.relayPersistence) && void 0 !== r2 && r2;
    if (La.SocketService(`[SocketService: handleClientsConnected()] context=${e8.state.context} on 'clients_connected-${t2}' relayPersistence=${f2} resumed=${e8.state.resumed}  clientsPaused=${e8.state.clientsPaused} keysExchanged=${null === (i2 = e8.state.keyExchange) || void 0 === i2 ? void 0 : i2.areKeysExchanged()} isOriginator=${e8.state.isOriginator}`), e8.emit(Ha.CLIENTS_CONNECTED, { isOriginator: e8.state.isOriginator, keysExchanged: null === (o2 = e8.state.keyExchange) || void 0 === o2 ? void 0 : o2.areKeysExchanged(), context: e8.state.context }), e8.state.resumed) e8.state.isOriginator || (La.SocketService(`[SocketService: handleClientsConnected()] context=${e8.state.context} 'clients_connected' / keysExchanged=${null === (s2 = e8.state.keyExchange) || void 0 === s2 ? void 0 : s2.areKeysExchanged()} -- backward compatibility`), null === (a2 = e8.state.keyExchange) || void 0 === a2 || a2.start({ isOriginator: null !== (c2 = e8.state.isOriginator) && void 0 !== c2 && c2 })), e8.state.resumed = false;
    else if (e8.state.clientsPaused) La.SocketService("[SocketService: handleClientsConnected()] 'clients_connected' skip sending originatorInfo on pause");
    else if (!e8.state.isOriginator) {
      const t3 = !f2;
      La.SocketService(`[SocketService: handleClientsConnected()] context=${e8.state.context} on 'clients_connected' / keysExchanged=${null === (l2 = e8.state.keyExchange) || void 0 === l2 ? void 0 : l2.areKeysExchanged()} -- force=${t3} -- backward compatibility`), La.SocketService(`[SocketService: handleClientsConnected()] context=${e8.state.context} on 'clients_connected' / keysExchanged=${null === (d2 = e8.state.keyExchange) || void 0 === d2 ? void 0 : d2.areKeysExchanged()} -- force=${t3} -- backward compatibility`), null === (u2 = e8.state.keyExchange) || void 0 === u2 || u2.start({ isOriginator: null !== (h2 = e8.state.isOriginator) && void 0 !== h2 && h2, force: t3 });
    }
    e8.state.clientsConnected = true, e8.state.clientsPaused = false;
  });
} }, { event: Ha.CHANNEL_CREATED, handler: function(e8, t2) {
  return (n2) => {
    La.SocketService(`[SocketService: handleChannelCreated()] context=${e8.state.context} on 'channel_created-${t2}'`, n2), e8.emit(Ha.CHANNEL_CREATED, n2);
  };
} }, { event: Ha.CLIENTS_DISCONNECTED, handler: function(e8, t2) {
  return () => {
    var n2;
    e8.state.clientsConnected = false, La.SocketService(`[SocketService: handlesClientsDisconnected()] context=${e8.state.context} on 'clients_disconnected-${t2}'`), e8.remote.state.relayPersistence ? La.SocketService(`[SocketService: handlesClientsDisconnected()] context=${e8.state.context} on 'clients_disconnected-${t2}' - relayPersistence enabled, skipping key exchange cleanup.`) : (e8.state.isOriginator && !e8.state.clientsPaused && (null === (n2 = e8.state.keyExchange) || void 0 === n2 || n2.clean()), e8.emit(Ha.CLIENTS_DISCONNECTED, t2));
  };
} }, { event: Ha.CONFIG, handler: function(e8, t2) {
  return (n2) => Ot(this, void 0, void 0, function* () {
    var r2, i2, o2;
    La.SocketService(`[SocketService: handleChannelConfig()] update relayPersistence on 'config-${t2}'`, n2);
    const { persistence: s2, walletKey: a2 } = n2;
    e8.state.isOriginator && e8.remote.state.channelConfig ? (n2.walletKey && !e8.remote.state.channelConfig.otherKey && (La.SocketService(`Setting wallet key ${a2}`), e8.remote.state.channelConfig.otherKey = a2, e8.getKeyExchange().setOtherPublicKey(n2.walletKey), null === (r2 = e8.state.keyExchange) || void 0 === r2 || r2.setKeysExchanged(true), yield e8.remote.sendMessage({ type: qa.KEY_HANDSHAKE_ACK }), yield e8.remote.sendMessage({ type: Va.PING }), yield null === (i2 = e8.remote.state.storageManager) || void 0 === i2 ? void 0 : i2.persistChannelConfig(e8.remote.state.channelConfig)), true !== s2 || e8.remote.state.channelConfig.relayPersistence || (La.SocketService(`Setting relay persistence ${s2}`), e8.remote.state.channelConfig.relayPersistence = s2, e8.remote.state.relayPersistence = true, e8.remote.emit(Ha.CHANNEL_PERSISTENCE), e8.remote.state.authorized = true, e8.remote.state.ready = true, e8.remote.emit(Ha.AUTHORIZED), yield null === (o2 = e8.remote.state.storageManager) || void 0 === o2 ? void 0 : o2.persistChannelConfig(e8.remote.state.channelConfig))) : e8.state.isOriginator || n2.persistence && (e8.remote.state.relayPersistence = true, e8.remote.emit(Ha.CHANNEL_PERSISTENCE));
  });
} }, { event: Ha.MESSAGE, handler: function(e8, t2) {
  return (n2) => {
    var r2, i2, o2, s2, a2, c2, l2, d2, u2, h2, f2, p2, g2, m2, y2, v2, b2, w2;
    const { ackId: E2, message: C2, error: _2 } = n2, S2 = null !== (r2 = e8.remote.state.relayPersistence) && void 0 !== r2 && r2;
    if (La.SocketService(`[SocketService handleMessage()]  relayPersistence=${S2}  context=${e8.state.context} on 'message' ${t2} keysExchanged=${null === (i2 = e8.state.keyExchange) || void 0 === i2 ? void 0 : i2.areKeysExchanged()}`, n2), _2) throw La.SocketService(`
      [SocketService handleMessage()] context=${e8.state.context}::on 'message' error=${_2}`), new Error(_2);
    const k2 = "string" == typeof C2;
    if (!k2 && (null == C2 ? void 0 : C2.type) === qa.KEY_HANDSHAKE_START) {
      if (S2) return;
      return La.SocketService(`[SocketService handleMessage()] context=${e8.state.context}::on 'message' received HANDSHAKE_START isOriginator=${e8.state.isOriginator}`, C2), void (null === (o2 = e8.state.keyExchange) || void 0 === o2 || o2.start({ isOriginator: null !== (s2 = e8.state.isOriginator) && void 0 !== s2 && s2, force: true }));
    }
    if (!k2 && (null === (a2 = null == C2 ? void 0 : C2.type) || void 0 === a2 ? void 0 : a2.startsWith("key_handshake"))) {
      if (S2) return;
      return La.SocketService(`[SocketService handleMessage()] context=${e8.state.context}::on 'message' emit KEY_EXCHANGE`, C2), void e8.emit(za.KEY_EXCHANGE, { message: C2, context: e8.state.context });
    }
    if (k2 && !(null === (c2 = e8.state.keyExchange) || void 0 === c2 ? void 0 : c2.areKeysExchanged())) {
      let t3 = false;
      try {
        La.SocketService(`[SocketService handleMessage()] context=${e8.state.context}::on 'message' trying to decrypt message`), null === (l2 = e8.state.keyExchange) || void 0 === l2 || l2.decryptMessage(C2), t3 = true;
      } catch (t4) {
        La.SocketService(`[SocketService handleMessage()] context=${e8.state.context}::on 'message' error`, t4);
      }
      if (!t3) return e8.state.isOriginator ? null === (u2 = e8.state.keyExchange) || void 0 === u2 || u2.start({ isOriginator: null !== (h2 = e8.state.isOriginator) && void 0 !== h2 && h2 }) : e8.sendMessage({ type: qa.KEY_HANDSHAKE_START }).catch((e9) => {
      }), void La.SocketService(`Message ignored because invalid key exchange status. step=${null === (f2 = e8.state.keyExchange) || void 0 === f2 ? void 0 : f2.getKeyInfo().step}`, null === (p2 = e8.state.keyExchange) || void 0 === p2 ? void 0 : p2.getKeyInfo(), C2);
      La.SocketService("Invalid key exchange status detected --- updating it."), null === (d2 = e8.state.keyExchange) || void 0 === d2 || d2.setKeysExchanged(true);
    } else if (!k2 && (null == C2 ? void 0 : C2.type)) return void e8.emit(Ha.MESSAGE, C2);
    if (!k2) return void e8.emit(Ha.MESSAGE, C2);
    const x2 = null === (g2 = e8.state.keyExchange) || void 0 === g2 ? void 0 : g2.decryptMessage(C2), A2 = JSON.parse(null != x2 ? x2 : "{}");
    if (E2 && (null == E2 ? void 0 : E2.length) > 0 && (La.SocketService(`[SocketService handleMessage()] context=${e8.state.context}::on 'message' ackid=${E2} channelId=${t2}`), null === (m2 = e8.state.socket) || void 0 === m2 || m2.emit(Ha.MESSAGE_ACK, { ackId: E2, channelId: t2, clientType: e8.state.isOriginator ? "dapp" : "wallet" })), e8.state.clientsPaused = (null == A2 ? void 0 : A2.type) === Va.PAUSE, e8.state.isOriginator && A2.data) {
      const t3 = A2.data, n3 = e8.state.rpcMethodTracker[t3.id];
      if (n3) {
        const r3 = Date.now() - n3.timestamp;
        La.SocketService(`[SocketService handleMessage()] context=${e8.state.context}::on 'message' received answer for id=${t3.id} method=${n3.method} responseTime=${r3}`, A2), e8.remote.state.analytics && nc.includes(n3.method.toLowerCase()) && Pa(Object.assign(Object.assign({ id: null !== (y2 = e8.remote.state.channelId) && void 0 !== y2 ? y2 : "", event: Wa.SDK_RPC_REQUEST_DONE, sdkVersion: e8.remote.state.sdkVersion, commLayerVersion: Na.version }, e8.remote.state.originatorInfo), { walletVersion: null === (v2 = e8.remote.state.walletInfo) || void 0 === v2 ? void 0 : v2.version, params: { method: n3.method, from: "mobile" } }), e8.remote.state.communicationServerUrl).catch((e9) => {
        });
        const i3 = Object.assign(Object.assign({}, n3), { result: t3.result, error: t3.error ? { code: null === (b2 = t3.error) || void 0 === b2 ? void 0 : b2.code, message: null === (w2 = t3.error) || void 0 === w2 ? void 0 : w2.message } : void 0, elapsedTime: r3 });
        e8.state.rpcMethodTracker[t3.id] = i3, e8.emit(Ha.RPC_UPDATE, i3);
      }
    }
    e8.emit(Ha.MESSAGE, { message: A2 });
  };
} }, { event: Ha.REJECTED, handler: function(e8, t2) {
  return (n2) => Ot(this, void 0, void 0, function* () {
    var n3;
    e8.state.isOriginator && !e8.remote.state.ready ? (La.SocketService(`[SocketService: handleChannelRejected()] context=${e8.state.context} channelId=${t2} isOriginator=${e8.state.isOriginator} ready=${e8.remote.state.ready}`, e8.remote.state.originatorInfo), Pa(Object.assign(Object.assign({ id: t2, event: Wa.REJECTED }, e8.remote.state.originatorInfo), { sdkVersion: e8.remote.state.sdkVersion, commLayer: e8.state.communicationLayerPreference, commLayerVersion: Na.version, walletVersion: null === (n3 = e8.remote.state.walletInfo) || void 0 === n3 ? void 0 : n3.version }), e8.remote.state.communicationServerUrl).catch((e9) => {
    }), yield e8.remote.disconnect({ terminate: true }), e8.remote.emit(Ha.REJECTED, { channelId: t2 }), e8.remote.setConnectionStatus(Ua.DISCONNECTED)) : La.SocketService(`[SocketService: handleChannelRejected()] SKIP -- channelId=${t2} isOriginator=${e8.state.isOriginator} ready=${e8.remote.state.ready}`);
  });
} }, { event: "clients_waiting_to_join", handler: function(e8, t2) {
  return (n2) => {
    La.SocketService(`[SocketService: handleClientsWaitingToJoin()] context=${e8.state.context} on 'clients_waiting_to_join-${t2}'`, n2), e8.emit(Ha.CLIENTS_WAITING, n2);
  };
} }];
var ic = [{ event: Ha.KEY_INFO, handler: function(e8) {
  return (t2) => {
    La.SocketService("[SocketService: handleKeyInfo()] on 'KEY_INFO'", t2), e8.emit(Ha.KEY_INFO, t2);
  };
} }, { event: Ha.KEYS_EXCHANGED, handler: function(e8) {
  return () => {
    var t2, n2, r2;
    La.SocketService(`[SocketService: handleKeysExchanged()] on 'keys_exchanged' keyschanged=${null === (t2 = e8.state.keyExchange) || void 0 === t2 ? void 0 : t2.areKeysExchanged()}`);
    const { channelConfig: i2 } = e8.remote.state;
    if (i2) {
      const t3 = e8.getKeyExchange().getKeyInfo().ecies;
      i2.localKey = t3.private, i2.otherKey = t3.otherPubKey, e8.remote.state.channelConfig = i2, null === (n2 = e8.remote.state.storageManager) || void 0 === n2 || n2.persistChannelConfig(i2).catch((e9) => {
      });
    }
    e8.emit(Ha.KEYS_EXCHANGED, { keysExchanged: null === (r2 = e8.state.keyExchange) || void 0 === r2 ? void 0 : r2.areKeysExchanged(), isOriginator: e8.state.isOriginator });
    const o2 = { keyInfo: e8.getKeyInfo() };
    e8.emit(Ha.SERVICE_STATUS, o2);
  };
} }];
function oc(e8, t2) {
  La.SocketService(`[SocketService: setupChannelListener()] context=${e8.state.context} setting socket listeners for channel ${t2}...`);
  const { socket: n2 } = e8.state, { keyExchange: r2 } = e8.state;
  n2 && e8.state.isOriginator && (e8.state.debug && (null == n2 || n2.io.on("error", (t3) => {
    La.SocketService(`[SocketService: setupChannelListener()] context=${e8.state.context} socket event=error`, t3);
  }), null == n2 || n2.io.on("reconnect", (t3) => {
    La.SocketService(`[SocketService: setupChannelListener()] context=${e8.state.context} socket event=reconnect`, t3), Qa(e8).catch((e9) => {
    });
  }), null == n2 || n2.io.on("reconnect_error", (t3) => {
    La.SocketService(`[SocketService: setupChannelListener()] context=${e8.state.context} socket event=reconnect_error`, t3);
  }), null == n2 || n2.io.on("reconnect_failed", () => {
    La.SocketService(`[SocketService: setupChannelListener()] context=${e8.state.context} socket event=reconnect_failed`);
  })), null == n2 || n2.on("disconnect", (t3) => (La.SocketService(`[SocketService: setupChannelListener()] on 'disconnect' -- MetaMaskSDK socket disconnected '${t3}' begin recovery...`), (/* @__PURE__ */ function(e9) {
    return (t4) => {
      La.SocketService(`[SocketService: handleDisconnect()] on 'disconnect' manualDisconnect=${e9.state.manualDisconnect}`, t4), e9.state.manualDisconnect || (e9.emit(Ha.SOCKET_DISCONNECTED), Qa(e9).catch((e10) => {
      }));
    };
  }(e8))(t3)))), rc.forEach(({ event: r3, handler: i2 }) => {
    null == n2 || n2.on(`${r3}-${t2}`, i2(e8, t2));
  }), ic.forEach(({ event: t3, handler: n3 }) => {
    null == r2 || r2.on(t3, n3(e8));
  }), e8.state.setupChannelListeners = true;
}
var sc = class extends H.exports.EventEmitter2 {
  constructor(e8) {
    super(), this.state = { clientsConnected: false, clientsPaused: false, manualDisconnect: false, lastRpcId: void 0, rpcMethodTracker: {}, hasPlaintext: false, communicationServerUrl: "", focusListenerAdded: false, removeFocusListener: void 0, isReconnecting: false, reconnectionAttempts: 0 }, this.options = e8;
    const { reconnect: t2, communicationLayerPreference: n2, communicationServerUrl: r2, context: i2, remote: o2, logging: s2 } = e8;
    this.state.resumed = t2, this.state.context = i2, this.state.isOriginator = o2.state.isOriginator, this.state.communicationLayerPreference = n2, this.state.debug = true === (null == s2 ? void 0 : s2.serviceLayer), this.remote = o2, true === (null == s2 ? void 0 : s2.serviceLayer) && U.enable("SocketService:Layer"), this.state.communicationServerUrl = r2, this.state.hasPlaintext = this.state.communicationServerUrl !== Da && true === (null == s2 ? void 0 : s2.plaintext), La.SocketService(`[SocketService: constructor()] Socket IO url: ${this.state.communicationServerUrl}`), this.initSocket();
  }
  initSocket() {
    var e8;
    const { otherPublicKey: t2, ecies: n2, logging: r2 } = this.options, i2 = { autoConnect: false, transports: Ba, withCredentials: true }, o2 = this.state.communicationServerUrl;
    La.SocketService(`[SocketService: initSocket()] Socket IO url: ${o2}`), this.state.socket = Tt(o2, i2), function(e9) {
      if ("undefined" != typeof window && "undefined" != typeof document && (La.SocketService(`[SocketService: setupSocketFocusListener()] hasFocus=${document.hasFocus()}`, e9), !e9.state.focusListenerAdded)) {
        const t3 = () => {
          La.SocketService("Document has focus --- reconnecting socket"), Qa(e9).catch((e10) => {
          });
        };
        window.addEventListener("focus", t3), e9.state.focusListenerAdded = true, e9.state.removeFocusListener = () => {
          window.removeEventListener("focus", t3), e9.state.focusListenerAdded = false;
        };
      }
    }(this);
    const s2 = { communicationLayer: this, otherPublicKey: t2, sendPublicKey: false, context: null !== (e8 = this.state.context) && void 0 !== e8 ? e8 : "", ecies: n2, logging: r2 };
    this.state.keyExchange = new Ya(s2);
  }
  resetKeys() {
    return La.SocketService("[SocketService: resetKeys()] Resetting keys."), void (null === (e8 = this.state.keyExchange) || void 0 === e8 || e8.resetKeys());
    var e8;
  }
  createChannel() {
    return Ot(this, void 0, void 0, function* () {
      return function(e8) {
        return Ot(this, void 0, void 0, function* () {
          var t2, n2, r2;
          if (La.SocketService(`[SocketService: createChannel()] context=${e8.state.context}`), e8.state.socket || e8.initSocket(), null === (t2 = e8.state.socket) || void 0 === t2 ? void 0 : t2.connected) throw new Error("socket already connected");
          null === (n2 = e8.state.socket) || void 0 === n2 || n2.connect(), e8.state.manualDisconnect = false, e8.state.isOriginator = true;
          const i2 = ae();
          e8.state.channelId = i2, oc(e8, i2), yield new Promise((t3, n3) => {
            var r3;
            null === (r3 = e8.state.socket) || void 0 === r3 || r3.emit(Ha.JOIN_CHANNEL, { channelId: i2, context: `${e8.state.context}createChannel`, clientType: "dapp" }, (r4, i3) => Ot(this, void 0, void 0, function* () {
              try {
                yield Za(e8, r4, i3), t3();
              } catch (e9) {
                n3(e9);
              }
            }));
          });
          const o2 = null === (r2 = e8.state.keyExchange) || void 0 === r2 ? void 0 : r2.getKeyInfo();
          return { channelId: i2, pubKey: (null == o2 ? void 0 : o2.ecies.public) || "", privKey: (null == o2 ? void 0 : o2.ecies.private) || "" };
        });
      }(this);
    });
  }
  connectToChannel({ channelId: e8, withKeyExchange: t2 = false, authorized: n2 }) {
    return function(e9) {
      return Ot(this, arguments, void 0, function* ({ options: e10, instance: t3 }) {
        const { channelId: n3, authorized: r2, withKeyExchange: i2 } = e10, { state: o2, remote: s2 } = t3, { isOriginator: a2 = false, socket: c2, keyExchange: l2 } = o2, { channelConfig: d2 } = s2.state;
        if (null == c2 ? void 0 : c2.connected) throw new Error("socket already connected");
        if (a2 && (null == d2 ? void 0 : d2.relayPersistence)) {
          const { localKey: e11, otherKey: t4 } = d2;
          e11 && t4 && (null == l2 || l2.setRelayPersistence({ localKey: e11, otherKey: t4 }));
        }
        return Object.assign(o2, { manualDisconnect: false, withKeyExchange: i2, isOriginator: a2, channelId: n3 }), null == c2 || c2.connect(), oc(t3, n3), !a2 && r2 && (null == l2 || l2.setKeysExchanged(true), Object.assign(s2.state, { ready: true, authorized: true })), new Promise((e11) => {
          var i3;
          const s3 = null === (i3 = null == l2 ? void 0 : l2.getKeyInfo()) || void 0 === i3 ? void 0 : i3.ecies.public;
          null == c2 || c2.emit(Ha.JOIN_CHANNEL, { channelId: n3, context: `${o2.context}_connectToChannel`, clientType: a2 ? "dapp" : "wallet", publicKey: r2 && !a2 ? s3 : void 0 }, (n4, r3) => Ot(this, void 0, void 0, function* () {
            yield Za(t3, n4, r3), e11();
          }));
        });
      });
    }({ options: { channelId: e8, withKeyExchange: t2, authorized: n2 }, instance: this });
  }
  getKeyInfo() {
    return this.state.keyExchange.getKeyInfo();
  }
  keyCheck() {
    var e8, t2;
    null === (t2 = (e8 = this).state.socket) || void 0 === t2 || t2.emit(Ha.MESSAGE, { id: e8.state.channelId, context: e8.state.context, message: { type: qa.KEY_HANDSHAKE_CHECK, pubkey: e8.getKeyInfo().ecies.otherPubKey } });
  }
  getKeyExchange() {
    return this.state.keyExchange;
  }
  sendMessage(e8) {
    return Ot(this, void 0, void 0, function* () {
      return function(e9, t2) {
        return Ot(this, void 0, void 0, function* () {
          var n2, r2, i2;
          if (!e9.state.channelId) throw La.SocketService("handleSendMessage: no channelId - Create a channel first"), new Error("Create a channel first");
          if (La.SocketService(`[SocketService: handleSendMessage()] context=${e9.state.context} areKeysExchanged=${null === (n2 = e9.state.keyExchange) || void 0 === n2 ? void 0 : n2.areKeysExchanged()}`, t2), null === (r2 = null == t2 ? void 0 : t2.type) || void 0 === r2 ? void 0 : r2.startsWith("key_handshake")) return function(e10, t3) {
            var n3;
            La.SocketService(`[SocketService: handleKeyHandshake()] context=${e10.state.context}`, t3), null === (n3 = e10.state.socket) || void 0 === n3 || n3.emit(Ha.MESSAGE, { id: e10.state.channelId, context: e10.state.context, clientType: e10.state.isOriginator ? "dapp" : "wallet", message: t3 });
          }(e9, t2), true;
          !function(e10, t3) {
            var n3;
            if (!(null === (n3 = e10.state.keyExchange) || void 0 === n3 ? void 0 : n3.areKeysExchanged()) && !e10.remote.state.relayPersistence) throw La.SocketService(`[SocketService: validateKeyExchange()] context=${e10.state.context} ERROR keys not exchanged`, t3), new Error("Keys not exchanged BBB");
          }(e9, t2), function(e10, t3) {
            var n3;
            const r3 = null !== (n3 = null == t3 ? void 0 : t3.method) && void 0 !== n3 ? n3 : "", i3 = null == t3 ? void 0 : t3.id;
            e10.state.isOriginator && i3 && (e10.state.rpcMethodTracker[i3] = { id: i3, timestamp: Date.now(), method: r3 }, e10.emit(Ha.RPC_UPDATE, e10.state.rpcMethodTracker[i3]));
          }(e9, t2);
          const o2 = yield ec(e9, t2);
          return e9.remote.state.analytics && e9.remote.state.isOriginator && t2.method && nc.includes(t2.method.toLowerCase()) && Pa({ id: null !== (i2 = e9.remote.state.channelId) && void 0 !== i2 ? i2 : "", event: Wa.SDK_RPC_REQUEST, params: { method: t2.method, from: "mobile" } }, e9.remote.state.communicationServerUrl).catch((e10) => {
          }), function(e10, t3) {
            return Ot(this, void 0, void 0, function* () {
              var n3;
              const r3 = null == t3 ? void 0 : t3.id, i3 = null !== (n3 = null == t3 ? void 0 : t3.method) && void 0 !== n3 ? n3 : "";
              if (e10.state.isOriginator && r3) try {
                const n4 = Xa(r3, e10.state.rpcMethodTracker, 200).then((e11) => ({ type: tc.RPC_CHECK, result: e11 })), o3 = (() => Ot(this, void 0, void 0, function* () {
                  const t4 = yield ((e11) => Ot(void 0, [e11], void 0, function* ({ rpcId: e12, instance: t5 }) {
                    for (; t5.state.lastRpcId === e12 || void 0 === t5.state.lastRpcId; ) yield Ja(200);
                    return t5.state.lastRpcId;
                  }))({ instance: e10, rpcId: r3 }), n5 = yield Xa(t4, e10.state.rpcMethodTracker, 200);
                  return { type: tc.SKIPPED_RPC, result: n5 };
                }))(), s2 = yield Promise.race([n4, o3]);
                if (s2.type === tc.RPC_CHECK) {
                  const e11 = s2.result;
                  La.SocketService(`[SocketService:handleRpcReplies()] id=${t3.id} ${i3} ( ${e11.elapsedTime} ms)`, e11.result);
                } else {
                  if (s2.type !== tc.SKIPPED_RPC) throw new Error(`Error handling RPC replies for ${r3}`);
                  {
                    const t4 = Object.assign(Object.assign({}, e10.state.rpcMethodTracker[r3]), { error: new Error("SDK_CONNECTION_ISSUE") });
                    e10.emit(Ha.RPC_UPDATE, t4);
                    const n5 = { data: Object.assign(Object.assign({}, t4), { jsonrpc: "2.0" }), name: "metamask-provider" };
                    e10.emit(Ha.MESSAGE, { message: n5 });
                  }
                }
              } catch (e11) {
                throw e11;
              }
            });
          }(e9, t2).catch((e10) => {
          }), o2;
        });
      }(this, e8);
    });
  }
  ping() {
    return function(e8) {
      return Ot(this, void 0, void 0, function* () {
        var t2, n2;
        La.SocketService(`[SocketService: ping()] context=${e8.state.context} originator=${e8.state.isOriginator} keysExchanged=${null === (t2 = e8.state.keyExchange) || void 0 === t2 ? void 0 : t2.areKeysExchanged()}`), null === (n2 = e8.state.socket) || void 0 === n2 || n2.emit(Va.PING, { id: e8.state.channelId, context: "ping", clientType: e8.remote.state.isOriginator ? "dapp" : "wallet", message: "" });
      });
    }(this);
  }
  pause() {
    return function(e8) {
      return Ot(this, void 0, void 0, function* () {
        var t2, n2;
        La.SocketService(`[SocketService: pause()] context=${e8.state.context}`), e8.state.manualDisconnect = true, (null === (t2 = e8.state.keyExchange) || void 0 === t2 ? void 0 : t2.areKeysExchanged()) && (yield e8.sendMessage({ type: Va.PAUSE })), null === (n2 = e8.state.socket) || void 0 === n2 || n2.disconnect();
      });
    }(this);
  }
  isConnected() {
    var e8;
    return null === (e8 = this.state.socket) || void 0 === e8 ? void 0 : e8.connected;
  }
  resume() {
    return function(e8) {
      return Ot(this, void 0, void 0, function* () {
        const { state: t2, remote: n2 } = e8, { socket: r2, channelId: i2, context: o2, keyExchange: s2, isOriginator: a2 } = t2, { isOriginator: c2 } = n2.state;
        if (La.SocketService(`[SocketService: resume()] channelId=${i2} context=${o2} connected=${null == r2 ? void 0 : r2.connected} manualDisconnect=${t2.manualDisconnect} resumed=${t2.resumed} keysExchanged=${null == s2 ? void 0 : s2.areKeysExchanged()}`), !i2) throw La.SocketService("[SocketService: resume()] channelId is not defined"), new Error("ChannelId is not defined");
        (null == r2 ? void 0 : r2.connected) ? (La.SocketService("[SocketService: resume()] already connected."), r2.emit(Va.PING, { id: i2, clientType: c2 ? "dapp" : "wallet", context: "on_channel_config", message: "" }), n2.hasRelayPersistence() || (null == s2 ? void 0 : s2.areKeysExchanged()) || (a2 ? yield e8.sendMessage({ type: Va.READY }) : null == s2 || s2.start({ isOriginator: false }))) : (null == r2 || r2.connect(), La.SocketService(`[SocketService: resume()] after connecting socket --> connected=${null == r2 ? void 0 : r2.connected}`), null == r2 || r2.emit(Ha.JOIN_CHANNEL, { channelId: i2, context: `${o2}_resume`, clientType: c2 ? "dapp" : "wallet" }, (t3, n3) => Ot(this, void 0, void 0, function* () {
          try {
            yield Za(e8, t3, n3);
          } catch (e9) {
          }
        }))), t2.manualDisconnect = false, t2.resumed = true;
      });
    }(this);
  }
  getRPCMethodTracker() {
    return this.state.rpcMethodTracker;
  }
  disconnect(e8) {
    return function(e9, t2) {
      var n2, r2, i2, o2, s2;
      La.SocketService(`[SocketService: disconnect()] context=${e9.state.context}`, t2), (null == t2 ? void 0 : t2.terminate) && (null === (r2 = (n2 = e9.state).removeFocusListener) || void 0 === r2 || r2.call(n2), e9.state.channelId = t2.channelId, null === (i2 = e9.state.socket) || void 0 === i2 || i2.removeAllListeners(), null === (o2 = e9.state.keyExchange) || void 0 === o2 || o2.clean(), e9.remote.state.ready = false, e9.state.socket = void 0, e9.state.rpcMethodTracker = {}), e9.state.manualDisconnect = true, null === (s2 = e9.state.socket) || void 0 === s2 || s2.disconnect();
    }(this, e8);
  }
};
var ac;
var cc;
var lc;
function dc(e8) {
  return () => Ot(this, void 0, void 0, function* () {
    var t2, n2, r2;
    const { state: i2 } = e8;
    if (i2.authorized) return;
    yield (() => Ot(this, void 0, void 0, function* () {
      for (; !i2.walletInfo; ) yield Ja(500);
    }))();
    const o2 = "7.3".localeCompare((null === (t2 = i2.walletInfo) || void 0 === t2 ? void 0 : t2.version) || "");
    if (La.RemoteCommunication(`[RemoteCommunication: handleAuthorizedEvent()] HACK 'authorized' version=${null === (n2 = i2.walletInfo) || void 0 === n2 ? void 0 : n2.version} compareValue=${o2}`), 1 !== o2) return;
    const s2 = i2.platformType === cc.MobileWeb || i2.platformType === cc.ReactNative || i2.platformType === cc.MetaMaskMobileWebview;
    La.RemoteCommunication(`[RemoteCommunication: handleAuthorizedEvent()] HACK 'authorized' platform=${i2.platformType} secure=${s2} channel=${i2.channelId} walletVersion=${null === (r2 = i2.walletInfo) || void 0 === r2 ? void 0 : r2.version}`), s2 && (i2.authorized = true, e8.emit(Ha.AUTHORIZED));
  });
}
function uc(e8) {
  return (t2) => {
    const { state: n2 } = e8;
    La.RemoteCommunication(`[RemoteCommunication: handleChannelCreatedEvent()] context=${n2.context} on 'channel_created' channelId=${t2}`), e8.emit(Ha.CHANNEL_CREATED, t2);
  };
}
function hc(e8, t2) {
  return () => {
    var n2, r2, i2, o2;
    const { state: s2 } = e8;
    La.RemoteCommunication(`[RemoteCommunication: handleClientsConnectedEvent()] on 'clients_connected' channel=${s2.channelId} keysExchanged=${null === (r2 = null === (n2 = s2.communicationLayer) || void 0 === n2 ? void 0 : n2.getKeyInfo()) || void 0 === r2 ? void 0 : r2.keysExchanged}`), s2.analytics && Pa(Object.assign(Object.assign({ id: null !== (i2 = s2.channelId) && void 0 !== i2 ? i2 : "", event: s2.reconnection ? Wa.RECONNECT : s2.isOriginator ? Wa.REQUEST : Wa.REQUEST_MOBILE }, s2.originatorInfo), { commLayer: t2, sdkVersion: s2.sdkVersion, walletVersion: null === (o2 = s2.walletInfo) || void 0 === o2 ? void 0 : o2.version, commLayerVersion: Na.version }), s2.communicationServerUrl).catch((e9) => {
    }), s2.clientsConnected = true, s2.originatorInfoSent = false, e8.emit(Ha.CLIENTS_CONNECTED);
  };
}
function fc(e8) {
  return (t2) => {
    const { state: n2 } = e8;
    La.RemoteCommunication(`[RemoteCommunication: handleClientsDisconnectedEvent()] context=${n2.context} on 'clients_disconnected' channelId=${t2}`), n2.relayPersistence || (n2.clientsConnected = false, n2.ready = false, n2.authorized = false), e8.emit(Ha.CLIENTS_DISCONNECTED, n2.channelId), e8.setConnectionStatus(Ua.DISCONNECTED);
  };
}
function pc(e8) {
  return (t2) => {
    var n2;
    const { state: r2 } = e8;
    if (La.RemoteCommunication(`[RemoteCommunication: handleClientsWaitingEvent()] context=${r2.context} on 'clients_waiting' numberUsers=${t2} ready=${r2.ready} autoStarted=${r2.originatorConnectStarted}`), e8.setConnectionStatus(Ua.WAITING), e8.emit(Ha.CLIENTS_WAITING, t2), r2.originatorConnectStarted) {
      La.RemoteCommunication(`[RemoteCommunication: handleClientsWaitingEvent()] on 'clients_waiting' watch autoStarted=${r2.originatorConnectStarted} timeout`, r2.autoConnectOptions);
      const t3 = (null === (n2 = r2.autoConnectOptions) || void 0 === n2 ? void 0 : n2.timeout) || 3e3, i2 = setTimeout(() => {
        La.RemoteCommunication(`[RemoteCommunication: handleClientsWaitingEvent()] setTimeout(${t3}) terminate channelConfig`, r2.autoConnectOptions), r2.originatorConnectStarted = false, r2.ready || e8.setConnectionStatus(Ua.TIMEOUT), clearTimeout(i2);
      }, t3);
    }
  };
}
function gc(e8, t2) {
  return (n2) => {
    var r2, i2, o2, s2, a2, c2, l2, d2;
    const { state: u2 } = e8;
    if (La.RemoteCommunication(`[RemoteCommunication: handleKeysExchangedEvent()] context=${u2.context} on commLayer.'keys_exchanged' channel=${u2.channelId}`, n2), null === (i2 = null === (r2 = u2.communicationLayer) || void 0 === r2 ? void 0 : r2.getKeyInfo()) || void 0 === i2 ? void 0 : i2.keysExchanged) {
      const t3 = Object.assign(Object.assign({}, u2.channelConfig), { channelId: null !== (o2 = u2.channelId) && void 0 !== o2 ? o2 : "", validUntil: (null === (s2 = u2.channelConfig) || void 0 === s2 ? void 0 : s2.validUntil) || $a, localKey: u2.communicationLayer.getKeyInfo().ecies.private, otherKey: u2.communicationLayer.getKeyInfo().ecies.otherPubKey });
      null === (a2 = u2.storageManager) || void 0 === a2 || a2.persistChannelConfig(t3).catch((e9) => {
      }), e8.setConnectionStatus(Ua.LINKED);
    }
    !function(e9, t3) {
      var n3, r3, i3, o3, s3, a3, c3, l3;
      const { state: d3 } = e9;
      La.RemoteCommunication(`[RemoteCommunication: setLastActiveDate()] channel=${d3.channelId}`, t3);
      const u3 = Object.assign(Object.assign({}, d3.channelConfig), { channelId: null !== (n3 = d3.channelId) && void 0 !== n3 ? n3 : "", validUntil: null !== (i3 = null === (r3 = d3.channelConfig) || void 0 === r3 ? void 0 : r3.validUntil) && void 0 !== i3 ? i3 : 0, relayPersistence: d3.relayPersistence, localKey: null === (s3 = null === (o3 = d3.communicationLayer) || void 0 === o3 ? void 0 : o3.state.keyExchange) || void 0 === s3 ? void 0 : s3.getKeyInfo().ecies.private, otherKey: null === (c3 = null === (a3 = d3.communicationLayer) || void 0 === a3 ? void 0 : a3.state.keyExchange) || void 0 === c3 ? void 0 : c3.getKeyInfo().ecies.otherPubKey, lastActive: t3.getTime() });
      null === (l3 = d3.storageManager) || void 0 === l3 || l3.persistChannelConfig(u3);
    }(e8, /* @__PURE__ */ new Date()), u2.analytics && u2.channelId && Pa(Object.assign(Object.assign({ id: u2.channelId, event: n2.isOriginator ? Wa.CONNECTED : Wa.CONNECTED_MOBILE }, u2.originatorInfo), { sdkVersion: u2.sdkVersion, commLayer: t2, commLayerVersion: Na.version, walletVersion: null === (c2 = u2.walletInfo) || void 0 === c2 ? void 0 : c2.version }), u2.communicationServerUrl).catch((e9) => {
    }), u2.isOriginator = n2.isOriginator, n2.isOriginator || (null === (l2 = u2.communicationLayer) || void 0 === l2 || l2.sendMessage({ type: Va.READY }), u2.ready = true, u2.paused = false), n2.isOriginator && !u2.originatorInfoSent && (null === (d2 = u2.communicationLayer) || void 0 === d2 || d2.sendMessage({ type: Va.ORIGINATOR_INFO, originatorInfo: u2.originatorInfo, originator: u2.originatorInfo }), u2.originatorInfoSent = true);
  };
}
function mc(e8) {
  return (t2) => {
    let n2 = t2;
    t2.message && (n2 = n2.message), function(e9, t3) {
      const { state: n3 } = t3;
      if (La.RemoteCommunication(`[RemoteCommunication: onCommunicationLayerMessage()] context=${n3.context} on 'message' typeof=${typeof e9}`, e9), t3.state.ready = true, n3.isOriginator || e9.type !== Va.ORIGINATOR_INFO) if (n3.isOriginator && e9.type === Va.WALLET_INFO) !function(e10, t4) {
        const { state: n4 } = e10;
        n4.walletInfo = t4.walletInfo, n4.paused = false;
      }(t3, e9);
      else {
        if (n3.isOriginator && e9.type === Va.WALLET_INIT) (function(e10, t4) {
          return Ot(this, void 0, void 0, function* () {
            var n4, r2, i2;
            const { state: o2 } = e10;
            if (o2.isOriginator) {
              const o3 = t4.data || {};
              if ("object" == typeof o3 && "accounts" in o3 && "chainId" in o3 && "walletKey" in o3) try {
                const { channelConfig: t5 } = e10.state;
                if (La.RemoteCommunication("WALLET_INIT: channelConfig", JSON.stringify(t5, null, 2)), t5) {
                  const s2 = o3.accounts, a2 = o3.chainId, c2 = o3.walletKey;
                  let l2, d2 = false;
                  "deeplinkProtocol" in o3 && (d2 = Boolean(o3.deeplinkProtocol), e10.state.deeplinkProtocolAvailable = d2), "walletVersion" in o3 && (l2 = o3.walletVersion), yield null === (n4 = e10.state.storageManager) || void 0 === n4 ? void 0 : n4.persistChannelConfig(Object.assign(Object.assign({}, t5), { otherKey: c2, walletVersion: l2, deeplinkProtocolAvailable: d2, relayPersistence: true })), yield null === (r2 = e10.state.storageManager) || void 0 === r2 ? void 0 : r2.persistAccounts(s2), yield null === (i2 = e10.state.storageManager) || void 0 === i2 ? void 0 : i2.persistChainId(a2);
                }
                e10.emit(Ha.WALLET_INIT, { accounts: o3.accounts, chainId: o3.chainId });
              } catch (n5) {
              }
            }
          });
        })(t3, e9).catch((e10) => {
          La.RemoteCommunication(`[RemoteCommunication: onCommunicationLayerMessage()] error=${e10}`);
        });
        else if (e9.type === Va.TERMINATE) (function(e10) {
          return Ot(this, void 0, void 0, function* () {
            const { state: t4 } = e10;
            t4.isOriginator && (yield Ec({ options: { terminate: true, sendMessage: false }, instance: e10 }), e10.emit(Ha.TERMINATE));
          });
        })(t3).catch((e10) => {
          La.RemoteCommunication(`[RemoteCommunication: onCommunicationLayerMessage()] error=${e10}`);
        });
        else if (e9.type === Va.PAUSE) !function(e10) {
          const { state: t4 } = e10;
          t4.paused = true, e10.setConnectionStatus(Ua.PAUSED);
        }(t3);
        else if (e9.type === Va.READY && n3.isOriginator) !function(e10) {
          const { state: t4 } = e10;
          e10.setConnectionStatus(Ua.LINKED);
          const n4 = t4.paused;
          t4.paused = false, e10.emit(Ha.CLIENTS_READY, { isOriginator: t4.isOriginator, walletInfo: t4.walletInfo }), n4 && (t4.authorized = true, e10.emit(Ha.AUTHORIZED));
        }(t3);
        else {
          if (e9.type === Va.OTP && n3.isOriginator) return void function(e10, t4) {
            var n4;
            const { state: r2 } = e10;
            e10.emit(Ha.OTP, t4.otpAnswer), 1 === "6.6".localeCompare((null === (n4 = r2.walletInfo) || void 0 === n4 ? void 0 : n4.version) || "") && e10.emit(Ha.SDK_RPC_CALL, { method: Ka.ETH_REQUESTACCOUNTS, params: [] });
          }(t3, e9);
          e9.type === Va.AUTHORIZED && n3.isOriginator && function(e10) {
            const { state: t4 } = e10;
            t4.authorized = true, e10.emit(Ha.AUTHORIZED);
          }(t3);
        }
        t3.emit(Ha.MESSAGE, e9);
      }
      else !function(e10, t4) {
        var n4;
        const { state: r2 } = e10;
        null === (n4 = r2.communicationLayer) || void 0 === n4 || n4.sendMessage({ type: Va.WALLET_INFO, walletInfo: r2.walletInfo }), r2.originatorInfo = t4.originatorInfo || t4.originator, e10.emit(Ha.CLIENTS_READY, { isOriginator: r2.isOriginator, originatorInfo: r2.originatorInfo }), r2.paused = false;
      }(t3, e9);
    }(n2, e8);
  };
}
function yc(e8) {
  return () => {
    const { state: t2 } = e8;
    La.RemoteCommunication("[RemoteCommunication: handleSocketReconnectEvent()] on 'socket_reconnect' -- reset key exchange status / set ready to false"), t2.ready = false, t2.authorized = false, Fa(t2), e8.emitServiceStatusEvent({ context: "socket_reconnect" });
  };
}
function vc(e8) {
  return () => {
    const { state: t2 } = e8;
    La.RemoteCommunication("[RemoteCommunication: handleSocketDisconnectedEvent()] on 'socket_Disconnected' set ready to false"), t2.ready = false;
  };
}
function bc(e8) {
  return () => Ot(this, void 0, void 0, function* () {
    var t2, n2, r2, i2, o2, s2, a2;
    const { state: c2 } = e8;
    La.RemoteCommunication(`[RemoteCommunication: handleFullPersistenceEvent()] context=${c2.context}`), e8.state.ready = true, e8.state.clientsConnected = true, e8.state.authorized = true, e8.state.relayPersistence = true, null === (t2 = e8.state.communicationLayer) || void 0 === t2 || t2.getKeyExchange().setKeysExchanged(true), e8.emit(Ha.KEYS_EXCHANGED, { keysExchanged: true, isOriginator: true }), e8.emit(Ha.AUTHORIZED), e8.emit(Ha.CLIENTS_READY), e8.emit(Ha.CHANNEL_PERSISTENCE);
    try {
      c2.channelConfig = Object.assign(Object.assign({}, c2.channelConfig), { localKey: null === (n2 = c2.communicationLayer) || void 0 === n2 ? void 0 : n2.getKeyExchange().getKeyInfo().ecies.private, otherKey: null === (r2 = c2.communicationLayer) || void 0 === r2 ? void 0 : r2.getKeyExchange().getOtherPublicKey(), channelId: null !== (i2 = c2.channelId) && void 0 !== i2 ? i2 : "", validUntil: null !== (s2 = null === (o2 = c2.channelConfig) || void 0 === o2 ? void 0 : o2.validUntil) && void 0 !== s2 ? s2 : $a, relayPersistence: true }), yield null === (a2 = c2.storageManager) || void 0 === a2 ? void 0 : a2.persistChannelConfig(c2.channelConfig);
    } catch (t3) {
    }
  });
}
function wc({ communicationLayerPreference: e8, otherPublicKey: t2, reconnect: n2, ecies: r2, communicationServerUrl: i2 = Da, instance: o2 }) {
  var s2, a2, c2, l2, d2, u2, h2, f2, p2, g2, m2;
  const { state: y2 } = o2;
  if (La.RemoteCommunication("[initCommunicationLayer()] ", JSON.stringify(y2, null, 2)), e8 !== ac.SOCKET) throw new Error("Invalid communication protocol");
  y2.communicationLayer = new sc({ communicationLayerPreference: e8, otherPublicKey: t2, reconnect: n2, transports: y2.transports, communicationServerUrl: i2, context: y2.context, ecies: r2, logging: y2.logging, remote: o2 });
  let v2 = "undefined" != typeof document && document.URL || "", b2 = "undefined" != typeof document && document.title || "";
  (null === (s2 = y2.dappMetadata) || void 0 === s2 ? void 0 : s2.url) && (v2 = y2.dappMetadata.url), (null === (a2 = y2.dappMetadata) || void 0 === a2 ? void 0 : a2.name) && (b2 = y2.dappMetadata.name);
  const w2 = null !== (u2 = null !== (l2 = null === (c2 = y2.dappMetadata) || void 0 === c2 ? void 0 : c2.name) && void 0 !== l2 ? l2 : null === (d2 = y2.dappMetadata) || void 0 === d2 ? void 0 : d2.url) && void 0 !== u2 ? u2 : "N/A", E2 = "undefined" != typeof window && void 0 !== window.location && null !== (h2 = window.location.hostname) && void 0 !== h2 ? h2 : w2, C2 = { url: v2, title: b2, source: null === (f2 = y2.dappMetadata) || void 0 === f2 ? void 0 : f2.source, dappId: E2, icon: (null === (p2 = y2.dappMetadata) || void 0 === p2 ? void 0 : p2.iconUrl) || (null === (g2 = y2.dappMetadata) || void 0 === g2 ? void 0 : g2.base64Icon), platform: y2.platformType, apiVersion: Na.version, connector: null === (m2 = y2.dappMetadata) || void 0 === m2 ? void 0 : m2.connector };
  y2.originatorInfo = C2;
  const _2 = { [Ha.AUTHORIZED]: dc(o2), [Ha.MESSAGE]: mc(o2), [Ha.CHANNEL_PERSISTENCE]: bc(o2), [Ha.CLIENTS_CONNECTED]: hc(o2, e8), [Ha.KEYS_EXCHANGED]: gc(o2, e8), [Ha.SOCKET_DISCONNECTED]: vc(o2), [Ha.SOCKET_RECONNECT]: yc(o2), [Ha.CLIENTS_DISCONNECTED]: fc(o2), [Ha.KEY_INFO]: () => {
  }, [Ha.CHANNEL_CREATED]: uc(o2), [Ha.CLIENTS_WAITING]: pc(o2), [Ha.RPC_UPDATE]: (e9) => {
    o2.emit(Ha.RPC_UPDATE, e9);
  } };
  for (const [t3, n3] of Object.entries(_2)) try {
    y2.communicationLayer.on(t3, n3);
  } catch (e9) {
  }
}
function Ec(e8) {
  return Ot(this, arguments, void 0, function* ({ options: e9, instance: t2 }) {
    const { state: n2 } = t2;
    return La.RemoteCommunication(`[RemoteCommunication: disconnect()] channel=${n2.channelId}`, e9), new Promise((r2, i2) => {
      var o2, s2, a2, c2, l2, d2;
      (null == e9 ? void 0 : e9.terminate) ? (t2.state.ready && Pa({ id: null !== (o2 = t2.state.channelId) && void 0 !== o2 ? o2 : "", event: Wa.TERMINATED }, t2.state.communicationServerUrl).catch((e10) => {
      }), n2.ready = false, n2.paused = false, null === (s2 = n2.storageManager) || void 0 === s2 || s2.terminate(null !== (a2 = n2.channelId) && void 0 !== a2 ? a2 : ""), t2.state.terminated = true, e9.sendMessage ? (null === (c2 = n2.communicationLayer) || void 0 === c2 ? void 0 : c2.getKeyInfo().keysExchanged) && t2.state.communicationLayer && ec(t2.state.communicationLayer, { type: Va.TERMINATE }).then(() => {
        r2(true);
      }).catch((e10) => {
        i2(e10);
      }) : r2(true), n2.authorized = false, n2.relayPersistence = false, n2.channelId = ae(), e9.channelId = n2.channelId, n2.channelConfig = void 0, n2.originatorConnectStarted = false, null === (l2 = n2.communicationLayer) || void 0 === l2 || l2.disconnect(e9), t2.setConnectionStatus(Ua.TERMINATED)) : (null === (d2 = n2.communicationLayer) || void 0 === d2 || d2.disconnect(e9), t2.setConnectionStatus(Ua.DISCONNECTED), r2(true));
    });
  });
}
(ac || (ac = {})).SOCKET = "socket", function(e8) {
  e8.NonBrowser = "nodejs", e8.MetaMaskMobileWebview = "in-app-browser", e8.DesktopWeb = "web-desktop", e8.MobileWeb = "web-mobile", e8.ReactNative = "react-native";
}(cc || (cc = {}));
var Cc = class extends H.exports.EventEmitter2 {
  constructor(e8) {
    super(), this.state = { ready: false, authorized: false, isOriginator: false, terminated: false, protocolVersion: 1, paused: false, deeplinkProtocolAvailable: false, platformType: "metamask-mobile", analytics: false, reconnection: false, originatorInfoSent: false, communicationServerUrl: Da, context: "", persist: false, clientsConnected: false, sessionDuration: $a, originatorConnectStarted: false, debug: false, _connectionStatus: Ua.DISCONNECTED }, this._options = e8;
    const { platformType: t2, communicationLayerPreference: n2, otherPublicKey: r2, reconnect: i2, walletInfo: o2, dappMetadata: s2, protocolVersion: a2, transports: c2, context: l2, relayPersistence: d2, ecies: u2, analytics: h2 = false, storage: f2, sdkVersion: p2, communicationServerUrl: g2 = Da, logging: m2, autoConnect: y2 = { timeout: ja } } = e8;
    this.state.otherPublicKey = r2, this.state.dappMetadata = s2, this.state.walletInfo = o2, this.state.transports = c2, this.state.platformType = t2, this.state.analytics = h2, this.state.protocolVersion = null != a2 ? a2 : 1, this.state.isOriginator = !r2, this.state.relayPersistence = d2, this.state.communicationServerUrl = g2, this.state.context = l2, this.state.terminated = false, this.state.sdkVersion = p2, this.setMaxListeners(50), this.setConnectionStatus(Ua.DISCONNECTED), (null == f2 ? void 0 : f2.duration) && (this.state.sessionDuration = $a), this.state.storageOptions = f2, this.state.autoConnectOptions = y2, this.state.debug = true === (null == m2 ? void 0 : m2.remoteLayer), true === (null == m2 ? void 0 : m2.remoteLayer) && U.enable("RemoteCommunication:Layer"), true === (null == m2 ? void 0 : m2.serviceLayer) && U.enable("SocketService:Layer"), true === (null == m2 ? void 0 : m2.eciesLayer) && U.enable("ECIES:Layer"), true === (null == m2 ? void 0 : m2.keyExchangeLayer) && U.enable("KeyExchange:Layer"), this.state.logging = m2, (null == f2 ? void 0 : f2.storageManager) && (this.state.storageManager = f2.storageManager), La.RemoteCommunication(`[RemoteCommunication: constructor()] protocolVersion=${a2} relayPersistence=${d2} isOriginator=${this.state.isOriginator} communicationLayerPreference=${n2} otherPublicKey=${r2} reconnect=${i2}`), this.state.isOriginator || wc({ communicationLayerPreference: n2, otherPublicKey: r2, reconnect: i2, ecies: u2, communicationServerUrl: g2, instance: this }), this.emitServiceStatusEvent({ context: "constructor" });
  }
  initFromDappStorage() {
    return Ot(this, void 0, void 0, function* () {
      var e8;
      if (this.state.storageManager) {
        const t2 = yield this.state.storageManager.getPersistedChannelConfig({});
        t2 && (this.state.channelConfig = t2, this.state.channelId = t2.channelId, this.state.deeplinkProtocolAvailable = null !== (e8 = t2.deeplinkProtocolAvailable) && void 0 !== e8 && e8, t2.relayPersistence && (this.state.authorized = true, this.state.ready = true, this.setConnectionStatus(Ua.LINKED), yield this.connectToChannel({ channelId: t2.channelId })));
      }
      wc({ communicationLayerPreference: ac.SOCKET, otherPublicKey: this.state.otherPublicKey, reconnect: this._options.reconnect, ecies: this._options.ecies, communicationServerUrl: this.state.communicationServerUrl, instance: this });
    });
  }
  originatorSessionConnect() {
    return Ot(this, void 0, void 0, function* () {
      return yield function(e8) {
        return Ot(this, void 0, void 0, function* () {
          var t2;
          const { state: n2 } = e8;
          if (!n2.storageManager) return void La.RemoteCommunication("[RemoteCommunication: originatorSessionConnect()] no storage manager defined - skip");
          const r2 = yield n2.storageManager.getPersistedChannelConfig({});
          if (La.RemoteCommunication(`[RemoteCommunication: originatorSessionConnect()] autoStarted=${n2.originatorConnectStarted} channelConfig`, r2), null === (t2 = n2.communicationLayer) || void 0 === t2 ? void 0 : t2.isConnected()) return La.RemoteCommunication("[RemoteCommunication: originatorSessionConnect()] socket already connected - skip"), r2;
          if (r2) {
            if (r2.validUntil > Date.now()) return n2.channelConfig = r2, n2.originatorConnectStarted = true, n2.channelId = null == r2 ? void 0 : r2.channelId, n2.reconnection = true, r2;
            La.RemoteCommunication("[RemoteCommunication: autoConnect()] Session has expired");
          }
          n2.originatorConnectStarted = false;
        });
      }(this);
    });
  }
  generateChannelIdConnect() {
    return Ot(this, void 0, void 0, function* () {
      return function(e8) {
        return Ot(this, void 0, void 0, function* () {
          var t2, n2, r2, i2, o2, s2;
          if (!e8.communicationLayer) throw new Error("communication layer not initialized");
          if (e8.ready) throw new Error("Channel already connected");
          if (e8.channelId && (null === (t2 = e8.communicationLayer) || void 0 === t2 ? void 0 : t2.isConnected())) return e8.channelConfig = Object.assign(Object.assign({}, e8.channelConfig), { channelId: e8.channelId, validUntil: Date.now() + e8.sessionDuration }), null === (n2 = e8.storageManager) || void 0 === n2 || n2.persistChannelConfig(e8.channelConfig), { channelId: e8.channelId, privKey: null === (i2 = null === (r2 = e8.communicationLayer) || void 0 === r2 ? void 0 : r2.getKeyInfo()) || void 0 === i2 ? void 0 : i2.ecies.private, pubKey: null === (s2 = null === (o2 = e8.communicationLayer) || void 0 === o2 ? void 0 : o2.getKeyInfo()) || void 0 === s2 ? void 0 : s2.ecies.public };
          La.RemoteCommunication("[RemoteCommunication: generateChannelId()]");
          const a2 = yield e8.communicationLayer.createChannel();
          La.RemoteCommunication("[RemoteCommunication: generateChannelId()] channel created", a2);
          const c2 = Object.assign(Object.assign({}, e8.channelConfig), { channelId: a2.channelId, localKey: a2.privKey, validUntil: Date.now() + e8.sessionDuration });
          return e8.channelId = a2.channelId, e8.channelConfig = c2, { channelId: e8.channelId, pubKey: a2.pubKey, privKey: a2.privKey };
        });
      }(this.state);
    });
  }
  clean() {
    return Fa(this.state);
  }
  connectToChannel({ channelId: e8, withKeyExchange: t2, authorized: n2 }) {
    return function(e9) {
      return Ot(this, arguments, void 0, function* ({ channelId: e10, withKeyExchange: t3, authorized: n3, state: r2 }) {
        var i2, o2, s2;
        if (!Y(e10)) throw La.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${r2.context} invalid channel channelId=${e10}`), new Error(`Invalid channel ${e10}`);
        if (La.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${r2.context} channelId=${e10} withKeyExchange=${t3}`), null === (i2 = r2.communicationLayer) || void 0 === i2 ? void 0 : i2.isConnected()) return void La.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${r2.context} already connected - interrupt connection.`);
        r2.channelId = e10, yield null === (o2 = r2.communicationLayer) || void 0 === o2 ? void 0 : o2.connectToChannel({ channelId: e10, authorized: n3, withKeyExchange: t3 });
        const a2 = Object.assign(Object.assign({}, r2.channelConfig), { channelId: e10, validUntil: Date.now() + r2.sessionDuration });
        r2.channelConfig = a2, null === (s2 = r2.storageManager) || void 0 === s2 || s2.persistChannelConfig(a2);
      });
    }({ channelId: e8, authorized: n2, withKeyExchange: t2, state: this.state });
  }
  sendMessage(e8) {
    return function(e9, t2) {
      return Ot(this, void 0, void 0, function* () {
        var n2, r2;
        const { state: i2 } = e9;
        La.RemoteCommunication(`[RemoteCommunication: sendMessage()] context=${i2.context} paused=${i2.paused} ready=${i2.ready} relayPersistence=${i2.relayPersistence} authorized=${i2.authorized} socket=${null === (n2 = i2.communicationLayer) || void 0 === n2 ? void 0 : n2.isConnected()} clientsConnected=${i2.clientsConnected} status=${i2._connectionStatus}`, t2), i2.relayPersistence || i2.ready && (null === (r2 = i2.communicationLayer) || void 0 === r2 ? void 0 : r2.isConnected()) && i2.clientsConnected || (La.RemoteCommunication(`[RemoteCommunication: sendMessage()] context=${i2.context}  SKIP message waiting for MM mobile readiness.`), yield new Promise((t3) => {
          e9.once(Ha.CLIENTS_READY, t3);
        }), La.RemoteCommunication(`[RemoteCommunication: sendMessage()] context=${i2.context}  AFTER SKIP / READY -- sending pending message`));
        try {
          const n3 = yield function(e10, t3) {
            return Ot(this, void 0, void 0, function* () {
              return new Promise((n4) => {
                var r3;
                const { state: i3 } = e10;
                La.RemoteCommunication(`[RemoteCommunication: handleAuthorization()] context=${i3.context} ready=${i3.ready} authorized=${i3.authorized} method=${t3.method}`), !i3.isOriginator || i3.authorized || i3.relayPersistence ? null === (r3 = i3.communicationLayer) || void 0 === r3 || r3.sendMessage(t3).then((e11) => {
                  n4(e11);
                }).catch((e11) => {
                  n4(false);
                }) : e10.once(Ha.AUTHORIZED, () => {
                  var e11;
                  La.RemoteCommunication(`[RemoteCommunication: handleAuthorization()] context=${i3.context}  AFTER SKIP / AUTHORIZED -- sending pending message`), null === (e11 = i3.communicationLayer) || void 0 === e11 || e11.sendMessage(t3).then((e12) => {
                    n4(e12);
                  }).catch((e12) => {
                    n4(false);
                  });
                });
              });
            });
          }(e9, t2);
          return n3;
        } catch (e10) {
          throw e10;
        }
      });
    }(this, e8);
  }
  testStorage() {
    return Ot(this, void 0, void 0, function* () {
      return function(e8) {
        return Ot(this, void 0, void 0, function* () {
          var t2;
          const n2 = yield null === (t2 = e8.storageManager) || void 0 === t2 ? void 0 : t2.getPersistedChannelConfig();
          La.RemoteCommunication("[RemoteCommunication: testStorage()] res", n2);
        });
      }(this.state);
    });
  }
  hasDeeplinkProtocol() {
    return this.state.deeplinkProtocolAvailable;
  }
  getChannelConfig() {
    return this.state.channelConfig;
  }
  isReady() {
    return this.state.ready;
  }
  isConnected() {
    var e8;
    return null === (e8 = this.state.communicationLayer) || void 0 === e8 ? void 0 : e8.isConnected();
  }
  isAuthorized() {
    return this.state.authorized;
  }
  isPaused() {
    return this.state.paused;
  }
  getCommunicationLayer() {
    return this.state.communicationLayer;
  }
  ping() {
    return Ot(this, void 0, void 0, function* () {
      var e8;
      La.RemoteCommunication(`[RemoteCommunication: ping()] channel=${this.state.channelId}`), yield null === (e8 = this.state.communicationLayer) || void 0 === e8 ? void 0 : e8.ping();
    });
  }
  testLogger() {
    La.RemoteCommunication(`testLogger() channel=${this.state.channelId}`), La.SocketService(`testLogger() channel=${this.state.channelId}`), La.Ecies(`testLogger() channel=${this.state.channelId}`), La.KeyExchange(`testLogger() channel=${this.state.channelId}`);
  }
  keyCheck() {
    var e8;
    La.RemoteCommunication(`[RemoteCommunication: keyCheck()] channel=${this.state.channelId}`), null === (e8 = this.state.communicationLayer) || void 0 === e8 || e8.keyCheck();
  }
  setConnectionStatus(e8) {
    this.state._connectionStatus !== e8 && (this.state._connectionStatus = e8, this.emit(Ha.CONNECTION_STATUS, e8), this.emitServiceStatusEvent({ context: "setConnectionStatus" }));
  }
  emitServiceStatusEvent(e8 = {}) {
    this.emit(Ha.SERVICE_STATUS, this.getServiceStatus());
  }
  getConnectionStatus() {
    return this.state._connectionStatus;
  }
  getServiceStatus() {
    return { originatorInfo: this.state.originatorInfo, keyInfo: this.getKeyInfo(), connectionStatus: this.state._connectionStatus, channelConfig: this.state.channelConfig, channelId: this.state.channelId };
  }
  getKeyInfo() {
    var e8;
    return null === (e8 = this.state.communicationLayer) || void 0 === e8 ? void 0 : e8.getKeyInfo();
  }
  resetKeys() {
    var e8;
    null === (e8 = this.state.communicationLayer) || void 0 === e8 || e8.resetKeys();
  }
  setOtherPublicKey(e8) {
    var t2;
    const n2 = null === (t2 = this.state.communicationLayer) || void 0 === t2 ? void 0 : t2.getKeyExchange();
    if (!n2) throw new Error("KeyExchange is not initialized.");
    n2.getOtherPublicKey() !== e8 && n2.setOtherPublicKey(e8);
  }
  pause() {
    return Ot(this, void 0, void 0, function* () {
      var e8;
      La.RemoteCommunication(`[RemoteCommunication: pause()] channel=${this.state.channelId}`), yield null === (e8 = this.state.communicationLayer) || void 0 === e8 ? void 0 : e8.pause(), this.setConnectionStatus(Ua.PAUSED);
    });
  }
  getVersion() {
    return Na.version;
  }
  hasRelayPersistence() {
    var e8;
    return null !== (e8 = this.state.relayPersistence) && void 0 !== e8 && e8;
  }
  resume() {
    return Ot(this, void 0, void 0, function* () {
      return function(e8) {
        return Ot(this, void 0, void 0, function* () {
          var t2;
          const { state: n2 } = e8;
          La.RemoteCommunication(`[RemoteCommunication: resume()] channel=${n2.channelId}`), yield null === (t2 = n2.communicationLayer) || void 0 === t2 ? void 0 : t2.resume(), e8.setConnectionStatus(Ua.LINKED);
        });
      }(this);
    });
  }
  encrypt(e8) {
    var t2, n2, r2;
    const i2 = null === (t2 = this.state.communicationLayer) || void 0 === t2 ? void 0 : t2.getKeyExchange(), o2 = null == i2 ? void 0 : i2.getOtherPublicKey();
    if (!o2) throw new Error("KeyExchange not completed");
    return null === (r2 = null === (n2 = this.state.communicationLayer) || void 0 === n2 ? void 0 : n2.state.eciesInstance) || void 0 === r2 ? void 0 : r2.encrypt(e8, o2);
  }
  decrypt(e8) {
    var t2, n2, r2;
    if (!(null === (t2 = this.state.communicationLayer) || void 0 === t2 ? void 0 : t2.state.eciesInstance)) throw new Error("ECIES instance is not initialized");
    return null === (r2 = null === (n2 = this.state.communicationLayer) || void 0 === n2 ? void 0 : n2.state.eciesInstance) || void 0 === r2 ? void 0 : r2.decrypt(e8);
  }
  getChannelId() {
    return this.state.channelId;
  }
  getRPCMethodTracker() {
    var e8;
    return null === (e8 = this.state.communicationLayer) || void 0 === e8 ? void 0 : e8.getRPCMethodTracker();
  }
  reject({ channelId: e8 }) {
    return function(e9) {
      return Ot(this, arguments, void 0, function* ({ channelId: e10, state: t2 }) {
        var n2, r2, i2;
        if (!Y(e10)) throw La.RemoteCommunication(`[RemoteCommunication: connectToChannel()] context=${t2.context} invalid channel channelId=${e10}`), new Error(`Invalid channel ${e10}`);
        if (t2.isOriginator) return void La.RemoteCommunication(`[RemoteCommunication: reject()] context=${t2.context} isOriginator=${t2.isOriginator} channelId=${e10}`);
        const { socket: o2 } = null !== (r2 = null === (n2 = t2.communicationLayer) || void 0 === n2 ? void 0 : n2.state) && void 0 !== r2 ? r2 : {};
        (null == o2 ? void 0 : o2.connected) || (La.RemoteCommunication(`[RemoteCommunication: reject()] context=${t2.context} socket already connected`), null == o2 || o2.connect()), Pa(Object.assign(Object.assign({ id: e10, event: Wa.REJECTED }, t2.originatorInfo), { sdkVersion: t2.sdkVersion, commLayerVersion: Na.version, walletVersion: null === (i2 = t2.walletInfo) || void 0 === i2 ? void 0 : i2.version }), t2.communicationServerUrl).catch((e11) => {
        }), yield new Promise((n3, r3) => {
          null == o2 || o2.emit(Ha.REJECTED, { channelId: e10 }, (e11, i3) => {
            La.RemoteCommunication(`[RemoteCommunication: reject()] context=${t2.context} socket=${null == o2 ? void 0 : o2.id}`, { error: e11, response: i3 }), e11 ? r3(e11) : n3(i3);
          });
        });
      });
    }({ channelId: e8, state: this.state });
  }
  disconnect(e8) {
    return Ot(this, void 0, void 0, function* () {
      return Ec({ options: e8, instance: this });
    });
  }
};
!function(e8) {
  e8.RENEW = "renew", e8.LINK = "link";
}(lc || (lc = {}));
var _c = "ERC721";
var Sc = "ERC1155";
var kc = { errors: { disconnected: () => "MetaMask: Disconnected from chain. Attempting to connect.", permanentlyDisconnected: () => "MetaMask: Disconnected from MetaMask background. Page reload required.", sendSiteMetadata: () => "MetaMask: Failed to send site metadata. This is an internal error, please report this bug.", unsupportedSync: (e8) => `MetaMask: The MetaMask Ethereum provider does not support synchronous methods like ${e8} without a callback parameter.`, invalidDuplexStream: () => "Must provide a Node.js-style duplex stream.", invalidNetworkParams: () => "MetaMask: Received invalid network parameters. Please report this bug.", invalidRequestArgs: () => "Expected a single, non-array, object argument.", invalidRequestMethod: () => "'args.method' must be a non-empty string.", invalidRequestParams: () => "'args.params' must be an object or array if provided.", invalidLoggerObject: () => "'args.logger' must be an object if provided.", invalidLoggerMethod: (e8) => `'args.logger' must include required method '${e8}'.` }, info: { connected: (e8) => `MetaMask: Connected to chain with ID "${e8}".` }, warnings: { chainIdDeprecation: "MetaMask: 'ethereum.chainId' is deprecated and may be removed in the future. Please use the 'eth_chainId' RPC method instead.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23", networkVersionDeprecation: "MetaMask: 'ethereum.networkVersion' is deprecated and may be removed in the future. Please use the 'net_version' RPC method instead.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23", selectedAddressDeprecation: "MetaMask: 'ethereum.selectedAddress' is deprecated and may be removed in the future. Please use the 'eth_accounts' RPC method instead.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/discussions/23", enableDeprecation: "MetaMask: 'ethereum.enable()' is deprecated and may be removed in the future. Please use the 'eth_requestAccounts' RPC method instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1102", sendDeprecation: "MetaMask: 'ethereum.send(...)' is deprecated and may be removed in the future. Please use 'ethereum.sendAsync(...)' or 'ethereum.request(...)' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193", events: { close: "MetaMask: The event 'close' is deprecated and may be removed in the future. Please use 'disconnect' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#disconnect", data: "MetaMask: The event 'data' is deprecated and will be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message", networkChanged: "MetaMask: The event 'networkChanged' is deprecated and may be removed in the future. Use 'chainChanged' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#chainchanged", notification: "MetaMask: The event 'notification' is deprecated and may be removed in the future. Use 'message' instead.\nFor more information, see: https://eips.ethereum.org/EIPS/eip-1193#message" }, rpc: { ethDecryptDeprecation: "MetaMask: The RPC method 'eth_decrypt' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686", ethGetEncryptionPublicKeyDeprecation: "MetaMask: The RPC method 'eth_getEncryptionPublicKey' is deprecated and may be removed in the future.\nFor more information, see: https://medium.com/metamask/metamask-api-method-deprecation-2b0564a84686", walletWatchAssetNFTExperimental: "MetaMask: The RPC method 'wallet_watchAsset' is experimental for ERC721/ERC1155 assets and may change in the future.\nFor more information, see: https://github.com/MetaMask/metamask-improvement-proposals/blob/main/MIPs/mip-1.md and https://github.com/MetaMask/metamask-improvement-proposals/blob/main/PROCESS-GUIDE.md#proposal-lifecycle" }, experimentalMethods: "MetaMask: 'ethereum._metamask' exposes non-standard, experimental methods. They may be removed or changed without warning." } };
function xc(e8) {
  const t2 = { ethDecryptDeprecation: false, ethGetEncryptionPublicKeyDeprecation: false, walletWatchAssetNFTExperimental: false };
  return (n2, r2, i2) => {
    var _a2;
    t2.ethDecryptDeprecation || "eth_decrypt" !== n2.method ? t2.ethGetEncryptionPublicKeyDeprecation || "eth_getEncryptionPublicKey" !== n2.method ? !t2.walletWatchAssetNFTExperimental && "wallet_watchAsset" === n2.method && [_c, Sc].includes(((_a2 = n2.params) == null ? void 0 : _a2.type) || "") && (e8.warn(kc.warnings.rpc.walletWatchAssetNFTExperimental), t2.walletWatchAssetNFTExperimental = true) : (e8.warn(kc.warnings.rpc.ethGetEncryptionPublicKeyDeprecation), t2.ethGetEncryptionPublicKeyDeprecation = true) : (e8.warn(kc.warnings.rpc.ethDecryptDeprecation), t2.ethDecryptDeprecation = true), i2();
  };
}
var Ac = 4294967295;
var Mc = Math.floor(Math.random() * Ac);
var Lc = (e8, t2, n2) => {
  if (!t2.has(e8)) throw TypeError("Cannot " + n2);
};
var Tc = (e8, t2, n2) => (Lc(e8, t2, "read from private field"), n2 ? n2.call(e8) : t2.get(e8));
var Oc = (e8, t2, n2) => {
  if (t2.has(e8)) throw TypeError("Cannot add the same private member more than once");
  t2 instanceof WeakSet ? t2.add(e8) : t2.set(e8, n2);
};
var Rc = (e8, t2, n2, r2) => (Lc(e8, t2, "write to private field"), t2.set(e8, n2), n2);
var Pc = (e8, t2, n2) => (Lc(e8, t2, "access private method"), n2);
var Ic = -32600;
var Nc = -32603;
var Dc = { "-32700": { standard: "JSON RPC 2.0", message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text." }, "-32600": { standard: "JSON RPC 2.0", message: "The JSON sent is not a valid Request object." }, "-32601": { standard: "JSON RPC 2.0", message: "The method does not exist / is not available." }, "-32602": { standard: "JSON RPC 2.0", message: "Invalid method parameter(s)." }, "-32603": { standard: "JSON RPC 2.0", message: "Internal JSON-RPC error." }, "-32000": { standard: "EIP-1474", message: "Invalid input." }, "-32001": { standard: "EIP-1474", message: "Resource not found." }, "-32002": { standard: "EIP-1474", message: "Resource unavailable." }, "-32003": { standard: "EIP-1474", message: "Transaction rejected." }, "-32004": { standard: "EIP-1474", message: "Method not supported." }, "-32005": { standard: "EIP-1474", message: "Request limit exceeded." }, 4001: { standard: "EIP-1193", message: "User rejected the request." }, 4100: { standard: "EIP-1193", message: "The requested account and/or method has not been authorized by the user." }, 4200: { standard: "EIP-1193", message: "The requested method is not supported by this Ethereum provider." }, 4900: { standard: "EIP-1193", message: "The provider is disconnected from all chains." }, 4901: { standard: "EIP-1193", message: "The provider is disconnected from the specified chain." } };
function Bc(e8) {
  return Boolean(e8) && "object" == typeof e8 && !Array.isArray(e8);
}
var $c = (e8, t2) => Object.hasOwnProperty.call(e8, t2);
var jc = class extends TypeError {
  constructor(e8, t2) {
    let n2;
    const { message: r2, explanation: i2, ...o2 } = e8, { path: s2 } = e8, a2 = 0 === s2.length ? r2 : `At path: ${s2.join(".")} -- ${r2}`;
    super(i2 ?? a2), null != i2 && (this.cause = a2), Object.assign(this, o2), this.name = this.constructor.name, this.failures = () => n2 ?? (n2 = [e8, ...t2()]);
  }
};
function Kc(e8) {
  return "object" == typeof e8 && null != e8;
}
function Fc(e8) {
  return "symbol" == typeof e8 ? e8.toString() : "string" == typeof e8 ? JSON.stringify(e8) : `${e8}`;
}
function Uc(e8, t2, n2, r2) {
  if (true === e8) return;
  false === e8 ? e8 = {} : "string" == typeof e8 && (e8 = { message: e8 });
  const { path: i2, branch: o2 } = t2, { type: s2 } = n2, { refinement: a2, message: c2 = `Expected a value of type \`${s2}\`${a2 ? ` with refinement \`${a2}\`` : ""}, but received: \`${Fc(r2)}\`` } = e8;
  return { value: r2, type: s2, refinement: a2, key: i2[i2.length - 1], path: i2, branch: o2, ...e8, message: c2 };
}
function* Hc(e8, t2, n2, r2) {
  (function(e9) {
    return Kc(e9) && "function" == typeof e9[Symbol.iterator];
  })(e8) || (e8 = [e8]);
  for (const i2 of e8) {
    const e9 = Uc(i2, t2, n2, r2);
    e9 && (yield e9);
  }
}
function* zc(e8, t2, n2 = {}) {
  const { path: r2 = [], branch: i2 = [e8], coerce: o2 = false, mask: s2 = false } = n2, a2 = { path: r2, branch: i2 };
  if (o2 && (e8 = t2.coercer(e8, a2), s2 && "type" !== t2.type && Kc(t2.schema) && Kc(e8) && !Array.isArray(e8))) for (const n3 in e8) void 0 === t2.schema[n3] && delete e8[n3];
  let c2 = "valid";
  for (const r3 of t2.validator(e8, a2)) r3.explanation = n2.message, c2 = "not_valid", yield [r3, void 0];
  for (let [l2, d2, u2] of t2.entries(e8, a2)) {
    const t3 = zc(d2, u2, { path: void 0 === l2 ? r2 : [...r2, l2], branch: void 0 === l2 ? i2 : [...i2, d2], coerce: o2, mask: s2, message: n2.message });
    for (const n3 of t3) n3[0] ? (c2 = null != n3[0].refinement ? "not_refined" : "not_valid", yield [n3[0], void 0]) : o2 && (d2 = n3[1], void 0 === l2 ? e8 = d2 : e8 instanceof Map ? e8.set(l2, d2) : e8 instanceof Set ? e8.add(d2) : Kc(e8) && (void 0 !== d2 || l2 in e8) && (e8[l2] = d2));
  }
  if ("not_valid" !== c2) for (const r3 of t2.refiner(e8, a2)) r3.explanation = n2.message, c2 = "not_refined", yield [r3, void 0];
  "valid" === c2 && (yield [void 0, e8]);
}
var qc = class {
  constructor(e8) {
    const { type: t2, schema: n2, validator: r2, refiner: i2, coercer: o2 = (e9) => e9, entries: s2 = function* () {
    } } = e8;
    this.type = t2, this.schema = n2, this.entries = s2, this.coercer = o2, this.validator = r2 ? (e9, t3) => Hc(r2(e9, t3), t3, this, e9) : () => [], this.refiner = i2 ? (e9, t3) => Hc(i2(e9, t3), t3, this, e9) : () => [];
  }
  assert(e8, t2) {
    return Vc(e8, this, t2);
  }
  create(e8, t2) {
    return Wc(e8, this, t2);
  }
  is(e8) {
    return Gc(e8, this);
  }
  mask(e8, t2) {
    return function(e9, t3, n2) {
      const r2 = Yc(e9, t3, { coerce: true, mask: true, message: n2 });
      if (r2[0]) throw r2[0];
      return r2[1];
    }(e8, this, t2);
  }
  validate(e8, t2 = {}) {
    return Yc(e8, this, t2);
  }
};
function Vc(e8, t2, n2) {
  const r2 = Yc(e8, t2, { message: n2 });
  if (r2[0]) throw r2[0];
}
function Wc(e8, t2, n2) {
  const r2 = Yc(e8, t2, { coerce: true, message: n2 });
  if (r2[0]) throw r2[0];
  return r2[1];
}
function Gc(e8, t2) {
  return !Yc(e8, t2)[0];
}
function Yc(e8, t2, n2 = {}) {
  const r2 = zc(e8, t2, n2), i2 = function(e9) {
    const { done: t3, value: n3 } = e9.next();
    return t3 ? void 0 : n3;
  }(r2);
  if (i2[0]) {
    return [new jc(i2[0], function* () {
      for (const e9 of r2) e9[0] && (yield e9[0]);
    }), void 0];
  }
  return [void 0, i2[1]];
}
function Zc(e8, t2) {
  return new qc({ type: e8, schema: null, validator: t2 });
}
function Jc(e8) {
  let t2;
  return new qc({ type: "lazy", schema: null, *entries(n2, r2) {
    t2 ?? (t2 = e8()), yield* t2.entries(n2, r2);
  }, validator: (n2, r2) => (t2 ?? (t2 = e8()), t2.validator(n2, r2)), coercer: (n2, r2) => (t2 ?? (t2 = e8()), t2.coercer(n2, r2)), refiner: (n2, r2) => (t2 ?? (t2 = e8()), t2.refiner(n2, r2)) });
}
function Xc(e8) {
  return new qc({ type: "array", schema: e8, *entries(t2) {
    if (e8 && Array.isArray(t2)) for (const [n2, r2] of t2.entries()) yield [n2, r2, e8];
  }, coercer: (e9) => Array.isArray(e9) ? e9.slice() : e9, validator: (e9) => Array.isArray(e9) || `Expected an array value, but received: ${Fc(e9)}` });
}
function Qc(e8) {
  const t2 = Fc(e8), n2 = typeof e8;
  return new qc({ type: "literal", schema: "string" === n2 || "number" === n2 || "boolean" === n2 ? e8 : null, validator: (n3) => n3 === e8 || `Expected the literal \`${t2}\`, but received: ${Fc(n3)}` });
}
function el() {
  return Zc("number", (e8) => "number" == typeof e8 && !isNaN(e8) || `Expected a number, but received: ${Fc(e8)}`);
}
function tl(e8) {
  const t2 = e8 ? Object.keys(e8) : [], n2 = Zc("never", () => false);
  return new qc({ type: "object", schema: e8 || null, *entries(r2) {
    if (e8 && Kc(r2)) {
      const i2 = new Set(Object.keys(r2));
      for (const n3 of t2) i2.delete(n3), yield [n3, r2[n3], e8[n3]];
      for (const e9 of i2) yield [e9, r2[e9], n2];
    }
  }, validator: (e9) => Kc(e9) || `Expected an object, but received: ${Fc(e9)}`, coercer: (e9) => Kc(e9) ? { ...e9 } : e9 });
}
function nl(e8) {
  return new qc({ ...e8, validator: (t2, n2) => void 0 === t2 || e8.validator(t2, n2), refiner: (t2, n2) => void 0 === t2 || e8.refiner(t2, n2) });
}
function rl(e8, t2) {
  return new qc({ type: "record", schema: null, *entries(n2) {
    if (Kc(n2)) for (const r2 in n2) {
      const i2 = n2[r2];
      yield [r2, r2, e8], yield [r2, i2, t2];
    }
  }, validator: (e9) => Kc(e9) || `Expected an object, but received: ${Fc(e9)}` });
}
function il() {
  return Zc("string", (e8) => "string" == typeof e8 || `Expected a string, but received: ${Fc(e8)}`);
}
function ol(e8) {
  const t2 = e8.map((e9) => e9.type).join(" | ");
  return new qc({ type: "union", schema: null, coercer(t3) {
    for (const n2 of e8) {
      const [e9, r2] = n2.validate(t3, { coerce: true });
      if (!e9) return r2;
    }
    return t3;
  }, validator(n2, r2) {
    const i2 = [];
    for (const t3 of e8) {
      const [...e9] = zc(n2, t3, r2), [o2] = e9;
      if (!o2[0]) return [];
      for (const [t4] of e9) t4 && i2.push(t4);
    }
    return [`Expected the value to satisfy a union of \`${t2}\`, but received: ${Fc(n2)}`, ...i2];
  } });
}
var sl = class extends Error {
  constructor(e8) {
    super(e8.message), this.code = "ERR_ASSERTION";
  }
};
function al() {
  throw new Error("setTimeout has not been defined");
}
function cl() {
  throw new Error("clearTimeout has not been defined");
}
var ll = al;
var dl = cl;
function ul(e8) {
  if (ll === setTimeout) return setTimeout(e8, 0);
  if ((ll === al || !ll) && setTimeout) return ll = setTimeout, setTimeout(e8, 0);
  try {
    return ll(e8, 0);
  } catch (t2) {
    try {
      return ll.call(null, e8, 0);
    } catch (t3) {
      return ll.call(this, e8, 0);
    }
  }
}
"function" == typeof Rt.setTimeout && (ll = setTimeout), "function" == typeof Rt.clearTimeout && (dl = clearTimeout);
var hl;
var fl = [];
var pl = false;
var gl = -1;
function ml() {
  pl && hl && (pl = false, hl.length ? fl = hl.concat(fl) : gl = -1, fl.length && yl());
}
function yl() {
  if (!pl) {
    var e8 = ul(ml);
    pl = true;
    for (var t2 = fl.length; t2; ) {
      for (hl = fl, fl = []; ++gl < t2; ) hl && hl[gl].run();
      gl = -1, t2 = fl.length;
    }
    hl = null, pl = false, function(e9) {
      if (dl === clearTimeout) return clearTimeout(e9);
      if ((dl === cl || !dl) && clearTimeout) return dl = clearTimeout, clearTimeout(e9);
      try {
        return dl(e9);
      } catch (t3) {
        try {
          return dl.call(null, e9);
        } catch (t4) {
          return dl.call(this, e9);
        }
      }
    }(e8);
  }
}
function vl(e8, t2) {
  this.fun = e8, this.array = t2;
}
function bl() {
}
vl.prototype.run = function() {
  this.fun.apply(null, this.array);
};
var wl = bl;
var El = bl;
var Cl = bl;
var _l = bl;
var Sl = bl;
var kl = bl;
var xl = bl;
var Al = Rt.performance || {};
var Ml = Al.now || Al.mozNow || Al.msNow || Al.oNow || Al.webkitNow || function() {
  return (/* @__PURE__ */ new Date()).getTime();
};
var Ll = /* @__PURE__ */ new Date();
var Tl = { nextTick: function(e8) {
  var t2 = new Array(arguments.length - 1);
  if (arguments.length > 1) for (var n2 = 1; n2 < arguments.length; n2++) t2[n2 - 1] = arguments[n2];
  fl.push(new vl(e8, t2)), 1 !== fl.length || pl || ul(yl);
}, title: "browser", browser: true, env: {}, argv: [], version: "", versions: {}, on: wl, addListener: El, once: Cl, off: _l, removeListener: Sl, removeAllListeners: kl, emit: xl, binding: function(e8) {
  throw new Error("process.binding is not supported");
}, cwd: function() {
  return "/";
}, chdir: function(e8) {
  throw new Error("process.chdir is not supported");
}, umask: function() {
  return 0;
}, hrtime: function(e8) {
  var t2 = 1e-3 * Ml.call(Al), n2 = Math.floor(t2), r2 = Math.floor(t2 % 1 * 1e9);
  return e8 && (n2 -= e8[0], (r2 -= e8[1]) < 0 && (n2--, r2 += 1e9)), [n2, r2];
}, platform: "browser", release: {}, config: {}, uptime: function() {
  return (/* @__PURE__ */ new Date() - Ll) / 1e3;
} };
var Ol = (e8) => tl(e8);
function Rl({ path: e8, branch: t2 }) {
  const n2 = e8[e8.length - 1];
  return $c(t2[t2.length - 2], n2);
}
function Pl(e8) {
  return new qc({ ...e8, type: `optional ${e8.type}`, validator: (t2, n2) => !Rl(n2) || e8.validator(t2, n2), refiner: (t2, n2) => !Rl(n2) || e8.refiner(t2, n2) });
}
var Il;
var Nl;
var Dl;
var Bl = ol([Qc(null), Zc("boolean", (e8) => "boolean" == typeof e8), Zc("finite number", (e8) => Gc(e8, el()) && Number.isFinite(e8)), il(), Xc(Jc(() => Bl)), rl(il(), Jc(() => Bl))]);
var $l = (Il = Bl, Nl = Zc("any", () => true), Dl = (e8) => (function(e9, t2, n2 = "Assertion failed", r2 = sl) {
  try {
    Vc(e9, t2);
  } catch (e10) {
    throw function(e11, t3) {
      var _a2, _b;
      return n3 = e11, Boolean("string" == typeof ((_b = (_a2 = n3 == null ? void 0 : n3.prototype) == null ? void 0 : _a2.constructor) == null ? void 0 : _b.name)) ? new e11({ message: t3 }) : e11({ message: t3 });
      var n3;
    }(r2, `${n2}: ${function(e11) {
      return function(e12) {
        return function(e13) {
          return "object" == typeof e13 && null !== e13 && "message" in e13;
        }(e12) && "string" == typeof e12.message ? e12.message : null == e12 ? "" : String(e12);
      }(e11).replace(/\.$/u, "");
    }(e10)}.`);
  }
}(e8, Bl), JSON.parse(JSON.stringify(e8, (e9, t2) => {
  if ("__proto__" !== e9 && "constructor" !== e9) return t2;
}))), new qc({ ...Il, coercer: (e8, t2) => Gc(e8, Nl) ? Il.coercer(Dl(e8), t2) : Il.coercer(e8, t2) }));
function jl(e8) {
  try {
    return function(e9) {
      Wc(e9, $l);
    }(e8), true;
  } catch {
    return false;
  }
}
var Kl = Qc("2.0");
var Fl = function(e8) {
  return new qc({ ...e8, validator: (t2, n2) => null === t2 || e8.validator(t2, n2), refiner: (t2, n2) => null === t2 || e8.refiner(t2, n2) });
}(ol([el(), il()]));
var Ul = Ol({ code: Zc("integer", (e8) => "number" == typeof e8 && !isNaN(e8) && Number.isInteger(e8) || `Expected an integer, but received: ${Fc(e8)}`), message: il(), data: Pl($l), stack: Pl(il()) });
var Hl = ol([rl(il(), $l), Xc($l)]);
var zl = Ol({ id: Fl, jsonrpc: Kl, method: il(), params: Pl(Hl) });
var ql = Ol({ jsonrpc: Kl, method: il(), params: Pl(Hl) });
function Vl(e8) {
  return Gc(e8, zl);
}
function Wl(e8) {
  return Gc(e8, Ul);
}
tl({ id: Fl, jsonrpc: Kl, result: nl(Zc("unknown", () => true)), error: nl(Ul) }), ol([Ol({ id: Fl, jsonrpc: Kl, result: $l }), Ol({ id: Fl, jsonrpc: Kl, error: Ul })]);
var Gl = "Unspecified error message. This is a bug, please report it.";
var Yl = { code: Nc, message: Jl(Nc) };
var Zl = "Unspecified server error.";
function Jl(e8, t2 = Gl) {
  if (function(e9) {
    return Number.isInteger(e9);
  }(e8)) {
    const t3 = e8.toString();
    if ($c(Dc, t3)) return Dc[t3].message;
    if (function(e9) {
      return e9 >= -32099 && e9 <= -32e3;
    }(e8)) return Zl;
  }
  return t2;
}
function Xl(e8, { fallbackError: t2 = Yl, shouldIncludeStack: n2 = true } = {}) {
  if (!Wl(t2)) throw new Error("Must provide fallback error with integer number code and string message.");
  const r2 = function(e9, t3) {
    if (e9 && "object" == typeof e9 && "serialize" in e9 && "function" == typeof e9.serialize) return e9.serialize();
    if (Wl(e9)) return e9;
    return { ...t3, data: { cause: Ql(e9) } };
  }(e8, t2);
  return n2 || delete r2.stack, r2;
}
function Ql(e8) {
  return Array.isArray(e8) ? e8.map((e9) => jl(e9) ? e9 : Bc(e9) ? ed(e9) : null) : Bc(e8) ? ed(e8) : jl(e8) ? e8 : null;
}
function ed(e8) {
  return Object.getOwnPropertyNames(e8).reduce((t2, n2) => {
    const r2 = e8[n2];
    return jl(r2) && (t2[n2] = r2), t2;
  }, {});
}
var td = ad;
ad.default = ad, ad.stable = ud, ad.stableStringify = ud;
var nd = "[...]";
var rd = "[Circular]";
var id = [];
var od = [];
function sd() {
  return { depthLimit: Number.MAX_SAFE_INTEGER, edgesLimit: Number.MAX_SAFE_INTEGER };
}
function ad(e8, t2, n2, r2) {
  var i2;
  void 0 === r2 && (r2 = sd()), ld(e8, "", 0, [], void 0, 0, r2);
  try {
    i2 = 0 === od.length ? JSON.stringify(e8, t2, n2) : JSON.stringify(e8, fd(t2), n2);
  } catch (e9) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; 0 !== id.length; ) {
      var o2 = id.pop();
      4 === o2.length ? Object.defineProperty(o2[0], o2[1], o2[3]) : o2[0][o2[1]] = o2[2];
    }
  }
  return i2;
}
function cd(e8, t2, n2, r2) {
  var i2 = Object.getOwnPropertyDescriptor(r2, n2);
  void 0 !== i2.get ? i2.configurable ? (Object.defineProperty(r2, n2, { value: e8 }), id.push([r2, n2, t2, i2])) : od.push([t2, n2, e8]) : (r2[n2] = e8, id.push([r2, n2, t2]));
}
function ld(e8, t2, n2, r2, i2, o2, s2) {
  var a2;
  if (o2 += 1, "object" == typeof e8 && null !== e8) {
    for (a2 = 0; a2 < r2.length; a2++) if (r2[a2] === e8) return void cd(rd, e8, t2, i2);
    if (void 0 !== s2.depthLimit && o2 > s2.depthLimit) return void cd(nd, e8, t2, i2);
    if (void 0 !== s2.edgesLimit && n2 + 1 > s2.edgesLimit) return void cd(nd, e8, t2, i2);
    if (r2.push(e8), Array.isArray(e8)) for (a2 = 0; a2 < e8.length; a2++) ld(e8[a2], a2, a2, r2, e8, o2, s2);
    else {
      var c2 = Object.keys(e8);
      for (a2 = 0; a2 < c2.length; a2++) {
        var l2 = c2[a2];
        ld(e8[l2], l2, a2, r2, e8, o2, s2);
      }
    }
    r2.pop();
  }
}
function dd(e8, t2) {
  return e8 < t2 ? -1 : e8 > t2 ? 1 : 0;
}
function ud(e8, t2, n2, r2) {
  void 0 === r2 && (r2 = sd());
  var i2, o2 = hd(e8, "", 0, [], void 0, 0, r2) || e8;
  try {
    i2 = 0 === od.length ? JSON.stringify(o2, t2, n2) : JSON.stringify(o2, fd(t2), n2);
  } catch (e9) {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; 0 !== id.length; ) {
      var s2 = id.pop();
      4 === s2.length ? Object.defineProperty(s2[0], s2[1], s2[3]) : s2[0][s2[1]] = s2[2];
    }
  }
  return i2;
}
function hd(e8, t2, n2, r2, i2, o2, s2) {
  var a2;
  if (o2 += 1, "object" == typeof e8 && null !== e8) {
    for (a2 = 0; a2 < r2.length; a2++) if (r2[a2] === e8) return void cd(rd, e8, t2, i2);
    try {
      if ("function" == typeof e8.toJSON) return;
    } catch (e9) {
      return;
    }
    if (void 0 !== s2.depthLimit && o2 > s2.depthLimit) return void cd(nd, e8, t2, i2);
    if (void 0 !== s2.edgesLimit && n2 + 1 > s2.edgesLimit) return void cd(nd, e8, t2, i2);
    if (r2.push(e8), Array.isArray(e8)) for (a2 = 0; a2 < e8.length; a2++) hd(e8[a2], a2, a2, r2, e8, o2, s2);
    else {
      var c2 = {}, l2 = Object.keys(e8).sort(dd);
      for (a2 = 0; a2 < l2.length; a2++) {
        var d2 = l2[a2];
        hd(e8[d2], d2, a2, r2, e8, o2, s2), c2[d2] = e8[d2];
      }
      if (void 0 === i2) return c2;
      id.push([i2, t2, e8]), i2[t2] = c2;
    }
    r2.pop();
  }
}
function fd(e8) {
  return e8 = void 0 !== e8 ? e8 : function(e9, t2) {
    return t2;
  }, function(t2, n2) {
    if (od.length > 0) for (var r2 = 0; r2 < od.length; r2++) {
      var i2 = od[r2];
      if (i2[1] === t2 && i2[0] === n2) {
        n2 = i2[2], od.splice(r2, 1);
        break;
      }
    }
    return e8.call(this, t2, n2);
  };
}
var pd = Nn(td);
var gd = class extends Error {
  constructor(e8, t2, n2) {
    if (!Number.isInteger(e8)) throw new Error('"code" must be an integer.');
    if (!t2 || "string" != typeof t2) throw new Error('"message" must be a non-empty string.');
    super(t2), this.code = e8, void 0 !== n2 && (this.data = n2);
  }
  serialize() {
    const e8 = { code: this.code, message: this.message };
    return void 0 !== this.data && (e8.data = this.data, function(e9) {
      if ("object" != typeof e9 || null === e9) return false;
      try {
        let t2 = e9;
        for (; null !== Object.getPrototypeOf(t2); ) t2 = Object.getPrototypeOf(t2);
        return Object.getPrototypeOf(e9) === t2;
      } catch (e10) {
        return false;
      }
    }(this.data) && (e8.data.cause = Ql(this.data.cause))), this.stack && (e8.stack = this.stack), e8;
  }
  toString() {
    return pd(this.serialize(), md, 2);
  }
};
function md(e8, t2) {
  if ("[Circular]" !== t2) return t2;
}
var yd = (e8) => function(e9, t2) {
  const [n2, r2] = function(e10) {
    if (e10) {
      if ("string" == typeof e10) return [e10];
      if ("object" == typeof e10 && !Array.isArray(e10)) {
        const { message: t3, data: n3 } = e10;
        if (t3 && "string" != typeof t3) throw new Error("Must specify string message.");
        return [t3 ?? void 0, n3];
      }
    }
    return [];
  }(t2);
  return new gd(e9, n2 ?? Jl(e9), r2);
}(Ic, e8);
var vd = {};
function bd() {
}
function wd() {
  wd.init.call(this);
}
function Ed(e8) {
  return void 0 === e8._maxListeners ? wd.defaultMaxListeners : e8._maxListeners;
}
function Cd(e8, t2, n2, r2) {
  var i2, o2, s2;
  if ("function" != typeof n2) throw new TypeError('"listener" argument must be a function');
  if ((o2 = e8._events) ? (o2.newListener && (e8.emit("newListener", t2, n2.listener ? n2.listener : n2), o2 = e8._events), s2 = o2[t2]) : (o2 = e8._events = new bd(), e8._eventsCount = 0), s2) {
    if ("function" == typeof s2 ? s2 = o2[t2] = r2 ? [n2, s2] : [s2, n2] : r2 ? s2.unshift(n2) : s2.push(n2), !s2.warned && (i2 = Ed(e8)) && i2 > 0 && s2.length > i2) {
      s2.warned = true;
      var a2 = new Error("Possible EventEmitter memory leak detected. " + s2.length + " " + t2 + " listeners added. Use emitter.setMaxListeners() to increase limit");
      a2.name = "MaxListenersExceededWarning", a2.emitter = e8, a2.type = t2, a2.count = s2.length, function(e9) {
        "function" == typeof console.warn ? console.warn(e9) : console.log(e9);
      }(a2);
    }
  } else s2 = o2[t2] = n2, ++e8._eventsCount;
  return e8;
}
function _d(e8, t2, n2) {
  var r2 = false;
  function i2() {
    e8.removeListener(t2, i2), r2 || (r2 = true, n2.apply(e8, arguments));
  }
  return i2.listener = n2, i2;
}
function Sd(e8) {
  var t2 = this._events;
  if (t2) {
    var n2 = t2[e8];
    if ("function" == typeof n2) return 1;
    if (n2) return n2.length;
  }
  return 0;
}
function kd(e8, t2) {
  for (var n2 = new Array(t2); t2--; ) n2[t2] = e8[t2];
  return n2;
}
bd.prototype = /* @__PURE__ */ Object.create(null), wd.EventEmitter = wd, wd.usingDomains = false, wd.prototype.domain = void 0, wd.prototype._events = void 0, wd.prototype._maxListeners = void 0, wd.defaultMaxListeners = 10, wd.init = function() {
  this.domain = null, wd.usingDomains && (void 0).active, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new bd(), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, wd.prototype.setMaxListeners = function(e8) {
  if ("number" != typeof e8 || e8 < 0 || isNaN(e8)) throw new TypeError('"n" argument must be a positive number');
  return this._maxListeners = e8, this;
}, wd.prototype.getMaxListeners = function() {
  return Ed(this);
}, wd.prototype.emit = function(e8) {
  var t2, n2, r2, i2, o2, s2, a2, c2 = "error" === e8;
  if (s2 = this._events) c2 = c2 && null == s2.error;
  else if (!c2) return false;
  if (a2 = this.domain, c2) {
    if (t2 = arguments[1], !a2) {
      if (t2 instanceof Error) throw t2;
      var l2 = new Error('Uncaught, unspecified "error" event. (' + t2 + ")");
      throw l2.context = t2, l2;
    }
    return t2 || (t2 = new Error('Uncaught, unspecified "error" event')), t2.domainEmitter = this, t2.domain = a2, t2.domainThrown = false, a2.emit("error", t2), false;
  }
  if (!(n2 = s2[e8])) return false;
  var d2 = "function" == typeof n2;
  switch (r2 = arguments.length) {
    case 1:
      !function(e9, t3, n3) {
        if (t3) e9.call(n3);
        else for (var r3 = e9.length, i3 = kd(e9, r3), o3 = 0; o3 < r3; ++o3) i3[o3].call(n3);
      }(n2, d2, this);
      break;
    case 2:
      !function(e9, t3, n3, r3) {
        if (t3) e9.call(n3, r3);
        else for (var i3 = e9.length, o3 = kd(e9, i3), s3 = 0; s3 < i3; ++s3) o3[s3].call(n3, r3);
      }(n2, d2, this, arguments[1]);
      break;
    case 3:
      !function(e9, t3, n3, r3, i3) {
        if (t3) e9.call(n3, r3, i3);
        else for (var o3 = e9.length, s3 = kd(e9, o3), a3 = 0; a3 < o3; ++a3) s3[a3].call(n3, r3, i3);
      }(n2, d2, this, arguments[1], arguments[2]);
      break;
    case 4:
      !function(e9, t3, n3, r3, i3, o3) {
        if (t3) e9.call(n3, r3, i3, o3);
        else for (var s3 = e9.length, a3 = kd(e9, s3), c3 = 0; c3 < s3; ++c3) a3[c3].call(n3, r3, i3, o3);
      }(n2, d2, this, arguments[1], arguments[2], arguments[3]);
      break;
    default:
      for (i2 = new Array(r2 - 1), o2 = 1; o2 < r2; o2++) i2[o2 - 1] = arguments[o2];
      !function(e9, t3, n3, r3) {
        if (t3) e9.apply(n3, r3);
        else for (var i3 = e9.length, o3 = kd(e9, i3), s3 = 0; s3 < i3; ++s3) o3[s3].apply(n3, r3);
      }(n2, d2, this, i2);
  }
  return true;
}, wd.prototype.addListener = function(e8, t2) {
  return Cd(this, e8, t2, false);
}, wd.prototype.on = wd.prototype.addListener, wd.prototype.prependListener = function(e8, t2) {
  return Cd(this, e8, t2, true);
}, wd.prototype.once = function(e8, t2) {
  if ("function" != typeof t2) throw new TypeError('"listener" argument must be a function');
  return this.on(e8, _d(this, e8, t2)), this;
}, wd.prototype.prependOnceListener = function(e8, t2) {
  if ("function" != typeof t2) throw new TypeError('"listener" argument must be a function');
  return this.prependListener(e8, _d(this, e8, t2)), this;
}, wd.prototype.removeListener = function(e8, t2) {
  var n2, r2, i2, o2, s2;
  if ("function" != typeof t2) throw new TypeError('"listener" argument must be a function');
  if (!(r2 = this._events)) return this;
  if (!(n2 = r2[e8])) return this;
  if (n2 === t2 || n2.listener && n2.listener === t2) 0 == --this._eventsCount ? this._events = new bd() : (delete r2[e8], r2.removeListener && this.emit("removeListener", e8, n2.listener || t2));
  else if ("function" != typeof n2) {
    for (i2 = -1, o2 = n2.length; o2-- > 0; ) if (n2[o2] === t2 || n2[o2].listener && n2[o2].listener === t2) {
      s2 = n2[o2].listener, i2 = o2;
      break;
    }
    if (i2 < 0) return this;
    if (1 === n2.length) {
      if (n2[0] = void 0, 0 == --this._eventsCount) return this._events = new bd(), this;
      delete r2[e8];
    } else !function(e9, t3) {
      for (var n3 = t3, r3 = n3 + 1, i3 = e9.length; r3 < i3; n3 += 1, r3 += 1) e9[n3] = e9[r3];
      e9.pop();
    }(n2, i2);
    r2.removeListener && this.emit("removeListener", e8, s2 || t2);
  }
  return this;
}, wd.prototype.off = function(e8, t2) {
  return this.removeListener(e8, t2);
}, wd.prototype.removeAllListeners = function(e8) {
  var t2, n2;
  if (!(n2 = this._events)) return this;
  if (!n2.removeListener) return 0 === arguments.length ? (this._events = new bd(), this._eventsCount = 0) : n2[e8] && (0 == --this._eventsCount ? this._events = new bd() : delete n2[e8]), this;
  if (0 === arguments.length) {
    for (var r2, i2 = Object.keys(n2), o2 = 0; o2 < i2.length; ++o2) "removeListener" !== (r2 = i2[o2]) && this.removeAllListeners(r2);
    return this.removeAllListeners("removeListener"), this._events = new bd(), this._eventsCount = 0, this;
  }
  if ("function" == typeof (t2 = n2[e8])) this.removeListener(e8, t2);
  else if (t2) do {
    this.removeListener(e8, t2[t2.length - 1]);
  } while (t2[0]);
  return this;
}, wd.prototype.listeners = function(e8) {
  var t2, n2, r2 = this._events;
  return n2 = r2 && (t2 = r2[e8]) ? "function" == typeof t2 ? [t2.listener || t2] : function(e9) {
    for (var t3 = new Array(e9.length), n3 = 0; n3 < t3.length; ++n3) t3[n3] = e9[n3].listener || e9[n3];
    return t3;
  }(t2) : [], n2;
}, wd.listenerCount = function(e8, t2) {
  return "function" == typeof e8.listenerCount ? e8.listenerCount(t2) : Sd.call(e8, t2);
}, wd.prototype.listenerCount = Sd, wd.prototype.eventNames = function() {
  return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : [];
};
var xd = Dn(Object.freeze({ __proto__: null, EventEmitter: wd, default: wd }));
Object.defineProperty(vd, "__esModule", { value: true });
var Ad = xd;
function Md(e8, t2, n2) {
  try {
    Reflect.apply(e8, t2, n2);
  } catch (e9) {
    setTimeout(() => {
      throw e9;
    });
  }
}
var Ld = class extends Ad.EventEmitter {
  emit(e8, ...t2) {
    let n2 = "error" === e8;
    const r2 = this._events;
    if (void 0 !== r2) n2 = n2 && void 0 === r2.error;
    else if (!n2) return false;
    if (n2) {
      let e9;
      if (t2.length > 0 && ([e9] = t2), e9 instanceof Error) throw e9;
      const n3 = new Error("Unhandled error." + (e9 ? ` (${e9.message})` : ""));
      throw n3.context = e9, n3;
    }
    const i2 = r2[e8];
    if (void 0 === i2) return false;
    if ("function" == typeof i2) Md(i2, this, t2);
    else {
      const e9 = i2.length, n3 = function(e10) {
        const t3 = e10.length, n4 = new Array(t3);
        for (let r3 = 0; r3 < t3; r3 += 1) n4[r3] = e10[r3];
        return n4;
      }(i2);
      for (let r3 = 0; r3 < e9; r3 += 1) Md(n3[r3], this, t2);
    }
    return true;
  }
};
var Td;
var Od;
var Rd;
var Pd;
var Id;
var Nd;
var Dd;
var Bd;
var $d;
var jd;
var Kd;
var Fd;
var Ud;
var Hd;
var zd;
var qd;
var Vd;
var Wd;
var Gd;
var Yd = vd.default = Ld;
var Zd = class e3 extends Yd {
  constructor({ notificationHandler: e8 } = {}) {
    super(), Oc(this, Pd), Oc(this, Nd), Oc(this, Bd), Oc(this, Td, false), Oc(this, Od, void 0), Oc(this, Rd, void 0), Rc(this, Od, []), Rc(this, Rd, e8);
  }
  destroy() {
    Tc(this, Od).forEach((e8) => {
      "destroy" in e8 && "function" == typeof e8.destroy && e8.destroy();
    }), Rc(this, Od, []), Rc(this, Td, true);
  }
  push(e8) {
    Pc(this, Pd, Id).call(this), Tc(this, Od).push(e8);
  }
  handle(e8, t2) {
    if (Pc(this, Pd, Id).call(this), t2 && "function" != typeof t2) throw new Error('"callback" must be a function if provided.');
    return Array.isArray(e8) ? t2 ? Pc(this, Nd, Dd).call(this, e8, t2) : Pc(this, Nd, Dd).call(this, e8) : t2 ? Pc(this, Bd, $d).call(this, e8, t2) : this._promiseHandle(e8);
  }
  asMiddleware() {
    return Pc(this, Pd, Id).call(this), async (t2, n2, r2, i2) => {
      var o2, s2;
      try {
        const [a2, c2, l2] = await Pc(o2 = e3, Fd, Ud).call(o2, t2, n2, Tc(this, Od));
        return c2 ? (await Pc(s2 = e3, qd, Vd).call(s2, l2), i2(a2)) : r2(async (t3) => {
          var n3;
          try {
            await Pc(n3 = e3, qd, Vd).call(n3, l2);
          } catch (e8) {
            return t3(e8);
          }
          return t3();
        });
      } catch (e8) {
        return i2(e8);
      }
    };
  }
  async _promiseHandle(e8) {
    return new Promise((t2, n2) => {
      Pc(this, Bd, $d).call(this, e8, (e9, r2) => {
        e9 && void 0 === r2 ? n2(e9) : t2(r2);
      }).catch(n2);
    });
  }
};
Td = /* @__PURE__ */ new WeakMap(), Od = /* @__PURE__ */ new WeakMap(), Rd = /* @__PURE__ */ new WeakMap(), Pd = /* @__PURE__ */ new WeakSet(), Id = function() {
  if (Tc(this, Td)) throw new Error("This engine is destroyed and can no longer be used.");
}, Nd = /* @__PURE__ */ new WeakSet(), Dd = async function(e8, t2) {
  try {
    if (0 === e8.length) {
      const e9 = [{ id: null, jsonrpc: "2.0", error: new gd(Ic, "Request batch must contain plain objects. Received an empty array") }];
      return t2 ? t2(null, e9) : e9;
    }
    const n2 = (await Promise.all(e8.map(this._promiseHandle.bind(this)))).filter((e9) => void 0 !== e9);
    return t2 ? t2(null, n2) : n2;
  } catch (e9) {
    if (t2) return t2(e9);
    throw e9;
  }
}, Bd = /* @__PURE__ */ new WeakSet(), $d = async function(e8, t2) {
  var n2;
  if (!e8 || Array.isArray(e8) || "object" != typeof e8) {
    const n3 = new gd(Ic, "Requests must be plain objects. Received: " + typeof e8, { request: e8 });
    return t2(n3, { id: null, jsonrpc: "2.0", error: n3 });
  }
  if ("string" != typeof e8.method) {
    const n3 = new gd(Ic, "Must specify a string method. Received: " + typeof e8.method, { request: e8 });
    return Tc(this, Rd) && !Vl(e8) ? t2(null) : t2(n3, { id: e8.id ?? null, jsonrpc: "2.0", error: n3 });
  }
  if (Tc(this, Rd) && Gc(e8, ql) && !Vl(e8)) {
    try {
      await Tc(this, Rd).call(this, e8);
    } catch (e9) {
      return t2(e9);
    }
    return t2(null);
  }
  let r2 = null;
  const i2 = { ...e8 }, o2 = { id: i2.id, jsonrpc: i2.jsonrpc };
  try {
    await Pc(n2 = Zd, jd, Kd).call(n2, i2, o2, Tc(this, Od));
  } catch (e9) {
    r2 = e9;
  }
  return r2 && (delete o2.result, o2.error || (o2.error = Xl(r2))), t2(r2, o2);
}, jd = /* @__PURE__ */ new WeakSet(), Kd = async function(e8, t2, n2) {
  var r2, i2, o2;
  const [s2, a2, c2] = await Pc(r2 = Zd, Fd, Ud).call(r2, e8, t2, n2);
  if (Pc(i2 = Zd, Wd, Gd).call(i2, e8, t2, a2), await Pc(o2 = Zd, qd, Vd).call(o2, c2), s2) throw s2;
}, Fd = /* @__PURE__ */ new WeakSet(), Ud = async function(e8, t2, n2) {
  var r2;
  const i2 = [];
  let o2 = null, s2 = false;
  for (const a2 of n2) if ([o2, s2] = await Pc(r2 = Zd, Hd, zd).call(r2, e8, t2, a2, i2), s2) break;
  return [o2, s2, i2.reverse()];
}, Hd = /* @__PURE__ */ new WeakSet(), zd = async function(e8, t2, n2, r2) {
  return new Promise((i2) => {
    const o2 = (e9) => {
      const n3 = e9 || t2.error;
      n3 && (t2.error = Xl(n3)), i2([n3, true]);
    }, s2 = (n3) => {
      t2.error ? o2(t2.error) : (n3 && ("function" != typeof n3 && o2(new gd(Nc, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof n3}" for request:
${Xd(e8)}`, { request: e8 })), r2.push(n3)), i2([null, false]));
    };
    try {
      n2(e8, t2, s2, o2);
    } catch (e9) {
      o2(e9);
    }
  });
}, qd = /* @__PURE__ */ new WeakSet(), Vd = async function(e8) {
  for (const t2 of e8) await new Promise((e9, n2) => {
    t2((t3) => t3 ? n2(t3) : e9());
  });
}, Wd = /* @__PURE__ */ new WeakSet(), Gd = function(e8, t2, n2) {
  if (!$c(t2, "result") && !$c(t2, "error")) throw new gd(Nc, `JsonRpcEngine: Response has no error or result for request:
${Xd(e8)}`, { request: e8 });
  if (!n2) throw new gd(Nc, `JsonRpcEngine: Nothing ended request:
${Xd(e8)}`, { request: e8 });
}, Oc(Zd, jd), Oc(Zd, Fd), Oc(Zd, Hd), Oc(Zd, qd), Oc(Zd, Wd);
var Jd = Zd;
function Xd(e8) {
  return JSON.stringify(e8, null, 2);
}
var Qd = Object.freeze(["eth_subscription"]);
var eu = (e8 = console) => [(e9, t2, n2, r2) => {
  const i2 = e9.id, o2 = Mc = (Mc + 1) % Ac;
  e9.id = o2, t2.id = o2, n2((n3) => {
    e9.id = i2, t2.id = i2, n3();
  });
}, tu(e8), xc(e8)];
function tu(e8) {
  return (t2, n2, r2) => {
    "string" == typeof t2.method && t2.method || (n2.error = yd({ message: "The request 'method' must be a non-empty string.", data: t2 })), r2((t3) => {
      const { error: r3 } = n2;
      return r3 ? (e8.error(`MetaMask - RPC Error: ${r3.message}`, r3), t3()) : t3();
    });
  };
}
var nu = (e8, t2, n2 = true) => (r2, i2) => {
  r2 || i2.error ? t2(r2 || i2.error) : !n2 || Array.isArray(i2) ? e8(i2) : e8(i2.result);
};
var ru = (e8) => Boolean(e8) && "string" == typeof e8 && e8.startsWith("0x");
var iu = () => {
};
async function ou(e8, t2) {
  try {
    const t3 = await async function() {
      return { name: su(window), icon: await au(window) };
    }();
    e8.handle({ jsonrpc: "2.0", id: 1, method: "metamask_sendDomainMetadata", params: t3 }, iu);
  } catch (e9) {
    t2.error({ message: kc.errors.sendSiteMetadata(), originalError: e9 });
  }
}
function su(e8) {
  const { document: t2 } = e8, n2 = t2.querySelector('head > meta[property="og:site_name"]');
  if (n2) return n2.content;
  const r2 = t2.querySelector('head > meta[name="title"]');
  return r2 ? r2.content : t2.title && t2.title.length > 0 ? t2.title : window.location.hostname;
}
async function au(e8) {
  const { document: t2 } = e8, n2 = t2.querySelectorAll('head > link[rel~="icon"]');
  for (const e9 of Array.from(n2)) if (e9 && await cu(e9.href)) return e9.href;
  return null;
}
async function cu(e8) {
  return new Promise((t2, n2) => {
    try {
      const n3 = document.createElement("img");
      n3.onload = () => t2(true), n3.onerror = () => t2(false), n3.src = e8;
    } catch (e9) {
      n2(e9);
    }
  });
}
var lu = (e8, t2, n2) => {
  if (!t2.has(e8)) throw TypeError("Cannot " + n2);
};
var du = (e8, t2, n2) => (lu(e8, t2, "read from private field"), n2 ? n2.call(e8) : t2.get(e8));
var uu = (e8, t2, n2) => {
  if (t2.has(e8)) throw TypeError("Cannot add the same private member more than once");
  t2 instanceof WeakSet ? t2.add(e8) : t2.set(e8, n2);
};
var hu = (e8, t2, n2, r2) => (lu(e8, t2, "write to private field"), t2.set(e8, n2), n2);
function fu(e8, t2, n2) {
  try {
    Reflect.apply(e8, t2, n2);
  } catch (e9) {
    setTimeout(() => {
      throw e9;
    });
  }
}
var pu = class extends wd {
  emit(e8, ...t2) {
    let n2 = "error" === e8;
    const r2 = this._events;
    if (void 0 !== r2) n2 = n2 && void 0 === r2.error;
    else if (!n2) return false;
    if (n2) {
      let e9;
      if (t2.length > 0 && ([e9] = t2), e9 instanceof Error) throw e9;
      const n3 = new Error("Unhandled error." + (e9 ? ` (${e9.message})` : ""));
      throw n3.context = e9, n3;
    }
    const i2 = r2[e8];
    if (void 0 === i2) return false;
    if ("function" == typeof i2) fu(i2, this, t2);
    else {
      const e9 = i2.length, n3 = function(e10) {
        const t3 = e10.length, n4 = new Array(t3);
        for (let r3 = 0; r3 < t3; r3 += 1) n4[r3] = e10[r3];
        return n4;
      }(i2);
      for (let r3 = 0; r3 < e9; r3 += 1) fu(n3[r3], this, t2);
    }
    return true;
  }
};
var gu;
var mu;
var yu = Nn(function e4(t2, n2) {
  if (t2 === n2) return true;
  if (t2 && n2 && "object" == typeof t2 && "object" == typeof n2) {
    if (t2.constructor !== n2.constructor) return false;
    var r2, i2, o2;
    if (Array.isArray(t2)) {
      if ((r2 = t2.length) != n2.length) return false;
      for (i2 = r2; 0 != i2--; ) if (!e4(t2[i2], n2[i2])) return false;
      return true;
    }
    if (t2.constructor === RegExp) return t2.source === n2.source && t2.flags === n2.flags;
    if (t2.valueOf !== Object.prototype.valueOf) return t2.valueOf() === n2.valueOf();
    if (t2.toString !== Object.prototype.toString) return t2.toString() === n2.toString();
    if ((r2 = (o2 = Object.keys(t2)).length) !== Object.keys(n2).length) return false;
    for (i2 = r2; 0 != i2--; ) if (!Object.prototype.hasOwnProperty.call(n2, o2[i2])) return false;
    for (i2 = r2; 0 != i2--; ) {
      var s2 = o2[i2];
      if (!e4(t2[s2], n2[s2])) return false;
    }
    return true;
  }
  return t2 != t2 && n2 != n2;
});
var vu = class e5 extends pu {
  constructor({ logger: t2 = console, maxEventListeners: n2 = 100, rpcMiddleware: r2 = [] } = {}) {
    super(), uu(this, gu, void 0), uu(this, mu, void 0), this._log = t2, this.setMaxListeners(n2), this._state = { ...e5._defaultState }, hu(this, mu, null), hu(this, gu, null), this._handleAccountsChanged = this._handleAccountsChanged.bind(this), this._handleConnect = this._handleConnect.bind(this), this._handleChainChanged = this._handleChainChanged.bind(this), this._handleDisconnect = this._handleDisconnect.bind(this), this._handleUnlockStateChanged = this._handleUnlockStateChanged.bind(this), this._rpcRequest = this._rpcRequest.bind(this), this.request = this.request.bind(this);
    const i2 = new Jd();
    r2.forEach((e8) => i2.push(e8)), this._rpcEngine = i2;
  }
  get chainId() {
    return du(this, gu);
  }
  get selectedAddress() {
    return du(this, mu);
  }
  isConnected() {
    return this._state.isConnected;
  }
  async request(e8) {
    if (!e8 || "object" != typeof e8 || Array.isArray(e8)) throw yd({ message: kc.errors.invalidRequestArgs(), data: e8 });
    const { method: t2, params: n2 } = e8;
    if ("string" != typeof t2 || 0 === t2.length) throw yd({ message: kc.errors.invalidRequestMethod(), data: e8 });
    if (void 0 !== n2 && !Array.isArray(n2) && ("object" != typeof n2 || null === n2)) throw yd({ message: kc.errors.invalidRequestParams(), data: e8 });
    const r2 = null == n2 ? { method: t2 } : { method: t2, params: n2 };
    return new Promise((e9, t3) => {
      this._rpcRequest(r2, nu(e9, t3));
    });
  }
  _initializeState(e8) {
    if (this._state.initialized) throw new Error("Provider already initialized.");
    if (e8) {
      const { accounts: t2, chainId: n2, isUnlocked: r2, networkVersion: i2 } = e8;
      this._handleConnect(n2), this._handleChainChanged({ chainId: n2, networkVersion: i2 }), this._handleUnlockStateChanged({ accounts: t2, isUnlocked: r2 }), this._handleAccountsChanged(t2);
    }
    this._state.initialized = true, this.emit("_initialized");
  }
  _rpcRequest(e8, t2) {
    let n2 = t2;
    return Array.isArray(e8) || (e8.jsonrpc || (e8.jsonrpc = "2.0"), "eth_accounts" !== e8.method && "eth_requestAccounts" !== e8.method || (n2 = (n3, r2) => {
      this._handleAccountsChanged(r2.result ?? [], "eth_accounts" === e8.method), t2(n3, r2);
    })), this._rpcEngine.handle(e8, n2);
  }
  _handleConnect(e8) {
    this._state.isConnected || (this._state.isConnected = true, this.emit("connect", { chainId: e8 }), this._log.debug(kc.info.connected(e8)));
  }
  _handleDisconnect(e8, t2) {
    if (this._state.isConnected || !this._state.isPermanentlyDisconnected && !e8) {
      let n2;
      this._state.isConnected = false, e8 ? (n2 = new gd(1013, t2 ?? kc.errors.disconnected()), this._log.debug(n2)) : (n2 = new gd(1011, t2 ?? kc.errors.permanentlyDisconnected()), this._log.error(n2), hu(this, gu, null), this._state.accounts = null, hu(this, mu, null), this._state.isUnlocked = false, this._state.isPermanentlyDisconnected = true), this.emit("disconnect", n2);
    }
  }
  _handleChainChanged({ chainId: e8 } = {}) {
    ru(e8) ? (this._handleConnect(e8), e8 !== du(this, gu) && (hu(this, gu, e8), this._state.initialized && this.emit("chainChanged", du(this, gu)))) : this._log.error(kc.errors.invalidNetworkParams(), { chainId: e8 });
  }
  _handleAccountsChanged(e8, t2 = false) {
    let n2 = e8;
    Array.isArray(e8) || (this._log.error("MetaMask: Received invalid accounts parameter. Please report this bug.", e8), n2 = []);
    for (const t3 of e8) if ("string" != typeof t3) {
      this._log.error("MetaMask: Received non-string account. Please report this bug.", e8), n2 = [];
      break;
    }
    if (!yu(this._state.accounts, n2) && (t2 && null !== this._state.accounts && this._log.error("MetaMask: 'eth_accounts' unexpectedly updated accounts. Please report this bug.", n2), this._state.accounts = n2, du(this, mu) !== n2[0] && hu(this, mu, n2[0] || null), this._state.initialized)) {
      const e9 = [...n2];
      this.emit("accountsChanged", e9);
    }
  }
  _handleUnlockStateChanged({ accounts: e8, isUnlocked: t2 } = {}) {
    "boolean" == typeof t2 ? t2 !== this._state.isUnlocked && (this._state.isUnlocked = t2, this._handleAccountsChanged(e8 ?? [])) : this._log.error("MetaMask: Received invalid isUnlocked parameter. Please report this bug.");
  }
};
gu = /* @__PURE__ */ new WeakMap(), mu = /* @__PURE__ */ new WeakMap(), vu._defaultState = { accounts: null, isConnected: false, isUnlocked: false, initialized: false, isPermanentlyDisconnected: false };
var bu;
var wu;
var Eu = vu;
var Cu = { exports: {} };
function _u() {
  return wu ? bu : (wu = 1, bu = xd.EventEmitter);
}
var Su;
var ku = Dn(Pn);
Su = "function" == typeof Object.create ? function(e8, t2) {
  e8.super_ = t2, e8.prototype = Object.create(t2.prototype, { constructor: { value: e8, enumerable: false, writable: true, configurable: true } });
} : function(e8, t2) {
  e8.super_ = t2;
  var n2 = function() {
  };
  n2.prototype = t2.prototype, e8.prototype = new n2(), e8.prototype.constructor = e8;
};
var xu = Object.getOwnPropertyDescriptors || function(e8) {
  for (var t2 = Object.keys(e8), n2 = {}, r2 = 0; r2 < t2.length; r2++) n2[t2[r2]] = Object.getOwnPropertyDescriptor(e8, t2[r2]);
  return n2;
};
var Au = /%[sdj%]/g;
function Mu(e8) {
  if (!zu(e8)) {
    for (var t2 = [], n2 = 0; n2 < arguments.length; n2++) t2.push(Pu(arguments[n2]));
    return t2.join(" ");
  }
  n2 = 1;
  for (var r2 = arguments, i2 = r2.length, o2 = String(e8).replace(Au, function(e9) {
    if ("%%" === e9) return "%";
    if (n2 >= i2) return e9;
    switch (e9) {
      case "%s":
        return String(r2[n2++]);
      case "%d":
        return Number(r2[n2++]);
      case "%j":
        try {
          return JSON.stringify(r2[n2++]);
        } catch (e10) {
          return "[Circular]";
        }
      default:
        return e9;
    }
  }), s2 = r2[n2]; n2 < i2; s2 = r2[++n2]) Fu(s2) || !Gu(s2) ? o2 += " " + s2 : o2 += " " + Pu(s2);
  return o2;
}
function Lu(e8, t2) {
  if (Vu(Rt.process)) return function() {
    return Lu(e8, t2).apply(this, arguments);
  };
  if (true === Tl.noDeprecation) return e8;
  var n2 = false;
  return function() {
    if (!n2) {
      if (Tl.throwDeprecation) throw new Error(t2);
      Tl.traceDeprecation ? console.trace(t2) : console.error(t2), n2 = true;
    }
    return e8.apply(this, arguments);
  };
}
var Tu;
var Ou = {};
function Ru(e8) {
  return Vu(Tu) && (Tu = Tl.env.NODE_DEBUG || ""), e8 = e8.toUpperCase(), Ou[e8] || (new RegExp("\\b" + e8 + "\\b", "i").test(Tu) ? Ou[e8] = function() {
    var t2 = Mu.apply(null, arguments);
    console.error("%s %d: %s", e8, 0, t2);
  } : Ou[e8] = function() {
  }), Ou[e8];
}
function Pu(e8, t2) {
  var n2 = { seen: [], stylize: Nu };
  return arguments.length >= 3 && (n2.depth = arguments[2]), arguments.length >= 4 && (n2.colors = arguments[3]), Ku(t2) ? n2.showHidden = t2 : t2 && ih(n2, t2), Vu(n2.showHidden) && (n2.showHidden = false), Vu(n2.depth) && (n2.depth = 2), Vu(n2.colors) && (n2.colors = false), Vu(n2.customInspect) && (n2.customInspect = true), n2.colors && (n2.stylize = Iu), Du(n2, e8, n2.depth);
}
function Iu(e8, t2) {
  var n2 = Pu.styles[t2];
  return n2 ? "\x1B[" + Pu.colors[n2][0] + "m" + e8 + "\x1B[" + Pu.colors[n2][1] + "m" : e8;
}
function Nu(e8, t2) {
  return e8;
}
function Du(e8, t2, n2) {
  if (e8.customInspect && t2 && Ju(t2.inspect) && t2.inspect !== Pu && (!t2.constructor || t2.constructor.prototype !== t2)) {
    var r2 = t2.inspect(n2, e8);
    return zu(r2) || (r2 = Du(e8, r2, n2)), r2;
  }
  var i2 = function(e9, t3) {
    if (Vu(t3)) return e9.stylize("undefined", "undefined");
    if (zu(t3)) {
      var n3 = "'" + JSON.stringify(t3).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
      return e9.stylize(n3, "string");
    }
    return Hu(t3) ? e9.stylize("" + t3, "number") : Ku(t3) ? e9.stylize("" + t3, "boolean") : Fu(t3) ? e9.stylize("null", "null") : void 0;
  }(e8, t2);
  if (i2) return i2;
  var o2 = Object.keys(t2), s2 = function(e9) {
    var t3 = {};
    return e9.forEach(function(e10, n3) {
      t3[e10] = true;
    }), t3;
  }(o2);
  if (e8.showHidden && (o2 = Object.getOwnPropertyNames(t2)), Zu(t2) && (o2.indexOf("message") >= 0 || o2.indexOf("description") >= 0)) return Bu(t2);
  if (0 === o2.length) {
    if (Ju(t2)) {
      var a2 = t2.name ? ": " + t2.name : "";
      return e8.stylize("[Function" + a2 + "]", "special");
    }
    if (Wu(t2)) return e8.stylize(RegExp.prototype.toString.call(t2), "regexp");
    if (Yu(t2)) return e8.stylize(Date.prototype.toString.call(t2), "date");
    if (Zu(t2)) return Bu(t2);
  }
  var c2, l2 = "", d2 = false, u2 = ["{", "}"];
  return ju(t2) && (d2 = true, u2 = ["[", "]"]), Ju(t2) && (l2 = " [Function" + (t2.name ? ": " + t2.name : "") + "]"), Wu(t2) && (l2 = " " + RegExp.prototype.toString.call(t2)), Yu(t2) && (l2 = " " + Date.prototype.toUTCString.call(t2)), Zu(t2) && (l2 = " " + Bu(t2)), 0 !== o2.length || d2 && 0 != t2.length ? n2 < 0 ? Wu(t2) ? e8.stylize(RegExp.prototype.toString.call(t2), "regexp") : e8.stylize("[Object]", "special") : (e8.seen.push(t2), c2 = d2 ? function(e9, t3, n3, r3, i3) {
    for (var o3 = [], s3 = 0, a3 = t3.length; s3 < a3; ++s3) oh(t3, String(s3)) ? o3.push($u(e9, t3, n3, r3, String(s3), true)) : o3.push("");
    return i3.forEach(function(i4) {
      i4.match(/^\d+$/) || o3.push($u(e9, t3, n3, r3, i4, true));
    }), o3;
  }(e8, t2, n2, s2, o2) : o2.map(function(r3) {
    return $u(e8, t2, n2, s2, r3, d2);
  }), e8.seen.pop(), function(e9, t3, n3) {
    var r3 = e9.reduce(function(e10, t4) {
      return t4.indexOf("\n"), e10 + t4.replace(/\u001b\[\d\d?m/g, "").length + 1;
    }, 0);
    return r3 > 60 ? n3[0] + ("" === t3 ? "" : t3 + "\n ") + " " + e9.join(",\n  ") + " " + n3[1] : n3[0] + t3 + " " + e9.join(", ") + " " + n3[1];
  }(c2, l2, u2)) : u2[0] + l2 + u2[1];
}
function Bu(e8) {
  return "[" + Error.prototype.toString.call(e8) + "]";
}
function $u(e8, t2, n2, r2, i2, o2) {
  var s2, a2, c2;
  if ((c2 = Object.getOwnPropertyDescriptor(t2, i2) || { value: t2[i2] }).get ? a2 = c2.set ? e8.stylize("[Getter/Setter]", "special") : e8.stylize("[Getter]", "special") : c2.set && (a2 = e8.stylize("[Setter]", "special")), oh(r2, i2) || (s2 = "[" + i2 + "]"), a2 || (e8.seen.indexOf(c2.value) < 0 ? (a2 = Fu(n2) ? Du(e8, c2.value, null) : Du(e8, c2.value, n2 - 1)).indexOf("\n") > -1 && (a2 = o2 ? a2.split("\n").map(function(e9) {
    return "  " + e9;
  }).join("\n").substr(2) : "\n" + a2.split("\n").map(function(e9) {
    return "   " + e9;
  }).join("\n")) : a2 = e8.stylize("[Circular]", "special")), Vu(s2)) {
    if (o2 && i2.match(/^\d+$/)) return a2;
    (s2 = JSON.stringify("" + i2)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s2 = s2.substr(1, s2.length - 2), s2 = e8.stylize(s2, "name")) : (s2 = s2.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), s2 = e8.stylize(s2, "string"));
  }
  return s2 + ": " + a2;
}
function ju(e8) {
  return Array.isArray(e8);
}
function Ku(e8) {
  return "boolean" == typeof e8;
}
function Fu(e8) {
  return null === e8;
}
function Uu(e8) {
  return null == e8;
}
function Hu(e8) {
  return "number" == typeof e8;
}
function zu(e8) {
  return "string" == typeof e8;
}
function qu(e8) {
  return "symbol" == typeof e8;
}
function Vu(e8) {
  return void 0 === e8;
}
function Wu(e8) {
  return Gu(e8) && "[object RegExp]" === eh(e8);
}
function Gu(e8) {
  return "object" == typeof e8 && null !== e8;
}
function Yu(e8) {
  return Gu(e8) && "[object Date]" === eh(e8);
}
function Zu(e8) {
  return Gu(e8) && ("[object Error]" === eh(e8) || e8 instanceof Error);
}
function Ju(e8) {
  return "function" == typeof e8;
}
function Xu(e8) {
  return null === e8 || "boolean" == typeof e8 || "number" == typeof e8 || "string" == typeof e8 || "symbol" == typeof e8 || void 0 === e8;
}
function Qu(e8) {
  return Wt.isBuffer(e8);
}
function eh(e8) {
  return Object.prototype.toString.call(e8);
}
function th(e8) {
  return e8 < 10 ? "0" + e8.toString(10) : e8.toString(10);
}
Pu.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, Pu.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" };
var nh = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function rh() {
  console.log("%s - %s", function() {
    var e8 = /* @__PURE__ */ new Date(), t2 = [th(e8.getHours()), th(e8.getMinutes()), th(e8.getSeconds())].join(":");
    return [e8.getDate(), nh[e8.getMonth()], t2].join(" ");
  }(), Mu.apply(null, arguments));
}
function ih(e8, t2) {
  if (!t2 || !Gu(t2)) return e8;
  for (var n2 = Object.keys(t2), r2 = n2.length; r2--; ) e8[n2[r2]] = t2[n2[r2]];
  return e8;
}
function oh(e8, t2) {
  return Object.prototype.hasOwnProperty.call(e8, t2);
}
var sh = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;
function ah(e8) {
  if ("function" != typeof e8) throw new TypeError('The "original" argument must be of type Function');
  if (sh && e8[sh]) {
    var t2;
    if ("function" != typeof (t2 = e8[sh])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    return Object.defineProperty(t2, sh, { value: t2, enumerable: false, writable: false, configurable: true }), t2;
  }
  function t2() {
    for (var t3, n2, r2 = new Promise(function(e9, r3) {
      t3 = e9, n2 = r3;
    }), i2 = [], o2 = 0; o2 < arguments.length; o2++) i2.push(arguments[o2]);
    i2.push(function(e9, r3) {
      e9 ? n2(e9) : t3(r3);
    });
    try {
      e8.apply(this, i2);
    } catch (e9) {
      n2(e9);
    }
    return r2;
  }
  return Object.setPrototypeOf(t2, Object.getPrototypeOf(e8)), sh && Object.defineProperty(t2, sh, { value: t2, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t2, xu(e8));
}
function ch(e8, t2) {
  if (!e8) {
    var n2 = new Error("Promise was rejected with a falsy value");
    n2.reason = e8, e8 = n2;
  }
  return t2(e8);
}
function lh(e8) {
  if ("function" != typeof e8) throw new TypeError('The "original" argument must be of type Function');
  function t2() {
    for (var t3 = [], n2 = 0; n2 < arguments.length; n2++) t3.push(arguments[n2]);
    var r2 = t3.pop();
    if ("function" != typeof r2) throw new TypeError("The last argument must be of type Function");
    var i2 = this, o2 = function() {
      return r2.apply(i2, arguments);
    };
    e8.apply(this, t3).then(function(e9) {
      Tl.nextTick(o2.bind(null, null, e9));
    }, function(e9) {
      Tl.nextTick(ch.bind(null, e9, o2));
    });
  }
  return Object.setPrototypeOf(t2, Object.getPrototypeOf(e8)), Object.defineProperties(t2, xu(e8)), t2;
}
ah.custom = sh;
var dh;
var uh;
var hh;
var fh;
var ph = { inherits: Su, _extend: ih, log: rh, isBuffer: Qu, isPrimitive: Xu, isFunction: Ju, isError: Zu, isDate: Yu, isObject: Gu, isRegExp: Wu, isUndefined: Vu, isSymbol: qu, isString: zu, isNumber: Hu, isNullOrUndefined: Uu, isNull: Fu, isBoolean: Ku, isArray: ju, inspect: Pu, deprecate: Lu, format: Mu, debuglog: Ru, promisify: ah, callbackify: lh };
var gh = Dn(Object.freeze({ __proto__: null, _extend: ih, callbackify: lh, debuglog: Ru, default: ph, deprecate: Lu, format: Mu, inherits: Su, inspect: Pu, isArray: ju, isBoolean: Ku, isBuffer: Qu, isDate: Yu, isError: Zu, isFunction: Ju, isNull: Fu, isNullOrUndefined: Uu, isNumber: Hu, isObject: Gu, isPrimitive: Xu, isRegExp: Wu, isString: zu, isSymbol: qu, isUndefined: Vu, log: rh, promisify: ah }));
function mh() {
  if (uh) return dh;
  function e8(e9, t3) {
    var n3 = Object.keys(e9);
    if (Object.getOwnPropertySymbols) {
      var r3 = Object.getOwnPropertySymbols(e9);
      t3 && (r3 = r3.filter(function(t4) {
        return Object.getOwnPropertyDescriptor(e9, t4).enumerable;
      })), n3.push.apply(n3, r3);
    }
    return n3;
  }
  function t2(t3) {
    for (var r3 = 1; r3 < arguments.length; r3++) {
      var i3 = null != arguments[r3] ? arguments[r3] : {};
      r3 % 2 ? e8(Object(i3), true).forEach(function(e9) {
        n2(t3, e9, i3[e9]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(i3)) : e8(Object(i3)).forEach(function(e9) {
        Object.defineProperty(t3, e9, Object.getOwnPropertyDescriptor(i3, e9));
      });
    }
    return t3;
  }
  function n2(e9, t3, n3) {
    return (t3 = r2(t3)) in e9 ? Object.defineProperty(e9, t3, { value: n3, enumerable: true, configurable: true, writable: true }) : e9[t3] = n3, e9;
  }
  function r2(e9) {
    var t3 = function(e10, t4) {
      if ("object" != typeof e10 || null === e10) return e10;
      var n3 = e10[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r3 = n3.call(e10, "string");
        if ("object" != typeof r3) return r3;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(e10);
    }(e9);
    return "symbol" == typeof t3 ? t3 : String(t3);
  }
  uh = 1;
  var i2 = ku.Buffer, o2 = gh.inspect, s2 = o2 && o2.custom || "inspect";
  return dh = function() {
    function e9() {
      !function(e10, t3) {
        if (!(e10 instanceof t3)) throw new TypeError("Cannot call a class as a function");
      }(this, e9), this.head = null, this.tail = null, this.length = 0;
    }
    return function(e10, t3, n3) {
      t3 && function(e11, t4) {
        for (var n4 = 0; n4 < t4.length; n4++) {
          var i3 = t4[n4];
          i3.enumerable = i3.enumerable || false, i3.configurable = true, "value" in i3 && (i3.writable = true), Object.defineProperty(e11, r2(i3.key), i3);
        }
      }(e10.prototype, t3), Object.defineProperty(e10, "prototype", { writable: false });
    }(e9, [{ key: "push", value: function(e10) {
      var t3 = { data: e10, next: null };
      this.length > 0 ? this.tail.next = t3 : this.head = t3, this.tail = t3, ++this.length;
    } }, { key: "unshift", value: function(e10) {
      var t3 = { data: e10, next: this.head };
      0 === this.length && (this.tail = t3), this.head = t3, ++this.length;
    } }, { key: "shift", value: function() {
      if (0 !== this.length) {
        var e10 = this.head.data;
        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e10;
      }
    } }, { key: "clear", value: function() {
      this.head = this.tail = null, this.length = 0;
    } }, { key: "join", value: function(e10) {
      if (0 === this.length) return "";
      for (var t3 = this.head, n3 = "" + t3.data; t3 = t3.next; ) n3 += e10 + t3.data;
      return n3;
    } }, { key: "concat", value: function(e10) {
      if (0 === this.length) return i2.alloc(0);
      for (var t3, n3, r3, o3 = i2.allocUnsafe(e10 >>> 0), s3 = this.head, a2 = 0; s3; ) t3 = s3.data, n3 = o3, r3 = a2, i2.prototype.copy.call(t3, n3, r3), a2 += s3.data.length, s3 = s3.next;
      return o3;
    } }, { key: "consume", value: function(e10, t3) {
      var n3;
      return e10 < this.head.data.length ? (n3 = this.head.data.slice(0, e10), this.head.data = this.head.data.slice(e10)) : n3 = e10 === this.head.data.length ? this.shift() : t3 ? this._getString(e10) : this._getBuffer(e10), n3;
    } }, { key: "first", value: function() {
      return this.head.data;
    } }, { key: "_getString", value: function(e10) {
      var t3 = this.head, n3 = 1, r3 = t3.data;
      for (e10 -= r3.length; t3 = t3.next; ) {
        var i3 = t3.data, o3 = e10 > i3.length ? i3.length : e10;
        if (o3 === i3.length ? r3 += i3 : r3 += i3.slice(0, e10), 0 == (e10 -= o3)) {
          o3 === i3.length ? (++n3, t3.next ? this.head = t3.next : this.head = this.tail = null) : (this.head = t3, t3.data = i3.slice(o3));
          break;
        }
        ++n3;
      }
      return this.length -= n3, r3;
    } }, { key: "_getBuffer", value: function(e10) {
      var t3 = i2.allocUnsafe(e10), n3 = this.head, r3 = 1;
      for (n3.data.copy(t3), e10 -= n3.data.length; n3 = n3.next; ) {
        var o3 = n3.data, s3 = e10 > o3.length ? o3.length : e10;
        if (o3.copy(t3, t3.length - e10, 0, s3), 0 == (e10 -= s3)) {
          s3 === o3.length ? (++r3, n3.next ? this.head = n3.next : this.head = this.tail = null) : (this.head = n3, n3.data = o3.slice(s3));
          break;
        }
        ++r3;
      }
      return this.length -= r3, t3;
    } }, { key: s2, value: function(e10, n3) {
      return o2(this, t2(t2({}, n3), {}, { depth: 0, customInspect: false }));
    } }]), e9;
  }(), dh;
}
function yh() {
  if (fh) return hh;
  function e8(e9, r2) {
    n2(e9, r2), t2(e9);
  }
  function t2(e9) {
    e9._writableState && !e9._writableState.emitClose || e9._readableState && !e9._readableState.emitClose || e9.emit("close");
  }
  function n2(e9, t3) {
    e9.emit("error", t3);
  }
  return fh = 1, hh = { destroy: function(r2, i2) {
    var o2 = this, s2 = this._readableState && this._readableState.destroyed, a2 = this._writableState && this._writableState.destroyed;
    return s2 || a2 ? (i2 ? i2(r2) : r2 && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = true, Tl.nextTick(n2, this, r2)) : Tl.nextTick(n2, this, r2)), this) : (this._readableState && (this._readableState.destroyed = true), this._writableState && (this._writableState.destroyed = true), this._destroy(r2 || null, function(n3) {
      !i2 && n3 ? o2._writableState ? o2._writableState.errorEmitted ? Tl.nextTick(t2, o2) : (o2._writableState.errorEmitted = true, Tl.nextTick(e8, o2, n3)) : Tl.nextTick(e8, o2, n3) : i2 ? (Tl.nextTick(t2, o2), i2(n3)) : Tl.nextTick(t2, o2);
    }), this);
  }, undestroy: function() {
    this._readableState && (this._readableState.destroyed = false, this._readableState.reading = false, this._readableState.ended = false, this._readableState.endEmitted = false), this._writableState && (this._writableState.destroyed = false, this._writableState.ended = false, this._writableState.ending = false, this._writableState.finalCalled = false, this._writableState.prefinished = false, this._writableState.finished = false, this._writableState.errorEmitted = false);
  }, errorOrDestroy: function(e9, t3) {
    var n3 = e9._readableState, r2 = e9._writableState;
    n3 && n3.autoDestroy || r2 && r2.autoDestroy ? e9.destroy(t3) : e9.emit("error", t3);
  } }, hh;
}
var vh;
var bh;
var wh = {};
var Eh = {};
function Ch(e8, t2, n2) {
  n2 || (n2 = Error);
  var r2 = function(e9) {
    var n3, r3;
    function i2(n4, r4, i3) {
      return e9.call(this, function(e10, n5, r5) {
        return "string" == typeof t2 ? t2 : t2(e10, n5, r5);
      }(n4, r4, i3)) || this;
    }
    return r3 = e9, (n3 = i2).prototype = Object.create(r3.prototype), n3.prototype.constructor = n3, n3.__proto__ = r3, i2;
  }(n2);
  r2.prototype.name = n2.name, r2.prototype.code = e8, Eh[e8] = r2;
}
function _h(e8, t2) {
  if (Array.isArray(e8)) {
    var n2 = e8.length;
    return e8 = e8.map(function(e9) {
      return String(e9);
    }), n2 > 2 ? "one of ".concat(t2, " ").concat(e8.slice(0, n2 - 1).join(", "), ", or ") + e8[n2 - 1] : 2 === n2 ? "one of ".concat(t2, " ").concat(e8[0], " or ").concat(e8[1]) : "of ".concat(t2, " ").concat(e8[0]);
  }
  return "of ".concat(t2, " ").concat(String(e8));
}
function Sh() {
  if (bh) return vh;
  bh = 1;
  var e8 = wh.codes.ERR_INVALID_OPT_VALUE;
  return vh = { getHighWaterMark: function(t2, n2, r2, i2) {
    var o2 = function(e9, t3, n3) {
      return null != e9.highWaterMark ? e9.highWaterMark : t3 ? e9[n3] : null;
    }(n2, i2, r2);
    if (null != o2) {
      if (!isFinite(o2) || Math.floor(o2) !== o2 || o2 < 0) throw new e8(i2 ? r2 : "highWaterMark", o2);
      return Math.floor(o2);
    }
    return t2.objectMode ? 16 : 16384;
  } };
}
Ch("ERR_INVALID_OPT_VALUE", function(e8, t2) {
  return 'The value "' + t2 + '" is invalid for option "' + e8 + '"';
}, TypeError), Ch("ERR_INVALID_ARG_TYPE", function(e8, t2, n2) {
  var r2, i2, o2;
  if ("string" == typeof t2 && (i2 = "not ", t2.substr(0, 4) === i2) ? (r2 = "must not be", t2 = t2.replace(/^not /, "")) : r2 = "must be", function(e9, t3, n3) {
    return (void 0 === n3 || n3 > e9.length) && (n3 = e9.length), e9.substring(n3 - 9, n3) === t3;
  }(e8, " argument")) o2 = "The ".concat(e8, " ").concat(r2, " ").concat(_h(t2, "type"));
  else {
    var s2 = function(e9, t3, n3) {
      return "number" != typeof n3 && (n3 = 0), !(n3 + 1 > e9.length) && -1 !== e9.indexOf(".", n3);
    }(e8) ? "property" : "argument";
    o2 = 'The "'.concat(e8, '" ').concat(s2, " ").concat(r2, " ").concat(_h(t2, "type"));
  }
  return o2 + ". Received type ".concat(typeof n2);
}, TypeError), Ch("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), Ch("ERR_METHOD_NOT_IMPLEMENTED", function(e8) {
  return "The " + e8 + " method is not implemented";
}), Ch("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), Ch("ERR_STREAM_DESTROYED", function(e8) {
  return "Cannot call " + e8 + " after a stream was destroyed";
}), Ch("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), Ch("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), Ch("ERR_STREAM_WRITE_AFTER_END", "write after end"), Ch("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), Ch("ERR_UNKNOWN_ENCODING", function(e8) {
  return "Unknown encoding: " + e8;
}, TypeError), Ch("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), wh.codes = Eh;
var kh;
var xh;
var Ah;
var Mh;
var Lh;
var Th;
var Oh = "function" == typeof Object.create ? function(e8, t2) {
  e8.super_ = t2, e8.prototype = Object.create(t2.prototype, { constructor: { value: e8, enumerable: false, writable: true, configurable: true } });
} : function(e8, t2) {
  e8.super_ = t2;
  var n2 = function() {
  };
  n2.prototype = t2.prototype, e8.prototype = new n2(), e8.prototype.constructor = e8;
};
var Rh = Dn(Object.freeze({ __proto__: null, default: Oh }));
function Ph() {
  if (xh) return kh;
  function e8(e9) {
    try {
      if (!In.localStorage) return false;
    } catch (e10) {
      return false;
    }
    var t2 = In.localStorage[e9];
    return null != t2 && "true" === String(t2).toLowerCase();
  }
  return xh = 1, kh = function(t2, n2) {
    if (e8("noDeprecation")) return t2;
    var r2 = false;
    return function() {
      if (!r2) {
        if (e8("throwDeprecation")) throw new Error(n2);
        e8("traceDeprecation") ? console.trace(n2) : console.warn(n2), r2 = true;
      }
      return t2.apply(this, arguments);
    };
  }, kh;
}
function Ih() {
  if (Mh) return Ah;
  function e8(e9) {
    var t3 = this;
    this.next = null, this.entry = null, this.finish = function() {
      !function(e10, t4, n3) {
        var r3 = e10.entry;
        for (e10.entry = null; r3; ) {
          var i3 = r3.callback;
          t4.pendingcb--, i3(void 0), r3 = r3.next;
        }
        t4.corkedRequestsFree.next = e10;
      }(t3, e9);
    };
  }
  var t2;
  Mh = 1, Ah = E2, E2.WritableState = w2;
  var n2, r2 = { deprecate: Ph() }, i2 = _u(), o2 = ku.Buffer, s2 = (void 0 !== In ? In : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {
  }, a2 = yh(), c2 = Sh().getHighWaterMark, l2 = wh.codes, d2 = l2.ERR_INVALID_ARG_TYPE, u2 = l2.ERR_METHOD_NOT_IMPLEMENTED, h2 = l2.ERR_MULTIPLE_CALLBACK, f2 = l2.ERR_STREAM_CANNOT_PIPE, p2 = l2.ERR_STREAM_DESTROYED, g2 = l2.ERR_STREAM_NULL_VALUES, m2 = l2.ERR_STREAM_WRITE_AFTER_END, y2 = l2.ERR_UNKNOWN_ENCODING, v2 = a2.errorOrDestroy;
  function b2() {
  }
  function w2(n3, r3, i3) {
    t2 = t2 || Nh(), n3 = n3 || {}, "boolean" != typeof i3 && (i3 = r3 instanceof t2), this.objectMode = !!n3.objectMode, i3 && (this.objectMode = this.objectMode || !!n3.writableObjectMode), this.highWaterMark = c2(this, n3, "writableHighWaterMark", i3), this.finalCalled = false, this.needDrain = false, this.ending = false, this.ended = false, this.finished = false, this.destroyed = false;
    var o3 = false === n3.decodeStrings;
    this.decodeStrings = !o3, this.defaultEncoding = n3.defaultEncoding || "utf8", this.length = 0, this.writing = false, this.corked = 0, this.sync = true, this.bufferProcessing = false, this.onwrite = function(e9) {
      !function(e10, t3) {
        var n4 = e10._writableState, r4 = n4.sync, i4 = n4.writecb;
        if ("function" != typeof i4) throw new h2();
        if (function(e11) {
          e11.writing = false, e11.writecb = null, e11.length -= e11.writelen, e11.writelen = 0;
        }(n4), t3) !function(e11, t4, n5, r5, i5) {
          --t4.pendingcb, n5 ? (Tl.nextTick(i5, r5), Tl.nextTick(A2, e11, t4), e11._writableState.errorEmitted = true, v2(e11, r5)) : (i5(r5), e11._writableState.errorEmitted = true, v2(e11, r5), A2(e11, t4));
        }(e10, n4, r4, t3, i4);
        else {
          var o4 = k2(n4) || e10.destroyed;
          o4 || n4.corked || n4.bufferProcessing || !n4.bufferedRequest || S2(e10, n4), r4 ? Tl.nextTick(_2, e10, n4, o4, i4) : _2(e10, n4, o4, i4);
        }
      }(r3, e9);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = false, this.errorEmitted = false, this.emitClose = false !== n3.emitClose, this.autoDestroy = !!n3.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new e8(this);
  }
  function E2(e9) {
    var r3 = this instanceof (t2 = t2 || Nh());
    if (!r3 && !n2.call(E2, this)) return new E2(e9);
    this._writableState = new w2(e9, this, r3), this.writable = true, e9 && ("function" == typeof e9.write && (this._write = e9.write), "function" == typeof e9.writev && (this._writev = e9.writev), "function" == typeof e9.destroy && (this._destroy = e9.destroy), "function" == typeof e9.final && (this._final = e9.final)), i2.call(this);
  }
  function C2(e9, t3, n3, r3, i3, o3, s3) {
    t3.writelen = r3, t3.writecb = s3, t3.writing = true, t3.sync = true, t3.destroyed ? t3.onwrite(new p2("write")) : n3 ? e9._writev(i3, t3.onwrite) : e9._write(i3, o3, t3.onwrite), t3.sync = false;
  }
  function _2(e9, t3, n3, r3) {
    n3 || function(e10, t4) {
      0 === t4.length && t4.needDrain && (t4.needDrain = false, e10.emit("drain"));
    }(e9, t3), t3.pendingcb--, r3(), A2(e9, t3);
  }
  function S2(t3, n3) {
    n3.bufferProcessing = true;
    var r3 = n3.bufferedRequest;
    if (t3._writev && r3 && r3.next) {
      var i3 = n3.bufferedRequestCount, o3 = new Array(i3), s3 = n3.corkedRequestsFree;
      s3.entry = r3;
      for (var a3 = 0, c3 = true; r3; ) o3[a3] = r3, r3.isBuf || (c3 = false), r3 = r3.next, a3 += 1;
      o3.allBuffers = c3, C2(t3, n3, true, n3.length, o3, "", s3.finish), n3.pendingcb++, n3.lastBufferedRequest = null, s3.next ? (n3.corkedRequestsFree = s3.next, s3.next = null) : n3.corkedRequestsFree = new e8(n3), n3.bufferedRequestCount = 0;
    } else {
      for (; r3; ) {
        var l3 = r3.chunk, d3 = r3.encoding, u3 = r3.callback;
        if (C2(t3, n3, false, n3.objectMode ? 1 : l3.length, l3, d3, u3), r3 = r3.next, n3.bufferedRequestCount--, n3.writing) break;
      }
      null === r3 && (n3.lastBufferedRequest = null);
    }
    n3.bufferedRequest = r3, n3.bufferProcessing = false;
  }
  function k2(e9) {
    return e9.ending && 0 === e9.length && null === e9.bufferedRequest && !e9.finished && !e9.writing;
  }
  function x2(e9, t3) {
    e9._final(function(n3) {
      t3.pendingcb--, n3 && v2(e9, n3), t3.prefinished = true, e9.emit("prefinish"), A2(e9, t3);
    });
  }
  function A2(e9, t3) {
    var n3 = k2(t3);
    if (n3 && (function(e10, t4) {
      t4.prefinished || t4.finalCalled || ("function" != typeof e10._final || t4.destroyed ? (t4.prefinished = true, e10.emit("prefinish")) : (t4.pendingcb++, t4.finalCalled = true, Tl.nextTick(x2, e10, t4)));
    }(e9, t3), 0 === t3.pendingcb && (t3.finished = true, e9.emit("finish"), t3.autoDestroy))) {
      var r3 = e9._readableState;
      (!r3 || r3.autoDestroy && r3.endEmitted) && e9.destroy();
    }
    return n3;
  }
  return Rh(E2, i2), w2.prototype.getBuffer = function() {
    for (var e9 = this.bufferedRequest, t3 = []; e9; ) t3.push(e9), e9 = e9.next;
    return t3;
  }, function() {
    try {
      Object.defineProperty(w2.prototype, "buffer", { get: r2.deprecate(function() {
        return this.getBuffer();
      }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") });
    } catch (e9) {
    }
  }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (n2 = Function.prototype[Symbol.hasInstance], Object.defineProperty(E2, Symbol.hasInstance, { value: function(e9) {
    return !!n2.call(this, e9) || this === E2 && e9 && e9._writableState instanceof w2;
  } })) : n2 = function(e9) {
    return e9 instanceof this;
  }, E2.prototype.pipe = function() {
    v2(this, new f2());
  }, E2.prototype.write = function(e9, t3, n3) {
    var r3, i3 = this._writableState, a3 = false, c3 = !i3.objectMode && (r3 = e9, o2.isBuffer(r3) || r3 instanceof s2);
    return c3 && !o2.isBuffer(e9) && (e9 = function(e10) {
      return o2.from(e10);
    }(e9)), "function" == typeof t3 && (n3 = t3, t3 = null), c3 ? t3 = "buffer" : t3 || (t3 = i3.defaultEncoding), "function" != typeof n3 && (n3 = b2), i3.ending ? function(e10, t4) {
      var n4 = new m2();
      v2(e10, n4), Tl.nextTick(t4, n4);
    }(this, n3) : (c3 || function(e10, t4, n4, r4) {
      var i4;
      return null === n4 ? i4 = new g2() : "string" == typeof n4 || t4.objectMode || (i4 = new d2("chunk", ["string", "Buffer"], n4)), !i4 || (v2(e10, i4), Tl.nextTick(r4, i4), false);
    }(this, i3, e9, n3)) && (i3.pendingcb++, a3 = function(e10, t4, n4, r4, i4, s3) {
      if (!n4) {
        var a4 = function(e11, t5, n5) {
          return e11.objectMode || false === e11.decodeStrings || "string" != typeof t5 || (t5 = o2.from(t5, n5)), t5;
        }(t4, r4, i4);
        r4 !== a4 && (n4 = true, i4 = "buffer", r4 = a4);
      }
      var c4 = t4.objectMode ? 1 : r4.length;
      t4.length += c4;
      var l3 = t4.length < t4.highWaterMark;
      if (l3 || (t4.needDrain = true), t4.writing || t4.corked) {
        var d3 = t4.lastBufferedRequest;
        t4.lastBufferedRequest = { chunk: r4, encoding: i4, isBuf: n4, callback: s3, next: null }, d3 ? d3.next = t4.lastBufferedRequest : t4.bufferedRequest = t4.lastBufferedRequest, t4.bufferedRequestCount += 1;
      } else C2(e10, t4, false, c4, r4, i4, s3);
      return l3;
    }(this, i3, c3, e9, t3, n3)), a3;
  }, E2.prototype.cork = function() {
    this._writableState.corked++;
  }, E2.prototype.uncork = function() {
    var e9 = this._writableState;
    e9.corked && (e9.corked--, e9.writing || e9.corked || e9.bufferProcessing || !e9.bufferedRequest || S2(this, e9));
  }, E2.prototype.setDefaultEncoding = function(e9) {
    if ("string" == typeof e9 && (e9 = e9.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e9 + "").toLowerCase()) > -1)) throw new y2(e9);
    return this._writableState.defaultEncoding = e9, this;
  }, Object.defineProperty(E2.prototype, "writableBuffer", { enumerable: false, get: function() {
    return this._writableState && this._writableState.getBuffer();
  } }), Object.defineProperty(E2.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
    return this._writableState.highWaterMark;
  } }), E2.prototype._write = function(e9, t3, n3) {
    n3(new u2("_write()"));
  }, E2.prototype._writev = null, E2.prototype.end = function(e9, t3, n3) {
    var r3 = this._writableState;
    return "function" == typeof e9 ? (n3 = e9, e9 = null, t3 = null) : "function" == typeof t3 && (n3 = t3, t3 = null), null != e9 && this.write(e9, t3), r3.corked && (r3.corked = 1, this.uncork()), r3.ending || function(e10, t4, n4) {
      t4.ending = true, A2(e10, t4), n4 && (t4.finished ? Tl.nextTick(n4) : e10.once("finish", n4)), t4.ended = true, e10.writable = false;
    }(this, r3, n3), this;
  }, Object.defineProperty(E2.prototype, "writableLength", { enumerable: false, get: function() {
    return this._writableState.length;
  } }), Object.defineProperty(E2.prototype, "destroyed", { enumerable: false, get: function() {
    return void 0 !== this._writableState && this._writableState.destroyed;
  }, set: function(e9) {
    this._writableState && (this._writableState.destroyed = e9);
  } }), E2.prototype.destroy = a2.destroy, E2.prototype._undestroy = a2.undestroy, E2.prototype._destroy = function(e9, t3) {
    t3(e9);
  }, Ah;
}
function Nh() {
  if (Th) return Lh;
  Th = 1;
  var e8 = Object.keys || function(e9) {
    var t3 = [];
    for (var n3 in e9) t3.push(n3);
    return t3;
  };
  Lh = s2;
  var t2 = Jh(), n2 = Ih();
  Rh(s2, t2);
  for (var r2 = e8(n2.prototype), i2 = 0; i2 < r2.length; i2++) {
    var o2 = r2[i2];
    s2.prototype[o2] || (s2.prototype[o2] = n2.prototype[o2]);
  }
  function s2(e9) {
    if (!(this instanceof s2)) return new s2(e9);
    t2.call(this, e9), n2.call(this, e9), this.allowHalfOpen = true, e9 && (false === e9.readable && (this.readable = false), false === e9.writable && (this.writable = false), false === e9.allowHalfOpen && (this.allowHalfOpen = false, this.once("end", a2)));
  }
  function a2() {
    this._writableState.ended || Tl.nextTick(c2, this);
  }
  function c2(e9) {
    e9.end();
  }
  return Object.defineProperty(s2.prototype, "writableHighWaterMark", { enumerable: false, get: function() {
    return this._writableState.highWaterMark;
  } }), Object.defineProperty(s2.prototype, "writableBuffer", { enumerable: false, get: function() {
    return this._writableState && this._writableState.getBuffer();
  } }), Object.defineProperty(s2.prototype, "writableLength", { enumerable: false, get: function() {
    return this._writableState.length;
  } }), Object.defineProperty(s2.prototype, "destroyed", { enumerable: false, get: function() {
    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
  }, set: function(e9) {
    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e9, this._writableState.destroyed = e9);
  } }), Lh;
}
var Dh = Wt.isEncoding || function(e8) {
  switch (e8 && e8.toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
    case "raw":
      return true;
    default:
      return false;
  }
};
function Bh(e8) {
  switch (this.encoding = (e8 || "utf8").toLowerCase().replace(/[-_]/, ""), function(e9) {
    if (e9 && !Dh(e9)) throw new Error("Unknown encoding: " + e9);
  }(e8), this.encoding) {
    case "utf8":
      this.surrogateSize = 3;
      break;
    case "ucs2":
    case "utf16le":
      this.surrogateSize = 2, this.detectIncompleteChar = jh;
      break;
    case "base64":
      this.surrogateSize = 3, this.detectIncompleteChar = Kh;
      break;
    default:
      return void (this.write = $h);
  }
  this.charBuffer = new Wt(6), this.charReceived = 0, this.charLength = 0;
}
function $h(e8) {
  return e8.toString(this.encoding);
}
function jh(e8) {
  this.charReceived = e8.length % 2, this.charLength = this.charReceived ? 2 : 0;
}
function Kh(e8) {
  this.charReceived = e8.length % 3, this.charLength = this.charReceived ? 3 : 0;
}
Bh.prototype.write = function(e8) {
  for (var t2 = ""; this.charLength; ) {
    var n2 = e8.length >= this.charLength - this.charReceived ? this.charLength - this.charReceived : e8.length;
    if (e8.copy(this.charBuffer, this.charReceived, 0, n2), this.charReceived += n2, this.charReceived < this.charLength) return "";
    if (e8 = e8.slice(n2, e8.length), !((r2 = (t2 = this.charBuffer.slice(0, this.charLength).toString(this.encoding)).charCodeAt(t2.length - 1)) >= 55296 && r2 <= 56319)) {
      if (this.charReceived = this.charLength = 0, 0 === e8.length) return t2;
      break;
    }
    this.charLength += this.surrogateSize, t2 = "";
  }
  this.detectIncompleteChar(e8);
  var r2, i2 = e8.length;
  if (this.charLength && (e8.copy(this.charBuffer, 0, e8.length - this.charReceived, i2), i2 -= this.charReceived), i2 = (t2 += e8.toString(this.encoding, 0, i2)).length - 1, (r2 = t2.charCodeAt(i2)) >= 55296 && r2 <= 56319) {
    var o2 = this.surrogateSize;
    return this.charLength += o2, this.charReceived += o2, this.charBuffer.copy(this.charBuffer, o2, 0, o2), e8.copy(this.charBuffer, 0, 0, o2), t2.substring(0, i2);
  }
  return t2;
}, Bh.prototype.detectIncompleteChar = function(e8) {
  for (var t2 = e8.length >= 3 ? 3 : e8.length; t2 > 0; t2--) {
    var n2 = e8[e8.length - t2];
    if (1 == t2 && n2 >> 5 == 6) {
      this.charLength = 2;
      break;
    }
    if (t2 <= 2 && n2 >> 4 == 14) {
      this.charLength = 3;
      break;
    }
    if (t2 <= 3 && n2 >> 3 == 30) {
      this.charLength = 4;
      break;
    }
  }
  this.charReceived = t2;
}, Bh.prototype.end = function(e8) {
  var t2 = "";
  if (e8 && e8.length && (t2 = this.write(e8)), this.charReceived) {
    var n2 = this.charReceived, r2 = this.charBuffer, i2 = this.encoding;
    t2 += r2.slice(0, n2).toString(i2);
  }
  return t2;
};
var Fh = Dn(Object.freeze({ __proto__: null, StringDecoder: Bh }));
var Uh = wh.codes.ERR_STREAM_PREMATURE_CLOSE;
function Hh() {
}
var zh;
var qh;
var Vh;
var Wh;
var Gh;
var Yh;
var Zh = function e6(t2, n2, r2) {
  if ("function" == typeof n2) return e6(t2, null, n2);
  n2 || (n2 = {}), r2 = /* @__PURE__ */ function(e8) {
    var t3 = false;
    return function() {
      if (!t3) {
        t3 = true;
        for (var n3 = arguments.length, r3 = new Array(n3), i3 = 0; i3 < n3; i3++) r3[i3] = arguments[i3];
        e8.apply(this, r3);
      }
    };
  }(r2 || Hh);
  var i2 = n2.readable || false !== n2.readable && t2.readable, o2 = n2.writable || false !== n2.writable && t2.writable, s2 = function() {
    t2.writable || c2();
  }, a2 = t2._writableState && t2._writableState.finished, c2 = function() {
    o2 = false, a2 = true, i2 || r2.call(t2);
  }, l2 = t2._readableState && t2._readableState.endEmitted, d2 = function() {
    i2 = false, l2 = true, o2 || r2.call(t2);
  }, u2 = function(e8) {
    r2.call(t2, e8);
  }, h2 = function() {
    var e8;
    return i2 && !l2 ? (t2._readableState && t2._readableState.ended || (e8 = new Uh()), r2.call(t2, e8)) : o2 && !a2 ? (t2._writableState && t2._writableState.ended || (e8 = new Uh()), r2.call(t2, e8)) : void 0;
  }, f2 = function() {
    t2.req.on("finish", c2);
  };
  return function(e8) {
    return e8.setHeader && "function" == typeof e8.abort;
  }(t2) ? (t2.on("complete", c2), t2.on("abort", h2), t2.req ? f2() : t2.on("request", f2)) : o2 && !t2._writableState && (t2.on("end", s2), t2.on("close", s2)), t2.on("end", d2), t2.on("finish", c2), false !== n2.error && t2.on("error", u2), t2.on("close", h2), function() {
    t2.removeListener("complete", c2), t2.removeListener("abort", h2), t2.removeListener("request", f2), t2.req && t2.req.removeListener("finish", c2), t2.removeListener("end", s2), t2.removeListener("close", s2), t2.removeListener("finish", c2), t2.removeListener("end", d2), t2.removeListener("error", u2), t2.removeListener("close", h2);
  };
};
function Jh() {
  if (Yh) return Gh;
  var e8;
  Yh = 1, Gh = E2, E2.ReadableState = w2, xd.EventEmitter;
  var t2, n2 = function(e9, t3) {
    return e9.listeners(t3).length;
  }, r2 = _u(), i2 = ku.Buffer, o2 = (void 0 !== In ? In : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {
  }, s2 = gh;
  t2 = s2 && s2.debuglog ? s2.debuglog("stream") : function() {
  };
  var a2, c2, l2, d2 = mh(), u2 = yh(), h2 = Sh().getHighWaterMark, f2 = wh.codes, p2 = f2.ERR_INVALID_ARG_TYPE, g2 = f2.ERR_STREAM_PUSH_AFTER_EOF, m2 = f2.ERR_METHOD_NOT_IMPLEMENTED, y2 = f2.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
  Rh(E2, r2);
  var v2 = u2.errorOrDestroy, b2 = ["error", "close", "destroy", "pause", "resume"];
  function w2(t3, n3, r3) {
    e8 = e8 || Nh(), t3 = t3 || {}, "boolean" != typeof r3 && (r3 = n3 instanceof e8), this.objectMode = !!t3.objectMode, r3 && (this.objectMode = this.objectMode || !!t3.readableObjectMode), this.highWaterMark = h2(this, t3, "readableHighWaterMark", r3), this.buffer = new d2(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = false, this.endEmitted = false, this.reading = false, this.sync = true, this.needReadable = false, this.emittedReadable = false, this.readableListening = false, this.resumeScheduled = false, this.paused = true, this.emitClose = false !== t3.emitClose, this.autoDestroy = !!t3.autoDestroy, this.destroyed = false, this.defaultEncoding = t3.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = false, this.decoder = null, this.encoding = null, t3.encoding && (a2 || (a2 = Fh.StringDecoder), this.decoder = new a2(t3.encoding), this.encoding = t3.encoding);
  }
  function E2(t3) {
    if (e8 = e8 || Nh(), !(this instanceof E2)) return new E2(t3);
    var n3 = this instanceof e8;
    this._readableState = new w2(t3, this, n3), this.readable = true, t3 && ("function" == typeof t3.read && (this._read = t3.read), "function" == typeof t3.destroy && (this._destroy = t3.destroy)), r2.call(this);
  }
  function C2(e9, n3, r3, s3, a3) {
    t2("readableAddChunk", n3);
    var c3, l3 = e9._readableState;
    if (null === n3) l3.reading = false, function(e10, n4) {
      if (t2("onEofChunk"), !n4.ended) {
        if (n4.decoder) {
          var r4 = n4.decoder.end();
          r4 && r4.length && (n4.buffer.push(r4), n4.length += n4.objectMode ? 1 : r4.length);
        }
        n4.ended = true, n4.sync ? x2(e10) : (n4.needReadable = false, n4.emittedReadable || (n4.emittedReadable = true, A2(e10)));
      }
    }(e9, l3);
    else if (a3 || (c3 = function(e10, t3) {
      var n4, r4;
      return r4 = t3, i2.isBuffer(r4) || r4 instanceof o2 || "string" == typeof t3 || void 0 === t3 || e10.objectMode || (n4 = new p2("chunk", ["string", "Buffer", "Uint8Array"], t3)), n4;
    }(l3, n3)), c3) v2(e9, c3);
    else if (l3.objectMode || n3 && n3.length > 0) if ("string" == typeof n3 || l3.objectMode || Object.getPrototypeOf(n3) === i2.prototype || (n3 = function(e10) {
      return i2.from(e10);
    }(n3)), s3) l3.endEmitted ? v2(e9, new y2()) : _2(e9, l3, n3, true);
    else if (l3.ended) v2(e9, new g2());
    else {
      if (l3.destroyed) return false;
      l3.reading = false, l3.decoder && !r3 ? (n3 = l3.decoder.write(n3), l3.objectMode || 0 !== n3.length ? _2(e9, l3, n3, false) : M2(e9, l3)) : _2(e9, l3, n3, false);
    }
    else s3 || (l3.reading = false, M2(e9, l3));
    return !l3.ended && (l3.length < l3.highWaterMark || 0 === l3.length);
  }
  function _2(e9, t3, n3, r3) {
    t3.flowing && 0 === t3.length && !t3.sync ? (t3.awaitDrain = 0, e9.emit("data", n3)) : (t3.length += t3.objectMode ? 1 : n3.length, r3 ? t3.buffer.unshift(n3) : t3.buffer.push(n3), t3.needReadable && x2(e9)), M2(e9, t3);
  }
  Object.defineProperty(E2.prototype, "destroyed", { enumerable: false, get: function() {
    return void 0 !== this._readableState && this._readableState.destroyed;
  }, set: function(e9) {
    this._readableState && (this._readableState.destroyed = e9);
  } }), E2.prototype.destroy = u2.destroy, E2.prototype._undestroy = u2.undestroy, E2.prototype._destroy = function(e9, t3) {
    t3(e9);
  }, E2.prototype.push = function(e9, t3) {
    var n3, r3 = this._readableState;
    return r3.objectMode ? n3 = true : "string" == typeof e9 && ((t3 = t3 || r3.defaultEncoding) !== r3.encoding && (e9 = i2.from(e9, t3), t3 = ""), n3 = true), C2(this, e9, t3, false, n3);
  }, E2.prototype.unshift = function(e9) {
    return C2(this, e9, null, true, false);
  }, E2.prototype.isPaused = function() {
    return false === this._readableState.flowing;
  }, E2.prototype.setEncoding = function(e9) {
    a2 || (a2 = Fh.StringDecoder);
    var t3 = new a2(e9);
    this._readableState.decoder = t3, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var n3 = this._readableState.buffer.head, r3 = ""; null !== n3; ) r3 += t3.write(n3.data), n3 = n3.next;
    return this._readableState.buffer.clear(), "" !== r3 && this._readableState.buffer.push(r3), this._readableState.length = r3.length, this;
  };
  var S2 = 1073741824;
  function k2(e9, t3) {
    return e9 <= 0 || 0 === t3.length && t3.ended ? 0 : t3.objectMode ? 1 : e9 != e9 ? t3.flowing && t3.length ? t3.buffer.head.data.length : t3.length : (e9 > t3.highWaterMark && (t3.highWaterMark = function(e10) {
      return e10 >= S2 ? e10 = S2 : (e10--, e10 |= e10 >>> 1, e10 |= e10 >>> 2, e10 |= e10 >>> 4, e10 |= e10 >>> 8, e10 |= e10 >>> 16, e10++), e10;
    }(e9)), e9 <= t3.length ? e9 : t3.ended ? t3.length : (t3.needReadable = true, 0));
  }
  function x2(e9) {
    var n3 = e9._readableState;
    t2("emitReadable", n3.needReadable, n3.emittedReadable), n3.needReadable = false, n3.emittedReadable || (t2("emitReadable", n3.flowing), n3.emittedReadable = true, Tl.nextTick(A2, e9));
  }
  function A2(e9) {
    var n3 = e9._readableState;
    t2("emitReadable_", n3.destroyed, n3.length, n3.ended), n3.destroyed || !n3.length && !n3.ended || (e9.emit("readable"), n3.emittedReadable = false), n3.needReadable = !n3.flowing && !n3.ended && n3.length <= n3.highWaterMark, P2(e9);
  }
  function M2(e9, t3) {
    t3.readingMore || (t3.readingMore = true, Tl.nextTick(L2, e9, t3));
  }
  function L2(e9, n3) {
    for (; !n3.reading && !n3.ended && (n3.length < n3.highWaterMark || n3.flowing && 0 === n3.length); ) {
      var r3 = n3.length;
      if (t2("maybeReadMore read 0"), e9.read(0), r3 === n3.length) break;
    }
    n3.readingMore = false;
  }
  function T2(e9) {
    var t3 = e9._readableState;
    t3.readableListening = e9.listenerCount("readable") > 0, t3.resumeScheduled && !t3.paused ? t3.flowing = true : e9.listenerCount("data") > 0 && e9.resume();
  }
  function O2(e9) {
    t2("readable nexttick read 0"), e9.read(0);
  }
  function R2(e9, n3) {
    t2("resume", n3.reading), n3.reading || e9.read(0), n3.resumeScheduled = false, e9.emit("resume"), P2(e9), n3.flowing && !n3.reading && e9.read(0);
  }
  function P2(e9) {
    var n3 = e9._readableState;
    for (t2("flow", n3.flowing); n3.flowing && null !== e9.read(); ) ;
  }
  function I2(e9, t3) {
    return 0 === t3.length ? null : (t3.objectMode ? n3 = t3.buffer.shift() : !e9 || e9 >= t3.length ? (n3 = t3.decoder ? t3.buffer.join("") : 1 === t3.buffer.length ? t3.buffer.first() : t3.buffer.concat(t3.length), t3.buffer.clear()) : n3 = t3.buffer.consume(e9, t3.decoder), n3);
    var n3;
  }
  function N2(e9) {
    var n3 = e9._readableState;
    t2("endReadable", n3.endEmitted), n3.endEmitted || (n3.ended = true, Tl.nextTick(D2, n3, e9));
  }
  function D2(e9, n3) {
    if (t2("endReadableNT", e9.endEmitted, e9.length), !e9.endEmitted && 0 === e9.length && (e9.endEmitted = true, n3.readable = false, n3.emit("end"), e9.autoDestroy)) {
      var r3 = n3._writableState;
      (!r3 || r3.autoDestroy && r3.finished) && n3.destroy();
    }
  }
  function B2(e9, t3) {
    for (var n3 = 0, r3 = e9.length; n3 < r3; n3++) if (e9[n3] === t3) return n3;
    return -1;
  }
  return E2.prototype.read = function(e9) {
    t2("read", e9), e9 = parseInt(e9, 10);
    var n3 = this._readableState, r3 = e9;
    if (0 !== e9 && (n3.emittedReadable = false), 0 === e9 && n3.needReadable && ((0 !== n3.highWaterMark ? n3.length >= n3.highWaterMark : n3.length > 0) || n3.ended)) return t2("read: emitReadable", n3.length, n3.ended), 0 === n3.length && n3.ended ? N2(this) : x2(this), null;
    if (0 === (e9 = k2(e9, n3)) && n3.ended) return 0 === n3.length && N2(this), null;
    var i3, o3 = n3.needReadable;
    return t2("need readable", o3), (0 === n3.length || n3.length - e9 < n3.highWaterMark) && t2("length less than watermark", o3 = true), n3.ended || n3.reading ? t2("reading or ended", o3 = false) : o3 && (t2("do read"), n3.reading = true, n3.sync = true, 0 === n3.length && (n3.needReadable = true), this._read(n3.highWaterMark), n3.sync = false, n3.reading || (e9 = k2(r3, n3))), null === (i3 = e9 > 0 ? I2(e9, n3) : null) ? (n3.needReadable = n3.length <= n3.highWaterMark, e9 = 0) : (n3.length -= e9, n3.awaitDrain = 0), 0 === n3.length && (n3.ended || (n3.needReadable = true), r3 !== e9 && n3.ended && N2(this)), null !== i3 && this.emit("data", i3), i3;
  }, E2.prototype._read = function(e9) {
    v2(this, new m2("_read()"));
  }, E2.prototype.pipe = function(e9, r3) {
    var i3 = this, o3 = this._readableState;
    switch (o3.pipesCount) {
      case 0:
        o3.pipes = e9;
        break;
      case 1:
        o3.pipes = [o3.pipes, e9];
        break;
      default:
        o3.pipes.push(e9);
    }
    o3.pipesCount += 1, t2("pipe count=%d opts=%j", o3.pipesCount, r3);
    var s3 = r3 && false === r3.end || e9 === Tl.stdout || e9 === Tl.stderr ? p3 : a3;
    function a3() {
      t2("onend"), e9.end();
    }
    o3.endEmitted ? Tl.nextTick(s3) : i3.once("end", s3), e9.on("unpipe", function n3(r4, s4) {
      t2("onunpipe"), r4 === i3 && s4 && false === s4.hasUnpiped && (s4.hasUnpiped = true, t2("cleanup"), e9.removeListener("close", h3), e9.removeListener("finish", f3), e9.removeListener("drain", c3), e9.removeListener("error", u3), e9.removeListener("unpipe", n3), i3.removeListener("end", a3), i3.removeListener("end", p3), i3.removeListener("data", d3), l3 = true, !o3.awaitDrain || e9._writableState && !e9._writableState.needDrain || c3());
    });
    var c3 = /* @__PURE__ */ function(e10) {
      return function() {
        var r4 = e10._readableState;
        t2("pipeOnDrain", r4.awaitDrain), r4.awaitDrain && r4.awaitDrain--, 0 === r4.awaitDrain && n2(e10, "data") && (r4.flowing = true, P2(e10));
      };
    }(i3);
    e9.on("drain", c3);
    var l3 = false;
    function d3(n3) {
      t2("ondata");
      var r4 = e9.write(n3);
      t2("dest.write", r4), false === r4 && ((1 === o3.pipesCount && o3.pipes === e9 || o3.pipesCount > 1 && -1 !== B2(o3.pipes, e9)) && !l3 && (t2("false write response, pause", o3.awaitDrain), o3.awaitDrain++), i3.pause());
    }
    function u3(r4) {
      t2("onerror", r4), p3(), e9.removeListener("error", u3), 0 === n2(e9, "error") && v2(e9, r4);
    }
    function h3() {
      e9.removeListener("finish", f3), p3();
    }
    function f3() {
      t2("onfinish"), e9.removeListener("close", h3), p3();
    }
    function p3() {
      t2("unpipe"), i3.unpipe(e9);
    }
    return i3.on("data", d3), function(e10, t3, n3) {
      if ("function" == typeof e10.prependListener) return e10.prependListener(t3, n3);
      e10._events && e10._events[t3] ? Array.isArray(e10._events[t3]) ? e10._events[t3].unshift(n3) : e10._events[t3] = [n3, e10._events[t3]] : e10.on(t3, n3);
    }(e9, "error", u3), e9.once("close", h3), e9.once("finish", f3), e9.emit("pipe", i3), o3.flowing || (t2("pipe resume"), i3.resume()), e9;
  }, E2.prototype.unpipe = function(e9) {
    var t3 = this._readableState, n3 = { hasUnpiped: false };
    if (0 === t3.pipesCount) return this;
    if (1 === t3.pipesCount) return e9 && e9 !== t3.pipes || (e9 || (e9 = t3.pipes), t3.pipes = null, t3.pipesCount = 0, t3.flowing = false, e9 && e9.emit("unpipe", this, n3)), this;
    if (!e9) {
      var r3 = t3.pipes, i3 = t3.pipesCount;
      t3.pipes = null, t3.pipesCount = 0, t3.flowing = false;
      for (var o3 = 0; o3 < i3; o3++) r3[o3].emit("unpipe", this, { hasUnpiped: false });
      return this;
    }
    var s3 = B2(t3.pipes, e9);
    return -1 === s3 || (t3.pipes.splice(s3, 1), t3.pipesCount -= 1, 1 === t3.pipesCount && (t3.pipes = t3.pipes[0]), e9.emit("unpipe", this, n3)), this;
  }, E2.prototype.on = function(e9, n3) {
    var i3 = r2.prototype.on.call(this, e9, n3), o3 = this._readableState;
    return "data" === e9 ? (o3.readableListening = this.listenerCount("readable") > 0, false !== o3.flowing && this.resume()) : "readable" === e9 && (o3.endEmitted || o3.readableListening || (o3.readableListening = o3.needReadable = true, o3.flowing = false, o3.emittedReadable = false, t2("on readable", o3.length, o3.reading), o3.length ? x2(this) : o3.reading || Tl.nextTick(O2, this))), i3;
  }, E2.prototype.addListener = E2.prototype.on, E2.prototype.removeListener = function(e9, t3) {
    var n3 = r2.prototype.removeListener.call(this, e9, t3);
    return "readable" === e9 && Tl.nextTick(T2, this), n3;
  }, E2.prototype.removeAllListeners = function(e9) {
    var t3 = r2.prototype.removeAllListeners.apply(this, arguments);
    return "readable" !== e9 && void 0 !== e9 || Tl.nextTick(T2, this), t3;
  }, E2.prototype.resume = function() {
    var e9 = this._readableState;
    return e9.flowing || (t2("resume"), e9.flowing = !e9.readableListening, function(e10, t3) {
      t3.resumeScheduled || (t3.resumeScheduled = true, Tl.nextTick(R2, e10, t3));
    }(this, e9)), e9.paused = false, this;
  }, E2.prototype.pause = function() {
    return t2("call pause flowing=%j", this._readableState.flowing), false !== this._readableState.flowing && (t2("pause"), this._readableState.flowing = false, this.emit("pause")), this._readableState.paused = true, this;
  }, E2.prototype.wrap = function(e9) {
    var n3 = this, r3 = this._readableState, i3 = false;
    for (var o3 in e9.on("end", function() {
      if (t2("wrapped end"), r3.decoder && !r3.ended) {
        var e10 = r3.decoder.end();
        e10 && e10.length && n3.push(e10);
      }
      n3.push(null);
    }), e9.on("data", function(o4) {
      t2("wrapped data"), r3.decoder && (o4 = r3.decoder.write(o4)), r3.objectMode && null == o4 || (r3.objectMode || o4 && o4.length) && (n3.push(o4) || (i3 = true, e9.pause()));
    }), e9) void 0 === this[o3] && "function" == typeof e9[o3] && (this[o3] = /* @__PURE__ */ function(t3) {
      return function() {
        return e9[t3].apply(e9, arguments);
      };
    }(o3));
    for (var s3 = 0; s3 < b2.length; s3++) e9.on(b2[s3], this.emit.bind(this, b2[s3]));
    return this._read = function(n4) {
      t2("wrapped _read", n4), i3 && (i3 = false, e9.resume());
    }, this;
  }, "function" == typeof Symbol && (E2.prototype[Symbol.asyncIterator] = function() {
    return void 0 === c2 && (c2 = function() {
      if (qh) return zh;
      var e9;
      function t3(e10, t4, n4) {
        return (t4 = function(e11) {
          var t5 = function(e12, t6) {
            if ("object" != typeof e12 || null === e12) return e12;
            var n5 = e12[Symbol.toPrimitive];
            if (void 0 !== n5) {
              var r4 = n5.call(e12, "string");
              if ("object" != typeof r4) return r4;
              throw new TypeError("@@toPrimitive must return a primitive value.");
            }
            return String(e12);
          }(e11);
          return "symbol" == typeof t5 ? t5 : String(t5);
        }(t4)) in e10 ? Object.defineProperty(e10, t4, { value: n4, enumerable: true, configurable: true, writable: true }) : e10[t4] = n4, e10;
      }
      qh = 1;
      var n3 = Zh, r3 = Symbol("lastResolve"), i3 = Symbol("lastReject"), o3 = Symbol("error"), s3 = Symbol("ended"), a3 = Symbol("lastPromise"), c3 = Symbol("handlePromise"), l3 = Symbol("stream");
      function d3(e10, t4) {
        return { value: e10, done: t4 };
      }
      function u3(e10) {
        var t4 = e10[r3];
        if (null !== t4) {
          var n4 = e10[l3].read();
          null !== n4 && (e10[a3] = null, e10[r3] = null, e10[i3] = null, t4(d3(n4, false)));
        }
      }
      function h3(e10) {
        Tl.nextTick(u3, e10);
      }
      var f3 = Object.getPrototypeOf(function() {
      }), p3 = Object.setPrototypeOf((t3(e9 = { get stream() {
        return this[l3];
      }, next: function() {
        var e10 = this, t4 = this[o3];
        if (null !== t4) return Promise.reject(t4);
        if (this[s3]) return Promise.resolve(d3(void 0, true));
        if (this[l3].destroyed) return new Promise(function(t5, n5) {
          Tl.nextTick(function() {
            e10[o3] ? n5(e10[o3]) : t5(d3(void 0, true));
          });
        });
        var n4, r4 = this[a3];
        if (r4) n4 = new Promise(/* @__PURE__ */ function(e11, t5) {
          return function(n5, r5) {
            e11.then(function() {
              t5[s3] ? n5(d3(void 0, true)) : t5[c3](n5, r5);
            }, r5);
          };
        }(r4, this));
        else {
          var i4 = this[l3].read();
          if (null !== i4) return Promise.resolve(d3(i4, false));
          n4 = new Promise(this[c3]);
        }
        return this[a3] = n4, n4;
      } }, Symbol.asyncIterator, function() {
        return this;
      }), t3(e9, "return", function() {
        var e10 = this;
        return new Promise(function(t4, n4) {
          e10[l3].destroy(null, function(e11) {
            e11 ? n4(e11) : t4(d3(void 0, true));
          });
        });
      }), e9), f3);
      return zh = function(e10) {
        var u4, f4 = Object.create(p3, (t3(u4 = {}, l3, { value: e10, writable: true }), t3(u4, r3, { value: null, writable: true }), t3(u4, i3, { value: null, writable: true }), t3(u4, o3, { value: null, writable: true }), t3(u4, s3, { value: e10._readableState.endEmitted, writable: true }), t3(u4, c3, { value: function(e11, t4) {
          var n4 = f4[l3].read();
          n4 ? (f4[a3] = null, f4[r3] = null, f4[i3] = null, e11(d3(n4, false))) : (f4[r3] = e11, f4[i3] = t4);
        }, writable: true }), u4));
        return f4[a3] = null, n3(e10, function(e11) {
          if (e11 && "ERR_STREAM_PREMATURE_CLOSE" !== e11.code) {
            var t4 = f4[i3];
            return null !== t4 && (f4[a3] = null, f4[r3] = null, f4[i3] = null, t4(e11)), void (f4[o3] = e11);
          }
          var n4 = f4[r3];
          null !== n4 && (f4[a3] = null, f4[r3] = null, f4[i3] = null, n4(d3(void 0, true))), f4[s3] = true;
        }), e10.on("readable", h3.bind(null, f4)), f4;
      }, zh;
    }()), c2(this);
  }), Object.defineProperty(E2.prototype, "readableHighWaterMark", { enumerable: false, get: function() {
    return this._readableState.highWaterMark;
  } }), Object.defineProperty(E2.prototype, "readableBuffer", { enumerable: false, get: function() {
    return this._readableState && this._readableState.buffer;
  } }), Object.defineProperty(E2.prototype, "readableFlowing", { enumerable: false, get: function() {
    return this._readableState.flowing;
  }, set: function(e9) {
    this._readableState && (this._readableState.flowing = e9);
  } }), E2._fromList = I2, Object.defineProperty(E2.prototype, "readableLength", { enumerable: false, get: function() {
    return this._readableState.length;
  } }), "function" == typeof Symbol && (E2.from = function(e9, t3) {
    return void 0 === l2 && (l2 = Wh ? Vh : (Wh = 1, Vh = function() {
      throw new Error("Readable.from is not available in the browser");
    })), l2(E2, e9, t3);
  }), Gh;
}
var Xh = af;
var Qh = wh.codes;
var ef = Qh.ERR_METHOD_NOT_IMPLEMENTED;
var tf = Qh.ERR_MULTIPLE_CALLBACK;
var nf = Qh.ERR_TRANSFORM_ALREADY_TRANSFORMING;
var rf = Qh.ERR_TRANSFORM_WITH_LENGTH_0;
var of = Nh();
function sf(e8, t2) {
  var n2 = this._transformState;
  n2.transforming = false;
  var r2 = n2.writecb;
  if (null === r2) return this.emit("error", new tf());
  n2.writechunk = null, n2.writecb = null, null != t2 && this.push(t2), r2(e8);
  var i2 = this._readableState;
  i2.reading = false, (i2.needReadable || i2.length < i2.highWaterMark) && this._read(i2.highWaterMark);
}
function af(e8) {
  if (!(this instanceof af)) return new af(e8);
  of.call(this, e8), this._transformState = { afterTransform: sf.bind(this), needTransform: false, transforming: false, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = true, this._readableState.sync = false, e8 && ("function" == typeof e8.transform && (this._transform = e8.transform), "function" == typeof e8.flush && (this._flush = e8.flush)), this.on("prefinish", cf);
}
function cf() {
  var e8 = this;
  "function" != typeof this._flush || this._readableState.destroyed ? lf(this, null, null) : this._flush(function(t2, n2) {
    lf(e8, t2, n2);
  });
}
function lf(e8, t2, n2) {
  if (t2) return e8.emit("error", t2);
  if (null != n2 && e8.push(n2), e8._writableState.length) throw new rf();
  if (e8._transformState.transforming) throw new nf();
  return e8.push(null);
}
Rh(af, of), af.prototype.push = function(e8, t2) {
  return this._transformState.needTransform = false, of.prototype.push.call(this, e8, t2);
}, af.prototype._transform = function(e8, t2, n2) {
  n2(new ef("_transform()"));
}, af.prototype._write = function(e8, t2, n2) {
  var r2 = this._transformState;
  if (r2.writecb = n2, r2.writechunk = e8, r2.writeencoding = t2, !r2.transforming) {
    var i2 = this._readableState;
    (r2.needTransform || i2.needReadable || i2.length < i2.highWaterMark) && this._read(i2.highWaterMark);
  }
}, af.prototype._read = function(e8) {
  var t2 = this._transformState;
  null === t2.writechunk || t2.transforming ? t2.needTransform = true : (t2.transforming = true, this._transform(t2.writechunk, t2.writeencoding, t2.afterTransform));
}, af.prototype._destroy = function(e8, t2) {
  of.prototype._destroy.call(this, e8, function(e9) {
    t2(e9);
  });
};
var df;
var uf = ff;
var hf = Xh;
function ff(e8) {
  if (!(this instanceof ff)) return new ff(e8);
  hf.call(this, e8);
}
Rh(ff, hf), ff.prototype._transform = function(e8, t2, n2) {
  n2(null, e8);
};
var pf = wh.codes;
var gf = pf.ERR_MISSING_ARGS;
var mf = pf.ERR_STREAM_DESTROYED;
function yf(e8) {
  if (e8) throw e8;
}
function vf(e8) {
  e8();
}
function bf(e8, t2) {
  return e8.pipe(t2);
}
var wf = function() {
  for (var e8 = arguments.length, t2 = new Array(e8), n2 = 0; n2 < e8; n2++) t2[n2] = arguments[n2];
  var r2, i2 = function(e9) {
    return e9.length ? "function" != typeof e9[e9.length - 1] ? yf : e9.pop() : yf;
  }(t2);
  if (Array.isArray(t2[0]) && (t2 = t2[0]), t2.length < 2) throw new gf("streams");
  var o2 = t2.map(function(e9, n3) {
    var s2 = n3 < t2.length - 1;
    return function(e10, t3, n4, r3) {
      r3 = /* @__PURE__ */ function(e11) {
        var t4 = false;
        return function() {
          t4 || (t4 = true, e11.apply(void 0, arguments));
        };
      }(r3);
      var i3 = false;
      e10.on("close", function() {
        i3 = true;
      }), void 0 === df && (df = Zh), df(e10, { readable: t3, writable: n4 }, function(e11) {
        if (e11) return r3(e11);
        i3 = true, r3();
      });
      var o3 = false;
      return function(t4) {
        if (!i3 && !o3) return o3 = true, function(e11) {
          return e11.setHeader && "function" == typeof e11.abort;
        }(e10) ? e10.abort() : "function" == typeof e10.destroy ? e10.destroy() : void r3(t4 || new mf("pipe"));
      };
    }(e9, s2, n3 > 0, function(e10) {
      r2 || (r2 = e10), e10 && o2.forEach(vf), s2 || (o2.forEach(vf), i2(r2));
    });
  });
  return t2.reduce(bf);
};
!function(e8, t2) {
  (t2 = Cu.exports = Jh()).Stream = t2, t2.Readable = t2, t2.Writable = Ih(), t2.Duplex = Nh(), t2.Transform = Xh, t2.PassThrough = uf, t2.finished = Zh, t2.pipeline = wf;
}(0, Cu.exports);
var Ef = Cu.exports;
var Cf = {};
var _f = { exports: {} };
var Sf = function e7(t2, n2) {
  if (t2 && n2) return e7(t2)(n2);
  if ("function" != typeof t2) throw new TypeError("need wrapper function");
  return Object.keys(t2).forEach(function(e8) {
    r2[e8] = t2[e8];
  }), r2;
  function r2() {
    for (var e8 = new Array(arguments.length), n3 = 0; n3 < e8.length; n3++) e8[n3] = arguments[n3];
    var r3 = t2.apply(this, e8), i2 = e8[e8.length - 1];
    return "function" == typeof r3 && r3 !== i2 && Object.keys(i2).forEach(function(e9) {
      r3[e9] = i2[e9];
    }), r3;
  }
};
function kf(e8) {
  var t2 = function() {
    return t2.called ? t2.value : (t2.called = true, t2.value = e8.apply(this, arguments));
  };
  return t2.called = false, t2;
}
function xf(e8) {
  var t2 = function() {
    if (t2.called) throw new Error(t2.onceError);
    return t2.called = true, t2.value = e8.apply(this, arguments);
  }, n2 = e8.name || "Function wrapped with `once`";
  return t2.onceError = n2 + " shouldn't be called more than once", t2.called = false, t2;
}
_f.exports = Sf(kf), _f.exports.strict = Sf(xf), kf.proto = kf(function() {
  Object.defineProperty(Function.prototype, "once", { value: function() {
    return kf(this);
  }, configurable: true }), Object.defineProperty(Function.prototype, "onceStrict", { value: function() {
    return xf(this);
  }, configurable: true });
});
var Af = _f.exports;
var Mf = {};
Object.defineProperty(Mf, "__esModule", { value: true }), Mf.Substream = void 0;
var Lf = Ef;
var Tf = class extends Lf.Duplex {
  constructor({ parent: e8, name: t2 }) {
    super({ objectMode: true }), this._parent = e8, this._name = t2;
  }
  _read() {
  }
  _write(e8, t2, n2) {
    this._parent.push({ name: this._name, data: e8 }), n2();
  }
};
Mf.Substream = Tf;
var Of = In && In.__importDefault || function(e8) {
  return e8 && e8.__esModule ? e8 : { default: e8 };
};
Object.defineProperty(Cf, "__esModule", { value: true }), Cf.ObjectMultiplex = void 0;
var Rf = Ef;
var Pf = Of(Af);
var If = Mf;
var Nf = Symbol("IGNORE_SUBSTREAM");
var Df = class extends Rf.Duplex {
  constructor(e8 = {}) {
    super(Object.assign(Object.assign({}, e8), { objectMode: true })), this._substreams = {};
  }
  createStream(e8) {
    if (this.destroyed) throw new Error(`ObjectMultiplex - parent stream for name "${e8}" already destroyed`);
    if (this._readableState.ended || this._writableState.ended) throw new Error(`ObjectMultiplex - parent stream for name "${e8}" already ended`);
    if (!e8) throw new Error("ObjectMultiplex - name must not be empty");
    if (this._substreams[e8]) throw new Error(`ObjectMultiplex - Substream for name "${e8}" already exists`);
    const t2 = new If.Substream({ parent: this, name: e8 });
    return this._substreams[e8] = t2, function(e9, t3) {
      const n2 = (0, Pf.default)(t3);
      (0, Rf.finished)(e9, { readable: false }, n2), (0, Rf.finished)(e9, { writable: false }, n2);
    }(this, (e9) => t2.destroy(e9 || void 0)), t2;
  }
  ignoreStream(e8) {
    if (!e8) throw new Error("ObjectMultiplex - name must not be empty");
    if (this._substreams[e8]) throw new Error(`ObjectMultiplex - Substream for name "${e8}" already exists`);
    this._substreams[e8] = Nf;
  }
  _read() {
  }
  _write(e8, t2, n2) {
    const { name: r2, data: i2 } = e8;
    if (!r2) return console.warn(`ObjectMultiplex - malformed chunk without name "${e8}"`), n2();
    const o2 = this._substreams[r2];
    return o2 ? (o2 !== Nf && o2.push(i2), n2()) : (console.warn(`ObjectMultiplex - orphaned data for stream "${r2}"`), n2());
  }
};
Cf.ObjectMultiplex = Df;
var Bf = Nn(Cf.ObjectMultiplex);
var $f = (e8) => null !== e8 && "object" == typeof e8 && "function" == typeof e8.pipe;
$f.writable = (e8) => $f(e8) && false !== e8.writable && "function" == typeof e8._write && "object" == typeof e8._writableState, $f.readable = (e8) => $f(e8) && false !== e8.readable && "function" == typeof e8._read && "object" == typeof e8._readableState, $f.duplex = (e8) => $f.writable(e8) && $f.readable(e8), $f.transform = (e8) => $f.duplex(e8) && "function" == typeof e8._transform;
var jf;
var Kf = $f;
var Ff = class extends Eu {
  constructor(e8, { jsonRpcStreamName: t2, logger: n2 = console, maxEventListeners: r2 = 100, rpcMiddleware: i2 = [] }) {
    if (super({ logger: n2, maxEventListeners: r2, rpcMiddleware: i2 }), !Kf.duplex(e8)) throw new Error(kc.errors.invalidDuplexStream());
    this._handleStreamDisconnect = this._handleStreamDisconnect.bind(this);
    const o2 = new Bf();
    Ef.pipeline(e8, o2, e8, this._handleStreamDisconnect.bind(this, "MetaMask")), this._jsonRpcConnection = function(e9 = {}) {
      const t3 = {}, n3 = new Ef.Duplex({ objectMode: true, read: () => {
      }, write: function(n4, o3, s2) {
        let a2 = null;
        try {
          n4.id ? function(e10) {
            const { id: n5 } = e10;
            if (null === n5) return;
            const r4 = t3[n5];
            r4 ? (delete t3[n5], Object.assign(r4.res, e10), setTimeout(r4.end)) : console.warn(`StreamMiddleware - Unknown response id "${n5}"`);
          }(n4) : function(n5) {
            (e9 == null ? void 0 : e9.retryOnMessage) && n5.method === e9.retryOnMessage && Object.values(t3).forEach(({ req: e10, retryCount: n6 = 0 }) => {
              if (!e10.id) return;
              if (n6 >= 3) throw new Error(`StreamMiddleware - Retry limit exceeded for request id "${e10.id}"`);
              const r4 = t3[e10.id];
              r4 && (r4.retryCount = n6 + 1), i3(e10);
            }), r3.emit("notification", n5);
          }(n4);
        } catch (e10) {
          a2 = e10;
        }
        s2(a2);
      } }), r3 = new Yd();
      return { events: r3, middleware: (e10, n4, r4, o3) => {
        t3[e10.id] = { req: e10, res: n4, next: r4, end: o3 }, i3(e10);
      }, stream: n3 };
      function i3(e10) {
        n3.push(e10);
      }
    }({ retryOnMessage: "METAMASK_EXTENSION_CONNECT_CAN_RETRY" }), Ef.pipeline(this._jsonRpcConnection.stream, o2.createStream(t2), this._jsonRpcConnection.stream, this._handleStreamDisconnect.bind(this, "MetaMask RpcProvider")), this._rpcEngine.push(this._jsonRpcConnection.middleware), this._jsonRpcConnection.events.on("notification", (t3) => {
      const { method: n3, params: r3 } = t3;
      "metamask_accountsChanged" === n3 ? this._handleAccountsChanged(r3) : "metamask_unlockStateChanged" === n3 ? this._handleUnlockStateChanged(r3) : "metamask_chainChanged" === n3 ? this._handleChainChanged(r3) : Qd.includes(n3) ? this.emit("message", { type: n3, data: r3 }) : "METAMASK_STREAM_FAILURE" === n3 && e8.destroy(new Error(kc.errors.permanentlyDisconnected()));
    });
  }
  async _initializeStateAsync() {
    let e8;
    try {
      e8 = await this.request({ method: "metamask_getProviderState" });
    } catch (e9) {
      this._log.error("MetaMask: Failed to get initial state. Please report this bug.", e9);
    }
    this._initializeState(e8);
  }
  _handleStreamDisconnect(e8, t2) {
    let n2 = `MetaMask: Lost connection to "${e8}".`;
    (t2 == null ? void 0 : t2.stack) && (n2 += `
${t2.stack}`), this._log.warn(n2), this.listenerCount("error") > 0 && this.emit("error", n2), this._handleDisconnect(false, t2 ? t2.message : void 0);
  }
  _handleChainChanged({ chainId: e8, networkVersion: t2 } = {}) {
    ru(e8) && ((e9) => Boolean(e9) && "string" == typeof e9)(t2) ? "loading" === t2 ? this._handleDisconnect(true) : super._handleChainChanged({ chainId: e8 }) : this._log.error(kc.errors.invalidNetworkParams(), { chainId: e8, networkVersion: t2 });
  }
};
var Uf = class extends Ff {
  constructor(e8, { jsonRpcStreamName: t2 = "metamask-provider", logger: n2 = console, maxEventListeners: r2 = 100, shouldSendMetadata: i2 } = {}) {
    if (super(e8, { jsonRpcStreamName: t2, logger: n2, maxEventListeners: r2, rpcMiddleware: eu(n2) }), this._sentWarnings = { chainId: false, networkVersion: false, selectedAddress: false, enable: false, experimentalMethods: false, send: false, events: { close: false, data: false, networkChanged: false, notification: false } }, uu(this, jf, void 0), this._initializeStateAsync(), hu(this, jf, null), this.isMetaMask = true, this._sendSync = this._sendSync.bind(this), this.enable = this.enable.bind(this), this.send = this.send.bind(this), this.sendAsync = this.sendAsync.bind(this), this._warnOfDeprecation = this._warnOfDeprecation.bind(this), this._metamask = this._getExperimentalApi(), this._jsonRpcConnection.events.on("notification", (e9) => {
      const { method: t3 } = e9;
      Qd.includes(t3) && (this.emit("data", e9), this.emit("notification", e9.params.result));
    }), i2) if ("complete" === document.readyState) ou(this._rpcEngine, this._log);
    else {
      const e9 = () => {
        ou(this._rpcEngine, this._log), window.removeEventListener("DOMContentLoaded", e9);
      };
      window.addEventListener("DOMContentLoaded", e9);
    }
  }
  get chainId() {
    return this._sentWarnings.chainId || (this._log.warn(kc.warnings.chainIdDeprecation), this._sentWarnings.chainId = true), super.chainId;
  }
  get networkVersion() {
    return this._sentWarnings.networkVersion || (this._log.warn(kc.warnings.networkVersionDeprecation), this._sentWarnings.networkVersion = true), du(this, jf);
  }
  get selectedAddress() {
    return this._sentWarnings.selectedAddress || (this._log.warn(kc.warnings.selectedAddressDeprecation), this._sentWarnings.selectedAddress = true), super.selectedAddress;
  }
  sendAsync(e8, t2) {
    this._rpcRequest(e8, t2);
  }
  addListener(e8, t2) {
    return this._warnOfDeprecation(e8), super.addListener(e8, t2);
  }
  on(e8, t2) {
    return this._warnOfDeprecation(e8), super.on(e8, t2);
  }
  once(e8, t2) {
    return this._warnOfDeprecation(e8), super.once(e8, t2);
  }
  prependListener(e8, t2) {
    return this._warnOfDeprecation(e8), super.prependListener(e8, t2);
  }
  prependOnceListener(e8, t2) {
    return this._warnOfDeprecation(e8), super.prependOnceListener(e8, t2);
  }
  _handleDisconnect(e8, t2) {
    super._handleDisconnect(e8, t2), du(this, jf) && !e8 && hu(this, jf, null);
  }
  _warnOfDeprecation(e8) {
    var _a2;
    false === ((_a2 = this._sentWarnings) == null ? void 0 : _a2.events[e8]) && (this._log.warn(kc.warnings.events[e8]), this._sentWarnings.events[e8] = true);
  }
  async enable() {
    return this._sentWarnings.enable || (this._log.warn(kc.warnings.enableDeprecation), this._sentWarnings.enable = true), new Promise((e8, t2) => {
      try {
        this._rpcRequest({ method: "eth_requestAccounts", params: [] }, nu(e8, t2));
      } catch (e9) {
        t2(e9);
      }
    });
  }
  send(e8, t2) {
    return this._sentWarnings.send || (this._log.warn(kc.warnings.sendDeprecation), this._sentWarnings.send = true), "string" != typeof e8 || t2 && !Array.isArray(t2) ? e8 && "object" == typeof e8 && "function" == typeof t2 ? this._rpcRequest(e8, t2) : this._sendSync(e8) : new Promise((n2, r2) => {
      try {
        this._rpcRequest({ method: e8, params: t2 }, nu(n2, r2, false));
      } catch (e9) {
        r2(e9);
      }
    });
  }
  _sendSync(e8) {
    let t2;
    switch (e8.method) {
      case "eth_accounts":
        t2 = this.selectedAddress ? [this.selectedAddress] : [];
        break;
      case "eth_coinbase":
        t2 = this.selectedAddress ?? null;
        break;
      case "eth_uninstallFilter":
        this._rpcRequest(e8, iu), t2 = true;
        break;
      case "net_version":
        t2 = du(this, jf) ?? null;
        break;
      default:
        throw new Error(kc.errors.unsupportedSync(e8.method));
    }
    return { id: e8.id, jsonrpc: e8.jsonrpc, result: t2 };
  }
  _getExperimentalApi() {
    return new Proxy({ isUnlocked: async () => (this._state.initialized || await new Promise((e8) => {
      this.on("_initialized", () => e8());
    }), this._state.isUnlocked), requestBatch: async (e8) => {
      if (!Array.isArray(e8)) throw yd({ message: "Batch requests must be made with an array of request objects.", data: e8 });
      return new Promise((t2, n2) => {
        this._rpcRequest(e8, nu(t2, n2));
      });
    } }, { get: (e8, t2, ...n2) => (this._sentWarnings.experimentalMethods || (this._log.warn(kc.warnings.experimentalMethods), this._sentWarnings.experimentalMethods = true), Reflect.get(e8, t2, ...n2)) });
  }
  _handleChainChanged({ chainId: e8, networkVersion: t2 } = {}) {
    super._handleChainChanged({ chainId: e8, networkVersion: t2 }), this._state.isConnected && t2 !== du(this, jf) && (hu(this, jf, t2), this._state.initialized && this.emit("networkChanged", du(this, jf)));
  }
};
jf = /* @__PURE__ */ new WeakMap();
var Hf = U("MM_SDK");
Hf.color = "#FFAC1C";
var zf = {};
var qf = {};
Object.defineProperty(qf, "__esModule", { value: true }), qf.EthereumProviderError = qf.EthereumRpcError = void 0;
var Vf = td;
var Wf = class extends Error {
  constructor(e8, t2, n2) {
    if (!Number.isInteger(e8)) throw new Error('"code" must be an integer.');
    if (!t2 || "string" != typeof t2) throw new Error('"message" must be a nonempty string.');
    super(t2), this.code = e8, void 0 !== n2 && (this.data = n2);
  }
  serialize() {
    const e8 = { code: this.code, message: this.message };
    return void 0 !== this.data && (e8.data = this.data), this.stack && (e8.stack = this.stack), e8;
  }
  toString() {
    return Vf.default(this.serialize(), Gf, 2);
  }
};
function Gf(e8, t2) {
  if ("[Circular]" !== t2) return t2;
}
qf.EthereumRpcError = Wf, qf.EthereumProviderError = class extends Wf {
  constructor(e8, t2, n2) {
    if (!function(e9) {
      return Number.isInteger(e9) && e9 >= 1e3 && e9 <= 4999;
    }(e8)) throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(e8, t2, n2);
  }
};
var Yf = {};
var Zf = {};
Object.defineProperty(Zf, "__esModule", { value: true }), Zf.errorValues = Zf.errorCodes = void 0, Zf.errorCodes = { rpc: { invalidInput: -32e3, resourceNotFound: -32001, resourceUnavailable: -32002, transactionRejected: -32003, methodNotSupported: -32004, limitExceeded: -32005, parse: -32700, invalidRequest: -32600, methodNotFound: -32601, invalidParams: -32602, internal: -32603 }, provider: { userRejectedRequest: 4001, unauthorized: 4100, unsupportedMethod: 4200, disconnected: 4900, chainDisconnected: 4901 } }, Zf.errorValues = { "-32700": { standard: "JSON RPC 2.0", message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text." }, "-32600": { standard: "JSON RPC 2.0", message: "The JSON sent is not a valid Request object." }, "-32601": { standard: "JSON RPC 2.0", message: "The method does not exist / is not available." }, "-32602": { standard: "JSON RPC 2.0", message: "Invalid method parameter(s)." }, "-32603": { standard: "JSON RPC 2.0", message: "Internal JSON-RPC error." }, "-32000": { standard: "EIP-1474", message: "Invalid input." }, "-32001": { standard: "EIP-1474", message: "Resource not found." }, "-32002": { standard: "EIP-1474", message: "Resource unavailable." }, "-32003": { standard: "EIP-1474", message: "Transaction rejected." }, "-32004": { standard: "EIP-1474", message: "Method not supported." }, "-32005": { standard: "EIP-1474", message: "Request limit exceeded." }, 4001: { standard: "EIP-1193", message: "User rejected the request." }, 4100: { standard: "EIP-1193", message: "The requested account and/or method has not been authorized by the user." }, 4200: { standard: "EIP-1193", message: "The requested method is not supported by this Ethereum provider." }, 4900: { standard: "EIP-1193", message: "The provider is disconnected from all chains." }, 4901: { standard: "EIP-1193", message: "The provider is disconnected from the specified chain." } }, function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.serializeError = e8.isValidCode = e8.getMessageFromCode = e8.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const t2 = Zf, n2 = qf, r2 = t2.errorCodes.rpc.internal, i2 = { code: r2, message: o2(r2) };
  function o2(n3, r3 = "Unspecified error message. This is a bug, please report it.") {
    if (Number.isInteger(n3)) {
      const r4 = n3.toString();
      if (l2(t2.errorValues, r4)) return t2.errorValues[r4].message;
      if (a2(n3)) return e8.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return r3;
  }
  function s2(e9) {
    if (!Number.isInteger(e9)) return false;
    const n3 = e9.toString();
    return !!t2.errorValues[n3] || !!a2(e9);
  }
  function a2(e9) {
    return e9 >= -32099 && e9 <= -32e3;
  }
  function c2(e9) {
    return e9 && "object" == typeof e9 && !Array.isArray(e9) ? Object.assign({}, e9) : e9;
  }
  function l2(e9, t3) {
    return Object.prototype.hasOwnProperty.call(e9, t3);
  }
  e8.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.", e8.getMessageFromCode = o2, e8.isValidCode = s2, e8.serializeError = function(e9, { fallbackError: t3 = i2, shouldIncludeStack: r3 = false } = {}) {
    var a3, d2;
    if (!t3 || !Number.isInteger(t3.code) || "string" != typeof t3.message) throw new Error("Must provide fallback error with integer number code and string message.");
    if (e9 instanceof n2.EthereumRpcError) return e9.serialize();
    const u2 = {};
    if (e9 && "object" == typeof e9 && !Array.isArray(e9) && l2(e9, "code") && s2(e9.code)) {
      const t4 = e9;
      u2.code = t4.code, t4.message && "string" == typeof t4.message ? (u2.message = t4.message, l2(t4, "data") && (u2.data = t4.data)) : (u2.message = o2(u2.code), u2.data = { originalError: c2(e9) });
    } else {
      u2.code = t3.code;
      const n3 = null === (a3 = e9) || void 0 === a3 ? void 0 : a3.message;
      u2.message = n3 && "string" == typeof n3 ? n3 : t3.message, u2.data = { originalError: c2(e9) };
    }
    const h2 = null === (d2 = e9) || void 0 === d2 ? void 0 : d2.stack;
    return r3 && e9 && h2 && "string" == typeof h2 && (u2.stack = h2), u2;
  };
}(Yf);
var Jf = {};
Object.defineProperty(Jf, "__esModule", { value: true }), Jf.ethErrors = void 0;
var Xf = qf;
var Qf = Yf;
var ep = Zf;
function tp(e8, t2) {
  const [n2, r2] = rp(t2);
  return new Xf.EthereumRpcError(e8, n2 || Qf.getMessageFromCode(e8), r2);
}
function np(e8, t2) {
  const [n2, r2] = rp(t2);
  return new Xf.EthereumProviderError(e8, n2 || Qf.getMessageFromCode(e8), r2);
}
function rp(e8) {
  if (e8) {
    if ("string" == typeof e8) return [e8];
    if ("object" == typeof e8 && !Array.isArray(e8)) {
      const { message: t2, data: n2 } = e8;
      if (t2 && "string" != typeof t2) throw new Error("Must specify string message.");
      return [t2 || void 0, n2];
    }
  }
  return [];
}
Jf.ethErrors = { rpc: { parse: (e8) => tp(ep.errorCodes.rpc.parse, e8), invalidRequest: (e8) => tp(ep.errorCodes.rpc.invalidRequest, e8), invalidParams: (e8) => tp(ep.errorCodes.rpc.invalidParams, e8), methodNotFound: (e8) => tp(ep.errorCodes.rpc.methodNotFound, e8), internal: (e8) => tp(ep.errorCodes.rpc.internal, e8), server: (e8) => {
  if (!e8 || "object" != typeof e8 || Array.isArray(e8)) throw new Error("Ethereum RPC Server errors must provide single object argument.");
  const { code: t2 } = e8;
  if (!Number.isInteger(t2) || t2 > -32005 || t2 < -32099) throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
  return tp(t2, e8);
}, invalidInput: (e8) => tp(ep.errorCodes.rpc.invalidInput, e8), resourceNotFound: (e8) => tp(ep.errorCodes.rpc.resourceNotFound, e8), resourceUnavailable: (e8) => tp(ep.errorCodes.rpc.resourceUnavailable, e8), transactionRejected: (e8) => tp(ep.errorCodes.rpc.transactionRejected, e8), methodNotSupported: (e8) => tp(ep.errorCodes.rpc.methodNotSupported, e8), limitExceeded: (e8) => tp(ep.errorCodes.rpc.limitExceeded, e8) }, provider: { userRejectedRequest: (e8) => np(ep.errorCodes.provider.userRejectedRequest, e8), unauthorized: (e8) => np(ep.errorCodes.provider.unauthorized, e8), unsupportedMethod: (e8) => np(ep.errorCodes.provider.unsupportedMethod, e8), disconnected: (e8) => np(ep.errorCodes.provider.disconnected, e8), chainDisconnected: (e8) => np(ep.errorCodes.provider.chainDisconnected, e8), custom: (e8) => {
  if (!e8 || "object" != typeof e8 || Array.isArray(e8)) throw new Error("Ethereum Provider custom errors must provide single object argument.");
  const { code: t2, message: n2, data: r2 } = e8;
  if (!n2 || "string" != typeof n2) throw new Error('"message" must be a nonempty string');
  return new Xf.EthereumProviderError(t2, n2, r2);
} } }, function(e8) {
  Object.defineProperty(e8, "__esModule", { value: true }), e8.getMessageFromCode = e8.serializeError = e8.EthereumProviderError = e8.EthereumRpcError = e8.ethErrors = e8.errorCodes = void 0;
  const t2 = qf;
  Object.defineProperty(e8, "EthereumRpcError", { enumerable: true, get: function() {
    return t2.EthereumRpcError;
  } }), Object.defineProperty(e8, "EthereumProviderError", { enumerable: true, get: function() {
    return t2.EthereumProviderError;
  } });
  const n2 = Yf;
  Object.defineProperty(e8, "serializeError", { enumerable: true, get: function() {
    return n2.serializeError;
  } }), Object.defineProperty(e8, "getMessageFromCode", { enumerable: true, get: function() {
    return n2.getMessageFromCode;
  } });
  const r2 = Jf;
  Object.defineProperty(e8, "ethErrors", { enumerable: true, get: function() {
    return r2.ethErrors;
  } });
  const i2 = Zf;
  Object.defineProperty(e8, "errorCodes", { enumerable: true, get: function() {
    return i2.errorCodes;
  } });
}(zf);
var ip = { exports: {} };
ip.exports = function(e8) {
  var t2 = {};
  function n2(r2) {
    if (t2[r2]) return t2[r2].exports;
    var i2 = t2[r2] = { i: r2, l: false, exports: {} };
    return e8[r2].call(i2.exports, i2, i2.exports, n2), i2.l = true, i2.exports;
  }
  return n2.m = e8, n2.c = t2, n2.d = function(e9, t3, r2) {
    n2.o(e9, t3) || Object.defineProperty(e9, t3, { enumerable: true, get: r2 });
  }, n2.r = function(e9) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e9, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e9, "__esModule", { value: true });
  }, n2.t = function(e9, t3) {
    if (1 & t3 && (e9 = n2(e9)), 8 & t3) return e9;
    if (4 & t3 && "object" == typeof e9 && e9 && e9.__esModule) return e9;
    var r2 = /* @__PURE__ */ Object.create(null);
    if (n2.r(r2), Object.defineProperty(r2, "default", { enumerable: true, value: e9 }), 2 & t3 && "string" != typeof e9) for (var i2 in e9) n2.d(r2, i2, (function(t4) {
      return e9[t4];
    }).bind(null, i2));
    return r2;
  }, n2.n = function(e9) {
    var t3 = e9 && e9.__esModule ? function() {
      return e9.default;
    } : function() {
      return e9;
    };
    return n2.d(t3, "a", t3), t3;
  }, n2.o = function(e9, t3) {
    return Object.prototype.hasOwnProperty.call(e9, t3);
  }, n2.p = "", n2(n2.s = 90);
}({ 17: function(e8, t2, n2) {
  t2.__esModule = true, t2.default = void 0;
  var r2 = n2(18), i2 = function() {
    function e9() {
    }
    return e9.getFirstMatch = function(e10, t3) {
      var n3 = t3.match(e10);
      return n3 && n3.length > 0 && n3[1] || "";
    }, e9.getSecondMatch = function(e10, t3) {
      var n3 = t3.match(e10);
      return n3 && n3.length > 1 && n3[2] || "";
    }, e9.matchAndReturnConst = function(e10, t3, n3) {
      if (e10.test(t3)) return n3;
    }, e9.getWindowsVersionName = function(e10) {
      switch (e10) {
        case "NT":
          return "NT";
        case "XP":
        case "NT 5.1":
          return "XP";
        case "NT 5.0":
          return "2000";
        case "NT 5.2":
          return "2003";
        case "NT 6.0":
          return "Vista";
        case "NT 6.1":
          return "7";
        case "NT 6.2":
          return "8";
        case "NT 6.3":
          return "8.1";
        case "NT 10.0":
          return "10";
        default:
          return;
      }
    }, e9.getMacOSVersionName = function(e10) {
      var t3 = e10.split(".").splice(0, 2).map(function(e11) {
        return parseInt(e11, 10) || 0;
      });
      if (t3.push(0), 10 === t3[0]) switch (t3[1]) {
        case 5:
          return "Leopard";
        case 6:
          return "Snow Leopard";
        case 7:
          return "Lion";
        case 8:
          return "Mountain Lion";
        case 9:
          return "Mavericks";
        case 10:
          return "Yosemite";
        case 11:
          return "El Capitan";
        case 12:
          return "Sierra";
        case 13:
          return "High Sierra";
        case 14:
          return "Mojave";
        case 15:
          return "Catalina";
        default:
          return;
      }
    }, e9.getAndroidVersionName = function(e10) {
      var t3 = e10.split(".").splice(0, 2).map(function(e11) {
        return parseInt(e11, 10) || 0;
      });
      if (t3.push(0), !(1 === t3[0] && t3[1] < 5)) return 1 === t3[0] && t3[1] < 6 ? "Cupcake" : 1 === t3[0] && t3[1] >= 6 ? "Donut" : 2 === t3[0] && t3[1] < 2 ? "Eclair" : 2 === t3[0] && 2 === t3[1] ? "Froyo" : 2 === t3[0] && t3[1] > 2 ? "Gingerbread" : 3 === t3[0] ? "Honeycomb" : 4 === t3[0] && t3[1] < 1 ? "Ice Cream Sandwich" : 4 === t3[0] && t3[1] < 4 ? "Jelly Bean" : 4 === t3[0] && t3[1] >= 4 ? "KitKat" : 5 === t3[0] ? "Lollipop" : 6 === t3[0] ? "Marshmallow" : 7 === t3[0] ? "Nougat" : 8 === t3[0] ? "Oreo" : 9 === t3[0] ? "Pie" : void 0;
    }, e9.getVersionPrecision = function(e10) {
      return e10.split(".").length;
    }, e9.compareVersions = function(t3, n3, r3) {
      void 0 === r3 && (r3 = false);
      var i3 = e9.getVersionPrecision(t3), o2 = e9.getVersionPrecision(n3), s2 = Math.max(i3, o2), a2 = 0, c2 = e9.map([t3, n3], function(t4) {
        var n4 = s2 - e9.getVersionPrecision(t4), r4 = t4 + new Array(n4 + 1).join(".0");
        return e9.map(r4.split("."), function(e10) {
          return new Array(20 - e10.length).join("0") + e10;
        }).reverse();
      });
      for (r3 && (a2 = s2 - Math.min(i3, o2)), s2 -= 1; s2 >= a2; ) {
        if (c2[0][s2] > c2[1][s2]) return 1;
        if (c2[0][s2] === c2[1][s2]) {
          if (s2 === a2) return 0;
          s2 -= 1;
        } else if (c2[0][s2] < c2[1][s2]) return -1;
      }
    }, e9.map = function(e10, t3) {
      var n3, r3 = [];
      if (Array.prototype.map) return Array.prototype.map.call(e10, t3);
      for (n3 = 0; n3 < e10.length; n3 += 1) r3.push(t3(e10[n3]));
      return r3;
    }, e9.find = function(e10, t3) {
      var n3, r3;
      if (Array.prototype.find) return Array.prototype.find.call(e10, t3);
      for (n3 = 0, r3 = e10.length; n3 < r3; n3 += 1) {
        var i3 = e10[n3];
        if (t3(i3, n3)) return i3;
      }
    }, e9.assign = function(e10) {
      for (var t3, n3, r3 = e10, i3 = arguments.length, o2 = new Array(i3 > 1 ? i3 - 1 : 0), s2 = 1; s2 < i3; s2++) o2[s2 - 1] = arguments[s2];
      if (Object.assign) return Object.assign.apply(Object, [e10].concat(o2));
      var a2 = function() {
        var e11 = o2[t3];
        "object" == typeof e11 && null !== e11 && Object.keys(e11).forEach(function(t4) {
          r3[t4] = e11[t4];
        });
      };
      for (t3 = 0, n3 = o2.length; t3 < n3; t3 += 1) a2();
      return e10;
    }, e9.getBrowserAlias = function(e10) {
      return r2.BROWSER_ALIASES_MAP[e10];
    }, e9.getBrowserTypeByAlias = function(e10) {
      return r2.BROWSER_MAP[e10] || "";
    }, e9;
  }();
  t2.default = i2, e8.exports = t2.default;
}, 18: function(e8, t2, n2) {
  t2.__esModule = true, t2.ENGINE_MAP = t2.OS_MAP = t2.PLATFORMS_MAP = t2.BROWSER_MAP = t2.BROWSER_ALIASES_MAP = void 0, t2.BROWSER_ALIASES_MAP = { "Amazon Silk": "amazon_silk", "Android Browser": "android", Bada: "bada", BlackBerry: "blackberry", Chrome: "chrome", Chromium: "chromium", Electron: "electron", Epiphany: "epiphany", Firefox: "firefox", Focus: "focus", Generic: "generic", "Google Search": "google_search", Googlebot: "googlebot", "Internet Explorer": "ie", "K-Meleon": "k_meleon", Maxthon: "maxthon", "Microsoft Edge": "edge", "MZ Browser": "mz", "NAVER Whale Browser": "naver", Opera: "opera", "Opera Coast": "opera_coast", PhantomJS: "phantomjs", Puffin: "puffin", QupZilla: "qupzilla", QQ: "qq", QQLite: "qqlite", Safari: "safari", Sailfish: "sailfish", "Samsung Internet for Android": "samsung_internet", SeaMonkey: "seamonkey", Sleipnir: "sleipnir", Swing: "swing", Tizen: "tizen", "UC Browser": "uc", Vivaldi: "vivaldi", "WebOS Browser": "webos", WeChat: "wechat", "Yandex Browser": "yandex", Roku: "roku" }, t2.BROWSER_MAP = { amazon_silk: "Amazon Silk", android: "Android Browser", bada: "Bada", blackberry: "BlackBerry", chrome: "Chrome", chromium: "Chromium", electron: "Electron", epiphany: "Epiphany", firefox: "Firefox", focus: "Focus", generic: "Generic", googlebot: "Googlebot", google_search: "Google Search", ie: "Internet Explorer", k_meleon: "K-Meleon", maxthon: "Maxthon", edge: "Microsoft Edge", mz: "MZ Browser", naver: "NAVER Whale Browser", opera: "Opera", opera_coast: "Opera Coast", phantomjs: "PhantomJS", puffin: "Puffin", qupzilla: "QupZilla", qq: "QQ Browser", qqlite: "QQ Browser Lite", safari: "Safari", sailfish: "Sailfish", samsung_internet: "Samsung Internet for Android", seamonkey: "SeaMonkey", sleipnir: "Sleipnir", swing: "Swing", tizen: "Tizen", uc: "UC Browser", vivaldi: "Vivaldi", webos: "WebOS Browser", wechat: "WeChat", yandex: "Yandex Browser" }, t2.PLATFORMS_MAP = { tablet: "tablet", mobile: "mobile", desktop: "desktop", tv: "tv" }, t2.OS_MAP = { WindowsPhone: "Windows Phone", Windows: "Windows", MacOS: "macOS", iOS: "iOS", Android: "Android", WebOS: "WebOS", BlackBerry: "BlackBerry", Bada: "Bada", Tizen: "Tizen", Linux: "Linux", ChromeOS: "Chrome OS", PlayStation4: "PlayStation 4", Roku: "Roku" }, t2.ENGINE_MAP = { EdgeHTML: "EdgeHTML", Blink: "Blink", Trident: "Trident", Presto: "Presto", Gecko: "Gecko", WebKit: "WebKit" };
}, 90: function(e8, t2, n2) {
  t2.__esModule = true, t2.default = void 0;
  var r2, i2 = (r2 = n2(91)) && r2.__esModule ? r2 : { default: r2 }, o2 = n2(18);
  function s2(e9, t3) {
    for (var n3 = 0; n3 < t3.length; n3++) {
      var r3 = t3[n3];
      r3.enumerable = r3.enumerable || false, r3.configurable = true, "value" in r3 && (r3.writable = true), Object.defineProperty(e9, r3.key, r3);
    }
  }
  var a2 = function() {
    function e9() {
    }
    var t3, n3;
    return e9.getParser = function(e10, t4) {
      if (void 0 === t4 && (t4 = false), "string" != typeof e10) throw new Error("UserAgent should be a string");
      return new i2.default(e10, t4);
    }, e9.parse = function(e10) {
      return new i2.default(e10).getResult();
    }, t3 = e9, n3 = [{ key: "BROWSER_MAP", get: function() {
      return o2.BROWSER_MAP;
    } }, { key: "ENGINE_MAP", get: function() {
      return o2.ENGINE_MAP;
    } }, { key: "OS_MAP", get: function() {
      return o2.OS_MAP;
    } }, { key: "PLATFORMS_MAP", get: function() {
      return o2.PLATFORMS_MAP;
    } }], null, n3 && s2(t3, n3), e9;
  }();
  t2.default = a2, e8.exports = t2.default;
}, 91: function(e8, t2, n2) {
  t2.__esModule = true, t2.default = void 0;
  var r2 = c2(n2(92)), i2 = c2(n2(93)), o2 = c2(n2(94)), s2 = c2(n2(95)), a2 = c2(n2(17));
  function c2(e9) {
    return e9 && e9.__esModule ? e9 : { default: e9 };
  }
  var l2 = function() {
    function e9(e10, t4) {
      if (void 0 === t4 && (t4 = false), null == e10 || "" === e10) throw new Error("UserAgent parameter can't be empty");
      this._ua = e10, this.parsedResult = {}, true !== t4 && this.parse();
    }
    var t3 = e9.prototype;
    return t3.getUA = function() {
      return this._ua;
    }, t3.test = function(e10) {
      return e10.test(this._ua);
    }, t3.parseBrowser = function() {
      var e10 = this;
      this.parsedResult.browser = {};
      var t4 = a2.default.find(r2.default, function(t5) {
        if ("function" == typeof t5.test) return t5.test(e10);
        if (t5.test instanceof Array) return t5.test.some(function(t6) {
          return e10.test(t6);
        });
        throw new Error("Browser's test function is not valid");
      });
      return t4 && (this.parsedResult.browser = t4.describe(this.getUA())), this.parsedResult.browser;
    }, t3.getBrowser = function() {
      return this.parsedResult.browser ? this.parsedResult.browser : this.parseBrowser();
    }, t3.getBrowserName = function(e10) {
      return e10 ? String(this.getBrowser().name).toLowerCase() || "" : this.getBrowser().name || "";
    }, t3.getBrowserVersion = function() {
      return this.getBrowser().version;
    }, t3.getOS = function() {
      return this.parsedResult.os ? this.parsedResult.os : this.parseOS();
    }, t3.parseOS = function() {
      var e10 = this;
      this.parsedResult.os = {};
      var t4 = a2.default.find(i2.default, function(t5) {
        if ("function" == typeof t5.test) return t5.test(e10);
        if (t5.test instanceof Array) return t5.test.some(function(t6) {
          return e10.test(t6);
        });
        throw new Error("Browser's test function is not valid");
      });
      return t4 && (this.parsedResult.os = t4.describe(this.getUA())), this.parsedResult.os;
    }, t3.getOSName = function(e10) {
      var t4 = this.getOS().name;
      return e10 ? String(t4).toLowerCase() || "" : t4 || "";
    }, t3.getOSVersion = function() {
      return this.getOS().version;
    }, t3.getPlatform = function() {
      return this.parsedResult.platform ? this.parsedResult.platform : this.parsePlatform();
    }, t3.getPlatformType = function(e10) {
      void 0 === e10 && (e10 = false);
      var t4 = this.getPlatform().type;
      return e10 ? String(t4).toLowerCase() || "" : t4 || "";
    }, t3.parsePlatform = function() {
      var e10 = this;
      this.parsedResult.platform = {};
      var t4 = a2.default.find(o2.default, function(t5) {
        if ("function" == typeof t5.test) return t5.test(e10);
        if (t5.test instanceof Array) return t5.test.some(function(t6) {
          return e10.test(t6);
        });
        throw new Error("Browser's test function is not valid");
      });
      return t4 && (this.parsedResult.platform = t4.describe(this.getUA())), this.parsedResult.platform;
    }, t3.getEngine = function() {
      return this.parsedResult.engine ? this.parsedResult.engine : this.parseEngine();
    }, t3.getEngineName = function(e10) {
      return e10 ? String(this.getEngine().name).toLowerCase() || "" : this.getEngine().name || "";
    }, t3.parseEngine = function() {
      var e10 = this;
      this.parsedResult.engine = {};
      var t4 = a2.default.find(s2.default, function(t5) {
        if ("function" == typeof t5.test) return t5.test(e10);
        if (t5.test instanceof Array) return t5.test.some(function(t6) {
          return e10.test(t6);
        });
        throw new Error("Browser's test function is not valid");
      });
      return t4 && (this.parsedResult.engine = t4.describe(this.getUA())), this.parsedResult.engine;
    }, t3.parse = function() {
      return this.parseBrowser(), this.parseOS(), this.parsePlatform(), this.parseEngine(), this;
    }, t3.getResult = function() {
      return a2.default.assign({}, this.parsedResult);
    }, t3.satisfies = function(e10) {
      var t4 = this, n3 = {}, r3 = 0, i3 = {}, o3 = 0;
      if (Object.keys(e10).forEach(function(t5) {
        var s4 = e10[t5];
        "string" == typeof s4 ? (i3[t5] = s4, o3 += 1) : "object" == typeof s4 && (n3[t5] = s4, r3 += 1);
      }), r3 > 0) {
        var s3 = Object.keys(n3), c3 = a2.default.find(s3, function(e11) {
          return t4.isOS(e11);
        });
        if (c3) {
          var l3 = this.satisfies(n3[c3]);
          if (void 0 !== l3) return l3;
        }
        var d2 = a2.default.find(s3, function(e11) {
          return t4.isPlatform(e11);
        });
        if (d2) {
          var u2 = this.satisfies(n3[d2]);
          if (void 0 !== u2) return u2;
        }
      }
      if (o3 > 0) {
        var h2 = Object.keys(i3), f2 = a2.default.find(h2, function(e11) {
          return t4.isBrowser(e11, true);
        });
        if (void 0 !== f2) return this.compareVersion(i3[f2]);
      }
    }, t3.isBrowser = function(e10, t4) {
      void 0 === t4 && (t4 = false);
      var n3 = this.getBrowserName().toLowerCase(), r3 = e10.toLowerCase(), i3 = a2.default.getBrowserTypeByAlias(r3);
      return t4 && i3 && (r3 = i3.toLowerCase()), r3 === n3;
    }, t3.compareVersion = function(e10) {
      var t4 = [0], n3 = e10, r3 = false, i3 = this.getBrowserVersion();
      if ("string" == typeof i3) return ">" === e10[0] || "<" === e10[0] ? (n3 = e10.substr(1), "=" === e10[1] ? (r3 = true, n3 = e10.substr(2)) : t4 = [], ">" === e10[0] ? t4.push(1) : t4.push(-1)) : "=" === e10[0] ? n3 = e10.substr(1) : "~" === e10[0] && (r3 = true, n3 = e10.substr(1)), t4.indexOf(a2.default.compareVersions(i3, n3, r3)) > -1;
    }, t3.isOS = function(e10) {
      return this.getOSName(true) === String(e10).toLowerCase();
    }, t3.isPlatform = function(e10) {
      return this.getPlatformType(true) === String(e10).toLowerCase();
    }, t3.isEngine = function(e10) {
      return this.getEngineName(true) === String(e10).toLowerCase();
    }, t3.is = function(e10, t4) {
      return void 0 === t4 && (t4 = false), this.isBrowser(e10, t4) || this.isOS(e10) || this.isPlatform(e10);
    }, t3.some = function(e10) {
      var t4 = this;
      return void 0 === e10 && (e10 = []), e10.some(function(e11) {
        return t4.is(e11);
      });
    }, e9;
  }();
  t2.default = l2, e8.exports = t2.default;
}, 92: function(e8, t2, n2) {
  t2.__esModule = true, t2.default = void 0;
  var r2, i2 = (r2 = n2(17)) && r2.__esModule ? r2 : { default: r2 }, o2 = /version\/(\d+(\.?_?\d+)+)/i, s2 = [{ test: [/googlebot/i], describe: function(e9) {
    var t3 = { name: "Googlebot" }, n3 = i2.default.getFirstMatch(/googlebot\/(\d+(\.\d+))/i, e9) || i2.default.getFirstMatch(o2, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/opera/i], describe: function(e9) {
    var t3 = { name: "Opera" }, n3 = i2.default.getFirstMatch(o2, e9) || i2.default.getFirstMatch(/(?:opera)[\s/](\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/opr\/|opios/i], describe: function(e9) {
    var t3 = { name: "Opera" }, n3 = i2.default.getFirstMatch(/(?:opr|opios)[\s/](\S+)/i, e9) || i2.default.getFirstMatch(o2, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/SamsungBrowser/i], describe: function(e9) {
    var t3 = { name: "Samsung Internet for Android" }, n3 = i2.default.getFirstMatch(o2, e9) || i2.default.getFirstMatch(/(?:SamsungBrowser)[\s/](\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/Whale/i], describe: function(e9) {
    var t3 = { name: "NAVER Whale Browser" }, n3 = i2.default.getFirstMatch(o2, e9) || i2.default.getFirstMatch(/(?:whale)[\s/](\d+(?:\.\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/MZBrowser/i], describe: function(e9) {
    var t3 = { name: "MZ Browser" }, n3 = i2.default.getFirstMatch(/(?:MZBrowser)[\s/](\d+(?:\.\d+)+)/i, e9) || i2.default.getFirstMatch(o2, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/focus/i], describe: function(e9) {
    var t3 = { name: "Focus" }, n3 = i2.default.getFirstMatch(/(?:focus)[\s/](\d+(?:\.\d+)+)/i, e9) || i2.default.getFirstMatch(o2, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/swing/i], describe: function(e9) {
    var t3 = { name: "Swing" }, n3 = i2.default.getFirstMatch(/(?:swing)[\s/](\d+(?:\.\d+)+)/i, e9) || i2.default.getFirstMatch(o2, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/coast/i], describe: function(e9) {
    var t3 = { name: "Opera Coast" }, n3 = i2.default.getFirstMatch(o2, e9) || i2.default.getFirstMatch(/(?:coast)[\s/](\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/opt\/\d+(?:.?_?\d+)+/i], describe: function(e9) {
    var t3 = { name: "Opera Touch" }, n3 = i2.default.getFirstMatch(/(?:opt)[\s/](\d+(\.?_?\d+)+)/i, e9) || i2.default.getFirstMatch(o2, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/yabrowser/i], describe: function(e9) {
    var t3 = { name: "Yandex Browser" }, n3 = i2.default.getFirstMatch(/(?:yabrowser)[\s/](\d+(\.?_?\d+)+)/i, e9) || i2.default.getFirstMatch(o2, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/ucbrowser/i], describe: function(e9) {
    var t3 = { name: "UC Browser" }, n3 = i2.default.getFirstMatch(o2, e9) || i2.default.getFirstMatch(/(?:ucbrowser)[\s/](\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/Maxthon|mxios/i], describe: function(e9) {
    var t3 = { name: "Maxthon" }, n3 = i2.default.getFirstMatch(o2, e9) || i2.default.getFirstMatch(/(?:Maxthon|mxios)[\s/](\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/epiphany/i], describe: function(e9) {
    var t3 = { name: "Epiphany" }, n3 = i2.default.getFirstMatch(o2, e9) || i2.default.getFirstMatch(/(?:epiphany)[\s/](\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/puffin/i], describe: function(e9) {
    var t3 = { name: "Puffin" }, n3 = i2.default.getFirstMatch(o2, e9) || i2.default.getFirstMatch(/(?:puffin)[\s/](\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/sleipnir/i], describe: function(e9) {
    var t3 = { name: "Sleipnir" }, n3 = i2.default.getFirstMatch(o2, e9) || i2.default.getFirstMatch(/(?:sleipnir)[\s/](\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/k-meleon/i], describe: function(e9) {
    var t3 = { name: "K-Meleon" }, n3 = i2.default.getFirstMatch(o2, e9) || i2.default.getFirstMatch(/(?:k-meleon)[\s/](\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/micromessenger/i], describe: function(e9) {
    var t3 = { name: "WeChat" }, n3 = i2.default.getFirstMatch(/(?:micromessenger)[\s/](\d+(\.?_?\d+)+)/i, e9) || i2.default.getFirstMatch(o2, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/qqbrowser/i], describe: function(e9) {
    var t3 = { name: /qqbrowserlite/i.test(e9) ? "QQ Browser Lite" : "QQ Browser" }, n3 = i2.default.getFirstMatch(/(?:qqbrowserlite|qqbrowser)[/](\d+(\.?_?\d+)+)/i, e9) || i2.default.getFirstMatch(o2, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/msie|trident/i], describe: function(e9) {
    var t3 = { name: "Internet Explorer" }, n3 = i2.default.getFirstMatch(/(?:msie |rv:)(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/\sedg\//i], describe: function(e9) {
    var t3 = { name: "Microsoft Edge" }, n3 = i2.default.getFirstMatch(/\sedg\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/edg([ea]|ios)/i], describe: function(e9) {
    var t3 = { name: "Microsoft Edge" }, n3 = i2.default.getSecondMatch(/edg([ea]|ios)\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/vivaldi/i], describe: function(e9) {
    var t3 = { name: "Vivaldi" }, n3 = i2.default.getFirstMatch(/vivaldi\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/seamonkey/i], describe: function(e9) {
    var t3 = { name: "SeaMonkey" }, n3 = i2.default.getFirstMatch(/seamonkey\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/sailfish/i], describe: function(e9) {
    var t3 = { name: "Sailfish" }, n3 = i2.default.getFirstMatch(/sailfish\s?browser\/(\d+(\.\d+)?)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/silk/i], describe: function(e9) {
    var t3 = { name: "Amazon Silk" }, n3 = i2.default.getFirstMatch(/silk\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/phantom/i], describe: function(e9) {
    var t3 = { name: "PhantomJS" }, n3 = i2.default.getFirstMatch(/phantomjs\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/slimerjs/i], describe: function(e9) {
    var t3 = { name: "SlimerJS" }, n3 = i2.default.getFirstMatch(/slimerjs\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e9) {
    var t3 = { name: "BlackBerry" }, n3 = i2.default.getFirstMatch(o2, e9) || i2.default.getFirstMatch(/blackberry[\d]+\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/(web|hpw)[o0]s/i], describe: function(e9) {
    var t3 = { name: "WebOS Browser" }, n3 = i2.default.getFirstMatch(o2, e9) || i2.default.getFirstMatch(/w(?:eb)?[o0]sbrowser\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/bada/i], describe: function(e9) {
    var t3 = { name: "Bada" }, n3 = i2.default.getFirstMatch(/dolfin\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/tizen/i], describe: function(e9) {
    var t3 = { name: "Tizen" }, n3 = i2.default.getFirstMatch(/(?:tizen\s?)?browser\/(\d+(\.?_?\d+)+)/i, e9) || i2.default.getFirstMatch(o2, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/qupzilla/i], describe: function(e9) {
    var t3 = { name: "QupZilla" }, n3 = i2.default.getFirstMatch(/(?:qupzilla)[\s/](\d+(\.?_?\d+)+)/i, e9) || i2.default.getFirstMatch(o2, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/firefox|iceweasel|fxios/i], describe: function(e9) {
    var t3 = { name: "Firefox" }, n3 = i2.default.getFirstMatch(/(?:firefox|iceweasel|fxios)[\s/](\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/electron/i], describe: function(e9) {
    var t3 = { name: "Electron" }, n3 = i2.default.getFirstMatch(/(?:electron)\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/MiuiBrowser/i], describe: function(e9) {
    var t3 = { name: "Miui" }, n3 = i2.default.getFirstMatch(/(?:MiuiBrowser)[\s/](\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/chromium/i], describe: function(e9) {
    var t3 = { name: "Chromium" }, n3 = i2.default.getFirstMatch(/(?:chromium)[\s/](\d+(\.?_?\d+)+)/i, e9) || i2.default.getFirstMatch(o2, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/chrome|crios|crmo/i], describe: function(e9) {
    var t3 = { name: "Chrome" }, n3 = i2.default.getFirstMatch(/(?:chrome|crios|crmo)\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/GSA/i], describe: function(e9) {
    var t3 = { name: "Google Search" }, n3 = i2.default.getFirstMatch(/(?:GSA)\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: function(e9) {
    var t3 = !e9.test(/like android/i), n3 = e9.test(/android/i);
    return t3 && n3;
  }, describe: function(e9) {
    var t3 = { name: "Android Browser" }, n3 = i2.default.getFirstMatch(o2, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/playstation 4/i], describe: function(e9) {
    var t3 = { name: "PlayStation 4" }, n3 = i2.default.getFirstMatch(o2, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/safari|applewebkit/i], describe: function(e9) {
    var t3 = { name: "Safari" }, n3 = i2.default.getFirstMatch(o2, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/.*/i], describe: function(e9) {
    var t3 = -1 !== e9.search("\\(") ? /^(.*)\/(.*)[ \t]\((.*)/ : /^(.*)\/(.*) /;
    return { name: i2.default.getFirstMatch(t3, e9), version: i2.default.getSecondMatch(t3, e9) };
  } }];
  t2.default = s2, e8.exports = t2.default;
}, 93: function(e8, t2, n2) {
  t2.__esModule = true, t2.default = void 0;
  var r2, i2 = (r2 = n2(17)) && r2.__esModule ? r2 : { default: r2 }, o2 = n2(18), s2 = [{ test: [/Roku\/DVP/], describe: function(e9) {
    var t3 = i2.default.getFirstMatch(/Roku\/DVP-(\d+\.\d+)/i, e9);
    return { name: o2.OS_MAP.Roku, version: t3 };
  } }, { test: [/windows phone/i], describe: function(e9) {
    var t3 = i2.default.getFirstMatch(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i, e9);
    return { name: o2.OS_MAP.WindowsPhone, version: t3 };
  } }, { test: [/windows /i], describe: function(e9) {
    var t3 = i2.default.getFirstMatch(/Windows ((NT|XP)( \d\d?.\d)?)/i, e9), n3 = i2.default.getWindowsVersionName(t3);
    return { name: o2.OS_MAP.Windows, version: t3, versionName: n3 };
  } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function(e9) {
    var t3 = { name: o2.OS_MAP.iOS }, n3 = i2.default.getSecondMatch(/(Version\/)(\d[\d.]+)/, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/macintosh/i], describe: function(e9) {
    var t3 = i2.default.getFirstMatch(/mac os x (\d+(\.?_?\d+)+)/i, e9).replace(/[_\s]/g, "."), n3 = i2.default.getMacOSVersionName(t3), r3 = { name: o2.OS_MAP.MacOS, version: t3 };
    return n3 && (r3.versionName = n3), r3;
  } }, { test: [/(ipod|iphone|ipad)/i], describe: function(e9) {
    var t3 = i2.default.getFirstMatch(/os (\d+([_\s]\d+)*) like mac os x/i, e9).replace(/[_\s]/g, ".");
    return { name: o2.OS_MAP.iOS, version: t3 };
  } }, { test: function(e9) {
    var t3 = !e9.test(/like android/i), n3 = e9.test(/android/i);
    return t3 && n3;
  }, describe: function(e9) {
    var t3 = i2.default.getFirstMatch(/android[\s/-](\d+(\.\d+)*)/i, e9), n3 = i2.default.getAndroidVersionName(t3), r3 = { name: o2.OS_MAP.Android, version: t3 };
    return n3 && (r3.versionName = n3), r3;
  } }, { test: [/(web|hpw)[o0]s/i], describe: function(e9) {
    var t3 = i2.default.getFirstMatch(/(?:web|hpw)[o0]s\/(\d+(\.\d+)*)/i, e9), n3 = { name: o2.OS_MAP.WebOS };
    return t3 && t3.length && (n3.version = t3), n3;
  } }, { test: [/blackberry|\bbb\d+/i, /rim\stablet/i], describe: function(e9) {
    var t3 = i2.default.getFirstMatch(/rim\stablet\sos\s(\d+(\.\d+)*)/i, e9) || i2.default.getFirstMatch(/blackberry\d+\/(\d+([_\s]\d+)*)/i, e9) || i2.default.getFirstMatch(/\bbb(\d+)/i, e9);
    return { name: o2.OS_MAP.BlackBerry, version: t3 };
  } }, { test: [/bada/i], describe: function(e9) {
    var t3 = i2.default.getFirstMatch(/bada\/(\d+(\.\d+)*)/i, e9);
    return { name: o2.OS_MAP.Bada, version: t3 };
  } }, { test: [/tizen/i], describe: function(e9) {
    var t3 = i2.default.getFirstMatch(/tizen[/\s](\d+(\.\d+)*)/i, e9);
    return { name: o2.OS_MAP.Tizen, version: t3 };
  } }, { test: [/linux/i], describe: function() {
    return { name: o2.OS_MAP.Linux };
  } }, { test: [/CrOS/], describe: function() {
    return { name: o2.OS_MAP.ChromeOS };
  } }, { test: [/PlayStation 4/], describe: function(e9) {
    var t3 = i2.default.getFirstMatch(/PlayStation 4[/\s](\d+(\.\d+)*)/i, e9);
    return { name: o2.OS_MAP.PlayStation4, version: t3 };
  } }];
  t2.default = s2, e8.exports = t2.default;
}, 94: function(e8, t2, n2) {
  t2.__esModule = true, t2.default = void 0;
  var r2, i2 = (r2 = n2(17)) && r2.__esModule ? r2 : { default: r2 }, o2 = n2(18), s2 = [{ test: [/googlebot/i], describe: function() {
    return { type: "bot", vendor: "Google" };
  } }, { test: [/huawei/i], describe: function(e9) {
    var t3 = i2.default.getFirstMatch(/(can-l01)/i, e9) && "Nova", n3 = { type: o2.PLATFORMS_MAP.mobile, vendor: "Huawei" };
    return t3 && (n3.model = t3), n3;
  } }, { test: [/nexus\s*(?:7|8|9|10).*/i], describe: function() {
    return { type: o2.PLATFORMS_MAP.tablet, vendor: "Nexus" };
  } }, { test: [/ipad/i], describe: function() {
    return { type: o2.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
  } }, { test: [/Macintosh(.*?) FxiOS(.*?)\//], describe: function() {
    return { type: o2.PLATFORMS_MAP.tablet, vendor: "Apple", model: "iPad" };
  } }, { test: [/kftt build/i], describe: function() {
    return { type: o2.PLATFORMS_MAP.tablet, vendor: "Amazon", model: "Kindle Fire HD 7" };
  } }, { test: [/silk/i], describe: function() {
    return { type: o2.PLATFORMS_MAP.tablet, vendor: "Amazon" };
  } }, { test: [/tablet(?! pc)/i], describe: function() {
    return { type: o2.PLATFORMS_MAP.tablet };
  } }, { test: function(e9) {
    var t3 = e9.test(/ipod|iphone/i), n3 = e9.test(/like (ipod|iphone)/i);
    return t3 && !n3;
  }, describe: function(e9) {
    var t3 = i2.default.getFirstMatch(/(ipod|iphone)/i, e9);
    return { type: o2.PLATFORMS_MAP.mobile, vendor: "Apple", model: t3 };
  } }, { test: [/nexus\s*[0-6].*/i, /galaxy nexus/i], describe: function() {
    return { type: o2.PLATFORMS_MAP.mobile, vendor: "Nexus" };
  } }, { test: [/[^-]mobi/i], describe: function() {
    return { type: o2.PLATFORMS_MAP.mobile };
  } }, { test: function(e9) {
    return "blackberry" === e9.getBrowserName(true);
  }, describe: function() {
    return { type: o2.PLATFORMS_MAP.mobile, vendor: "BlackBerry" };
  } }, { test: function(e9) {
    return "bada" === e9.getBrowserName(true);
  }, describe: function() {
    return { type: o2.PLATFORMS_MAP.mobile };
  } }, { test: function(e9) {
    return "windows phone" === e9.getBrowserName();
  }, describe: function() {
    return { type: o2.PLATFORMS_MAP.mobile, vendor: "Microsoft" };
  } }, { test: function(e9) {
    var t3 = Number(String(e9.getOSVersion()).split(".")[0]);
    return "android" === e9.getOSName(true) && t3 >= 3;
  }, describe: function() {
    return { type: o2.PLATFORMS_MAP.tablet };
  } }, { test: function(e9) {
    return "android" === e9.getOSName(true);
  }, describe: function() {
    return { type: o2.PLATFORMS_MAP.mobile };
  } }, { test: function(e9) {
    return "macos" === e9.getOSName(true);
  }, describe: function() {
    return { type: o2.PLATFORMS_MAP.desktop, vendor: "Apple" };
  } }, { test: function(e9) {
    return "windows" === e9.getOSName(true);
  }, describe: function() {
    return { type: o2.PLATFORMS_MAP.desktop };
  } }, { test: function(e9) {
    return "linux" === e9.getOSName(true);
  }, describe: function() {
    return { type: o2.PLATFORMS_MAP.desktop };
  } }, { test: function(e9) {
    return "playstation 4" === e9.getOSName(true);
  }, describe: function() {
    return { type: o2.PLATFORMS_MAP.tv };
  } }, { test: function(e9) {
    return "roku" === e9.getOSName(true);
  }, describe: function() {
    return { type: o2.PLATFORMS_MAP.tv };
  } }];
  t2.default = s2, e8.exports = t2.default;
}, 95: function(e8, t2, n2) {
  t2.__esModule = true, t2.default = void 0;
  var r2, i2 = (r2 = n2(17)) && r2.__esModule ? r2 : { default: r2 }, o2 = n2(18), s2 = [{ test: function(e9) {
    return "microsoft edge" === e9.getBrowserName(true);
  }, describe: function(e9) {
    if (/\sedg\//i.test(e9)) return { name: o2.ENGINE_MAP.Blink };
    var t3 = i2.default.getFirstMatch(/edge\/(\d+(\.?_?\d+)+)/i, e9);
    return { name: o2.ENGINE_MAP.EdgeHTML, version: t3 };
  } }, { test: [/trident/i], describe: function(e9) {
    var t3 = { name: o2.ENGINE_MAP.Trident }, n3 = i2.default.getFirstMatch(/trident\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: function(e9) {
    return e9.test(/presto/i);
  }, describe: function(e9) {
    var t3 = { name: o2.ENGINE_MAP.Presto }, n3 = i2.default.getFirstMatch(/presto\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: function(e9) {
    var t3 = e9.test(/gecko/i), n3 = e9.test(/like gecko/i);
    return t3 && !n3;
  }, describe: function(e9) {
    var t3 = { name: o2.ENGINE_MAP.Gecko }, n3 = i2.default.getFirstMatch(/gecko\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }, { test: [/(apple)?webkit\/537\.36/i], describe: function() {
    return { name: o2.ENGINE_MAP.Blink };
  } }, { test: [/(apple)?webkit/i], describe: function(e9) {
    var t3 = { name: o2.ENGINE_MAP.WebKit }, n3 = i2.default.getFirstMatch(/webkit\/(\d+(\.?_?\d+)+)/i, e9);
    return n3 && (t3.version = n3), t3;
  } }];
  t2.default = s2, e8.exports = t2.default;
} });
var op = Nn(ip.exports);
var sp = { Initialized: "initialized", DisplayURI: "display_uri", ProviderUpdate: "provider_update", ConnectWithResponse: "connectWithResponse", ConnectionStatus: "connection_status", ServiceStatus: "service_status" };
var ap = class _ap {
  constructor({ shouldSetOnWindow: e8, connectionStream: t2, shouldSendMetadata: n2 = false, shouldShimWeb3: r2, sdkInstance: i2 }) {
    const o2 = new dp({ connectionStream: t2, shouldSendMetadata: n2, shouldSetOnWindow: e8, shouldShimWeb3: r2, autoRequestAccounts: false }), s2 = new Proxy(o2, { deleteProperty: () => true });
    if (this.provider = s2, this.sdkInstance = i2, e8 && "undefined" != typeof window) try {
      a2 = o2, window.ethereum = a2, window.dispatchEvent(new Event("ethereum#initialized"));
    } catch (e9) {
      Hf("[Ethereum] Unable to set global provider - window.ethereum may be read-only", e9);
    }
    var a2;
    if (r2 && "undefined" != typeof window) try {
      !function(e9, t3 = console) {
        let n3 = false, r3 = false;
        if (!window.web3) {
          const i3 = "__isMetaMaskShim__";
          let o3 = { currentProvider: e9 };
          Object.defineProperty(o3, i3, { value: true, enumerable: true, configurable: false, writable: false }), o3 = new Proxy(o3, { get: (o4, s3, ...a3) => ("currentProvider" !== s3 || n3 ? "currentProvider" === s3 || s3 === i3 || r3 || (r3 = true, t3.error("MetaMask no longer injects web3. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"), e9.request({ method: "metamask_logWeb3ShimUsage" }).catch((e10) => {
            t3.debug("MetaMask: Failed to log web3 shim usage.", e10);
          })) : (n3 = true, t3.warn("You are accessing the MetaMask window.web3.currentProvider shim. This property is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3")), Reflect.get(o4, s3, ...a3)), set: (...e10) => (t3.warn("You are accessing the MetaMask window.web3 shim. This object is deprecated; use window.ethereum instead. For details, see: https://docs.metamask.io/guide/provider-migration.html#replacing-window-web3"), Reflect.set(...e10)) }), Object.defineProperty(window, "web3", { value: o3, enumerable: false, configurable: true, writable: true });
        }
      }(this.provider);
    } catch (e9) {
      Hf("[Ethereum] Unable to shim web3 - window.web3 may be read-only", e9);
    }
    this.provider.on("display_uri", (e9) => {
      this.sdkInstance.emit(sp.DisplayURI, e9);
    }), this.provider.on("_initialized", () => {
      const e9 = { chainId: this.provider.getChainId(), isConnected: this.provider.isConnected(), isMetaMask: this.provider.isMetaMask, selectedAddress: this.provider.getSelectedAddress(), networkVersion: this.provider.getNetworkVersion() };
      this.sdkInstance.emit(sp.Initialized, e9), Hf("[Ethereum: constructor()] provider initialized", e9);
    });
  }
  static init(e8) {
    var t2;
    return Hf("[Ethereum: init()] Initializing Ethereum service"), this.instance = new _ap(e8), null === (t2 = this.instance) || void 0 === t2 ? void 0 : t2.provider;
  }
  static destroy() {
  }
  static getInstance() {
    var e8;
    if (!(null === (e8 = this.instance) || void 0 === e8 ? void 0 : e8.provider)) throw new Error("Ethereum instance not intiialized - call Ethereum.factory first.");
    return this.instance;
  }
  static getProvider() {
    var e8;
    if (!(null === (e8 = this.instance) || void 0 === e8 ? void 0 : e8.provider)) throw new Error("Ethereum instance not intiialized - call Ethereum.factory first.");
    return this.instance.provider;
  }
};
var cp = class _cp {
  constructor({ useDeepLink: e8, preferredOpenLink: t2, debug: n2 = false }) {
    this.state = { platformType: void 0, useDeeplink: false, preferredOpenLink: void 0, debug: false }, this.state.platformType = this.getPlatformType(), this.state.useDeeplink = e8, this.state.preferredOpenLink = t2, this.state.debug = n2;
  }
  openDeeplink(e8, t2, n2) {
    return function(e9, t3, n3, r2) {
      const { state: i2 } = e9;
      Hf(`[PlatfformManager: openDeeplink()] universalLink --> ${t3}`), Hf(`[PlatfformManager: openDeeplink()] deepLink --> ${n3}`);
      try {
        if (i2.preferredOpenLink) return void i2.preferredOpenLink(i2.useDeeplink ? n3 : t3, r2);
        if (Hf(`[PlatfformManager: openDeeplink()] open link now useDeepLink=${i2.useDeeplink} link=${i2.useDeeplink ? n3 : t3}`), i2.useDeeplink) "undefined" != typeof window && (window.location.href = n3);
        else if ("undefined" != typeof document) {
          const e10 = document.createElement("a");
          e10.href = t3, e10.target = "_self", e10.rel = "noreferrer noopener", e10.click();
        }
      } catch (e10) {
        console.log("[PlatfformManager: openDeeplink()] can't open link", e10);
      }
    }(this, e8, t2, n2);
  }
  isReactNative() {
    var e8;
    return this.isNotBrowser() && "undefined" != typeof window && (null === window || void 0 === window ? void 0 : window.navigator) && "ReactNative" === (null === (e8 = window.navigator) || void 0 === e8 ? void 0 : e8.product);
  }
  isMetaMaskInstalled() {
    return function() {
      const e8 = ap.getProvider() || (null === window || void 0 === window ? void 0 : window.ethereum);
      return Hf(`[PlatfformManager: isMetaMaskInstalled()] isMetaMask=${null == e8 ? void 0 : e8.isMetaMask} isConnected=${null == e8 ? void 0 : e8.isConnected()}`), (null == e8 ? void 0 : e8.isMetaMask) && (null == e8 ? void 0 : e8.isConnected());
    }();
  }
  isDesktopWeb() {
    return this.isBrowser() && !this.isMobileWeb();
  }
  isMobile() {
    var e8, t2;
    const n2 = op.parse(window.navigator.userAgent);
    return "mobile" === (null === (e8 = null == n2 ? void 0 : n2.platform) || void 0 === e8 ? void 0 : e8.type) || "tablet" === (null === (t2 = null == n2 ? void 0 : n2.platform) || void 0 === t2 ? void 0 : t2.type);
  }
  isSecure() {
    return this.isReactNative() || this.isMobileWeb();
  }
  isMetaMaskMobileWebView() {
    return "undefined" != typeof window && Boolean(window.ReactNativeWebView) && Boolean(navigator.userAgent.endsWith("MetaMaskMobile"));
  }
  isMobileWeb() {
    return this.state.platformType === cc.MobileWeb;
  }
  static isNotBrowser() {
    var e8;
    return "undefined" == typeof window || !(null === window || void 0 === window ? void 0 : window.navigator) || void 0 !== Rt && "ReactNative" === (null === (e8 = null == Rt ? void 0 : Rt.navigator) || void 0 === e8 ? void 0 : e8.product) || "ReactNative" === (null === navigator || void 0 === navigator ? void 0 : navigator.product);
  }
  isNotBrowser() {
    return _cp.isNotBrowser();
  }
  static isBrowser() {
    return !this.isNotBrowser();
  }
  isBrowser() {
    return _cp.isBrowser();
  }
  isNodeJS() {
    return this.isNotBrowser() && !this.isReactNative();
  }
  isUseDeepLink() {
    return this.state.useDeeplink;
  }
  getPlatformType() {
    return function(e8) {
      const { state: t2 } = e8;
      return t2.platformType ? t2.platformType : e8.isReactNative() ? cc.ReactNative : e8.isNotBrowser() ? cc.NonBrowser : e8.isMetaMaskMobileWebView() ? cc.MetaMaskMobileWebview : e8.isMobile() ? cc.MobileWeb : cc.DesktopWeb;
    }(this);
  }
};
var lp = (e8) => Ot(void 0, void 0, void 0, function* () {
  if (cp.isBrowser()) {
    const { StorageManagerWeb: t3 } = yield Promise.resolve().then(function() {
      return lg;
    });
    return new t3(e8);
  }
  const t2 = { persistChannelConfig: () => Ot(void 0, void 0, void 0, function* () {
  }), getPersistedChannelConfig: () => Ot(void 0, void 0, void 0, function* () {
  }), persistAccounts: () => Ot(void 0, void 0, void 0, function* () {
  }), getCachedAccounts: () => Ot(void 0, void 0, void 0, function* () {
    return [];
  }), persistChainId: () => Ot(void 0, void 0, void 0, function* () {
  }), getCachedChainId: () => Ot(void 0, void 0, void 0, function* () {
  }), terminate: () => Ot(void 0, void 0, void 0, function* () {
  }) };
  return Promise.resolve(t2);
});
var dp = class extends Uf {
  constructor({ connectionStream: e8, shouldSendMetadata: t2, autoRequestAccounts: n2 = false }) {
    super(e8, { logger: console, maxEventListeners: 100, shouldSendMetadata: t2 }), this.state = { accounts: null, autoRequestAccounts: false, providerStateRequested: false, chainId: "", networkVersion: "" }, Hf(`[SDKProvider: constructor()] autoRequestAccounts=${n2}`), this.state.autoRequestAccounts = n2;
  }
  forceInitializeState() {
    return Ot(this, void 0, void 0, function* () {
      return Hf(`[SDKProvider: forceInitializeState()] autoRequestAccounts=${this.state.autoRequestAccounts}`), this._initializeStateAsync();
    });
  }
  _setConnected() {
    Hf("[SDKProvider: _setConnected()] Setting connected state"), this._state.isConnected = true;
  }
  getState() {
    return this._state;
  }
  getSDKProviderState() {
    return this.state;
  }
  getSelectedAddress() {
    var e8;
    const { accounts: t2 } = this._state;
    return t2 && 0 !== t2.length ? (null === (e8 = t2[0]) || void 0 === e8 ? void 0 : e8.toLowerCase()) || "" : (Hf("[SDKProvider: getSelectedAddress] No accounts found"), null);
  }
  getChainId() {
    return this.state.chainId;
  }
  getNetworkVersion() {
    return this.state.networkVersion;
  }
  setSDKProviderState(e8) {
    this.state = Object.assign(Object.assign({}, this.state), e8);
  }
  handleAccountsChanged(e8, t2) {
    return this._handleAccountsChanged(e8, t2);
  }
  handleDisconnect({ terminate: e8 = false }) {
    !function({ terminate: e9 = false, instance: t2 }) {
      const { state: n2 } = t2;
      Hf(`[SDKProvider: handleDisconnect()] cleaning up provider state terminate=${e9}`, t2), e9 && (t2._state.accounts = null, t2._state.isUnlocked = false, t2._state.isPermanentlyDisconnected = true, t2._state.initialized = false), t2._handleAccountsChanged([]), t2._state.isConnected = false, t2.emit("disconnect", zf.ethErrors.provider.disconnected()), n2.providerStateRequested = false;
    }({ terminate: e8, instance: this });
  }
  _initializeStateAsync() {
    return Ot(this, void 0, void 0, function* () {
      return function(e8) {
        var t2, n2;
        return Ot(this, void 0, void 0, function* () {
          void 0 === e8.state && (e8.state = { accounts: null, autoRequestAccounts: false, providerStateRequested: false, chainId: "" });
          const { state: r2 } = e8;
          let i2;
          if (r2.providerStateRequested) Hf("[SDKProvider: initializeStateAsync()] initialization already in progress");
          else {
            let o2;
            r2.providerStateRequested = true;
            let s2 = null, a2 = false, c2 = false;
            const l2 = yield lp({ enabled: true });
            if (l2) {
              const e9 = yield l2.getPersistedChannelConfig({});
              a2 = null !== (t2 = null == e9 ? void 0 : e9.relayPersistence) && void 0 !== t2 && t2, o2 = yield l2.getCachedChainId();
              const n3 = yield l2.getCachedAccounts();
              n3.length > 0 && (s2 = n3[0]);
            }
            if (Hf(`[SDKProvider: initializeStateAsync()] relayPersistence=${a2}`, { relayPersistence: a2, cachedChainId: o2, cachedSelectedAddress: s2 }), a2) if (o2 && s2) i2 = { accounts: [s2], chainId: o2, isUnlocked: false }, c2 = true;
            else try {
              i2 = yield e8.request({ method: "metamask_getProviderState" });
            } catch (t3) {
              return e8._log.error("MetaMask: Failed to get initial state. Please report this bug.", t3), void (r2.providerStateRequested = false);
            }
            if (0 === (null === (n2 = null == i2 ? void 0 : i2.accounts) || void 0 === n2 ? void 0 : n2.length)) if (e8.getSelectedAddress()) i2.accounts = [e8.getSelectedAddress()];
            else {
              Hf("[SDKProvider: initializeStateAsync()] Fetch accounts remotely.");
              const t3 = yield e8.request({ method: "eth_requestAccounts", params: [] });
              i2.accounts = t3;
            }
            e8._initializeState(i2), r2.providerStateRequested = false, c2 && (e8._state.isConnected = true, e8.emit("connect", { chainId: null == i2 ? void 0 : i2.chainId }));
          }
        });
      }(this);
    });
  }
  _initializeState(e8) {
    return Hf("[SDKProvider: _initializeState()]", e8), function(e9, t2, n2) {
      return Hf("[SDKProvider: initializeState()] set state._initialized to false"), e9._state.initialized = false, t2(n2);
    }(this, super._initializeState.bind(this), e8);
  }
  _handleChainChanged({ chainId: e8, networkVersion: t2 } = {}) {
    this.state.chainId = e8, this.state.networkVersion = t2, function({ instance: e9, chainId: t3, networkVersion: n2, superHandleChainChanged: r2 }) {
      Hf(`[SDKProvider: handleChainChanged()] chainId=${t3} networkVersion=${n2}`);
      let i2 = n2;
      n2 || (Hf("[SDKProvider: handleChainChanged()] forced network version to prevent provider error"), i2 = "1"), e9._state.isConnected = true, e9.emit("connect", { chainId: t3 }), r2({ chainId: t3, networkVersion: i2 });
    }({ instance: this, chainId: e8, networkVersion: t2, superHandleChainChanged: super._handleChainChanged.bind(this) });
  }
};
var up;
var hp = { name: "@metamask/sdk", version: "0.31.5", description: "", homepage: "https://github.com/MetaMask/metamask-sdk#readme", bugs: { url: "https://github.com/MetaMask/metamask-sdk/issues" }, repository: { type: "git", url: "https://github.com/MetaMask/metamask-sdk", directory: "packages/sdk" }, main: "dist/node/cjs/metamask-sdk.js", module: "dist/browser/es/metamask-sdk.js", browser: "dist/browser/es/metamask-sdk.js", unpkg: "dist/browser/umd/metamask-sdk.js", "react-native": "dist/react-native/es/metamask-sdk.js", types: "dist/types/src/index.d.ts", sideEffects: false, files: ["/dist"], scripts: { "build:types": "tsc --project tsconfig.build.json --emitDeclarationOnly --outDir dist/types", build: "yarn build:types && rollup -c --bundleConfigAsCjs", "build:clean": "yarn clean && yarn build", "build:dev": "yarn build:types && NODE_ENV=dev rollup -c --bundleConfigAsCjs", "build:post-tsc": "echo 'N/A'", "build:pre-tsc": "echo 'N/A'", typecheck: "tsc --noEmit", clean: "rimraf ./dist", size: "node bundle-size && size-limit", lint: "yarn lint:eslint && yarn lint:misc --check", "lint:changelog": "../../scripts/validate-changelog.sh @metamask/sdk", "lint:eslint": "eslint . --cache --ext js,ts", "lint:fix": "yarn lint:eslint --fix && yarn lint:misc --write", "lint:misc": "prettier '**/*.json' '**/*.md' '!CHANGELOG.md' --ignore-path ../../.gitignore", prepack: "../../scripts/prepack.sh", "publish:preview": "yarn npm publish --tag preview", reset: "yarn clean && rimraf ./node_modules/", test: 'jest --testPathIgnorePatterns "/e2e/"', "test:coverage": 'jest --coverage --testPathIgnorePatterns "/e2e/"', "test:e2e": 'jest --testPathPattern "/e2e/"', "test:ci": 'jest --coverage --passWithNoTests --setupFilesAfterEnv ./jest-preload.js --testPathIgnorePatterns "/e2e/"', "test:dev": 'jest -c ./jest.config.ts --detectOpenHandles  --testPathIgnorePatterns "/e2e/"', watch: "rollup -c -w" }, dependencies: { "@babel/runtime": "^7.26.0", "@metamask/onboarding": "^1.0.1", "@metamask/providers": "16.1.0", "@metamask/sdk-communication-layer": "workspace:*", "@metamask/sdk-install-modal-web": "workspace:*", "@paulmillr/qr": "^0.2.1", bowser: "^2.9.0", "cross-fetch": "^4.0.0", debug: "^4.3.4", eciesjs: "^0.4.11", "eth-rpc-errors": "^4.0.3", eventemitter2: "^6.4.9", "obj-multiplex": "^1.0.0", pump: "^3.0.0", "readable-stream": "^3.6.2", "socket.io-client": "^4.5.1", tslib: "^2.6.0", util: "^0.12.4", uuid: "^8.3.2" }, devDependencies: { "@jest/globals": "^29.3.1", "@lavamoat/allow-scripts": "^2.3.1", "@metamask/auto-changelog": "3.1.0", "@metamask/eslint-config": "^6.0.0", "@metamask/eslint-config-nodejs": "^6.0.0", "@metamask/eslint-config-typescript": "^6.0.0", "@react-native-async-storage/async-storage": "^1.19.6", "@rollup/plugin-alias": "^5.1.1", "@rollup/plugin-commonjs": "^25.0.7", "@rollup/plugin-json": "^6.0.0", "@rollup/plugin-node-resolve": "^15.0.2", "@rollup/plugin-replace": "^6.0.1", "@rollup/plugin-terser": "^0.4.1", "@size-limit/preset-big-lib": "^11.0.2", "@types/dom-screen-wake-lock": "^1.0.2", "@types/node": "^20.1.3", "@types/pump": "^1.1.1", "@types/qrcode-terminal": "^0.12.0", "@types/uuid": "^10.0.0", "@typescript-eslint/eslint-plugin": "^4.26.0", "@typescript-eslint/parser": "^4.26.0", "browserify-zlib": "^0.2.0", buffer: "^6.0.3", "crypto-browserify": "^3.12.0", eslint: "^7.30.0", "eslint-config-prettier": "^8.3.0", "eslint-plugin-import": "^2.23.4", "eslint-plugin-jest": "^24.4.0", "eslint-plugin-jsdoc": "^36.1.0", "eslint-plugin-node": "^11.1.0", "eslint-plugin-prettier": "^3.4.0", "https-browserify": "^1.0.0", jest: "^29.3.1", "jest-environment-jsdom": "^29.3.1", prettier: "^2.3.0", process: "^0.11.10", rimraf: "^4.4.0", rollup: "^4.26.0", "rollup-plugin-analyzer": "^4.0.0", "rollup-plugin-jscc": "^2.0.0", "rollup-plugin-natives": "^0.7.5", "rollup-plugin-node-builtins": "^2.1.2", "rollup-plugin-polyfill-node": "^0.13.0", "rollup-plugin-sizes": "^1.0.6", "rollup-plugin-typescript2": "^0.31.2", "rollup-plugin-visualizer": "^5.12.0", "size-limit": "^11.0.2", "stream-browserify": "^3.0.0", "stream-http": "^3.2.0", "ts-jest": "^29.0.3", "ts-node": "^10.9.1", typescript: "^4.3.2", url: "^0.11.0", webpack: "^5.0.0" }, publishConfig: { access: "public", registry: "https://registry.npmjs.org/" }, lavamoat: { allowScripts: { "eciesjs>secp256k1": false, "socket.io-client>engine.io-client>ws>bufferutil": false, "socket.io-client>engine.io-client>ws>utf-8-validate": false, "@metamask/sdk-communication-layer>bufferutil": false, "@metamask/sdk-communication-layer>eciesjs>secp256k1": false, "@metamask/sdk-communication-layer>utf-8-validate": false } } };
!function(e8) {
  e8.INPAGE = "metamask-inpage", e8.CONTENT_SCRIPT = "metamask-contentscript", e8.PROVIDER = "metamask-provider";
}(up || (up = {}));
var fp = "direct";
var pp = "https://metamask.app.link/connect";
var gp = "metamask://connect";
var mp = { NAME: "MetaMask", RDNS: ["io.metamask", "io.metamask.flask"] };
var yp = /(?:^[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[a-f0-9]{4}-[a-f0-9]{12}$)|(?:^0{8}-0{4}-0{4}-0{4}-0{12}$)/u;
var vp = { METAMASK_GETPROVIDERSTATE: "metamask_getProviderState", METAMASK_CONNECTSIGN: "metamask_connectSign", METAMASK_CONNECTWITH: "metamask_connectWith", METAMASK_OPEN: "metamask_open", METAMASK_BATCH: "metamask_batch", PERSONAL_SIGN: "personal_sign", WALLET_REQUESTPERMISSIONS: "wallet_requestPermissions", WALLET_REVOKEPERMISSIONS: "wallet_revokePermissions", WALLET_GETPERMISSIONS: "wallet_getPermissions", WALLET_WATCHASSET: "wallet_watchAsset", WALLET_ADDETHEREUMCHAIN: "wallet_addEthereumChain", WALLET_SWITCHETHETHEREUMCHAIN: "wallet_switchEthereumChain", ETH_REQUESTACCOUNTS: "eth_requestAccounts", ETH_ACCOUNTS: "eth_accounts", ETH_CHAINID: "eth_chainId", ETH_SENDTRANSACTION: "eth_sendTransaction", ETH_SIGNTYPEDDATA: "eth_signTypedData", ETH_SIGNTYPEDDATA_V3: "eth_signTypedData_v3", ETH_SIGNTYPEDDATA_V4: "eth_signTypedData_v4", ETH_SIGNTRANSACTION: "eth_signTransaction", ETH_SIGN: "eth_sign", PERSONAL_EC_RECOVER: "personal_ecRecover" };
var bp = { [vp.ETH_REQUESTACCOUNTS]: true, [vp.ETH_SENDTRANSACTION]: true, [vp.ETH_SIGNTRANSACTION]: true, [vp.ETH_SIGN]: true, [vp.PERSONAL_SIGN]: true, [vp.ETH_ACCOUNTS]: false, [vp.ETH_CHAINID]: false, [vp.PERSONAL_SIGN]: true, [vp.ETH_SIGNTYPEDDATA]: true, [vp.ETH_SIGNTYPEDDATA_V3]: true, [vp.ETH_SIGNTYPEDDATA_V4]: true, [vp.WALLET_REQUESTPERMISSIONS]: true, [vp.WALLET_GETPERMISSIONS]: true, [vp.WALLET_WATCHASSET]: true, [vp.WALLET_ADDETHEREUMCHAIN]: true, [vp.WALLET_SWITCHETHETHEREUMCHAIN]: true, [vp.METAMASK_CONNECTSIGN]: true, [vp.METAMASK_CONNECTWITH]: true, [vp.PERSONAL_EC_RECOVER]: true, [vp.METAMASK_BATCH]: true, [vp.METAMASK_OPEN]: true };
var wp = Object.keys(bp).map((e8) => e8.toLowerCase());
var Ep = ["eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sign"].map((e8) => e8.toLowerCase());
var Cp = ".sdk-comm";
var _p = "providerType";
var Sp = ".MMSDK_cached_address";
var kp = ".MMSDK_cached_chainId";
var xp = "chainChanged";
var Ap = "accountsChanged";
var Mp = "disconnect";
var Lp = "connect";
var Tp = "connected";
var Op;
!function(e8) {
  e8.TERMINATE = "terminate", e8.EXTENSION = "extension", e8.INITIALIZED = "initialized";
}(Op || (Op = {}));
var Rp = "undefined" != typeof window && window.localStorage;
function Pp(e8) {
  var t2, n2;
  return Ot(this, void 0, void 0, function* () {
    Hf("[MetaMaskSDK: connectWithExtensionProvider()] ", e8), e8.sdkProvider = e8.activeProvider, e8.activeProvider = window.extension, window.ethereum = window.extension;
    try {
      const e9 = yield null === (t2 = window.extension) || void 0 === t2 ? void 0 : t2.request({ method: "eth_requestAccounts" });
      Hf(`[MetaMaskSDK: connectWithExtensionProvider()] accounts=${e9}`);
    } catch (e9) {
      return void console.warn("[MetaMaskSDK: connectWithExtensionProvider()] can't request accounts error", e9);
    }
    localStorage.setItem(_p, "extension"), e8.extensionActive = true, e8.emit(sp.ProviderUpdate, Op.EXTENSION), e8.options.enableAnalytics && (null === (n2 = e8.analytics) || void 0 === n2 || n2.send({ event: Wa.SDK_USE_EXTENSION }));
  });
}
function Ip(e8) {
  let t2;
  if (void 0 !== Wt) t2 = Wt.from(e8, "utf8").toString("base64");
  else if ("function" == typeof btoa) t2 = btoa(encodeURIComponent(e8).replace(/%([0-9A-F]{2})/gu, (e9, t3) => String.fromCharCode(parseInt(t3, 16))));
  else {
    if ("object" != typeof Rt || !("Buffer" in Rt)) throw new Error("Unable to base64 encode: No available method.");
    t2 = Rt.Buffer.from(e8, "utf8").toString("base64");
  }
  return t2;
}
var Np = class extends Ef.Duplex {
  constructor({ name: e8, remote: t2, deeplinkProtocol: n2, platformManager: r2 }) {
    super({ objectMode: true }), this.state = { _name: null, remote: null, deeplinkProtocol: false, platformManager: null }, this.state._name = e8, this.state.remote = t2, this.state.deeplinkProtocol = n2, this.state.platformManager = r2, this._onMessage = this._onMessage.bind(this), this.state.remote.on(Ha.MESSAGE, this._onMessage);
  }
  _write(e8, t2, n2) {
    return Ot(this, void 0, void 0, function* () {
      return function(e9, t3, n3, r2) {
        var i2, o2, s2, a2, c2, l2, d2, u2, h2, f2, p2, g2, m2, y2, v2, b2, w2, E2, C2, _2;
        return Ot(this, void 0, void 0, function* () {
          const n4 = null === (i2 = e9.state.remote) || void 0 === i2 ? void 0 : i2.isReady(), S2 = null === (o2 = e9.state.remote) || void 0 === o2 ? void 0 : o2.isConnected(), k2 = null === (s2 = e9.state.remote) || void 0 === s2 ? void 0 : s2.isPaused(), x2 = ap.getProvider(), A2 = null === (a2 = e9.state.remote) || void 0 === a2 ? void 0 : a2.getChannelId(), M2 = null === (c2 = e9.state.remote) || void 0 === c2 ? void 0 : c2.isAuthorized(), { deeplinkProtocol: L2 } = e9.state, { method: T2, data: O2, triggeredInstaller: R2 } = ((e10) => {
            var t4, n5, r3, i3;
            let o3;
            Wt.isBuffer(e10) ? (o3 = e10.toJSON(), o3._isBuffer = true) : o3 = e10;
            const s3 = null === (t4 = null == o3 ? void 0 : o3.data) || void 0 === t4 ? void 0 : t4.method;
            let a3 = false;
            return "object" == typeof (null === (n5 = null == o3 ? void 0 : o3.data) || void 0 === n5 ? void 0 : n5.params) && true === (null === (i3 = null === (r3 = null == o3 ? void 0 : o3.data) || void 0 === r3 ? void 0 : r3.params) || void 0 === i3 ? void 0 : i3.__triggeredInstaller) && (a3 = true, o3.data.params = o3.data.params.wrappedParams), { method: s3, data: o3, triggeredInstaller: a3 };
          })(t3);
          if (Hf(`[RCPMS: write()] method='${T2}' isRemoteReady=${n4} channelId=${A2} isSocketConnected=${S2} isRemotePaused=${k2} providerConnected=${x2.isConnected()}`, t3), !A2) return T2 !== vp.METAMASK_GETPROVIDERSTATE && Hf(`[RCPMS: write()] ${T2} --> channelId is undefined`), r2(new Error("disconnected"));
          Hf(`[RCPMS: write()] remote.isPaused()=${null === (l2 = e9.state.remote) || void 0 === l2 ? void 0 : l2.isPaused()} authorized=${M2} ready=${n4} socketConnected=${S2}`, t3);
          const P2 = null === (d2 = e9.state.platformManager) || void 0 === d2 ? void 0 : d2.isSecure(), I2 = null !== (h2 = null === (u2 = e9.state.platformManager) || void 0 === u2 ? void 0 : u2.isMobileWeb()) && void 0 !== h2 && h2, N2 = null !== (p2 = null === (f2 = e9.state.remote) || void 0 === f2 ? void 0 : f2.hasDeeplinkProtocol()) && void 0 !== p2 && p2 && I2 && M2;
          try {
            if (console.warn(`[RCPMS: _write()] triggeredInstaller=${R2} activeDeeplinkProtocol=${N2}`), R2 || null === (g2 = e9.state.remote) || void 0 === g2 || g2.sendMessage(null == O2 ? void 0 : O2.data).then(() => {
              Hf(`[RCPMS: _write()] ${T2} sent successfully`);
            }).catch((e10) => {
              Hf("[RCPMS: _write()] error sending message", e10);
            }), !P2) return Hf(`[RCPMS: _write()] unsecure platform for method ${T2} -- return callback`), r2();
            if (R2) return Hf("[RCPMS: _write()] prevent deeplink -- installation completed separately."), r2();
            const t4 = null !== (v2 = null === (y2 = null === (m2 = e9.state.remote) || void 0 === m2 ? void 0 : m2.getKeyInfo()) || void 0 === y2 ? void 0 : y2.ecies.public) && void 0 !== v2 ? v2 : "";
            let n5 = encodeURI(`channelId=${A2}&pubkey=${t4}&comm=socket&t=d&v=2`);
            if (N2) {
              const t5 = JSON.stringify(null == O2 ? void 0 : O2.data), i3 = null === (b2 = e9.state.remote) || void 0 === b2 ? void 0 : b2.encrypt(t5);
              if (!i3) return Hf("[RCPMS: _write()] error encrypting message"), r2(new Error("RemoteCommunicationPostMessageStream - disconnected"));
              n5 += `&scheme=${L2}&rpc=${Ip(i3)}`;
            }
            if (!(null === (w2 = e9.state.platformManager) || void 0 === w2 ? void 0 : w2.isMetaMaskInstalled())) return Hf("[RCPMS: _write()] prevent deeplink until installation is completed."), r2();
            bp[T2] ? (Hf(`[RCPMS: _write()] redirect link for '${T2}' socketConnected=${S2} connect?${n5}`), null === (E2 = e9.state.platformManager) || void 0 === E2 || E2.openDeeplink(`${pp}?${n5}`, `${gp}?${n5}`, "_self")) : (null === (C2 = e9.state.remote) || void 0 === C2 ? void 0 : C2.isPaused()) ? (Hf(`[RCPMS: _write()] MM is PAUSED! deeplink with connect! targetMethod=${T2}`), null === (_2 = e9.state.platformManager) || void 0 === _2 || _2.openDeeplink(`${pp}?redirect=true&${n5}`, `${gp}?redirect=true&${n5}`, "_self")) : Hf(`[RCPMS: _write()] method ${T2} doesn't need redirect.`);
          } catch (e10) {
            return Hf("[RCPMS: _write()] error sending message", e10), r2(new Error("RemoteCommunicationPostMessageStream - disconnected"));
          }
          return r2();
        });
      }(this, e8, 0, n2);
    });
  }
  _read() {
  }
  _onMessage(e8) {
    return function(e9, t2) {
      try {
        if (Hf("[RCPMS: onMessage()] message", t2), !t2 || "object" != typeof t2) return;
        if ("object" != typeof (null == t2 ? void 0 : t2.data)) return;
        if (!(null == t2 ? void 0 : t2.name)) return void Hf("[RCPMS: onMessage()] ignore message without name", t2);
        if ((null == t2 ? void 0 : t2.name) !== up.PROVIDER) return void Hf(`[RCPMS: onMessage()] ignore message with wrong name message=${t2}`);
        if (Wt.isBuffer(t2)) {
          const n2 = Wt.from(t2);
          e9.push(n2);
        } else e9.push(t2);
      } catch (e10) {
        Hf(`[RCPMS: onMessage()] ignore message error err=${e10}`);
      }
    }(this, e8);
  }
  start() {
  }
};
var Dp = 1;
var Bp = (e8) => new Promise((t2) => {
  setTimeout(() => {
    t2(true);
  }, e8);
});
var $p = ({ checkInstallationOnAllCalls: e8 = false, communicationLayerPreference: t2, injectProvider: n2, shouldShimWeb3: r2, platformManager: i2, installer: o2, sdk: s2, remoteConnection: a2, debug: c2 }) => Ot(void 0, void 0, void 0, function* () {
  var l2, d2;
  const h2 = (({ name: e9, remoteConnection: t3 }) => {
    if (!t3 || !(null == t3 ? void 0 : t3.getConnector())) throw new Error("Missing remote connection parameter");
    return new Np({ name: e9, remote: null == t3 ? void 0 : t3.getConnector(), deeplinkProtocol: null == t3 ? void 0 : t3.state.deeplinkProtocol, platformManager: null == t3 ? void 0 : t3.getPlatformManager() });
  })({ name: up.INPAGE, target: up.CONTENT_SCRIPT, platformManager: i2, communicationLayerPreference: t2, remoteConnection: a2 }), f2 = i2.getPlatformType(), p2 = s2.options.dappMetadata, g2 = `Sdk/Javascript SdkVersion/${hp.version} Platform/${f2} dApp/${null !== (l2 = p2.url) && void 0 !== l2 ? l2 : p2.name} dAppTitle/${p2.name}`;
  let m2 = null, y2 = null;
  const v2 = null === (d2 = s2.options.storage) || void 0 === d2 ? void 0 : d2.storageManager;
  if (v2) {
    try {
      const e9 = yield v2.getCachedAccounts();
      e9.length > 0 && (m2 = e9[0]);
    } catch (e9) {
      console.error(`[initializeMobileProvider] failed to get cached addresses: ${e9}`);
    }
    try {
      const e9 = yield v2.getCachedChainId();
      e9 && (y2 = e9);
    } catch (e9) {
      console.error(`[initializeMobileProvider] failed to parse cached chainId: ${e9}`);
    }
  }
  Hf(`[initializeMobileProvider] cachedAccountAddress: ${m2}, cachedChainId: ${y2}`);
  const b2 = !(!n2 || f2 === cc.NonBrowser || f2 === cc.ReactNative), w2 = ap.init({ shouldSetOnWindow: b2, connectionStream: h2, shouldShimWeb3: r2, sdkInstance: s2 });
  let E2 = false;
  const C2 = (e9) => {
    E2 = e9;
  }, _2 = () => E2, S2 = (t3, n3, r3, c3) => Ot(void 0, void 0, void 0, function* () {
    var l3, d3, h3, f3, p3, b3, w3, S3, k3;
    const x3 = ap.getProvider();
    if (E2) {
      x3.emit("display_uri", (null == a2 ? void 0 : a2.state.qrcodeLink) || ""), null == a2 || a2.showActiveModal();
      let e9 = _2();
      for (; e9; ) {
        const t4 = _2(), n4 = null == a2 ? void 0 : a2.isAuthorized();
        e9 = t4 && !n4, Hf(`[initializeMobileProvider: sendRequest()] waiting for initialization to complete - initializing: ${t4} authorized: ${n4}`), yield Bp(1e3);
      }
      return Hf("[initializeMobileProvider: sendRequest()] initial method completed -- prevent installation and call provider"), r3(...n3);
    }
    const A2 = i2.isMetaMaskInstalled(), M2 = null == a2 ? void 0 : a2.isConnected();
    let L2 = null, T2 = null, O2 = null;
    if (L2 = null !== (l3 = x3.getSelectedAddress()) && void 0 !== l3 ? l3 : m2, O2 = x3.getChainId() || y2, L2 && v2 && L2 !== m2 && v2.persistAccounts([L2]).catch((e9) => {
      console.error(`[initializeMobileProvider] failed to persist account: ${e9}`);
    }), O2 && (y2 = O2, v2 && v2.persistChainId(O2).catch((e9) => {
      console.error(`[initializeMobileProvider] failed to persist chainId: ${e9}`);
    })), Hf("[initializeMobileProvider: sendRequest()]", { selectedAddress: L2, chainId: O2 }), c3 && Hf(`[initializeMobileProvider: sendRequest()] method=${t3} ongoing=${E2} selectedAddress=${L2} isInstalled=${A2} checkInstallationOnAllCalls=${e8} socketConnected=${M2}`), L2 && t3.toLowerCase() === vp.ETH_ACCOUNTS.toLowerCase()) return [L2];
    if (O2 && t3.toLowerCase() === vp.ETH_CHAINID.toLowerCase()) return O2;
    const R2 = [vp.ETH_REQUESTACCOUNTS, vp.WALLET_REQUESTPERMISSIONS, vp.METAMASK_CONNECTSIGN, vp.METAMASK_CONNECTWITH], P2 = !bp[t3], I2 = null === (d3 = s2.options.readonlyRPCMap) || void 0 === d3 ? void 0 : d3[O2];
    if (I2 && P2) try {
      const e9 = null === (h3 = null == n3 ? void 0 : n3[0]) || void 0 === h3 ? void 0 : h3.params, r4 = yield (({ rpcEndpoint: e10, method: t4, sdkInfo: n4, params: r5 }) => Ot(void 0, void 0, void 0, function* () {
        const i3 = JSON.stringify({ jsonrpc: "2.0", method: t4, params: r5, id: (Dp += 1, Dp) }), o3 = { Accept: "application/json", "Content-Type": "application/json" };
        let s3;
        e10.includes("infura") && (o3["Metamask-Sdk-Info"] = n4);
        try {
          s3 = yield u(e10, { method: "POST", headers: o3, body: i3 });
        } catch (e11) {
          throw e11 instanceof Error ? new Error(`Failed to fetch from RPC: ${e11.message}`) : new Error(`Failed to fetch from RPC: ${e11}`);
        }
        if (!s3.ok) throw new Error(`Server responded with a status of ${s3.status}`);
        return (yield s3.json()).result;
      }))({ rpcEndpoint: I2, sdkInfo: g2, method: t3, params: e9 || [] });
      return c3 && Hf(`initializeProvider::ReadOnlyRPCResponse ${r4}`), r4;
    } catch (e9) {
      console.warn(`[initializeMobileProvider: sendRequest()] method=${t3} readOnlyRPCRequest failed:`, e9);
    }
    if ((!A2 || A2 && !M2) && t3 !== vp.METAMASK_GETPROVIDERSTATE) {
      const c4 = (null === (f3 = null == n3 ? void 0 : n3[0]) || void 0 === f3 ? void 0 : f3.params) || [];
      if (-1 !== R2.indexOf(t3) || e8) {
        C2(true);
        const e9 = t3 === vp.METAMASK_CONNECTWITH, i3 = `${Date.now()}`;
        try {
          yield o2.start({ wait: false, connectWith: e9 ? { method: t3, id: i3, params: c4 } : void 0 }), yield new Promise((e10, t4) => {
            (null == a2 ? void 0 : a2.isAuthorized()) && (Hf("[initializeMobileProvider: sendRequest()] already authorized"), e10(true)), null == a2 || a2.getConnector().once(Ha.AUTHORIZED, () => {
              e10(true);
            }), s2.once(Ha.PROVIDER_UPDATE, (e11) => {
              Hf(`[initializeMobileProvider: sendRequest()] PROVIDER_UPDATE --- remote provider request interupted type=${e11}`), e11 === Op.EXTENSION ? t4(Ha.PROVIDER_UPDATE) : t4(new Error("Connection Terminated"));
            });
          });
        } catch (e10) {
          if (Op.EXTENSION === e10) {
            if (Hf(`[initializeMobileProvider: sendRequest()] extension provider detect: re-create ${t3} on the active provider`), t3.toLowerCase() === vp.METAMASK_CONNECTSIGN.toLowerCase()) {
              const e11 = yield null === (p3 = s2.getProvider()) || void 0 === p3 ? void 0 : p3.request({ method: vp.ETH_REQUESTACCOUNTS, params: [] });
              if (!e11.length) throw new Error("SDK state invalid -- undefined accounts");
              const t4 = yield null === (b3 = s2.getProvider()) || void 0 === b3 ? void 0 : b3.request({ method: vp.PERSONAL_SIGN, params: [c4[0], e11[0]] });
              return s2.emit(sp.ConnectWithResponse, t4), t4;
            }
            if (t3.toLowerCase() === vp.METAMASK_CONNECTWITH.toLowerCase()) {
              const [e11] = c4, t4 = yield (({ method: e12, sdk: t5, params: n4 }) => Ot(void 0, void 0, void 0, function* () {
                var r4, i4, o3, s3;
                if (!t5.isExtensionActive()) throw new Error("SDK state invalid -- extension is not active");
                Hf("[MetaMaskProvider: extensionConnectWithOverwrite()] Overwriting request method", e12, n4);
                const a3 = yield null === (r4 = t5.getProvider()) || void 0 === r4 ? void 0 : r4.request({ method: vp.ETH_REQUESTACCOUNTS, params: [] });
                if (!a3.length) throw new Error("SDK state invalid -- undefined accounts");
                if ((null == e12 ? void 0 : e12.toLowerCase()) === vp.PERSONAL_SIGN.toLowerCase()) {
                  const r5 = { method: e12, params: [n4[0], a3[0]] };
                  return yield null === (i4 = t5.getProvider()) || void 0 === i4 ? void 0 : i4.request(r5);
                }
                if ((null == e12 ? void 0 : e12.toLowerCase()) === vp.ETH_SENDTRANSACTION.toLowerCase()) {
                  const r5 = { method: e12, params: [Object.assign(Object.assign({}, n4[0]), { from: a3[0] })] };
                  return yield null === (o3 = t5.getProvider()) || void 0 === o3 ? void 0 : o3.request(r5);
                }
                return Ep.includes(e12.toLowerCase()) ? (console.warn(`MetaMaskSDK connectWith method=${e12} -- not handled by the extension -- call separately`), a3) : yield null === (s3 = t5.getProvider()) || void 0 === s3 ? void 0 : s3.request({ method: e12, params: n4 });
              }))({ method: e11.method, sdk: s2, params: e11.params });
              return s2.emit(sp.ConnectWithResponse, t4), t4;
            }
            return Hf(`[initializeMobileProvider: sendRequest()] sending '${t3}' on active provider`, c4), yield null === (w3 = s2.getProvider()) || void 0 === w3 ? void 0 : w3.request({ method: t3, params: c4 });
          }
          if (e10 === Ha.REJECTED) throw null == a2 || a2.closeModal(), null === (S3 = s2.getProvider()) || void 0 === S3 || S3.handleDisconnect({ terminate: false }), Object.assign(new Error("User rejected connection"), { code: 4001 });
          throw Hf(`[initializeMobileProvider: sendRequest()] failed to start installer: ${e10}`), e10;
        } finally {
          C2(false);
        }
        if (t3 === vp.ETH_REQUESTACCOUNTS) return T2 = yield new Promise((e10) => {
          const t4 = setInterval(() => {
            const { accounts: n4 } = x3.getState();
            n4 && (clearInterval(t4), e10(n4));
          }, 100);
        }), Hf(`[initializeMobileProvider: sendRequest()] selectedAddress: ${L2} --- SKIP rpc call`), T2;
        if (t3 === vp.METAMASK_CONNECTWITH) try {
          let e10 = 0;
          const t4 = 5, n4 = ({ resolve: n5, reject: r5 }) => {
            e10 += 1;
            const o4 = null == a2 ? void 0 : a2.getConnector().getRPCMethodTracker(), c6 = null == o4 ? void 0 : o4[i3];
            return Hf(`TRACKER: update method ${i3}`, c6), (null == c6 ? void 0 : c6.result) ? (Hf("[initializeMobileProvider: sendRequest()] found result", c6.result), s2.emit(sp.ConnectWithResponse, c6.result), void n5(c6.result)) : (null == c6 ? void 0 : c6.error) ? (Hf("[initializeMobileProvider: sendRequest()] found error", c6.error), void r5(c6.error)) : e10 >= t4 ? (Hf("[initializeMobileProvider: sendRequest()] max message count reached without result"), void r5(new Error("Max message count reached without result"))) : void Hf("[initializeMobileProvider: sendRequest()] not found yet, need to wait for next update");
          };
          let r4, o3;
          const c5 = yield new Promise((e11, t5) => {
            const s3 = null == a2 ? void 0 : a2.getConnector().getRPCMethodTracker();
            Hf(`TRACKER: method ${i3}`, s3), (null == s3 ? void 0 : s3[i3].result) ? (Hf("[initializeMobileProvider: sendRequest()] found result", null == s3 ? void 0 : s3[i3].result), e11(null == s3 ? void 0 : s3[i3].result)) : (null == s3 ? void 0 : s3[i3].error) && (Hf("[initializeMobileProvider: sendRequest()] found error", null == s3 ? void 0 : s3[i3].error), t5(null == s3 ? void 0 : s3[i3].error)), o3 = () => n4({ resolve: e11, reject: t5 }), r4 = null == a2 ? void 0 : a2.getConnector().on(Ha.RPC_UPDATE, o3);
          });
          return o3 && (null == r4 || r4.off(Ha.RPC_UPDATE, o3)), Hf("TRACKER: result", c5), c5;
        } catch (e10) {
          throw Hf("[initializeMobileProvider: sendRequest()] error:", e10), e10;
        }
        return n3[0] && "object" == typeof n3[0] && (n3[0].params = { __triggeredInstaller: true, wrappedParams: n3[0].params }), r3(...n3);
      }
      if (i2.isSecure() && bp[t3]) return r3(...n3);
      if (s2.isExtensionActive()) return Hf(`[initializeMobileProvider: sendRequest()] EXTENSION active - redirect request '${t3}' to it`, n3, c4), yield null === (k3 = s2.getProvider()) || void 0 === k3 ? void 0 : k3.request({ method: t3, params: c4 });
      throw Hf(`[initializeMobileProvider: sendRequest()] method=${t3} --- skip --- not connected/installed`), new Error("MetaMask is not connected/installed, please call eth_requestAccounts to connect first.");
    }
    try {
      const e9 = yield r3(...n3);
      if (Hf(`[initializeMobileProvider: sendRequest()] method=${t3} rpcResponse`, e9), t3 === vp.WALLET_REQUESTPERMISSIONS) {
        const t4 = e9.reduce((e10, t5) => {
          var n4;
          if ("eth_accounts" === t5.parentCapability) {
            const r4 = null === (n4 = t5.caveats.find((e11) => "restrictReturnedAccounts" === e11.type)) || void 0 === n4 ? void 0 : n4.value;
            r4 && e10.push(...r4);
          }
          return e10;
        }, []);
        Hf("[initializeMobileProvider: sendRequest()] accountsToPersist:", t4), t4.length > 0 && (x3.handleAccountsChanged(t4, false), null == v2 || v2.persistAccounts(t4));
      }
      return e9;
    } catch (e9) {
      throw console.error("[initializeMobileProvider: sendRequest()] error:", e9), e9;
    }
  }), { request: k2 } = w2;
  w2.request = (...e9) => Ot(void 0, void 0, void 0, function* () {
    return S2(null == e9 ? void 0 : e9[0].method, e9, k2, c2);
  });
  const { send: x2 } = w2;
  return w2.send = (...e9) => Ot(void 0, void 0, void 0, function* () {
    return S2(null == e9 ? void 0 : e9[0], e9, x2, c2);
  }), Hf("[initializeMobileProvider: sendRequest()] metamaskStream.start()"), h2.start(), w2;
});
var jp = class {
  constructor({ serverUrl: e8, enabled: t2, originatorInfo: n2 }) {
    this.serverURL = Da, this.serverURL = e8, this.originatorInfo = n2, this.enabled = null == t2 || t2;
  }
  send({ event: e8, params: t2 }) {
    if (!this.enabled) return;
    const n2 = Object.assign(Object.assign({ id: "sdk", event: e8, sdkVersion: hp.version }, this.originatorInfo), { params: t2 });
    Hf(`[Analytics: send()] event: ${e8}`, n2), Pa(n2, this.serverURL).catch((e9) => {
      Hf(`[Analytics: send()] error: ${e9}`);
    });
  }
};
function Kp(e8) {
  var t2, n2, r2;
  const { dappMetadata: i2 } = e8, o2 = function({ url: e9, name: t3 }) {
    var n3;
    const r3 = Ip(e9 + t3);
    if (!localStorage) return "";
    let i3 = null !== (n3 = localStorage.getItem(r3)) && void 0 !== n3 ? n3 : "";
    if (!i3) {
      i3 = ae();
      try {
        localStorage.setItem(r3, i3);
      } catch (e10) {
        return "";
      }
    }
    return i3;
  }({ url: null !== (t2 = null == i2 ? void 0 : i2.url) && void 0 !== t2 ? t2 : "no_url", name: null !== (n2 = null == i2 ? void 0 : i2.name) && void 0 !== n2 ? n2 : "no_name" }), s2 = null === (r2 = e8.platformManager) || void 0 === r2 ? void 0 : r2.getPlatformType(), a2 = s2 === cc.DesktopWeb, c2 = s2 === cc.MetaMaskMobileWebview;
  let l2 = "N/A";
  return a2 ? l2 = "extension" : c2 && (l2 = "mobile"), { id: o2, from: l2 };
}
var Fp = ({ provider: e8, sdkInstance: t2 }) => {
  if ("state" in e8) throw new Error("INVALID EXTENSION PROVIDER");
  return new Proxy(e8, { get: (n2, r2) => "request" === r2 ? function(e9) {
    var r3, i2;
    return Ot(this, void 0, void 0, function* () {
      Hf("[wrapExtensionProvider()] Overwriting request method", e9);
      const { method: o2, params: s2 } = e9, a2 = wp.includes(o2.toLowerCase()), { id: c2, from: l2 } = Kp(t2);
      if (a2 && (null === (r3 = t2.analytics) || void 0 === r3 || r3.send({ event: Wa.SDK_RPC_REQUEST, params: { method: o2, from: l2, id: c2 } })), o2 === vp.METAMASK_BATCH && Array.isArray(s2)) return (({ target: e10, args: t3, trackEvent: n3, sdkInstance: r4 }) => Ot(void 0, void 0, void 0, function* () {
        var i3, o3;
        if ("metamask_batch" !== t3.method) throw new Error("Invalid usage");
        const s3 = [], a3 = null !== (i3 = null == t3 ? void 0 : t3.params) && void 0 !== i3 ? i3 : [];
        for (const t4 of a3) {
          const n4 = yield null == e10 ? void 0 : e10.request({ method: t4.method, params: t4.params });
          s3.push(n4);
        }
        const { id: c3, from: l3 } = Kp(r4);
        return n3 && (null === (o3 = r4.analytics) || void 0 === o3 || o3.send({ event: Wa.SDK_RPC_REQUEST_DONE, params: { method: t3.method, from: l3, id: c3 } })), s3;
      }))({ target: n2, args: e9, trackEvent: a2, sdkInstance: t2 });
      if (o2.toLowerCase() === vp.METAMASK_CONNECTSIGN.toLowerCase() && Array.isArray(s2)) return (({ target: e10, params: t3 }) => Ot(void 0, void 0, void 0, function* () {
        const n3 = yield e10.request({ method: vp.ETH_REQUESTACCOUNTS, params: [] });
        if (!n3.length) throw new Error("SDK state invalid -- undefined accounts");
        return yield e10.request({ method: vp.PERSONAL_SIGN, params: [t3[0], n3[0]] });
      }))({ target: n2, params: s2 });
      if (o2.toLowerCase() === vp.METAMASK_CONNECTWITH.toLowerCase() && Array.isArray(s2)) return (({ target: e10, params: t3 }) => Ot(void 0, void 0, void 0, function* () {
        const [n3] = t3, r4 = n3.method, i3 = n3.params, o3 = yield e10.request({ method: vp.ETH_REQUESTACCOUNTS, params: [] });
        if (!o3.length) throw new Error("SDK state invalid -- undefined accounts");
        return (null == r4 ? void 0 : r4.toLowerCase()) === vp.PERSONAL_SIGN.toLowerCase() ? yield e10.request({ method: r4, params: [i3[0], o3[0]] }) : (null == r4 ? void 0 : r4.toLowerCase()) === vp.ETH_SENDTRANSACTION.toLowerCase() ? yield e10.request({ method: r4, params: [Object.assign(Object.assign({}, i3[0]), { from: o3[0] })] }) : Ep.includes(r4.toLowerCase()) ? (console.warn(`MetaMaskSDK connectWith method=${r4} -- not handled by the extension -- call separately`), o3) : yield e10.request({ method: r4, params: i3 });
      }))({ target: n2, params: s2 });
      let d2;
      try {
        return d2 = yield n2.request(e9), d2;
      } finally {
        a2 && (null === (i2 = t2.analytics) || void 0 === i2 || i2.send({ event: Wa.SDK_RPC_REQUEST_DONE, params: { method: o2, from: l2, id: c2 } }));
      }
    });
  } : "getChainId" === r2 ? function() {
    return e8.chainId;
  } : "getNetworkVersion" === r2 ? function() {
    return e8.networkVersion;
  } : "getSelectedAddress" === r2 ? function() {
    return e8.selectedAddress;
  } : "isConnected" === r2 ? function() {
    return e8._state.isConnected;
  } : n2[r2] });
};
var Up;
!function(e8) {
  e8.Announce = "eip6963:announceProvider", e8.Request = "eip6963:requestProvider";
}(Up || (Up = {}));
var Hp = "INSTALLED";
var zp = "NOT_INSTALLED";
var qp = "REGISTERED";
var Vp = "REGISTERING";
var Wp = "RELOADING";
var Gp = { CHROME: "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn", FIREFOX: "https://addons.mozilla.org/firefox/addon/ether-metamask/", DEFAULT: "https://metamask.io" };
var Yp = "REGISTRATION_IN_PROGRESS";
var Zp = "FORWARDER_ID";
var Jp = function() {
  function e8(t2) {
    var n2 = void 0 === t2 ? {} : t2, r2 = n2.forwarderOrigin, i2 = void 0 === r2 ? "https://fwd.metamask.io" : r2, o2 = n2.forwarderMode, s2 = void 0 === o2 ? e8.FORWARDER_MODE.INJECT : o2;
    this.forwarderOrigin = i2, this.forwarderMode = s2, this.state = e8.isMetaMaskInstalled() ? Hp : zp;
    var a2 = e8._detectBrowser();
    this.downloadUrl = a2 ? Gp[a2] : Gp.DEFAULT, this._onMessage = this._onMessage.bind(this), this._onMessageFromForwarder = this._onMessageFromForwarder.bind(this), this._openForwarder = this._openForwarder.bind(this), this._openDownloadPage = this._openDownloadPage.bind(this), this.startOnboarding = this.startOnboarding.bind(this), this.stopOnboarding = this.stopOnboarding.bind(this), window.addEventListener("message", this._onMessage), s2 === e8.FORWARDER_MODE.INJECT && "true" === sessionStorage.getItem(Yp) && e8._injectForwarder(this.forwarderOrigin);
  }
  return e8.prototype._onMessage = function(e9) {
    if (e9.origin === this.forwarderOrigin) return "metamask:reload" === e9.data.type ? this._onMessageFromForwarder(e9) : void console.debug("Unknown message from '" + e9.origin + "' with data " + JSON.stringify(e9.data));
  }, e8.prototype._onMessageUnknownStateError = function(e9) {
    throw new Error("Unknown state: '" + e9 + "'");
  }, e8.prototype._onMessageFromForwarder = function(t2) {
    return function(e9, t3, n2, r2) {
      return new (n2 || (n2 = Promise))(function(t4, i2) {
        function o2(e10) {
          try {
            a2(r2.next(e10));
          } catch (e11) {
            i2(e11);
          }
        }
        function s2(e10) {
          try {
            a2(r2.throw(e10));
          } catch (e11) {
            i2(e11);
          }
        }
        function a2(e10) {
          var r3;
          e10.done ? t4(e10.value) : (r3 = e10.value, r3 instanceof n2 ? r3 : new n2(function(e11) {
            e11(r3);
          })).then(o2, s2);
        }
        a2((r2 = r2.apply(e9, [])).next());
      });
    }(this, 0, void 0, function() {
      return function(e9, t3) {
        var n2, r2, i2, o2, s2 = { label: 0, sent: function() {
          if (1 & i2[0]) throw i2[1];
          return i2[1];
        }, trys: [], ops: [] };
        return o2 = { next: a2(0), throw: a2(1), return: a2(2) }, "function" == typeof Symbol && (o2[Symbol.iterator] = function() {
          return this;
        }), o2;
        function a2(o3) {
          return function(a3) {
            return function(o4) {
              if (n2) throw new TypeError("Generator is already executing.");
              for (; s2; ) try {
                if (n2 = 1, r2 && (i2 = 2 & o4[0] ? r2.return : o4[0] ? r2.throw || ((i2 = r2.return) && i2.call(r2), 0) : r2.next) && !(i2 = i2.call(r2, o4[1])).done) return i2;
                switch (r2 = 0, i2 && (o4 = [2 & o4[0], i2.value]), o4[0]) {
                  case 0:
                  case 1:
                    i2 = o4;
                    break;
                  case 4:
                    return s2.label++, { value: o4[1], done: false };
                  case 5:
                    s2.label++, r2 = o4[1], o4 = [0];
                    continue;
                  case 7:
                    o4 = s2.ops.pop(), s2.trys.pop();
                    continue;
                  default:
                    if (!((i2 = (i2 = s2.trys).length > 0 && i2[i2.length - 1]) || 6 !== o4[0] && 2 !== o4[0])) {
                      s2 = 0;
                      continue;
                    }
                    if (3 === o4[0] && (!i2 || o4[1] > i2[0] && o4[1] < i2[3])) {
                      s2.label = o4[1];
                      break;
                    }
                    if (6 === o4[0] && s2.label < i2[1]) {
                      s2.label = i2[1], i2 = o4;
                      break;
                    }
                    if (i2 && s2.label < i2[2]) {
                      s2.label = i2[2], s2.ops.push(o4);
                      break;
                    }
                    i2[2] && s2.ops.pop(), s2.trys.pop();
                    continue;
                }
                o4 = t3.call(e9, s2);
              } catch (e10) {
                o4 = [6, e10], r2 = 0;
              } finally {
                n2 = i2 = 0;
              }
              if (5 & o4[0]) throw o4[1];
              return { value: o4[0] ? o4[1] : void 0, done: true };
            }([o3, a3]);
          };
        }
      }(this, function(n2) {
        switch (n2.label) {
          case 0:
            switch (this.state) {
              case Wp:
                return [3, 1];
              case zp:
                return [3, 2];
              case Hp:
                return [3, 3];
              case Vp:
                return [3, 5];
              case qp:
                return [3, 6];
            }
            return [3, 7];
          case 1:
            return console.debug("Ignoring message while reloading"), [3, 8];
          case 2:
            return console.debug("Reloading now to register with MetaMask"), this.state = Wp, location.reload(), [3, 8];
          case 3:
            return console.debug("Registering with MetaMask"), this.state = Vp, [4, e8._register()];
          case 4:
            return n2.sent(), this.state = qp, t2.source.postMessage({ type: "metamask:registrationCompleted" }, t2.origin), this.stopOnboarding(), [3, 8];
          case 5:
            return console.debug("Already registering - ignoring reload message"), [3, 8];
          case 6:
            return console.debug("Already registered - ignoring reload message"), [3, 8];
          case 7:
            this._onMessageUnknownStateError(this.state), n2.label = 8;
          case 8:
            return [2];
        }
      });
    });
  }, e8.prototype.startOnboarding = function() {
    sessionStorage.setItem(Yp, "true"), this._openDownloadPage(), this._openForwarder();
  }, e8.prototype.stopOnboarding = function() {
    "true" === sessionStorage.getItem(Yp) && (this.forwarderMode === e8.FORWARDER_MODE.INJECT && (console.debug("Removing forwarder"), e8._removeForwarder()), sessionStorage.setItem(Yp, "false"));
  }, e8.prototype._openForwarder = function() {
    this.forwarderMode === e8.FORWARDER_MODE.OPEN_TAB ? window.open(this.forwarderOrigin, "_blank") : e8._injectForwarder(this.forwarderOrigin);
  }, e8.prototype._openDownloadPage = function() {
    window.open(this.downloadUrl, "_blank");
  }, e8.isMetaMaskInstalled = function() {
    return Boolean(window.ethereum && window.ethereum.isMetaMask);
  }, e8._register = function() {
    return window.ethereum.request({ method: "wallet_registerOnboarding" });
  }, e8._injectForwarder = function(e9) {
    var t2 = document.body, n2 = document.createElement("iframe");
    n2.setAttribute("height", "0"), n2.setAttribute("width", "0"), n2.setAttribute("style", "display: none;"), n2.setAttribute("src", e9), n2.setAttribute("id", Zp), t2.insertBefore(n2, t2.children[0]);
  }, e8._removeForwarder = function() {
    var e9;
    null === (e9 = document.getElementById(Zp)) || void 0 === e9 || e9.remove();
  }, e8._detectBrowser = function() {
    var e9 = op.parse(window.navigator.userAgent);
    return "Firefox" === e9.browser.name ? "FIREFOX" : ["Chrome", "Chromium"].includes(e9.browser.name || "") ? "CHROME" : null;
  }, e8.FORWARDER_MODE = { INJECT: "INJECT", OPEN_TAB: "OPEN_TAB" }, e8;
}();
var Xp = class {
  constructor({ remote: e8, preferDesktop: t2, platformManager: n2, debug: r2 = false }) {
    this.state = { isInstalling: false, hasInstalled: false, resendRequest: null, preferDesktop: false, platformManager: null, remote: null, debug: false, connectWith: void 0 }, this.state.remote = e8, this.state.preferDesktop = t2, this.state.platformManager = n2, this.state.debug = r2;
  }
  startDesktopOnboarding() {
    return function() {
      return Ot(this, void 0, void 0, function* () {
        Hf("[MetamaskInstaller: startDesktopOnboarding() starting desktop onboarding"), window.ethereum && (window.ethereum = void 0), new Jp().startOnboarding();
      });
    }();
  }
  redirectToProperInstall() {
    return Ot(this, void 0, void 0, function* () {
      return function(e8) {
        var t2, n2;
        return Ot(this, void 0, void 0, function* () {
          const { state: r2 } = e8, i2 = null === (t2 = r2.platformManager) || void 0 === t2 ? void 0 : t2.getPlatformType();
          if (Hf(`[MetamaskInstaller: redirectToProperInstall()] platform=${i2}`), i2 === cc.MetaMaskMobileWebview) return false;
          r2.isInstalling = true;
          try {
            yield null === (n2 = r2.remote) || void 0 === n2 ? void 0 : n2.startConnection({ connectWith: r2.connectWith }), r2.isInstalling = false, r2.hasInstalled = true;
          } catch (e9) {
            throw r2.isInstalling = false, e9;
          }
          return true;
        });
      }(this);
    });
  }
  checkInstallation() {
    return Ot(this, void 0, void 0, function* () {
      return function(e8) {
        var t2;
        return Ot(this, void 0, void 0, function* () {
          const { state: n2 } = e8, r2 = null === (t2 = n2.platformManager) || void 0 === t2 ? void 0 : t2.isMetaMaskInstalled();
          return Hf(`[MetamaskInstaller: checkInstallation()] isInstalled=${r2}`), !!r2 || (yield e8.redirectToProperInstall());
        });
      }(this);
    });
  }
  start({ wait: e8 = false, connectWith: t2 }) {
    return Ot(this, void 0, void 0, function* () {
      this.state.connectWith = t2, Hf(`[MetaMaskInstaller: start()] wait=${e8}`, t2), yield function(e9, { wait: t3 = false }) {
        return Ot(this, void 0, void 0, function* () {
          return Hf(`[MetamaskInstaller: startInstaller()] wait=${t3}`), t3 && (yield Bp(1e3)), yield e9.checkInstallation();
        });
      }(this, { wait: e8 });
    });
  }
};
var Qp = class {
  constructor({ debug: e8, sdkVersion: t2 }) {
    this.containers = { install: void 0, pending: void 0, select: void 0 }, this.defined = { install: false, pending: false, select: false }, this.debug = null != e8 && e8, this.sdkVersion = t2;
  }
  loadComponent(e8) {
    return Ot(this, void 0, void 0, function* () {
      if (!this.defined[e8]) {
        this.defined[e8] = true;
        try {
          const e9 = yield Promise.resolve().then(function() {
            return km;
          });
          console.log("loader", e9), e9.defineCustomElements();
        } catch (t2) {
          console.error(`Failed to load ${e8} modal:`, t2);
        }
      }
    });
  }
  renderInstallModal(e8) {
    var t2;
    return Ot(this, void 0, void 0, function* () {
      this.debug && console.debug("ModalLoader: renderInstallModal", e8), this.containers.install = e8.parentElement, yield this.loadComponent("install");
      const n2 = document.createElement("mm-install-modal");
      n2.link = e8.link, n2.preferDesktop = e8.preferDesktop, n2.sdkVersion = null !== (t2 = e8.sdkVersion) && void 0 !== t2 ? t2 : this.sdkVersion, n2.addEventListener("close", e8.onClose), n2.addEventListener("startDesktopOnboarding", e8.metaMaskInstaller.startDesktopOnboarding), n2.addEventListener("trackAnalytics", (t3) => {
        var n3;
        return null === (n3 = e8.onAnalyticsEvent) || void 0 === n3 ? void 0 : n3.call(e8, t3.detail);
      }), e8.parentElement.appendChild(n2);
    });
  }
  renderSelectModal(e8) {
    var t2;
    return Ot(this, void 0, void 0, function* () {
      this.containers.select = e8.parentElement, yield this.loadComponent("select");
      const n2 = document.createElement("mm-select-modal");
      n2.link = e8.link, n2.sdkVersion = null !== (t2 = e8.sdkVersion) && void 0 !== t2 ? t2 : this.sdkVersion, n2.preferDesktop = e8.preferDesktop, n2.addEventListener("close", ({ detail: { shouldTerminate: t3 } }) => e8.onClose(t3)), n2.addEventListener("connectWithExtension", e8.connectWithExtension), e8.parentElement.appendChild(n2), setTimeout(() => this.updateQRCode(e8.link), 100);
    });
  }
  renderPendingModal(e8) {
    var t2;
    return Ot(this, void 0, void 0, function* () {
      this.containers.pending = e8.parentElement, yield this.loadComponent("pending");
      const n2 = document.createElement("mm-pending-modal");
      n2.sdkVersion = null !== (t2 = e8.sdkVersion) && void 0 !== t2 ? t2 : this.sdkVersion, n2.displayOTP = e8.displayOTP, n2.addEventListener("close", e8.onClose), n2.addEventListener("updateOTPValue", ({ detail: { otpValue: t3 } }) => e8.updateOTPValue(t3)), e8.onDisconnect && n2.addEventListener("disconnect", e8.onDisconnect), e8.parentElement.appendChild(n2);
    });
  }
  updateOTPValue(e8) {
    const t2 = () => {
      var t3;
      const n2 = null === (t3 = this.containers.pending) || void 0 === t3 ? void 0 : t3.querySelector("mm-pending-modal");
      return !!n2 && (n2.otpCode = e8, true);
    };
    setTimeout(() => {
      t2();
    }, 800);
  }
  updateQRCode(e8) {
    var t2, n2;
    const r2 = null === (t2 = this.containers.install) || void 0 === t2 ? void 0 : t2.querySelector("mm-install-modal");
    if (r2) r2.link = e8;
    else {
      const t3 = null === (n2 = this.containers.select) || void 0 === n2 ? void 0 : n2.querySelector("mm-select-modal");
      t3 && (t3.link = e8);
    }
  }
  unmount() {
    Object.entries(this.containers).forEach(([e8, t2]) => {
      var n2;
      null === (n2 = null == t2 ? void 0 : t2.parentNode) || void 0 === n2 || n2.removeChild(t2), this.containers[e8] = void 0;
    });
  }
};
var eg = ({ link: e8, debug: t2, installer: n2, terminate: r2, connectWithExtension: i2, preferDesktop: o2, onAnalyticsEvent: s2 }) => {
  let a2 = null, c2 = null;
  Hf("[UI: InstallModal-web: sdkWebInstallModal()] ################## Installing Modal #################"), Hf(`[UI: InstallModal-web: sdkWebInstallModal()] link=${e8}`), Hf(`[UI: InstallModal-web: sdkWebInstallModal()] npx uri-scheme open "${e8}" --ios`), Hf(`[UI: InstallModal-web: sdkWebInstallModal()] npx uri-scheme open "${e8}" --android`), Hf(`[UI: InstallModal-web: sdkWebInstallModal()] adb shell am start -a android.intent.action.VIEW -d "${e8}"`);
  const l2 = (e9) => {
    var t3;
    Hf("[UI: InstallModal-web: sdkWebInstallModal()] installModal-web unmounting install modal -- shouldTerminate:", e9, c2), (null == c2 ? void 0 : c2.parentNode) && (null === (t3 = c2.parentNode) || void 0 === t3 || t3.removeChild(c2)), c2 = null, a2 = null, true === e9 && (null == r2 || r2());
  };
  return { mount: (r3) => {
    if (Hf("[UI: InstallModal-web: sdkWebInstallModal()] installModal-web mounting install modal", c2), c2) return c2.style.display = "block", void (null == a2 || a2.updateQRCode(r3));
    a2 = new Qp({ debug: t2, sdkVersion: hp.version }), c2 = document.createElement("div"), document.body.appendChild(c2), window.extension ? a2.renderSelectModal({ parentElement: c2, connectWithExtension: () => {
      l2(), null == i2 || i2();
    }, onClose: l2, link: e8, preferDesktop: null != o2 && o2 }).catch((e9) => {
      console.error(e9);
    }) : a2.renderInstallModal({ parentElement: c2, preferDesktop: null != o2 && o2, link: e8, metaMaskInstaller: n2, onClose: l2, onAnalyticsEvent: s2 }).catch((e9) => {
      console.error("[UI: InstallModal-web: sdkWebInstallModal()]", e9);
    });
  }, unmount: l2 };
};
var tg = ({ onDisconnect: e8, debug: t2 }) => {
  let n2 = null, r2 = null;
  const i2 = () => {
    Hf("[UI: pendingModal-web: sdkWebPendingModal()] pendingModal-web unmount", n2), (null == n2 ? void 0 : n2.parentNode) && n2.parentNode.removeChild(n2), n2 = null, r2 = null;
  }, o2 = (e9) => {
    Hf("[UI: pendingModal-web: sdkWebPendingModal()] pendingModal-web updateOTPValue", e9), r2 && r2.updateOTPValue(e9);
  }, s2 = ({ displayOTP: s3 } = { displayOTP: true }) => {
    Hf("[UI: pendingModal-web: sdkWebPendingModal()] pendingModal-web mount", n2), n2 ? n2.style.display = "block" : (r2 = new Qp({ debug: t2, sdkVersion: hp.version }), n2 = document.createElement("div"), document.body.appendChild(n2), r2.renderPendingModal({ parentElement: n2, onClose: i2, onDisconnect: e8, updateOTPValue: o2, displayOTP: s3 }).catch((e9) => {
      console.error("[UI: pendingModal-web: sdkWebPendingModal()]", e9);
    }));
  };
  return s2(), { mount: s2, unmount: i2, updateOTPValue: o2 };
};
function ng(e8, t2) {
  var n2, r2, i2, o2;
  e8.connector || (Hf("[RemoteConnection: initializeConnector()] initialize connector"), e8.connector = new Cc({ platformType: t2.platformManager.getPlatformType(), communicationLayerPreference: t2.communicationLayerPreference, transports: t2.transports, dappMetadata: Object.assign(Object.assign({}, t2.dappMetadata), { source: t2._source }), analytics: t2.enableAnalytics, communicationServerUrl: t2.communicationServerUrl, sdkVersion: hp.version, context: "dapp", ecies: t2.ecies, storage: t2.storage, logging: t2.logging }), t2.timer && (Hf("[RemoteConnection: initializeConnector()] reset background timer", t2.timer), null === (r2 = null === (n2 = t2.timer) || void 0 === n2 ? void 0 : n2.stopBackgroundTimer) || void 0 === r2 || r2.call(n2), null === (o2 = null === (i2 = t2.timer) || void 0 === i2 ? void 0 : i2.runBackgroundTimer) || void 0 === o2 || o2.call(i2, () => false, 1e4)));
}
function rg(e8) {
  e8.listeners.forEach(({ event: t2, handler: n2 }) => {
    var r2;
    null === (r2 = e8.connector) || void 0 === r2 || r2.off(t2, n2);
  }), e8.listeners = [];
}
function ig(e8, t2) {
  function n2(t3, n3) {
    var r2;
    null === (r2 = e8.connector) || void 0 === r2 || r2.on(t3, n3), e8.listeners.push({ event: t3, handler: n3 });
  }
  e8.connector && (rg(e8), n2(Ha.WALLET_INIT, ({ accounts: e9, chainId: t3 }) => Ot(this, void 0, void 0, function* () {
    Hf(`[RemoteConnection: setupListeners() => EventType.WALLET_INIT] 'wallet_init' accounts=${e9} chainId=${t3}`);
    const n3 = ap.getProvider();
    n3._setConnected();
    const r2 = { accounts: e9, chainId: t3, isUnlocked: false };
    n3._initializeState(r2), n3.emit("chainChanged", t3), n3.emit("accountsChanged", e9);
  })), n2(Ha.AUTHORIZED, () => Ot(this, void 0, void 0, function* () {
    var t3, n3, r2, i2;
    try {
      Hf("[RemoteConnection: setupListeners() => EventType.AUTHORIZED] 'authorized' closing modals", e8.pendingModal, e8.installModal);
      const o2 = ap.getProvider();
      o2._setConnected(), null === (n3 = null === (t3 = e8.pendingModal) || void 0 === t3 ? void 0 : t3.unmount) || void 0 === n3 || n3.call(t3), null === (i2 = null === (r2 = e8.installModal) || void 0 === r2 ? void 0 : r2.unmount) || void 0 === i2 || i2.call(r2, false), e8.otpAnswer = void 0, e8.authorized = true, Hf("[RemoteConnection: setupListeners() => EventType.AUTHORIZED] 'authorized' provider.state", o2.getState()), yield o2.forceInitializeState();
    } catch (e9) {
    }
  })), n2(Ha.TERMINATE, () => {
    var t3, n3, r2, i2, o2;
    null === (n3 = null === (t3 = e8.pendingModal) || void 0 === t3 ? void 0 : t3.unmount) || void 0 === n3 || n3.call(t3), null === (i2 = null === (r2 = e8.installModal) || void 0 === r2 ? void 0 : r2.unmount) || void 0 === i2 || i2.call(r2, true), e8.pendingModal = void 0, e8.installModal = void 0, e8.otpAnswer = void 0, null === (o2 = e8.connector) || void 0 === o2 || o2.disconnect({ terminate: true }), e8.authorized = false, ap.getProvider().handleDisconnect({ terminate: true }), rg(e8), Hf("[RemoteConnection: setupListeners()] All listeners cleaned up");
  }));
}
function og(e8, t2, { initialCheck: n2, connectWith: r2 } = {}) {
  var i2, o2, s2, a2, c2, l2, d2, u2, h2, f2, p2, g2, m2, y2, v2, b2, w2, E2, C2;
  return Ot(this, void 0, void 0, function* () {
    try {
      if (ng(e8, t2), !e8.connector) throw new Error("no connector defined");
      ig(e8);
      const _2 = ap.getProvider();
      e8.authorized = false, _2.emit("connecting");
      const S2 = yield null === (i2 = e8.connector) || void 0 === i2 ? void 0 : i2.originatorSessionConnect();
      Hf(`[RemoteConnection: startConnection()] after originatorSessionConnect initialCheck=${n2}`, S2);
      let k2 = null !== (o2 = null == S2 ? void 0 : S2.channelId) && void 0 !== o2 ? o2 : "", x2 = null !== (a2 = null === (s2 = e8.connector.getKeyInfo()) || void 0 === s2 ? void 0 : s2.ecies.public) && void 0 !== a2 ? a2 : "", A2 = null !== (l2 = null === (c2 = e8.connector.getKeyInfo()) || void 0 === c2 ? void 0 : c2.ecies.private) && void 0 !== l2 ? l2 : "";
      if (n2 && !S2) return Promise.resolve();
      if (!S2 && !n2) {
        const t3 = yield e8.connector.generateChannelIdConnect();
        k2 = null !== (d2 = t3.channelId) && void 0 !== d2 ? d2 : "", x2 = null !== (u2 = t3.pubKey) && void 0 !== u2 ? u2 : "", A2 = null !== (h2 = t3.privKey) && void 0 !== h2 ? h2 : "";
        const n3 = Date.now();
        null === (f2 = e8.connector.state.storageManager) || void 0 === f2 || f2.persistChannelConfig({ channelId: k2, localKey: A2, lastActive: n3, validUntil: n3 + $a });
      }
      if (n2 && (null == S2 ? void 0 : S2.channelId)) return (null === (p2 = e8.connector) || void 0 === p2 ? void 0 : p2.isConnected()) || (Hf(`[RemoteConnection: startConnection()] reconnecting to channel initialCheck=${n2}`, S2), yield null === (g2 = e8.connector) || void 0 === g2 ? void 0 : g2.connectToChannel({ channelId: k2 })), Promise.resolve();
      S2 && !(null === (m2 = e8.connector) || void 0 === m2 ? void 0 : m2.isConnected()) && (Hf("[RemoteConnection: startConnection()] reconnecting to channel", S2), yield null === (y2 = e8.connector) || void 0 === y2 ? void 0 : y2.connectToChannel({ channelId: k2 }));
      const M2 = (null === (v2 = e8.platformManager) || void 0 === v2 ? void 0 : v2.isSecure()) ? "" : "&t=q", L2 = hp.version, { iconUrl: T2, name: O2, url: R2, scheme: P2 } = t2.dappMetadata || {}, I2 = null === (b2 = e8.platformManager) || void 0 === b2 ? void 0 : b2.getPlatformType();
      let N2 = "N/A";
      "undefined" != typeof window && window.location && window.location.hostname ? N2 = window.location.hostname : void 0 !== O2 ? N2 = O2 : void 0 !== R2 && (N2 = R2);
      const D2 = { url: null != R2 ? R2 : "", title: null != O2 ? O2 : "", icon: T2, scheme: null != P2 ? P2 : "", apiVersion: L2, dappId: N2 || R2 || "N/A", platform: null != I2 ? I2 : "", source: null !== (w2 = t2._source) && void 0 !== w2 ? w2 : "" }, B2 = Ip(JSON.stringify(D2));
      let $2 = `channelId=${k2}&v=2&comm=${null !== (E2 = e8.communicationLayerPreference) && void 0 !== E2 ? E2 : ""}&pubkey=${x2}${M2}&originatorInfo=${B2}`;
      if (r2) {
        $2 += `&rpc=${Ip(JSON.stringify(r2))}`;
        const t3 = e8.connector.getRPCMethodTracker();
        t3 && (t3[`${r2.id}`] = Object.assign(Object.assign({}, r2), { id: `${r2.id}`, timestamp: Date.now() }));
      }
      const j2 = encodeURI($2), K2 = `${e8.useDeeplink ? gp : pp}?${$2}`;
      return e8.qrcodeLink = K2, e8.developerMode && Hf(`[RemoteConnection: startConnection()] qrcodeLink=${j2}`), _2.emit("display_uri", K2), (null === (C2 = e8.platformManager) || void 0 === C2 ? void 0 : C2.isSecure()) ? (yield function(e9, t3) {
        var n3, r3;
        return Ot(this, void 0, void 0, function* () {
          const i3 = `${pp}?${t3}`, o3 = `${gp}?${t3}`;
          null === (r3 = null === (n3 = e9.platformManager) || void 0 === n3 ? void 0 : n3.openDeeplink) || void 0 === r3 || r3.call(n3, i3, o3, "_self");
        });
      }(e8, j2), new Promise((t3, n3) => {
        var r3, i3, o3;
        (null === (r3 = e8.connector) || void 0 === r3 ? void 0 : r3.isAuthorized()) ? t3() : (null === (i3 = e8.connector) || void 0 === i3 || i3.once(Ha.AUTHORIZED, () => {
          t3();
        }), null === (o3 = e8.connector) || void 0 === o3 || o3.once(Ha.REJECTED, () => {
          n3(Ha.REJECTED);
        }));
      })) : function(e9, t3, n3) {
        return Ot(this, void 0, void 0, function* () {
          return new Promise((r3, i3) => {
            if (!e9.connector) return void i3(new Error("No connector available"));
            Hf("[RemoteConnection: connectWithModalInstaller()]", { state: e9, options: t3, linkParams: n3 });
            const o3 = `${e9.useDeeplink ? gp : pp}?${n3}`;
            !function(e10, t4, n4) {
              var r4, i4, o4, s3;
              e10.installModal = null === (i4 = (r4 = t4.modals).install) || void 0 === i4 ? void 0 : i4.call(r4, { link: n4, preferDesktop: e10.preferDesktop, installer: t4.getMetaMaskInstaller(), terminate: () => {
                Hf("[RemoteConnection: showInstallModal() => terminate()] terminate connection"), t4.sdk.terminate().catch((e11) => {
                  console.warn("[MMSDK] failed to terminate connection", e11);
                });
              }, debug: e10.developerMode, connectWithExtension: () => {
                var e11;
                return null === (e11 = t4.connectWithExtensionProvider) || void 0 === e11 || e11.call(t4), false;
              }, onAnalyticsEvent: ({ event: n5, params: r5 }) => {
                var i5, o5, s4;
                const a3 = Object.assign(Object.assign({}, r5), { sdkVersion: t4.sdk.getVersion(), dappId: null === (i5 = t4.dappMetadata) || void 0 === i5 ? void 0 : i5.name, source: t4._source, url: null === (o5 = t4.dappMetadata) || void 0 === o5 ? void 0 : o5.url });
                null === (s4 = e10.analytics) || void 0 === s4 || s4.send({ event: n5, params: a3 });
              } }), null === (s3 = null === (o4 = e10.installModal) || void 0 === o4 ? void 0 : o4.mount) || void 0 === s3 || s3.call(o4, n4);
            }(e9, t3, o3), t3.sdk.once(Ha.PROVIDER_UPDATE, (e10) => Ot(this, void 0, void 0, function* () {
              Hf("[RemoteConnection: connectWithModalInstaller()] once provider_update -- resolving startConnection promise"), e10 !== Op.TERMINATE ? i3(e10) : i3({ code: 4001, message: "User rejected the request." });
            })), e9.connector.once(Ha.AUTHORIZED, () => {
              r3();
            }), e9.connector.once(Ha.REJECTED, () => {
              i3(Ha.REJECTED);
            }), e9.connector.once(Ha.CLIENTS_READY, () => Ot(this, void 0, void 0, function* () {
              Hf("[RemoteConnection: connectWithModalInstaller()] once clients_ready -- resolving startConnection promise"), r3();
            }));
          });
        });
      }(e8, t2, j2);
    } catch (e9) {
      throw console.error("[startConnection] error", e9), e9;
    }
  });
}
var sg = class {
  constructor(e8) {
    var t2, n2, r2;
    this.state = { connector: void 0, qrcodeLink: void 0, analytics: void 0, developerMode: false, authorized: false, reconnection: false, preferDesktop: false, deeplinkProtocol: false, listeners: [], communicationLayerPreference: void 0, platformManager: void 0, pendingModal: void 0, installModal: void 0, otpAnswer: void 0 }, this.options = e8;
    const i2 = true === (null === (t2 = e8.logging) || void 0 === t2 ? void 0 : t2.developerMode) || true === (null === (n2 = e8.logging) || void 0 === n2 ? void 0 : n2.sdk);
    this.state.developerMode = i2, this.state.analytics = e8.analytics, this.state.preferDesktop = null !== (r2 = e8.preferDesktop) && void 0 !== r2 && r2, this.state.useDeeplink = e8.sdk.options.useDeeplink, this.state.communicationLayerPreference = e8.communicationLayerPreference, this.state.platformManager = e8.platformManager, e8.modals.install || (e8.modals.install = eg), e8.modals.otp || (e8.modals.otp = tg);
  }
  startConnection(e8) {
    return Ot(this, void 0, void 0, function* () {
      return og(this.state, this.options, e8);
    });
  }
  initRemoteCommunication({ sdkInstance: e8 }) {
    var t2, n2, r2;
    return Ot(this, void 0, void 0, function* () {
      const i2 = yield null === (n2 = null === (t2 = e8.options.storage) || void 0 === t2 ? void 0 : t2.storageManager) || void 0 === n2 ? void 0 : n2.getPersistedChannelConfig();
      if (!this.options.ecies) {
        const e9 = { privateKey: null == i2 ? void 0 : i2.localKey };
        this.options.ecies = e9;
      }
      ng(this.state, this.options), yield null === (r2 = this.getConnector()) || void 0 === r2 ? void 0 : r2.initFromDappStorage(), ig(this.state, this.options);
    });
  }
  showActiveModal() {
    return function(e8) {
      var t2, n2, r2, i2;
      e8.authorized ? Hf("[RemoteConnection: showActiveModal()] already authorized") : e8.pendingModal ? null === (n2 = (t2 = e8.pendingModal).mount) || void 0 === n2 || n2.call(t2) : e8.installModal && (null === (i2 = (r2 = e8.installModal).mount) || void 0 === i2 || i2.call(r2, e8.qrcodeLink || ""));
    }(this.state);
  }
  closeModal() {
    var e8, t2, n2, r2;
    null === (t2 = null === (e8 = this.state.pendingModal) || void 0 === e8 ? void 0 : e8.unmount) || void 0 === t2 || t2.call(e8), null === (r2 = null === (n2 = this.state.installModal) || void 0 === n2 ? void 0 : n2.unmount) || void 0 === r2 || r2.call(n2, false);
  }
  getUniversalLink() {
    if (!this.state.qrcodeLink) throw new Error("connection not started. run startConnection() first.");
    return this.state.qrcodeLink;
  }
  getChannelConfig() {
    var e8;
    return null === (e8 = this.state.connector) || void 0 === e8 ? void 0 : e8.getChannelConfig();
  }
  getKeyInfo() {
    var e8;
    return null === (e8 = this.state.connector) || void 0 === e8 ? void 0 : e8.getKeyInfo();
  }
  getConnector() {
    if (!this.state.connector) throw new Error("invalid remote connector");
    return this.state.connector;
  }
  getPlatformManager() {
    if (!this.state.platformManager) throw new Error("PlatformManager not available");
    return this.state.platformManager;
  }
  isConnected() {
    var e8;
    return (null === (e8 = this.state.connector) || void 0 === e8 ? void 0 : e8.isReady()) || false;
  }
  isAuthorized() {
    var e8;
    return (null === (e8 = this.state.connector) || void 0 === e8 ? void 0 : e8.isAuthorized()) || false;
  }
  isPaused() {
    var e8;
    return null === (e8 = this.state.connector) || void 0 === e8 ? void 0 : e8.isPaused();
  }
  disconnect(e8) {
    var t2, n2, r2;
    Hf("[RemoteConnection: disconnect()]", e8), (null == e8 ? void 0 : e8.terminate) && (ap.getProvider().handleDisconnect({ terminate: true }), null === (n2 = null === (t2 = this.state.pendingModal) || void 0 === t2 ? void 0 : t2.unmount) || void 0 === n2 || n2.call(t2), this.state.otpAnswer = void 0), null === (r2 = this.state.connector) || void 0 === r2 || r2.disconnect(e8), function(e9) {
      Hf("[RemoteConnection: cleanupConnector()] cleaning up connector"), e9.connector && (rg(e9), e9.connector.disconnect({ terminate: true }).catch((e10) => {
        Hf("[RemoteConnection: cleanupConnector()] error disconnecting connector", e10);
      }));
    }(this.state);
  }
};
function ag(e8) {
  var t2, n2, r2, i2, o2, s2, a2, c2, l2, d2, u2;
  return Ot(this, void 0, void 0, function* () {
    const { options: h2 } = e8;
    if (h2.logging = null !== (t2 = h2.logging) && void 0 !== t2 ? t2 : {}, h2.communicationLayerPreference = null !== (n2 = h2.communicationLayerPreference) && void 0 !== n2 ? n2 : ac.SOCKET, void 0 !== h2.enableDebug && (U.enable("MM_SDK"), console.warn("enableDebug is removed. Please use enableAnalytics instead.")), h2.enableAnalytics = null === (r2 = h2.enableAnalytics) || void 0 === r2 || r2, h2.injectProvider = null === (i2 = h2.injectProvider) || void 0 === i2 || i2, h2.shouldShimWeb3 = null === (o2 = h2.shouldShimWeb3) || void 0 === o2 || o2, h2.extensionOnly = null === (s2 = h2.extensionOnly) || void 0 === s2 || s2, h2.useDeeplink = null === (a2 = h2.useDeeplink) || void 0 === a2 || a2, h2.storage = null !== (c2 = h2.storage) && void 0 !== c2 ? c2 : { enabled: true }, h2.headless) {
      U("[MetaMaskSDK: performSDKInitialization()] headless mode enabled");
      const e9 = () => {
      }, t3 = { install: () => ({ mount: e9, unmount: e9 }) }, n3 = { installer: e9 };
      h2.modals = t3, h2.ui = n3;
    }
    const f2 = true === (null === (l2 = h2.logging) || void 0 === l2 ? void 0 : l2.developerMode);
    e8.debug = (null === (d2 = h2.logging) || void 0 === d2 ? void 0 : d2.sdk) || f2, Hf("[MetaMaskSDK: performSDKInitialization()] options", e8.options);
    const p2 = Object.assign({}, h2.logging);
    f2 && (p2.sdk = true, p2.eciesLayer = true, p2.keyExchangeLayer = true, p2.remoteLayer = true, p2.serviceLayer = true, p2.plaintext = true), yield function(e9) {
      var t3;
      return Ot(this, void 0, void 0, function* () {
        const { options: n3 } = e9;
        e9.platformManager = new cp({ useDeepLink: null !== (t3 = n3.useDeeplink) && void 0 !== t3 && t3, preferredOpenLink: n3.openDeeplink, debug: e9.debug });
      });
    }(e8), yield function(e9) {
      var t3, n3, r3, i3, o3, s3, a3, c3, l3;
      return Ot(this, void 0, void 0, function* () {
        const { options: d3 } = e9, u3 = null === (t3 = e9.platformManager) || void 0 === t3 ? void 0 : t3.getPlatformType();
        e9.analytics = new jp({ serverUrl: null !== (n3 = d3.communicationServerUrl) && void 0 !== n3 ? n3 : Da, enabled: d3.enableAnalytics, originatorInfo: { url: null !== (r3 = d3.dappMetadata.url) && void 0 !== r3 ? r3 : "", title: null !== (i3 = d3.dappMetadata.name) && void 0 !== i3 ? i3 : "", dappId: "undefined" == typeof window || void 0 === window.location ? null !== (c3 = null !== (s3 = null === (o3 = d3.dappMetadata) || void 0 === o3 ? void 0 : o3.name) && void 0 !== s3 ? s3 : null === (a3 = d3.dappMetadata) || void 0 === a3 ? void 0 : a3.url) && void 0 !== c3 ? c3 : "N/A" : window.location.hostname, platform: null != u3 ? u3 : "", source: null !== (l3 = d3._source) && void 0 !== l3 ? l3 : "" } });
      });
    }(e8), yield function(e9) {
      var t3;
      return Ot(this, void 0, void 0, function* () {
        const { options: n3 } = e9;
        true !== (null === (t3 = n3.storage) || void 0 === t3 ? void 0 : t3.enabled) || n3.storage.storageManager || (n3.storage.storageManager = yield lp(n3.storage));
      });
    }(e8), yield function(e9) {
      return Ot(this, void 0, void 0, function* () {
        const { options: t3 } = e9, n3 = /^(http|https):\/\/[^\s]*$/;
        if (t3.dappMetadata) {
          t3.dappMetadata.iconUrl && !n3.test(t3.dappMetadata.iconUrl) && (console.warn("Invalid dappMetadata.iconUrl: URL must start with http:// or https://"), t3.dappMetadata.iconUrl = void 0), t3.dappMetadata.base64Icon && t3.dappMetadata.base64Icon.length > 163400 && (console.warn("Invalid dappMetadata.base64Icon: Base64-encoded icon string length must be less than 163400 characters"), t3.dappMetadata.base64Icon = void 0), t3.dappMetadata.url && !n3.test(t3.dappMetadata.url) && console.warn("Invalid dappMetadata.url: URL must start with http:// or https://");
          const e10 = (() => {
            if ("undefined" == typeof document) return;
            let e11;
            const t4 = document.getElementsByTagName("link");
            for (let n4 = 0; n4 < t4.length; n4++) "icon" !== t4[n4].getAttribute("rel") && "shortcut icon" !== t4[n4].getAttribute("rel") || (e11 = t4[n4].getAttribute("href"));
            return e11;
          })();
          if (e10 && !t3.dappMetadata.iconUrl && !t3.dappMetadata.base64Icon) {
            const n4 = `${window.location.protocol}//${window.location.host}${e10}`;
            t3.dappMetadata.iconUrl = n4;
          }
        }
        e9.dappMetadata = t3.dappMetadata;
      });
    }(e8), yield ((e9) => Ot(void 0, void 0, void 0, function* () {
      const { options: t3 } = e9, { infuraAPIKey: n3 } = t3;
      if (!n3) return;
      const r3 = { "0x1": `https://mainnet.infura.io/v3/${n3}`, "0x5": `https://goerli.infura.io/v3/${n3}`, "0xaa36a7": `https://sepolia.infura.io/v3/${n3}`, "0xe708": `https://linea-mainnet.infura.io/v3/${n3}`, "0xe704": `https://linea-goerli.infura.io/v3/${n3}`, "0x89": `https://polygon-mainnet.infura.io/v3/${n3}`, "0x13881": `https://polygon-mumbai.infura.io/v3/${n3}`, "0x45": `https://optimism-mainnet.infura.io/v3/${n3}`, "0x1a4": `https://optimism-goerli.infura.io/v3/${n3}`, "0xa4b1": `https://arbitrum-mainnet.infura.io/v3/${n3}`, "0x66eed": `https://arbitrum-goerli.infura.io/v3/${n3}`, "0x2a15c308d": `https://palm-mainnet.infura.io/v3/${n3}`, "0x2a15c3083": `https://palm-testnet.infura.io/v3/${n3}`, "0xa86a": `https://avalanche-mainnet.infura.io/v3/${n3}`, "0xa869": `https://avalanche-fuji.infura.io/v3/${n3}`, "0x4e454152": `https://aurora-mainnet.infura.io/v3/${n3}`, "0x4e454153": `https://aurora-testnet.infura.io/v3/${n3}`, "0x534e5f4d41494e": `https://starknet-mainnet.infura.io/v3/${n3}`, "0x534e5f474f45524c49": `https://starknet-goerli.infura.io/v3/${n3}`, "0x534e5f474f45524c4932": `https://starknet-goerli2.infura.io/v3/${n3}`, "0xa4ec": `https://celo-mainnet.infura.io/v3/${n3}`, "0xaef3": `https://celo-alfajores.infura.io/v3/${n3}` };
      e9.options.readonlyRPCMap ? e9.options.readonlyRPCMap = Object.assign(Object.assign({}, e9.options.readonlyRPCMap), r3) : e9.options.readonlyRPCMap = r3;
    }))(e8), yield ((e9) => Ot(void 0, void 0, void 0, function* () {
      const { options: t3 } = e9, { readonlyRPCMap: n3 } = t3;
      if (n3) try {
        Hf("[MetaMaskSDK: setupReadOnlyRPCProviders()] Setting up Readonly RPC Providers", n3), e9.setReadOnlyRPCCalls(true);
      } catch (e10) {
        throw new Error("Invalid Infura Settings");
      }
    }))(e8);
    const { metamaskBrowserExtension: g2, preferExtension: m2, shouldReturn: y2 } = yield function(e9) {
      var t3, n3, r3, i3;
      return Ot(this, void 0, void 0, function* () {
        const { options: o3 } = e9;
        let s3, a3 = false, c3 = false;
        if ("undefined" != typeof window && window.ethereum && !(null === (t3 = e9.platformManager) || void 0 === t3 ? void 0 : t3.isMetaMaskMobileWebView())) {
          a3 = "extension" === localStorage.getItem(_p);
          try {
            s3 = yield function({ mustBeMetaMask: e10, sdkInstance: t4 }) {
              return Ot(this, void 0, void 0, function* () {
                if ("undefined" == typeof window) throw new Error("window not available");
                try {
                  const e11 = yield new Promise((e12, t5) => {
                    const n4 = setTimeout(() => {
                      t5(new Error("eip6963RequestProvider timed out"));
                    }, 500);
                    window.addEventListener(Up.Announce, (t6) => {
                      const r4 = t6, { detail: { info: i4, provider: o4 } = {} } = r4, { name: s4, rdns: a4, uuid: c4 } = null != i4 ? i4 : {};
                      yp.test(c4) && s4.startsWith(mp.NAME) && mp.RDNS.includes(a4) && (clearTimeout(n4), e12(o4));
                    }), window.dispatchEvent(new Event(Up.Request));
                  });
                  return Fp({ provider: e11, sdkInstance: t4 });
                } catch (n4) {
                  if (!e10 && window.ethereum) return Fp({ provider: window.ethereum, sdkInstance: t4 });
                  throw new Error("Provider not found");
                }
              });
            }({ mustBeMetaMask: true, sdkInstance: e9 }), window.extension = s3, s3.on(xp, (t4) => {
              Hf(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE chainChanged chainId=${t4}`), Boolean(e9.sdkProvider) && e9.getMobileProvider().emit(xp, t4);
            }), s3.on(Ap, (t4) => Ot(this, void 0, void 0, function* () {
              var n4;
              Hf(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE accountsChanged accounts=${t4}`);
              const r4 = Boolean(e9.sdkProvider), i4 = Boolean(e9.extensionActive);
              if (r4 && e9.getMobileProvider().emit(Ap, t4), i4 && 0 === (null == t4 ? void 0 : t4.length) && 0 === (yield null === (n4 = e9.getProvider()) || void 0 === n4 ? void 0 : n4.request({ method: vp.WALLET_GETPERMISSIONS, params: [] })).length) try {
                yield e9.terminate();
              } catch (e10) {
                Hf("[MetaMaskSDK: setupExtensionPreferences()] error terminating on permissions revoked", e10);
              }
            })), s3.on(Mp, (t4) => {
              Hf(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE disconnect error=${t4}`), Boolean(e9.sdkProvider) && e9.getMobileProvider().emit(Mp, t4);
            }), s3.on(Lp, (t4) => {
              Hf(`[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE connect args=${t4}`), Boolean(e9.sdkProvider) && e9.getMobileProvider().emit(Lp, t4);
            }), s3.on(Tp, (t4) => {
              Hf("[MetaMaskSDK: setupExtensionPreferences()] PROPAGATE connected", t4), Boolean(e9.sdkProvider) && e9.getMobileProvider().emit(Tp, t4);
            });
          } catch (e10) {
            window.extension = void 0;
          }
        } else (null === (n3 = e9.platformManager) || void 0 === n3 ? void 0 : n3.isMetaMaskMobileWebView()) && (null === (r3 = e9.analytics) || void 0 === r3 || r3.send({ event: Wa.SDK_USE_INAPP_BROWSER }), e9.activeProvider = Fp({ provider: window.ethereum, sdkInstance: e9 }), e9._initialized = true, c3 = true);
        return s3 && o3.extensionOnly && (Hf("[MetaMaskSDK: setupExtensionPreferences()] EXTENSION ONLY --- prevent sdk initialization"), null === (i3 = e9.analytics) || void 0 === i3 || i3.send({ event: Wa.SDK_USE_EXTENSION }), e9.activeProvider = s3, e9.extensionActive = true, e9.extension = s3, e9._initialized = true, c3 = true), { preferExtension: a3, shouldReturn: c3, metamaskBrowserExtension: s3 };
      });
    }(e8);
    if (y2) Hf("[MetaMaskSDK: performSDKInitialization()] shouldReturn=true --- prevent sdk initialization");
    else {
      yield function(e9, t3) {
        var n3, r3, i3, o3, s3;
        return Ot(this, void 0, void 0, function* () {
          const { options: a3 } = e9, c3 = Object.assign({}, a3.logging);
          e9.remoteConnection = new sg({ preferDesktop: null !== (n3 = a3.preferDesktop) && void 0 !== n3 && n3, communicationLayerPreference: null !== (r3 = a3.communicationLayerPreference) && void 0 !== r3 ? r3 : ac.SOCKET, analytics: e9.analytics, dappMetadata: a3.dappMetadata, _source: a3._source, enableAnalytics: null === (i3 = a3.enableAnalytics) || void 0 === i3 || i3, timer: a3.timer, sdk: e9, platformManager: e9.platformManager, transports: a3.transports, communicationServerUrl: a3.communicationServerUrl, storage: null !== (o3 = a3.storage) && void 0 !== o3 ? o3 : { enabled: true }, getMetaMaskInstaller: () => {
            if (!e9.installer) throw new Error("Invalid SDK status -- installer not initialized");
            return e9.installer;
          }, logging: c3, connectWithExtensionProvider: void 0 === t3 ? void 0 : () => Pp(e9), modals: Object.assign(Object.assign({}, a3.modals), { onPendingModalDisconnect: e9.terminate.bind(e9) }) }), yield e9.remoteConnection.initRemoteCommunication({ sdkInstance: e9 }), e9.installer = new Xp({ remote: e9.remoteConnection, preferDesktop: null !== (s3 = a3.preferDesktop) && void 0 !== s3 && s3, platformManager: e9.platformManager, debug: e9.debug });
        });
      }(e8, g2), yield function(e9) {
        var t3, n3, r3, i3;
        return Ot(this, void 0, void 0, function* () {
          const { options: o3 } = e9, s3 = { communicationLayerPreference: null !== (t3 = o3.communicationLayerPreference) && void 0 !== t3 ? t3 : ac.SOCKET, platformManager: e9.platformManager, sdk: e9, checkInstallationOnAllCalls: o3.checkInstallationOnAllCalls, injectProvider: null === (n3 = o3.injectProvider) || void 0 === n3 || n3, shouldShimWeb3: null === (r3 = o3.shouldShimWeb3) || void 0 === r3 || r3, extensionOnly: null === (i3 = o3.extensionOnly) || void 0 === i3 || i3, installer: e9.installer, remoteConnection: e9.remoteConnection, debug: e9.debug }, a3 = yield $p(s3);
          e9.activeProvider = a3, function(e10) {
            var t4, n4, r4, i4;
            null === (n4 = null === (t4 = e10.remoteConnection) || void 0 === t4 ? void 0 : t4.getConnector()) || void 0 === n4 || n4.on(sp.ConnectionStatus, (t5) => {
              e10.emit(sp.ConnectionStatus, t5);
            }), null === (i4 = null === (r4 = e10.remoteConnection) || void 0 === r4 ? void 0 : r4.getConnector()) || void 0 === i4 || i4.on(sp.ServiceStatus, (t5) => {
              e10.emit(sp.ServiceStatus, t5);
            });
          }(e9);
        });
      }(e8), yield function(e9, t3) {
        var n3, r3;
        return Ot(this, void 0, void 0, function* () {
          const { options: i3 } = e9;
          t3 ? (Hf("[MetaMaskSDK: handleAutoAndExtensionConnections()] preferExtension is detected -- connect with it."), null === (n3 = e9.analytics) || void 0 === n3 || n3.send({ event: Wa.SDK_EXTENSION_UTILIZED }), Pp(e9).catch((e10) => {
            console.warn("Can't connect with MetaMask extension...", e10), localStorage.removeItem(_p);
          })) : i3.checkInstallationImmediately && ((null === (r3 = e9.platformManager) || void 0 === r3 ? void 0 : r3.isDesktopWeb()) ? (Hf("[MetaMaskSDK: handleAutoAndExtensionConnections()] checkInstallationImmediately"), e9.connect().catch((e10) => {
            Hf(`[MetaMaskSDK: handleAutoAndExtensionConnections()] checkInstallationImmediately --- IGNORED --- error on autoconnect _err=${e10}`);
          })) : console.warn("[handleAutoAndExtensionConnections()] checkInstallationImmediately --- IGNORED --- only for web desktop")), e9._initialized = true;
        });
      }(e8, m2);
      try {
        yield null === (u2 = e8.remoteConnection) || void 0 === u2 ? void 0 : u2.startConnection({ initialCheck: true });
      } catch (e9) {
        console.error("[MetaMaskSDK: setupRemoteConnectionAndInstaller()] Error while checking installation", e9);
      }
      e8.emit(sp.ProviderUpdate, Op.INITIALIZED);
    }
  });
}
var cg = class extends q {
  constructor(e8 = { storage: { enabled: true }, injectProvider: true, forceInjectProvider: false, enableAnalytics: true, shouldShimWeb3: true, useDeeplink: true, extensionOnly: true, headless: false, dappMetadata: { name: "", url: "", iconUrl: "" }, _source: fp, i18nOptions: { enabled: false } }) {
    var t2, n2, r2;
    super(), this.extensionActive = false, this._initialized = false, this.sdkInitPromise = void 0, this.debug = false, this.readonlyRPCCalls = false, this.availableLanguages = ["en"], U.disable();
    const i2 = true === (null === (t2 = e8.logging) || void 0 === t2 ? void 0 : t2.developerMode);
    if (((null === (n2 = e8.logging) || void 0 === n2 ? void 0 : n2.sdk) || i2) && U.enable("MM_SDK"), Hf("[MetaMaskSDK: constructor()]: begin."), this.setMaxListeners(50), !(null === (r2 = e8.dappMetadata) || void 0 === r2 ? void 0 : r2.url)) {
      if ("undefined" == typeof window || "undefined" == typeof document) throw new Error("You must provide dAppMetadata url");
      e8.dappMetadata = Object.assign(Object.assign({}, e8.dappMetadata), { url: `${window.location.protocol}//${window.location.host}` });
    }
    this.options = e8, this.options._source || (e8._source = fp), this.init().then(() => {
      Hf("[MetaMaskSDK: constructor()]: initialized successfully."), "undefined" != typeof window && (window.mmsdk = this);
    }).catch((e9) => {
      console.error("[MetaMaskSDK: constructor()] error during initialization", e9);
    });
  }
  init() {
    return Ot(this, void 0, void 0, function* () {
      return function(e8) {
        var t2;
        return Ot(this, void 0, void 0, function* () {
          if ("undefined" != typeof window && (null === (t2 = window.mmsdk) || void 0 === t2 ? void 0 : t2.isInitialized())) return Hf("[MetaMaskSDK: initializeMetaMaskSDK()] already initialized"), Promise.resolve(window.mmsdk);
          if (e8._initialized) return Hf("[MetaMaskSDK: initializeMetaMaskSDK()] already initialized"), e8.sdkInitPromise;
          if (e8.sdkInitPromise) return Hf("[MetaMaskSDK: initializeMetaMaskSDK()] already initializing"), e8.sdkInitPromise;
          try {
            e8.sdkInitPromise = ag(e8), yield e8.sdkInitPromise;
          } catch (e9) {
            throw console.error(e9), e9;
          }
          return e8.sdkInitPromise;
        });
      }(this);
    });
  }
  isExtensionActive() {
    return this.extensionActive;
  }
  checkExtensionAvailability() {
    var e8;
    return "undefined" != typeof window && Boolean(null === (e8 = window.ethereum) || void 0 === e8 ? void 0 : e8.isMetaMask);
  }
  connect() {
    return Ot(this, void 0, void 0, function* () {
      return function(e8) {
        return Ot(this, void 0, void 0, function* () {
          if (e8._initialized || (Hf("[MetaMaskSDK: connect()] provider not ready -- wait for init()"), yield e8.init()), Hf(`[MetaMaskSDK: connect()] isExtensionActive=${e8.isExtensionActive()} activeProvider`, e8.activeProvider), !e8.activeProvider) throw new Error("SDK state invalid -- undefined provider");
          const t2 = e8.activeProvider.getSelectedAddress();
          return t2 ? [t2] : e8.activeProvider.request({ method: vp.ETH_REQUESTACCOUNTS, params: [] });
        });
      }(this);
    });
  }
  connectAndSign({ msg: e8 }) {
    return Ot(this, void 0, void 0, function* () {
      return function({ instance: e9, msg: t2 }) {
        return Ot(this, void 0, void 0, function* () {
          if (e9._initialized || (Hf("[MetaMaskSDK: connectAndSign()] provider not ready -- wait for init()"), yield e9.init()), Hf(`[MetaMaskSDK: connectAndSign()] activeProvider=${e9.activeProvider}`), !e9.activeProvider) throw new Error("SDK state invalid -- undefined provider");
          const n2 = /^0x([0-9A-Fa-f]{2})*$/u.test(t2) ? t2 : function(e10) {
            let t3;
            if (void 0 !== Wt) t3 = Wt.from(e10, "utf8").toString("hex");
            else if ("undefined" != typeof TextEncoder) {
              const n3 = new TextEncoder().encode(e10);
              t3 = Array.from(n3).map((e11) => e11.toString(16).padStart(2, "0")).join("");
            } else {
              if ("object" != typeof Rt || !("Buffer" in Rt)) throw new Error("Unable to convert string to hex: No available method.");
              t3 = Rt.Buffer.from(e10, "utf8").toString("hex");
            }
            return `0x${t3}`;
          }(t2);
          return e9.activeProvider.request({ method: vp.METAMASK_CONNECTWITH, params: [{ method: vp.PERSONAL_SIGN, params: [n2] }] });
        });
      }({ instance: this, msg: e8 });
    });
  }
  connectWith(e8) {
    return Ot(this, void 0, void 0, function* () {
      return function({ instance: e9, rpc: t2 }) {
        return Ot(this, void 0, void 0, function* () {
          if (e9._initialized || (Hf("[MetaMaskSDK: connectWith()] provider not ready -- wait for init()"), yield e9.init()), Hf(`[MetaMaskSDK: connectWith()] method: ${t2.method} rpc=${t2}`), !e9.activeProvider) throw new Error("SDK state invalid -- undefined provider");
          return e9.activeProvider.request({ method: vp.METAMASK_CONNECTWITH, params: [t2] });
        });
      }({ instance: this, rpc: e8 });
    });
  }
  resume() {
    return function(e8) {
      var t2, n2, r2;
      return Ot(this, void 0, void 0, function* () {
        if (!(null === (n2 = null === (t2 = e8.remoteConnection) || void 0 === t2 ? void 0 : t2.getConnector()) || void 0 === n2 ? void 0 : n2.isReady())) return Hf("[MetaMaskSDK: resume()] channel is not ready -- starting connection"), void (null === (r2 = e8.remoteConnection) || void 0 === r2 || r2.startConnection());
        Hf("[MetaMaskSDK: resume()] channel is ready");
      });
    }(this);
  }
  disconnect() {
    return console.warn("MetaMaskSDK.disconnect() is deprecated, use terminate()"), this.terminate();
  }
  isAuthorized() {
    var e8;
    null === (e8 = this.remoteConnection) || void 0 === e8 || e8.isAuthorized();
  }
  terminate() {
    return function(e8) {
      var t2, n2, r2;
      return Ot(this, void 0, void 0, function* () {
        if (!(null === (t2 = e8.platformManager) || void 0 === t2 ? void 0 : t2.isMetaMaskMobileWebView())) {
          if (Rp && (window.localStorage.removeItem(_p), window.localStorage.removeItem(kp), window.localStorage.removeItem(Sp)), e8.extensionActive) {
            try {
              yield null === (n2 = e8.activeProvider) || void 0 === n2 ? void 0 : n2.request({ method: vp.WALLET_REVOKEPERMISSIONS, params: [{ eth_accounts: {} }] });
            } catch (e9) {
              Hf("[MetaMaskSDK: terminate()] error revoking permissions", e9);
            }
            return e8.options.extensionOnly ? (e8.emit(sp.ProviderUpdate, Op.TERMINATE), void Hf("[MetaMaskSDK: terminate()] extensionOnly --- prevent switching providers")) : (e8.activeProvider = e8.sdkProvider, window.ethereum = e8.activeProvider, e8.extensionActive = false, void e8.emit(sp.ProviderUpdate, Op.TERMINATE));
          }
          e8.emit(sp.ProviderUpdate, Op.TERMINATE), Hf(`[MetaMaskSDK: terminate()] remoteConnection=${e8.remoteConnection}`), null === (r2 = e8.remoteConnection) || void 0 === r2 || r2.disconnect({ terminate: true, sendMessage: true });
        }
      });
    }(this);
  }
  isInitialized() {
    return this._initialized;
  }
  setReadOnlyRPCCalls(e8) {
    this.readonlyRPCCalls = e8;
  }
  hasReadOnlyRPCCalls() {
    return this.readonlyRPCCalls;
  }
  getProvider() {
    if (this.activeProvider) return this.activeProvider;
    console.warn("MetaMaskSDK: No active provider found");
  }
  getMobileProvider() {
    if (!this.sdkProvider) throw new Error("SDK state invalid -- undefined mobile provider");
    return this.sdkProvider;
  }
  getUniversalLink() {
    var e8;
    const t2 = null === (e8 = this.remoteConnection) || void 0 === e8 ? void 0 : e8.getUniversalLink();
    if (!t2) throw new Error("No Universal Link available, please call eth_requestAccounts first.");
    return t2;
  }
  getChannelId() {
    var e8, t2;
    return null === (t2 = null === (e8 = this.remoteConnection) || void 0 === e8 ? void 0 : e8.getChannelConfig()) || void 0 === t2 ? void 0 : t2.channelId;
  }
  getRPCHistory() {
    var e8, t2;
    return null === (t2 = null === (e8 = this.remoteConnection) || void 0 === e8 ? void 0 : e8.getConnector()) || void 0 === t2 ? void 0 : t2.getRPCMethodTracker();
  }
  getVersion() {
    return hp.version;
  }
  getWalletStatus() {
    var e8, t2;
    return null === (t2 = null === (e8 = this.remoteConnection) || void 0 === e8 ? void 0 : e8.getConnector()) || void 0 === t2 ? void 0 : t2.getConnectionStatus();
  }
  _getChannelConfig() {
    var e8;
    return null === (e8 = this.remoteConnection) || void 0 === e8 ? void 0 : e8.getChannelConfig();
  }
  _ping() {
    var e8, t2;
    null === (t2 = null === (e8 = this.remoteConnection) || void 0 === e8 ? void 0 : e8.getConnector()) || void 0 === t2 || t2.ping();
  }
  _keyCheck() {
    var e8, t2;
    null === (t2 = null === (e8 = this.remoteConnection) || void 0 === e8 ? void 0 : e8.getConnector()) || void 0 === t2 || t2.keyCheck();
  }
  _getServiceStatus() {
    var e8, t2;
    return null === (t2 = null === (e8 = this.remoteConnection) || void 0 === e8 ? void 0 : e8.getConnector()) || void 0 === t2 ? void 0 : t2.getServiceStatus();
  }
  _getRemoteConnection() {
    return this.remoteConnection;
  }
  _getDappMetadata() {
    return this.dappMetadata;
  }
  _getKeyInfo() {
    var e8;
    return null === (e8 = this.remoteConnection) || void 0 === e8 ? void 0 : e8.getKeyInfo();
  }
  _resetKeys() {
    var e8, t2;
    null === (t2 = null === (e8 = this.remoteConnection) || void 0 === e8 ? void 0 : e8.getConnector()) || void 0 === t2 || t2.resetKeys();
  }
  _getConnection() {
    return this.remoteConnection;
  }
  emit(e8, t2) {
    return super.emit(e8, t2);
  }
  on(e8, t2) {
    return super.on(e8, t2);
  }
};
var lg = Object.freeze({ __proto__: null, StorageManagerWeb: class {
  constructor({ enabled: e8 } = { enabled: false }) {
    this.enabled = false, this.enabled = e8;
  }
  persistChannelConfig(e8) {
    return Ot(this, void 0, void 0, function* () {
      const t2 = JSON.stringify(e8);
      Hf(`[StorageManagerWeb: persistChannelConfig()] enabled=${this.enabled}`, e8), localStorage.setItem(Cp, t2);
    });
  }
  getPersistedChannelConfig() {
    return Ot(this, void 0, void 0, function* () {
      let e8;
      try {
        if (Hf(`[StorageManagerWeb: getPersistedChannelConfig()] enabled=${this.enabled}`), e8 = localStorage.getItem(Cp), Hf("[StorageManagerWeb: getPersistedChannelConfig()]", e8), !e8) return;
        const t2 = JSON.parse(e8);
        return Hf("[StorageManagerWeb: getPersistedChannelConfig()] channelConfig", t2), t2;
      } catch (e9) {
        return void console.error("[StorageManagerWeb: getPersistedChannelConfig()] Can't find existing channel config", e9);
      }
    });
  }
  persistAccounts(e8) {
    return Ot(this, void 0, void 0, function* () {
      Hf(`[StorageManagerWeb: persistAccounts()] enabled=${this.enabled}`, e8);
      const t2 = JSON.stringify(e8);
      localStorage.setItem(Sp, t2);
    });
  }
  getCachedAccounts() {
    return Ot(this, void 0, void 0, function* () {
      try {
        const e8 = localStorage.getItem(Sp);
        return e8 ? JSON.parse(e8) : [];
      } catch (e8) {
        throw console.error("[StorageManagerWeb: getCachedAccounts()] Error reading cached accounts", e8), e8;
      }
    });
  }
  persistChainId(e8) {
    return Ot(this, void 0, void 0, function* () {
      Hf(`[StorageManagerWeb: persistChainId()] enabled=${this.enabled}`, e8), localStorage.setItem(kp, e8);
    });
  }
  getCachedChainId() {
    return Ot(this, void 0, void 0, function* () {
      try {
        const e8 = localStorage.getItem(kp);
        return null != e8 ? e8 : void 0;
      } catch (e8) {
        throw console.error("[StorageManagerWeb: getCachedChainId()] Error reading cached chainId", e8), e8;
      }
    });
  }
  terminate() {
    return Ot(this, void 0, void 0, function* () {
      Hf(`[StorageManagerWeb: terminate()] enabled=${this.enabled}`), localStorage.removeItem(Cp);
    });
  }
} });
var dg = Object.defineProperty;
var ug = /* @__PURE__ */ new WeakMap();
var hg = (e8) => ug.get(e8);
var fg = (e8, t2) => ug.set(t2.$lazyInstance$ = e8, t2);
var pg = (e8, t2) => t2 in e8;
var gg = (e8, t2) => (0, console.error)(e8, t2);
var mg = /* @__PURE__ */ new Map();
var yg = /* @__PURE__ */ new Map();
var vg = "slot-fb{display:contents}slot-fb[hidden]{display:none}";
var bg = "undefined" != typeof window ? window : {};
var wg = bg.document || { head: {} };
var Eg = { $flags$: 0, $resourcesUrl$: "", jmp: (e8) => e8(), raf: (e8) => requestAnimationFrame(e8), ael: (e8, t2, n2, r2) => e8.addEventListener(t2, n2, r2), rel: (e8, t2, n2, r2) => e8.removeEventListener(t2, n2, r2), ce: (e8, t2) => new CustomEvent(e8, t2) };
var Cg = (() => {
  try {
    return new CSSStyleSheet(), "function" == typeof new CSSStyleSheet().replaceSync;
  } catch (e8) {
  }
  return false;
})();
var _g = false;
var Sg = [];
var kg = [];
var xg = (e8) => {
  for (let t2 = 0; t2 < e8.length; t2++) try {
    e8[t2](performance.now());
  } catch (e9) {
    gg(e9);
  }
  e8.length = 0;
};
var Ag = () => {
  xg(Sg), xg(kg), (_g = Sg.length > 0) && Eg.raf(Ag);
};
var Mg = (e8) => Promise.resolve(void 0).then(e8);
var Lg = /* @__PURE__ */ ((e8, t2) => (t3) => {
  e8.push(t3), _g || (_g = true, 4 & Eg.$flags$ ? Mg(Ag) : Eg.raf(Ag));
})(kg);
var Tg = {};
var Og = (e8) => "object" == (e8 = typeof e8) || "function" === e8;
function Rg(e8) {
  var t2, n2, r2;
  return null != (r2 = null == (n2 = null == (t2 = e8.head) ? void 0 : t2.querySelector('meta[name="csp-nonce"]')) ? void 0 : n2.getAttribute("content")) ? r2 : void 0;
}
((e8, t2) => {
  for (var n2 in t2) dg(e8, n2, { get: t2[n2], enumerable: true });
})({}, { err: () => Ig, map: () => Ng, ok: () => Pg, unwrap: () => Bg, unwrapErr: () => $g });
var Pg = (e8) => ({ isOk: true, isErr: false, value: e8 });
var Ig = (e8) => ({ isOk: false, isErr: true, value: e8 });
function Ng(e8, t2) {
  if (e8.isOk) {
    const n2 = t2(e8.value);
    return n2 instanceof Promise ? n2.then((e9) => Pg(e9)) : Pg(n2);
  }
  if (e8.isErr) {
    const t3 = e8.value;
    return Ig(t3);
  }
  throw "should never get here";
}
var Dg;
var Bg = (e8) => {
  if (e8.isOk) return e8.value;
  throw e8.value;
};
var $g = (e8) => {
  if (e8.isErr) return e8.value;
  throw e8.value;
};
var jg = (e8, t2, ...n2) => {
  let r2 = null, i2 = false, o2 = false;
  const s2 = [], a2 = (t3) => {
    for (let n3 = 0; n3 < t3.length; n3++) r2 = t3[n3], Array.isArray(r2) ? a2(r2) : null != r2 && "boolean" != typeof r2 && ((i2 = "function" != typeof e8 && !Og(r2)) && (r2 = String(r2)), i2 && o2 ? s2[s2.length - 1].$text$ += r2 : s2.push(i2 ? Kg(null, r2) : r2), o2 = i2);
  };
  if (a2(n2), t2) {
    const e9 = t2.className || t2.class;
    e9 && (t2.class = "object" != typeof e9 ? e9 : Object.keys(e9).filter((t3) => e9[t3]).join(" "));
  }
  if ("function" == typeof e8) return e8(null === t2 ? {} : t2, s2, Ug);
  const c2 = Kg(e8, null);
  return c2.$attrs$ = t2, s2.length > 0 && (c2.$children$ = s2), c2;
};
var Kg = (e8, t2) => ({ $flags$: 0, $tag$: e8, $text$: t2, $elm$: null, $children$: null, $attrs$: null });
var Fg = {};
var Ug = { forEach: (e8, t2) => e8.map(Hg).forEach(t2), map: (e8, t2) => e8.map(Hg).map(t2).map(zg) };
var Hg = (e8) => ({ vattrs: e8.$attrs$, vchildren: e8.$children$, vkey: e8.$key$, vname: e8.$name$, vtag: e8.$tag$, vtext: e8.$text$ });
var zg = (e8) => {
  if ("function" == typeof e8.vtag) {
    const t3 = { ...e8.vattrs };
    return e8.vkey && (t3.key = e8.vkey), e8.vname && (t3.name = e8.vname), jg(e8.vtag, t3, ...e8.vchildren || []);
  }
  const t2 = Kg(e8.vtag, e8.vtext);
  return t2.$attrs$ = e8.vattrs, t2.$children$ = e8.vchildren, t2.$key$ = e8.vkey, t2.$name$ = e8.vname, t2;
};
var qg = (e8) => hg(e8).$hostElement$;
var Vg = (e8, t2, n2) => {
  const r2 = qg(e8);
  return { emit: (e9) => Wg(r2, t2, { bubbles: !!(4 & n2), composed: !!(2 & n2), cancelable: !!(1 & n2), detail: e9 }) };
};
var Wg = (e8, t2, n2) => {
  const r2 = Eg.ce(t2, n2);
  return e8.dispatchEvent(r2), r2;
};
var Gg = /* @__PURE__ */ new WeakMap();
var Yg = (e8, t2) => "sc-" + e8.$tagName$;
var Zg = (e8, t2, n2, r2, i2, o2) => {
  if (n2 !== r2) {
    let s2 = pg(e8, t2), a2 = t2.toLowerCase();
    if ("class" === t2) {
      const t3 = e8.classList, i3 = Xg(n2), o3 = Xg(r2);
      t3.remove(...i3.filter((e9) => e9 && !o3.includes(e9))), t3.add(...o3.filter((e9) => e9 && !i3.includes(e9)));
    } else if ("style" === t2) {
      for (const t3 in n2) r2 && null != r2[t3] || (t3.includes("-") ? e8.style.removeProperty(t3) : e8.style[t3] = "");
      for (const t3 in r2) n2 && r2[t3] === n2[t3] || (t3.includes("-") ? e8.style.setProperty(t3, r2[t3]) : e8.style[t3] = r2[t3]);
    } else if (s2 || "o" !== t2[0] || "n" !== t2[1]) {
      const a3 = Og(r2);
      if ((s2 || a3 && null !== r2) && !i2) try {
        if (e8.tagName.includes("-")) e8[t2] = r2;
        else {
          const i3 = null == r2 ? "" : r2;
          "list" === t2 ? s2 = false : null != n2 && e8[t2] == i3 || ("function" == typeof e8.__lookupSetter__(t2) ? e8[t2] = i3 : e8.setAttribute(t2, i3));
        }
      } catch (e9) {
      }
      null == r2 || false === r2 ? false === r2 && "" !== e8.getAttribute(t2) || e8.removeAttribute(t2) : (!s2 || 4 & o2 || i2) && !a3 && (r2 = true === r2 ? "" : r2, e8.setAttribute(t2, r2));
    } else if (t2 = "-" === t2[2] ? t2.slice(3) : pg(bg, a2) ? a2.slice(2) : a2[2] + t2.slice(3), n2 || r2) {
      const i3 = t2.endsWith(Qg);
      t2 = t2.replace(em, ""), n2 && Eg.rel(e8, t2, n2, i3), r2 && Eg.ael(e8, t2, r2, i3);
    }
  }
};
var Jg = /\s/;
var Xg = (e8) => e8 ? e8.split(Jg) : [];
var Qg = "Capture";
var em = new RegExp(Qg + "$");
var tm = (e8, t2, n2) => {
  const r2 = 11 === t2.$elm$.nodeType && t2.$elm$.host ? t2.$elm$.host : t2.$elm$, i2 = e8 && e8.$attrs$ || Tg, o2 = t2.$attrs$ || Tg;
  for (const e9 of nm(Object.keys(i2))) e9 in o2 || Zg(r2, e9, i2[e9], void 0, n2, t2.$flags$);
  for (const e9 of nm(Object.keys(o2))) Zg(r2, e9, i2[e9], o2[e9], n2, t2.$flags$);
};
function nm(e8) {
  return e8.includes("ref") ? [...e8.filter((e9) => "ref" !== e9), "ref"] : e8;
}
var rm = false;
var im = (e8, t2, n2, r2) => {
  const i2 = t2.$children$[n2];
  let o2, s2, a2 = 0;
  if (null !== i2.$text$) o2 = i2.$elm$ = wg.createTextNode(i2.$text$);
  else {
    if (rm || (rm = "svg" === i2.$tag$), o2 = i2.$elm$ = wg.createElementNS(rm ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", i2.$tag$), rm && "foreignObject" === i2.$tag$ && (rm = false), tm(null, i2, rm), o2.getRootNode().querySelector("body"), i2.$children$) for (a2 = 0; a2 < i2.$children$.length; ++a2) s2 = im(e8, i2, a2), s2 && o2.appendChild(s2);
    "svg" === i2.$tag$ ? rm = false : "foreignObject" === o2.tagName && (rm = true);
  }
  return o2["s-hn"] = Dg, o2;
};
var om = (e8, t2, n2, r2, i2, o2) => {
  let s2, a2 = e8;
  for (a2.shadowRoot && a2.tagName === Dg && (a2 = a2.shadowRoot); i2 <= o2; ++i2) r2[i2] && (s2 = im(null, n2, i2), s2 && (r2[i2].$elm$ = s2, lm(a2, s2, t2)));
};
var sm = (e8, t2, n2) => {
  for (let r2 = t2; r2 <= n2; ++r2) {
    const t3 = e8[r2];
    if (t3) {
      const e9 = t3.$elm$;
      e9 && e9.remove();
    }
  }
};
var am = (e8, t2, n2 = false) => e8.$tag$ === t2.$tag$;
var cm = (e8, t2, n2 = false) => {
  const r2 = t2.$elm$ = e8.$elm$, i2 = e8.$children$, o2 = t2.$children$, s2 = t2.$tag$, a2 = t2.$text$;
  null === a2 ? (tm(e8, t2, rm = "svg" === s2 || "foreignObject" !== s2 && rm), null !== i2 && null !== o2 ? ((e9, t3, n3, r3, i3 = false) => {
    let o3, s3 = 0, a3 = 0, c2 = t3.length - 1, l2 = t3[0], d2 = t3[c2], u2 = r3.length - 1, h2 = r3[0], f2 = r3[u2];
    for (; s3 <= c2 && a3 <= u2; ) null == l2 ? l2 = t3[++s3] : null == d2 ? d2 = t3[--c2] : null == h2 ? h2 = r3[++a3] : null == f2 ? f2 = r3[--u2] : am(l2, h2, i3) ? (cm(l2, h2, i3), l2 = t3[++s3], h2 = r3[++a3]) : am(d2, f2, i3) ? (cm(d2, f2, i3), d2 = t3[--c2], f2 = r3[--u2]) : am(l2, f2, i3) ? (cm(l2, f2, i3), lm(e9, l2.$elm$, d2.$elm$.nextSibling), l2 = t3[++s3], f2 = r3[--u2]) : am(d2, h2, i3) ? (cm(d2, h2, i3), lm(e9, d2.$elm$, l2.$elm$), d2 = t3[--c2], h2 = r3[++a3]) : (o3 = im(t3 && t3[a3], n3, a3), h2 = r3[++a3], o3 && lm(l2.$elm$.parentNode, o3, l2.$elm$));
    s3 > c2 ? om(e9, null == r3[u2 + 1] ? null : r3[u2 + 1].$elm$, n3, r3, a3, u2) : a3 > u2 && sm(t3, s3, c2);
  })(r2, i2, t2, o2, n2) : null !== o2 ? (null !== e8.$text$ && (r2.textContent = ""), om(r2, null, t2, o2, 0, o2.length - 1)) : !n2 && null !== i2 && sm(i2, 0, i2.length - 1), rm && "svg" === s2 && (rm = false)) : e8.$text$ !== a2 && (r2.data = a2);
};
var lm = (e8, t2, n2) => null == e8 ? void 0 : e8.insertBefore(t2, n2);
var dm = (e8, t2) => {
  t2 && !e8.$onRenderResolve$ && t2["s-p"] && t2["s-p"].push(new Promise((t3) => e8.$onRenderResolve$ = t3));
};
var um = (e8, t2) => {
  if (e8.$flags$ |= 16, !(4 & e8.$flags$)) return dm(e8, e8.$ancestorComponent$), Lg(() => hm(e8, t2));
  e8.$flags$ |= 512;
};
var hm = (e8, t2) => {
  const n2 = e8.$hostElement$;
  e8.$cmpMeta$.$tagName$;
  const r2 = e8.$lazyInstance$;
  if (!r2) throw new Error(`Can't render component <${n2.tagName.toLowerCase()} /> with invalid Stencil runtime! Make sure this imported component is compiled with a \`externalRuntime: true\` flag. For more information, please refer to https://stenciljs.com/docs/custom-elements#externalruntime`);
  return fm(void 0, () => gm(e8, r2, t2));
};
var fm = (e8, t2) => pm(e8) ? e8.then(t2).catch((e9) => {
  console.error(e9), t2();
}) : t2();
var pm = (e8) => e8 instanceof Promise || e8 && e8.then && "function" == typeof e8.then;
var gm = async (e8, t2, n2) => {
  var r2;
  const i2 = e8.$hostElement$;
  e8.$cmpMeta$.$tagName$;
  const o2 = i2["s-rc"];
  n2 && ((e9) => {
    const t3 = e9.$cmpMeta$, n3 = e9.$hostElement$, r3 = t3.$flags$;
    t3.$tagName$;
    const i3 = ((e10, t4, n4) => {
      var r4;
      const i4 = Yg(t4), o3 = yg.get(i4);
      if (e10 = 11 === e10.nodeType ? e10 : wg, o3) if ("string" == typeof o3) {
        e10 = e10.head || e10;
        let n5, s2 = Gg.get(e10);
        if (s2 || Gg.set(e10, s2 = /* @__PURE__ */ new Set()), !s2.has(i4)) {
          {
            n5 = wg.createElement("style"), n5.innerHTML = o3;
            const i5 = null != (r4 = Eg.$nonce$) ? r4 : Rg(wg);
            if (null != i5 && n5.setAttribute("nonce", i5), !(1 & t4.$flags$)) if ("HEAD" === e10.nodeName) {
              const t5 = e10.querySelectorAll("link[rel=preconnect]"), r5 = t5.length > 0 ? t5[t5.length - 1].nextSibling : e10.querySelector("style");
              e10.insertBefore(n5, r5);
            } else if ("host" in e10) if (Cg) {
              const t5 = new CSSStyleSheet();
              t5.replaceSync(o3), e10.adoptedStyleSheets = [t5, ...e10.adoptedStyleSheets];
            } else {
              const t5 = e10.querySelector("style");
              t5 ? t5.innerHTML = o3 + t5.innerHTML : e10.prepend(n5);
            }
            else e10.append(n5);
            1 & t4.$flags$ && "HEAD" !== e10.nodeName && e10.insertBefore(n5, null);
          }
          4 & t4.$flags$ && (n5.innerHTML += vg), s2 && s2.add(i4);
        }
      } else e10.adoptedStyleSheets.includes(o3) || (e10.adoptedStyleSheets = [...e10.adoptedStyleSheets, o3]);
      return i4;
    })(n3.shadowRoot ? n3.shadowRoot : n3.getRootNode(), t3);
    10 & r3 && 2 & r3 && (n3["s-sc"] = i3, n3.classList.add(i3 + "-h"));
  })(e8), e8.$cmpMeta$.$tagName$, mm(e8, t2, i2, n2), o2 && (o2.map((e9) => e9()), i2["s-rc"] = void 0);
  {
    const t3 = null != (r2 = i2["s-p"]) ? r2 : [], n3 = () => ym(e8);
    0 === t3.length ? n3() : (Promise.all(t3).then(n3), e8.$flags$ |= 4, t3.length = 0);
  }
};
var mm = (e8, t2, n2, r2) => {
  try {
    t2 = t2.render(), e8.$flags$ &= -17, e8.$flags$ |= 2, ((e9, t3, n3 = false) => {
      const r3 = e9.$hostElement$, i2 = e9.$cmpMeta$, o2 = e9.$vnode$ || Kg(null, null), s2 = (a2 = t3) && a2.$tag$ === Fg ? t3 : jg(null, null, t3);
      var a2;
      if (Dg = r3.tagName, n3 && s2.$attrs$) for (const e10 of Object.keys(s2.$attrs$)) r3.hasAttribute(e10) && !["key", "ref", "style", "class"].includes(e10) && (s2.$attrs$[e10] = r3[e10]);
      s2.$tag$ = null, s2.$flags$ |= 4, e9.$vnode$ = s2, s2.$elm$ = o2.$elm$ = r3.shadowRoot || r3, r3["s-sc"], 0 != (1 & i2.$flags$), cm(o2, s2, n3);
    })(e8, t2, r2);
  } catch (t3) {
    gg(t3, e8.$hostElement$);
  }
  return null;
};
var ym = (e8) => {
  e8.$cmpMeta$.$tagName$;
  const t2 = e8.$hostElement$, n2 = e8.$lazyInstance$, r2 = e8.$ancestorComponent$;
  64 & e8.$flags$ || (e8.$flags$ |= 64, wm(t2), bm(n2, "componentDidLoad"), e8.$onReadyResolve$(t2), r2 || vm()), e8.$onRenderResolve$ && (e8.$onRenderResolve$(), e8.$onRenderResolve$ = void 0), 512 & e8.$flags$ && Mg(() => um(e8, false)), e8.$flags$ &= -517;
};
var vm = (e8) => {
  wm(wg.documentElement), Mg(() => Wg(bg, "appload", { detail: { namespace: "sdk-install-modal-web" } }));
};
var bm = (e8, t2, n2) => {
  if (e8 && e8[t2]) try {
    return e8[t2](n2);
  } catch (e9) {
    gg(e9);
  }
};
var wm = (e8) => e8.classList.add(("hydrated", "hydrated"));
var Em = (e8, t2, n2) => {
  var r2, i2;
  const o2 = e8.prototype;
  if (t2.$members$ || t2.$watchers$ || e8.watchers) {
    e8.watchers && !t2.$watchers$ && (t2.$watchers$ = e8.watchers);
    const s2 = Object.entries(null != (r2 = t2.$members$) ? r2 : {});
    if (s2.map(([e9, [r3]]) => {
      (31 & r3 || 2 & n2 && 32 & r3) && Object.defineProperty(o2, e9, { get() {
        return t3 = e9, hg(this).$instanceValues$.get(t3);
        var t3;
      }, set(n3) {
        ((e10, t3, n4, r4) => {
          const i3 = hg(e10);
          if (!i3) throw new Error(`Couldn't find host element for "${r4.$tagName$}" as it is unknown to this Stencil runtime. This usually happens when integrating a 3rd party Stencil component with another Stencil component or application. Please reach out to the maintainers of the 3rd party Stencil component or report this on the Stencil Discord server (https://chat.stenciljs.com) or comment on this similar [GitHub issue](https://github.com/ionic-team/stencil/issues/5457).`);
          const o3 = i3.$hostElement$, s3 = i3.$instanceValues$.get(t3), a2 = i3.$flags$, c2 = i3.$lazyInstance$;
          var l2, d2;
          l2 = n4, d2 = r4.$members$[t3][0], n4 = null == l2 || Og(l2) ? l2 : 4 & d2 ? "false" !== l2 && ("" === l2 || !!l2) : 1 & d2 ? String(l2) : l2;
          const u2 = Number.isNaN(s3) && Number.isNaN(n4);
          if ((!(8 & a2) || void 0 === s3) && n4 !== s3 && !u2 && (i3.$instanceValues$.set(t3, n4), c2)) {
            if (r4.$watchers$ && 128 & a2) {
              const e11 = r4.$watchers$[t3];
              e11 && e11.map((e12) => {
                try {
                  c2[e12](n4, s3, t3);
                } catch (e13) {
                  gg(e13, o3);
                }
              });
            }
            2 == (18 & a2) && um(i3, false);
          }
        })(this, e9, n3, t2);
      }, configurable: true, enumerable: true });
    }), 1 & n2) {
      const n3 = /* @__PURE__ */ new Map();
      o2.attributeChangedCallback = function(e9, r3, i3) {
        Eg.jmp(() => {
          var s3;
          const a2 = n3.get(e9);
          if (this.hasOwnProperty(a2)) i3 = this[a2], delete this[a2];
          else {
            if (o2.hasOwnProperty(a2) && "number" == typeof this[a2] && this[a2] == i3) return;
            if (null == a2) {
              const n4 = hg(this), o3 = null == n4 ? void 0 : n4.$flags$;
              if (o3 && !(8 & o3) && 128 & o3 && i3 !== r3) {
                const o4 = n4.$lazyInstance$, a3 = null == (s3 = t2.$watchers$) ? void 0 : s3[e9];
                null == a3 || a3.forEach((t3) => {
                  null != o4[t3] && o4[t3].call(o4, i3, r3, e9);
                });
              }
              return;
            }
          }
          this[a2] = (null !== i3 || "boolean" != typeof this[a2]) && i3;
        });
      }, e8.observedAttributes = Array.from(/* @__PURE__ */ new Set([...Object.keys(null != (i2 = t2.$watchers$) ? i2 : {}), ...s2.filter(([e9, t3]) => 15 & t3[0]).map(([e9, t3]) => {
        const r3 = t3[1] || e9;
        return n3.set(r3, e9), r3;
      })]));
    }
  }
  return e8;
};
var Cm = (e8) => {
  bm(e8, "connectedCallback");
};
var _m = (e8) => {
  bm(e8, "disconnectedCallback");
};
var Sm = (e8, t2 = {}) => {
  var n2;
  const r2 = [], i2 = t2.exclude || [], o2 = bg.customElements, s2 = wg.head, a2 = s2.querySelector("meta[charset]"), c2 = wg.createElement("style"), l2 = [];
  let d2, u2 = true;
  Object.assign(Eg, t2), Eg.$resourcesUrl$ = new URL(t2.resourcesUrl || "./", wg.baseURI).href;
  let h2 = false;
  if (e8.map((e9) => {
    e9[1].map((t3) => {
      var n3;
      const s3 = { $flags$: t3[0], $tagName$: t3[1], $members$: t3[2], $listeners$: t3[3] };
      4 & s3.$flags$ && (h2 = true), s3.$members$ = t3[2], s3.$watchers$ = null != (n3 = t3[4]) ? n3 : {};
      const a3 = s3.$tagName$, c3 = class extends HTMLElement {
        constructor(e10) {
          if (super(e10), this.hasRegisteredEventListeners = false, ((e11, t4) => {
            const n4 = { $flags$: 0, $hostElement$: e11, $cmpMeta$: t4, $instanceValues$: /* @__PURE__ */ new Map() };
            n4.$onReadyPromise$ = new Promise((e12) => n4.$onReadyResolve$ = e12), e11["s-p"] = [], e11["s-rc"] = [], ug.set(e11, n4);
          })(e10 = this, s3), 1 & s3.$flags$) if (e10.shadowRoot) {
            if ("open" !== e10.shadowRoot.mode) throw new Error(`Unable to re-use existing shadow root for ${s3.$tagName$}! Mode is set to ${e10.shadowRoot.mode} but Stencil only supports open shadow roots.`);
          } else e10.attachShadow({ mode: "open" });
        }
        connectedCallback() {
          hg(this), this.hasRegisteredEventListeners || (this.hasRegisteredEventListeners = true), d2 && (clearTimeout(d2), d2 = null), u2 ? l2.push(this) : Eg.jmp(() => ((e10) => {
            if (0 == (1 & Eg.$flags$)) {
              const t4 = hg(e10), n4 = t4.$cmpMeta$;
              if (n4.$tagName$, 1 & t4.$flags$) (null == t4 ? void 0 : t4.$lazyInstance$) ? Cm(t4.$lazyInstance$) : (null == t4 ? void 0 : t4.$onReadyPromise$) && t4.$onReadyPromise$.then(() => Cm(t4.$lazyInstance$));
              else {
                t4.$flags$ |= 1;
                {
                  let n5 = e10;
                  for (; n5 = n5.parentNode || n5.host; ) if (n5["s-p"]) {
                    dm(t4, t4.$ancestorComponent$ = n5);
                    break;
                  }
                }
                n4.$members$ && Object.entries(n4.$members$).map(([t5, [n5]]) => {
                  if (31 & n5 && e10.hasOwnProperty(t5)) {
                    const n6 = e10[t5];
                    delete e10[t5], e10[t5] = n6;
                  }
                }), (async (e11, t5, n5, r3) => {
                  let i3;
                  if (0 == (32 & t5.$flags$)) {
                    if (t5.$flags$ |= 32, n5.$lazyBundleId$) {
                      const r4 = ((e12, t6, n6) => {
                        const r5 = e12.$tagName$.replace(/-/g, "_"), i4 = e12.$lazyBundleId$;
                        if (!i4) return;
                        const o4 = mg.get(i4);
                        if (o4) return o4[r5];
                        {
                          const e13 = (e14) => (mg.set(i4, e14), e14[r5]);
                          switch (i4) {
                            case "mm-install-modal":
                              return Promise.resolve().then(function() {
                                return oy;
                              }).then(e13, gg);
                            case "mm-pending-modal":
                              return Promise.resolve().then(function() {
                                return ay;
                              }).then(e13, gg);
                            case "mm-select-modal":
                              return Promise.resolve().then(function() {
                                return fy;
                              }).then(e13, gg);
                          }
                        }
                        return /* webpackIgnore: true */ /* @vite-ignore */ /* webpackInclude: /\.entry\.js$/ */ /* webpackExclude: /\.system\.entry\.js$/ */ /* webpackMode: "lazy" */ globImport_entry_js(`./${i4}.entry.js`).then((e13) => (mg.set(i4, e13), e13[r5]), gg);
                      })(n5);
                      if (i3 = r4 && "then" in r4 ? await r4 : r4, !i3) throw new Error(`Constructor for "${n5.$tagName$}#${t5.$modeName$}" was not found`);
                      i3.isProxied || (n5.$watchers$ = i3.watchers, Em(i3, n5, 2), i3.isProxied = true), n5.$tagName$, t5.$flags$ |= 8;
                      try {
                        new i3(t5);
                      } catch (e12) {
                        gg(e12);
                      }
                      t5.$flags$ &= -9, t5.$flags$ |= 128, Cm(t5.$lazyInstance$);
                    } else {
                      i3 = e11.constructor;
                      const n6 = e11.localName;
                      customElements.whenDefined(n6).then(() => t5.$flags$ |= 128);
                    }
                    if (i3 && i3.style) {
                      let e12;
                      "string" == typeof i3.style && (e12 = i3.style);
                      const t6 = Yg(n5);
                      yg.has(t6) || (n5.$tagName$, ((e13, t7, n6) => {
                        let r4 = yg.get(e13);
                        Cg && n6 ? (r4 = r4 || new CSSStyleSheet(), "string" == typeof r4 ? r4 = t7 : r4.replaceSync(t7)) : r4 = t7, yg.set(e13, r4);
                      })(t6, e12, !!(1 & n5.$flags$)));
                    }
                  }
                  const o3 = t5.$ancestorComponent$, s4 = () => um(t5, true);
                  o3 && o3["s-rc"] ? o3["s-rc"].push(s4) : s4();
                })(e10, t4, n4);
              }
            }
          })(this));
        }
        disconnectedCallback() {
          Eg.jmp(() => (async (e10) => {
            if (0 == (1 & Eg.$flags$)) {
              const t4 = hg(e10);
              (null == t4 ? void 0 : t4.$lazyInstance$) ? _m(t4.$lazyInstance$) : (null == t4 ? void 0 : t4.$onReadyPromise$) && t4.$onReadyPromise$.then(() => _m(t4.$lazyInstance$));
            }
          })(this));
        }
        componentOnReady() {
          return hg(this).$onReadyPromise$;
        }
      };
      s3.$lazyBundleId$ = e9[0], i2.includes(a3) || o2.get(a3) || (r2.push(a3), o2.define(a3, Em(c3, s3, 1)));
    });
  }), r2.length > 0 && (h2 && (c2.textContent += vg), c2.textContent += r2.sort() + "{visibility:hidden}.hydrated{visibility:inherit}", c2.innerHTML.length)) {
    c2.setAttribute("data-styles", "");
    const e9 = null != (n2 = Eg.$nonce$) ? n2 : Rg(wg);
    null != e9 && c2.setAttribute("nonce", e9), s2.insertBefore(c2, a2 ? a2.nextSibling : s2.firstChild);
  }
  u2 = false, l2.length ? l2.map((e9) => e9.connectedCallback()) : Eg.jmp(() => d2 = setTimeout(vm, 30));
};
!function() {
  if ("undefined" != typeof window && void 0 !== window.Reflect && void 0 !== window.customElements) {
    var e8 = HTMLElement;
    window.HTMLElement = function() {
      return Reflect.construct(e8, [], this.constructor);
    }, HTMLElement.prototype = e8.prototype, HTMLElement.prototype.constructor = HTMLElement, Object.setPrototypeOf(HTMLElement, e8);
  }
}();
var km = Object.freeze({ __proto__: null, defineCustomElements: async (e8, t2) => {
  if ("undefined" != typeof window) return await void 0, Sm([["mm-install-modal", [[1, "mm-install-modal", { link: [1], sdkVersion: [1, "sdk-version"], preferDesktop: [4, "prefer-desktop"], tab: [32], isDefaultTab: [32], translationsLoaded: [32] }, null, { preferDesktop: ["updatePreferDesktop"] }]]], ["mm-pending-modal", [[1, "mm-pending-modal", { displayOTP: [4, "display-o-t-p"], sdkVersion: [1, "sdk-version"], otpCode: [1, "otp-code"], translationsLoaded: [32] }]]], ["mm-select-modal", [[1, "mm-select-modal", { link: [1], sdkVersion: [1, "sdk-version"], preferDesktop: [4, "prefer-desktop"], tab: [32], isDefaultTab: [32], translationsLoaded: [32] }, null, { preferDesktop: ["updatePreferDesktop"] }]]]], t2);
}, setNonce: (e8) => Eg.$nonce$ = e8 });
var xm = { fontFamily: "Roboto, sans-serif" };
var Am = ({ className: e8 }, t2) => jg("div", { style: xm, class: e8 }, t2);
function Mm({ version: e8 }) {
  return jg("div", { style: { textAlign: "center", color: "#BBC0C5", fontSize: "12" } }, "SDK Version ", e8 ? `v${e8}` : "unknown");
}
var Lm = () => jg("svg", { width: "14", height: "14", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, jg("rect", { width: "16", height: "16", fill: "white" }), jg("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.40554 2.40554C2.94627 1.86482 3.82296 1.86482 4.36369 2.40554L8 6.04186L11.6363 2.40554C12.177 1.86482 13.0537 1.86482 13.5945 2.40554C14.1352 2.94627 14.1352 3.82296 13.5945 4.36369L9.95814 8L13.5945 11.6363C14.1352 12.177 14.1352 13.0537 13.5945 13.5945C13.0537 14.1352 12.177 14.1352 11.6363 13.5945L8 9.95814L4.36369 13.5945C3.82296 14.1352 2.94627 14.1352 2.40554 13.5945C1.86482 13.0537 1.86482 12.177 2.40554 11.6363L6.04186 8L2.40554 4.36369C1.86482 3.82296 1.86482 2.94627 2.40554 2.40554Z", fill: "#BBC0C5" }));
var Tm = () => jg("svg", { width: "273", height: "51", viewBox: "0 0 273 51", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, jg("path", { d: "M240.882 25.9263C239.472 24.997 237.916 24.3361 236.443 23.5101C235.489 22.9731 234.473 22.4982 233.643 21.8167C232.233 20.6602 232.524 18.3885 233.996 17.3973C236.112 15.993 239.617 16.7777 239.99 19.6483C239.99 19.7102 240.052 19.7515 240.114 19.7515H243.308C243.391 19.7515 243.454 19.6896 243.433 19.607C243.267 17.6244 242.5 15.9723 241.089 14.9191C239.741 13.9072 238.206 13.3702 236.568 13.3702C228.127 13.3702 227.359 22.271 231.901 25.0796C232.42 25.41 236.879 27.6404 238.455 28.611C240.032 29.5816 240.529 31.3576 239.845 32.7619C239.223 34.0423 237.605 34.9303 235.987 34.8271C234.224 34.7238 232.855 33.7738 232.378 32.2869C232.295 32.0185 232.254 31.5022 232.254 31.275C232.254 31.2131 232.192 31.1511 232.129 31.1511H228.666C228.604 31.1511 228.541 31.2131 228.541 31.275C228.541 33.7738 229.164 35.1575 230.864 36.4172C232.461 37.615 234.203 38.1106 236.008 38.1106C240.737 38.1106 243.184 35.4466 243.682 32.6793C244.117 29.974 243.308 27.5371 240.882 25.9263Z", fill: "#24292E" }), jg("path", { d: "M90.4943 13.8246H88.9595H87.2795C87.2173 13.8246 87.1758 13.8659 87.1551 13.9072L84.3137 23.2416C84.2722 23.3655 84.1063 23.3655 84.0648 23.2416L81.2234 13.9072C81.2026 13.8452 81.1612 13.8246 81.0989 13.8246H79.419H77.8842H75.8102C75.748 13.8246 75.6857 13.8865 75.6857 13.9485V37.7802C75.6857 37.8422 75.748 37.9041 75.8102 37.9041H79.2738C79.336 37.9041 79.3982 37.8422 79.3982 37.7802V19.6689C79.3982 19.5244 79.6056 19.5037 79.6471 19.6276L82.5093 29.024L82.7167 29.6849C82.7374 29.7468 82.7789 29.7675 82.8411 29.7675H85.4959C85.5581 29.7675 85.5996 29.7262 85.6203 29.6849L85.8277 29.024L88.6899 19.6276C88.7313 19.4831 88.9387 19.5244 88.9387 19.6689V37.7802C88.9387 37.8422 89.001 37.9041 89.0632 37.9041H92.5268C92.589 37.9041 92.6513 37.8422 92.6513 37.7802V13.9485C92.6513 13.8865 92.589 13.8246 92.5268 13.8246H90.4943Z", fill: "#24292E" }), jg("path", { d: "M187.849 13.8246C187.787 13.8246 187.745 13.8659 187.725 13.9072L184.883 23.2416C184.842 23.3655 184.676 23.3655 184.634 23.2416L181.793 13.9072C181.772 13.8452 181.731 13.8246 181.668 13.8246H176.4C176.338 13.8246 176.276 13.8865 176.276 13.9485V37.7802C176.276 37.8422 176.338 37.9041 176.4 37.9041H179.864C179.926 37.9041 179.988 37.8422 179.988 37.7802V19.6689C179.988 19.5244 180.196 19.5037 180.237 19.6276L183.099 29.024L183.307 29.6849C183.328 29.7468 183.369 29.7675 183.431 29.7675H186.086C186.148 29.7675 186.19 29.7262 186.211 29.6849L186.418 29.024L189.28 19.6276C189.322 19.4831 189.529 19.5244 189.529 19.6689V37.7802C189.529 37.8422 189.591 37.9041 189.653 37.9041H193.117C193.179 37.9041 193.241 37.8422 193.241 37.7802V13.9485C193.241 13.8865 193.179 13.8246 193.117 13.8246H187.849Z", fill: "#24292E" }), jg("path", { d: "M143.174 13.8246H136.724H133.261H126.81C126.748 13.8246 126.686 13.8865 126.686 13.9485V16.9223C126.686 16.9843 126.748 17.0462 126.81 17.0462H133.136V37.7802C133.136 37.8422 133.198 37.9041 133.261 37.9041H136.724C136.786 37.9041 136.849 37.8422 136.849 37.7802V17.0462H143.174C143.237 17.0462 143.299 16.9843 143.299 16.9223V13.9485C143.299 13.8865 143.257 13.8246 143.174 13.8246Z", fill: "#24292E" }), jg("path", { d: "M163.604 37.9041H166.756C166.839 37.9041 166.901 37.8215 166.881 37.7389L160.368 13.8245C160.347 13.7626 160.306 13.7419 160.244 13.7419H159.041H156.925H155.722C155.66 13.7419 155.619 13.7832 155.598 13.8245L149.085 37.7389C149.065 37.8215 149.127 37.9041 149.21 37.9041H152.362C152.425 37.9041 152.466 37.8628 152.487 37.8215L154.374 30.862C154.395 30.8 154.436 30.7794 154.499 30.7794H161.467C161.53 30.7794 161.571 30.8207 161.592 30.862L163.479 37.8215C163.5 37.8628 163.562 37.9041 163.604 37.9041ZM155.328 27.3719L157.859 18.0581C157.9 17.9342 158.066 17.9342 158.107 18.0581L160.638 27.3719C160.659 27.4545 160.596 27.5371 160.513 27.5371H155.453C155.37 27.5371 155.308 27.4545 155.328 27.3719Z", fill: "#24292E" }), jg("path", { d: "M217.362 37.9041H220.515C220.598 37.9041 220.66 37.8215 220.639 37.7389L214.127 13.8245C214.106 13.7626 214.065 13.7419 214.002 13.7419H212.8H210.684H209.481C209.419 13.7419 209.377 13.7832 209.357 13.8245L202.844 37.7389C202.823 37.8215 202.886 37.9041 202.969 37.9041H206.121C206.183 37.9041 206.225 37.8628 206.246 37.8215L208.133 30.862C208.154 30.8 208.195 30.7794 208.257 30.7794H215.226C215.288 30.7794 215.33 30.8207 215.351 30.862L217.238 37.8215C217.259 37.8628 217.3 37.9041 217.362 37.9041ZM209.087 27.3719L211.617 18.0581C211.659 17.9342 211.825 17.9342 211.866 18.0581L214.397 27.3719C214.417 27.4545 214.355 27.5371 214.272 27.5371H209.211C209.129 27.5371 209.066 27.4545 209.087 27.3719Z", fill: "#24292E" }), jg("path", { d: "M106.713 34.3727V26.9795C106.713 26.9176 106.775 26.8556 106.837 26.8556H116.067C116.129 26.8556 116.191 26.7936 116.191 26.7317V23.7579C116.191 23.6959 116.129 23.634 116.067 23.634H106.837C106.775 23.634 106.713 23.572 106.713 23.5101V17.1907C106.713 17.1288 106.775 17.0668 106.837 17.0668H117.332C117.394 17.0668 117.457 17.0049 117.457 16.9429V13.9691C117.457 13.9072 117.394 13.8452 117.332 13.8452H106.713H103.125C103.063 13.8452 103.001 13.9072 103.001 13.9691V17.0668V23.6546V26.8763V34.5173V37.7802C103.001 37.8422 103.063 37.9041 103.125 37.9041H106.713H117.768C117.83 37.9041 117.892 37.8422 117.892 37.7802V34.6412C117.892 34.5792 117.83 34.5173 117.768 34.5173H106.817C106.755 34.4966 106.713 34.4553 106.713 34.3727Z", fill: "#24292E" }), jg("path", { d: "M272.532 37.6976L260.544 25.3687C260.502 25.3274 260.502 25.2448 260.544 25.2035L271.329 14.0517C271.412 13.9691 271.349 13.8452 271.246 13.8452H266.828C266.787 13.8452 266.766 13.8659 266.745 13.8865L257.599 23.3449C257.516 23.4275 257.391 23.3655 257.391 23.2623V13.9691C257.391 13.9072 257.329 13.8452 257.267 13.8452H253.803C253.741 13.8452 253.679 13.9072 253.679 13.9691V37.8009C253.679 37.8628 253.741 37.9248 253.803 37.9248H257.267C257.329 37.9248 257.391 37.8628 257.391 37.8009V27.3099C257.391 27.2067 257.536 27.1447 257.599 27.2273L267.969 37.8835C267.989 37.9041 268.031 37.9248 268.052 37.9248H272.469C272.552 37.9041 272.615 37.7596 272.532 37.6976Z", fill: "#24292E" }), jg("path", { d: "M52.021 1L31.0526 16.4886L34.9517 7.36063L52.021 1Z", fill: "#E17726", stroke: "#E17726", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M3.65491 1L24.4366 16.6331L20.7241 7.36063L3.65491 1Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M44.4716 36.9127L38.8925 45.4211L50.8389 48.7047L54.261 37.0986L44.4716 36.9127Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M1.43555 37.0986L4.83695 48.7047L16.7626 45.4211L11.2042 36.9127L1.43555 37.0986Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M16.1197 22.5395L12.8013 27.5371L24.6232 28.074L24.2292 15.3734L16.1197 22.5395Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M39.5561 22.5394L31.3222 15.2288L31.0526 28.0739L42.8746 27.537L39.5561 22.5394Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M16.7626 45.4212L23.918 41.9724L17.7582 37.1813L16.7626 45.4212Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M31.7578 41.9724L38.8925 45.4212L37.9177 37.1813L31.7578 41.9724Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M38.8923 45.4212L31.7577 41.9724L32.3384 46.5983L32.2762 48.5602L38.8923 45.4212Z", fill: "#D5BFB2", stroke: "#D5BFB2", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M16.7625 45.4212L23.3994 48.5602L23.3579 46.5983L23.9179 41.9724L16.7625 45.4212Z", fill: "#D5BFB2", stroke: "#D5BFB2", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M23.5239 34.1249L17.5922 32.3902L21.7818 30.4696L23.5239 34.1249Z", fill: "#233447", stroke: "#233447", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M32.1517 34.1249L33.8939 30.4696L38.1042 32.3902L32.1517 34.1249Z", fill: "#233447", stroke: "#233447", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M16.7626 45.4212L17.7996 36.9128L11.2042 37.0987L16.7626 45.4212Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M37.8761 36.9128L38.8924 45.4212L44.4715 37.0987L37.8761 36.9128Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M42.8745 27.5371L31.0526 28.074L32.1518 34.1249L33.894 30.4696L38.1042 32.3902L42.8745 27.5371Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M17.5922 32.3902L21.7817 30.4696L23.5239 34.1249L24.6232 28.074L12.8012 27.5371L17.5922 32.3902Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M12.8013 27.5371L17.7582 37.1813L17.5923 32.3902L12.8013 27.5371Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M38.1044 32.3902L37.9177 37.1813L42.8746 27.5371L38.1044 32.3902Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M24.6232 28.0741L23.524 34.125L24.9136 41.2703L25.2247 31.8533L24.6232 28.0741Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M31.0526 28.0741L30.4719 31.8327L30.7623 41.2703L32.1519 34.125L31.0526 28.0741Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M32.1519 34.1249L30.7623 41.2702L31.7578 41.9724L37.9177 37.1813L38.1043 32.3901L32.1519 34.1249Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M17.5922 32.3901L17.7581 37.1813L23.918 41.9724L24.9135 41.2702L23.5239 34.1249L17.5922 32.3901Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M32.2763 48.5602L32.3385 46.5983L31.7993 46.1439H23.8765L23.358 46.5983L23.3995 48.5602L16.7626 45.4211L19.0855 47.3211L23.7935 50.5633H31.8615L36.5903 47.3211L38.8924 45.4211L32.2763 48.5602Z", fill: "#C0AC9D", stroke: "#C0AC9D", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M31.7578 41.9724L30.7622 41.2703H24.9135L23.918 41.9724L23.358 46.5983L23.8765 46.144H31.7993L32.3385 46.5983L31.7578 41.9724Z", fill: "#24292E", stroke: "#24292E", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M52.9128 17.5005L54.6757 8.95079L52.021 1L31.7578 15.9723L39.5561 22.5394L50.5692 25.7404L52.9958 22.9111L51.938 22.147L53.618 20.6188L52.3321 19.6276L54.0121 18.3472L52.9128 17.5005Z", fill: "#763E1A", stroke: "#763E1A", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M1 8.95079L2.78366 17.5005L1.64295 18.3472L3.34365 19.6276L2.05775 20.6188L3.73771 22.147L2.67996 22.9111L5.10657 25.7404L16.1196 22.5394L23.918 15.9723L3.65475 1L1 8.95079Z", fill: "#763E1A", stroke: "#763E1A", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M50.5692 25.7404L39.5561 22.5394L42.8746 27.5371L37.9177 37.1813L44.4716 37.0987H54.261L50.5692 25.7404Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M16.1196 22.5394L5.10651 25.7404L1.43549 37.0987H11.2041L17.7581 37.1813L12.8011 27.5371L16.1196 22.5394Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M31.0526 28.0741L31.7578 15.9724L34.9518 7.36072H20.7239L23.9179 15.9724L24.6231 28.0741L24.8927 31.8739L24.9135 41.2703H30.7622L30.783 31.8739L31.0526 28.0741Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.5", "stroke-linecap": "round", "stroke-linejoin": "round" }));
var Om = { DESKTOP: "Desktop", MOBILE: "Mobile", META_MASK_MOBILE_APP: "MetaMask mobile app", SCAN_TO_CONNECT: "Scan to connect and sign with", CONNECT_WITH_EXTENSION: "Connect With MetaMask Extension", INSTALL_MODAL: { TRUSTED_BY_USERS: "Trusted by over 30 million users to buy, store, send and swap crypto securely", LEADING_CRYPTO_WALLET: "The leading crypto wallet & gateway to blockchain apps built on Ethereum Mainnet, Polygon, Optimism, and many other networks", CONTROL_DIGITAL_INTERACTIONS: "Puts you in control of your digital interactions by making power of cryptography more accessible", INSTALL_META_MASK_EXTENSION: "Install MetaMask Extension" }, PENDING_MODAL: { OPEN_META_MASK_SELECT_CODE: "Please open the MetaMask wallet app and select the code on the screen OR disconnect", OPEN_META_MASK_CONTINUE: "Open the MetaMask app to continue with your session.", NUMBER_AFTER_OPEN_NOTICE: "If a number doesn't appear after opening MetaMask, please click disconnect and re-scan the QRCode.", DISCONNECT: "Disconnect" }, SELECT_MODAL: { CRYPTO_TAKE_CONTROL_TEXT: "Take control of your crypto and explore the blockchain with the wallet trusted by over 30 million people worldwide" }, META_MASK_MODAL: { ADDRESS_COPIED: "Address copied to clipboard!", DISCONNECT: "Disconnect", ACTIVE_NETWORK: "Active Network" } };
var Rm = class {
  constructor(e8) {
    var t2;
    this.translations = Om, this.supportedLocales = ["es", "fr", "he", "it", "pt", "tr"], this.baseUrl = null !== (t2 = null == e8 ? void 0 : e8.baseUrl) && void 0 !== t2 ? t2 : "https://raw.githubusercontent.com/MetaMask/metamask-sdk/refs/heads/gh-pages/locales";
  }
  getBrowserLanguage() {
    if ((navigator.languages || [navigator.language]).some((e9) => e9.toLowerCase().startsWith("en"))) return "en";
    const e8 = navigator.language.toLowerCase().split("-")[0];
    return this.supportedLocales.includes(e8) ? e8 : "en";
  }
  async init(e8) {
    const t2 = this.getBrowserLanguage() || e8.fallbackLng;
    await this.loadTranslations(t2);
  }
  async loadTranslations(e8) {
    const t2 = e8.split("-")[0];
    if ("en" !== t2 && this.supportedLocales.includes(t2)) try {
      const e9 = `${this.baseUrl}/${t2}.json`, n2 = await fetch(e9);
      if (!n2.ok) throw new Error(`HTTP error! status: ${n2.status}`);
      this.translations = await n2.json();
    } catch (e9) {
      console.warn(`❌ Failed to load ${t2} translations, falling back to English:`, e9), this.translations = Om;
    }
    else this.translations = Om;
  }
  t(e8) {
    return this.getNestedTranslation(e8, this.translations) || e8;
  }
  getNestedTranslation(e8, t2) {
    const n2 = e8.split(".");
    let r2 = t2;
    for (const e9 of n2) {
      if ("object" != typeof r2) return "";
      r2 = r2[e9];
    }
    return "string" == typeof r2 ? r2 : "";
  }
};
function Pm(e8, t2) {
  return e8.toString(2).padStart(t2, "0");
}
function Im(e8, t2) {
  const n2 = e8 % t2;
  return n2 >= 0 ? n2 : t2 + n2;
}
function Nm(e8, t2) {
  return new Array(e8).fill(t2);
}
function Dm(...e8) {
  let t2 = 0;
  for (const n3 of e8) t2 = Math.max(t2, n3.length);
  const n2 = [];
  for (let r2 = 0; r2 < t2; r2++) for (const t3 of e8) r2 >= t3.length || n2.push(t3[r2]);
  return new Uint8Array(n2);
}
function Bm(e8, t2, n2) {
  if (n2 < 0 || n2 + t2.length > e8.length) return false;
  for (let r2 = 0; r2 < t2.length; r2++) if (t2[r2] !== e8[n2 + r2]) return false;
  return true;
}
function $m(e8) {
  return { has: (t2) => e8.includes(t2), decode: (t2) => {
    if (!Array.isArray(t2) || t2.length && "string" != typeof t2[0]) throw new Error("alphabet.decode input should be array of strings");
    return t2.map((t3) => {
      if ("string" != typeof t3) throw new Error(`alphabet.decode: not string element=${t3}`);
      const n2 = e8.indexOf(t3);
      if (-1 === n2) throw new Error(`Unknown letter: "${t3}". Allowed: ${e8}`);
      return n2;
    });
  }, encode: (t2) => {
    if (!Array.isArray(t2) || t2.length && "number" != typeof t2[0]) throw new Error("alphabet.encode input should be an array of numbers");
    return t2.map((t3) => {
      if (function(e9) {
        if (!Number.isSafeInteger(e9)) throw new Error(`Wrong integer: ${e9}`);
      }(t3), t3 < 0 || t3 >= e8.length) throw new Error(`Digit index outside alphabet: ${t3} (alphabet: ${e8.length})`);
      return e8[t3];
    });
  } };
}
var jm = class _jm {
  static size(e8, t2) {
    if ("number" == typeof e8 && (e8 = { height: e8, width: e8 }), !Number.isSafeInteger(e8.height) && e8.height !== 1 / 0) throw new Error(`Bitmap: wrong height=${e8.height} (${typeof e8.height})`);
    if (!Number.isSafeInteger(e8.width) && e8.width !== 1 / 0) throw new Error(`Bitmap: wrong width=${e8.width} (${typeof e8.width})`);
    return void 0 !== t2 && (e8 = { width: Math.min(e8.width, t2.width), height: Math.min(e8.height, t2.height) }), e8;
  }
  static fromString(e8) {
    const t2 = (e8 = e8.replace(/^\n+/g, "").replace(/\n+$/g, "")).split("\n"), n2 = t2.length, r2 = new Array(n2);
    let i2;
    for (const e9 of t2) {
      const t3 = e9.split("").map((e10) => {
        if ("X" === e10) return true;
        if (" " === e10) return false;
        if ("?" !== e10) throw new Error(`Bitmap.fromString: unknown symbol=${e10}`);
      });
      if (i2 && t3.length !== i2) throw new Error(`Bitmap.fromString different row sizes: width=${i2} cur=${t3.length}`);
      i2 = t3.length, r2.push(t3);
    }
    return i2 || (i2 = 0), new _jm({ height: n2, width: i2 }, r2);
  }
  constructor(e8, t2) {
    const { height: n2, width: r2 } = _jm.size(e8);
    this.data = t2 || Array.from({ length: n2 }, () => Nm(r2, void 0)), this.height = n2, this.width = r2;
  }
  point(e8) {
    return this.data[e8.y][e8.x];
  }
  isInside(e8) {
    return 0 <= e8.x && e8.x < this.width && 0 <= e8.y && e8.y < this.height;
  }
  size(e8) {
    if (!e8) return { height: this.height, width: this.width };
    const { x: t2, y: n2 } = this.xy(e8);
    return { height: this.height - n2, width: this.width - t2 };
  }
  xy(e8) {
    if ("number" == typeof e8 && (e8 = { x: e8, y: e8 }), !Number.isSafeInteger(e8.x)) throw new Error(`Bitmap: wrong x=${e8.x}`);
    if (!Number.isSafeInteger(e8.y)) throw new Error(`Bitmap: wrong y=${e8.y}`);
    return e8.x = Im(e8.x, this.width), e8.y = Im(e8.y, this.height), e8;
  }
  rect(e8, t2, n2) {
    const { x: r2, y: i2 } = this.xy(e8), { height: o2, width: s2 } = _jm.size(t2, this.size({ x: r2, y: i2 }));
    for (let e9 = 0; e9 < o2; e9++) for (let t3 = 0; t3 < s2; t3++) this.data[i2 + e9][r2 + t3] = "function" == typeof n2 ? n2({ x: t3, y: e9 }, this.data[i2 + e9][r2 + t3]) : n2;
    return this;
  }
  rectRead(e8, t2, n2) {
    return this.rect(e8, t2, (e9, t3) => (n2(e9, t3), t3));
  }
  hLine(e8, t2, n2) {
    return this.rect(e8, { width: t2, height: 1 }, n2);
  }
  vLine(e8, t2, n2) {
    return this.rect(e8, { width: 1, height: t2 }, n2);
  }
  border(e8 = 2, t2) {
    const n2 = this.height + 2 * e8, r2 = this.width + 2 * e8, i2 = Nm(e8, t2), o2 = Array.from({ length: e8 }, () => Nm(r2, t2));
    return new _jm({ height: n2, width: r2 }, [...o2, ...this.data.map((e9) => [...i2, ...e9, ...i2]), ...o2]);
  }
  embed(e8, t2) {
    return this.rect(e8, t2.size(), ({ x: e9, y: n2 }) => t2.data[n2][e9]);
  }
  rectSlice(e8, t2 = this.size()) {
    const n2 = new _jm(_jm.size(t2, this.size(this.xy(e8))));
    return this.rect(e8, t2, ({ x: e9, y: t3 }, r2) => n2.data[t3][e9] = r2), n2;
  }
  inverse() {
    const { height: e8, width: t2 } = this;
    return new _jm({ height: t2, width: e8 }).rect({ x: 0, y: 0 }, 1 / 0, ({ x: e9, y: t3 }) => this.data[e9][t3]);
  }
  scale(e8) {
    if (!Number.isSafeInteger(e8) || e8 > 1024) throw new Error(`Wrong scale factor: ${e8}`);
    const { height: t2, width: n2 } = this;
    return new _jm({ height: e8 * t2, width: e8 * n2 }).rect({ x: 0, y: 0 }, 1 / 0, ({ x: t3, y: n3 }) => this.data[Math.floor(n3 / e8)][Math.floor(t3 / e8)]);
  }
  clone() {
    return new _jm(this.size()).rect({ x: 0, y: 0 }, this.size(), ({ x: e8, y: t2 }) => this.data[t2][e8]);
  }
  assertDrawn() {
    this.rectRead(0, 1 / 0, (e8, t2) => {
      if ("boolean" != typeof t2) throw new Error("Invalid color type=" + typeof t2);
    });
  }
  toString() {
    return this.data.map((e8) => e8.map((e9) => void 0 === e9 ? "?" : e9 ? "X" : " ").join("")).join("\n");
  }
  toASCII() {
    const { height: e8, width: t2, data: n2 } = this;
    let r2 = "";
    for (let i2 = 0; i2 < e8; i2 += 2) {
      for (let o2 = 0; o2 < t2; o2++) {
        const t3 = n2[i2][o2], s2 = i2 + 1 >= e8 || n2[i2 + 1][o2];
        t3 || s2 ? !t3 && s2 ? r2 += "▀" : t3 && !s2 ? r2 += "▄" : t3 && s2 && (r2 += " ") : r2 += "█";
      }
      r2 += "\n";
    }
    return r2;
  }
  toTerm() {
    const e8 = "\x1B[0m", t2 = `\x1B[1;47m  ${e8}`, n2 = `\x1B[40m  ${e8}`;
    return this.data.map((e9) => e9.map((e10) => e10 ? n2 : t2).join("")).join("\n");
  }
  toSVG() {
    let e8 = `<svg xmlns:svg="http://www.w3.org/2000/svg" viewBox="0 0 ${this.width} ${this.height}" version="1.1" xmlns="http://www.w3.org/2000/svg">`;
    return this.rectRead(0, 1 / 0, ({ x: t2, y: n2 }, r2) => {
      r2 && (e8 += `<rect x="${t2}" y="${n2}" width="1" height="1" />`);
    }), e8 += "</svg>", e8;
  }
  toGIF() {
    const e8 = (e9) => [255 & e9, e9 >>> 8 & 255], t2 = [...e8(this.width), ...e8(this.height)], n2 = [];
    this.rectRead(0, 1 / 0, (e9, t3) => n2.push(+(true === t3)));
    const r2 = 126, i2 = [71, 73, 70, 56, 55, 97, ...t2, 246, 0, 0, 255, 255, 255, ...Nm(381, 0), 44, 0, 0, 0, 0, ...t2, 0, 7], o2 = Math.floor(n2.length / r2);
    for (let e9 = 0; e9 < o2; e9++) i2.push(127, 128, ...n2.slice(r2 * e9, r2 * (e9 + 1)).map((e10) => +e10));
    return i2.push(n2.length % r2 + 1, 128, ...n2.slice(o2 * r2).map((e9) => +e9)), i2.push(1, 129, 0, 59), new Uint8Array(i2);
  }
  toImage(e8 = false) {
    const { height: t2, width: n2 } = this.size(), r2 = new Uint8Array(t2 * n2 * (e8 ? 3 : 4));
    let i2 = 0;
    for (let o2 = 0; o2 < t2; o2++) for (let t3 = 0; t3 < n2; t3++) {
      const n3 = this.data[o2][t3] ? 0 : 255;
      r2[i2++] = n3, r2[i2++] = n3, r2[i2++] = n3, e8 || (r2[i2++] = 255);
    }
    return { height: t2, width: n2, data: r2 };
  }
};
var Km = ["low", "medium", "quartile", "high"];
var Fm = ["numeric", "alphanumeric", "byte", "kanji", "eci"];
var Um = [26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
var Hm = { low: [7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], medium: [10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], quartile: [13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], high: [17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30] };
var zm = { low: [1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25], medium: [1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49], quartile: [1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68], high: [1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81] };
var qm = { size: { encode: (e8) => 21 + 4 * (e8 - 1), decode: (e8) => (e8 - 17) / 4 }, sizeType: (e8) => Math.floor((e8 + 7) / 17), alignmentPatterns(e8) {
  if (1 === e8) return [];
  const t2 = qm.size.encode(e8) - 6 - 1, n2 = t2 - 6, r2 = Math.ceil(n2 / 28);
  let i2 = Math.floor(n2 / r2);
  i2 % 2 ? i2 += 1 : n2 % r2 * 2 >= r2 && (i2 += 2);
  const o2 = [6];
  for (let e9 = 1; e9 < r2; e9++) o2.push(t2 - (r2 - e9) * i2);
  return o2.push(t2), o2;
}, ECCode: { low: 1, medium: 0, quartile: 3, high: 2 }, formatMask: 21522, formatBits(e8, t2) {
  const n2 = qm.ECCode[e8] << 3 | t2;
  let r2 = n2;
  for (let e9 = 0; e9 < 10; e9++) r2 = r2 << 1 ^ 1335 * (r2 >> 9);
  return (n2 << 10 | r2) ^ qm.formatMask;
}, versionBits(e8) {
  let t2 = e8;
  for (let e9 = 0; e9 < 12; e9++) t2 = t2 << 1 ^ 7973 * (t2 >> 11);
  return e8 << 12 | t2;
}, alphabet: { numeric: $m("0123456789"), alphanumerc: $m("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:") }, lengthBits: (e8, t2) => ({ numeric: [10, 12, 14], alphanumeric: [9, 11, 13], byte: [8, 16, 16], kanji: [8, 10, 12], eci: [0, 0, 0] })[t2][qm.sizeType(e8)], modeBits: { numeric: "0001", alphanumeric: "0010", byte: "0100", kanji: "1000", eci: "0111" }, capacity(e8, t2) {
  const n2 = Um[e8 - 1], r2 = Hm[t2][e8 - 1], i2 = zm[t2][e8 - 1], o2 = Math.floor(n2 / i2) - r2, s2 = i2 - n2 % i2;
  return { words: r2, numBlocks: i2, shortBlocks: s2, blockLen: o2, capacity: 8 * (n2 - r2 * i2), total: (r2 + o2) * i2 + i2 - s2 };
} };
var Vm = [(e8, t2) => (e8 + t2) % 2 == 0, (e8, t2) => t2 % 2 == 0, (e8, t2) => e8 % 3 == 0, (e8, t2) => (e8 + t2) % 3 == 0, (e8, t2) => (Math.floor(t2 / 2) + Math.floor(e8 / 3)) % 2 == 0, (e8, t2) => e8 * t2 % 2 + e8 * t2 % 3 == 0, (e8, t2) => (e8 * t2 % 2 + e8 * t2 % 3) % 2 == 0, (e8, t2) => ((e8 + t2) % 2 + e8 * t2 % 3) % 2 == 0];
var Wm = { tables: ((e8) => {
  const t2 = Nm(256, 0), n2 = Nm(256, 0);
  for (let e9 = 0, r2 = 1; e9 < 256; e9++) t2[e9] = r2, n2[r2] = e9, r2 <<= 1, 256 & r2 && (r2 ^= 285);
  return { exp: t2, log: n2 };
})(), exp: (e8) => Wm.tables.exp[e8], log(e8) {
  if (0 === e8) throw new Error(`GF.log: wrong arg=${e8}`);
  return Wm.tables.log[e8] % 255;
}, mul: (e8, t2) => 0 === e8 || 0 === t2 ? 0 : Wm.tables.exp[(Wm.tables.log[e8] + Wm.tables.log[t2]) % 255], add: (e8, t2) => e8 ^ t2, pow: (e8, t2) => Wm.tables.exp[Wm.tables.log[e8] * t2 % 255], inv(e8) {
  if (0 === e8) throw new Error(`GF.inverse: wrong arg=${e8}`);
  return Wm.tables.exp[255 - Wm.tables.log[e8]];
}, polynomial(e8) {
  if (0 == e8.length) throw new Error("GF.polymomial: wrong length");
  if (0 !== e8[0]) return e8;
  let t2 = 0;
  for (; t2 < e8.length - 1 && 0 == e8[t2]; t2++) ;
  return e8.slice(t2);
}, monomial(e8, t2) {
  if (e8 < 0) throw new Error(`GF.monomial: wrong degree=${e8}`);
  if (0 == t2) return [0];
  let n2 = Nm(e8 + 1, 0);
  return n2[0] = t2, Wm.polynomial(n2);
}, degree: (e8) => e8.length - 1, coefficient: (e8, t2) => e8[Wm.degree(e8) - t2], mulPoly(e8, t2) {
  if (0 === e8[0] || 0 === t2[0]) return [0];
  const n2 = Nm(e8.length + t2.length - 1, 0);
  for (let r2 = 0; r2 < e8.length; r2++) for (let i2 = 0; i2 < t2.length; i2++) n2[r2 + i2] = Wm.add(n2[r2 + i2], Wm.mul(e8[r2], t2[i2]));
  return Wm.polynomial(n2);
}, mulPolyScalar(e8, t2) {
  if (0 == t2) return [0];
  if (1 == t2) return e8;
  const n2 = Nm(e8.length, 0);
  for (let r2 = 0; r2 < e8.length; r2++) n2[r2] = Wm.mul(e8[r2], t2);
  return Wm.polynomial(n2);
}, mulPolyMonomial(e8, t2, n2) {
  if (t2 < 0) throw new Error("GF.mulPolyMonomial: wrong degree");
  if (0 == n2) return [0];
  const r2 = Nm(e8.length + t2, 0);
  for (let t3 = 0; t3 < e8.length; t3++) r2[t3] = Wm.mul(e8[t3], n2);
  return Wm.polynomial(r2);
}, addPoly(e8, t2) {
  if (0 === e8[0]) return t2;
  if (0 === t2[0]) return e8;
  let n2 = e8, r2 = t2;
  n2.length > r2.length && ([n2, r2] = [r2, n2]);
  let i2 = Nm(r2.length, 0), o2 = r2.length - n2.length, s2 = r2.slice(0, o2);
  for (let e9 = 0; e9 < s2.length; e9++) i2[e9] = s2[e9];
  for (let e9 = o2; e9 < r2.length; e9++) i2[e9] = Wm.add(n2[e9 - o2], r2[e9]);
  return Wm.polynomial(i2);
}, remainderPoly(e8, t2) {
  const n2 = Array.from(e8);
  for (let r2 = 0; r2 < e8.length - t2.length + 1; r2++) {
    const e9 = n2[r2];
    if (0 !== e9) for (let i2 = 1; i2 < t2.length; i2++) 0 !== t2[i2] && (n2[r2 + i2] = Wm.add(n2[r2 + i2], Wm.mul(t2[i2], e9)));
  }
  return n2.slice(e8.length - t2.length + 1, n2.length);
}, divisorPoly(e8) {
  let t2 = [1];
  for (let n2 = 0; n2 < e8; n2++) t2 = Wm.mulPoly(t2, [1, Wm.pow(2, n2)]);
  return t2;
}, evalPoly(e8, t2) {
  if (0 == t2) return Wm.coefficient(e8, 0);
  let n2 = e8[0];
  for (let r2 = 1; r2 < e8.length; r2++) n2 = Wm.add(Wm.mul(t2, n2), e8[r2]);
  return n2;
}, euclidian(e8, t2, n2) {
  Wm.degree(e8) < Wm.degree(t2) && ([e8, t2] = [t2, e8]);
  let r2 = e8, i2 = t2, o2 = [0], s2 = [1];
  for (; 2 * Wm.degree(i2) >= n2; ) {
    let e9 = r2, t3 = o2;
    if (r2 = i2, o2 = s2, 0 === r2[0]) throw new Error("rLast[0] === 0");
    i2 = e9;
    let n3 = [0];
    const a3 = Wm.inv(r2[0]);
    for (; Wm.degree(i2) >= Wm.degree(r2) && 0 !== i2[0]; ) {
      const e10 = Wm.degree(i2) - Wm.degree(r2), t4 = Wm.mul(i2[0], a3);
      n3 = Wm.addPoly(n3, Wm.monomial(e10, t4)), i2 = Wm.addPoly(i2, Wm.mulPolyMonomial(r2, e10, t4));
    }
    if (n3 = Wm.mulPoly(n3, o2), s2 = Wm.addPoly(n3, t3), Wm.degree(i2) >= Wm.degree(r2)) throw new Error(`Division failed r: ${i2}, rLast: ${r2}`);
  }
  const a2 = Wm.coefficient(s2, 0);
  if (0 == a2) throw new Error("sigmaTilde(0) was zero");
  const c2 = Wm.inv(a2);
  return [Wm.mulPolyScalar(s2, c2), Wm.mulPolyScalar(i2, c2)];
} };
function Gm(e8, t2, n2, r2) {
  let i2 = "", o2 = n2.length;
  if ("numeric" === r2) {
    const e9 = qm.alphabet.numeric.decode(n2.split("")), t3 = e9.length;
    for (let n3 = 0; n3 < t3 - 2; n3 += 3) i2 += Pm(100 * e9[n3] + 10 * e9[n3 + 1] + e9[n3 + 2], 10);
    t3 % 3 == 1 ? i2 += Pm(e9[t3 - 1], 4) : t3 % 3 == 2 && (i2 += Pm(10 * e9[t3 - 2] + e9[t3 - 1], 7));
  } else if ("alphanumeric" === r2) {
    const e9 = qm.alphabet.alphanumerc.decode(n2.split("")), t3 = e9.length;
    for (let n3 = 0; n3 < t3 - 1; n3 += 2) i2 += Pm(45 * e9[n3] + e9[n3 + 1], 11);
    t3 % 2 == 1 && (i2 += Pm(e9[t3 - 1], 6));
  } else {
    if ("byte" !== r2) throw new Error("encode: unsupported type");
    {
      const e9 = function(e10) {
        if ("string" != typeof e10) throw new Error("utf8ToBytes expected string, got " + typeof e10);
        return new Uint8Array(new TextEncoder().encode(e10));
      }(n2);
      o2 = e9.length, i2 = Array.from(e9).map((e10) => Pm(e10, 8)).join("");
    }
  }
  const { capacity: s2 } = qm.capacity(e8, t2), a2 = Pm(o2, qm.lengthBits(e8, r2));
  let c2 = qm.modeBits[r2] + a2 + i2;
  if (c2.length > s2) throw new Error("Capacity overflow");
  c2 += "0".repeat(Math.min(4, Math.max(0, s2 - c2.length))), c2.length % 8 && (c2 += "0".repeat(8 - c2.length % 8));
  for (let e9 = 0; c2.length !== s2; e9++) c2 += "1110110000010001"[e9 % 16];
  const l2 = Uint8Array.from(c2.match(/(.{8})/g).map((e9) => Number(`0b${e9}`)));
  return function(e9, t3) {
    const { words: n3, shortBlocks: r3, numBlocks: i3, blockLen: o3, total: s3 } = qm.capacity(e9, t3), a3 = (c3 = n3, { encode(e10) {
      const t4 = Wm.divisorPoly(c3), n4 = Array.from(e10);
      return n4.push(...t4.slice(0, -1).fill(0)), Uint8Array.from(Wm.remainderPoly(n4, t4));
    }, decode(e10) {
      const t4 = e10.slice(), n4 = Wm.polynomial(Array.from(e10));
      let r4 = Nm(c3, 0), i4 = false;
      for (let e11 = 0; e11 < c3; e11++) {
        const t5 = Wm.evalPoly(n4, Wm.exp(e11));
        r4[r4.length - 1 - e11] = t5, 0 !== t5 && (i4 = true);
      }
      if (!i4) return t4;
      r4 = Wm.polynomial(r4);
      const o4 = Wm.monomial(c3, 1), [s4, a4] = Wm.euclidian(o4, r4, c3), l3 = Nm(Wm.degree(s4), 0);
      let d2 = 0;
      for (let e11 = 1; e11 < 256 && d2 < l3.length; e11++) 0 === Wm.evalPoly(s4, e11) && (l3[d2++] = Wm.inv(e11));
      if (d2 !== l3.length) throw new Error("RS.decode: wrong errors number");
      for (let e11 = 0; e11 < l3.length; e11++) {
        const n5 = t4.length - 1 - Wm.log(l3[e11]);
        if (n5 < 0) throw new Error("RS.decode: wrong error location");
        const r5 = Wm.inv(l3[e11]);
        let i5 = 1;
        for (let t5 = 0; t5 < l3.length; t5++) e11 !== t5 && (i5 = Wm.mul(i5, Wm.add(1, Wm.mul(l3[t5], r5))));
        t4[n5] = Wm.add(t4[n5], Wm.mul(Wm.evalPoly(a4, r5), Wm.inv(i5)));
      }
      return t4;
    } });
    var c3;
    return { encode(e10) {
      const t4 = [], n4 = [];
      for (let s5 = 0; s5 < i3; s5++) {
        const i4 = o3 + (s5 < r3 ? 0 : 1);
        t4.push(e10.subarray(0, i4)), n4.push(a3.encode(e10.subarray(0, i4))), e10 = e10.subarray(i4);
      }
      const s4 = Dm(...t4), c4 = Dm(...n4), l3 = new Uint8Array(s4.length + c4.length);
      return l3.set(s4), l3.set(c4, s4.length), l3;
    }, decode(e10) {
      if (e10.length !== s3) throw new Error(`interleave.decode: len(data)=${e10.length}, total=${s3}`);
      const t4 = [];
      for (let e11 = 0; e11 < i3; e11++) {
        const i4 = e11 < r3;
        t4.push(new Uint8Array(n3 + o3 + (i4 ? 0 : 1)));
      }
      let c4 = 0;
      for (let n4 = 0; n4 < o3; n4++) for (let r4 = 0; r4 < i3; r4++) t4[r4][n4] = e10[c4++];
      for (let n4 = r3; n4 < i3; n4++) t4[n4][o3] = e10[c4++];
      for (let s4 = o3; s4 < o3 + n3; s4++) for (let n4 = 0; n4 < i3; n4++) {
        const i4 = n4 < r3;
        t4[n4][s4 + (i4 ? 0 : 1)] = e10[c4++];
      }
      const l3 = [];
      for (const e11 of t4) l3.push(...Array.from(a3.decode(e11)).slice(0, -n3));
      return Uint8Array.from(l3);
    } };
  }(e8, t2).encode(l2);
}
function Ym(e8, t2, n2, r2, i2 = false) {
  const o2 = function(e9, t3, n3, r3 = false) {
    const i3 = qm.size.encode(e9);
    let o3 = new jm(i3 + 2);
    const s3 = new jm(3).rect(0, 3, true).border(1, false).border(1, true).border(1, false);
    o3 = o3.embed(0, s3).embed({ x: -s3.width, y: 0 }, s3).embed({ x: 0, y: -s3.height }, s3), o3 = o3.rectSlice(1, i3);
    const a3 = new jm(1).rect(0, 1, true).border(1, false).border(1, true), c2 = qm.alignmentPatterns(e9);
    for (const e10 of c2) for (const t4 of c2) void 0 === o3.data[e10][t4] && o3.embed({ x: t4 - 2, y: e10 - 2 }, a3);
    o3 = o3.hLine({ x: 0, y: 6 }, 1 / 0, ({ x: e10 }, t4) => void 0 === t4 ? e10 % 2 == 0 : t4).vLine({ x: 6, y: 0 }, 1 / 0, ({ y: e10 }, t4) => void 0 === t4 ? e10 % 2 == 0 : t4);
    {
      const e10 = qm.formatBits(t3, n3), s4 = (t4) => !r3 && 1 == (e10 >> t4 & 1);
      for (let e11 = 0; e11 < 6; e11++) o3.data[e11][8] = s4(e11);
      for (let e11 = 6; e11 < 8; e11++) o3.data[e11 + 1][8] = s4(e11);
      for (let e11 = 8; e11 < 15; e11++) o3.data[i3 - 15 + e11][8] = s4(e11);
      for (let e11 = 0; e11 < 8; e11++) o3.data[8][i3 - e11 - 1] = s4(e11);
      for (let e11 = 8; e11 < 9; e11++) o3.data[8][15 - e11 - 1 + 1] = s4(e11);
      for (let e11 = 9; e11 < 15; e11++) o3.data[8][15 - e11 - 1] = s4(e11);
      o3.data[i3 - 8][8] = !r3;
    }
    if (e9 >= 7) {
      const t4 = qm.versionBits(e9);
      for (let e10 = 0; e10 < 18; e10 += 1) {
        const n4 = !r3 && 1 == (t4 >> e10 & 1), s4 = Math.floor(e10 / 3), a4 = e10 % 3 + i3 - 8 - 3;
        o3.data[s4][a4] = n4, o3.data[a4][s4] = n4;
      }
    }
    return o3;
  }(e8, t2, r2, i2);
  let s2 = 0;
  const a2 = 8 * n2.length;
  if (function(e9, t3, n3) {
    const r3 = e9.height, i3 = Vm[t3];
    let o3 = -1, s3 = r3 - 1;
    for (let t4 = r3 - 1; t4 > 0; t4 -= 2) {
      for (6 == t4 && (t4 = 5); ; s3 += o3) {
        for (let r4 = 0; r4 < 2; r4 += 1) {
          const o4 = t4 - r4;
          void 0 === e9.data[s3][o4] && n3(o4, s3, i3(o4, s3));
        }
        if (s3 + o3 < 0 || s3 + o3 >= r3) break;
      }
      o3 = -o3;
    }
  }(o2, r2, (e9, t3, r3) => {
    let i3 = false;
    s2 < a2 && (i3 = 0 != (n2[s2 >>> 3] >> (7 - s2 & 7) & 1), s2++), o2.data[t3][e9] = i3 !== r3;
  }), s2 !== a2) throw new Error("QR: bytes left after draw");
  return o2;
}
function Zm(e8) {
  const t2 = e8.inverse(), n2 = (e9) => {
    let t3 = 0;
    for (let n3, r3 = 0, i3 = 1; r3 < e9.length; r3++) n3 === e9[r3] && (i3++, r3 !== e9.length - 1) || (i3 >= 5 && (t3 += i3 - 5 + 3), n3 = e9[r3], i3 = 1);
    return t3;
  };
  let r2 = 0;
  e8.data.forEach((e9) => r2 += n2(e9)), t2.data.forEach((e9) => r2 += n2(e9));
  let i2 = 0, o2 = e8.data;
  const s2 = e8.width - 1, a2 = e8.height - 1;
  for (let e9 = 0; e9 < s2; e9++) for (let t3 = 0; t3 < a2; t3++) {
    const n3 = e9 + 1, r3 = t3 + 1;
    o2[e9][t3] === o2[n3][t3] && o2[n3][t3] === o2[e9][r3] && o2[n3][t3] === o2[n3][r3] && (i2 += 3);
  }
  const c2 = (e9) => {
    const t3 = [true, false, true, true, true, false, true], n3 = [false, false, false, false], r3 = [...t3, ...n3], i3 = [...n3, ...t3];
    let o3 = 0;
    for (let t4 = 0; t4 < e9.length; t4++) Bm(e9, r3, t4) && (o3 += 40), Bm(e9, i3, t4) && (o3 += 40);
    return o3;
  };
  let l2 = 0;
  for (const t3 of e8.data) l2 += c2(t3);
  for (const e9 of t2.data) l2 += c2(e9);
  let d2 = 0;
  e8.rectRead(0, 1 / 0, (e9, t3) => d2 += t3 ? 1 : 0);
  const u2 = d2 / (e8.height * e8.width) * 100, h2 = 10 * Math.floor(Math.abs(u2 - 50) / 5);
  return r2 + i2 + l2 + h2;
}
function Jm(e8, t2 = "raw", n2 = {}) {
  const r2 = void 0 !== n2.ecc ? n2.ecc : "medium";
  !function(e9) {
    if (!Km.includes(e9)) throw new Error(`Invalid error correction mode=${e9}. Expected: ${Km}`);
  }(r2);
  const i2 = void 0 !== n2.encoding ? n2.encoding : function(e9) {
    let t3 = "numeric";
    for (let n3 of e9) if (!qm.alphabet.numeric.has(n3) && (t3 = "alphanumeric", !qm.alphabet.alphanumerc.has(n3))) return "byte";
    return t3;
  }(e8);
  !function(e9) {
    if (!Fm.includes(e9)) throw new Error(`Encoding: invalid mode=${e9}. Expected: ${Fm}`);
    if ("kanji" === e9 || "eci" === e9) throw new Error(`Encoding: ${e9} is not supported (yet?).`);
  }(i2), void 0 !== n2.mask && function(e9) {
    if (![0, 1, 2, 3, 4, 5, 6, 7].includes(e9) || !Vm[e9]) throw new Error(`Invalid mask=${e9}. Expected number [0..7]`);
  }(n2.mask);
  let o2, s2 = n2.version, a2 = new Error("Unknown error");
  if (void 0 !== s2) !function(e9) {
    if (!Number.isSafeInteger(e9) || e9 < 1 || e9 > 40) throw new Error(`Invalid version=${e9}. Expected number [1..40]`);
  }(s2), o2 = Gm(s2, r2, e8, i2);
  else for (let t3 = 1; t3 <= 40; t3++) try {
    o2 = Gm(t3, r2, e8, i2), s2 = t3;
    break;
  } catch (e9) {
    a2 = e9;
  }
  if (!s2 || !o2) throw a2;
  let c2 = function(e9, t3, n3, r3) {
    if (void 0 === r3) {
      const i3 = function() {
        let e10, t4 = 1 / 0;
        return { add(n4, r4) {
          n4 >= t4 || (e10 = r4, t4 = n4);
        }, get: () => e10, score: () => t4 };
      }();
      for (let r4 = 0; r4 < Vm.length; r4++) i3.add(Zm(Ym(e9, t3, n3, r4, true)), r4);
      r3 = i3.get();
    }
    if (void 0 === r3) throw new Error("Cannot find mask");
    return Ym(e9, t3, n3, r3);
  }(s2, r2, o2, n2.mask);
  c2.assertDrawn();
  const l2 = void 0 === n2.border ? 2 : n2.border;
  if (!Number.isSafeInteger(l2)) throw new Error("Wrong border type=" + typeof l2);
  if (c2 = c2.border(l2, false), void 0 !== n2.scale && (c2 = c2.scale(n2.scale)), "raw" === t2) return c2.data;
  if ("ascii" === t2) return c2.toASCII();
  if ("svg" === t2) return c2.toSVG();
  if ("gif" === t2) return c2.toGIF();
  if ("term" === t2) return c2.toTerm();
  throw new Error(`Unknown output: ${t2}`);
}
var Xm = ({ Icon: e8, text: t2 }) => jg("div", { class: "flexContainer", style: { padding: "6", flexDirection: "row" } }, jg("div", { class: "flexItem1" }, jg(e8, null)), jg("div", { class: "flexItem11" }, jg("span", { style: { lineHeight: "2", color: "black" } }, t2)));
var Qm = () => jg("svg", { width: "20", height: "18", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, jg("path", { d: "M20.0002 7.9702V10.0302C20.0002 10.5802 19.5602 11.0302 19.0002 11.0502H17.0402C15.9602 11.0502 14.9702 10.2602 14.8802 9.1802C14.8202 8.5502 15.0602 7.9602 15.4802 7.5502C15.8502 7.1702 16.3602 6.9502 16.9202 6.9502H19.0002C19.5602 6.9702 20.0002 7.4202 20.0002 7.9702Z", fill: "#037DD6" }), jg("path", { d: "M18.47 12.55H17.04C15.14 12.55 13.54 11.12 13.38 9.3C13.29 8.26 13.67 7.22 14.43 6.48C15.07 5.82 15.96 5.45 16.92 5.45H18.47C18.76 5.45 19 5.21 18.97 4.92C18.75 2.49 17.14 0.83 14.75 0.55C14.51 0.51 14.26 0.5 14 0.5H5C4.72 0.5 4.45 0.52 4.19 0.56C1.64 0.88 0 2.78 0 5.5V12.5C0 15.26 2.24 17.5 5 17.5H14C16.8 17.5 18.73 15.75 18.97 13.08C19 12.79 18.76 12.55 18.47 12.55ZM11 6.75H5C4.59 6.75 4.25 6.41 4.25 6C4.25 5.59 4.59 5.25 5 5.25H11C11.41 5.25 11.75 5.59 11.75 6C11.75 6.41 11.41 6.75 11 6.75Z", fill: "#037DD6" }));
var ey = () => jg("svg", { width: "20", height: "18", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, jg("path", { d: "M14.44 0.0999756C12.63 0.0999756 11.01 0.979976 10 2.32998C8.99 0.979976 7.37 0.0999756 5.56 0.0999756C2.49 0.0999756 0 2.59998 0 5.68998C0 6.87998 0.19 7.97998 0.52 8.99998C2.1 14 6.97 16.99 9.38 17.81C9.72 17.93 10.28 17.93 10.62 17.81C13.03 16.99 17.9 14 19.48 8.99998C19.81 7.97998 20 6.87998 20 5.68998C20 2.59998 17.51 0.0999756 14.44 0.0999756Z", fill: "#037DD6" }));
var ty = () => jg("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, jg("path", { d: "M16.28 7.53V6.28C16.28 3.58 15.63 0 10 0C4.37 0 3.72 3.58 3.72 6.28V7.53C0.92 7.88 0 9.3 0 12.79V14.65C0 18.75 1.25 20 5.35 20H14.65C18.75 20 20 18.75 20 14.65V12.79C20 9.3 19.08 7.88 16.28 7.53ZM10 16.74C8.33 16.74 6.98 15.38 6.98 13.72C6.98 12.05 8.34 10.7 10 10.7C11.66 10.7 13.02 12.06 13.02 13.72C13.02 15.39 11.67 16.74 10 16.74ZM5.35 7.44C5.27 7.44 5.2 7.44 5.12 7.44V6.28C5.12 3.35 5.95 1.4 10 1.4C14.05 1.4 14.88 3.35 14.88 6.28V7.45C14.8 7.45 14.73 7.45 14.65 7.45H5.35V7.44Z", fill: "#037DD6" }));
var ny = () => jg("svg", { width: "20", height: "20", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, jg("path", { d: "M16.4405 8.8999C20.0405 9.2099 21.5105 11.0599 21.5105 15.1099V15.2399C21.5105 19.7099 19.7205 21.4999 15.2505 21.4999H8.74047C4.27047 21.4999 2.48047 19.7099 2.48047 15.2399V15.1099C2.48047 11.0899 3.93047 9.2399 7.47047 8.9099", stroke: "white", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M12 2V14.88", stroke: "white", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M15.3504 12.6499L12.0004 15.9999L8.65039 12.6499", stroke: "white", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }));
var ry;
!function(e8) {
  e8.SDK_MODAL_VIEWED = "sdk_modal_viewed", e8.SDK_MODAL_BUTTON_CLICKED = "sdk_modal_button_clicked", e8.SDK_MODAL_TOGGLE_CHANGED = "sdk_modal_toggle_changed";
}(ry || (ry = {}));
var iy = class {
  constructor(e8) {
    fg(this, e8), this.close = Vg(this, "close", 7), this.startDesktopOnboarding = Vg(this, "startDesktopOnboarding", 7), this.trackAnalytics = Vg(this, "trackAnalytics", 7), this.link = void 0, this.sdkVersion = void 0, this.preferDesktop = void 0, this.tab = 1, this.isDefaultTab = true, this.translationsLoaded = false, this.onClose = this.onClose.bind(this), this.onStartDesktopOnboardingHandler = this.onStartDesktopOnboardingHandler.bind(this), this.setTab = this.setTab.bind(this), this.render = this.render.bind(this), this.setTab(this.preferDesktop ? 1 : 2), this.i18nInstance = new Rm();
  }
  componentDidLoad() {
    this.trackAnalytics.emit({ event: ry.SDK_MODAL_VIEWED, params: { extensionInstalled: false, tab: 1 === this.tab ? "desktop" : "mobile" } });
  }
  async connectedCallback() {
    await this.i18nInstance.init({ fallbackLng: "en" }), this.translationsLoaded = true;
  }
  updatePreferDesktop(e8) {
    e8 ? this.setTab(1) : this.setTab(2);
  }
  onClose() {
    this.close.emit();
  }
  onStartDesktopOnboardingHandler() {
    this.trackAnalytics.emit({ event: ry.SDK_MODAL_BUTTON_CLICKED, params: { button_type: "install_extension", tab: "desktop" } }), this.startDesktopOnboarding.emit();
  }
  setTab(e8, t2 = false) {
    t2 && this.trackAnalytics.emit({ event: ry.SDK_MODAL_TOGGLE_CHANGED, params: { toggle: 1 === this.tab ? "desktop_to_mobile" : "mobile_to_desktop" } }), this.tab = e8, this.isDefaultTab = false;
  }
  render() {
    if (!this.translationsLoaded) return null;
    const e8 = (e9) => this.i18nInstance.t(e9), t2 = this.isDefaultTab ? this.preferDesktop ? 1 : 2 : this.tab, n2 = Jm(this.link, "svg", { ecc: "medium", scale: 2 });
    return jg(Am, { className: "install-model" }, jg("div", { class: "backdrop", onClick: () => this.onClose() }), jg("div", { class: "modal" }, jg("div", { class: "closeButtonContainer" }, jg("div", { class: "right" }, jg("span", { class: "closeButton", onClick: () => this.onClose() }, jg(Lm, null)))), jg("div", { class: "logoContainer" }, jg(Tm, null)), jg("div", null, jg("div", { class: "tabcontainer" }, jg("div", { class: "flexContainer" }, jg("div", { onClick: () => this.setTab(1, true), class: "tab flexItem " + (1 === t2 ? "tabactive" : "") }, e8("DESKTOP")), jg("div", { onClick: () => this.setTab(2, true), class: "tab flexItem " + (2 === t2 ? "tabactive" : "") }, e8("MOBILE")))), jg("div", { style: { display: 1 === t2 ? "none" : "block" } }, jg("div", { class: "flexContainer" }, jg("div", { class: "flexItem", style: { textAlign: "center", marginTop: "4" } }, n2 && jg("div", { id: "sdk-mm-qrcode", class: "center", innerHTML: n2 }), jg("div", { class: "connectMobileText" }, e8("SCAN_TO_CONNECT"), " ", jg("br", null), jg("span", { class: "blue" }, jg("b", null, e8("META_MASK_MOBILE_APP"))))))), jg("div", { style: { display: 2 === t2 ? "none" : "block" } }, jg("div", { class: "item" }, jg(Xm, { Icon: ey, text: e8("INSTALL_MODAL.TRUSTED_BY_USERS") })), jg("div", { class: "item" }, jg(Xm, { Icon: Qm, text: e8("INSTALL_MODAL.LEADING_CRYPTO_WALLET") })), jg("div", { class: "item" }, jg(Xm, { Icon: ty, text: e8("INSTALL_MODAL.CONTROL_DIGITAL_INTERACTIONS") })), jg("button", { class: "button", onClick: () => this.onStartDesktopOnboardingHandler() }, jg(ny, null), jg("span", { class: "installExtensionText" }, e8("INSTALL_MODAL.INSTALL_META_MASK_EXTENSION"))))), jg(Mm, { version: this.sdkVersion })));
  }
  get el() {
    return qg(this);
  }
  static get watchers() {
    return { preferDesktop: ["updatePreferDesktop"] };
  }
};
iy.style = ".flexContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.flexItem {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem11 {\n    flex: 11;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem1 {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab {\n    padding: 8px;\n    cursor: pointer;\n    background-color: #F2F4F6;\n    font-size: 12px;\n    text-align: center;\n    color: #24292E;\n}\n\n.tabcontainer {\n    padding: 4px;\n    background-color: #F2F4F6;\n    border-radius: 8px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n.tabactive {\n    background-color: white;\n    -webkit-transition: background-color 300ms linear;\n    -ms-transition: background-color 300ms linear;\n    transition: background-color 300ms linear;\n    border-radius: 8px;\n}\n\n.item {\n    font-size: 12px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    padding: 10px;\n    border: 2px #F2F4F6 solid;\n    color: #24292E;\n}\n\n.extensionLabel {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: cetner;\n    color: #24272A;\n}\n\n.notice {\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: grey;\n}\n\n.button {\n    margin-top: 41.5px;\n    margin-bottom: 20px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 20px;\n    background: #037DD6;\n    border-radius: 32px;\n    color: white;\n    border: 0;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.backdrop {\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 99998;\n    background: rgba(0, 0, 0, 0.87);\n    opacity: 0.3;\n}\n\n.modal {\n    visibility: visible;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    top: 50%;\n    max-width: 100%;\n    width: 460px;\n    min-width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;\n    -webkit-font-smoothing: antialiased;\n}\n\n.closeButton {\n    color: #BBC0C5;\n    cursor: pointer;\n}\n\n.logoContainer {\n    margin-left: 24px;\n    margin-right: 24px;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.connectMobileText {\n    font-size: 14px;\n    color: black;\n    margin-top: 28px;\n    margin-bottom: 28px;\n    line-height: 2;\n}\n\n.blue {\n    color: #037DD6;\n    font-weight: 700;\n}\n\n.installExtensionText {\n    margin-left: 10px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: right;\n}\n\n#sdk-mm-qrcode {\n    svg {\n        width: 50%;\n    }\n}";
var oy = Object.freeze({ __proto__: null, mm_install_modal: iy });
var sy = class {
  constructor(e8) {
    fg(this, e8), this.close = Vg(this, "close", 7), this.disconnect = Vg(this, "disconnect", 7), this.updateOTPValue = Vg(this, "updateOTPValue", 7), this.displayOTP = void 0, this.sdkVersion = void 0, this.otpCode = void 0, this.translationsLoaded = false, this.i18nInstance = new Rm();
  }
  async connectedCallback() {
    await this.i18nInstance.init({ fallbackLng: "en" }), this.translationsLoaded = true;
  }
  onClose() {
    this.close.emit();
  }
  onDisconnect() {
    this.disconnect.emit();
  }
  onUpdateOTPValueHandler(e8) {
    this.updateOTPValue.emit({ otpValue: e8 });
  }
  disconnectedCallback() {
    this.onClose();
  }
  render() {
    var e8;
    if (!this.translationsLoaded) return null;
    const t2 = null === (e8 = this.displayOTP) || void 0 === e8 || e8, n2 = this.sdkVersion, r2 = (e9) => this.i18nInstance.t(e9);
    return jg(Am, { className: "pending-modal" }, jg("div", { class: "backdrop", onClick: () => this.onClose() }), jg("div", { class: "modal" }, jg("div", { class: "closeButtonContainer" }, jg("div", { class: "right" }, jg("span", { class: "closeButton", onClick: () => this.onClose() }, jg(Lm, null)))), jg("div", { class: "logoContainer" }, jg(Tm, null)), jg("div", null, jg("div", { class: "flexContainer", style: { flexDirection: "column", color: "black" } }, jg("div", { class: "flexItem", style: { textAlign: "center", marginTop: "30px", marginBottom: "30px", fontSize: "16px" } }, r2(t2 ? "PENDING_MODAL.OPEN_META_MASK_SELECT_CODE" : "PENDING_MODAL.OPEN_META_MASK_CONTINUE")), jg("div", { id: "sdk-mm-otp-value", style: { padding: "10px", fontSize: "32px", display: this.otpCode ? "block" : "none" } }, this.otpCode), t2 && jg("div", { class: "notice" }, "* ", r2("PENDING_MODAL.NUMBER_AFTER_OPEN_NOTICE"))), jg("div", { style: { marginTop: "20px" } }, jg("button", { class: "button blue", style: { marginTop: "5px", color: "#0376C9", borderColor: "#0376C9", borderWidth: "1px", borderStyle: "solid", backgroundColor: "white" }, onClick: () => this.onDisconnect() }, r2("PENDING_MODAL.DISCONNECT")))), jg(Mm, { version: n2 })));
  }
  get el() {
    return qg(this);
  }
};
sy.style = ".flexContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.flexItem {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem11 {\n    flex: 11;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem1 {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab {\n    padding: 8px;\n    cursor: pointer;\n    background-color: #F2F4F6;\n    font-size: 12px;\n    text-align: center;\n    color: #24292E;\n}\n\n.tabcontainer {\n    padding: 4px;\n    background-color: #F2F4F6;\n    border-radius: 8px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n.tabactive {\n    background-color: white;\n    -webkit-transition: background-color 300ms linear;\n    -ms-transition: background-color 300ms linear;\n    transition: background-color 300ms linear;\n    border-radius: 8px;\n}\n\n.item {\n    font-size: 12px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    padding: 10px;\n    border: 2px #F2F4F6 solid;\n    color: #24292E;\n}\n\n.extensionLabel {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: cetner;\n    color: #24272A;\n}\n\n.notice {\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: grey;\n}\n\n.button {\n    margin-top: 41.5px;\n    margin-bottom: 20px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 20px;\n    background: #037DD6;\n    border-radius: 32px;\n    color: white;\n    border: 0;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.backdrop {\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 99998;\n    background: rgba(0, 0, 0, 0.87);\n    opacity: 0.3;\n}\n\n.modal {\n    visibility: visible;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    top: 50%;\n    max-width: 100%;\n    width: 460px;\n    min-width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;\n    -webkit-font-smoothing: antialiased;\n}\n\n.closeButton {\n    color: #BBC0C5;\n    cursor: pointer;\n}\n\n.logoContainer {\n    margin-left: 24px;\n    margin-right: 24px;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.connectMobileText {\n    font-size: 14px;\n    color: black;\n    margin-top: 28px;\n    margin-bottom: 28px;\n    line-height: 2;\n}\n\n.blue {\n    color: #037DD6;\n    font-weight: 700;\n}\n\n.installExtensionText {\n    margin-left: 10px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: right;\n}\n\n#sdk-mm-qrcode {\n    svg {\n        width: 50%;\n    }\n}";
var ay = Object.freeze({ __proto__: null, mm_pending_modal: sy });
var cy = () => jg("svg", { width: "21", height: "15", viewBox: "0 0 21 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, jg("path", { d: "M14.1364 14.9851C13.5909 14.9851 13.2273 14.5851 13.2273 13.9851C13.2273 13.3851 13.5909 12.9851 14.1364 12.9851C16.6818 12.9851 18.6818 10.7851 18.6818 7.98508C18.6818 5.18508 16.6818 2.98508 14.1364 2.98508C11.5909 2.98508 9.59091 5.18508 9.59091 7.98508C9.59091 8.58508 9.22727 8.98508 8.68182 8.98508C8.13636 8.98508 7.77273 8.58508 7.77273 7.98508C7.77273 4.08508 10.5909 0.985077 14.1364 0.985077C17.6818 0.985077 20.5 4.08508 20.5 7.98508C20.5 11.8851 17.6818 14.9851 14.1364 14.9851ZM6.68182 14.7851C3.22727 14.7851 0.5 11.6851 0.5 7.98508C0.5 4.28508 3.22727 1.18508 6.68182 1.18508C7.22727 1.18508 7.59091 1.58508 7.59091 2.18508C7.59091 2.78508 7.22727 3.18508 6.68182 3.18508C4.22727 3.18508 2.31818 5.38508 2.31818 7.98508C2.31818 10.5851 4.22727 12.7851 6.68182 12.7851C9.13636 12.7851 11.0455 10.6851 11.0455 7.98508C11.0455 7.38508 11.4091 6.98508 11.9545 6.98508C12.5 6.98508 12.8636 7.38508 12.8636 7.98508C12.7727 11.6851 10.0455 14.7851 6.68182 14.7851Z", fill: "white" }));
var ly = () => jg("svg", { width: "400", height: "300", viewBox: "0 0 467 300", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, jg("path", { d: "M312.387 280.629C312.549 280.583 312.247 280.735 312.387 280.629L339.678 260.425C340.088 260.118 340.132 259.156 340.07 258.647C340.008 258.138 339.573 258.257 339.106 258.084L311.712 247.455C311.292 247.301 311.308 247.402 310.939 247.673C310.569 247.944 310.356 248.21 310.356 248.672L310.459 279.504C310.461 280.025 311.163 280.619 311.614 280.847C311.913 280.996 312.072 280.718 312.387 280.629ZM336.204 259.736L312.979 276.292L313.439 251.139L336.204 259.736Z", fill: "url(#paint0_linear_1356_14057)" }), jg("path", { d: "M324.639 260.342C324.358 259.547 323.485 258.91 322.707 259.215C319.6 260.432 318.17 262.313 317.287 264.066C316.482 265.665 316.197 267.482 314.188 268.269C312.178 269.055 310.763 268.663 309.162 268.007C307.406 267.287 305.504 266.182 302.397 267.399C299.289 268.616 297.859 270.497 296.976 272.25C296.171 273.849 295.697 274.886 293.685 275.673C291.675 276.459 290.261 276.067 288.659 275.411C286.903 274.691 284.999 273.587 281.894 274.803C278.789 276.019 277.549 278.681 276.666 280.434C275.861 282.034 275.386 283.07 273.374 283.857C272.596 284.161 271.931 285.055 272.211 285.849C272.492 286.644 273.365 287.281 274.143 286.977C277.25 285.76 278.68 283.879 279.563 282.125C280.368 280.526 280.65 278.71 282.662 277.923C284.672 277.136 286.087 277.528 287.688 278.184C289.444 278.904 291.348 280.009 294.453 278.793C297.561 277.576 298.991 275.695 299.874 273.941C300.679 272.342 301.153 271.306 303.165 270.519C305.175 269.732 306.589 270.124 308.191 270.78C309.947 271.5 311.849 272.605 314.956 271.388C318.063 270.172 319.301 267.511 320.184 265.757C320.989 264.158 321.466 263.121 323.476 262.335C324.254 262.032 324.919 261.137 324.639 260.342Z", fill: "url(#paint1_linear_1356_14057)" }), jg("path", { d: "M389.034 111.124C388.968 112.406 387.342 113.113 386.324 113.549C384.297 114.419 382.089 114.493 379.942 114.5C376.607 114.509 373.215 114.163 369.89 113.976C366.712 113.798 363.156 113.311 360.03 114.232C357.705 114.919 355.667 116.762 353.452 117.739C351.129 118.765 348.957 119.198 346.489 119.687C335.569 121.85 323.587 120.825 312.656 119.977C311.92 119.92 312.539 118.997 313.237 118.981C313.207 118.815 313.001 118.394 313.045 118.201C313.086 118.029 312.781 117.586 312.853 117.421C312.67 117.198 313.316 117.427 313.626 117.204C315.912 115.557 318.721 114.79 321.363 115.041C324.677 115.355 327.293 116.04 330.641 115.781C334.392 115.491 338.125 114.787 341.857 114.312C345.142 113.892 349.09 113.941 352.106 112.28C352.916 111.834 353.137 111.262 353.269 110.287C353.331 109.828 353.672 108.969 353.658 108.511C353.629 107.529 354.191 107.886 355.013 107.298C356.857 105.981 358.274 105.516 360.428 105.784C362.841 106.083 365.264 107.273 367.578 107.953C370.761 108.888 374.328 108.646 377.631 108.477C380.517 108.329 383.141 107.901 385.944 108.653C387.013 108.941 389.104 109.745 389.034 111.124Z", fill: "url(#paint2_linear_1356_14057)" }), jg("path", { d: "M278.118 85.4414C280.313 83.8186 283.302 83.9 285.853 83.2728C290.501 82.127 295.644 78.4476 300.549 79.1524C301.299 79.2595 300.904 81.0355 300.159 80.9295C300.131 80.9256 300.187 80.9333 300.159 80.9295C300.089 81.0185 299.516 81.1051 299.385 81.1463C294.999 82.515 292.895 87.5083 289.126 89.8598C287.799 90.688 286.771 90.8351 285.258 90.9441C283.515 91.0691 280.964 90.5775 279.269 90.1219C277.15 89.5532 275.965 87.034 278.118 85.4414Z", fill: "url(#paint3_linear_1356_14057)" }), jg("path", { d: "M122.567 166.093C113.597 172.832 104.535 179.836 99.517 190.092C98.5342 192.099 97.519 195.019 97.9533 197.204C98.9699 202.316 105.76 203.049 110.691 201.96C113.468 201.347 116.325 199.231 115.921 196.319C115.576 193.81 113.158 192.986 112.072 190.73C110.779 188.04 112.35 184.97 114.218 182.62C128.134 165.099 150.074 157.394 171.093 151.607C175.385 150.425 180.897 147.69 180.581 143.099C180.372 140.072 177.118 137.683 174.221 137.383C171.324 137.082 168.481 138.773 165.715 139.776C158.416 142.419 151.17 143.799 143.489 143.526C136.865 143.29 130.976 143.316 129.562 150.781C128.138 158.276 129.53 160.863 122.567 166.093Z", fill: "url(#paint4_linear_1356_14057)" }), jg("path", { d: "M79.1056 153.531C60.3932 164.378 43.7478 178.354 32.8214 197.415C30.3313 201.76 27.9216 206.554 27.1821 211.512C26.4448 216.47 27.7591 222.525 30.8133 226.337C34.908 231.446 41.6938 232.915 48.1811 233.125C50.7248 233.208 53.0035 233.066 55.3316 231.947C57.6602 230.83 59.7548 228.359 59.5978 225.742C59.3303 221.315 54.5491 219.665 50.9271 217.34C42.6566 212.037 40.4958 199.493 44.2381 190.032C47.9803 180.57 55.8228 173.173 63.2316 166.338C67.229 162.651 71.5194 158.372 76.777 157.522C79.9167 157.015 83.4706 157.589 86.6295 157.252C93.9004 156.479 99.64 151.404 105.588 146.912C115.048 139.765 126.045 134.283 137.501 132.093C141.913 131.248 146.293 130.493 149.682 127.831C151.37 126.507 150.803 123.567 148.726 123.93C138.542 125.713 128.652 131.135 119.142 134.758C105.627 139.914 91.7133 146.223 79.1056 153.531Z", fill: "url(#paint5_linear_1356_14057)" }), jg("path", { d: "M96.3677 117.321C96.0315 116.64 95.2914 116.612 94.6293 116.975C91.9858 118.417 91.5452 120.509 90.9466 122.178C90.4004 123.702 89.3647 124.67 87.6542 125.604C85.9437 126.538 85.0983 126.316 83.5956 125.91C81.9481 125.465 79.8603 125.424 77.2168 126.866C74.5734 128.309 74.1348 130.401 73.5341 132.07C72.9879 133.593 71.9522 134.562 70.2417 135.496C68.5313 136.43 67.6859 136.208 66.1832 135.801C64.5357 135.357 62.2569 134.538 59.6128 135.978C56.9694 137.42 56.5308 139.512 55.9301 141.181C55.3839 142.705 54.5398 144.454 52.8293 145.388C52.1667 145.748 52.1006 146.485 52.439 147.165C52.7752 147.845 53.5153 147.874 54.1773 147.511C56.8208 146.069 57.2594 143.977 57.86 142.307C58.4062 140.784 59.4419 139.815 61.1524 138.881C62.8629 137.948 63.7083 138.17 65.211 138.576C66.8585 139.021 68.9458 139.059 71.5898 137.619C74.2333 136.177 74.6718 134.085 75.2725 132.416C75.8187 130.892 76.8544 129.924 78.5649 128.99C80.2754 128.056 81.1207 128.278 82.6235 128.684C84.2709 129.129 86.5503 129.95 89.1938 128.507C91.8373 127.065 92.2779 124.973 92.8765 123.304C93.4227 121.78 94.2663 120.03 95.9773 119.098C96.6378 118.738 96.7039 118.001 96.3677 117.321Z", fill: "#FBC49D" }), jg("path", { d: "M391.827 164.699C392.04 164.639 392.39 164.573 392.6 164.481C393.87 163.921 395.363 162.429 395.893 161.051C396.421 159.673 396.237 158.321 395.712 156.931C394.629 154.061 391.777 152.62 389.155 153.775C386.531 154.931 384.962 158.455 386.042 161.325C387.038 163.963 389.369 165.392 391.827 164.699ZM394.166 157.367C394.529 158.332 394.52 159.751 394.156 160.706C393.792 161.662 393.1 162.534 392.218 162.921C390.398 163.723 388.338 162.878 387.589 160.889C387.226 159.925 387.234 158.506 387.599 157.55C387.963 156.594 388.654 155.723 389.536 155.336C391.356 154.534 393.416 155.376 394.166 157.367Z", fill: "#86E29B" }), jg("path", { d: "M62.7198 108.691C64.4912 108.191 66.6152 106.609 67.5596 104.824C68.4273 103.187 68.465 101.455 67.9609 99.7066C67.4547 97.9586 66.0792 96.5141 64.4963 95.6786C62.9135 94.843 61.2077 94.8578 59.4756 95.4255C57.7435 95.9933 56.2768 97.4364 55.409 99.074C53.6185 102.456 55.2032 106.494 58.4723 108.22C60.0142 109.035 61.1315 109.138 62.7198 108.691ZM60.6304 96.7682C61.819 96.4332 63.0232 96.8871 64.1048 97.4571C65.2463 98.0603 66.0495 98.8796 66.4145 100.142C66.7791 101.403 66.4488 103.299 65.8224 104.48C64.5299 106.919 61.2212 107.686 58.8638 106.441C56.5063 105.197 55.8538 101.858 57.1462 99.4185C57.7726 98.2375 58.6059 97.3957 59.8573 96.9862C59.9214 96.9635 60.5631 96.7872 60.6304 96.7682Z", fill: "#FFB0EB" }), jg("path", { d: "M77.0217 242.979C75.9542 243.28 75.1664 242.151 74.9029 241.074C74.6394 239.996 75 239.378 76.0676 239.077C77.1351 238.776 78.5053 238.907 78.7688 239.984C79.0323 241.061 78.0893 242.678 77.0217 242.979Z", fill: "url(#paint6_linear_1356_14057)" }), jg("path", { d: "M380.506 184.577C379.439 184.878 378.651 183.749 378.387 182.672C378.124 181.594 378.484 180.976 379.552 180.675C380.619 180.374 381.99 180.505 382.253 181.582C382.517 182.659 381.574 184.276 380.506 184.577Z", fill: "url(#paint7_linear_1356_14057)" }), jg("path", { d: "M348.82 246.969C347.752 247.27 346.382 247.14 346.119 246.063C345.855 244.985 346.798 243.369 347.866 243.068C348.933 242.767 349.721 243.896 349.985 244.973C350.248 246.05 349.888 246.669 348.82 246.969Z", fill: "url(#paint8_linear_1356_14057)" }), jg("path", { d: "M140.419 282.412C139.351 282.713 138.754 282.365 138.491 281.288C138.227 280.21 138.397 278.812 139.464 278.511C140.532 278.21 142.093 279.121 142.357 280.198C142.62 281.275 141.486 282.111 140.419 282.412Z", fill: "url(#paint9_linear_1356_14057)" }), jg("path", { d: "M121.462 101.679C120.395 101.979 119.798 101.631 119.534 100.554C119.271 99.4764 119.44 98.0779 120.508 97.777C121.575 97.4761 123.136 98.3868 123.4 99.4642C123.663 100.542 122.53 101.378 121.462 101.679Z", fill: "url(#paint10_linear_1356_14057)" }), jg("path", { d: "M370.749 159.005C369.682 159.306 368.311 159.175 368.048 158.098C367.784 157.021 368.727 155.404 369.795 155.103C370.863 154.802 371.65 155.931 371.914 157.008C372.177 158.086 371.817 158.704 370.749 159.005Z", fill: "url(#paint11_linear_1356_14057)" }), jg("path", { d: "M384.211 245.345C383.143 245.646 381.773 245.515 381.51 244.438C381.246 243.361 382.189 241.744 383.257 241.443C384.324 241.142 385.112 242.271 385.376 243.348C385.639 244.426 385.278 245.044 384.211 245.345Z", fill: "url(#paint12_linear_1356_14057)" }), jg("path", { d: "M364.771 41.3873C363.063 41.8687 361.337 40.8616 360.915 39.1378C360.493 37.414 361.536 35.6263 363.244 35.1449C364.953 34.6634 366.679 35.6706 367.101 37.3944C367.522 39.1182 366.479 40.9059 364.771 41.3873Z", fill: "url(#paint13_linear_1356_14057)" }), jg("path", { d: "M404.311 77.905C404.602 77.8231 404.875 77.9236 405.084 77.6871C405.437 77.2908 404.814 76.6385 404.703 76.1265L401.277 58.7418C401.149 58.163 400.687 57.5371 400.123 57.3991C399.558 57.2611 398.969 57.3812 398.576 57.835L385.784 73.1179C385.395 73.564 385.199 74.3453 385.393 74.8964C385.585 75.4481 385.978 76.1646 386.548 76.2391L403.538 78.123C403.744 78.1479 404.114 77.9607 404.311 77.905ZM398.948 62.7348L401.811 74.4394L389.841 72.8085L398.948 62.7348Z", fill: "#FFB0EB" }), jg("path", { d: "M97.5393 295.311C97.7108 295.263 97.4284 295.461 97.5393 295.311L108.785 280.464C108.975 280.211 108.718 279.972 108.594 279.684C108.47 279.396 108.124 279.917 107.821 279.902L88.5106 278.672C88.2101 278.659 87.895 278.62 87.7374 278.89C87.5798 279.159 87.7755 279.402 87.9283 279.67L96.5753 294.749C96.7102 294.99 97.2696 295.297 97.5393 295.311C97.6283 295.319 97.4556 295.335 97.5393 295.311ZM106.465 281.118L96.9667 292.97L90.6295 280.577L106.465 281.118Z", fill: "#86E29B" }), jg("path", { d: "M393.699 108.848C389.518 104.446 414.629 114.366 413.945 120.659C413.259 126.952 401.355 129.102 403.894 123.491C406.042 118.747 400.376 115.876 393.699 108.848Z", fill: "#FBC49D" }), jg("path", { d: "M139.414 115.959C139.434 115.953 139.392 115.965 139.414 115.959C141.963 115.2 143.436 111.976 142.717 109.189C142.37 107.839 141.526 107.199 140.408 106.504C139.289 105.808 138.171 105.449 136.933 105.815C135.698 106.182 134.85 107.033 134.222 108.247C133.595 109.461 133.282 111.234 133.63 112.585C133.978 113.935 134.821 114.574 135.94 115.27C137.04 115.952 138.199 116.301 139.414 115.959ZM137.315 107.375C138.222 107.12 139.005 106.994 139.825 107.502C140.661 108.02 140.912 108.618 141.171 109.625C141.708 111.704 140.935 113.834 139.032 114.398C138.11 114.675 137.356 114.791 136.522 114.272C135.686 113.753 135.436 113.155 135.176 112.149C134.917 111.142 134.718 109.714 135.186 108.81C135.654 107.905 136.394 107.649 137.315 107.375C137.329 107.371 137.299 107.38 137.315 107.375Z", fill: "#75C4FD" }), jg("path", { d: "M308.981 78.7519C310.052 78.4043 311.158 78.7096 312.265 78.6613C313.655 78.6006 314.936 78.517 316.323 78.3531C319.497 77.9795 322.798 77.4906 325.984 77.3012C329.309 77.1025 332.514 76.8551 335.836 77.0295C338.809 77.1842 342.163 77.3405 345.105 77.7558C352.129 78.7468 359.331 79.0578 366.347 80.1158C372.252 81.008 377.93 82.1319 383.722 83.5644C385.925 84.0054 388.267 85.0754 389.126 85.3792C389.421 85.4833 389.37 85.8347 389.317 86.1595C389.306 86.2271 389.353 86.1146 389.317 86.1595C388.269 87.414 386.564 86.8124 385.259 86.4677C384.406 86.241 381.488 85.9494 381.011 85.9957C380.14 86.0815 379.277 86.014 379.656 87.2114C380.122 88.6824 382.391 89.7375 383.704 90.2419C385.883 91.0803 388.771 91.2561 390.845 92.4015C392.968 92.821 395.425 93.5002 397.022 93.9986C402.83 95.8103 407.806 98.8678 413.033 102.002C415.503 103.482 417.829 104.764 419.973 106.72C421.647 108.248 423.771 109.882 424.595 112.091C425.113 113.482 424.451 115.471 422.848 115.085C420.353 114.488 419.638 111.665 418.227 109.714C415.003 105.251 410.067 102.067 405.118 100.06C402.64 99.0556 399.803 98.729 397.204 98.1176C394.411 97.4613 391.597 97.0442 388.707 97.1736C385.646 97.3097 382.846 97.5534 379.819 98.0078C377.027 98.4264 374.252 98.4441 371.514 97.8441C368.766 97.2421 366.276 96.7553 363.6 95.9021C361.662 95.2848 359.013 94.5583 357.232 93.5247C355.699 92.6339 355.631 91.2381 357.241 90.186C359.87 88.4656 362.778 89.8021 365.546 90.3497C365.561 90.3527 365.532 90.3468 365.546 90.3497C367.858 90.804 369.649 90.098 371.923 89.3884C372.489 89.2128 373.255 89.0482 373.47 88.953C374.383 88.5432 375.895 87.8227 375.407 86.7394C374.868 85.5457 372.659 84.8846 371.55 84.4891C369.74 83.8428 368.053 82.9215 366.147 82.6743C365.654 82.6095 365.109 83.1606 364.6 83.1097C363.36 83.1121 361.769 83.348 360.543 83.418C357.43 83.5916 354.583 83.6228 351.464 83.4719C348.714 83.3377 346.432 82.8542 343.741 82.3102C340.773 81.7101 337.52 81.5879 334.471 81.5839C331.393 81.5811 328.6 81.7214 325.583 82.4181C322.758 83.0702 319.757 83.6198 316.887 84.0326C314.698 84.3481 312.467 84.6054 310.319 84.2137C309.079 83.9871 306.994 83.3394 306.461 81.9635C305.846 80.3659 307.736 79.1556 308.981 78.7519Z", fill: "url(#paint14_linear_1356_14057)" }), jg("path", { d: "M242.269 242.95C242.295 242.947 242.244 242.955 242.269 242.95C244.934 242.606 247.53 241.858 250.2 241.574C253.133 241.264 256.006 240.56 258.906 239.982C263.26 239.117 268.026 238.52 272.254 237.097C274.429 236.365 276.067 235.298 278.251 234.592C280.361 233.909 283.058 233.12 285.216 232.652C289.317 231.764 293.049 231.66 297.016 230.198C301.109 228.69 305.088 226.673 308.819 224.409C312.645 222.086 316.282 219.769 320.622 218.62C322.381 218.154 323.919 218.219 325.65 218.886C327.016 219.413 327.739 220.337 327.196 221.79C326.557 223.504 324.659 224.7 323.131 225.423C320.854 226.5 319.53 227.184 317.134 227.927C314.619 228.707 311.888 229.24 309.395 230.083C308.226 230.947 307.17 232.522 306.105 233.501C303.996 235.441 301.666 237.03 298.945 237.996C292.934 240.129 286.354 238.602 280.183 239.056C279.661 239.095 279.162 239.442 278.635 239.487C275.592 240.135 272.2 240.63 269.156 241.294C264.546 242.299 260.456 243.409 255.808 244.179C251.971 244.814 243.815 245.854 243.815 245.854L242.074 245.505C240.575 245.281 240.751 243.152 242.269 242.95Z", fill: "url(#paint15_linear_1356_14057)" }), jg("path", { d: "M432.985 171.626C438.212 165.465 445.109 153.64 442.906 144.649C442.162 137.999 433.671 132.912 424.963 135.518C420.16 136.957 416.435 142.146 419.724 144.498C420.656 145.164 422.187 145.591 423.391 145.969C434.204 149.375 434.925 162.538 425.069 169.683C421.087 172.569 416.347 174.292 411.914 176.719C400.151 183.162 399.887 196.847 387.7 202.712C382.326 205.298 375.761 206.838 370.297 209.275C359.98 213.88 352.555 221.733 342.241 226.341C337.225 228.584 330.266 231.632 323.483 234.12C321.475 234.855 321.999 237.058 324.056 236.46C324.098 236.449 324.017 236.474 324.056 236.46C329.079 234.971 334.437 233.161 339.331 231.33C352.278 226.48 365.28 220.971 377.43 214.775C401.78 202.367 416.881 190.609 432.985 171.626Z", fill: "url(#paint16_linear_1356_14057)" }), jg("path", { d: "M343.644 241.104C348.002 234.144 357.126 232.455 364.343 231.134C368.176 230.431 372.406 229.878 376.137 228.662C380.691 227.175 384.558 224.095 388.327 221.077C389.452 220.177 391.204 218.466 392.393 217.436C393.185 216.748 393.644 216.026 394.33 215.225C396 213.275 399.599 209.812 401.687 208.16C403.263 206.914 407.779 204.758 408.259 207.986C408.611 210.359 406.379 213.087 404.961 214.747C402.224 217.953 398.998 221.079 395.475 223.243C391.749 225.531 387.701 227.439 383.674 229.051C381.672 229.853 379.519 230.073 377.486 230.785C376.001 231.307 374.486 232.236 373.037 232.866C371.034 233.738 368.99 234.28 367.041 235.38C364.436 236.849 361.782 238.783 359.108 240.105C356.331 241.477 353.823 242.691 350.791 243.27C348.6 243.687 345.501 243.641 343.836 241.884C343.526 241.554 343.389 241.51 343.644 241.104Z", fill: "url(#paint17_linear_1356_14057)" }), jg("path", { d: "M190.163 273.219C222.905 268.849 232.64 262.943 213.962 259.057C195.285 255.172 187.5 262.08 188.434 266.2C189.366 270.32 180.381 271.326 169.286 272.39C158.193 273.454 157.141 276.354 190.163 273.219Z", fill: "url(#paint18_linear_1356_14057)" }), jg("path", { d: "M295.952 95.4242L241.395 135.226L251.54 111.77L295.952 95.4242Z", fill: "#E17726", stroke: "#E17726", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M170.111 95.4242L224.181 135.598L214.522 111.77L170.111 95.4242Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M276.309 187.712L261.793 209.576L292.876 218.014L301.78 188.189L276.309 187.712Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M164.336 188.189L173.186 218.014L204.215 209.576L189.753 187.712L164.336 188.189Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M202.542 150.776L193.908 163.618L224.667 164.998L223.642 132.36L202.542 150.776Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M263.52 150.775L242.097 131.989L241.395 164.998L272.154 163.618L263.52 150.775Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M204.215 209.576L222.832 200.714L206.805 188.402L204.215 209.576Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M243.23 200.714L261.793 209.576L259.257 188.402L243.23 200.714Z", fill: "#E27625", stroke: "#E27625", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M261.793 209.576L243.23 200.714L244.741 212.601L244.579 217.643L261.793 209.576Z", fill: "#D5BFB2", stroke: "#D5BFB2", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M204.215 209.576L221.483 217.643L221.375 212.601L222.832 200.714L204.215 209.576Z", fill: "#D5BFB2", stroke: "#D5BFB2", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M221.807 180.547L206.373 176.09L217.274 171.154L221.807 180.547Z", fill: "#233447", stroke: "#233447", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M244.255 180.547L248.788 171.154L259.742 176.09L244.255 180.547Z", fill: "#233447", stroke: "#233447", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M204.215 209.576L206.913 187.712L189.753 188.189L204.215 209.576Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M259.149 187.712L261.793 209.576L276.309 188.189L259.149 187.712Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M272.154 163.618L241.395 164.998L244.255 180.547L248.788 171.154L259.742 176.09L272.154 163.618Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M206.373 176.09L217.274 171.154L221.807 180.547L224.667 164.998L193.908 163.618L206.373 176.09Z", fill: "#CC6228", stroke: "#CC6228", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M193.908 163.618L206.805 188.402L206.373 176.09L193.908 163.618Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M259.743 176.09L259.257 188.402L272.154 163.618L259.743 176.09Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M224.667 164.998L221.807 180.548L225.422 198.909L226.232 174.71L224.667 164.998Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M241.395 164.998L239.884 174.657L240.64 198.909L244.255 180.548L241.395 164.998Z", fill: "#E27525", stroke: "#E27525", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M244.255 180.547L240.64 198.909L243.23 200.714L259.257 188.402L259.743 176.09L244.255 180.547Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M206.373 176.09L206.805 188.402L222.832 200.714L225.422 198.909L221.807 180.547L206.373 176.09Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M244.579 217.643L244.741 212.601L243.338 211.434H222.724L221.375 212.601L221.483 217.643L204.215 209.576L210.259 214.459L222.508 222.791H243.5L255.803 214.459L261.793 209.576L244.579 217.643Z", fill: "#C0AC9D", stroke: "#C0AC9D", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M243.23 200.714L240.64 198.909H225.422L222.832 200.714L221.375 212.601L222.724 211.434H243.338L244.741 212.601L243.23 200.714Z", fill: "#161616", stroke: "#161616", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M298.272 137.827L302.859 115.856L295.952 95.4242L243.23 133.899L263.52 150.775L292.174 159.001L298.488 151.731L295.736 149.767L300.107 145.84L296.761 143.293L301.132 140.002L298.272 137.827Z", fill: "#763E1A", stroke: "#763E1A", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M163.203 115.856L167.844 137.827L164.876 140.002L169.301 143.293L165.955 145.84L170.326 149.767L167.574 151.731L173.888 159.001L202.542 150.775L222.832 133.899L170.11 95.4242L163.203 115.856Z", fill: "#763E1A", stroke: "#763E1A", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M292.175 159.001L263.52 150.775L272.154 163.618L259.257 188.402L276.309 188.189H301.78L292.175 159.001Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M202.542 150.775L173.888 159.001L164.336 188.189H189.753L206.805 188.402L193.908 163.618L202.542 150.775Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("path", { d: "M241.395 164.998L243.23 133.9L251.54 111.77H214.522L222.832 133.9L224.667 164.998L225.368 174.763L225.422 198.909H240.64L240.694 174.763L241.395 164.998Z", fill: "#F5841F", stroke: "#F5841F", "stroke-width": "0.94513", "stroke-linecap": "round", "stroke-linejoin": "round" }), jg("defs", null, jg("linearGradient", { id: "paint0_linear_1356_14057", x1: "335.991", y1: "250.487", x2: "303.873", y2: "266.801", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#FFE466" }), jg("stop", { offset: "1", "stop-color": "#FFAFEA" })), jg("linearGradient", { id: "paint1_linear_1356_14057", x1: "276.993", y1: "303.722", x2: "205.254", y2: "401.574", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#75C3FC" }), jg("stop", { offset: "0.0929", "stop-color": "#81C2F6" }), jg("stop", { offset: "1", "stop-color": "#F0B8BD" })), jg("linearGradient", { id: "paint2_linear_1356_14057", x1: "271.074", y1: "119.924", x2: "553.077", y2: "104.53", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#FFE466" }), jg("stop", { offset: "1", "stop-color": "#FFAFEA" })), jg("linearGradient", { id: "paint3_linear_1356_14057", x1: "264.209", y1: "91.0943", x2: "357.834", y2: "72.8792", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#FFE466" }), jg("stop", { offset: "1", "stop-color": "#FFAFEA" })), jg("linearGradient", { id: "paint4_linear_1356_14057", x1: "212.46", y1: "121.997", x2: "92.6119", y2: "183.406", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#FFE466" }), jg("stop", { offset: "1", "stop-color": "#FFAFEA" })), jg("linearGradient", { id: "paint5_linear_1356_14057", x1: "23.0498", y1: "204.411", x2: "161.86", y2: "163.003", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#75C3FC" }), jg("stop", { offset: "0.0929", "stop-color": "#81C2F6" }), jg("stop", { offset: "1", "stop-color": "#F0B8BD" })), jg("linearGradient", { id: "paint6_linear_1356_14057", x1: "78.8647", y1: "240.375", x2: "74.9655", y2: "241.328", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#75C3FC" }), jg("stop", { offset: "1", "stop-color": "#75C3FC" })), jg("linearGradient", { id: "paint7_linear_1356_14057", x1: "382.349", y1: "181.971", x2: "378.45", y2: "182.925", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#75C3FC" }), jg("stop", { offset: "1", "stop-color": "#75C3FC" })), jg("linearGradient", { id: "paint8_linear_1356_14057", x1: "349.889", y1: "244.583", x2: "345.99", y2: "245.537", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#75C3FC" }), jg("stop", { offset: "1", "stop-color": "#75C3FC" })), jg("linearGradient", { id: "paint9_linear_1356_14057", x1: "142.262", y1: "279.808", x2: "138.362", y2: "280.762", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#75C3FC" }), jg("stop", { offset: "1", "stop-color": "#75C3FC" })), jg("linearGradient", { id: "paint10_linear_1356_14057", x1: "123.305", y1: "99.0746", x2: "119.406", y2: "100.028", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#75C3FC" }), jg("stop", { offset: "1", "stop-color": "#75C3FC" })), jg("linearGradient", { id: "paint11_linear_1356_14057", x1: "371.818", y1: "156.617", x2: "367.919", y2: "157.571", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#75C3FC" }), jg("stop", { offset: "1", "stop-color": "#75C3FC" })), jg("linearGradient", { id: "paint12_linear_1356_14057", x1: "385.281", y1: "242.958", x2: "381.382", y2: "243.911", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#75C3FC" }), jg("stop", { offset: "1", "stop-color": "#75C3FC" })), jg("linearGradient", { id: "paint13_linear_1356_14057", x1: "367.125", y1: "37.5052", x2: "360.843", y2: "38.8076", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#75C3FC" }), jg("stop", { offset: "1", "stop-color": "#75C3FC" })), jg("linearGradient", { id: "paint14_linear_1356_14057", x1: "300.182", y1: "91.321", x2: "479.464", y2: "104.041", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#FFE466" }), jg("stop", { offset: "1", "stop-color": "#FFAFEA" })), jg("linearGradient", { id: "paint15_linear_1356_14057", x1: "363.434", y1: "201.232", x2: "102.977", y2: "302.269", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#FFE466" }), jg("stop", { offset: "1", "stop-color": "#FFAFEA" })), jg("linearGradient", { id: "paint16_linear_1356_14057", x1: "447.962", y1: "165.159", x2: "313.049", y2: "197.95", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#75C3FC" }), jg("stop", { offset: "0.0929", "stop-color": "#81C2F6" }), jg("stop", { offset: "1", "stop-color": "#F0B8BD" })), jg("linearGradient", { id: "paint17_linear_1356_14057", x1: "410.211", y1: "215.859", x2: "341.378", y2: "232.788", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#75C3FC" }), jg("stop", { offset: "0.0929", "stop-color": "#81C2F6" }), jg("stop", { offset: "1", "stop-color": "#F0B8BD" })), jg("linearGradient", { id: "paint18_linear_1356_14057", x1: "222.282", y1: "258.986", x2: "162.257", y2: "273.774", gradientUnits: "userSpaceOnUse" }, jg("stop", { "stop-color": "#FFE466" }), jg("stop", { offset: "1", "stop-color": "#FFAFEA" }))));
var dy = class {
  constructor(e8) {
    fg(this, e8), this.close = Vg(this, "close", 7), this.connectWithExtension = Vg(this, "connectWithExtension", 7), this.link = void 0, this.sdkVersion = void 0, this.preferDesktop = void 0, this.tab = 1, this.isDefaultTab = true, this.translationsLoaded = false, this.i18nInstance = new Rm(), this.setTab(this.preferDesktop ? 1 : 2);
  }
  async connectedCallback() {
    await this.i18nInstance.init({ fallbackLng: "en" }), this.translationsLoaded = true;
  }
  onClose(e8 = false) {
    this.close.emit({ shouldTerminate: e8 });
  }
  connectWithExtensionHandler() {
    this.connectWithExtension.emit();
  }
  setTab(e8) {
    this.tab = e8, this.isDefaultTab = false;
  }
  disconnectedCallback() {
    this.onClose();
  }
  updatePreferDesktop(e8) {
    e8 ? this.setTab(1) : this.setTab(2);
  }
  render() {
    if (!this.translationsLoaded) return null;
    const e8 = (e9) => this.i18nInstance.t(e9), t2 = this.sdkVersion, n2 = this.isDefaultTab ? this.preferDesktop ? 1 : 2 : this.tab, r2 = Jm(this.link, "svg", { ecc: "medium", scale: 2 });
    return jg(Am, { className: "select-modal" }, jg("div", { class: "backdrop", onClick: () => this.onClose(true) }), jg("div", { class: "modal" }, jg("div", { class: "closeButtonContainer" }, jg("div", { class: "right" }, jg("span", { class: "closeButton", onClick: () => this.onClose(true) }, jg(Lm, null)))), jg("div", { class: "logoContainer" }, jg(Tm, null)), jg("div", null, jg("div", { class: "tabcontainer" }, jg("div", { class: "flexContainer" }, jg("div", { onClick: () => this.setTab(1), class: "tab flexItem " + (1 === n2 ? "tabactive" : "") }, e8("DESKTOP")), jg("div", { onClick: () => this.setTab(2), class: "tab flexItem " + (2 === n2 ? "tabactive" : "") }, e8("MOBILE")))), jg("div", { style: { display: 1 === n2 ? "none" : "block" } }, jg("div", { class: "flexContainer" }, jg("div", { class: "flexItem", style: { textAlign: "center", marginTop: "4" } }, jg("div", { class: "center", id: "sdk-mm-qrcode", innerHTML: r2 }), jg("div", { class: "connectMobileText" }, e8("SCAN_TO_CONNECT"), jg("br", null), jg("span", { class: "blue" }, jg("b", null, e8("META_MASK_MOBILE_APP"))))))), jg("div", { style: { display: 2 === n2 ? "none" : "block" } }, jg("div", { style: { display: "flex", justifyContent: "center", height: "300", marginTop: "-20" } }, jg(ly, null)), jg("div", { class: "extensionLabel" }, e8("SELECT_MODAL.CRYPTO_TAKE_CONTROL_TEXT")), jg("button", { class: "button", onClick: () => this.connectWithExtensionHandler() }, jg(cy, null), jg("span", { class: "installExtensionText" }, e8("CONNECT_WITH_EXTENSION"))))), jg(Mm, { version: t2 })));
  }
  get el() {
    return qg(this);
  }
  static get watchers() {
    return { preferDesktop: ["updatePreferDesktop"] };
  }
};
dy.style = ".flexContainer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: row;\n}\n\n.flexItem {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem11 {\n    flex: 11;\n    justify-content: center;\n    align-items: center;\n}\n\n.flexItem1 {\n    flex: 1;\n    justify-content: center;\n    align-items: center;\n}\n\n.tab {\n    padding: 8px;\n    cursor: pointer;\n    background-color: #F2F4F6;\n    font-size: 12px;\n    text-align: center;\n    color: #24292E;\n}\n\n.tabcontainer {\n    padding: 4px;\n    background-color: #F2F4F6;\n    border-radius: 8px;\n    margin-bottom: 30px;\n    margin-top: 30px;\n}\n\n.tabactive {\n    background-color: white;\n    -webkit-transition: background-color 300ms linear;\n    -ms-transition: background-color 300ms linear;\n    transition: background-color 300ms linear;\n    border-radius: 8px;\n}\n\n.item {\n    font-size: 12px;\n    margin-bottom: 16px;\n    border-radius: 8px;\n    padding: 10px;\n    border: 2px #F2F4F6 solid;\n    color: #24292E;\n}\n\n.extensionLabel {\n    font-style: normal;\n    font-weight: bold;\n    font-size: 14px;\n    text-align: cetner;\n    color: #24272A;\n}\n\n.notice {\n    font-size: 12px;\n    margin-left: 10px;\n    margin-right: 10px;\n    color: grey;\n}\n\n.button {\n    margin-top: 41.5px;\n    margin-bottom: 20px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    padding: 12px 20px;\n    background: #037DD6;\n    border-radius: 32px;\n    color: white;\n    border: 0;\n    font-size: 14px;\n    cursor: pointer;\n}\n\n.backdrop {\n    visibility: visible;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    z-index: 99998;\n    background: rgba(0, 0, 0, 0.87);\n    opacity: 0.3;\n}\n\n.modal {\n    visibility: visible;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 99999;\n    background: white;\n    padding: 20px;\n    border-radius: 8px;\n    top: 50%;\n    max-width: 100%;\n    width: 460px;\n    min-width: 300px;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;\n    -webkit-font-smoothing: antialiased;\n}\n\n.closeButton {\n    color: #BBC0C5;\n    cursor: pointer;\n}\n\n.logoContainer {\n    margin-left: 24px;\n    margin-right: 24px;\n    margin-top: 24px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.connectMobileText {\n    font-size: 14px;\n    color: black;\n    margin-top: 28px;\n    margin-bottom: 28px;\n    line-height: 2;\n}\n\n.blue {\n    color: #037DD6;\n    font-weight: 700;\n}\n\n.installExtensionText {\n    margin-left: 10px;\n}\n\n.center {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.right {\n    display: flex;\n    align-items: center;\n    justify-content: right;\n}\n\n#sdk-mm-qrcode {\n    svg {\n        width: 50%;\n    }\n}";
var uy;
var hy;
var fy = Object.freeze({ __proto__: null, mm_select_modal: dy });
var py = { exports: {} };
function gy() {
  if (hy) return uy;
  hy = 1;
  var e8 = 1e3, t2 = 60 * e8, n2 = 60 * t2, r2 = 24 * n2, i2 = 7 * r2, o2 = 365.25 * r2;
  function s2(e9, t3, n3, r3) {
    var i3 = t3 >= 1.5 * n3;
    return Math.round(e9 / n3) + " " + r3 + (i3 ? "s" : "");
  }
  return uy = function(a2, c2) {
    c2 = c2 || {};
    var l2 = typeof a2;
    if ("string" === l2 && a2.length > 0) return function(s3) {
      if ((s3 = String(s3)).length > 100) return;
      var a3 = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(s3);
      if (!a3) return;
      var c3 = parseFloat(a3[1]);
      switch ((a3[2] || "ms").toLowerCase()) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return c3 * o2;
        case "weeks":
        case "week":
        case "w":
          return c3 * i2;
        case "days":
        case "day":
        case "d":
          return c3 * r2;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return c3 * n2;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return c3 * t2;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return c3 * e8;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return c3;
        default:
          return;
      }
    }(a2);
    if ("number" === l2 && isFinite(a2)) return c2.long ? function(i3) {
      var o3 = Math.abs(i3);
      if (o3 >= r2) return s2(i3, o3, r2, "day");
      if (o3 >= n2) return s2(i3, o3, n2, "hour");
      if (o3 >= t2) return s2(i3, o3, t2, "minute");
      if (o3 >= e8) return s2(i3, o3, e8, "second");
      return i3 + " ms";
    }(a2) : function(i3) {
      var o3 = Math.abs(i3);
      if (o3 >= r2) return Math.round(i3 / r2) + "d";
      if (o3 >= n2) return Math.round(i3 / n2) + "h";
      if (o3 >= t2) return Math.round(i3 / t2) + "m";
      if (o3 >= e8) return Math.round(i3 / e8) + "s";
      return i3 + "ms";
    }(a2);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(a2));
  }, uy;
}
var my = function(e8) {
  function t2(e9) {
    let r3, i2, o2, s2 = null;
    function a2(...e10) {
      if (!a2.enabled) return;
      const n3 = a2, i3 = Number(/* @__PURE__ */ new Date()), o3 = i3 - (r3 || i3);
      n3.diff = o3, n3.prev = r3, n3.curr = i3, r3 = i3, e10[0] = t2.coerce(e10[0]), "string" != typeof e10[0] && e10.unshift("%O");
      let s3 = 0;
      e10[0] = e10[0].replace(/%([a-zA-Z%])/g, (r4, i4) => {
        if ("%%" === r4) return "%";
        s3++;
        const o4 = t2.formatters[i4];
        if ("function" == typeof o4) {
          const t3 = e10[s3];
          r4 = o4.call(n3, t3), e10.splice(s3, 1), s3--;
        }
        return r4;
      }), t2.formatArgs.call(n3, e10);
      (n3.log || t2.log).apply(n3, e10);
    }
    return a2.namespace = e9, a2.useColors = t2.useColors(), a2.color = t2.selectColor(e9), a2.extend = n2, a2.destroy = t2.destroy, Object.defineProperty(a2, "enabled", { enumerable: true, configurable: false, get: () => null !== s2 ? s2 : (i2 !== t2.namespaces && (i2 = t2.namespaces, o2 = t2.enabled(e9)), o2), set: (e10) => {
      s2 = e10;
    } }), "function" == typeof t2.init && t2.init(a2), a2;
  }
  function n2(e9, n3) {
    const r3 = t2(this.namespace + (void 0 === n3 ? ":" : n3) + e9);
    return r3.log = this.log, r3;
  }
  function r2(e9) {
    return e9.toString().substring(2, e9.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  return t2.debug = t2, t2.default = t2, t2.coerce = function(e9) {
    if (e9 instanceof Error) return e9.stack || e9.message;
    return e9;
  }, t2.disable = function() {
    const e9 = [...t2.names.map(r2), ...t2.skips.map(r2).map((e10) => "-" + e10)].join(",");
    return t2.enable(""), e9;
  }, t2.enable = function(e9) {
    let n3;
    t2.save(e9), t2.namespaces = e9, t2.names = [], t2.skips = [];
    const r3 = ("string" == typeof e9 ? e9 : "").split(/[\s,]+/), i2 = r3.length;
    for (n3 = 0; n3 < i2; n3++) r3[n3] && ("-" === (e9 = r3[n3].replace(/\*/g, ".*?"))[0] ? t2.skips.push(new RegExp("^" + e9.slice(1) + "$")) : t2.names.push(new RegExp("^" + e9 + "$")));
  }, t2.enabled = function(e9) {
    if ("*" === e9[e9.length - 1]) return true;
    let n3, r3;
    for (n3 = 0, r3 = t2.skips.length; n3 < r3; n3++) if (t2.skips[n3].test(e9)) return false;
    for (n3 = 0, r3 = t2.names.length; n3 < r3; n3++) if (t2.names[n3].test(e9)) return true;
    return false;
  }, t2.humanize = gy(), t2.destroy = function() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }, Object.keys(e8).forEach((n3) => {
    t2[n3] = e8[n3];
  }), t2.names = [], t2.skips = [], t2.formatters = {}, t2.selectColor = function(e9) {
    let n3 = 0;
    for (let t3 = 0; t3 < e9.length; t3++) n3 = (n3 << 5) - n3 + e9.charCodeAt(t3), n3 |= 0;
    return t2.colors[Math.abs(n3) % t2.colors.length];
  }, t2.enable(t2.load()), t2;
};
!function(e8, t2) {
  t2.formatArgs = function(t3) {
    if (t3[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t3[0] + (this.useColors ? "%c " : " ") + "+" + e8.exports.humanize(this.diff), !this.useColors) return;
    const n3 = "color: " + this.color;
    t3.splice(1, 0, n3, "color: inherit");
    let r2 = 0, i2 = 0;
    t3[0].replace(/%[a-zA-Z%]/g, (e9) => {
      "%%" !== e9 && (r2++, "%c" === e9 && (i2 = r2));
    }), t3.splice(i2, 0, n3);
  }, t2.save = function(e9) {
    try {
      e9 ? t2.storage.setItem("debug", e9) : t2.storage.removeItem("debug");
    } catch (e10) {
    }
  }, t2.load = function() {
    let e9;
    try {
      e9 = t2.storage.getItem("debug");
    } catch (e10) {
    }
    !e9 && void 0 !== B && "env" in B && (e9 = B.env.DEBUG);
    return e9;
  }, t2.useColors = function() {
    if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return true;
    if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return false;
    return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }, t2.storage = function() {
    try {
      return localStorage;
    } catch (e9) {
    }
  }(), t2.destroy = /* @__PURE__ */ (() => {
    let e9 = false;
    return () => {
      e9 || (e9 = true, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), t2.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t2.log = console.debug || console.log || (() => {
  }), e8.exports = my(t2);
  const { formatters: n2 } = e8.exports;
  n2.j = function(e9) {
    try {
      return JSON.stringify(e9);
    } catch (e10) {
      return "[UnexpectedJSONParseError]: " + e10.message;
    }
  };
}(py, py.exports);
var yy = py.exports;
var vy = yy("MM_SDK-React");
vy.color = "#CC5500";
var by = (0, import_react.createContext)({ ready: false, extensionActive: false, connected: false, connecting: false, readOnlyCalls: false });
var wy = ({ children: n2, sdkOptions: a2, debug: c2 }) => {
  const [l2, d2] = (0, import_react.useState)(), [u2, h2] = (0, import_react.useState)(""), [f2, p2] = (0, import_react.useState)(false), [g2, m2] = (0, import_react.useState)(false), [y2, v2] = (0, import_react.useState)(false), [b2, w2] = (0, import_react.useState)(false), [E2, C2] = (0, import_react.useState)(1), [_2, S2] = (0, import_react.useState)(), [k2, x2] = (0, import_react.useState)(), [A2, M2] = (0, import_react.useState)(false), [L2, T2] = (0, import_react.useState)(""), [O2, R2] = (0, import_react.useState)(), [P2, I2] = (0, import_react.useState)(), [N2, D2] = (0, import_react.useState)(), [B2, $2] = (0, import_react.useState)(), [j2, K2] = (0, import_react.useState)(), [F2, U2] = (0, import_react.useState)({}), [H2, z2] = (0, import_react.useState)(false), q2 = (0, import_react.useRef)(false);
  (0, import_react.useEffect)(() => {
    yy.enable("MM_SDK-React");
  }, [c2]);
  const V2 = { setConnecting: v2, setConnected: w2, setChainId: S2, setError: D2, setAccount: R2, setStatus: K2, setTrigger: C2, setRPCHistory: U2, debug: c2, chainId: _2, activeProvider: void 0, sdk: l2 }, W2 = (({ debug: e8, setConnected: n3, setConnecting: r2, setError: i2 }) => (0, import_react.useCallback)(() => {
    vy("[MetaMaskProvider: useHandleOnConnectingEvent()] on 'connecting' event."), n3(false), r2(true), i2(void 0);
  }, [e8, n3, r2, i2]))(V2), G2 = (({ debug: e8, setConnecting: n3, setAccount: r2, activeProvider: i2, setConnected: o2, setError: s2 }) => (0, import_react.useCallback)(() => {
    vy("[MetaMaskProvider: useHandleInitializedEvent()] on '_initialized' event."), n3(false), o2(true), s2(void 0);
  }, [e8, n3, r2, i2, o2, s2]))(V2), Y2 = (({ debug: e8, setConnecting: n3, setConnected: r2, setChainId: i2, setError: o2, chainId: s2 }) => (0, import_react.useCallback)((e9) => {
    vy("[MetaMaskProvider: useHandleConnectEvent()] on 'connect' event.", e9);
    const t2 = e9.chainId;
    n3(false), r2(true), i2(t2), o2(void 0);
  }, [e8, n3, r2, i2, o2, s2]))(V2), Z = (({ debug: e8, setConnecting: n3, setConnected: r2, setError: i2 }) => (0, import_react.useCallback)((e9) => {
    vy("[MetaMaskProvider: useHandleDisconnectEvent()] on 'disconnect' event.", e9), n3(false), r2(false), i2(e9);
  }, [e8, n3, r2, i2]))(V2), J = (({ debug: e8, setConnecting: n3, setConnected: r2, setError: i2 }) => (0, import_react.useCallback)((e9) => {
    vy("[MetaMaskProvider: useHandleTerminateEvent()] on 'terminate' event.", e9), n3(false), r2(false), i2(e9);
  }, [e8, n3, r2, i2]))(V2), X2 = (({ debug: e8, setAccount: n3, setConnected: r2, setConnecting: i2, setError: o2 }) => (0, import_react.useCallback)((e9) => {
    vy("[MetaMaskProvider: useHandleAccountsChangedEvent()] on 'accountsChanged' event.", e9), n3(e9 == null ? void 0 : e9[0]), r2(true), i2(false), o2(void 0);
  }, [e8, n3, r2, o2]))(V2), Q2 = (({ debug: e8, setChainId: n3, setConnected: r2, setConnecting: i2, setError: o2 }) => (0, import_react.useCallback)((e9) => {
    vy("[MetaMaskProvider: useHandleChainChangedEvent()] on 'chainChanged' event.", e9), n3("object" == typeof e9 && (e9 == null ? void 0 : e9.chainId) ? e9.chainId : e9), r2(true), i2(false), o2(void 0);
  }, [e8, n3, r2, o2, i2]))(V2), ee2 = (({ debug: e8, setStatus: n3 }) => (0, import_react.useCallback)((e9) => {
    vy(`[MetaMaskProvider: useHandleSDKStatusEvent()] on '${Ha.SERVICE_STATUS}/${e9.connectionStatus}' event.`, e9);
    try {
      const t2 = JSON.parse(JSON.stringify(e9 ?? {}));
      n3(t2);
    } catch (e10) {
      console.error(e10);
    }
  }, [e8, n3]))(V2), te2 = (({ debug: e8, setConnecting: n3, setConnected: r2, setTrigger: i2, setError: o2, setChainId: s2, setAccount: a3, setRPCHistory: c3, sdk: l3 }) => (0, import_react.useCallback)((e9) => {
    if (vy(`[MetaMaskProvider: useHandleProviderEvent()] on '${Ha.PROVIDER_UPDATE}' event.`, e9), e9 === Op.TERMINATE) n3(false);
    else if (e9 === Op.EXTENSION) {
      n3(false), r2(true), o2(void 0);
      const e10 = l3 == null ? void 0 : l3.getProvider(), t2 = (e10 == null ? void 0 : e10.getChainId()) || void 0, i3 = (e10 == null ? void 0 : e10.getSelectedAddress()) || void 0;
      vy(`[MetaMaskProvider: useHandleProviderEvent()] extensionProvider chainId=${t2} selectedAddress=${i3}`), s2(t2), a3(i3);
    }
    c3({}), i2((e10) => e10 + 1);
  }, [e8, n3, i2, r2, o2]))(V2), ne2 = (0, import_react.useMemo)(() => {
    const e8 = (j2 == null ? void 0 : j2.connectionStatus) === Ua.DISCONNECTED;
    let t2 = false;
    for (const n3 in F2) {
      const r2 = F2[n3];
      if (void 0 === r2.result && void 0 === r2.error) {
        t2 = true, e8 && console.warn(`[MetamaskProvider] socket disconnected but rpc ${n3} not processed yet`);
        break;
      }
    }
    return t2;
  }, [F2, j2]);
  return (0, import_react.useEffect)(() => {
    const e8 = B2 == null ? void 0 : B2.getSelectedAddress();
    e8 && e8 != (O2 == null ? void 0 : O2.toLowerCase()) && (vy(`[MetaMaskProviderClient] account changed detected from ${O2} to ${e8}`), R2(e8));
  }, [F2]), (0, import_react.useEffect)(() => {
    (j2 == null ? void 0 : j2.connectionStatus) !== Ua.DISCONNECTED && (j2 == null ? void 0 : j2.connectionStatus) !== Ua.TERMINATED || (w2(false), v2(false));
  }, [j2]), (0, import_react.useEffect)(() => {
    const e8 = `${O2}${_2}`;
    I2(l2 == null ? void 0 : l2.getChannelId()), (O2 == null ? void 0 : O2.startsWith("0x")) && (_2 == null ? void 0 : _2.startsWith("0x")) && e8 !== L2 ? (M2(true), vy(`[MetaMaskProviderClient] retrieving balance of ${O2} on chain ${_2}`), T2(e8), B2 == null ? void 0 : B2.request({ method: "eth_getBalance", params: [O2, "latest"] }).then((e9) => {
      vy(`[MetaMaskProviderClient] balance of ${O2} is ${e9}`), x2(e9);
    }).catch((e9) => {
      console.warn(`[MetamaskProvider] error retrieving balance of ${O2}`, e9);
    }).finally(() => {
      M2(false);
    })) : x2(void 0);
  }, [O2, B2, _2, L2]), (0, import_react.useEffect)(() => {
    if (q2.current) return void vy("[MetaMaskProviderClient] sdk already initialized");
    q2.current = true;
    const e8 = new cg({ ...a2 });
    e8.init().then(() => {
      d2(e8), p2(true), m2(e8.hasReadOnlyRPCCalls());
    }).catch((e9) => {
      console.error("[MetaMaskProviderClient] error initializing SDK", e9);
    });
  }, [a2]), (0, import_react.useEffect)(() => {
    var _a2;
    if (!f2 || !l2) return;
    vy("[MetaMaskProviderClient] init SDK Provider listeners", l2), z2(l2.isExtensionActive());
    const e8 = l2.getProvider();
    if (!e8) return void console.warn("[MetaMaskProviderClient] activeProvider is undefined.");
    const t2 = l2.isExtensionActive() ? !!e8.getSelectedAddress() : e8.isConnected();
    return w2(t2), R2(e8.getSelectedAddress() || void 0), $2(e8), S2(e8.getChainId() || void 0), e8.on("_initialized", G2), e8.on("terminate", J), e8.on("connecting", W2), e8.on("connect", Y2), e8.on("disconnect", Z), e8.on("accountsChanged", X2), e8.on("chainChanged", Q2), l2.on(Ha.SERVICE_STATUS, ee2), (_a2 = l2._getConnection()) == null ? void 0 : _a2.getConnector().on(Ha.RPC_UPDATE, (e9) => {
      void 0 !== e9.result || void 0 !== e9.error ? e9.id === u2 && h2("") : h2(e9.id);
      const t3 = JSON.parse(JSON.stringify(l2.getRPCHistory() ?? {}));
      U2(t3);
    }), () => {
      e8.removeListener("_initialized", G2), e8.removeListener("connecting", W2), e8.removeListener("connect", Y2), e8.removeListener("disconnect", Z), e8.removeListener("terminate", J), e8.removeListener("accountsChanged", X2), e8.removeListener("chainChanged", Q2), l2.removeListener(Ha.SERVICE_STATUS, ee2);
    };
  }, [E2, l2, f2]), (0, import_react.useEffect)(() => {
    if (f2 && l2) return l2.on(Ha.PROVIDER_UPDATE, te2), () => {
      l2.removeListener(Ha.PROVIDER_UPDATE, te2);
    };
  }, [l2, f2]), import_react.default.createElement(by.Provider, { value: { sdk: l2, ready: f2, connected: b2, readOnlyCalls: g2, provider: B2, rpcHistory: F2, connecting: y2, channelId: P2, account: O2, balance: k2, balanceProcessing: A2, extensionActive: H2, chainId: _2, error: N2, status: j2, syncing: ne2 } }, n2);
};
var Ey = ({ children: t2, sdkOptions: n2, debug: o2 }) => {
  const [s2, a2] = (0, import_react.useState)(false);
  return (0, import_react.useEffect)(() => {
    a2(true);
  }, []), import_react.default.createElement(import_react.default.Fragment, null, s2 ? import_react.default.createElement(wy, { debug: o2, sdkOptions: n2 }, t2) : import_react.default.createElement(import_react.default.Fragment, null, t2));
};
var Cy = { socketServer: Da, useDeeplink: true, extensionOnly: true, checkInstallationImmediately: false, debug: true, logs: { sdk: true, provider: true, commLayer: true }, lang: "en" };
var _y = (0, import_react.createContext)({ ...Cy, setAppContext: (e8) => {
}, reset: () => {
} });
var Sy = "appContext";
var ky = ({ initialSocketServer: t2, initialInfuraKey: n2, children: o2 }) => {
  const [s2, a2] = (0, import_react.useState)({ ...Cy, socketServer: t2 ?? Da, infuraAPIKey: n2 });
  (0, import_react.useEffect)(() => {
    "undefined" != typeof window && "undefined" != typeof localStorage && (() => {
      const e8 = localStorage == null ? void 0 : localStorage.getItem(Sy), r2 = e8 ? JSON.parse(e8) : { infuraAPIKey: n2, socketServer: t2 };
      r2.infuraAPIKey || (r2.infuraAPIKey = n2), vy("[SDKConfigProvider] initialContext", r2);
      const i2 = new URLSearchParams(window.location.search), o3 = Array.from(i2.keys()).reduce((e9, t3) => {
        try {
          e9[t3] = JSON.parse(decodeURIComponent(i2.get(t3) || ""));
        } catch (e10) {
          console.error(`Error parsing URL param ${t3}`, e10);
        }
        return e9;
      }, {});
      vy("[SDKConfigProvider] urlContext", o3);
      const s3 = { ...Cy, ...r2, ...o3 };
      vy("[SDKConfigProvider] computedContext", s3), a2(s3);
    })();
  }, []);
  const c2 = (e8) => {
    a2((t3) => {
      const n3 = { ...t3, ...e8 };
      return ((e9) => {
        if ("undefined" == typeof window || "undefined" == typeof localStorage) return;
        const t4 = new URLSearchParams();
        for (const [n5, r2] of Object.entries(e9)) t4.set(n5, encodeURIComponent(JSON.stringify(r2)));
        localStorage.setItem(Sy, JSON.stringify(e9));
        const n4 = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${t4.toString()}`;
        window.history.pushState({ path: n4 }, "", n4);
      })(n3), setTimeout(() => {
        "undefined" != typeof window && void 0 !== window.location && void 0 !== window.location.reload ? window.location.reload() : console.warn("[SDKConfigProvider] updateAppContext not implemented");
      }, 100), n3;
    });
  }, l2 = { ...s2, reset: () => {
    c2({ ...Cy, socketServer: t2 ?? Da, infuraAPIKey: n2 });
  }, setAppContext: c2 };
  return import_react.default.createElement(_y.Provider, { value: l2 }, o2);
};
var xy = () => {
  const e8 = (0, import_react.useContext)(by);
  if (void 0 === e8) throw new Error("SDK context is missing, must be within provide");
  return e8;
};
var Ay = () => {
  const e8 = (0, import_react.useContext)(_y);
  if (void 0 === e8) throw new Error("useSDKConfig must be used within a SDKConfigContext");
  return e8;
};
export {
  ac as CommunicationLayerPreference,
  Ua as ConnectionStatus,
  Da as DEFAULT_SERVER_URL,
  Ha as EventType,
  Va as MessageType,
  Ey as MetaMaskProvider,
  cg as MetaMaskSDK,
  sp as MetaMaskSDKEvent,
  Op as PROVIDER_UPDATE_TYPE,
  cc as PlatformType,
  _y as SDKConfigContext,
  ky as SDKConfigProvider,
  by as SDKContext,
  dp as SDKProvider,
  xy as useSDK,
  Ay as useSDKConfig
};
//# sourceMappingURL=@metamask_sdk-react.js.map
