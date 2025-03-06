import { lazy } from "react";

const Layout = lazy(() => import("../components/layout"));
const HomeView = lazy(() => import("../views/home"));
const AboutView = lazy(() => import("../views/about"));
const PersonalAdviceView = lazy(() => import("../views/personalAdvice"));
const StoreView = lazy(() => import("../views/store"));

export const routes = [
  {
    id: "home",
    path: "/",
    element: (
      <Layout>
        <HomeView />
      </Layout>
    ),
  },
  {
    id: "about",
    path: "/about",
    element: (
      <Layout>
        <AboutView />
      </Layout>
    ),
  },
  {
    id: "personalAdvice",
    path: "/personal-advice",
    element: (
      <Layout>
        <PersonalAdviceView />
      </Layout>
    ),
  },
  {
    id: "store",
    path: "/store",
    element: (
      <Layout>
        <StoreView />
      </Layout>
    ),
  },
  {
    id: "noFound",
    path: "*",
    element: (
      <Layout>
        <h1>404</h1>
      </Layout>
    ),
  },
];
