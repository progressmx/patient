import {
  require_react as require_react2
} from "/build/_shared/chunk-342ARKZ2.js";
import {
  NavLink
} from "/build/_shared/chunk-4FXQRTTB.js";
import {
  createHotContext
} from "/build/_shared/chunk-OKXP6DZS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/componets/navbar.tsx
var import_react3 = __toESM(require_react2());

// app/componets/list.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\componets\\\\list.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\componets\\list.tsx"
  );
  import.meta.hot.lastModified = "1690410446044.1736";
}
function List(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("ul", { className: "flex " + props.className, children: props.children }, void 0, false, {
    fileName: "app/componets/list.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/componets/list.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = List;
var _c;
$RefreshReg$(_c, "List");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/componets/linkitem.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\componets\\\\linkitem.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\componets\\linkitem.tsx"
  );
  import.meta.hot.lastModified = "1690037337192.7388";
}
function LinkItem(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("li", { className: "flex mb-2 p-2 text-white text-sm hover:cursor-pointer hover:bg-gray-500 rounded hover:text-black", children: props.children }, void 0, false, {
    fileName: "app/componets/linkitem.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/componets/linkitem.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c2 = LinkItem;
var linkitem_default = LinkItem;
var _c2;
$RefreshReg$(_c2, "LinkItem");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// node_modules/react-icons/lib/esm/iconBase.js
var import_react2 = __toESM(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
var import_react = __toESM(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data2) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data2.attr)
    }, props), Tree2Element(data2.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/fi/index.esm.js
function FiUsers(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "path", "attr": { "d": "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" } }, { "tag": "circle", "attr": { "cx": "9", "cy": "7", "r": "4" } }, { "tag": "path", "attr": { "d": "M23 21v-2a4 4 0 0 0-3-3.87" } }, { "tag": "path", "attr": { "d": "M16 3.13a4 4 0 0 1 0 7.75" } }] })(props);
}

// node_modules/react-icons/ai/index.esm.js
function AiOutlineDelete(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] })(props);
}
function AiOutlineEdit(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] })(props);
}
function AiOutlineHome(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" } }] })(props);
}
function AiOutlineLogout(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 1024 1024" }, "child": [{ "tag": "path", "attr": { "d": "M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 0 1-112.7 75.9A352.8 352.8 0 0 1 512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 0 1-112.7-75.9 353.28 353.28 0 0 1-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 0 0 0-12.6z" } }] })(props);
}

// app/componets/navbar.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\componets\\\\navbar.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\componets\\navbar.tsx"
  );
  import.meta.hot.lastModified = "1690420427158.2075";
}
var data = [{
  name: "Dashboard",
  link: "./",
  icon: AiOutlineHome
}, {
  name: "Patients",
  link: "/patients",
  icon: FiUsers
}];
function NavBar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row shadow mx-auto h-[60px] bg-[#00091A]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row gap-1 w-[10%] justify-start place-items-center md:justify-center md:place-items-center md:w-[40%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Typography, { variant: "h4", className: "text-bold text-gray-400", children: "Octaven" }, void 0, false, {
      fileName: "app/componets/navbar.tsx",
      lineNumber: 40,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/componets/navbar.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-row gap-1 justify-center w-[90%] place-items-center md:justify-center md:place-items-center md:w-[60%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(List, { className: "flex-row", children: [
      data.map((links) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(linkitem_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(links.icon, { className: "w-5 h-5 mr-2" }, void 0, false, {
          fileName: "app/componets/navbar.tsx",
          lineNumber: 47,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(NavLink, { to: links.link, children: links.name }, void 0, false, {
          fileName: "app/componets/navbar.tsx",
          lineNumber: 48,
          columnNumber: 25
        }, this)
      ] }, links.name, true, {
        fileName: "app/componets/navbar.tsx",
        lineNumber: 46,
        columnNumber: 36
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { action: "./logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("button", { className: "bg-transparent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(linkitem_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AiOutlineLogout, { className: "w-5 h-5 mr-2" }, void 0, false, {
          fileName: "app/componets/navbar.tsx",
          lineNumber: 53,
          columnNumber: 25
        }, this),
        "log out"
      ] }, void 0, true, {
        fileName: "app/componets/navbar.tsx",
        lineNumber: 52,
        columnNumber: 25
      }, this) }, void 0, false, {
        fileName: "app/componets/navbar.tsx",
        lineNumber: 51,
        columnNumber: 21
      }, this) }, void 0, false, {
        fileName: "app/componets/navbar.tsx",
        lineNumber: 50,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/componets/navbar.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this) }, void 0, false, {
      fileName: "app/componets/navbar.tsx",
      lineNumber: 44,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/componets/navbar.tsx",
    lineNumber: 38,
    columnNumber: 10
  }, this);
}
_c3 = NavBar;
var _c3;
$RefreshReg$(_c3, "NavBar");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  GenIcon,
  AiOutlineDelete,
  AiOutlineEdit,
  NavBar
};
//# sourceMappingURL=/build/_shared/chunk-AOAVXNEV.js.map
