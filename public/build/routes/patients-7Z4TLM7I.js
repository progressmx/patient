import {
  AiOutlineDelete,
  AiOutlineEdit,
  GenIcon,
  NavBar
} from "/build/_shared/chunk-AOAVXNEV.js";
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
  useLoaderData,
  useNavigation
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

// app/routes/patients.tsx
var import_react4 = __toESM(require_react2());
var import_react5 = __toESM(require_react());
var import_auth = __toESM(require_auth());

// node_modules/react-icons/bs/index.esm.js
function BsFillEyeFill(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" } }, { "tag": "path", "attr": { "d": "M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" } }] })(props);
}
function BsFillPersonPlusFill(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" } }, { "tag": "path", "attr": { "fillRule": "evenodd", "d": "M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z" } }] })(props);
}

// app/componets/conatinerbody.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\componets\\\\conatinerbody.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\componets\\conatinerbody.tsx"
  );
  import.meta.hot.lastModified = "1690043093222.5356";
}
function ConatinerBody(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_jsx_dev_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "sm:w-full text-left " + props.className, children: props.children }, void 0, false, {
    fileName: "app/componets/conatinerbody.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/componets/conatinerbody.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = ConatinerBody;
var _c;
$RefreshReg$(_c, "ConatinerBody");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/componets/button.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\componets\\\\button.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\componets\\button.tsx"
  );
  import.meta.hot.lastModified = "1690042935594.5";
}
function Button(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_jsx_dev_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("button", { className: "flex flex-row justify-center place-items-center w-full gap-2 hover:cursor-pointer rounded-sm p-[10] " + props.className, children: props.children }, void 0, false, {
    fileName: "app/componets/button.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/componets/button.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c2 = Button;
var button_default = Button;
var _c2;
$RefreshReg$(_c2, "Button");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/componets/container.tsx
var import_jsx_dev_runtime3 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\componets\\\\container.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\componets\\container.tsx"
  );
  import.meta.hot.lastModified = "1690408564523.9314";
}
function PatientContainer(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-4 mt-6", children: props.data.map((patient) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex flex-col gap-4 p-4 shadow rounded border-[1px] border-gray-400 md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ConatinerBody, { className: " md:w-[30%]", children: [
      patient.firstName,
      " ",
      patient.lastName
    ] }, void 0, true, {
      fileName: "app/componets/container.tsx",
      lineNumber: 28,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ConatinerBody, { className: " md:w-[30%]", children: patient.reason }, void 0, false, {
      fileName: "app/componets/container.tsx",
      lineNumber: 29,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ConatinerBody, { className: " md:w-[30%]", children: patient.paymentMethod }, void 0, false, {
      fileName: "app/componets/container.tsx",
      lineNumber: 30,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ConatinerBody, { className: " md:w-[30%]", children: patient.createdOn }, void 0, false, {
      fileName: "app/componets/container.tsx",
      lineNumber: 31,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ConatinerBody, { className: " md:w-[10%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(button_default, { className: "bg-green-500", children: [
      "Edit ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AiOutlineEdit, { className: "w-5 h-5" }, void 0, false, {
        fileName: "app/componets/container.tsx",
        lineNumber: 34,
        columnNumber: 34
      }, this)
    ] }, void 0, true, {
      fileName: "app/componets/container.tsx",
      lineNumber: 33,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/componets/container.tsx",
      lineNumber: 32,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(ConatinerBody, { className: "md:w-[10%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(button_default, { className: "bg-red-500", children: [
      "Delete ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(AiOutlineDelete, { className: "w-5 h-5" }, void 0, false, {
        fileName: "app/componets/container.tsx",
        lineNumber: 39,
        columnNumber: 36
      }, this)
    ] }, void 0, true, {
      fileName: "app/componets/container.tsx",
      lineNumber: 38,
      columnNumber: 25
    }, this) }, void 0, false, {
      fileName: "app/componets/container.tsx",
      lineNumber: 37,
      columnNumber: 21
    }, this)
  ] }, patient.id, true, {
    fileName: "app/componets/container.tsx",
    lineNumber: 27,
    columnNumber: 36
  }, this)) }, void 0, false, {
    fileName: "app/componets/container.tsx",
    lineNumber: 26,
    columnNumber: 10
  }, this);
}
_c3 = PatientContainer;
var _c3;
$RefreshReg$(_c3, "PatientContainer");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/componets/newpatient.tsx
var import_react2 = __toESM(require_react2());

// app/componets/inputbundle.tsx
var import_react = __toESM(require_react2());
var import_jsx_dev_runtime4 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\componets\\\\inputbundle.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\componets\\inputbundle.tsx"
  );
  import.meta.hot.lastModified = "1690057129493.0583";
}
function InputBundle(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: props.input_bundle.map((field) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react.Input, { size: "md", color: "indigo", label: field.label, name: field.name }, void 0, false, {
    fileName: "app/componets/inputbundle.tsx",
    lineNumber: 25,
    columnNumber: 42
  }, this)) }, void 0, false, {
    fileName: "app/componets/inputbundle.tsx",
    lineNumber: 24,
    columnNumber: 10
  }, this);
}
_c4 = InputBundle;
var inputbundle_default = InputBundle;
var _c4;
$RefreshReg$(_c4, "InputBundle");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/componets/select.tsx
var import_jsx_dev_runtime5 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\componets\\\\select.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\componets\\select.tsx"
  );
  import.meta.hot.lastModified = "1690059396444.2727";
}
function Select(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("select", { name: props.name, className: "rounded-md border-[1px] border-gray-400 focus:ring-[2px]  focus:ring-indigo-500 h-10 p-2", children: props.select_group.map((reason) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("option", { value: reason.value, className: "rounded p-4 m-1", children: reason.label }, void 0, false, {
    fileName: "app/componets/select.tsx",
    lineNumber: 27,
    columnNumber: 43
  }, this)) }, void 0, false, {
    fileName: "app/componets/select.tsx",
    lineNumber: 26,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/componets/select.tsx",
    lineNumber: 25,
    columnNumber: 10
  }, this);
}
_c5 = Select;
var select_default = Select;
var _c5;
$RefreshReg$(_c5, "Select");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/componets/newpatient.tsx
var import_jsx_dev_runtime6 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\componets\\\\newpatient.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\componets\\newpatient.tsx"
  );
  import.meta.hot.lastModified = "1690409079322.867";
}
var text_fields = [{
  name: "firstName",
  label: "first name"
}, {
  name: "lastName",
  label: "last name"
}, {
  name: "phone",
  label: "phone number"
}, {
  name: "idNumber",
  label: "id / passport number"
}];
var visit_reason = [{
  label: "Consultation",
  value: "consult"
}, {
  label: "Check-up",
  value: "check"
}, {
  label: "Bill payment",
  value: "bill"
}];
var payment_method = [{
  label: "Cash",
  value: "cash"
}, {
  label: "Medical AID",
  value: "medicalAid"
}];
function NewPatient() {
  _s();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative flex justify-center place-items-center w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react2.Card, { color: "transparent", shadow: false, className: "w-[100vw] mt-4 md:w-[70vw] lg:w-[30vw] p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react2.Typography, { variant: "h4", className: "text-bold text-gray-900 text-center", children: " Add new patient" }, void 0, false, {
      fileName: "app/componets/newpatient.tsx",
      lineNumber: 63,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react2.Typography, { className: "text-gray-800 opacity-70 text-center", children: "Fill in the details" }, void 0, false, {
      fileName: "app/componets/newpatient.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col gap-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(inputbundle_default, { input_bundle: text_fields }, void 0, false, {
        fileName: "app/componets/newpatient.tsx",
        lineNumber: 67,
        columnNumber: 20
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react2.Input, { type: "date", label: "date of bith", name: "dob" }, void 0, false, {
        fileName: "app/componets/newpatient.tsx",
        lineNumber: 68,
        columnNumber: 20
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(select_default, { label: "visit reason", name: "reason", select_group: visit_reason }, void 0, false, {
        fileName: "app/componets/newpatient.tsx",
        lineNumber: 69,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(select_default, { label: "payment methon", name: "payment", select_group: payment_method }, void 0, false, {
        fileName: "app/componets/newpatient.tsx",
        lineNumber: 70,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react2.Button, { disabled: isSubmitting, type: "submit", children: [
        " ",
        isSubmitting ? "Adding..." : "Add Patient"
      ] }, void 0, true, {
        fileName: "app/componets/newpatient.tsx",
        lineNumber: 71,
        columnNumber: 21
      }, this)
    ] }, void 0, true, {
      fileName: "app/componets/newpatient.tsx",
      lineNumber: 66,
      columnNumber: 17
    }, this) }, void 0, false, {
      fileName: "app/componets/newpatient.tsx",
      lineNumber: 65,
      columnNumber: 13
    }, this)
  ] }, void 0, true, {
    fileName: "app/componets/newpatient.tsx",
    lineNumber: 62,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/componets/newpatient.tsx",
    lineNumber: 61,
    columnNumber: 10
  }, this);
}
_s(NewPatient, "I2WaJhUM5KV32aS1+j3KKeVsgyA=", false, function() {
  return [useNavigation];
});
_c6 = NewPatient;
var newpatient_default = NewPatient;
var _c6;
$RefreshReg$(_c6, "NewPatient");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/patients.tsx
var import_node = __toESM(require_node());
var import_validator = __toESM(require_validator());
var import_jsx_dev_runtime7 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\patients.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s2 = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\patients.tsx"
  );
  import.meta.hot.lastModified = "1690420754778.4817";
}
function Patients() {
  _s2();
  const [open, setOpen] = (0, import_react5.useState)(false);
  const handleOpen = () => setOpen(!open);
  const {
    patient
  } = useLoaderData();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(NavBar, {}, void 0, false, {
      fileName: "app/routes/patients.tsx",
      lineNumber: 72,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "relative flex flex-col mx-auto m-4 top-20 md:h-auto md:w-[80%] md:m-[0] md:p-8 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-2/4 flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.Typography, { varient: "h3", className: "text-gray-900 text-bold text-2xl", children: !open ? "My patients" : "" }, void 0, false, {
            fileName: "app/routes/patients.tsx",
            lineNumber: 76,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react4.Typography, { varient: "lead", className: "text-gray-900 opacity-80", children: !open ? " List of all the patients you captured" : "" }, void 0, false, {
            fileName: "app/routes/patients.tsx",
            lineNumber: 79,
            columnNumber: 21
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/patients.tsx",
          lineNumber: 75,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "flex justify-end w-2/4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { onClick: handleOpen, className: "flex flex-row bg-blue-800 gap-2 w-[50%] justify-center place-items-center h-8 md:p-4 md:w-[40%] rounded text-white", children: !open ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
          "Add new ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BsFillPersonPlusFill, {}, void 0, false, {
            fileName: "app/routes/patients.tsx",
            lineNumber: 85,
            columnNumber: 44
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/patients.tsx",
          lineNumber: 85,
          columnNumber: 34
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
          "View ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(BsFillEyeFill, {}, void 0, false, {
            fileName: "app/routes/patients.tsx",
            lineNumber: 85,
            columnNumber: 81
          }, this)
        ] }, void 0, true, {
          fileName: "app/routes/patients.tsx",
          lineNumber: 85,
          columnNumber: 74
        }, this) }, void 0, false, {
          fileName: "app/routes/patients.tsx",
          lineNumber: 84,
          columnNumber: 21
        }, this) }, void 0, false, {
          fileName: "app/routes/patients.tsx",
          lineNumber: 83,
          columnNumber: 17
        }, this)
      ] }, void 0, true, {
        fileName: "app/routes/patients.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: !open ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(PatientContainer, { data: patient }, void 0, false, {
        fileName: "app/routes/patients.tsx",
        lineNumber: 90,
        columnNumber: 26
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(newpatient_default, {}, void 0, false, {
        fileName: "app/routes/patients.tsx",
        lineNumber: 90,
        columnNumber: 64
      }, this) }, void 0, false, {
        fileName: "app/routes/patients.tsx",
        lineNumber: 89,
        columnNumber: 13
      }, this)
    ] }, void 0, true, {
      fileName: "app/routes/patients.tsx",
      lineNumber: 73,
      columnNumber: 9
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/patients.tsx",
    lineNumber: 71,
    columnNumber: 10
  }, this);
}
_s2(Patients, "AmMw2Seja7zC1tbtTFTCvlc0Ry0=", false, function() {
  return [useLoaderData];
});
_c7 = Patients;
var _c7;
$RefreshReg$(_c7, "Patients");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Patients as default
};
//# sourceMappingURL=/build/routes/patients-7Z4TLM7I.js.map
