import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Global } from "@emotion/react";
import GlobalStyles from "@/styles/global";
import { Layout } from "@/components/layout";
import {
  About,
  Badroom,
  Chairs,
  Home,
  LivingRoom,
  NotFound,
  Office,
  Shop,
  Sofas,
  Tables,
} from "@/pages";

const AppRoutes = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout>
                  <Home />
                </Layout>
              </>
            }
          />
          <Route
            path="/shop"
            element={
              <Layout>
                <Shop />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/chairs"
            element={
              <Layout>
                <Chairs />
              </Layout>
            }
          />
          <Route
            path="/tables"
            element={
              <Layout>
                <Tables />
              </Layout>
            }
          />
          <Route
            path="/sofas"
            element={
              <Layout>
                <Sofas />
              </Layout>
            }
          />
          <Route
            path="/livingroom"
            element={
              <Layout>
                <LivingRoom />
              </Layout>
            }
          />
          <Route
            path="/badroom"
            element={
              <Layout>
                <Badroom />
              </Layout>
            }
          />
          <Route
            path="/office"
            element={
              <Layout>
                <Office />
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
