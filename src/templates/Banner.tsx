import Link from 'next/link';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { AppConfig } from '../utils/AppConfig';

const { careers } = AppConfig.menu;

const Banner = () => (
  <Section yPadding="pt-20 pb-32" id={careers.targetId}>
    <HeroOneButton
      button={
        <Link href={`mailto:${AppConfig.contactEmail}`}>
          <a>
            <Button xl>Join our team</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
