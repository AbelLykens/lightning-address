import styled from 'styled-components';

import { media } from '../utils';

const PathsModule = styled.div`
  display: flex;
  background: #fff;
  align-items: center;
  flex-direction: column;
  padding: 60px 0 60px 0;
  justify-content: center;

  ${media.tablet`
    min-height: 700px;
    padding: 120px 0 120px 0;
  `}
`;

const PathsTitle = styled.div`
  margin: 0 auto;
  font-size: 30px;
  padding: 0 30px;
  max-width: 500px;
  font-weight: 800;
  line-height: 1.3;
  text-align: center;
  letter-spacing: -0.5px;

  ${media.tablet`
    padding: 0;
    font-size: 44px;
    letter-spacing: -1px;
  `}
`;

const PathsDescription = styled.div`
  color: #666666;
  font-size: 16px;
  line-height: 1.4;
  padding: 0 30px;
  font-weight: 400;
  max-width: 800px;
  text-align: center;
  letter-spacing: -1px;
  margin: 20px auto 0 auto;

  ${media.tablet`
    padding: 0;
    font-size: 20px;
    line-height: 1.6;
  `}
`;

const PathsCardGrid = styled.div`
  display: flex;
  flex-direction: column;

  ${media.tablet`
    display: grid;
    grid-row-gap: 10px;
    grid-column-gap: 20px;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(3, 1fr);
  `}
`;

const PathsCard = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  min-height: 300px;
  border-radius: 7px;
  align-items: center;
  background: #f3f3f3;
  flex-direction: column;
  margin: 30px auto 0 auto;
  border: 1px solid #eaeaea;
  transition: box-shadow .2s ease;

  &:hover {
    border: 1px solid #ccc;
    transition: box-shadow .2s ease;
    box-shadow: 0 8px 30px rgba(0,0,0,0.12);
  }

  ${media.tablet`
    width: 250px;
    margin: 50px auto 0 auto;
  `}
`;

const PathsCardTitle = styled.div`
  color: #111;
  margin: 12px 0;
  line-height: 1.4;
  font-weight: 600;
  text-align: center;
  font-size: 1.125em;
`;

const PathsCardImage = styled.img`
  max-width: 100%;
`;

const PathsCardDescription = styled.div`
  color: #111;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 400;
  text-align: center;
`;

const PathsCardButton = styled.a`
  height: 2.81rem;
  cursor: pointer;
  padding: 0 3.5rem;
  margin: 25px 0 0 0;
  border-radius: 7px;
  line-height: 2.8rem;
  text-decoration: none;
  color: ${({ isSecondary }) => isSecondary ? '#696969' : '#fff' };
  background-color: ${({ isSecondary }) => isSecondary ? '#fff' : '#0070f3' };
  box-shadow: ${({ isSecondary }) => isSecondary ? '0 4px 14px 0 rgb(0 0 0 / 10%)' : '0 4px 14px 0 rgb(0 118 255 / 39%)' };
  ;

  &:hover {
    background-color: ${({ isSecondary }) => isSecondary ? 'rgba(255,255,255,0.9)' : 'rgba(0,118,255,0.9)' };
    box-shadow: ${({ isSecondary }) => isSecondary ? '0 6px 20px rgb(93 93 93 / 23%)' : '0 6px 20px rgb(0 118 255 / 23%)' };
  }
`;

const PathsIntro = styled.p`
  color: #f38800;
  font-size: 14px;
  line-height: 1.6;
  max-width: 900px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 7px;
  margin: 0 auto 20px auto;
  background: rgba(255,97,0,0.1);

  ${media.tablet`
    font-size: 18px;
  `}
`;

const IMPLEMENTATIONS = [
  {
    title: 'Apps & Services',
    description: 'Create an account with one of the apps that support Lightning Address and get started immediately. Just like how Gmail is your email server, the app handles all of the payment infrastructure and is the easiest way to get a Lightning Address.',
    image: '/images/data4.svg',
    linkText: 'Get Started',
    link: '#providers',
    isSecondary: false
  },
  {
    title: 'Bridge Servers',
    description: 'If you already run a Bitcoin Lightning Network node and want a quick plug-n-play solution to getting your Lightning Address, this option is for you. Simply point some domain DNS settings to the Bridge Server, and you will be setup in minutes.',
    image: '/images/data3.svg',
    linkText: 'Quick Setup',
    link: 'https://github.com/andrerfneves/lightning-address/blob/master/BRIDGE.md',
    isSecondary: true
  },
  {
    title: 'Self-Hosted',
    description: 'Lightning Address is just a set of simple protocol instructions, you can roll everything on your own. Whether you are a service provider looking to support Lightning Addresses or a user that wants to host your own setup, this option is for you.',
    image: '/images/data2.svg',
    linkText: 'Read More',
    link: 'https://github.com/andrerfneves/lightning-address/blob/master/DIY.md',
    isSecondary: true
  },
];

export const Paths = () => (
  <PathsModule>
    <PathsIntro>Developers & Shadowy Coders</PathsIntro>
    <PathsTitle>How do Lightning Addresses work?</PathsTitle>
    <PathsDescription>You can choose to sign up for a service just like an email server (Gmail or Outlook), which will take care of all the payments behind-the-scenes for you. You can roll your own server that handles the connection between your Lightning Address and your Lightning node. Or you can rely on a `Bridge` server that provides an easy plug-n-play solution.</PathsDescription>
    <PathsCardGrid>
      {(IMPLEMENTATIONS || []).map((benefit) => (
        <PathsCard key={benefit.title}>
          <PathsCardImage src={benefit.image} alt={benefit.title} />
          <PathsCardTitle>
            {benefit.title}
          </PathsCardTitle>
          <PathsCardDescription>
            {benefit.description}
          </PathsCardDescription>
          <PathsCardButton target="_blank" href={benefit.link} isSecondary={benefit.isSecondary}>
            {benefit.linkText}
          </PathsCardButton>
        </PathsCard>
      ))}
    </PathsCardGrid>
  </PathsModule>
)
