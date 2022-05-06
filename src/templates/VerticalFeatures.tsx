import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';

const { about } = AppConfig.menu;

const VerticalFeatures = () => (
  <Section
    title="We strongly believe in..."
    description="good teams can make great projects succeed."
    id={about.targetId}
  >
    <VerticalFeatureRow
      title="Transparency"
      description="We connect all the dots so... You can make informed decisions and we can create better solutions."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Commitment"
      description="Web development is part of our backbone. We know the value of a high quality code and optimised resources."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Innovation"
      description="Our team is constantly looking for tech leads in love with technology. We learn from each project while providing value."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
