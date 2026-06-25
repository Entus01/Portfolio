import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { pages } from "../content/pages.js";
import NotFound from "../pages/NotFound/NotFound.jsx";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <App />,
            children: pages.map((page) => ({
                path: page.path === "/" ? undefined : page.path,
                index: page.path === "/",
                element: <page.component />,
            })),
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]
);