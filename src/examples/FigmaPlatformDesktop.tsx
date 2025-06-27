import {
  Header,
  Hero,
  Footer,
  PricingCard,
  pricingPlanToPricingCardProps,
} from "../ui/compositions";
import { Section, Flex, FlexItem } from "../ui/layout";
import {
  TextContentTitle,
  TextContentHeading,
  Accordion,
  AccordionItem,
  Navigation,
  NavigationPill,
} from "../ui/primitives";
import { usePricing } from "../data";
import { useMediaQuery } from "hooks";

function PricingSection() {
  const { monthlyPlans, currentPlan, setCurrentPlan } = usePricing();
  const { isMobile } = useMediaQuery();
  const padding = isMobile ? "600" : "1200";
  const gap = isMobile ? "600" : "1200";
  const gapCards = isMobile ? "600" : "1200";
  const size = isMobile ? "small" : "large";

  if (!monthlyPlans) {
    return null;
  }

  return (
    <Section padding={padding}>
      <Flex container direction="column" gap={gap}>
        <Navigation direction="row">
          <NavigationPill isSelected>Monthly</NavigationPill>
          <NavigationPill>Yearly</NavigationPill>
          <NavigationPill>Link</NavigationPill>
        </Navigation>
        <Flex container direction="row" gap={gapCards}>
          {monthlyPlans.map((pricing, i) => {
            const props = pricingPlanToPricingCardProps(
              pricing,
              i,
              currentPlan,
              setCurrentPlan
            );
            return <PricingCard key={pricing.sku} size={size} {...props} />;
          })}
        </Flex>
      </Flex>
    </Section>
  );
}

export default function PlatformDesktop() {
  return (
    <div
      className="bg-[#ffffff] box-border content-stretch flex flex-col items-start justify-start p-0 relative size-full"
      data-name="Platform=Desktop"
      id="node-175_5828"
    >
      <Header />
      <Hero variant="subtle">
        <TextContentTitle align="center" title="Title" subtitle="Subtitle" />
      </Hero>
      <PricingSection />
      <Section padding="1600">
        <Flex container alignSecondary="center" direction="column" gap="1200">
          <TextContentHeading
            align="center"
            heading="Heading"
            subheading="Subheading"
          />
          <FlexItem>
            <Flex container type="third" alignPrimary="center">
              <FlexItem size="major">
                <Accordion>
                  <AccordionItem
                    title="Title"
                    children="Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."
                  />
                  <AccordionItem
                    title="Title"
                    children="Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."
                  />
                  <AccordionItem
                    title="Title"
                    children="Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."
                  />
                  <AccordionItem
                    title="Title"
                    children="Answer the frequently asked question in a simple sentence, a longish paragraph,or even in a list."
                  />
                  <AccordionItem
                    title="Title"
                    children="Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list."
                  />
                </Accordion>
              </FlexItem>
            </Flex>
          </FlexItem>
        </Flex>
      </Section>
      <Footer />
    </div>
  );
} 