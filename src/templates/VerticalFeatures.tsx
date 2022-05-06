import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';

const { about } = AppConfig.menu;

const VerticalFeatures = () => (
  <Section
    title="We strongly believe..."
    description="good teams makes great projects succeed."
    id={about.targetId}
  >
    <VerticalFeatureRow
      title="Transparency"
      description="We connect all the dots for you so... You can make informed decisions and we can create better solutions for your needs."
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Commitment to Quality"
      description="Web development is part of our backbone and we know the value of a high quality code, good practices and optimised resources."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Innovation &amp; Growth"
      description="Our team is constantly looking for tech leads on different areas in love with technology and new challenges. We learn from each project while providing value at the same time."
      image="/assets/images/feature3.svg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
