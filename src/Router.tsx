import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/router-components/AppLayout";
import Recipes from "./components/router-components/Recipes";
import Welcome from "./components/router-components/Welcome";
import ShowDetailsRecipe from "./components/ShowDetailsRecipe";


export const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <>main error</>,
    children: [
      {
        path: "recipes",
        element: <Recipes />,
        children: [
          {
            path: ":id",
            element: <ShowDetailsRecipe/>,
          },
        ],
      },
      {
        path: "welcome",
        element: <Welcome />,
      },
    ],
  },
]);

// שימוש ב-RouterProvider
export default function App() {
  return <RouterProvider router={myRouter} />;
}

