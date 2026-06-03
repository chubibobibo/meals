import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { routeTree } from "./routes/routes";
import { createRouter, RouterProvider } from "@tanstack/react-router";

import { NotFoundPageError } from "./utils";

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: NotFoundPageError,
});

function App() {
  return (
    <>
      <MantineProvider>
        <RouterProvider router={router} />
      </MantineProvider>
    </>
  );
}

export default App;
