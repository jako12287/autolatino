import { lazy } from "react";

const Layout = lazy(() => import("../components/layout/index.jsx"));
const HomeView = lazy(() => import("../views/home"));
const AboutView = lazy(() => import("../views/about"));
const PersonalAdviceView = lazy(() => import("../views/personalAdvice"));
const StoreView = lazy(() => import("../views/store"));
/* Admin routes */
const AdminLogin = lazy(()=> import("../admin/views/login.jsx"))
const Layoutadmin = lazy(()=> import("../components/admincomponenets/layout"))
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
    id: "adminBanner",
    path: "/admin/banners",
    element: (
      <Layoutadmin>

        <h1>Banner del admin</h1>
      </Layoutadmin>
    ),
  },{
    id: "adminBlog",
    path: "/admin/blog",
    element: (
      <Layoutadmin>

        <h1>blog del admin</h1>
      </Layoutadmin>
    ),
  },{
    id: "adminFaq",
    path: "/admin/faq",
    element: (
      <Layoutadmin>

        <h1>faq del admin</h1>
      </Layoutadmin>
    ),
  },{
    id: "adminTestimonials",
    path: "/admin/testimonials",
    element: (
      <Layoutadmin>

        <h1>testimoniasls del admin</h1>
      </Layoutadmin>
    ),
  },
  {
    id: "adminStore",
    path: "/admin/store",
    element: (
      <Layoutadmin>

        <h1>store del admin</h1>
      </Layoutadmin>
    ),
  },
];
