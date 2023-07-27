var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 48,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-2N4BJ6GO.css";

// app/root.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 15,
    columnNumber: 5
  }, this);
}
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];

// app/routes/patients.tsx
var patients_exports = {};
__export(patients_exports, {
  action: () => action,
  default: () => Patients,
  loader: () => loader
});
var import_react8 = require("@material-tailwind/react"), import_react9 = require("react");

// app/utils/prisma.server.ts
var import_client = require("@prisma/client"), prisma;
global.__db || (global.__db = new import_client.PrismaClient(), global.__db.$connect()), prisma = global.__db;

// app/utils/auth.server.ts
var import_node2 = require("@remix-run/node");

// app/utils/user.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));
async function createUser(user) {
  let passwordHash = await import_bcryptjs.default.hash(user.password, 10);
  return { id: (await prisma.user.create(
    {
      data: {
        fullName: user.fullName,
        email: user.email,
        password: passwordHash
      }
    }
  )).id, email: user.email };
}
async function createPatient(patient) {
  let joiDate = (/* @__PURE__ */ new Date()).toString(), shortJoinDate = new Date(joiDate).toDateString();
  return { id: (await prisma.Patient.create(
    {
      data: {
        firstName: patient.firstName,
        lastName: patient.lastName,
        idNumber: patient.idNumber,
        phone: patient.contact,
        dob: patient.dobStr,
        createdOn: shortJoinDate,
        reason: patient.reason,
        paymentMethod: patient.payment,
        owner: {
          connect: {
            id: patient.userId
          }
        }
      }
    }
  )).id };
}

// app/utils/auth.server.ts
var import_bcryptjs2 = __toESM(require("bcryptjs")), sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node2.createCookieSessionStorage)(
  {
    cookie: {
      name: "user-session",
      secure: !1,
      secrets: [sessionSecret],
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
      httpOnly: !0
    }
  }
);
async function register(user) {
  if (await prisma.user.count({ where: { email: user.email } }))
    return console.log("user already exist"), (0, import_node2.json)({ error: "User already exist with that email" }, { status: 400 });
  let newUser = await createUser(user);
  return newUser ? createUserSesseion(newUser.id, "/") : (console.log("Something went wrong in creating new user"), (0, import_node2.json)(
    {
      error: "Something went wrong in creating new user",
      fields: { email: user.email, password: user.password }
    },
    { status: 400 }
  ));
}
async function registerPatient(user) {
  return await prisma.Patient.count({ where: { firstName: user.firstName } }) ? (console.log("user already exist"), (0, import_node2.json)({ error: "User already exist with that email" }, { status: 400 })) : await createPatient(user) ? null : (console.log("Something went wrong in creating new patient"), (0, import_node2.json)(
    {
      error: "Something went wrong in creating new patient",
      fields: {
        firstName: user.firstName,
        lastName: user.lastName,
        idNumber: user.idNumber,
        phone: user.contact,
        dob: user.dobStr,
        reason: user.reason,
        payment: user.payment
      }
    },
    { status: 400 }
  ));
}
async function login({ email, password }) {
  let user = await prisma.user.findUnique(
    {
      where: { email }
    }
  );
  return console.log(user), !user || !await import_bcryptjs2.default.compare(password, user.password) ? (console.log("Something went wrong while trying to login"), (0, import_node2.json)({ error: "incorrect login password" }, { status: 400 })) : createUserSesseion(user.id, "/");
}
async function createUserSesseion(userId, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), console.log("now redirecting user to home page"), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId || typeof userId != "number") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return console.log(userId), userId;
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "string" ? null : userId;
}
async function getUser(request) {
  let userId = await getUserId(request);
  if (typeof userId != "number")
    return null;
  try {
    return await prisma.user.findUnique({
      where: { id: userId },
      select: { id: !0, email: !0, profile: !0 }
    });
  } catch {
    throw logout(request);
  }
}
async function getPatients(ownerID) {
  if (typeof ownerID != "number")
    return null;
  console.log("owner id : ", ownerID);
  try {
    console.log("patient found");
    let patient = await prisma.patient.findMany({
      where: { createdBy: ownerID },
      select: { id: !0, firstName: !0, lastName: !0, paymentMethod: !0, reason: !0, createdOn: !0 }
    });
    return console.log("patients : ", patient), patient;
  } catch {
    throw "no one found";
  }
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node2.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

// app/routes/patients.tsx
var import_bs = require("react-icons/bs");

// app/componets/conatinerbody.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function ConatinerBody(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_jsx_dev_runtime3.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "sm:w-full text-left " + props.className, children: props.children }, void 0, !1, {
    fileName: "app/componets/conatinerbody.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/componets/conatinerbody.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// app/componets/container.tsx
var import_ai = require("react-icons/ai");

// app/componets/button.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function Button(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { className: "flex flex-row justify-center place-items-center w-full gap-2 hover:cursor-pointer rounded-sm p-[10] " + props.className, children: props.children }, void 0, !1, {
    fileName: "app/componets/button.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/componets/button.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}
var button_default = Button;

// app/componets/container.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function PatientContainer(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col gap-4 mt-6", children: props.data.map((patient) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col gap-4 p-4 shadow rounded border-[1px] border-gray-400 md:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ConatinerBody, { className: " md:w-[30%]", children: [
      patient.firstName,
      " ",
      patient.lastName
    ] }, void 0, !0, {
      fileName: "app/componets/container.tsx",
      lineNumber: 15,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ConatinerBody, { className: " md:w-[30%]", children: patient.reason }, void 0, !1, {
      fileName: "app/componets/container.tsx",
      lineNumber: 16,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ConatinerBody, { className: " md:w-[30%]", children: patient.paymentMethod }, void 0, !1, {
      fileName: "app/componets/container.tsx",
      lineNumber: 17,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ConatinerBody, { className: " md:w-[30%]", children: patient.createdOn }, void 0, !1, {
      fileName: "app/componets/container.tsx",
      lineNumber: 18,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ConatinerBody, { className: " md:w-[10%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(button_default, { className: "bg-green-500", children: [
      "Edit ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_ai.AiOutlineEdit, { className: "w-5 h-5" }, void 0, !1, {
        fileName: "app/componets/container.tsx",
        lineNumber: 21,
        columnNumber: 34
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/container.tsx",
      lineNumber: 20,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/componets/container.tsx",
      lineNumber: 19,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ConatinerBody, { className: "md:w-[10%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(button_default, { className: "bg-red-500", children: [
      "Delete ",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_ai.AiOutlineDelete, { className: "w-5 h-5" }, void 0, !1, {
        fileName: "app/componets/container.tsx",
        lineNumber: 26,
        columnNumber: 36
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/container.tsx",
      lineNumber: 25,
      columnNumber: 25
    }, this) }, void 0, !1, {
      fileName: "app/componets/container.tsx",
      lineNumber: 24,
      columnNumber: 21
    }, this)
  ] }, patient.id, !0, {
    fileName: "app/componets/container.tsx",
    lineNumber: 14,
    columnNumber: 17
  }, this)) }, void 0, !1, {
    fileName: "app/componets/container.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/componets/newpatient.tsx
var import_react4 = require("@material-tailwind/react"), import_react5 = require("@remix-run/react");

// app/componets/inputbundle.tsx
var import_react3 = require("@material-tailwind/react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function InputBundle(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: props.input_bundle.map((field) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react3.Input, { size: "md", color: "indigo", label: field.label, name: field.name }, void 0, !1, {
    fileName: "app/componets/inputbundle.tsx",
    lineNumber: 10,
    columnNumber: 17
  }, this)) }, void 0, !1, {
    fileName: "app/componets/inputbundle.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var inputbundle_default = InputBundle;

// app/componets/select.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function Select(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("select", { name: props.name, className: "rounded-md border-[1px] border-gray-400 focus:ring-[2px]  focus:ring-indigo-500 h-10 p-2", children: props.select_group.map((reason) => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("option", { value: reason.value, className: "rounded p-4 m-1", children: reason.label }, void 0, !1, {
    fileName: "app/componets/select.tsx",
    lineNumber: 11,
    columnNumber: 17
  }, this)) }, void 0, !1, {
    fileName: "app/componets/select.tsx",
    lineNumber: 8,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/componets/select.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
var select_default = Select;

// app/componets/newpatient.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), text_fields = [
  {
    name: "firstName",
    label: "first name"
  },
  {
    name: "lastName",
    label: "last name"
  },
  {
    name: "phone",
    label: "phone number"
  },
  {
    name: "idNumber",
    label: "id / passport number"
  }
], visit_reason = [
  {
    label: "Consultation",
    value: "consult"
  },
  {
    label: "Check-up",
    value: "check"
  },
  {
    label: "Bill payment",
    value: "bill"
  }
], payment_method = [
  {
    label: "Cash",
    value: "cash"
  },
  {
    label: "Medical AID",
    value: "medicalAid"
  }
];
function NewPatient() {
  let isSubmitting = (0, import_react5.useNavigation)().state === "submitting";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "relative flex justify-center place-items-center w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react4.Card, { color: "transparent", shadow: !1, className: "w-[100vw] mt-4 md:w-[70vw] lg:w-[30vw] p-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react4.Typography, { variant: "h4", className: "text-bold text-gray-900 text-center", children: " Add new patient" }, void 0, !1, {
      fileName: "app/componets/newpatient.tsx",
      lineNumber: 59,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react4.Typography, { className: "text-gray-800 opacity-70 text-center", children: "Fill in the details" }, void 0, !1, {
      fileName: "app/componets/newpatient.tsx",
      lineNumber: 60,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react5.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex flex-col gap-4 mt-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(inputbundle_default, { input_bundle: text_fields }, void 0, !1, {
        fileName: "app/componets/newpatient.tsx",
        lineNumber: 63,
        columnNumber: 20
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react4.Input, { type: "date", label: "date of bith", name: "dob" }, void 0, !1, {
        fileName: "app/componets/newpatient.tsx",
        lineNumber: 64,
        columnNumber: 20
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(select_default, { label: "visit reason", name: "reason", select_group: visit_reason }, void 0, !1, {
        fileName: "app/componets/newpatient.tsx",
        lineNumber: 65,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(select_default, { label: "payment methon", name: "payment", select_group: payment_method }, void 0, !1, {
        fileName: "app/componets/newpatient.tsx",
        lineNumber: 66,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_react4.Button, { disabled: isSubmitting, type: "submit", children: [
        " ",
        isSubmitting ? "Adding..." : "Add Patient"
      ] }, void 0, !0, {
        fileName: "app/componets/newpatient.tsx",
        lineNumber: 67,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/newpatient.tsx",
      lineNumber: 62,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/componets/newpatient.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/componets/newpatient.tsx",
    lineNumber: 58,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/componets/newpatient.tsx",
    lineNumber: 57,
    columnNumber: 5
  }, this);
}
var newpatient_default = NewPatient;

// app/routes/patients.tsx
var import_react10 = require("@remix-run/react"), import_node3 = require("@remix-run/node");

// app/utils/validator.server.ts
var validateEmail = (email) => {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!email.length || !validRegex.test(email))
    return "Please enter a valid email address";
}, validatePassword = (password) => {
  if (password.length < 5)
    return "Please enter a password that is at least 5 characters long";
}, validateName = (name) => {
  if (!name.length)
    return "Please enter a value";
};

// app/componets/navbar.tsx
var import_react6 = require("@material-tailwind/react");

// app/componets/list.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function List(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_jsx_dev_runtime9.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("ul", { className: "flex " + props.className, children: props.children }, void 0, !1, {
    fileName: "app/componets/list.tsx",
    lineNumber: 10,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/componets/list.tsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

// app/componets/linkitem.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function LinkItem(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("li", { className: "flex mb-2 p-2 text-white text-sm hover:cursor-pointer hover:bg-gray-500 rounded hover:text-black", children: props.children }, void 0, !1, {
    fileName: "app/componets/linkitem.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/componets/linkitem.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var linkitem_default = LinkItem;

// app/componets/navbar.tsx
var import_fi = require("react-icons/fi"), import_ai2 = require("react-icons/ai"), import_react7 = require("@remix-run/react"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), data = [
  {
    name: "Dashboard",
    link: "./",
    icon: import_ai2.AiOutlineHome
  },
  {
    name: "Patients",
    link: "/patients",
    icon: import_fi.FiUsers
  }
];
function NavBar() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-row shadow mx-auto h-[60px] bg-[#00091A]", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-row gap-1 w-[10%] justify-start place-items-center md:justify-center md:place-items-center md:w-[40%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react6.Typography, { variant: "h4", className: "text-bold text-gray-400", children: "Octaven" }, void 0, !1, {
      fileName: "app/componets/navbar.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/componets/navbar.tsx",
      lineNumber: 27,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex flex-row gap-1 justify-center w-[90%] place-items-center md:justify-center md:place-items-center md:w-[60%]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(List, { className: "flex-row", children: [
      data.map((links2) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(linkitem_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(links2.icon, { className: "w-5 h-5 mr-2" }, void 0, !1, {
          fileName: "app/componets/navbar.tsx",
          lineNumber: 37,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react7.NavLink, { to: links2.link, children: links2.name }, void 0, !1, {
          fileName: "app/componets/navbar.tsx",
          lineNumber: 38,
          columnNumber: 25
        }, this)
      ] }, links2.name, !0, {
        fileName: "app/componets/navbar.tsx",
        lineNumber: 36,
        columnNumber: 21
      }, this)),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("form", { action: "./logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("button", { className: "bg-transparent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(linkitem_default, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_ai2.AiOutlineLogout, { className: "w-5 h-5 mr-2" }, void 0, !1, {
          fileName: "app/componets/navbar.tsx",
          lineNumber: 45,
          columnNumber: 25
        }, this),
        "log out"
      ] }, void 0, !0, {
        fileName: "app/componets/navbar.tsx",
        lineNumber: 44,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/componets/navbar.tsx",
        lineNumber: 43,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/componets/navbar.tsx",
        lineNumber: 42,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/componets/navbar.tsx",
      lineNumber: 33,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/componets/navbar.tsx",
      lineNumber: 32,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/componets/navbar.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/patients.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
var loader = async ({ request }) => {
  let userId = await requireUserId(request), patient = await getPatients(userId);
  return (0, import_node3.json)({ patient });
};
function Patients() {
  let [open, setOpen] = (0, import_react9.useState)(!1), handleOpen = () => setOpen(!open), { patient } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(NavBar, {}, void 0, !1, {
      fileName: "app/routes/patients.tsx",
      lineNumber: 57,
      columnNumber: 10
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "relative flex flex-col mx-auto m-4 top-20 md:h-auto md:w-[80%] md:m-[0] md:p-8 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "w-2/4 flex flex-col", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react8.Typography, { varient: "h3", className: "text-gray-900 text-bold text-2xl", children: open ? "" : "My patients" }, void 0, !1, {
            fileName: "app/routes/patients.tsx",
            lineNumber: 61,
            columnNumber: 21
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react8.Typography, { varient: "lead", className: "text-gray-900 opacity-80", children: open ? "" : " List of all the patients you captured" }, void 0, !1, {
            fileName: "app/routes/patients.tsx",
            lineNumber: 64,
            columnNumber: 21
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/patients.tsx",
          lineNumber: 60,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "flex justify-end w-2/4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("button", { onClick: handleOpen, className: "flex flex-row bg-blue-800 gap-2 w-[50%] justify-center place-items-center h-8 md:p-4 md:w-[40%] rounded text-white", children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
          "View ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_bs.BsFillEyeFill, {}, void 0, !1, {
            fileName: "app/routes/patients.tsx",
            lineNumber: 70,
            columnNumber: 78
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/patients.tsx",
          lineNumber: 70,
          columnNumber: 71
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
          "Add new ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_bs.BsFillPersonPlusFill, {}, void 0, !1, {
            fileName: "app/routes/patients.tsx",
            lineNumber: 70,
            columnNumber: 43
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/patients.tsx",
          lineNumber: 70,
          columnNumber: 33
        }, this) }, void 0, !1, {
          fileName: "app/routes/patients.tsx",
          lineNumber: 69,
          columnNumber: 21
        }, this) }, void 0, !1, {
          fileName: "app/routes/patients.tsx",
          lineNumber: 68,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/patients.tsx",
        lineNumber: 59,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { children: open ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(newpatient_default, {}, void 0, !1, {
        fileName: "app/routes/patients.tsx",
        lineNumber: 75,
        columnNumber: 63
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(PatientContainer, { data: patient }, void 0, !1, {
        fileName: "app/routes/patients.tsx",
        lineNumber: 75,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/routes/patients.tsx",
        lineNumber: 74,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/patients.tsx",
      lineNumber: 58,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/patients.tsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
var action = async ({ request }) => {
  let form = await request.formData(), firstName = form.get("firstName"), lastName = form.get("lastName"), idNumber = form.get("idNumber"), contact = form.get("phone"), dob = form.get("dob"), reason = form.get("reason"), payment = form.get("payment"), userId = await requireUserId(request), action5 = "register";
  if (typeof firstName != "string" || typeof lastName != "string" || typeof idNumber != "string" || typeof reason != "string" || typeof payment != "string")
    return (0, import_node3.json)(
      {
        error: "invalid form data",
        form: action5
      },
      {
        status: 400
      }
    );
  let errors = {
    firstName: validateName(firstName),
    lastName: validateName(lastName),
    idNumber: validateName(idNumber)
  };
  if (Object.values(errors).some(Boolean))
    return (0, import_node3.json)({
      errors,
      fields: {
        firstName,
        lastName,
        contact,
        idNumber
      }
    });
  switch (action5) {
    case "register": {
      firstName = firstName, lastName = lastName, idNumber = idNumber, dob = dob, contact = contact;
      let dobStr = new Date(dob).toDateString();
      return reason = reason, payment = payment, await registerPatient({ firstName, lastName, idNumber, contact, dobStr, reason, payment, userId });
    }
    default:
      return (0, import_node3.json)({ error: "invalid form data" }, { status: 400 });
  }
};

// app/routes/logout.ts
var logout_exports = {};
__export(logout_exports, {
  action: () => action2,
  loader: () => loader2
});
var import_node4 = require("@remix-run/node");
var action2 = async ({ request }) => logout(request), loader2 = async () => (0, import_node4.redirect)("/");

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader3
});
var import_react11 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), loader3 = async ({ request }) => await requireUserId(request);
function Index() {
  let userId = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(NavBar, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 18,
      columnNumber: 8
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "relative top-20 left-[20%] h-auto w-[80%] p-8 flex flex-col", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h2", { children: [
      "Hello user with id ",
      userId,
      " "
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 19,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  default: () => Signin,
  loader: () => loader4
});

// app/componets/card.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function Card2(props) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col gap-2 bg-white shadow rounded-md p-6", children: props.children }, void 0, !1, {
    fileName: "app/componets/card.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
var card_default = Card2;

// app/routes/login.tsx
var import_react12 = require("@material-tailwind/react"), import_react13 = require("@remix-run/react"), import_node5 = require("@remix-run/node");
var import_react14 = require("react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), loader4 = async ({ request }) => await getUser(request) ? (0, import_node5.redirect)("/") : null;
function Signin() {
  let actionData = (0, import_react13.useActionData)(), firstLoad = (0, import_react14.useRef)(!0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "absolute flex justify-center place-items-center  h-full w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(card_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Typography, { variant: "h4", className: "text-gray-900", children: "Log in" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 26,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Typography, { className: "text-gray-900 font-normal", children: "fill in the details to login" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 27,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react13.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "m-4 flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Input, { label: "email", name: "email" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 31,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Input, { type: "password", label: "password", name: "password" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 32,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("input", { type: "hidden", name: "__action", value: "register" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 33,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Button, { type: "submit", children: "login" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 34,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_react12.Typography, { children: [
        "Dont have and account ? ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("a", { href: "/join", className: "text-blue-400", children: "Create account" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 36,
          columnNumber: 49
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 35,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 29,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 28,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 24,
    columnNumber: 5
  }, this);
}
var action3 = async ({ request }) => {
  let form = await request.formData(), action5 = "login", email = form.get("email"), password = form.get("password");
  if (typeof email != "string" || typeof password != "string")
    return (0, import_node5.json)(
      {
        error: "invalid form data",
        form: action5
      },
      {
        status: 400
      }
    );
  let errors = {
    email: validateEmail(email),
    password: validatePassword(password)
  };
  if (Object.values(errors).some(Boolean))
    return (0, import_node5.json)({
      errors,
      fields: {
        email,
        password
      },
      form: action5
    });
  switch (action5) {
    case "login":
      return await login({ email, password });
    default:
      return console.log("invalid login"), (0, import_node5.json)({ error: "invalid form data" }, { status: 400 });
  }
};

// app/routes/join.tsx
var join_exports = {};
__export(join_exports, {
  action: () => action4,
  default: () => join
});
var import_react15 = require("@material-tailwind/react"), import_react16 = require("@remix-run/react"), import_node6 = require("@remix-run/node");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function join() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "absolute flex justify-center place-items-center  h-full w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(card_default, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Typography, { variant: "h4", className: "text-gray-900", children: "Create and account" }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 16,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Typography, { className: "text-gray-900 font-normal", children: "fill in the details to sign-up" }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 17,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react16.Form, { method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "m-4 flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Input, { label: "full name", name: "fullName", required: !0 }, void 0, !1, {
        fileName: "app/routes/join.tsx",
        lineNumber: 21,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Input, { label: "email", name: "email", required: !0 }, void 0, !1, {
        fileName: "app/routes/join.tsx",
        lineNumber: 22,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Input, { type: "password", label: "password", name: "password", required: !0 }, void 0, !1, {
        fileName: "app/routes/join.tsx",
        lineNumber: 23,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("input", { type: "hidden", name: "__action", value: "register" }, void 0, !1, {
        fileName: "app/routes/join.tsx",
        lineNumber: 24,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Button, { type: "submit", children: "login" }, void 0, !1, {
        fileName: "app/routes/join.tsx",
        lineNumber: 25,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react15.Typography, { children: [
        "Already have an account ? ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("a", { href: "/login", className: "text-blue-400", children: "Login" }, void 0, !1, {
          fileName: "app/routes/join.tsx",
          lineNumber: 27,
          columnNumber: 51
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/join.tsx",
        lineNumber: 26,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/join.tsx",
      lineNumber: 20,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/routes/join.tsx",
      lineNumber: 18,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/join.tsx",
    lineNumber: 15,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/join.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
var action4 = async ({ request }) => {
  let form = await request.formData(), email = form.get("email"), password = form.get("password"), fullName = form.get("fullName"), action5 = "register";
  if (typeof email != "string" || typeof password != "string")
    return (0, import_node6.json)(
      {
        error: "invalid form data",
        form: action5
      },
      {
        status: 400
      }
    );
  let errors = {
    email: validateEmail(email),
    password: validatePassword(password)
  };
  if (Object.values(errors).some(Boolean))
    return (0, import_node6.json)({
      errors,
      fields: {
        email,
        password
      }
    });
  switch (action5) {
    case "register":
      return fullName = fullName, await register({ email, password, fullName });
    default:
      return (0, import_node6.json)({ error: "invalid form data" }, { status: 400 });
  }
};

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-AIP6T7QQ.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-4FXQRTTB.js", "/build/_shared/chunk-OKXP6DZS.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MU7CU4DP.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-JMYR5PRS.js", imports: ["/build/_shared/chunk-AOAVXNEV.js", "/build/_shared/chunk-342ARKZ2.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/join": { id: "routes/join", parentId: "root", path: "join", index: void 0, caseSensitive: void 0, module: "/build/routes/join-GPPGFXR3.js", imports: ["/build/_shared/chunk-RJOGSRNZ.js", "/build/_shared/chunk-QA6CUXUH.js", "/build/_shared/chunk-342ARKZ2.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-BVY4UAKE.js", imports: ["/build/_shared/chunk-RJOGSRNZ.js", "/build/_shared/chunk-QA6CUXUH.js", "/build/_shared/chunk-342ARKZ2.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-MMH6Q26W.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/patients": { id: "routes/patients", parentId: "root", path: "patients", index: void 0, caseSensitive: void 0, module: "/build/routes/patients-7Z4TLM7I.js", imports: ["/build/_shared/chunk-AOAVXNEV.js", "/build/_shared/chunk-QA6CUXUH.js", "/build/_shared/chunk-342ARKZ2.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "46de6a7f", hmr: { runtime: "/build/_shared\\chunk-OKXP6DZS.js", timestamp: 1690421187419 }, url: "/build/manifest-46DE6A7F.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/patients": {
    id: "routes/patients",
    parentId: "root",
    path: "patients",
    index: void 0,
    caseSensitive: void 0,
    module: patients_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/join": {
    id: "routes/join",
    parentId: "root",
    path: "join",
    index: void 0,
    caseSensitive: void 0,
    module: join_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
