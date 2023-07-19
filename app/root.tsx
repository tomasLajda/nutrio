import { type LinksFunction, type LoaderArgs } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import { getUser } from './utils/session.server';

import NavBar from './components/nav-bar/nav-bar';

import styles from './tailwind.css';
export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: styles },
  { rel: 'icon', href: '/img/icon.svg', type: 'image/svg' },
];

export const loader = async ({ request }: LoaderArgs) => {
  const user = await getUser(request);
  const data = {
    user,
  };
  return data;
};

export default function App() {
  const { user } = useLoaderData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {user ? <></> : <NavBar />}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
