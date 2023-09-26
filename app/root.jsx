import { Meta, Link, Outlet, Scripts, ScrollRestoration, LiveReload} from "@remix-run/react";

export default function App() {
    return (
        <html>
            <head>
            </head>
            <body>
                <div style={{ display: "flex" }}>
                    <div style={{display: "flex", flexDirection:"column", margin: "2%"}}>
                        <Link to="/">Home page</Link>
                        <Link to="/screensettings">Login</Link>
                    </div>
                    <ScrollRestoration />
                    <Scripts />
                    <div>
                        <Outlet />
                    </div>
                    <LiveReload />
                </div>
            </body>
        </html>
    )
}