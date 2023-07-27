import {
  card_default
} from "/build/_shared/chunk-RJOGSRNZ.js";
import {
  require_node,
  require_validator
} from "/build/_shared/chunk-QA6CUXUH.js";
import {
  require_auth,
  require_react as require_react2
} from "/build/_shared/chunk-342ARKZ2.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-4FXQRTTB.js";
import {
  createHotContext
} from "/build/_shared/chunk-OKXP6DZS.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/login.tsx
var import_react = __toESM(require_react2());
var import_node = __toESM(require_node());
var import_auth = __toESM(require_auth());
var import_react3 = __toESM(require_react());
var import_validator = __toESM(require_validator());
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\login.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\login.tsx"
  );
  import.meta.hot.lastModified = "1690028712522.8423";
}
function Signin() {
  _s();
  const actionData = useActionData();
  const firstLoad = (0, import_react3.useRef)(true);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "absolute flex justify-center place-items-center  h-full w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(card_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Typography, { variant: "h4", className: "text-gray-900", children: "Log in" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 43,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Typography, { className: "text-gray-900 font-normal", children: "fill in the details to login" }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "m-4 flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Input, { label: "email", name: "email" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 48,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Input, { type: "password", label: "password", name: "password" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 49,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("input", { type: "hidden", name: "__action", value: "register" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 50,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Button, { type: "submit", children: "login" }, void 0, false, {
        fileName: "app/routes/login.tsx",
        lineNumber: 51,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.Typography, { children: [
        "Dont have and account ? ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("a", { href: "/join", className: "text-blue-400", children: "Create account" }, void 0, false, {
          fileName: "app/routes/login.tsx",
          lineNumber: 53,
          columnNumber: 49
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/login.tsx",
        lineNumber: 52,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/login.tsx",
      lineNumber: 46,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/routes/login.tsx",
      lineNumber: 45,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/login.tsx",
    lineNumber: 42,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/login.tsx",
    lineNumber: 41,
    columnNumber: 10
  }, this);
}
_s(Signin, "d943+0AEIZwLOrq2JoNNlWIU5Y0=", false, function() {
  return [useActionData];
});
_c = Signin;
var _c;
$RefreshReg$(_c, "Signin");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Signin as default
};
//# sourceMappingURL=/build/routes/login-BVY4UAKE.js.map
