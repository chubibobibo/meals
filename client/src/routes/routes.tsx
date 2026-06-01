import { createRootRoute, createRoute } from "@tanstack/react-router";
import {
  HomePageLayout,
  DashboardLayout,
  LandingPage,
  IndexPage,
} from "../utils";

const rootRoute = createRootRoute({
  component: HomePageLayout,
});

const LandingPageRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: LandingPage,
  path: "/",
});

const DashboardLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  component: DashboardLayout,
  path: "dashboard",
});

const IndexPageRoute = createRoute({
  getParentRoute: () => DashboardLayoutRoute,
  component: IndexPage,
  path: "index",
});

export const routeTree = rootRoute.addChildren([
  LandingPageRoute,
  DashboardLayoutRoute,
  IndexPageRoute,
]);
