var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
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
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
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
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
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

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App
});
import { Link, Outlet, Scripts, ScrollRestoration, LiveReload } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { children: [
    /* @__PURE__ */ jsxDEV2("head", {}, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 6,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: /* @__PURE__ */ jsxDEV2("div", { style: { display: "flex" }, children: [
      /* @__PURE__ */ jsxDEV2("div", { style: { display: "flex", flexDirection: "column", margin: "2%" }, children: [
        /* @__PURE__ */ jsxDEV2(Link, { to: "/", children: "Home page" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 11,
          columnNumber: 25
        }, this),
        /* @__PURE__ */ jsxDEV2(Link, { to: "/screensettings", children: "Login" }, void 0, !1, {
          fileName: "app/root.jsx",
          lineNumber: 12,
          columnNumber: 25
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 10,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 14,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 15,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV2("div", { children: /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 17,
        columnNumber: 25
      }, this) }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 16,
        columnNumber: 21
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 19,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 9,
      columnNumber: 17
    }, this) }, void 0, !1, {
      fileName: "app/root.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

// app/routes/screensettings.tsx
var screensettings_exports = {};
__export(screensettings_exports, {
  action: () => action,
  default: () => Screen
});
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

// app/styled/components.js
import { styled } from "styled-components";
var TextInput = styled.input`
    width: 200px;
    height: 30px;
    margin: 2%;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: large;
    &:hover{
        background: aliceblue;
    }
  
`;

// app/routes/screensettings.tsx
import { Fragment, jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var action = async ({ request }) => {
  let body = await request.formData(), todo = {
    email: body.get("email"),
    password: body.get("password")
  };
  return console.log(todo), redirect("/screensettings");
};
function Screen() {
  return /* @__PURE__ */ jsxDEV3(Fragment, { children: [
    /* @__PURE__ */ jsxDEV3("h1", { children: "Simple Login Form" }, void 0, !1, {
      fileName: "app/routes/screensettings.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3("hr", {}, void 0, !1, {
      fileName: "app/routes/screensettings.tsx",
      lineNumber: 19,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV3(Form, { method: "post", children: [
      /* @__PURE__ */ jsxDEV3(TextInput, { type: "email", name: "email", placeholder: "Email" }, void 0, !1, {
        fileName: "app/routes/screensettings.tsx",
        lineNumber: 22,
        columnNumber: 13
      }, this),
      " ",
      /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
        fileName: "app/routes/screensettings.tsx",
        lineNumber: 22,
        columnNumber: 73
      }, this),
      /* @__PURE__ */ jsxDEV3(TextInput, { type: "text", name: "password", placeholder: "password" }, void 0, !1, {
        fileName: "app/routes/screensettings.tsx",
        lineNumber: 23,
        columnNumber: 13
      }, this),
      " ",
      /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
        fileName: "app/routes/screensettings.tsx",
        lineNumber: 23,
        columnNumber: 77
      }, this),
      /* @__PURE__ */ jsxDEV3("button", { type: "submit", children: "Submit" }, void 0, !1, {
        fileName: "app/routes/screensettings.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/screensettings.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/screensettings.tsx",
    lineNumber: 17,
    columnNumber: 12
  }, this);
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Home
});
import { Fragment as Fragment2, jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function Home() {
  return /* @__PURE__ */ jsxDEV4(Fragment2, { children: "Home Page" }, void 0, !1, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 2,
    columnNumber: 12
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-DFMYTCG7.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-KKE4P7C3.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-3C64YBZT.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-6NWHWMP5.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-XYYRODPY.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/screensettings": { id: "routes/screensettings", parentId: "root", path: "screensettings", index: void 0, caseSensitive: void 0, module: "/build/routes/screensettings-YGVAKG4O.js", imports: void 0, hasAction: !0, hasLoader: !1, hasErrorBoundary: !1 } }, version: "abe67e78", hmr: { runtime: "/build/_shared/chunk-3C64YBZT.js", timestamp: 1695732624513 }, url: "/build/manifest-ABE67E78.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = {}, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/screensettings": {
    id: "routes/screensettings",
    parentId: "root",
    path: "screensettings",
    index: void 0,
    caseSensitive: void 0,
    module: screensettings_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
