// import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "~/styles/tailwind.css"
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useLocation } from "@remix-run/react";
import NavBar from "./componets/navbar";
import Sidenav from "./componets/sidenav";
import SideNavContainer from "./componets/sidenavcontainer";


export default function App() {

  const location = useLocation(); // React Hook

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {/* <header className={location.pathname === "/login" || location.pathname === "/join" ? "hidden" : "flex"}>
          <NavBar />
          <Sidenav>
            <SideNavContainer/>
          </Sidenav>
        </header> */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];