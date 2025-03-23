import { lazy } from "react";

const Layout = lazy(() => import("../components/layout/index.jsx"));
const HomeView = lazy(() => import("../views/home"));
const AboutView = lazy(() => import("../views/about"));
const PersonalAdviceView = lazy(() => import("../views/personalAdvice"));
const StoreView = lazy(() => import("../views/store"));
/* Admin routes */
const AdminLogin = lazy(()=> import("../admin/views/login.jsx"))

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
  {
    id: "admin",
    path: "/admin-login",
    element: (
        <AdminLogin/>
    ),
  },
  {
    id: "adminHome",
    path: "/admin-home",
    element: (
        <h1>Home del admin</h1>
    ),
  },
];
