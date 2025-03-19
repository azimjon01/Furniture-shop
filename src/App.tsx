import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Layout>
                  <HomePage />
                </Layout>
              </>
            }
          />
          <Route
            path="/shop"
            element={
              <Layout>
                <ShopPage />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <AboutPage />
              </Layout>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
