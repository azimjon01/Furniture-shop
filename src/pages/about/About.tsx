import {
  Button,
  CTASection,
  Feature,
  FeaturesGrid,
  FeatureTitle,
  HeroSection,
  HeroTitle,
  MemberImage,
  Section,
  TeamGrid,
  TeamMember,
  Text,
  Title,
} from "./About.styles";

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <HeroTitle>About Funiro</HeroTitle>
      </HeroSection>

      {/* Our Story */}
      <Section>
        <Title>Our Story</Title>
        <Text>
          Funiro was founded in 2020 with a vision to provide premium and
          stylish furniture for modern homes. Our passion for design and quality
          has made us one of the leading furniture brands.
        </Text>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <Title>Why Choose Us?</Title>
        <FeaturesGrid>
          <Feature>
            <FeatureTitle>High-Quality Materials</FeatureTitle>
            <Text>
              We use the best materials to ensure durability and comfort.
            </Text>
          </Feature>
          <Feature>
            <FeatureTitle>Modern Designs</FeatureTitle>
            <Text>
              Our furniture is designed to match contemporary home interiors.
            </Text>
          </Feature>
          <Feature>
            <FeatureTitle>Customer Satisfaction</FeatureTitle>
            <Text>
              We prioritize our customers' needs and ensure top-notch service.
            </Text>
          </Feature>
        </FeaturesGrid>
      </Section>

      {/* Meet Our Team */}
      <Section>
        <Title>Meet Our Team</Title>
        <TeamGrid>
          <TeamMember>
            <MemberImage
              src="/assets/images/funiro-galery/funiro-galery-one.png"
              alt="Team Member"
            />
            <Text>John Doe - CEO</Text>
          </TeamMember>
          <TeamMember>
            <MemberImage
              src="/assets/images/funiro-galery/funiro-galery-two.png"
              alt="Team Member"
            />
            <Text>Jane Smith - Designer</Text>
          </TeamMember>
          <TeamMember>
            <MemberImage
              src="/assets/images/funiro-galery/funiro-galery-three.png"
              alt="Team Member"
            />
            <Text>Mark Wilson - Marketing</Text>
          </TeamMember>
        </TeamGrid>
      </Section>

      {/* Call to Action */}
      <CTASection>
        <Title>Ready to Elevate Your Home?</Title>
        <Text>Explore our collection and bring style to your space.</Text>
        <Button>Shop Now</Button>
      </CTASection>
    </>
  );
};

export default About;
