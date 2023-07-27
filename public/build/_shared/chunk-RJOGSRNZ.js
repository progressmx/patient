import {
  createHotContext
} from "/build/_shared/chunk-OKXP6DZS.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/componets/card.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\componets\\\\card.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\componets\\card.tsx"
  );
  import.meta.hot.lastModified = "1690004842635.9324";
}
function Card(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "flex flex-col gap-2 bg-white shadow rounded-md p-6", children: props.children }, void 0, false, {
    fileName: "app/componets/card.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = Card;
var card_default = Card;
var _c;
$RefreshReg$(_c, "Card");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

export {
  card_default
};
//# sourceMappingURL=/build/_shared/chunk-RJOGSRNZ.js.map
