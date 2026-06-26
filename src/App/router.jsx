import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { pages } from "../content/pages.js";
import NotFound from "../pages/NotFound/NotFound.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: pages.map((page) => {
            const Component = page.component;

            if (page.path === "/") {
                return {
                    index: true,
                    element: <Component />,
                };
            }

            return {
                path: page.path.slice(1),
                element: <Component />,
            }
        })
    },
    {
        path: "*",
        element: <NotFound />,
    },
]);