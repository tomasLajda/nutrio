import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import type { List } from '../../types/types';
import Logo from '../logo/logo';
import SocialIcon from '../social-icon/social-icon';
import HomeFooterList from './home-footer-list';

const icons = [
  {
    icon: <Instagram className="text-black" size={32} />,
    link: 'https://www.instagram.com',
  },
  {
    icon: <Facebook className="text-black" size={32} />,
    link: 'https://www.facebook.com',
  },
  {
    icon: <Twitter className="text-black" size={32} />,
    link: 'https://www.twitter.com',
  },
  {
    icon: <Youtube className="text-black" size={32} />,
    link: 'https://www.youtube.com',
  },
];

export const lists: List[] = [
  {
    title: 'The Company',
    links: [
      { label: 'About us', path: '/about' },
      { label: 'Jobs', path: '/' },
      { label: 'Support', path: '/' },
    ],
  },
  {
    title: 'The Product',
    links: [
      { label: 'Individuals', path: '/' },
      { label: 'Privacy', path: '/' },
      { label: 'Terms', path: '/' },
    ],
  },
];

function HomeFooter() {
  const date = new Date();

  const year = date.getFullYear();

  return (
    <footer className="flex justify-center bg-gray-950 text-gray-50 py-8">
      <section className="max-w-screen-lg w-11/12 grid gap-4 mx-8">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
          <div className="relative right-4 md:right-0">
            <Logo />
          </div>
          {lists.map((list, i) => (
            <HomeFooterList key={i} props={list} />
          ))}

          <div className="flex justify-between max-w-xs border-t-2 pt-5">
            {icons.map((icon, i) => (
              <SocialIcon key={i} {...icon} />
            ))}
          </div>
        </div>
        <div>
          <p>Copyright © {year} </p>
          <p>All rights reserved</p>
        </div>
      </section>
    </footer>
  );
}
export default HomeFooter;
