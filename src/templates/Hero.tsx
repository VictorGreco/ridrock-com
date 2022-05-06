import Link from 'next/link';
import Image from 'next/image';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AppConfig } from '../utils/AppConfig';
import { Logo } from './Logo';

const { contact, about } = AppConfig.menu;

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href={contact.link}>
            <a>{contact.title}</a>
          </Link>
        </li>
        <li>
          <Link href={about.link}>
            <a>{about.title}</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32" id={contact.targetId}>
      <HeroOneButton
        title={
          <>
            {'We break hard problems into\n'}
            <span className="text-primary-500">rocket solutions </span>
            <Image
              src="/assets/images/rocket_1f680.png"
              width={45}
              height={45}
            />
          </>
        }
        description="Tailormade web appplications for every need."
        button={
          <Link href={`mailto:${AppConfig.contactEmail}`}>
            <a>
              <Button xl>Tell us about your project</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
