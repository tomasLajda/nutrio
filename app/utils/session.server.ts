import { createCookieSessionStorage, redirect } from '@remix-run/node';
import bcrypt from 'bcrypt';
import { db } from './db.server';

type User = {
  username: string;
  email: string;
  password: string;
};

const saltRounds = 10;

export const register = async ({ username, email, password }: User) => {
  const hash = await bcrypt.hash(password, saltRounds);
  return db.user.create({
    data: {
      username,
      email,
      password: hash,
    },
  });
};

export const login = async ({ email, password }: User) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) return null;

  const match = await bcrypt.compare(password, user.password);

  if (!match) return null;

  return user;
};

const cookieStorage = createCookieSessionStorage({
  cookie: {
    name: 'nutrio_session',
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 60,
    httpOnly: true,
  },
});

export const createUserSession = async (userId: string, url: string) => {
  const session = await cookieStorage.getSession();
  session.set('userId', userId);
  return redirect(url, {
    headers: {
      'Set-Cookie': await cookieStorage.commitSession(session),
    },
  });
};

const getUserSession = (request: Request) => {
  return cookieStorage.getSession(request.headers.get('cookie'));
};

export const getUser = async (request: Request) => {
  const session = await getUserSession(request);
  const userId = session.get('userId');

  if (!userId) return null;

  try {
    return await db.user.findUnique({
      where: {
        id: userId,
      },
    });
  } catch (error) {
    return null;
  }
};

export const logout = async (request: Request) => {
  const session = await getUserSession(request);

  return redirect('/logout', {
    headers: {
      'Set-Cookie': await cookieStorage.destroySession(session),
    },
  });
};
