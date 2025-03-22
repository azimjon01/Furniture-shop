import Footer from "../footer";
import Container from "@/components/ui/Container";
import Header from "../header";
import { LayoutWrapper, MainContent } from "./Layout.styles";
import { LayoutProps } from "./Layout.types";

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
