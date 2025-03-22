import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/globalStyles";
import { Layout } from "./components/layout";
import { About, Home, NotFound, Shop } from "./pages";

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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
