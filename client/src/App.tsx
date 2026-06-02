import "./App.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { routeTree } from "./routes/routes";
import { createRouter, RouterProvider } from "@tanstack/react-router";

const router = createRouter({ routeTree });

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
