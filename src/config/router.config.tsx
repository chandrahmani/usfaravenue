import { Route } from "react-router";
import { ROUTE } from "../types";
import About from "../views/About";
import { Home, Settings } from "../views/Dashboard";
import Landing from "../views/Landing/Landing";
import Contact from "../views/Contact";
import Profile from "../views/Dashboard/Profile";
import Properties from "@/components/Properties/Properties";

export const configureRoute = (routes: ROUTE[]) => {
  return routes.map((route: ROUTE) => (
    <Route
      key={route.name}
      // add index prop conditionally
      {...(route.index && { index: true })}
      path={route.path}
      element={route.element}
    />
  ));
};

// main routes
export const MAIN_ROUTES: ROUTE[] = [
  {
    path: "/",
    title: "Home",
    index: true,
    name: "landing",
    element: <Landing />,
  },
  {
    path: "/properties",
    title: "Properties",
    name: "properties",
    element: <Properties />,
  },
  {
    path: "/about",
    title: "About",
    name: "about",
    element: <About />,
  },
  {
    path: "/contact",
    title: "Contact Us",
    name: "contact",
    element: <Contact />,
  },
];

// sub route - dashboard/
export const DASHBOARD_NESTED_ROUTES: ROUTE[] = [
  {
    path: "profile",
    title: "My Profile",
    name: "profile",
    element: <Profile />,
  },
];
