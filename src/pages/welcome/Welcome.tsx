import { Header } from "@/components/layout";
import { WelcomePageCard, WelcomePageContainer } from "./Welcome.styles";
import { Slider } from "@/components/ui";

const WelcomePage = () => {
  return (
    <WelcomePageContainer>
      <WelcomePageCard />
      <Header />
      <Slider />
    </WelcomePageContainer>
  );
};

export default WelcomePage;
