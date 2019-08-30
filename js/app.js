/*! by @warrengalyen -- https://www.mechanikadesign.com */
! function(s) {
    function n(n) {
        for (var t, e, r = n[0], o = n[1], a = n[2], i = 0, u = []; i < r.length; i++) e = r[i], f[e] && u.push(f[e][0]), f[e] = 0;
        for (t in o) Object.prototype.hasOwnProperty.call(o, t) && (s[t] = o[t]);
        for (m && m(n); u.length;) u.shift()();
        return c.push.apply(c, a || []), l()
    }

    function l() {
        for (var n, t = 0; t < c.length; t++) {
            for (var e = c[t], r = !0, o = 1; o < e.length; o++) {
                var a = e[o];
                0 !== f[a] && (r = !1)
            }
            r && (c.splice(t--, 1), n = i(i.s = e[0]))
        }
        return n
    }
    var e = {},
        f = {
            0: 0
        },
        c = [];

    function i(n) {
        if (e[n]) return e[n].exports;
        var t = e[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return s[n].call(t.exports, t, t.exports, i), t.l = !0, t.exports
    }
    i.m = s, i.c = e, i.d = function(n, t, e) {
        i.o(n, t) || Object.defineProperty(n, t, {
            enumerable: !0,
            get: e
        })
    }, i.r = function(n) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(n, "__esModule", {
            value: !0
        })
    }, i.t = function(t, n) {
        if (1 & n && (t = i(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var e = Object.create(null);
        if (i.r(e), Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            }), 2 & n && "string" != typeof t)
            for (var r in t) i.d(e, r, function(n) {
                return t[n]
            }.bind(null, r));
        return e
    }, i.n = function(n) {
        var t = n && n.__esModule ? function() {
            return n.default
        } : function() {
            return n
        };
        return i.d(t, "a", t), t
    }, i.o = function(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }, i.p = "";
    var t = window.webpackJsonp = window.webpackJsonp || [],
        r = t.push.bind(t);
    t.push = n, t = t.slice();
    for (var o = 0; o < t.length; o++) n(t[o]);
    var m = r;
    c.push([36, 1]), l()
}([, , , , , , , , , , , , , , , , , function(n, t) {
    n.exports = function(n) {
        return '<canvas></canvas>\x3c!--<div class="info"></div>--\x3e'
    }
}, , , , , function(n, t) {
    n.exports = "precision highp float;\nprecision highp int;\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\n\nvarying vec2 vUv;\n\nvoid main() {\n    vUv = uv;\n    gl_Position = vec4(position, 1.0);\n}\n"
}, function(n, t) {
    n.exports = "\nprecision highp float;\nprecision highp int;\nuniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n\n\nvarying vec2 vUv;\n\nuniform vec3 colorBg1;\nuniform vec3 colorBg2;\nuniform float time;\n\nhighp float random(vec2 co) {\n    highp float a = 12.9898;\n    highp float b = 78.233;\n    highp float c = 43758.5453;\n    highp float dt = dot(co.xy, vec2(a, b));\n    highp float sn = mod(dt, 3.14);\n    return fract(sin(sn) * c);\n}\nvec2 diffuse(vec2 v, float s, inout vec2 r) {\n    r = fract(r * vec2(12.9898, 78.233));\n    return v + vec2(s) * sqrt(r.x + .001) * vec2(sin(r.y * 6.283), cos(r.y * 6.283));\n}\n\nvec3 background(vec3 baseColor, vec3 addedColor, float strength, float fTime)\n{\n    vec2 r = vec2(random(vUv));\n    vec2 uv = diffuse(vUv, 0.1, r);\n\n    float amountX = 0.0;\n    float amountY = 0.0;\n    uv.x += sin(fTime * 0.05 + uv.y * 3.0) * 0.2;\n    uv.y += sin(fTime * 0.035 + uv.x * 2.0) * 0.2;\n\n    amountX += sin(fTime * 1.9 + uv.x * 5.0);\n    amountX += sin(fTime * -1.8 + uv.x * 5.0);\n    amountX += sin(fTime * -0.37 + uv.x * 5.0);\n    amountX *= 0.25;\n\n    amountY += sin(fTime * 1.8 + uv.y * -5.0);\n    amountY += sin(fTime * -0.7 + uv.y * 4.4);\n    amountY += sin(fTime * 0.62 + uv.y * 5.0);\n    amountY *= 0.25;\n\n    float amount = clamp(amountX + amountY, 0.0, 1.0);\n\n    return mix(baseColor, addedColor, amount * strength);\n}\n\nvoid main()\n{\n    gl_FragColor.rgb = background(colorBg1, colorBg2, 0.6, time);\n    gl_FragColor.a = 1.0;\n}\n"
}, function(n, t) {
    n.exports = "precision highp float;\nprecision highp int;\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\n\n#ifndef PI\n    #define PI 3.141592653589793\n#endif\n\n#ifndef HALF_PI\n    #define HALF_PI 1.5707963267948966\n#endif\n\nfloat backInOut(float t) {\n    float f = t < 0.5\n    ? 2.0 * t\n    : 1.0 - (2.0 * t - 1.0);\n    float g = pow(f, 3.0) - f * sin(f * PI);\n    return t < 0.5\n    ? 0.5 * g\n    : 0.5 * (1.0 - g) + 0.5;\n}\nfloat backIn(float t) {\n    return pow(t, 3.0) - t * sin(t * PI);\n}\nfloat backOut(float t) {\n    float f = 1.0 - t;\n    return 1.0 - (pow(f, 3.0) - f * sin(f * PI));\n}\nfloat bounceOut(float t) {\n    const float a = 4.0 / 11.0;\n    const float b = 8.0 / 11.0;\n    const float c = 9.0 / 10.0;\n    const float ca = 4356.0 / 361.0;\n    const float cb = 35442.0 / 1805.0;\n    const float cc = 16061.0 / 1805.0;\n    float t2 = t * t;\n    return t < a\n    ? 7.5625 * t2\n    : t < b\n    ? 9.075 * t2 - 9.9 * t + 3.4\n    : t < c\n    ? ca * t2 - cb * t + cc\n    : 10.8 * t * t - 20.52 * t + 10.72;\n}\nfloat bounceIn(float t) {\n    return 1.0 - bounceOut(1.0 - t);\n}\nfloat bounceInOut(float t) {\n    return t < 0.5\n    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))\n    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;\n}\nfloat circularInOut(float t) {\n    return t < 0.5\n    ? 0.5 * (1.0 - sqrt(1.0 - 4.0 * t * t))\n    : 0.5 * (sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);\n}\nfloat circularIn(float t) {\n    return 1.0 - sqrt(1.0 - t * t);\n}\nfloat circularOut(float t) {\n    return sqrt((2.0 - t) * t);\n}\nfloat cubicInOut(float t) {\n    return t < 0.5\n    ? 4.0 * t * t * t\n    : 0.5 * pow(2.0 * t - 2.0, 3.0) + 1.0;\n}\nfloat cubicIn(float t) {\n    return t * t * t;\n}\nfloat cubicOut(float t) {\n    float f = t - 1.0;\n    return f * f * f + 1.0;\n}\nfloat elasticInOut(float t) {\n    return t < 0.5\n    ? 0.5 * sin(+13.0 * HALF_PI * 2.0 * t) * pow(2.0, 10.0 * (2.0 * t - 1.0))\n    : 0.5 * sin(-13.0 * HALF_PI * ((2.0 * t - 1.0) + 1.0)) * pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0;\n}\nfloat elasticIn(float t) {\n    return sin(13.0 * t * HALF_PI) * pow(2.0, 10.0 * (t - 1.0));\n}\nfloat elasticOut(float t) {\n    return sin(-13.0 * (t + 1.0) * HALF_PI) * pow(2.0, -10.0 * t) + 1.0;\n}\nfloat expoInOut(float t) {\n    return t == 0.0 || t == 1.0\n    ? t\n    : t < 0.5\n    ? +0.5 * pow(2.0, (20.0 * t) - 10.0)\n    : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;\n}\nfloat expoIn(float t) {\n    return t == 0.0 ? t : pow(2.0, 10.0 * (t - 1.0));\n}\nfloat expoOut(float t) {\n    return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t);\n}\nfloat linear(float t) {\n    return t;\n}\nfloat quadraticInOut(float t) {\n    float p = 2.0 * t * t;\n    return t < 0.5 ? p : -p + (4.0 * t) - 1.0;\n}\nfloat quadraticIn(float t) {\n    return t * t;\n}\nfloat quadraticOut(float t) {\n    return -t * (t - 2.0);\n}\nfloat quarticInOut(float t) {\n    return t < 0.5\n    ? +8.0 * pow(t, 4.0)\n    : -8.0 * pow(t - 1.0, 4.0) + 1.0;\n}\nfloat quarticIn(float t) {\n    return pow(t, 4.0);\n}\nfloat quarticOut(float t) {\n    return pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;\n}\nfloat qinticInOut(float t) {\n    return t < 0.5\n    ? +16.0 * pow(t, 5.0)\n    : -0.5 * pow(2.0 * t - 2.0, 5.0) + 1.0;\n}\nfloat qinticIn(float t) {\n    return pow(t, 5.0);\n}\nfloat qinticOut(float t) {\n    return 1.0 - (pow(t - 1.0, 5.0));\n}\nfloat sineInOut(float t) {\n    return -0.5 * (cos(PI * t) - 1.0);\n}\nfloat sineIn(float t) {\n    return sin((t - 1.0) * HALF_PI) + 1.0;\n}\nfloat sineOut(float t) {\n    return sin(t * HALF_PI);\n}\n\nattribute float offset;\nuniform float furLength;\nuniform float wind;\nuniform float gravity;\nuniform float time;\nuniform vec3 mousePosition;\nuniform float touchRadius;\nuniform float touchForce;\nuniform float mouseSpeed;\n\nvarying vec2 vUv;\nvarying float vOffset;\nvarying vec3 vNormal;\nvarying vec4 vPos;\n\nvoid main() {\n    vUv = uv;\n    vOffset = offset;\n    vNormal = normalize(normalMatrix * normal);\n\n    vec3 displacement = vec3(0.0, -1.0, 0.0) * gravity;\n    displacement += vec3(sin(time * 2.4 ), sin(time * 0.7) * 0.2, sin(time * 2.7) * 0.75) * wind;\n    vec4 wPos = modelMatrix * vec4(position, 1.0);\n    vec3 mouseVector = wPos.xyz - mousePosition;\n    float mouseDist = 1.0 - smoothstep(0.0, touchRadius, length(mouseVector));\n    vec3 influence = normalize(mouseVector) * mouseDist * touchForce;\n    displacement += influence * mouseSpeed;\n    vec3 totalDisplacement = normalize(normal + displacement * quadraticIn(offset));\n\n    float dispAmount = cubicOut(offset) * furLength;\n    vPos = modelViewMatrix * vec4(position + totalDisplacement * dispAmount, 1.0);\n    gl_Position = projectionMatrix * vPos;\n}\n"
}, function(n, t) {
    n.exports = "precision highp float;\nprecision highp int;\nuniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n\n\n#ifndef PI\n    #define PI 3.141592653589793\n#endif\n\n#ifndef HALF_PI\n    #define HALF_PI 1.5707963267948966\n#endif\n\nfloat backInOut(float t) {\n    float f = t < 0.5\n    ? 2.0 * t\n    : 1.0 - (2.0 * t - 1.0);\n    float g = pow(f, 3.0) - f * sin(f * PI);\n    return t < 0.5\n    ? 0.5 * g\n    : 0.5 * (1.0 - g) + 0.5;\n}\nfloat backIn(float t) {\n    return pow(t, 3.0) - t * sin(t * PI);\n}\nfloat backOut(float t) {\n    float f = 1.0 - t;\n    return 1.0 - (pow(f, 3.0) - f * sin(f * PI));\n}\nfloat bounceOut(float t) {\n    const float a = 4.0 / 11.0;\n    const float b = 8.0 / 11.0;\n    const float c = 9.0 / 10.0;\n    const float ca = 4356.0 / 361.0;\n    const float cb = 35442.0 / 1805.0;\n    const float cc = 16061.0 / 1805.0;\n    float t2 = t * t;\n    return t < a\n    ? 7.5625 * t2\n    : t < b\n    ? 9.075 * t2 - 9.9 * t + 3.4\n    : t < c\n    ? ca * t2 - cb * t + cc\n    : 10.8 * t * t - 20.52 * t + 10.72;\n}\nfloat bounceIn(float t) {\n    return 1.0 - bounceOut(1.0 - t);\n}\nfloat bounceInOut(float t) {\n    return t < 0.5\n    ? 0.5 * (1.0 - bounceOut(1.0 - t * 2.0))\n    : 0.5 * bounceOut(t * 2.0 - 1.0) + 0.5;\n}\nfloat circularInOut(float t) {\n    return t < 0.5\n    ? 0.5 * (1.0 - sqrt(1.0 - 4.0 * t * t))\n    : 0.5 * (sqrt((3.0 - 2.0 * t) * (2.0 * t - 1.0)) + 1.0);\n}\nfloat circularIn(float t) {\n    return 1.0 - sqrt(1.0 - t * t);\n}\nfloat circularOut(float t) {\n    return sqrt((2.0 - t) * t);\n}\nfloat cubicInOut(float t) {\n    return t < 0.5\n    ? 4.0 * t * t * t\n    : 0.5 * pow(2.0 * t - 2.0, 3.0) + 1.0;\n}\nfloat cubicIn(float t) {\n    return t * t * t;\n}\nfloat cubicOut(float t) {\n    float f = t - 1.0;\n    return f * f * f + 1.0;\n}\nfloat elasticInOut(float t) {\n    return t < 0.5\n    ? 0.5 * sin(+13.0 * HALF_PI * 2.0 * t) * pow(2.0, 10.0 * (2.0 * t - 1.0))\n    : 0.5 * sin(-13.0 * HALF_PI * ((2.0 * t - 1.0) + 1.0)) * pow(2.0, -10.0 * (2.0 * t - 1.0)) + 1.0;\n}\nfloat elasticIn(float t) {\n    return sin(13.0 * t * HALF_PI) * pow(2.0, 10.0 * (t - 1.0));\n}\nfloat elasticOut(float t) {\n    return sin(-13.0 * (t + 1.0) * HALF_PI) * pow(2.0, -10.0 * t) + 1.0;\n}\nfloat expoInOut(float t) {\n    return t == 0.0 || t == 1.0\n    ? t\n    : t < 0.5\n    ? +0.5 * pow(2.0, (20.0 * t) - 10.0)\n    : -0.5 * pow(2.0, 10.0 - (t * 20.0)) + 1.0;\n}\nfloat expoIn(float t) {\n    return t == 0.0 ? t : pow(2.0, 10.0 * (t - 1.0));\n}\nfloat expoOut(float t) {\n    return t == 1.0 ? t : 1.0 - pow(2.0, -10.0 * t);\n}\nfloat linear(float t) {\n    return t;\n}\nfloat quadraticInOut(float t) {\n    float p = 2.0 * t * t;\n    return t < 0.5 ? p : -p + (4.0 * t) - 1.0;\n}\nfloat quadraticIn(float t) {\n    return t * t;\n}\nfloat quadraticOut(float t) {\n    return -t * (t - 2.0);\n}\nfloat quarticInOut(float t) {\n    return t < 0.5\n    ? +8.0 * pow(t, 4.0)\n    : -8.0 * pow(t - 1.0, 4.0) + 1.0;\n}\nfloat quarticIn(float t) {\n    return pow(t, 4.0);\n}\nfloat quarticOut(float t) {\n    return pow(t - 1.0, 3.0) * (1.0 - t) + 1.0;\n}\nfloat qinticInOut(float t) {\n    return t < 0.5\n    ? +16.0 * pow(t, 5.0)\n    : -0.5 * pow(2.0 * t - 2.0, 5.0) + 1.0;\n}\nfloat qinticIn(float t) {\n    return pow(t, 5.0);\n}\nfloat qinticOut(float t) {\n    return 1.0 - (pow(t - 1.0, 5.0));\n}\nfloat sineInOut(float t) {\n    return -0.5 * (cos(PI * t) - 1.0);\n}\nfloat sineIn(float t) {\n    return sin((t - 1.0) * HALF_PI) + 1.0;\n}\nfloat sineOut(float t) {\n    return sin(t * HALF_PI);\n}\n\nfloat when_neq(float x, float y) {\n    return abs(sign(x - y));\n}\n\nfloat when_gt(float x, float y) {\n    return max(sign(x - y), 0.0);\n}\n\nfloat l(vec3 lightDirection, vec3 surfaceNormal)\n{\n    return max(0.0, dot(lightDirection, surfaceNormal));\n}\n\nfloat bp(vec3 lightDirection, vec3 viewDirection, vec3 surfaceNormal, float shininess)\n{\n    return pow(max(0.0, dot(surfaceNormal, normalize(lightDirection + viewDirection))), shininess);\n}\n\nuniform sampler2D tFur;\nuniform sampler2D tColor;\nuniform float furScale;\nuniform float furLength;\nuniform float furColorScale;\nuniform vec3 lDirection;\nuniform vec3 mousePosition;\n\nvarying vec2 vUv;\nvarying float vOffset;\nvarying vec3 vNormal;\nvarying vec4 vPos;\n\nvoid main() {\n\n    vec4 fur = texture2D(tFur, vUv * furScale);\n    vec3 color = texture2D(tColor, vUv * furColorScale).rgb;\n\n    if(vOffset > 0.01 && (fur.r < 0.5 || vOffset > fur.g))\n        discard;\n\n    color = mix(color - 0.2, color, vOffset);\n    vec3 normal = normalize(vNormal);\n    color -= l(lDirection, normal) * 0.8;\n    color += bp(lDirection, -vPos.xyz, normal, 20.0) * 0.2;\n\n    float alpha = cubicIn(1.0 - vOffset);\n\n    gl_FragColor = vec4(color, alpha);\n}\n"
}, function(n, t) {
    n.exports = "precision highp float;\nprecision highp int;\nattribute vec2 uv;\nattribute vec3 position;\nattribute vec3 normal;\nuniform mat4 modelViewMatrix;\nuniform mat4 projectionMatrix;\nuniform mat4 modelMatrix;\nuniform mat4 viewMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 cameraPosition;\n\n\nvarying vec2 vUv;\n\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\nuniform vec2 resolution;\n\nvoid main() {\n  vUv = uv;\n  vec2 fragCoord = uv * resolution;\n  vec2 inverseVP = 1.0 / resolution.xy;\n  v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;\n  v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;\n  v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;\n  v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;\n  v_rgbM = vec2(fragCoord * inverseVP);\n\n  gl_Position = vec4(position,1.0);\n}\n"
}, function(n, t) {
    n.exports = "precision highp float;\nprecision highp int;\nuniform mat4 viewMatrix;\nuniform vec3 cameraPosition;\n\n\nvarying vec2 vUv;\n\n//texcoords computed in vertex step\n//to avoid dependent texture reads\nvarying vec2 v_rgbNW;\nvarying vec2 v_rgbNE;\nvarying vec2 v_rgbSW;\nvarying vec2 v_rgbSE;\nvarying vec2 v_rgbM;\n\n//make sure to have a resolution uniform set to the screen size\nuniform vec2 resolution;\nuniform sampler2D tDiffuse;\n\n#define FXAA_REDUCE_MIN   (1.0/ 128.0)\n#define FXAA_REDUCE_MUL   (1.0 / 8.0)\n#define FXAA_SPAN_MAX     8.0\n\nfloat when_gt(float x, float y) {\n    return max(sign(x - y), 0.0);\n}\nfloat when_lt(float x, float y) {\n    return max(sign(y - x), 0.0);\n}\n\n//optimized version for mobile, where dependent\n//texture reads can be a bottleneck\nvec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,\n            vec2 v_rgbNW, vec2 v_rgbNE,\n            vec2 v_rgbSW, vec2 v_rgbSE,\n            vec2 v_rgbM) {\n    vec4 color;\n    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);\n    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;\n    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;\n    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;\n    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;\n    vec4 texColor = texture2D(tex, v_rgbM);\n    vec3 rgbM  = texColor.xyz;\n    vec3 luma = vec3(0.299, 0.587, 0.114);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    mediump vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *\n                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),\n              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),\n              dir * rcpDirMin)) * inverseVP;\n\n    vec3 rgbA = 0.5 * (\n        texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);\n    vec3 rgbB = rgbA * 0.5 + 0.25 * (\n        texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +\n        texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);\n\n    float lumaB = dot(rgbB, luma);\n\n\n    /*\n    if ((lumaB < lumaMin) || (lumaB > lumaMax))\n        color = vec4(rgbA, texColor.a);\n    else\n        color = vec4(rgbB, texColor.a);\n    */\n\n    color = vec4(rgbB, texColor.a);\n    color = mix(color, vec4(rgbA, texColor.a), when_lt(lumaB, lumaMin));\n    color = mix(color, vec4(rgbA, texColor.a), when_gt(lumaB, lumaMax));\n\n    return color;\n}\n\nvoid main() {\n  vec2 fragCoord = vUv * resolution;\n  gl_FragColor = fxaa(tDiffuse, fragCoord, resolution, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);\n}\n"
}, , , , , , function(n, t, e) {}, , function(n, t, e) {}, function(n, t, e) {
    "use strict";
    e.r(t);
    var o = e(3),
        f = (e(33), e(0)),
        c = e(15),
        a = e(16),
        i = e(7),
        u = (e(34), e(5)),
        s = e(28),
        l = {
            main: null,
            rootUrl: null,
            appData: null,
            client: {
                browser: "",
                device: "",
                lang: "",
                os: "",
                sizes: {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                mousePosition: {
                    x: 0,
                    y: 0
                }
            }
        },
        r = e(17),
        m = e.n(r),
        v = (e(35), e(18)),
        d = e(29),
        p = e(21),
        h = e(22),
        g = e.n(h),
        b = e(23),
        x = e.n(b),
        w = e(24),
        y = e.n(w),
        S = e(25),
        M = e.n(S);

    function P(n, t) {
        for (var e = 0; e < t.length; e++) {
            var r = t[e];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
        }
    }
    var _ = function() {
            function o(n, t, e, r) {
                ! function(n, t) {
                    if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, o), this.camera = n, this.renderer = t, this.mainUniforms = e, this.additionalGeometry = r, this.scene = new f.Bb, this.createBg(), this.createModel(), this.pass = new p.a(this.scene, this.camera), this.pass.setSize = function(n, t) {}, this.pass.renderToScreen = !1
            }
            var n, t, e;
            return n = o, (t = [{
                key: "createBg",
                value: function() {
                    var n = new f.ob(2, 2);
                    this.bgMaterial = new f.xb({
                        uniforms: {
                            colorBg1: {
                                value: new f.j(this.mainUniforms.colorBg1)
                            },
                            colorBg2: {
                                value: new f.j(this.mainUniforms.colorBg2)
                            },
                            time: {
                                value: 0
                            }
                        },
                        vertexShader: g.a,
                        fragmentShader: x.a
                    }), this.bgMaterial.depthTest = !1, this.bgMaterial.depthWrite = !1;
                    var t = new f.V(n, this.bgMaterial);
                    t.frustumCulled = !1, t.renderOrder = -3, this.scene.add(t)
                }
            }, {
                key: "createModel",
                value: function() {
                    var n = [new f.Ob(2, .5, 15, 40), new f.w(2.2, 2), this.additionalGeometry];
                    this.geometries = [];
                    for (var t = 0; t < n.length; t++) {
                        var e = new f.y;
                        e.addAttribute("position", n[t].attributes.position), e.addAttribute("normal", n[t].attributes.normal), e.addAttribute("uv", n[t].attributes.uv), e.groups = n[t].groups, e.setIndex(n[t].index);
                        for (var r = [], o = 0; o < this.mainUniforms.furSteps; o++) r.push(o / this.mainUniforms.furSteps);
                        e.addAttribute("offset", new f.x(new Float32Array(r), 1, !1, 1)), e.maxInstancedCount = this.mainUniforms.furSteps, this.geometries.push(e)
                    }
                    this.furTextures = [];
                    for (var a = ["cheetah", "zebra", "giraffe", "cow"], i = [2, 4, 1, 2], u = 0; u < a.length; u++) {
                        var s = (new f.Nb).load("img/" + a[u] + ".jpg");
                        s.wrapS = f.zb, s.wrapT = f.zb, this.furTextures.push({
                            texture: s,
                            scale: i[u]
                        })
                    }
                    this.furMaterial = new f.xb({
                        uniforms: {
                            lDirection: {
                                value: this.mainUniforms.lightDirection
                            },
                            tFur: {
                                value: this.generateFurTexture()
                            },
                            furScale: {
                                value: this.mainUniforms.furScale
                            },
                            furLength: {
                                value: this.mainUniforms.furLength
                            },
                            furColorScale: {
                                value: this.furTextures[0].scale
                            },
                            tColor: {
                                value: this.furTextures[0].texture
                            },
                            wind: {
                                value: this.mainUniforms.wind
                            },
                            gravity: {
                                value: this.mainUniforms.gravity
                            },
                            mousePosition: {
                                value: new f.Tb(0, 0, 0)
                            },
                            touchRadius: {
                                value: this.mainUniforms.touchRadius
                            },
                            touchForce: {
                                value: this.mainUniforms.touchForce
                            },
                            mouseSpeed: {
                                value: 0
                            },
                            time: {
                                value: 0
                            }
                        },
                        vertexShader: y.a,
                        fragmentShader: M.a,
                        transparent: !0
                    }), this.furMesh = new f.V(this.geometries[0], this.furMaterial), this.furMesh.frustumCulled = !1, this.scene.add(this.furMesh)
                }
            }, {
                key: "generateFurTexture",
                value: function() {
                    var n = document.createElement("canvas");
                    n.width = this.mainUniforms.furTextureSize, n.height = this.mainUniforms.furTextureSize;
                    for (var t = n.getContext("2d"), e = this.mainUniforms.furTextureSize * this.mainUniforms.furTextureSize * this.mainUniforms.furDensity, r = 0; r < e; r++) {
                        var o = Math.floor(255 * Math.max(this.mainUniforms.furMinLength, Math.random()));
                        t.fillStyle = "rgba(" + 255..toString() + "," + o.toString() + "," + (0).toString() + ",255)", t.fillRect(Math.random() * this.mainUniforms.furTextureSize, Math.random() * this.mainUniforms.furTextureSize, this.mainUniforms.furHairSize, this.mainUniforms.furHairSize)
                    }
                    var a = new f.Mb(n);
                    return a.wrapS = f.zb, a.wrapT = f.zb, a.needsUpdate = !0, a.anisotropy = this.renderer.capabilities.getMaxAnisotropy(), a
                }
            }, {
                key: "addTime",
                value: function() {
                    this.bgMaterial && (this.bgMaterial.uniforms.time.value += .02, this.furMaterial.uniforms.time.value += .01)
                }
            }]) && P(n.prototype, t), e && P(n, e), o
        }(),
        C = e(6),
        O = e(26),
        I = e.n(O),
        A = e(27),
        U = e.n(A);
    var F = function n() {
        var e = this;
        ! function(n, t) {
            if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, n), this.material = new f.xb({
            uniforms: {
                tDiffuse: {
                    value: null
                },
                resolution: {
                    value: new f.Sb
                }
            },
            vertexShader: I.a,
            fragmentShader: U.a
        }), this.material.depthWrite = !1, this.material.depthTest = !1, this.pass = new C.a(this.material), this.pass.setSize = function(n, t) {
            e.material.uniforms.resolution.value.x = n, e.material.uniforms.resolution.value.y = t
        }, this.pass.needsSwap = !0, this.pass.renderToScreen = !0
    };

    function T(n) {
        return (T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(n) {
            return typeof n
        } : function(n) {
            return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
        })(n)
    }

    function D(n, t) {
        for (var e = 0; e < t.length; e++) {
            var r = t[e];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
        }
    }

    function z(n, t) {
        return !t || "object" !== T(t) && "function" != typeof t ? function(n) {
            if (void 0 !== n) return n;
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        }(n) : t
    }

    function E(n) {
        return (E = Object.setPrototypeOf ? Object.getPrototypeOf : function(n) {
            return n.__proto__ || Object.getPrototypeOf(n)
        })(n)
    }

    function N(n, t) {
        return (N = Object.setPrototypeOf || function(n, t) {
            return n.__proto__ = t, n
        })(n, t)
    }
    var k = function(n) {
        function o(n, t, e) {
            var r;
            return function(n, t) {
                if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, o), (r = z(this, E(o).call(this, {
                eventHub: {},
                store: l,
                router: {
                    resize: function() {}
                },
                url: n,
                client: t,
                appData: e,
                appType: "DESKTOP",
                templateFunction: m.a
            }))).mainUniforms = {
                lightDirection: new f.Tb(5, -5, -.5).normalize(),
                colorBg1: "#110b04",
                colorBg2: "#46341c",
                furTextureSize: 256,
                furDensity: .2,
                furHairSize: 1,
                furScale: 7,
                furColorScale: 2,
                furSteps: 60,
                furLength: .48,
                furMinLength: .5,
                texture: 0,
                geometry: 0,
                wind: .6,
                gravity: .5,
                touchRadius: 3,
                touchForce: 1.8
            }, r
        }
        var t, e, r;
        return function(n, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            n.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: n,
                    writable: !0,
                    configurable: !0
                }
            }), t && N(n, t)
        }(o, s["a"]), t = o, (e = [{
            key: "setup",
            value: function() {
                var o = this;
                this.renderer = new f.Yb({
                    canvas: document.querySelector("canvas"),
                    antialias: !1,
                    transparent: !0
                }), this.renderer.setClearColor(this.mainUniforms.colorBg), this.camera = new f.mb(75, this.store.client.sizes.width / this.store.client.sizes.height, 1e-4, 1e3), this.camera.target = new f.Tb(0, 0, 0), this.camera.position.set(-2.5, 0, 4.3), this.camera.lookAt(this.camera.target), this.controls = new v.a(this.camera, document.querySelector("canvas")), this.controls.target = new f.Tb(0, 0, 0), this.controls.enableDamping = !0, this.controls.dampingFactor = .15, this.rayCaster = new f.yb, this.mousePosition = new f.Sb(-1, -1), this.prevPosition = new f.Sb, this.speed = 0, (new a.a).load("img/skull.gltf", function(n) {
                    o.effectComposerScene = new d.a(o.renderer), o.passScene = new _(o.camera, o.renderer, o.mainUniforms, n.scene.children[1].geometry), o.passFXAA = new F, o.effectComposerScene.addPass(o.passScene.pass), o.effectComposerScene.addPass(o.passFXAA.pass), o.createGui(), o.events.add(document, "mousemove", o.move, o), o.events.add(document, "touchmove", o.move, o);
                    var t = new f.Tb(0, 0, 0),
                        e = new f.Tb,
                        r = new f.nb;
                    Object(i.a)(-1, function() {
                        o.controls.update(), o.speed += 2 * o.mousePosition.distanceTo(o.prevPosition), o.speed = u.a.clamp(u.a.round(.96 * o.speed, 4), 0, 1), o.passScene.furMaterial.uniforms.mouseSpeed.value = o.speed, o.prevPosition.copy(o.mousePosition), o.rayCaster.setFromCamera(o.mousePosition, o.camera);
                        var n = o.rayCaster.intersectObject(o.passScene.scene.children[1]);
                        0 < n.length ? o.animateMousePosition(n[0].point) : (r.setFromNormalAndCoplanarPoint(o.camera.position, t), o.rayCaster.ray.intersectPlane(r, e), o.animateMousePosition(e)), o.passScene.addTime(), o.effectComposerScene.render()
                    })
                })
            }
        }, {
            key: "move",
            value: function(n) {
                var t = n.targetTouches ? n.targetTouches[0] : n;
                this.mousePosition.x = t.clientX / this.store.client.sizes.width * 2 - 1, this.mousePosition.y = -1 * (t.clientY / this.store.client.sizes.height * 2 - 1)
            }
        }, {
            key: "animateMousePosition",
            value: function(n) {
                Object(i.b)(this.passScene.furMaterial.uniforms.mousePosition.value, .35, {
                    x: n.x,
                    y: n.y,
                    z: n.z
                }, {
                    immediate: !0,
                    ease: "P3.out",
                    overwrite: !0
                }, 0)
            }
        }, {
            key: "createGui",
            value: function() {
                var t = this,
                    n = new c.a,
                    e = n.addFolder("Background");
                e.closed = !1, e.addColor(this.mainUniforms, "colorBg1").onChange(function(n) {
                    t.passScene.bgMaterial.uniforms.colorBg1.value = new f.j(n)
                }), e.addColor(this.mainUniforms, "colorBg2").onChange(function(n) {
                    t.passScene.bgMaterial.uniforms.colorBg2.value = new f.j(n)
                });
                var r = n.addFolder("Fur");
                r.closed = !1, r.add(this.mainUniforms, "furDensity", 0, .3).onChange(function(n) {
                    t.passScene.furMaterial.uniforms.tFur.value = t.passScene.generateFurTexture()
                }), r.add(this.mainUniforms, "furHairSize", .01, 5).onChange(function(n) {
                    t.passScene.furMaterial.uniforms.tFur.value = t.passScene.generateFurTexture()
                }), r.add(this.mainUniforms, "furScale", 0, 15).onChange(function(n) {
                    t.passScene.furMaterial.uniforms.furScale.value = n
                });
                var o = r.add(this.mainUniforms, "furColorScale", .2, 5).step(1);
                o.onChange(function(n) {
                    t.passScene.furMaterial.uniforms.furColorScale.value = n
                });
                var a = r.add(this.mainUniforms, "furLength", .01, 2);
                a.onChange(function(n) {
                    t.passScene.furMaterial.uniforms.furLength.value = n
                }), r.add(this.mainUniforms, "furMinLength", .01, 1).onChange(function(n) {
                    t.passScene.furMaterial.uniforms.tFur.value = t.passScene.generateFurTexture()
                });
                var i = n.addFolder("Interaction");
                i.closed = !1, i.add(this.mainUniforms, "wind", 0, 1).onChange(function(n) {
                    t.passScene.furMaterial.uniforms.wind.value = n
                }), i.add(this.mainUniforms, "gravity", 0, 2).onChange(function(n) {
                    t.passScene.furMaterial.uniforms.gravity.value = n
                }), i.add(this.mainUniforms, "touchRadius", .01, 5).onChange(function(n) {
                    t.passScene.furMaterial.uniforms.touchRadius.value = n
                }), i.add(this.mainUniforms, "touchForce", 0, 5).onChange(function(n) {
                    t.passScene.furMaterial.uniforms.touchForce.value = n
                });
                var u = r.add(this.mainUniforms, "texture", {
                    cheetah: 0,
                    zebra: 1,
                    giraffe: 2,
                    cow: 3
                });
                u.onChange(function(n) {
                    t.passScene.furMaterial.uniforms.tColor.value = t.passScene.furTextures[n].texture, o.setValue(t.passScene.furTextures[n].scale)
                });
                var s = [.48, .4, .35],
                    l = r.add(this.mainUniforms, "geometry", {
                        torus: 0,
                        sphere: 1,
                        wolf: 2
                    });
                l.onChange(function(n) {
                    t.passScene.furMesh.geometry = t.passScene.geometries[n], a.setValue(s[n]), "1" === n && u.setValue(1), "2" === n && u.setValue(2)
                }), this.events.add(document, "keydown", function(n) {
                    78 === n.keyCode && u.setValue(2), 77 === n.keyCode && l.setValue(2)
                }), n.close()
            }
        }, {
            key: "resize",
            value: function(n, t) {
                this.renderer && (this.camera.aspect = n / t, this.camera.updateProjectionMatrix(), this.renderer.setSize(n, t), this.effectComposerScene && this.effectComposerScene.setSize(n, t))
            }
        }]) && D(t.prototype, e), r && D(t, r), o
    }();

    function q(n, t) {
        for (var e = 0; e < t.length; e++) {
            var r = t[e];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
        }
    }
    var L = window.location.protocol + "//" + window.location.host,
        W = {
            lang: "",
            os: "",
            device: "",
            browser: ""
        },
        j = function() {
            function n() {
                ! function(n, t) {
                    if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, n), this.detectOS(), this.detectDevice(), this.addClasses(), this.initApp(), this.sayHello()
            }
            var t, e, r;
            return t = n, (e = [{
                key: "detectOS",
                value: function() {
                    !0 === o.a.mac ? W.os = "mac" : !0 === o.a.ios ? W.os = "ios" : W.os = "windows"
                }
            }, {
                key: "detectDevice",
                value: function() {
                    if (o.a.mobile || o.a.tablet) W.device = o.a.mobile ? "mobile" : "tablet";
                    else switch (W.device = "desktop", o.a.name) {
                        case "Internet Explorer":
                            W.browser = "explorer";
                            break;
                        case "Microsoft Edge":
                            W.browser = "edge";
                            break;
                        case "Firefox":
                            W.browser = "firefox";
                            break;
                        case "Safari":
                            W.browser = "safari";
                            break;
                        default:
                            W.browser = "chrome"
                    }
                }
            }, {
                key: "addClasses",
                value: function() {
                    var n = document.querySelector("html");
                    for (var t in W) W[t] && n.classList.add(W[t])
                }
            }, {
                key: "initApp",
                value: function(n) {
                    new k(L, W, {}).render()
                }
            }, {
                key: "sayHello",
                value: function() {
                    if ("Chrome" === o.a.name || "Firefox" === o.a.name) {
                        window.console.log.apply(console, ["%c Developed by @warrengalyen -- https://www.mechanikadesign.com ", "display: block; padding: 5px; background: #351330; line-height: 40px; color: #ffffff;"])
                    } else window.console.log("Developed by @warrengalyen -- https://www.mechanikadesign.com")
                }
            }]) && q(t.prototype, e), r && q(t, r), n
        }();
    "loading" !== document.readyState ? new j : document.addEventListener("DOMContentLoaded", function() {
        new j
    }, !1)
}]);