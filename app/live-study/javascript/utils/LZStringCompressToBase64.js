
// https://github.com/pieroxy/lz-string/blob/91158b86fedb2934ba94bb2c9f238f6b2f62530b/libs/lz-string.js
export const compressToBase64 = (str) => {
  var res = _compress(str, 6, function (a) {
    return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".charAt(a);
  });
  switch (res.length % 4) { // To produce valid Base64
    default: // When could this happen ?
    case 0: return res;
    case 1: return res + "===";
    case 2: return res + "==";
    case 3: return res + "=";
  }
}

// compressed with JSCompress
function _compress(a, b, c) { if (null == a) return ""; var d, e, f, g = {}, h = {}, j = "", k = "", l = "", m = 2, n = 3, o = 2, p = [], q = 0, r = 0; for (f = 0; f < a.length; f += 1)if (j = a.charAt(f), Object.prototype.hasOwnProperty.call(g, j) || (g[j] = n++, h[j] = !0), k = l + j, Object.prototype.hasOwnProperty.call(g, k)) l = k; else { if (Object.prototype.hasOwnProperty.call(h, l)) { if (256 > l.charCodeAt(0)) { for (d = 0; d < o; d++)q <<= 1, r == b - 1 ? (r = 0, p.push(c(q)), q = 0) : r++; for (e = l.charCodeAt(0), d = 0; 8 > d; d++)q = q << 1 | 1 & e, r == b - 1 ? (r = 0, p.push(c(q)), q = 0) : r++, e >>= 1 } else { for (e = 1, d = 0; d < o; d++)q = q << 1 | e, r == b - 1 ? (r = 0, p.push(c(q)), q = 0) : r++, e = 0; for (e = l.charCodeAt(0), d = 0; 16 > d; d++)q = q << 1 | 1 & e, r == b - 1 ? (r = 0, p.push(c(q)), q = 0) : r++, e >>= 1 } m--, 0 == m && (m = Math.pow(2, o), o++), delete h[l] } else for (e = g[l], d = 0; d < o; d++)q = q << 1 | 1 & e, r == b - 1 ? (r = 0, p.push(c(q)), q = 0) : r++, e >>= 1; m--, 0 == m && (m = Math.pow(2, o), o++), g[k] = n++, l = j + "" } if ("" !== l) { if (Object.prototype.hasOwnProperty.call(h, l)) { if (256 > l.charCodeAt(0)) { for (d = 0; d < o; d++)q <<= 1, r == b - 1 ? (r = 0, p.push(c(q)), q = 0) : r++; for (e = l.charCodeAt(0), d = 0; 8 > d; d++)q = q << 1 | 1 & e, r == b - 1 ? (r = 0, p.push(c(q)), q = 0) : r++, e >>= 1 } else { for (e = 1, d = 0; d < o; d++)q = q << 1 | e, r == b - 1 ? (r = 0, p.push(c(q)), q = 0) : r++, e = 0; for (e = l.charCodeAt(0), d = 0; 16 > d; d++)q = q << 1 | 1 & e, r == b - 1 ? (r = 0, p.push(c(q)), q = 0) : r++, e >>= 1 } m--, 0 == m && (m = Math.pow(2, o), o++), delete h[l] } else for (e = g[l], d = 0; d < o; d++)q = q << 1 | 1 & e, r == b - 1 ? (r = 0, p.push(c(q)), q = 0) : r++, e >>= 1; m--, 0 == m && (m = Math.pow(2, o), o++) } for (e = 2, d = 0; d < o; d++)q = q << 1 | 1 & e, r == b - 1 ? (r = 0, p.push(c(q)), q = 0) : r++, e >>= 1; for (; ;)if (q <<= 1, r == b - 1) { p.push(c(q)); break } else r++; return p.join("") }
