import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { routeTree } from "./routes/routes";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import { NotFoundPageError, ErrorPage } from "./utils";
import { ToastContainer, Zoom } from "react-toastify";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";

// if (result.error) {
//   throw result.error;
// }

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPageError,
  defaultErrorComponent: ErrorPage,
});

function App() {
  return (
    <>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
      <ToastContainer position='top-center' transition={Zoom} closeOnClick />
    </>
  );
}

export default App;
