import { type LinksFunction } from '@remix-run/node';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';

import Logo from '../public/img/apple-icon.png';
import { Button } from './components/ui/button';

import styles from './tailwind.css';
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <nav className="flex justify-between items-center max-w-screen-lg py-5">
          <div className="flex items-center flex-grow">
            <img src={Logo} alt="" />
            <h1 className=" border-b text-3xl font-semibold tracking-tight transition-colors first:mt-0">
              Nutrio
            </h1>
          </div>
          <div>
            <Button className="mr-2">
              <Link to="/register">Register</Link>
            </Button>
            <Button className="mr-2">
              <Link to="/login">Login</Link>
            </Button>
          </div>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
