import { ReactNode } from "react";
import styled from "@emotion/styled";
import Footer from "./Footer";
import Container from "../ui/Container";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const LayoutWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  margin: "0 auto",
  backgroundColor: "#FCF8F3",
});

const MainContent = styled.main({
  flex: 1,
  display: "flex",
  justifyContent: "center",
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <LayoutWrapper>
        <Header />
        <MainContent>
          <Container>{children}</Container>
        </MainContent>
        <Footer />
      </LayoutWrapper>
    </>
  );
};

export default Layout;
