import { redirect, type LoaderArgs } from '@remix-run/node';
import { getUser } from './session.server';

export const signInRedirect = async ({ request }: LoaderArgs) => {
  const user = await getUser(request);

  if (user) return redirect('/dashboard');
};
