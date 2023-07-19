import type { ActionArgs } from '@remix-run/node';
import { json } from '@remix-run/node';
import { Link, useActionData } from '@remix-run/react';

import { db } from '../utils/db.server';
import { createUserSession, register } from '../utils/session.server';

import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group';
import { signInRedirect } from '../utils/sign-in-redirect';

type Entry = string | null;

interface Entries {
  username: Entry;
  email: Entry;
  password: Entry;
  confirmPassword: Entry;
  birthday: Entry | Date;
  sex: Entry;
  height: Entry | number;
  weight: Entry | number;
  terms: Entry;
}

function checkEntries(entries: any): Entries {
  let failedEntries: Entries = {
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
    birthday: null,
    sex: null,
    height: null,
    weight: null,
    terms: null,
  };

  if (entries.username.length < 3)
    failedEntries.username = 'Username must be at least 3 characters.';

  if (entries.password.length < 8)
    failedEntries.password = 'Password must be at least 8 characters.';

  if (entries.confirmPassword !== entries.password)
    failedEntries.confirmPassword = 'Passwords must match.';

  if (entries.birthday) {
    const birthday = new Date(entries.birthday);
    const today = new Date();
    if (today.getFullYear() - birthday.getFullYear() < 16)
      failedEntries.birthday = 'You have to be over 16 years old.';
  } else failedEntries.birthday = 'You have to enter your day of birth.';

  if (!entries.sex) failedEntries.sex = 'Invalid sex.';

  if (!entries.height) failedEntries.height = 'Invalid height.';

  if (!entries.weight) failedEntries.weight = 'Invalid weight.';

  if (!entries.terms) failedEntries.terms = 'You have to accept the terms.';

  return failedEntries;
}

function badRequest(data: { failedEntries: Entries; userEntries: Entries }) {
  return json(data, { status: 400 });
}

export const loader = async (data: ActionArgs) => {
  return await signInRedirect(data);
};

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  let userEntries: any = Object.fromEntries(form.entries());
  const failedEntries = checkEntries(userEntries);

  if (Object.values(failedEntries).some(Boolean))
    return badRequest({ failedEntries, userEntries });

  const userExists = await db.user.findFirst({
    where: {
      email: userEntries.email,
    },
  });

  if (userExists) {
    failedEntries.email = `User with ${userEntries.email} email already exists`;
    return badRequest({
      failedEntries,
      userEntries,
    });
  }

  userEntries.birthday = new Date(userEntries.birthday);
  userEntries.height = parseInt(userEntries.height);
  userEntries.weight = parseInt(userEntries.weight);
  const user = await register(userEntries);
  if (!user)
    return badRequest({
      failedEntries,
      userEntries,
    });

  return createUserSession(user.id, '/dashboard');
};

const Register = () => {
  const actionData = useActionData();

  return (
    <div className="flex justify-center items-center mb-5">
      <section className="grid gap-4 max-w-screen-lg w-11/12 bg-slate-100 px-2 py-6 rounded-md">
        <h1 className="text-center">Create Your Account</h1>
        <form method="POST" className="grid gap-3 justify-items-center mx-10">
          <div className="flex flex-col space-y-2 w-full">
            <Label className="text-lg" htmlFor="username">
              Username
            </Label>
            <Input
              name="username"
              type="text"
              placeholder="Username"
              defaultValue={actionData?.userEntries?.username}
            ></Input>
            {actionData?.failedEntries?.username && (
              <p className="text-red-600">
                {actionData?.failedEntries?.username}
              </p>
            )}
            <Label className="text-lg" htmlFor="email">
              Email
            </Label>
            <Input
              name="email"
              type="email"
              placeholder="Email Address"
              defaultValue={actionData?.userEntries?.email}
            ></Input>
            {actionData?.failedEntries?.email && (
              <p className="text-red-600">{actionData?.failedEntries?.email}</p>
            )}
            <Label className="text-lg" htmlFor="password">
              Password
            </Label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              defaultValue={actionData?.userEntries?.password}
            ></Input>
            {actionData?.failedEntries?.password && (
              <p className="text-red-600">
                {actionData?.failedEntries?.password}
              </p>
            )}
            <Label className="text-lg" htmlFor="confirmPassword">
              Confirm Password
            </Label>
            <Input
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              defaultValue={actionData?.userEntries?.confirmPassword}
            ></Input>
            {actionData?.failedEntries?.confirmPassword && (
              <p className="text-red-600">
                {actionData?.failedEntries?.confirmPassword}
              </p>
            )}
          </div>
          <div className="flex my-2 w-full ml-2">
            <Label className="text-lg mr-5">Sex</Label>
            <RadioGroup
              name="sex"
              className="flex"
              defaultValue={actionData?.userEntries?.sex}
            >
              <div className="flex items-center">
                <RadioGroupItem value="male" id="1" className="mr-1" />
                <Label htmlFor="male">Male</Label>
              </div>
              <div className="flex items-center">
                <RadioGroupItem value="female" className="mr-1" />
                <Label htmlFor="female">Female</Label>
              </div>
            </RadioGroup>
          </div>
          {actionData?.failedEntries?.sex && (
            <p className="w-full text-red-600 ml-2 ">
              {actionData?.failedEntries?.sex}
            </p>
          )}
          <div className="flex flex-col items-start w-full px-1">
            <Label className="text-lg mb-1">Birthday</Label>
            <Input
              name="birthday"
              type="date"
              defaultValue={actionData?.userEntries?.birthday}
            ></Input>
            {actionData?.failedEntries?.birthday && (
              <p className="text-red-600">
                {actionData?.failedEntries?.birthday}
              </p>
            )}
          </div>

          <div className="flex-col w-full space-y-2">
            <div className="flex justify-start items-center px-1">
              <Label className="text-lg mr-2">Height</Label>
              <Input
                className="w-20"
                type="number"
                name="height"
                defaultValue={
                  actionData?.userEntries?.height
                    ? actionData?.userEntries?.height
                    : 150
                }
                min={0}
                max={250}
              />
              <Label className="ml-1">cm</Label>
            </div>
            {actionData?.failedEntries?.height && (
              <p className="text-red-600">
                {actionData?.failedEntries?.height}
              </p>
            )}
            <div className="flex items-center px-1">
              <Label className="text-lg mr-2">Weight</Label>
              <Input
                className="w-20"
                type="number"
                name="weight"
                defaultValue={
                  actionData?.userEntries?.height
                    ? actionData?.userEntries?.height
                    : 50
                }
                min={0}
                max={300}
              />
              <Label className="ml-1">kg</Label>
            </div>
            {actionData?.failedEntries?.weight && (
              <p className="text-red-600">
                {actionData?.failedEntries?.weight}
              </p>
            )}
          </div>
          <div className="flex">
            <label
              htmlFor="terms"
              className="text-base max-w-sm font-medium text-center"
            >
              <span className="mr-2">
                <Checkbox id="terms" name="terms" />
              </span>
              You confirm that you are over 16 years of age and agree to the
              terms and conditions.
            </label>
          </div>
          {actionData?.failedEntries?.terms && (
            <p className="text-red-600">{actionData?.failedEntries?.terms}</p>
          )}
          <Button type="submit">Sign Up</Button>
        </form>
        <div className="flex flex-col items-center">
          <p>Already have an account?</p>
          <Button variant="link">
            <Link to="/login">Log in</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};
export default Register;
